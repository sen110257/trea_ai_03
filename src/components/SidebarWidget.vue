<template>
  <div class="sidebar-widget">
    <!-- 博主个人简介 -->
    <div class="widget-card profile-card">
      <div class="profile-header">
        <div class="profile-bg" :style="{ background: authorGradient }"></div>
        <el-avatar :size="80" :src="authorInfo.avatar" class="profile-avatar" />
      </div>
      <div class="profile-content">
        <h3 class="profile-name">{{ authorInfo.name }}</h3>
        <p class="profile-motto">{{ authorInfo.motto }}</p>
        <p class="profile-desc">{{ authorInfo.description }}</p>
        
        <div class="profile-stats">
          <div class="stat-item">
            <span class="stat-value">{{ authorInfo.articles }}</span>
            <span class="stat-label">文章</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">{{ authorInfo.followers }}</span>
            <span class="stat-label">粉丝</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">{{ authorInfo.likes }}</span>
            <span class="stat-label">获赞</span>
          </div>
        </div>
        
        <div class="profile-social">
          <a 
            v-for="link in authorInfo.socialLinks" 
            :key="link.name"
            class="social-btn"
            :title="link.name"
            href="#"
          >
            <span class="social-icon">{{ link.icon }}</span>
          </a>
        </div>
        
        <el-button type="primary" class="follow-btn fun-button" block>
          <el-icon><Plus /></el-icon>
          关注博主
        </el-button>
      </div>
    </div>
    
    <!-- 热门文章推荐 -->
    <div class="widget-card hot-card">
      <div class="widget-header">
        <h3 class="widget-title">
          <span class="title-icon">🔥</span>
          热门文章
        </h3>
      </div>
      <div class="hot-list">
        <div 
          v-for="(article, index) in hotArticles" 
          :key="article.id"
          class="hot-item"
          @click="goToArticle(article.id)"
        >
          <div class="hot-rank" :class="{ 'top-rank': index < 3 }">
            {{ index + 1 }}
          </div>
          <div class="hot-info">
            <h4 class="hot-title">{{ article.title }}</h4>
            <div class="hot-meta">
              <span class="hot-views">
                <el-icon><View /></el-icon>
                {{ article.views }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 标签云 -->
    <div class="widget-card tags-card">
      <div class="widget-header">
        <h3 class="widget-title">
          <span class="title-icon">🏷️</span>
          标签云
        </h3>
      </div>
      <div class="tags-cloud">
        <span 
          v-for="tag in tagCloud" 
          :key="tag.name"
          class="cloud-tag"
          :style="{ 
            '--tag-color': tag.color,
            '--tag-size': getTagSize(tag.count)
          }"
          @click="selectTag(tag.name)"
        >
          {{ tag.name }}
        </span>
      </div>
    </div>
    
    <!-- 公告栏 -->
    <div class="widget-card notice-card">
      <div class="widget-header">
        <h3 class="widget-title">
          <span class="title-icon">📢</span>
          公告
        </h3>
      </div>
      <div class="notice-content">
        <div class="notice-item">
          <span class="notice-icon">🎉</span>
          <p class="notice-text">博客访问量突破 10 万！感谢大家的支持！</p>
        </div>
        <div class="notice-item">
          <span class="notice-icon">✨</span>
          <p class="notice-text">新开了「读书笔记」分类，欢迎阅读分享</p>
        </div>
        <div class="notice-item">
          <span class="notice-icon">💡</span>
          <p class="notice-text">有任何问题或建议，欢迎在评论区留言</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { Plus, View } from '@element-plus/icons-vue'
import { authorInfo, hotArticles, tagCloud } from '@/data/staticData'

const router = useRouter()

const authorGradient = computed(() => {
  return 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
})

const goToArticle = (id) => {
  router.push(`/article/${id}`)
}

const selectTag = (tagName) => {
  console.log('选择标签:', tagName)
}

