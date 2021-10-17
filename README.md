# Nuxt 3 メモ

## インストール＆立ち上げ

[公式ドキュメント](https://v3.nuxtjs.org/getting-started/installation)

```bash
npx nuxi init nuxt3-app

cd nuxt3-app

yarn install ## or npm install

yarn dev ## or npm run dev
```

- 上記コマンドを叩くと nuxt の starter テンプレートがローカルにインストールされる（割と爆速で終わる）
- yarn install が別途必要なのがちょっと手間
- デフォルトで TS 化されているのはすごい助かる
- TODO: IE11 でも動くか要確認

## Fetch 系

- `useAsyncData`/`useFetch` は import せずに使える
- `useAsyncData`は nuxt 内部で作った API、`useFetch`は外部 API 用
  - pick オプションで必要最低限のプロパティまで持ってこれる個人的にはかなり便利
- `useAsyncData`で nuxt 内部で定義した API の返却値の型が自動的に認識される
  - interface などでこっちで型定義する必要がまったくない＆コード補完もスムーズ
