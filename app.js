const STORAGE_KEY = 'kebbi-flow-app-state-v1';

const defaultState = {
  currentMode: 'care',
  currentChannel: 0,
  modes: {
    care: {
      label: '介護版',
      stakeholders: {
        manufacturer: 'NUWA Robotics',
        distributor: '丸文',
        solution: 'Edutex / レスター / 連携パートナー',
        channel: 'ジェネラス直販',
        endUser: '介護施設・介護事業者',
      },
      assumptions: {
        unitsPerSet: 1,
        leaseYears: 3,
        leaseAnnualRate: 0.03,
        subscriptionYears: 3,
      },
      channels: [
        {
          name: 'ジェネラス直販',
          stageDeltas: {
            manufacturer: {
              initial: [{ label: 'NB3本体卸価格', value: 168000 }],
              monthly: [{ label: '月額サービス費', value: 2450 }],
            },
            distributor: {
              initial: [{ label: '丸文マージン', value: 33600 }],
              monthly: [{ label: '丸文ランニング収益', value: 490 }],
            },
            solution: {
              initial: [{ label: 'キッティング', value: 20000 }],
              monthly: [
                { label: '介護向けアプリ/運用費', value: 2600 },
                { label: '運用粗利', value: 520 },
              ],
            },
            channel: {
              initial: [{ label: '販売マージン', value: 66480 }],
              monthly: [{ label: 'チャネル運用マージン', value: 1212 }],
            },
            endUser: {
              initial: [{ label: '提案価格調整', value: 9920 }],
              monthly: [{ label: '導入後伴走・現場運用費', value: 42528 }],
            },
          },
          proposal: {
            purchasePrice: 298000,
            setupFee: 0,
            monthlyPrice: 49800,
            subscriptionMonthly: 49800,
          },
        },
        {
          name: '販売代理店経由',
          stageDeltas: {
            manufacturer: {
              initial: [{ label: 'NB3本体卸価格', value: 168000 }],
              monthly: [{ label: '月額サービス費', value: 2450 }],
            },
            distributor: {
              initial: [{ label: '丸文マージン', value: 33600 }],
              monthly: [{ label: '丸文ランニング収益', value: 490 }],
            },
            solution: {
              initial: [{ label: 'キッティング', value: 20000 }],
              monthly: [
                { label: '介護向けアプリ/運用費', value: 2600 },
                { label: '運用粗利', value: 520 },
              ],
            },
            channel: {
              initial: [{ label: '代理店マージン', value: 66480 }],
              monthly: [{ label: '代理店月額マージン', value: 1212 }],
            },
            endUser: {
              initial: [{ label: '提案価格調整', value: 9920 }],
              monthly: [{ label: '導入後伴走・現場運用費', value: 42528 }],
            },
          },
          proposal: {
            purchasePrice: 298000,
            setupFee: 0,
            monthlyPrice: 49800,
            subscriptionMonthly: 49800,
          },
        },
      ],
    },
    education: {
      label: '教育版',
      stakeholders: {
        manufacturer: 'NUWA Robotics',
        distributor: '丸文',
        solution: 'Edutex / レスター / コギト / 連携パートナー',
        channel: '学研グループ本部',
        endUser: '教室FC・学校・学習者',
      },
      assumptions: {
        unitsPerSet: 2,
        leaseYears: 3,
        leaseAnnualRate: 0.03,
        subscriptionYears: 3,
      },
      channels: [
        {
          name: '学研グループ本部',
          stageDeltas: {
            manufacturer: {
              initial: [{ label: 'NB3本体卸価格', value: 168000 }],
              monthly: [{ label: '月額サービス費', value: 2450 }],
            },
            distributor: {
              initial: [{ label: '丸文マージン', value: 33600 }],
              monthly: [{ label: '丸文ランニング収益', value: 490 }],
            },
            solution: {
              initial: [
                { label: 'キッティング', value: 20000 },
                { label: '初期設定・教材実装', value: 49900 },
              ],
              monthly: [
                { label: '教育向けアプリ/運用費', value: 2600 },
                { label: '運用粗利', value: 520 },
              ],
            },
            channel: {
              initial: [{ label: '本部マージン', value: 81450 }],
              monthly: [{ label: '本部月額マージン', value: 2840 }],
            },
            endUser: {
              initial: [{ label: '提案価格調整', value: 0 }],
              monthly: [{ label: '提案価格調整', value: 0 }],
            },
          },
          proposal: {
            purchasePrice: 352950,
            setupFee: 49900,
            monthlyPrice: 8900,
            subscriptionMonthly: 8900,
          },
        },
        {
          name: '外部販売代理店',
          stageDeltas: {
            manufacturer: {
              initial: [{ label: 'NB3本体卸価格', value: 168000 }],
              monthly: [{ label: '月額サービス費', value: 2450 }],
            },
            distributor: {
              initial: [{ label: '丸文マージン', value: 33600 }],
              monthly: [{ label: '丸文ランニング収益', value: 490 }],
            },
            solution: {
              initial: [
                { label: 'キッティング', value: 20000 },
                { label: '初期設定・教材実装', value: 49900 },
              ],
              monthly: [
                { label: '教育向けアプリ/運用費', value: 2600 },
                { label: '運用粗利', value: 520 },
              ],
            },
            channel: {
              initial: [{ label: '代理店マージン', value: 81450 }],
              monthly: [{ label: '代理店月額マージン', value: 0 }],
            },
            endUser: {
              initial: [{ label: '提案価格調整', value: 0 }],
              monthly: [{ label: '提案価格調整', value: 0 }],
            },
          },
          proposal: {
            purchasePrice: 352950,
            setupFee: 49900,
            monthlyPrice: 6060,
            subscriptionMonthly: 6060,
          },
        },
      ],
    },
  },
};

