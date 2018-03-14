# GitHub Pagesの開発とかに関するメモ

- アンダースコアで始まるファイルは除外される
- なら `_tools` に簡易サーバ立てるDockerfileとか置いちゃおう！
- ついでにそれ関連のメモもREADMEに書いて残そう！

## 更新作業

Docker越しにHTTPサーバーを立てて動作チェックします。  
ChromeのWebServerクライアントも楽でいいんですけどね。

```
$ cd yamacraft.github.io
$ docker-compose -f _tools/docker-compose.yml up --build -d
```

to: http://localhost:9004
