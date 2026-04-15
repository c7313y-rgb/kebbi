# kebbi 商流・価格試算ダッシュボード

介護版と教育版の2モードを切り替えながら、商流とステークホルダー別の価格設定を試算するための静的Webアプリです。`index.html` を開くだけで動作し、GitHub Pages でそのまま公開できます。

## 主な機能

- 介護版 / 教育版のモード切替
- 直販 / 代理店 / 本部などのチャネル切替
- ステークホルダー名の編集
- 初期費用 / 月額費用の名目・金額編集
- 売切り / リース / サブスクの金額比較
- ローカル保存
- JSON書き出し / JSON読込

## ファイル構成

```text
kebbi-flow-app/
├─ index.html
├─ styles.css
├─ app.js
├─ .nojekyll
└─ README.md
```

## ローカルで確認する方法

### もっとも簡単な方法

1. `index.html` をブラウザで開く
2. そのまま動作確認する

### ローカルサーバーで確認する方法

Python が入っている場合は、フォルダで以下を実行します。

```bash
python3 -m http.server 8000
```

その後、ブラウザで `http://localhost:8000` を開きます。

## GitHub Pages で公開する手順

1. GitHub で新しいリポジトリを作成
2. このフォルダ内のファイルをすべてアップロード
3. リポジトリの **Settings** を開く
4. 左メニューの **Pages** を開く
5. **Build and deployment** で以下を選択
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
6. 保存後、数十秒から数分待つ
7. 公開URLが表示されたらアクセス

## 更新方法

1. `index.html` / `styles.css` / `app.js` を修正
2. GitHub の同じリポジトリに上書きコミット
3. しばらく待つと同じURLで自動更新

## 今後の拡張候補

- Excel / CSV 取り込み
- 印刷用レポート出力
- ステークホルダー別の利益率表示
- 案件ごとの保存スロット管理
- グラフ可視化の追加