let state = loadState();

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return deepClone(defaultState);
  try {
    return Object.assign(deepClone(defaultState), JSON.parse(raw));
  } catch (error) {
    return deepClone(defaultState);
  }
}

function saveState(show = true) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (show) showToast('設定を保存しました');
}

function resetState() {
  state = deepClone(defaultState);
  render();
  saveState(false);
  showToast('初期値に戻しました');
}

function yen(value) {
  const safe = Number(value || 0);
  return `¥${safe.toLocaleString('ja-JP')}`;
}

function sumItems(items) {
  return (items || []).reduce((acc, item) => acc + Number(item.value || 0), 0);
}

function getCurrentMode() {
  return state.modes[state.currentMode];
}

function getCurrentChannel() {
  const mode = getCurrentMode();
  return mode.channels[state.currentChannel] || mode.channels[0];
}

function computeStageRows() {
  const mode = getCurrentMode();
  const channel = getCurrentChannel();
  const rows = [
    { key: 'manufacturer', label: mode.stakeholders.manufacturer, role: 'メーカー' },
    { key: 'distributor', label: mode.stakeholders.distributor, role: '一次流通 / 独占・販売窓口' },
    { key: 'solution', label: mode.stakeholders.solution, role: 'ソリューション実装 / アプリ・運用' },
    { key: 'channel', label: channel.name, role: 'チャネル / 販売主体' },
    { key: 'endUser', label: mode.stakeholders.endUser, role: 'エンドユーザー価格' },
  ];

  let cumulativeInitial = 0;
  let cumulativeMonthly = 0;

  return rows.map((row) => {
    const delta = channel.stageDeltas[row.key];
    const addInitial = sumItems(delta.initial);
    const addMonthly = sumItems(delta.monthly);
    cumulativeInitial += addInitial;
    cumulativeMonthly += addMonthly;
    return {
      ...row,
      addInitial,
      addMonthly,
      cumulativeInitial,
      cumulativeMonthly,
      delta,
    };
  });
}

function computeProposal() {
  const mode = getCurrentMode();
  const channel = getCurrentChannel();
  const proposal = channel.proposal;
  const leaseYears = Number(mode.assumptions.leaseYears || 3);
  const leaseAnnualRate = Number(mode.assumptions.leaseAnnualRate || 0);
  const subscriptionYears = Number(mode.assumptions.subscriptionYears || leaseYears);

  const annualRunning = Number(proposal.monthlyPrice || 0) * 12;
  const threeYearTotal = Number(proposal.purchasePrice || 0) + annualRunning * leaseYears;
  const monthlyLease = (Number(proposal.purchasePrice || 0) / (leaseYears * 12) + Number(proposal.monthlyPrice || 0)) * (1 + leaseAnnualRate);
  const annualLease = monthlyLease * 12;
  const totalLease = annualLease * leaseYears;
  const annualSubscription = Number(proposal.subscriptionMonthly || 0) * 12;
  const totalSubscription = annualSubscription * subscriptionYears;

  return {
    annualRunning,
    threeYearTotal,
    monthlyLease,
    annualLease,
    totalLease,
    annualSubscription,
    totalSubscription,
  };
}

