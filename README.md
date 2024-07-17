# App

web ページを画面サイズ別にテストできるアプリです。

```
yarn dev
```

# セキュリティリスクに関して
このプロジェクトではiframeを利用しています。
該当箇所はこのあたりです。sandboxの設定によってリクエスト先のwebページを操作してもなるべく影響がないようにしています。
https://github.com/weweweok/web-page-rendering-test/blob/f6e77810be47d107112ffcf01b27d72f4ba45741/src/app/components/ScreenSimulator.tsx#L89-L96
