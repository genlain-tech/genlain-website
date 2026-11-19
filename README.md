# Genlain · 镜翎科技

静态公司主站。英文入口为 docs/index.html，中文入口为 docs/zh/index.html。共享样式、品牌图形和语言切换脚本位于 docs/assets。两个入口都能独立访问。新增 Projects 时先创建两种语言的内容，再加入导航。

## 本地预览

在仓库根目录运行以下命令，然后访问 http://127.0.0.1:8000/ 和 http://127.0.0.1:8000/zh/ 。

```powershell
python -m http.server 8000 --bind 127.0.0.1 --directory docs
```

## 部署到 genlain.com

1. 在 genlain-tech 组织的 Settings → Pages 添加并验证 genlain.com。在 Porkbun 新增 GitHub 给出的独立 TXT 主机名与验证码。验证通过后保留该记录。
2. 在本仓库执行 `git push -u origin main`。进入仓库 Settings → Pages，选择 Deploy from a branch、main、/docs 并保存。以后推送到 main 即触发发布。可在 Actions 查看 pages build and deployment。
3. 确认 Pages 的 Custom domain 为 genlain.com 并保存，与 docs/CNAME 一致。先绑定域名，再修改网站解析。
4. 在 Porkbun → Domain Management → genlain.com → DNS Records 记录现有记录的主机、类型、值、TTL 和优先级。仅调整已确认用于旧网站或停放页的根域和 www 网页记录，按下表填写，TTL 使用默认值。根域 Host 留空。

| 类型 | Host | Answer / Value |
| --- | --- | --- |
| A | 留空 | 185.199.108.153 |
| A | 留空 | 185.199.109.153 |
| A | 留空 | 185.199.110.153 |
| A | 留空 | 185.199.111.153 |
| CNAME | www | genlain-tech.github.io |

根域避免同时指向旧站的 A、AAAA 或 ALIAS。若启用 IPv6，使用 GitHub 官方列出的四条 Pages AAAA。www 的目标只填写组织主机名。不要添加根域 CNAME、通配记录或重置 DNS。保留当前名称服务器和腾讯邮箱全部 MX、SPF TXT、DKIM（所有 selector 的 TXT 或 CNAME）、DMARC、验证记录与邮箱相关主机。若现有 MX 指向根域本身，或 SPF 使用 a 机制授权根域 IP，先核对腾讯邮箱配置，再切换根域 A 记录。

5. 等待 DNS 生效，在 Pages 设置中确认 DNS 检查通过、证书签发后勾选 Enforce HTTPS。访问 https://genlain.com/、/zh/，确认 www 跳转到根域。
6. 用下列命令对照变更前记录。DKIM 请查询腾讯后台给出的真实 selector 和记录类型。最后用外部邮箱向 contact@genlain.com 发信并回复，核对收发与邮件头中的 SPF、DKIM 结果。

```powershell
Resolve-DnsName genlain.com -Type A
Resolve-DnsName www.genlain.com -Type CNAME
Resolve-DnsName genlain.com -Type MX
Resolve-DnsName genlain.com -Type TXT
```

参考：[GitHub 自定义域名](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)、[验证组织域名](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)、[Porkbun DNS 编辑说明](https://kb.porkbun.com/article/68-what-is-dns-and-how-do-i-edit-it)。