function renderModeTabs() {
  const wrap = document.getElementById('modeTabs');
  wrap.innerHTML = '';
  Object.entries(state.modes).forEach(([key, mode]) => {
    const btn = document.createElement('button');
    btn.textContent = mode.label;
    if (state.currentMode === key) btn.classList.add('active');
    btn.addEventListener('click', () => {
      state.currentMode = key;
      state.currentChannel = 0;
      render();
    });
    wrap.appendChild(btn);
  });
}

function renderChannelTabs() {
  const wrap = document.getElementById('channelTabs');
  const mode = getCurrentMode();
  wrap.innerHTML = '';
  mode.channels.forEach((channel, idx) => {
    const btn = document.createElement('button');
    btn.textContent = channel.name;
    if (state.currentChannel === idx) btn.classList.add('active');
    btn.addEventListener('click', () => {
      state.currentChannel = idx;
      mode.stakeholders.channel = channel.name;
      render();
    });
    wrap.appendChild(btn);
  });
}

function renderStakeholderForm() {
  const mode = getCurrentMode();
  const wrap = document.getElementById('stakeholderForm');
  const fields = [
    ['manufacturer', 'メーカー'],
    ['distributor', 'ディストリビューター'],
    ['solution', 'ソリューション主体'],
    ['channel', 'チャネル表示名'],
    ['endUser', 'エンドユーザー'],
  ];

  wrap.innerHTML = '';
  fields.forEach(([key, label]) => {
    const field = document.createElement('div');
    field.className = 'field';
    field.innerHTML = `<label>${label}</label><input class="text-input" type="text" value="${mode.stakeholders[key] || ''}">`;
    const input = field.querySelector('input');
    input.addEventListener('input', (e) => {
      mode.stakeholders[key] = e.target.value;
      renderSummaryAndTablesOnly();
      saveState(false);
    });
    wrap.appendChild(field);
  });
}

function renderAssumptionForm() {
  const mode = getCurrentMode();
  const wrap = document.getElementById('assumptionForm');
  const fields = [
    ['unitsPerSet', '1セット台数'],
    ['leaseYears', 'リース契約年数'],
    ['leaseAnnualRate', 'リース料率（年, 0.03 = 3%）'],
    ['subscriptionYears', 'サブスク契約年数'],
  ];
  wrap.innerHTML = '';

  fields.forEach(([key, label]) => {
    const field = document.createElement('div');
    field.className = 'field';
    field.innerHTML = `<label>${label}</label><input class="number-input" type="number" step="0.01" value="${mode.assumptions[key] ?? 0}">`;
    const input = field.querySelector('input');
    input.addEventListener('input', (e) => {
      mode.assumptions[key] = Number(e.target.value || 0);
      renderSummaryAndTablesOnly();
      saveState(false);
    });
    wrap.appendChild(field);
  });
}

function renderSummary() {
  const rows = computeStageRows();
  const proposal = computeProposal();
  const cards = [
    {
      label: 'チャネル渡し価格',
      value: yen(rows[3].cumulativeInitial),
      sub: `月額 ${yen(rows[3].cumulativeMonthly)}`,
    },
    {
      label: '提案売切り価格',
      value: yen(getCurrentChannel().proposal.purchasePrice),
      sub: `月額 ${yen(getCurrentChannel().proposal.monthlyPrice)}`,
    },
    {
      label: '3年総額',
      value: yen(proposal.threeYearTotal),
      sub: '売切り + 月額ランニング',
    },
    {
      label: '年間サブスク総額',
      value: yen(proposal.annualSubscription),
      sub: `契約総額 ${yen(proposal.totalSubscription)}`,
    },
  ];

  const wrap = document.getElementById('summaryCards');
  wrap.innerHTML = cards.map((card) => `
    <article class="summary-card">
      <div class="label">${card.label}</div>
      <div class="value">${card.value}</div>
      <div class="sub">${card.sub}</div>
    </article>
  `).join('');
}

function renderFlow() {
  const rows = computeStageRows();
  const wrap = document.getElementById('flowView');
  const parts = [];

  rows.forEach((row, idx) => {
    parts.push(`
      <article class="flow-node">
        <div class="stage-tag">Stage ${idx + 1}</div>
        <h3>${row.label}</h3>
        <div class="role">${row.role}</div>
        <div class="money">
          <div>加算・設定初期額: <strong>${yen(row.addInitial)}</strong></div>
          <div>加算・設定月額: <strong>${yen(row.addMonthly)}</strong></div>
          <div>累積初期額: <strong>${yen(row.cumulativeInitial)}</strong></div>
          <div>累積月額: <strong>${yen(row.cumulativeMonthly)}</strong></div>
        </div>
      </article>
    `);

    if (idx < rows.length - 1) {
      parts.push(`
        <div class="arrow-link">
          <div class="arrow"></div>
          <strong>${yen(rows[idx + 1].cumulativeInitial)}</strong>
          <small>月額 ${yen(rows[idx + 1].cumulativeMonthly)}</small>
        </div>
      `);
    }
  });

  wrap.innerHTML = `<div class="flow-track">${parts.join('')}</div>`;
}

