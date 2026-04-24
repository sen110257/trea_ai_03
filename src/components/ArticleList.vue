<template>
  <div class="article-list">
    <div class="list-header">
      <div class="header-left">
        <h2 class="list-title">
          <span class="title-icon">📝</span>
          最新文章
        </h2>
        <span class="article-count">共 {{ articles.length }} 篇</span>
      </div>
      <div class="header-right">
        <el-radio-group v-model="sortBy" size="small" @change="handleSort">
          <el-radio-button label="latest">最新</el-radio-button>
          <el-radio-button label="hot">热门</el-radio-button>
        </el-radio-group>
      </div>
    </div>
    
    <div class="articles-container">
      <div 
        v-for="(article, index) in sortedArticles" 
        :key="article.id"
        class="article-card card-hover"
        :style="{ animationDelay: `${index * 0.1}s` }"
        @click="goToArticle(article.id)"
      >
        <div class="card-image">
          <img :src="article.coverImage" :alt="article.title" class="cover-img" />
          <div class="image-overlay">
            <el-tag :type="getTagType(article.category)" size="small" class="category-tag">
              {{ article.category }}
            </el-tag>
          </div>
        </div>
        
        <div class="card-content">
          <h3 class="article-title">{{ article.title }}</h3>
          <p class="article-summary">{{ article.summary }}</p>
          
          <div class="article-meta">
            <div class="meta-left">
              <el-avatar :size="28" :src="article.avatar" class="author-avatar" />
              <span class="author-name">{{ article.author }}</span>
              <span class="meta-divider">·</span>
              <span class="create-time">{{ article.createTime }}</span>
            </div>
            <div class="meta-right">
              <span class="meta-item">
                <el-icon><View /></el-icon>
                {{ article.views }}
              </span>
              <span class="meta-item">
                <el-icon><ChatDotRound /></el-icon>
                {{ article.comments }}
              </span>
              <span class="meta-item">
                <el-icon><Star /></el-icon>
                {{ article.likes }}
              </span>
            </div>
          </div>
          
          <div class="article-tags">
            <el-tag 
              v-for="tag in article.tags.slice(0, 3)" 
              :key="tag"
              size="small"
              effect="plain"
              class="tag-item"
            >
              {{ tag }}
            </el-tag>
          </div>
        </div>
      </div>
    </div>
    
    <div class="load-more">
      <el-button type="primary" size="large" class="load-btn fun-button">
        <el-icon><Loading /></el-icon>
        加载更多
      </el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { View, ChatDotRound, Star, Loading } from '@element-plus/icons-vue'
import { articles } from '@/data/staticData'

const router = useRouter()
const sortBy = ref('latest')

const sortedArticles = computed(() => {
  if (sortBy.value === 'hot') {
    return [...articles].sort((a, b) => b.views - a.views)
  }
  return articles
})

const goToArticle = (id) => {
  router.push(`/article/${id}`)
}

const handleSort = () => {
  console.log('排序方式:', sortBy.value)
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
</script>

<style scoped>
.article-list {
  flex: 1;
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  box-shadow: var(--card-shadow);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 15px;
}

.list-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--dark-color);
  display: flex;
  align-items: center;
  gap: 10px;
}

.title-icon {
  font-size: 24px;
}

.article-count {
  font-size: 13px;
  color: #999;
  background: rgba(102, 126, 234, 0.1);
  padding: 4px 12px;
  border-radius: 15px;
}

.articles-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.article-card {
  display: flex;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  animation: fadeInUp 0.6s ease-out both;
}

.card-image {
  position: relative;
  width: 320px;
  min-width: 320px;
  height: 220px;
  overflow: hidden;
}

.cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.article-card:hover .cover-img {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 15px;
  left: 15px;
}

.category-tag {
  font-weight: 600;
}

.card-content {
  flex: 1;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.article-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--dark-color);
  line-height: 1.4;
  transition: color 0.3s ease;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.article-card:hover .article-title {
  color: var(--primary-color);
}

.article-summary {
  font-size: 14px;
  color: #666;
  line-height: 1.8;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  border-top: 1px solid #f0f0f0;
}

.meta-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.author-avatar {
  border: 2px solid var(--primary-color);
}

.author-name {
  font-size: 13px;
  color: #333;
  font-weight: 500;
}

.meta-divider {
  color: #ddd;
}

.create-time {
  font-size: 13px;
  color: #999;
}

.meta-right {
  display: flex;
  gap: 20px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  color: #999;
  transition: color 0.3s ease;
}

.meta-item:hover {
  color: var(--primary-color);
}

.article-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag-item {
  cursor: pointer;
  transition: all 0.3s ease;
}

.tag-item:hover {
  transform: scale(1.05);
}

.load-more {
  text-align: center;
  margin-top: 40px;
}

.load-btn {
  padding: 15px 50px;
  border-radius: 30px;
  font-weight: 600;
  background: var(--gradient-1);
  border: none;
}

.load-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1024px) {
  .card-image {
    width: 250px;
    min-width: 250px;
    height: 180px;
  }
  
  .card-content {
    padding: 20px;
  }
  
  .article-title {
    font-size: 18px;
  }
}

@media (max-width: 768px) {
  .list-header {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
  
  .article-card {
    flex-direction: column;
  }
  
  .card-image {
    width: 100%;
    min-width: auto;
    height: 200px;
  }
  
  .article-meta {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
  
  .meta-right {
    gap: 15px;
  }
}
</style>