const getTagSize = (count) => {
  if (count >= 15) return '1.2rem'
  if (count >= 10) return '1.1rem'
  if (count >= 7) return '1rem'
  return '0.9rem'
}
</script>

<style scoped>
.sidebar-widget {
  width: 320px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: sticky;
  top: 90px;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
  padding-right: 5px;
}

.sidebar-widget::-webkit-scrollbar {
  width: 5px;
}

.sidebar-widget::-webkit-scrollbar-thumb {
  background: rgba(102, 126, 234, 0.3);
  border-radius: 3px;
}

.widget-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--card-shadow);
  transition: var(--transition);
}

.widget-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--card-hover-shadow);
}

.widget-header {
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
}

.widget-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--dark-color);
  display: flex;
  align-items: center;
  gap: 10px;
}

.title-icon {
  font-size: 18px;
}

/* 博主个人简介 */
.profile-card {
  position: relative;
}

.profile-header {
  position: relative;
  height: 120px;
  overflow: hidden;
}

.profile-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.profile-avatar {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  border: 4px solid white;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.profile-content {
  padding: 50px 20px 20px;
  text-align: center;
}

.profile-name {
  font-size: 20px;
  font-weight: 700;
  color: var(--dark-color);
  margin-bottom: 8px;
}

.profile-motto {
  font-size: 13px;
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 12px;
}

.profile-desc {
  font-size: 13px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.profile-stats {
  display: flex;
  justify-content: space-around;
  padding: 15px 0;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 15px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 22px;
  font-weight: 700;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 12px;
  color: #999;
  margin-top: 5px;
}

.profile-social {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 15px;
}

.social-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(102, 126, 234, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  text-decoration: none;
}

.social-btn:hover {
  background: var(--gradient-1);
  transform: translateY(-2px);
}

.social-icon {
  font-size: 16px;
}

.follow-btn {
  border-radius: 25px;
  font-weight: 600;
  background: var(--gradient-1);
  border: none;
}

/* 热门文章 */
.hot-list {
  padding: 10px 20px 20px;
}

.hot-item {
  display: flex;
  gap: 12px;
  padding: 12px 0;
  cursor: pointer;
  transition: var(--transition);
  border-bottom: 1px solid #f5f5f5;
}

.hot-item:last-child {
  border-bottom: none;
}

.hot-item:hover {
  padding-left: 8px;
}

.hot-rank {
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  color: #999;
  flex-shrink: 0;
}

.hot-rank.top-rank {
  background: var(--gradient-1);
  color: white;
}

.hot-info {
  flex: 1;
  min-width: 0;
}

.hot-title {
  font-size: 14px;
  color: var(--dark-color);
  line-height: 1.5;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  transition: color 0.3s ease;
}

.hot-item:hover .hot-title {
  color: var(--primary-color);
}

.hot-meta {
  display: flex;
  align-items: center;
}

.hot-views {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: #999;
}

/* 标签云 */
.tags-cloud {
  padding: 15px 20px 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.cloud-tag {
  font-size: var(--tag-size);
  color: var(--tag-color);
  background: rgba(102, 126, 234, 0.08);
  padding: 6px 14px;
  border-radius: 20px;
  cursor: pointer;
  transition: var(--transition);
  font-weight: 500;
  border: 1px solid transparent;
}

.cloud-tag:hover {
  background: var(--tag-color);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

/* 公告栏 */
.notice-content {
  padding: 10px 20px 20px;
}

.notice-item {
  display: flex;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px dashed #f0f0f0;
}

.notice-item:last-child {
  border-bottom: none;
}

.notice-icon {
  font-size: 20px;
  flex-shrink: 0;
}

.notice-text {
  font-size: 13px;
  color: #666;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .sidebar-widget {
    width: 100%;
    min-width: auto;
    position: static;
    max-height: none;
    padding-right: 0;
  }
}
</style>
