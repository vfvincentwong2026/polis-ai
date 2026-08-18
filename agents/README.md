# Core Political Figure Repository — Founding Set (10 Figures)

本目录为 IHPI Core Political Figure Repository 的首批 10 位候选人物。
每位人物一个文件夹：`config.json`（人格配置）+ `knowledge/`（知识卡片，Markdown）。
Agent 权威语言为英语；中韩文姓名与原文短语作为辅助标注保留。

| # | Folder | Figure | Country / Polity | Era | kc_001 知识卡主题 |
|---|--------|--------|------------------|-----|-------------------|
| 1 | `deng_xiaoping` | Deng Xiaoping (邓小平) | China | 1904–1997 | 南方谈话（1992）：计划与市场之辩 |
| 2 | `zhou_enlai` | Zhou Enlai (周恩来) | China | 1898–1976 | 万隆会议补充发言（1955）：求同存异 |
| 3 | `yoshida_shigeru` | Shigeru Yoshida (吉田茂) | Japan | 1878–1967 | 吉田路线与旧金山体系（学术解释型卡片） |
| 4 | `nakasone_yasuhiro` | Yasuhiro Nakasone (中曽根康弘) | Japan | 1918–2019 | 1983 威廉斯堡峰会"不可分割的安全"与"不沉航母" |
| 5 | `park_chunghee` | Park Chung-hee (朴正熙) | South Korea | 1917–1979 | 《国家·革命与我》（1963）与第一个五年计划 |
| 6 | `kim_daejung` | Kim Dae-jung (김대중) | South Korea | 1924–2009 | 六·一五南北共同宣言（2000）与阳光政策 |
| 7 | `kissinger_henry` | Henry Kissinger (亨利·基辛格) | United States | 1923–2023 | 1971–72 打开中国之门（秘密访华、上海公报） |
| 8 | `kennan_george` | George F. Kennan (乔治·凯南) | United States | 1904–2005 | 1947 "X Article"《苏联行为的根源》（遏制战略） |
| 9 | `gorbachev_mikhail` | Mikhail Gorbachev (戈尔巴乔夫) | Soviet Union | 1931–2022 | 1988 年 12 月联合国大会演讲（新思维） |
| 10 | `lee_kuanyew` | Lee Kuan Yew (李光耀) | Singapore | 1923–2015 | 回忆录《From Third World to First》：小国治理术 |

## 编辑规则（与 docs/CUSTOMIZE.md 一致）

1. 新建人物：`mkdir agents/<figure_name>/knowledge`，复制任一 config.json 作模板。
2. 知识卡片：`knowledge/kc_00X.md`，frontmatter 必须含 id / title / source / date / type / language / tags。
3. `type` 取值：`Historical Evidence`（一手史料）/ `Scholarly Interpretation`（学术解释）。
4. **引文纪律**：Original Excerpt 与 Key Quotes 只允许有文献记录的真实引文；不能确认的表述写在 Summary 里、不加引号。
5. 引文须保留语言原文（如著名中文/日文/韩文短语）并附英文权威译文。

## 待办

- [ ] 各人物补充 kc_002+（第二来源，形成证据多元性）
- [ ] 补充人物头像 `<folder>.jpg`（注意肖像版权，优先公有领域/官方肖像）
- [x] 运行时代码接线：init.ts 从本目录加载 persona（见改造路线图 Phase 0/1）

## 如何生效

运行时代码接线已完成。流程：

1. `npm run gen:agents` — 扫描本目录，生成 `data/agents.generated.ts`（含 identity / plan / knowledge）。
   无需手动执行：`npm run dev` 的 `predev` 会自动先跑这一步。
2. `npx convex dev --run init --until-success` — 推送函数并为新世界播种 10 位历史人物。
   注意：init 只在世界为空时播种（`world.agents.length === 0`）。
3. 已有旧世界需要重置/重新播种时，依次执行：
   - `npx convex run testing:stop`（停止引擎）
   - `npx convex run testing:archive`（归档旧世界，取消其 isDefault 标记）
   - 重新运行 `npx convex dev --run init --until-success`（创建新世界并播种 10 位人物）
   （也可在 Convex dashboard 中手动调用 `testing:wipeAllTables` 清空所有表后重跑 init。）
