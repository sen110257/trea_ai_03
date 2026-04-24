// 轮播图数据
export const banners = [
  {
    id: 1,
    title: '欢迎来到趣味博客',
    subtitle: '记录生活的美好瞬间',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20colorful%20blog%20banner%20with%20laptop%20coffee%20notebook%20creative%20workspace%20vibrant%20colors&image_size=landscape_16_9',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 2,
    title: '技术与生活的交织',
    subtitle: '分享编程技巧和生活感悟',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tech%20blog%20banner%20code%20screen%20keyboard%20neon%20lights%20night%20coding%20atmosphere&image_size=landscape_16_9',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    id: 3,
    title: '探索无限可能',
    subtitle: '每一篇文章都是一次新的冒险',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=adventure%20exploration%20theme%20banner%20compass%20map%20mountain%20sunrise%20inspiring%20mood&image_size=landscape_16_9',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  }
]

// 分类数据（魔方分类）
export const categories = [
  {
    id: 1,
    name: '前端开发',
    icon: '💻',
    color: '#667eea',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    count: 12,
    description: 'Vue、React、CSS、JavaScript'
  },
  {
    id: 2,
    name: '后端技术',
    icon: '⚙️',
    color: '#f56565',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    count: 8,
    description: 'Node.js、Python、数据库'
  },
  {
    id: 3,
    name: '生活随笔',
    icon: '📝',
    color: '#4facfe',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    count: 15,
    description: '日常生活、感悟、旅行'
  },
  {
    id: 4,
    name: '读书笔记',
    icon: '📚',
    color: '#43e97b',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    count: 10,
    description: '好书推荐、阅读心得'
  },
  {
    id: 5,
    name: '工具推荐',
    icon: '🔧',
    color: '#fa709a',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    count: 6,
    description: '开发工具、效率软件'
  },
  {
    id: 6,
    name: '教程分享',
    icon: '🎯',
    color: '#a18cd1',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    count: 20,
    description: '入门教程、实战案例'
  }
]

// 文章数据
export const articles = [
  {
    id: 1,
    title: 'Vue3 组合式 API 完全指南',
    summary: '深入理解 Vue3 的 Composition API，从基础概念到高级用法，全面掌握响应式系统的精髓。本文将带你领略 Vue3 带来的全新开发体验...',
    content: `
# Vue3 组合式 API 完全指南

## 什么是组合式 API

Vue 3 引入了组合式 API（Composition API），这是一种全新的组织组件逻辑的方式。与选项式 API 相比，它提供了更灵活的代码组织能力。

### 为什么需要组合式 API

在大型组件中，使用选项式 API 时，相关的逻辑代码会分散在 data、methods、computed 等选项中，这使得代码难以维护。组合式 API 允许我们将相关的逻辑组织在一起。

## 核心概念

### setup 函数

setup 函数是组合式 API 的入口点，在组件创建之前执行，此时组件的 props 已经被解析。

\`\`\`javascript
import { ref, reactive } from 'vue'

export default {
  setup(props, context) {
    // 在这里定义响应式数据和方法
    const count = ref(0)
    const state = reactive({ name: 'Vue3' })
    
    return {
      count,
      state
    }
  }
}
\`\`\`

### ref 和 reactive

- **ref**: 用于创建一个响应式的引用值，通常用于基本类型
- **reactive**: 用于创建一个响应式对象，通常用于复杂类型

### 计算属性和监听器

使用 computed 和 watch 可以创建计算属性和监听器：

\`\`\`javascript
import { computed, watch } from 'vue'

const doubledCount = computed(() => count.value * 2)

watch(count, (newValue, oldValue) => {
  console.log(\`count changed from \${oldValue} to \${newValue}\`)
})
\`\`\`

## 最佳实践

1. **保持 setup 函数简洁**: 将逻辑提取到独立的组合函数中
2. **合理命名**: 为组合函数使用 use 前缀，如 useCounter、useMouse
3. **返回值保持稳定**: 确保从 setup 返回的对象结构一致

## 总结

组合式 API 为 Vue 开发带来了巨大的灵活性。它不仅改善了代码组织，还提供了更好的 TypeScript 支持和代码复用能力。掌握组合式 API 是成为 Vue3 专家的关键一步。
    `,
    category: '前端开发',
    tags: ['Vue3', 'Composition API', 'JavaScript'],
    author: '趣味博主',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cartoon%20avatar%20young%20developer%20wearing%20glasses%20smiling%20friendly%20face&image_size=square',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=vue3%20javascript%20code%20on%20screen%20colorful%20syntax%20highlighting%20modern%20ide&image_size=landscape_4_3',
    createTime: '2024-01-15',
    views: 1256,
    likes: 89,
    comments: 23
  },
  {
    id: 2,
    title: 'CSS 动画入门：让你的网页动起来',
    summary: '从零开始学习 CSS 动画，掌握 transition、transform 和 keyframes 三大核心概念，打造炫酷的网页动效。',
    content: `
# CSS 动画入门：让你的网页动起来

## 动画的魅力

在现代网页设计中，动画已经不再是奢侈品，而是提升用户体验的关键要素。好的动画可以：

- **引导用户注意力**：通过动画提示用户哪里可以点击
- **提供视觉反馈**：告知用户操作的结果
- **增强页面活力**：让静态页面变得生动有趣

## CSS 动画的三种方式

### 1. CSS Transition（过渡）

Transition 是最简单的动画方式，用于在状态变化时添加过渡效果。

\`\`\`css
.button {
  background-color: #667eea;
  transition: all 0.3s ease;
}

.button:hover {
  background-color: #764ba2;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
\`\`\`

### 2. CSS Transform（变换）

Transform 允许你旋转、缩放、倾斜或平移元素。

\`\`\`css
/* 旋转 */
.rotate {
  transform: rotate(45deg);
}

/* 缩放 */
.scale {
  transform: scale(1.2);
}

/* 平移 */
.translate {
  transform: translate(10px, 20px);
}

/* 组合使用 */
.combined {
  transform: rotate(30deg) scale(1.1) translateX(10px);
}
\`\`\`

### 3. CSS Keyframes（关键帧动画）

Keyframes 是最强大的动画方式，可以创建复杂的动画序列。

\`\`\`css
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.floating {
  animation: float 3s ease-in-out infinite;
}

.pulsing {
  animation: pulse 2s ease-in-out infinite;
}
\`\`\`

## 动画性能优化

### 使用 GPU 加速的属性

- **transform**：所有变换操作
- **opacity**：透明度

### 避免触发重排的属性

- **width/height**：会触发重排
- **top/left/right/bottom**：会触发重排
- **margin/padding**：会触发重排

### 使用 will-change 提示浏览器

\`\`\`css
.animated {
  will-change: transform, opacity;
}
\`\`\`

## 最佳实践

1. **适度使用动画**：不要让动画成为用户的干扰
2. **保持动画流畅**：目标是 60fps
3. **考虑用户偏好**：尊重 prefers-reduced-motion 设置
4. **使用缓动函数**：让动画更自然

CSS 动画是前端开发的重要技能，掌握它可以让你的网页更加生动有趣！
    `,
    category: '前端开发',
    tags: ['CSS', 'Animation', '前端'],
    author: '趣味博主',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cartoon%20avatar%20young%20developer%20wearing%20glasses%20smiling%20friendly%20face&image_size=square',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=colorful%20css%20animation%20concept%20arrows%20motion%20effects%20gradient%20colors&image_size=landscape_4_3',
    createTime: '2024-01-10',
    views: 987,
    likes: 67,
    comments: 15
  },
  {
    id: 3,
    title: 'Node.js 入门：从零开始构建 RESTful API',
    summary: '跟随本教程，使用 Express.js 从零开始构建一个完整的 RESTful API，包含路由、中间件、错误处理等核心概念。',
    content: `
# Node.js 入门：从零开始构建 RESTful API

## 什么是 Node.js

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时环境，让 JavaScript 可以在服务器端运行。

### 为什么选择 Node.js

- **单线程非阻塞 I/O**：高效处理并发请求
- **JavaScript 全栈**：前后端使用同一种语言
- **npm 生态**：世界上最大的开源包生态系统
- **实时应用**：特别适合构建 WebSocket 应用

## 环境准备

### 安装 Node.js

从官网下载并安装 Node.js，安装完成后验证：

\`\`\`bash
node --version
npm --version
\`\`\`

## 创建项目

\`\`\`bash
mkdir my-api
cd my-api
npm init -y
npm install express
\`\`\`

## 第一个 Express 应用

\`\`\`javascript
// app.js
const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Hello, Express!' })
})

app.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`)
})
\`\`\`

## RESTful API 设计

### 路由设计

\`\`\`javascript
// 获取所有用户
app.get('/api/users', (req, res) => {
  res.json(users)
})

// 获取单个用户
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id))
  if (!user) return res.status(404).json({ message: 'User not found' })
  res.json(user)
})

// 创建用户
app.post('/api/users', (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  }
  users.push(user)
  res.status(201).json(user)
})

// 更新用户
app.put('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id))
  if (!user) return res.status(404).json({ message: 'User not found' })
  
  user.name = req.body.name || user.name
  user.email = req.body.email || user.email
  res.json(user)
})

// 删除用户
app.delete('/api/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id))
  if (index === -1) return res.status(404).json({ message: 'User not found' })
  
  users.splice(index, 1)
  res.json({ message: 'User deleted' })
})
\`\`\`

## 中间件

### 什么是中间件

中间件是处理请求的函数，可以访问请求对象（req）、响应对象（res）和下一个中间件函数。

\`\`\`javascript
// 日志中间件
const logger = (req, res, next) => {
  console.log(\`\${new Date().toISOString()} - \${req.method} \${req.url}\`)
  next()
}

app.use(logger)
\`\`\`

### 常用中间件

- **express.json()**：解析 JSON 请求体
- **express.urlencoded()**：解析 URL 编码的请求体
- **cors**：处理跨域请求
- **helmet**：安全相关的 HTTP 头设置
- **morgan**：HTTP 请求日志

## 错误处理

\`\`\`javascript
// 404 处理
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' })
})

// 全局错误处理
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Something went wrong!' })
})
\`\`\`

## 总结

通过本教程，你已经学会了如何使用 Express.js 构建基本的 RESTful API。下一步可以学习：

- 数据库集成（MongoDB、PostgreSQL）
- 身份验证（JWT、Session）
- API 文档（Swagger）
- 测试（Jest、Supertest）
- 部署（Docker、PM2）

Node.js 为后端开发打开了新的大门，继续探索吧！
    `,
    category: '后端技术',
    tags: ['Node.js', 'Express', 'API'],
    author: '趣味博主',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cartoon%20avatar%20young%20developer%20wearing%20glasses%20smiling%20friendly%20face&image_size=square',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=nodejs%20server%20code%20terminal%20dark%20theme%20green%20text%20tech%20atmosphere&image_size=landscape_4_3',
    createTime: '2024-01-08',
    views: 756,
    likes: 45,
    comments: 12
  },
  {
    id: 4,
    title: '2024 年值得一读的好书推荐',
    summary: '分享我在过去一年阅读的精彩书籍，涵盖技术、人文、小说等多个领域，每一本都值得细细品味。',
    content: `
# 2024 年值得一读的好书推荐

## 为什么要阅读

在这个信息爆炸的时代，阅读一本好书仍然是获取深度知识的最佳方式。书籍经过作者的精心打磨，提供了系统化的思考框架。

### 我的阅读理念

> "读书不是为了应付考试，而是为了成为更好的自己。"

## 技术书籍推荐

### 《JavaScript 高级程序设计（第 4 版）》

**作者**: Matt Frisbie

这是 JavaScript 开发者的圣经级书籍。第 4 版全面覆盖了 ES6+ 的新特性，包括：

- Promise 和异步编程
- 模块系统
- 代理和反射
- 类和继承

**适合人群**: 有一定 JavaScript 基础，想要深入理解的开发者

### 《你不知道的 JavaScript》系列

**作者**: Kyle Simpson

这套书颠覆了我对 JavaScript 的认知。它不是教你怎么用，而是告诉你为什么是这样。

**核心主题**:
- 作用域和闭包
- this 和对象原型
- 异步和性能
- ES6 及未来

### 《Clean Code》（代码整洁之道）

**作者**: Robert C. Martin

好的代码不仅要能运行，更要易于理解和维护。这本书教会你如何写出优雅、可维护的代码。

## 人文社科推荐

### 《人类简史》

**作者**: 尤瓦尔·赫拉利

从认知革命、农业革命到科学革命，这本书以宏大的视角重新审视人类的发展历程。

**精彩观点**:
- 人类是靠讲故事的能力团结起来的
- 农业革命是史上最大的骗局
- 金钱是最成功的互信系统

### 《思考，快与慢》

**作者**: 丹尼尔·卡尼曼

诺贝尔奖得主卡尼曼揭示了人类思维的两种模式：

- **系统 1**: 快速、直觉、情绪化
- **系统 2**: 缓慢、理性、懒惰

理解这两种思维模式，可以帮助我们做出更好的决策。

## 小说推荐

### 《三体》三部曲

**作者**: 刘慈欣

中国科幻的巅峰之作。宏大的宇宙观、深刻的哲学思考、精彩的情节设计，让人欲罢不能。

**核心问题**:
- 如果外星人真的存在，我们应该联系吗？
- 黑暗森林法则是否成立？
- 人类文明的命运将走向何方？

### 《百年孤独》

**作者**: 加西亚·马尔克斯

魔幻现实主义的经典之作。布恩迪亚家族七代人的传奇故事，交织着现实与魔幻。

## 阅读建议

### 1. 建立阅读习惯

- **固定时间**: 每天同一时间阅读
- **从小目标开始**: 每天 15 分钟
- **选择感兴趣的书**: 不要勉强自己

### 2. 有效阅读方法

- **带着问题读**: 为什么读这本书？
- **做笔记**: 记录精彩观点
- **输出分享**: 写书评、讲给别人听

### 3. 书单只是参考

每个人的兴趣和需求不同，根据自己的实际情况选择书籍。重要的是开始阅读，并享受阅读的过程。

**2024 年，让我们一起在书中遇见更好的自己！** 📚✨
    `,
    category: '读书笔记',
    tags: ['阅读', '书籍推荐', '成长'],
    author: '趣味博主',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cartoon%20avatar%20young%20developer%20wearing%20glasses%20smiling%20friendly%20face&image_size=square',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=stack%20of%20books%20reading%20glasses%20cozy%20coffee%20shop%20warm%20lighting%20peaceful%20atmosphere&image_size=landscape_4_3',
    createTime: '2024-01-05',
    views: 1523,
    likes: 120,
    comments: 35
  },
  {
    id: 5,
    title: 'VS Code 高效开发插件推荐',
    summary: '精选 10 个提升开发效率的 VS Code 插件，从代码提示到格式化，让你的编码体验更加流畅。',
    content: `
# VS Code 高效开发插件推荐

## 为什么选择 VS Code

Visual Studio Code（简称 VS Code）已经成为最受欢迎的代码编辑器。它的成功离不开强大的插件生态系统。

### 我的使用心得

经过多年的使用和探索，我整理了这份插件清单，希望能帮助你提升开发效率。

## 必备插件推荐

### 1. Chinese (Simplified) Language Pack

**功能**: VS Code 中文语言包

如果你和我一样，更喜欢中文界面，这是第一个要安装的插件。安装后重启 VS Code 即可生效。

### 2. ESLint

**功能**: 代码质量检查

ESLint 可以帮助你发现代码中的潜在问题，并强制执行编码规范。

**配置建议**:
\`\`\`json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
\`\`\`

### 3. Prettier

**功能**: 代码格式化

统一的代码风格是团队协作的基础。Prettier 支持多种语言的格式化。

**配合 ESLint**:
安装 \`eslint-config-prettier\` 和 \`eslint-plugin-prettier\` 解决冲突。

### 4. GitLens

**功能**: 增强 Git 功能

GitLens 让 Git 历史可视化，你可以：
- 查看每行代码的最后修改者
- 查看文件的完整修改历史
- 比较不同版本的差异

### 5. Auto Rename Tag

**功能**: 自动重命名配对标签

在编辑 HTML 或 JSX 时，修改开始标签会自动同步结束标签，反之亦然。

### 6. Path Intellisense

**功能**: 路径自动补全

当你在 import 文件或引用图片时，这个插件会自动提示路径，减少拼写错误。

### 7. Bracket Pair Colorizer 2

**功能**: 括号配对着色

多层嵌套的括号让人头疼，这个插件用不同颜色标识配对的括号，代码结构一目了然。

### 8. Code Spell Checker

**功能**: 拼写检查

作为非英语母语者，我经常犯拼写错误。这个插件会检查英文单词的拼写，并给出修正建议。

### 9. Live Server

**功能**: 本地开发服务器

对于静态 HTML 页面，这个插件可以一键启动本地服务器，并支持热重载。

### 10. Material Icon Theme

**功能**: 文件图标主题

让文件树更加美观，不同类型的文件使用不同的图标，提升视觉体验。

## 主题推荐

### One Dark Pro

我最喜欢的主题之一，来自 Atom 编辑器的经典配色，护眼且美观。

### Dracula Official

另一个流行的暗色主题，配色鲜明，代码层次清晰。

## 快捷键推荐

掌握常用快捷键可以大幅提升效率：

| 功能 | Windows/Linux | macOS |
|------|---------------|-------|
| 格式化代码 | Shift + Alt + F | Shift + Option + F |
| 查找文件 | Ctrl + P | Command + P |
| 全局搜索 | Ctrl + Shift + F | Command + Shift + F |
| 打开终端 | Ctrl + \` | Control + \` |
| 拆分编辑器 | Ctrl + \\ | Command + \\ |

## 总结

好的工具让开发更加愉悦。但记住，插件不是越多越好，根据实际需求选择，避免 VS Code 变得臃肿。

**你有什么好用的插件推荐？欢迎在评论区分享！** 🔧✨
    `,
    category: '工具推荐',
    tags: ['VS Code', '效率工具', '开发'],
    author: '趣味博主',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cartoon%20avatar%20young%20developer%20wearing%20glasses%20smiling%20friendly%20face&image_size=square',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=vs%20code%20editor%20interface%20colorful%20code%20syntax%20highlighting%20modern%20dark%20theme&image_size=landscape_4_3',
    createTime: '2024-01-03',
    views: 2105,
    likes: 156,
    comments: 48
  },
  {
    id: 6,
    title: '我的 2023 年度总结与 2024 展望',
    summary: '回顾 2023 年的成长与收获，展望 2024 年的目标与计划。新的一年，继续前行！',
    content: `
# 我的 2023 年度总结与 2024 展望

## 写在前面

时光飞逝，2023 年已经成为过去。站在新的起点，回顾过去一年的经历，既有收获的喜悦，也有遗憾的反思。

## 2023 年回顾

### 技术成长

**完成的项目**:
- ✅ 学习并掌握了 Vue3 和 TypeScript
- ✅ 完成了 3 个完整的个人项目
- ✅ 参与了一个开源项目的贡献

**技能提升**:
- 前端性能优化：从理论到实践
- 工程化建设：CI/CD、代码规范
- 团队协作：Code Review、技术分享

### 生活记录

**阅读**:
- 完成了 24 本书的阅读目标
- 最喜欢的书：《人类简史》、《思考，快与慢》

**运动**:
- 坚持每周跑步 3 次
- 完成了第一次半程马拉松

**旅行**:
- 西安：感受古城魅力
- 成都：美食与熊猫
- 杭州：西湖美景

### 博客运营

- 发表文章 36 篇
- 累计阅读量突破 10 万
- 收获了很多读者的认可和鼓励

## 反思与不足

### 需要改进的地方

1. **时间管理**：有时会陷入低效的忙碌
2. **深度工作**：被碎片化信息打扰的时间太多
3. **英语能力**：阅读技术文档还不够流畅

### 遗憾的事情

- 没有坚持每天写日记的习惯
- 学习的新技术没有及时整理成文章
- 和老朋友的联系变少了

## 2024 年目标

### 技术目标

- [ ] 深入学习 React 生态
- [ ] 掌握一门后端语言（Go 或 Rust）
- [ ] 完成 5 个有质量的个人项目
- [ ] 持续维护和更新博客

### 生活目标

- [ ] 阅读 30 本书
- [ ] 完成一次全程马拉松
- [ ] 学习一项新技能（摄影或绘画）
- [ ] 至少旅行 3 次

### 习惯养成

- [ ] 每天早起（6:30 之前）
- [ ] 坚持写日记或周记
- [ ] 每周至少运动 4 次
- [ ] 减少无效社交时间

## 新年寄语

> "种一棵树最好的时间是十年前，其次是现在。"

2024 年，我希望自己：

1. **保持好奇**：对新技术、新事物保持学习热情
2. **专注深耕**：不再浅尝辄止，在某些领域深入钻研
3. **勇于分享**：更多地输出，帮助他人也帮助自己
4. **享受当下**：不要总是焦虑未来，珍惜现在的每一刻

**感谢所有关注我的读者朋友们，2024 年让我们一起成长！** 🎉✨

---

**你的 2024 年有什么目标和计划？欢迎在评论区分享，我们互相监督！**
    `,
    category: '生活随笔',
    tags: ['年度总结', '目标', '成长'],
    author: '趣味博主',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cartoon%20avatar%20young%20developer%20wearing%20glasses%20smiling%20friendly%20face&image_size=square',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=2024%20new%20year%20goals%20planner%20notebook%20pen%20inspirational%20warm%20lighting%20positive%20vibes&image_size=landscape_4_3',
    createTime: '2024-01-01',
    views: 3256,
    likes: 234,
    comments: 67
  }
]