function renderStageTable() {
  const rows = computeStageRows();
  const html = `
    <div class="table-wrap">
      <table class="price-table">
        <thead>
          <tr>
            <th>ステージ</th>
            <th>役割</th>
            <th>加算初期額</th>
            <th>加算月額</th>
            <th>累積初期額</th>
            <th>累積月額</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((row) => `
            <tr>
              <td><strong>${row.label}</strong></td>
              <td>${row.role}</td>
              <td>${yen(row.addInitial)}</td>
              <td>${yen(row.addMonthly)}</td>
              <td>${yen(row.cumulativeInitial)}</td>
              <td>${yen(row.cumulativeMonthly)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
  document.getElementById('stageTableWrap').innerHTML = html;
}

function renderProposal() {
  const proposal = getCurrentChannel().proposal;
  const calc = computeProposal();
  document.getElementById('proposalView').innerHTML = `
    <div class="proposal-grid">
      <article class="proposal-card">
        <h3>売切りモデル</h3>
        <div class="price-line"><span class="muted">本体購入金額</span><strong>${yen(proposal.purchasePrice)}</strong></div>
        <div class="price-line"><span class="muted">初期費用</span><strong>${yen(proposal.setupFee)}</strong></div>
        <div class="price-line"><span class="muted">月額ランニング</span><strong>${yen(proposal.monthlyPrice)}</strong></div>
        <div class="price-line"><span class="muted">年間ランニング</span><strong>${yen(calc.annualRunning)}</strong></div>
        <div class="price-line"><span class="muted">${getCurrentMode().assumptions.leaseYears}年総額</span><strong>${yen(calc.threeYearTotal)}</strong></div>
      </article>
      <article class="proposal-card">
        <h3>リースモデル</h3>
        <div class="price-line"><span class="muted">月額リース料</span><strong>${yen(calc.monthlyLease)}</strong></div>
        <div class="price-line"><span class="muted">年間リース料</span><strong>${yen(calc.annualLease)}</strong></div>
        <div class="price-line"><span class="muted">契約期間総額</span><strong>${yen(calc.totalLease)}</strong></div>
      </article>
      <article class="proposal-card">
        <h3>サブスクリプション</h3>
        <div class="price-line"><span class="muted">月額</span><strong>${yen(proposal.subscriptionMonthly)}</strong></div>
        <div class="price-line"><span class="muted">年間総額</span><strong>${yen(calc.annualSubscription)}</strong></div>
        <div class="price-line"><span class="muted">契約期間総額</span><strong>${yen(calc.totalSubscription)}</strong></div>
      </article>
    </div>
  `;
}

function createInputField(label, value, onInput, type = 'text', step = '1') {
  const field = document.createElement('div');
  field.className = 'field';
  const inputClass = type === 'number' ? 'number-input' : 'text-input';
  field.innerHTML = `<label>${label}</label><input class="${inputClass}" type="${type}" step="${step}" value="${value}">`;
  field.querySelector('input').addEventListener('input', onInput);
  return field;
}

function renderLayerEditors() {
  const mode = getCurrentMode();
  const channel = getCurrentChannel();
  const wrap = document.getElementById('layerEditors');
  wrap.innerHTML = '';

  const sections = [
    ['manufacturer', `${mode.stakeholders.manufacturer} / メーカー設定`, 'NB3本体やベース月額など、原価の起点となるレイヤーです。'],
    ['distributor', `${mode.stakeholders.distributor} / 流通設定`, '独占販売権・商流窓口としてのマージンや月額収益を設定します。'],
    ['solution', `${mode.stakeholders.solution} / ソリューション設定`, 'アプリ、キッティング、教材、運用粗利などを反映します。'],
    ['channel', `${channel.name} / チャネル設定`, '本部・代理店・直販チャネルのマージンや運用費を反映します。'],
    ['endUser', `${mode.stakeholders.endUser} / 提案価格調整`, '市場受容性に合わせた最終提案価格の調整分です。'],
  ];

  sections.forEach(([key, title, desc]) => {
    const editor = document.createElement('section');
    editor.className = 'editor-card';
    editor.innerHTML = `
      <div class="editor-head">
        <div>
          <h3>${title}</h3>
          <p>${desc}</p>
        </div>
        <button class="btn add-line">行を追加</button>
      </div>
      <div class="editor-subgrid">
        <div>
          <h4>初期費用レイヤー</h4>
          <div class="initial-list"></div>
        </div>
        <div>
          <h4>月額レイヤー</h4>
          <div class="monthly-list"></div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="form-grid proposal-params"></div>
    `;

    const initialList = editor.querySelector('.initial-list');
    const monthlyList = editor.querySelector('.monthly-list');
    renderItemList(initialList, channel.stageDeltas[key].initial, () => {
      renderSummaryAndTablesOnly();
      saveState(false);
    });
    renderItemList(monthlyList, channel.stageDeltas[key].monthly, () => {
      renderSummaryAndTablesOnly();
      saveState(false);
    });

    editor.querySelector('.add-line').addEventListener('click', () => {
      channel.stageDeltas[key].initial.push({ label: '新しい名目', value: 0 });
      renderLayerEditors();
      renderSummaryAndTablesOnly();
      saveState(false);
    });

    const params = editor.querySelector('.proposal-params');
    if (key === 'endUser') {
      params.appendChild(createInputField('提案売切り価格', channel.proposal.purchasePrice, (e) => {
        channel.proposal.purchasePrice = Number(e.target.value || 0);
        renderSummaryAndTablesOnly();
        saveState(false);
      }, 'number', '100'));
      params.appendChild(createInputField('初期費用', channel.proposal.setupFee, (e) => {
        channel.proposal.setupFee = Number(e.target.value || 0);
        renderSummaryAndTablesOnly();
        saveState(false);
      }, 'number', '100'));
      params.appendChild(createInputField('提案月額', channel.proposal.monthlyPrice, (e) => {
        channel.proposal.monthlyPrice = Number(e.target.value || 0);
        renderSummaryAndTablesOnly();
        saveState(false);
      }, 'number', '100'));
      params.appendChild(createInputField('サブスク月額', channel.proposal.subscriptionMonthly, (e) => {
        channel.proposal.subscriptionMonthly = Number(e.target.value || 0);
        renderSummaryAndTablesOnly();
        saveState(false);
      }, 'number', '100'));
    } else {
      params.innerHTML = '<span class="mini-note">このレイヤーは左の行編集から名目と金額を直接更新してください。</span>';
    }

    wrap.appendChild(editor);
  });
}

function renderItemList(container, list, onChange) {
  container.innerHTML = '';
  list.forEach((item, index) => {
    const tpl = document.getElementById('itemRowTemplate');
    const node = tpl.content.firstElementChild.cloneNode(true);
    node.querySelector('.item-label').value = item.label;
    node.querySelector('.item-value').value = item.value;
    node.querySelector('.item-label').addEventListener('input', (e) => {
      item.label = e.target.value;
      onChange();
    });
    node.querySelector('.item-value').addEventListener('input', (e) => {
      item.value = Number(e.target.value || 0);
      onChange();
    });
    node.querySelector('.delete-row').addEventListener('click', () => {
      list.splice(index, 1);
      renderLayerEditors();
      onChange();
    });
    container.appendChild(node);
  });

  const addMonthly = document.createElement('button');
  addMonthly.type = 'button';
  addMonthly.className = 'btn ghost';
  addMonthly.textContent = '行を追加';
  addMonthly.addEventListener('click', () => {
    list.push({ label: '新しい名目', value: 0 });
    renderLayerEditors();
    onChange();
  });
  container.appendChild(addMonthly);
}

function renderSummaryAndTablesOnly() {
  renderSummary();
  renderFlow();
  renderStageTable();
  renderProposal();
}

function render() {
  renderModeTabs();
  renderChannelTabs();
  renderStakeholderForm();
  renderAssumptionForm();
  renderSummaryAndTablesOnly();
  renderLayerEditors();
}

function exportJson() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `kebbi-flow-${state.currentMode}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importJson(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      state = parsed;
      render();
      saveState(false);
      showToast('JSONを読み込みました');
    } catch (error) {
      showToast('JSONの読み込みに失敗しました');
    }
  };
  reader.readAsText(file);
}

function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2200);
}

document.getElementById('saveBtn').addEventListener('click', () => saveState(true));
document.getElementById('resetBtn').addEventListener('click', resetState);
document.getElementById('exportBtn').addEventListener('click', exportJson);
document.getElementById('importInput').addEventListener('change', (e) => {
  const file = e.target.files?.[0];
  if (file) importJson(file);
});

render();
