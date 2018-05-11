# GitHub Pagesの開発とかに関するメモ

- アンダースコアで始まるファイルは除外される
- なら `_tools` に簡易サーバ立てるDockerfileとか置いちゃおう！
- ついでにそれ関連のメモもREADMEに書いて残そう！

## 更新作業

Docker越しにHTTPサーバーを立てて動作チェックします。  
ChromeのWebServerクライアントも楽でいいんですけどね。

```
$ cd yamacraft.github.io
$ docker build -t github_pages_local -f _tools/Dockerfile .
$ docker run -v `pwd`:/app -p 9004:8000 github_pages_local
```

to: http://localhost:9004
