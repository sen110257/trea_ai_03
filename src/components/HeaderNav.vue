<template>
  <header class="header-nav">
    <div class="nav-container">
      <div class="logo-wrapper" @click="goHome">
        <div class="logo-icon">
          <span class="logo-text">趣</span>
        </div>
        <span class="logo-title">趣味博客</span>
      </div>
      
      <nav class="nav-menu">
        <router-link 
          v-for="item in navItems" 
          :key="item.path" 
          :to="item.path"
          class="nav-item"
          active-class="nav-active"
        >
          <span class="nav-icon">{{ item.icon }}</span>
          <span class="nav-text">{{ item.name }}</span>
        </router-link>
      </nav>
      
      <div class="nav-actions">
        <el-input
          v-model="searchText"
          placeholder="搜索文章..."
          class="search-input"
          :prefix-icon="Search"
          @keyup.enter="handleSearch"
        >
        </el-input>
        <el-button type="primary" class="action-btn fun-button" @click="showSubscribe">
          <el-icon><Star /></el-icon>
          订阅
        </el-button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { Search, Star } from '@element-plus/icons-vue'

const router = useRouter()
const searchText = ref('')

const navItems = [
  { name: '首页', path: '/', icon: '🏠' },
  { name: '技术', path: '/category/前端开发', icon: '💻' },
  { name: '生活', path: '/category/生活随笔', icon: '🌟' },
  { name: '读书', path: '/category/读书笔记', icon: '📚' },
  { name: '归档', path: '/', icon: '📁' }
]

const goHome = () => {
  router.push('/')
}

const handleSearch = () => {
  console.log('搜索:', searchText.value)
}

const showSubscribe = () => {
  ElMessage.success('感谢您的订阅！')
}
</script>

<style scoped>
.header-nav {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(102, 126, 234, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: var(--transition);
}

.logo-wrapper:hover {
  transform: scale(1.02);
}

.logo-icon {
  width: 45px;
  height: 45px;
  border-radius: 12px;
  background: var(--gradient-1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  animation: float 3s ease-in-out infinite;
}

.logo-text {
  color: white;
  font-size: 22px;
  font-weight: 800;
}

.logo-title {
  font-size: 20px;
  font-weight: 700;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-menu {
  display: flex;
  gap: 8px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 18px;
  border-radius: 25px;
  text-decoration: none;
  color: var(--dark-color);
  font-weight: 500;
  transition: var(--transition);
}

.nav-item:hover {
  background: rgba(102, 126, 234, 0.1);
  color: var(--primary-color);
}

.nav-active {
  background: var(--gradient-1);
  color: white !important;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.nav-icon {
  font-size: 16px;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.search-input {
  width: 200px;
}

.search-input :deep(.el-input__wrapper) {
  border-radius: 25px;
  background: rgba(102, 126, 234, 0.05);
  border: 1px solid rgba(102, 126, 234, 0.2);
  box-shadow: none;
  transition: var(--transition);
}

.search-input :deep(.el-input__wrapper:hover) {
  border-color: var(--primary-color);
}

.search-input :deep(.el-input__wrapper.is-focus) {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.action-btn {
  border-radius: 25px;
  padding: 10px 20px;
  font-weight: 600;
}

@media (max-width: 1024px) {
  .nav-menu {
    display: none;
  }
  
  .search-input {
    width: 150px;
  }
}

@media (max-width: 768px) {
  .search-input {
    display: none;
  }
}
</style>
