<template>
  <div class="home-view">
    <!-- 横幅轮播 -->
    <BannerCarousel />
    
    <!-- 魔方分类 -->
    <CategoryCube />
    
    <!-- 主内容区：文章列表 + 侧边栏 -->
    <div class="main-layout">
      <ArticleList />
      <SidebarWidget />
    </div>
  </div>
</template>

<script setup>
import BannerCarousel from '@/components/BannerCarousel.vue'
import CategoryCube from '@/components/CategoryCube.vue'
import ArticleList from '@/components/ArticleList.vue'
import SidebarWidget from '@/components/SidebarWidget.vue'
</script>

<style scoped>
.home-view {
  width: 100%;
}

.main-layout {
  display: flex;
  gap: 30px;
  margin-top: 10px;
}

@media (max-width: 1024px) {
  .main-layout {
    flex-direction: column;
  }
}
</style>
