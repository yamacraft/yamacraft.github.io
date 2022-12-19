山田航空ネットワークフロント
=======================

yamacraftの情報をまとめたWebサイトです。

http://yamacraft.github.io/

## 構成

- [HUGO](https://gohugo.io/)
- GitHub Pages
- GitHub Actions

## 作業用メモ

### コンテンツ追加

```sh
$ hugo new <filename>.md
```

`content/` 以下に記事ページが作成される。

### ローカルサーバー立ち上げ

```sh
$ hugo server --ignoreCache --minify -D
```

http://localhost:1313/ で表示を確認できるようになる。

下書きを表示したくない場合は、 `-D` を削除。
