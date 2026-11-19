# Genlain · 镜翎科技

Genlain（镜翎科技）官方网站，介绍公司在智能科技、数字体验与创意工程方面的探索。

[English](https://genlain.com/) · [简体中文](https://genlain.com/zh/)

## 项目结构

网站采用原生 HTML、CSS 和 JavaScript，通过 GitHub Pages 发布。

- `docs/index.html` 为英文首页。
- `docs/zh/index.html` 为中文首页。
- `docs/assets/` 存放两种语言共用的样式、脚本和图形。

## 本地预览

在仓库根目录使用 Python 3 启动静态服务器：

```sh
python -m http.server 8000 --bind 127.0.0.1 --directory docs
```

打开 [英文首页](http://localhost:8000/) 或 [中文首页](http://localhost:8000/zh/)。
