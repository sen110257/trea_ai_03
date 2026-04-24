<template>
  <div class="article-detail">
    <div class="detail-layout">
      <div class="detail-main">
        <!-- 文章头部信息 -->
        <div class="article-header">
          <div class="header-meta">
            <el-tag :type="getTagType(article.category)" size="large" class="category-tag">
              {{ article.category }}
            </el-tag>
            <el-breadcrumb separator="/" class="breadcrumb">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>{{ article.category }}</el-breadcrumb-item>
              <el-breadcrumb-item>{{ article.title }}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          
          <h1 class="article-title">{{ article.title }}</h1>
          
          <div class="article-info">
            <div class="author-info">
              <el-avatar :size="45" :src="article.avatar" class="author-avatar" />
              <div class="author-detail">
                <span class="author-name">{{ article.author }}</span>
                <div class="author-meta">
                  <span class="publish-time">{{ article.createTime }}</span>
                  <span class="meta-divider">·</span>
                  <span class="read-time">阅读约 {{ readTime }} 分钟</span>
                </div>
              </div>
            </div>
            
            <div class="article-actions">
              <el-button type="text" class="action-btn" @click="handleLike">
                <el-icon :class="{ 'liked': isLiked }"><Star /></el-icon>
                <span>{{ article.likes + (isLiked ? 1 : 0) }}</span>
              </el-button>
              <el-button type="text" class="action-btn">
                <el-icon><Share /></el-icon>
                <span>分享</span>
              </el-button>
              <el-button type="text" class="action-btn">
                <el-icon><Collection /></el-icon>
                <span>收藏</span>
              </el-button>
            </div>
          </div>
          
          <div class="article-cover">
            <img :src="article.coverImage" :alt="article.title" class="cover-image" />
          </div>
        </div>
        
        <!-- 文章内容 -->
        <div class="article-content">
          <article class="markdown-body" v-html="renderedContent"></article>
        </div>
        
        <!-- 文章标签 -->
        <div class="article-tags-section">
          <span class="tags-label">相关标签：</span>
          <div class="tags-list">
            <el-tag 
              v-for="tag in article.tags" 
              :key="tag"
              size="medium"
              effect="plain"
              class="article-tag"
            >
              # {{ tag }}
            </el-tag>
          </div>
        </div>
        
        <!-- 版权声明 -->
        <div class="copyright-box">
          <div class="copyright-icon">©</div>
          <div class="copyright-content">
            <p class="copyright-title">版权声明</p>
            <p class="copyright-text">本文为原创文章，采用 CC BY-NC-SA 4.0 协议，转载请注明出处。</p>
          </div>
        </div>
        
        <!-- 文章统计 -->
        <div class="article-stats">
          <div class="stat-item">
            <span class="stat-icon">👁️</span>
            <span class="stat-text">阅读量：{{ article.views }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-icon">💬</span>
            <span class="stat-text">评论数：{{ article.comments }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-icon">❤️</span>
            <span class="stat-text">点赞数：{{ article.likes + (isLiked ? 1 : 0) }}</span>
          </div>
        </div>
        
        <!-- 上一篇/下一篇 -->
        <div class="article-nav">
          <div class="nav-item prev-item" v-if="prevArticle" @click="goToArticle(prevArticle.id)">
            <span class="nav-label">上一篇</span>
            <span class="nav-title">{{ prevArticle.title }}</span>
          </div>
          <div class="nav-item next-item" v-if="nextArticle" @click="goToArticle(nextArticle.id)">
            <span class="nav-label">下一篇</span>
            <span class="nav-title">{{ nextArticle.title }}</span>
          </div>
        </div>
        
        <!-- 评论区 -->
        <div class="comments-section">
          <div class="section-header">
            <h3 class="section-title">
              <span class="title-icon">💬</span>
              评论区 ({{ mockComments.length }})
            </h3>
          </div>
          
          <!-- 发表评论 -->
          <div class="comment-input-box">
            <el-avatar :size="40" class="user-avatar">U</el-avatar>
            <div class="input-wrapper">
              <el-input
                v-model="commentText"
                type="textarea"
                :rows="3"
                placeholder="说点什么..."
                class="comment-input"
              />
              <div class="input-actions">
                <el-button type="text" class="emoji-btn">😊 表情</el-button>
                <el-button type="primary" class="submit-btn" @click="submitComment">
                  发表评论
                </el-button>
              </div>
            </div>
          </div>
          
          <!-- 评论列表 -->
          <div class="comments-list">
            <div 
              v-for="comment in mockComments" 
              :key="comment.id"
              class="comment-item"
            >
              <el-avatar :size="40" :src="comment.avatar" class="comment-avatar" />
              <div class="comment-content">
                <div class="comment-header">
                  <span class="comment-author">{{ comment.author }}</span>
                  <span class="comment-time">{{ comment.time }}</span>
                </div>
                <p class="comment-text">{{ comment.text }}</p>
                <div class="comment-actions">
                  <el-button type="text" size="small" class="comment-action-btn">
                    <el-icon><ChatDotRound /></el-icon>
                    回复
                  </el-button>
                  <el-button type="text" size="small" class="comment-action-btn">
                    <el-icon><ThumbUp /></el-icon>
                    {{ comment.likes }}
                  </el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 侧边栏 -->
      <SidebarWidget />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Star, Share, Collection, ChatDotRound, ThumbUp } from '@element-plus/icons-vue'
import SidebarWidget from '@/components/SidebarWidget.vue'
import { articles } from '@/data/staticData'

const route = useRoute()
const router = useRouter()

const articleId = computed(() => parseInt(route.params.id))
const isLiked = ref(false)
const commentText = ref('')

const article = computed(() => {
  return articles.find(a => a.id === articleId.value) || articles[0]
})

const readTime = computed(() => {
  const text = article.value.content || ''
  const wordCount = text.length
  return Math.ceil(wordCount / 500) || 5
})

const renderedContent = computed(() => {
  return parseMarkdown(article.value.content)
})

const prevArticle = computed(() => {
  const index = articles.findIndex(a => a.id === articleId.value)
  return index > 0 ? articles[index - 1] : null
})

const nextArticle = computed(() => {
  const index = articles.findIndex(a => a.id === articleId.value)
  return index < articles.length - 1 ? articles[index + 1] : null
})

const mockComments = [
  {
    id: 1,
    author: '读者小明',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cartoon%20boy%20avatar%20smiling%20friendly&image_size=square',
    time: '2024-01-16 10:30',
    text: '写得太棒了！这篇文章让我对 Vue3 的组合式 API 有了更清晰的理解，感谢分享！',
    likes: 12
  },
  {
    id: 2,
    author: '前端小白',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cartoon%20girl%20avatar%20student&image_size=square',
    time: '2024-01-15 18:45',
    text: '作为一名初学者，这篇文章非常友好，例子也很实用。请问有没有关于 Pinia 状态管理的文章呢？',
    likes: 8
  }
]

const parseMarkdown = (text) => {
  if (!text) return ''
  
  let html = text
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
  
  html = '<p>' + html + '</p>'
  
  html = html.replace(/(<li>.*?<\/li>)+/g, (match) => {
    return '<ul>' + match + '</ul>'
  })
  
  return html
}

const getTagType = (category) => {
  const typeMap = {
    '前端开发': 'primary',
    '后端技术': 'danger',
    '生活随笔': 'warning',
    '读书笔记': 'success',
    '工具推荐': '',
    '教程分享': 'info'
  }
  return typeMap[category] || ''
}

const handleLike = () => {
  isLiked.value = !isLiked.value
  if (isLiked.value) {
    ElMessage.success('点赞成功！')
  }
}

const goToArticle = (id) => {
  router.push(`/article/${id}`)
}

const submitComment = () => {
  if (!commentText.value.trim()) {
    ElMessage.warning('请输入评论内容')
    return
  }
  ElMessage.success('评论发表成功！')
  commentText.value = ''
}
</script>

<style scoped>
.article-detail {
  width: 100%;
}

.detail-layout {
  display: flex;
  gap: 30px;
}

.detail-main {
  flex: 1;
  min-width: 0;
}

/* 文章头部 */
.article-header {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: var(--card-shadow);
}

.header-meta {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.category-tag {
  font-weight: 600;
}

.breadcrumb {
  font-size: 13px;
}

.article-title {
  font-size: 28px;
  font-weight: 800;
  color: var(--dark-color);
  line-height: 1.4;
  margin-bottom: 25px;
}

.article-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  flex-wrap: wrap;
  gap: 20px;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.author-avatar {
  border: 3px solid var(--primary-color);
}

.author-detail {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.author-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--dark-color);
}

.author-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: #999;
}