// 热门文章数据
export const hotArticles = [
  { id: 1, title: 'VS Code 高效开发插件推荐', views: 2105, coverImage: articles[4].coverImage },
  { id: 2, title: '我的 2023 年度总结与 2024 展望', views: 3256, coverImage: articles[5].coverImage },
  { id: 3, title: 'Vue3 组合式 API 完全指南', views: 1256, coverImage: articles[0].coverImage },
  { id: 4, title: '2024 年值得一读的好书推荐', views: 1523, coverImage: articles[3].coverImage },
  { id: 5, title: 'CSS 动画入门：让你的网页动起来', views: 987, coverImage: articles[1].coverImage }
]

// 标签云数据
export const tagCloud = [
  { name: 'Vue3', count: 15, color: '#667eea' },
  { name: 'JavaScript', count: 12, color: '#f56565' },
  { name: 'CSS', count: 10, color: '#4facfe' },
  { name: 'Node.js', count: 8, color: '#43e97b' },
  { name: 'TypeScript', count: 7, color: '#fa709a' },
  { name: 'React', count: 6, color: '#a18cd1' },
  { name: '效率工具', count: 9, color: '#667eea' },
  { name: '阅读', count: 11, color: '#f093fb' },
  { name: '生活', count: 13, color: '#f5576c' },
  { name: '技术分享', count: 8, color: '#4facfe' },
  { name: '前端', count: 18, color: '#764ba2' },
  { name: '后端', count: 6, color: '#43e97b' },
  { name: '成长', count: 10, color: '#fa709a' },
  { name: '教程', count: 14, color: '#a18cd1' },
  { name: 'API', count: 5, color: '#667eea' }
]

// 博主信息
export const authorInfo = {
  name: '趣味博主',
  avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cartoon%20avatar%20young%20developer%20wearing%20glasses%20smiling%20friendly%20face&image_size=square',
  motto: '代码改变世界，分享创造价值',
  description: '一个热爱技术、喜欢分享的前端开发者。专注于 Vue、React、Node.js 等技术，同时也喜欢记录生活中的点点滴滴。',
  location: '中国 · 深圳',
  joinDate: '2020-01-01',
  articles: 36,
  followers: 1256,
  likes: 5680,
  socialLinks: [
    { name: 'GitHub', icon: '🐙', url: '#' },
    { name: '微信', icon: '💬', url: '#' },
    { name: '邮箱', icon: '📧', url: '#' },
    { name: '微博', icon: '📱', url: '#' }
  ]
}
