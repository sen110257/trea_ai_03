<template>
  <footer class="footer-info">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section brand-section">
          <div class="footer-logo">
            <div class="logo-icon">
              <span class="logo-text">趣</span>
            </div>
            <span class="logo-title">趣味博客</span>
          </div>
          <p class="footer-desc">
            一个充满活力的个人博客，分享技术、生活、读书与成长。让每一篇文章都成为一次有趣的探索之旅。
          </p>
          <div class="footer-social">
            <a 
              v-for="link in socialLinks" 
              :key="link.name"
              class="social-link"
              :title="link.name"
              href="#"
            >
              <span class="social-icon">{{ link.icon }}</span>
            </a>
          </div>
        </div>
        
        <div class="footer-section links-section">
          <h4 class="section-title">快速导航</h4>
          <ul class="footer-links">
            <li v-for="link in quickLinks" :key="link.name">
              <router-link :to="link.path" class="footer-link">
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>
        
        <div class="footer-section category-section">
          <h4 class="section-title">热门分类</h4>
          <div class="footer-tags">
            <el-tag 
              v-for="tag in hotTags" 
              :key="tag.name"
              :color="tag.color"
              effect="dark"
              size="small"
              class="footer-tag"
            >
              {{ tag.name }}
            </el-tag>
          </div>
        </div>
        
        <div class="footer-section subscribe-section">
          <h4 class="section-title">订阅更新</h4>
          <p class="subscribe-desc">订阅我们，第一时间获取最新文章</p>
          <div class="subscribe-form">
            <el-input
              v-model="subscribeEmail"
              placeholder="输入您的邮箱"
              class="email-input"
            >
              <template #append>
                <el-button type="primary" @click="handleSubscribe">订阅</el-button>
              </template>
            </el-input>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="bottom-content">
          <p class="copyright">
            © 2024 趣味博客. All Rights Reserved.
          </p>
          <div class="footer-extra">
            <span class="powered-by">
              用 ❤️ 和 <span class="tech-stack">Vue3</span> 构建
            </span>
            <span class="icp-info">
              备案号: 京ICP备XXXXXXXX号
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const subscribeEmail = ref('')

const socialLinks = [
  { name: 'GitHub', icon: '🐙' },
  { name: '微信', icon: '💬' },
  { name: '微博', icon: '📱' },
  { name: '邮箱', icon: '📧' },
  { name: 'RSS', icon: '📡' }
]

const quickLinks = [
  { name: '首页', path: '/' },
  { name: '技术文章', path: '/category/前端开发' },
  { name: '生活随笔', path: '/category/生活随笔' },
  { name: '读书笔记', path: '/category/读书笔记' },
  { name: '关于我', path: '/' }
]

const hotTags = [
  { name: 'Vue3', color: '#667eea' },
  { name: 'JavaScript', color: '#f56565' },
  { name: 'CSS', color: '#4facfe' },
  { name: 'Node.js', color: '#43e97b' },
  { name: '生活', color: '#fa709a' },
  { name: '阅读', color: '#a18cd1' }
]

const handleSubscribe = () => {
  if (!subscribeEmail.value) {
    ElMessage.warning('请输入邮箱地址')
    return
  }
  ElMessage.success('订阅成功！感谢您的关注')
  subscribeEmail.value = ''
}
</script>

<style scoped>
.footer-info {
  background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  padding-top: 60px;
  margin-top: 60px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.brand-section {
  max-width: 300px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--gradient-1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.logo-text {
  color: white;
  font-size: 18px;
  font-weight: 800;
}

.logo-title {
  font-size: 18px;
  font-weight: 700;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-desc {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  line-height: 1.8;
}

.footer-social {
  display: flex;
  gap: 12px;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  text-decoration: none;
}

.social-link:hover {
  background: var(--gradient-1);
  transform: translateY(-3px);
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
}

.social-icon {
  font-size: 18px;
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  color: white;
  margin-bottom: 10px;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 30px;
  height: 3px;
  background: var(--gradient-1);
  border-radius: 2px;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 14px;
  transition: var(--transition);
}

.footer-link:hover {
  color: var(--primary-color);
  padding-left: 5px;
}

.footer-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.footer-tag {
  cursor: pointer;
  transition: var(--transition);
}

.footer-tag:hover {
  transform: scale(1.05);
}

.subscribe-desc {
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
  margin-bottom: 15px;
}

.subscribe-form {
  width: 100%;
}

.email-input :deep(.el-input__wrapper) {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  box-shadow: none;
  border-radius: 8px 0 0 8px;
}

.email-input :deep(.el-input__inner) {
  color: white;
}

.email-input :deep(.el-input__inner::placeholder) {
  color: rgba(255, 255, 255, 0.5);
}

.email-input :deep(.el-input-group__append) {
  background: transparent;
  border: none;
  padding: 0;
}

.email-input :deep(.el-button) {
  border-radius: 0 8px 8px 0;
  height: 40px;
  background: var(--gradient-1);
  border: none;
}

.footer-bottom {
  padding: 25px 0;
}

.bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

.copyright {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
}

.footer-extra {
  display: flex;
  gap: 30px;
  align-items: center;
}

.powered-by {
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
}

.tech-stack {
  color: var(--primary-color);
  font-weight: 600;
}

.icp-info {
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .bottom-content {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-extra {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