.meta-divider {
  color: #ddd;
}

.article-actions {
  display: flex;
  gap: 10px;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: #666;
}

.action-btn:hover {
  color: var(--primary-color);
}

.liked {
  color: #f56565;
  fill: #f56565;
}

.article-cover {
  width: 100%;
  height: 350px;
  border-radius: 16px;
  overflow: hidden;
}

.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 文章内容 */
.article-content {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 30px;
  box-shadow: var(--card-shadow);
}

.markdown-body {
  font-size: 16px;
  line-height: 2;
  color: #333;
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3 {
  color: var(--dark-color);
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(102, 126, 234, 0.1);
}

.markdown-body h1 {
  font-size: 24px;
}

.markdown-body h2 {
  font-size: 20px;
}

.markdown-body h3 {
  font-size: 18px;
}

.markdown-body p {
  margin-bottom: 20px;
  text-indent: 2em;
}

.markdown-body pre {
  background: #1a1a2e;
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
  overflow-x: auto;
}

.markdown-body code {
  background: rgba(102, 126, 234, 0.1);
  padding: 2px 8px;
  border-radius: 4px;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  color: var(--primary-color);
}

.markdown-body pre code {
  background: none;
  color: #e2e8f0;
  padding: 0;
}

.markdown-body ul {
  margin: 15px 0;
  padding-left: 30px;
}

.markdown-body li {
  margin-bottom: 10px;
}

.markdown-body blockquote {
  border-left: 4px solid var(--primary-color);
  background: rgba(102, 126, 234, 0.05);
  padding: 15px 20px;
  margin: 20px 0;
  border-radius: 0 8px 8px 0;
  color: #666;
}

.markdown-body strong {
  color: var(--dark-color);
  font-weight: 600;
}

/* 文章标签 */
.article-tags-section {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 25px 30px;
  margin-bottom: 30px;
  box-shadow: var(--card-shadow);
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}

.tags-label {
  font-weight: 600;
  color: var(--dark-color);
}

.tags-list {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.article-tag {
  cursor: pointer;
  transition: var(--transition);
}

.article-tag:hover {
  transform: scale(1.05);
}

/* 版权声明 */
.copyright-box {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
  border: 1px dashed rgba(102, 126, 234, 0.3);
  border-radius: 16px;
  padding: 20px 25px;
  margin-bottom: 30px;
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.copyright-icon {
  font-size: 32px;
  color: var(--primary-color);
  flex-shrink: 0;
}

.copyright-title {
  font-weight: 600;
  color: var(--dark-color);
  margin-bottom: 5px;
}

.copyright-text {
  font-size: 13px;
  color: #666;
}

/* 文章统计 */
.article-stats {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 25px 30px;
  margin-bottom: 30px;
  box-shadow: var(--card-shadow);
  display: flex;
  justify-content: space-around;
  gap: 20px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.stat-icon {
  font-size: 24px;
}

.stat-text {
  font-size: 14px;
  color: #666;
}

/* 上一篇/下一篇 */
.article-nav {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.nav-item {
  flex: 1;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 20px 25px;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: var(--card-shadow);
}

.nav-item:hover {
  transform: translateY(-3px);
  box-shadow: var(--card-hover-shadow);
}

.prev-item {
  border-left: 4px solid var(--primary-color);
}

.next-item {
  border-right: 4px solid var(--primary-color);
  text-align: right;
}

.nav-label {
  font-size: 12px;
  color: #999;
  margin-bottom: 8px;
  display: block;
}

.nav-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--dark-color);
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

/* 评论区 */
.comments-section {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 30px;
  box-shadow: var(--card-shadow);
}

.section-header {
  margin-bottom: 25px;
}

.section-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--dark-color);
  display: flex;
  align-items: center;
  gap: 10px;
}

.comment-input-box {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #f0f0f0;
}

.input-wrapper {
  flex: 1;
}

.comment-input {
  margin-bottom: 15px;
}

.comment-input :deep(.el-textarea__inner) {
  border-radius: 12px;
  border-color: #e0e0e0;
  transition: var(--transition);
}

.comment-input :deep(.el-textarea__inner:focus) {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.input-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.emoji-btn {
  color: #666;
}

.submit-btn {
  border-radius: 20px;
  padding: 8px 25px;
  background: var(--gradient-1);
  border: none;
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.comment-item {
  display: flex;
  gap: 15px;
  padding: 20px;
  background: #fafafa;
  border-radius: 12px;
  transition: var(--transition);
}

.comment-item:hover {
  background: #f5f5f5;
}

.comment-content {
  flex: 1;
  min-width: 0;
}

.comment-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.comment-author {
  font-weight: 600;
  color: var(--dark-color);
}

.comment-time {
  font-size: 12px;
  color: #999;
}

.comment-text {
  font-size: 14px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 10px;
}

.comment-actions {
  display: flex;
  gap: 15px;
}

.comment-action-btn {
  color: #999;
  font-size: 12px;
}

.comment-action-btn:hover {
  color: var(--primary-color);
}

@media (max-width: 1024px) {
  .detail-layout {
    flex-direction: column;
  }
  
  .article-header,
  .article-content,
  .article-tags-section,
  .article-stats,
  .comments-section {
    padding: 20px;
  }
  
  .article-title {
    font-size: 22px;
  }
  
  .article-cover {
    height: 250px;
  }
  
  .article-nav {
    flex-direction: column;
  }
  
  .next-item {
    text-align: left;
    border-right: none;
    border-left: 4px solid var(--primary-color);
  }
}

@media (max-width: 768px) {
  .article-info {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .article-actions {
    width: 100%;
    justify-content: space-between;
  }
  
  .article-stats {
    flex-wrap: wrap;
  }
  
  .article-tags-section {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
