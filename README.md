# NavHarness project page

A standalone academic project page for **NavHarness: Adaptive Goals for Agentic Vision-Language Navigation**. Plain HTML, CSS, and JavaScript; no build step, external fonts, analytics, cookies, or third-party video player.

## 发布到 GitHub Pages

1. 将本目录的内容上传到 `navharness/navharness.github.io` 仓库根目录，包括 `.nojekyll`。
2. 在仓库的 **Settings → Pages → Build and deployment → Source** 选择 **Deploy from a branch**。
3. 选择 **main** 分支和 **/(root)**，保存。后续推送到 `main` 会自动发布。
4. 访问 **https://navharness.github.io/**。所有资源使用相对路径，也支持项目站点的子目录。

发布步骤依据 [GitHub Pages 官方文档](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。此静态站点使用 GitHub 内置发布流程，无需自定义 Actions 工作流。

## 填写公开论文信息

编辑 `data/publication.js`：

- `authors`：作者数组，每项填写 `name`，可选 `affiliation` 编号和个人主页 `url`。
- `affiliations`：单位名称数组，可在字符串中注明对应编号。
- `paperUrl`：正式 arXiv 页面或公开 PDF 地址。
- `codeUrl`：正式代码仓库地址。
- `bibtex`：正式引用文本。

这些字段未填写时，对应栏目自动隐藏，不显示假链接或占位作者。页面没有任何 ICLR 录用声明。正文内容及实验数字已根据 2026-09-28 读取的 Overleaf 在线稿整理。

## 真机视频

`assets/videos/case-01.mp4` 至 `case-08.mp4` 为完整的已保存观察序列，640×480、H.264、2 fps，全部 225 帧按观察顺序保留，无时间戳、无插帧、无抽帧。不是连续相机录像，也不表示真实执行耗时。

第 7 条路线包含三段记录（2 + 16 + 9 帧），保留最初尝试、重新开始和续跑，并在播放器中提供分段跳转。第 8 条路线为雕塑案例。视频旁明确说明片段与统计结果的区别，不把单次演示当作 24 次试验的全部记录。

8 条路线及原始英文指令以用户提供的 `vln真机.xlsx` 为索引；第 7 条的最后续跑由论文所用图片的来源清单补全。论文旧附录曾只选取部分案例，此页按本次请求包含工作簿全部 8 条路线。

## 仿真视频

`assets/videos/sim-01.mp4` 至 `sim-08.mp4` 来自既有 M01–M12 完整执行结果，没有重新运行实验。其中 4 条为 R2R-CE / GPT-6-Astra high，4 条为 RxR-CE / GPT-5.6-Sol high；按较小 NE、较高 SPL 和完整观察帧选取。

视频共展示 144 张 512×512 第一人称观察图，按外层 actor 决策顺序编码为 H.264、2 fps。两个长轨迹删除了仅由连续原地转向产生的中间观察，保留初始画面、包含前进动作后的观察和最终画面；其他六条保留全部观察。每个视频卡片给出数据集、episode、模型、Success、NE、SPL、观察数和原始导航指令。2 fps 仅用于展示离散观察序列，不表示真实执行耗时。

## 内容口径

- 首页指标区下方展示完整 manuscript Table 1；结果章节保留三骨干框架消融柱状图，不再重复受控比较卡片。
- Progress-aware memory 章节在摘要卡片下方展示完整 manuscript Table 2。
- 导航对照使用论文 Table 1，NavHarness 为未开启 Memory compression 的配置。
- 上下文节省使用论文 Table 2；同时呈现 SR 与 SPL 变化。
- 真机汇总使用论文 Table 3（8 条路线、每条 3 次），不从工作簿的 8 个示例重新计算。
- Table 1 中 GPT-5.6-Sol / Codex CLI / RxR-CE 的 SPL 为 21.5，而 Table 2 写作 21.0；本页导航表使用 Table 1 的 21.5。论文自身这一差异需要作者后续统一。
- 作者、arXiv、GitHub 地址和 BibTeX 尚未提供，故暂时隐藏。

## Local preview

```text
python -m http.server 8765 --bind 127.0.0.1
```

Open `http://127.0.0.1:8765/`. The page also supports opening `index.html` directly, although copying citations may require a secure origin.

## Design references

- [Nerfies (ICCV 2021)](https://nerfies.github.io/): paper-led page structure and resource links.
- [NaVILA (RSS 2025)](https://navila-bot.github.io/): grouped robot demonstrations and real/simulation results.

This is an original implementation inspired by those presentation patterns. Their source code, media, text, and tracking scripts are not copied. Paper figures and experimental media belong to the paper authors; no new media license is asserted.
