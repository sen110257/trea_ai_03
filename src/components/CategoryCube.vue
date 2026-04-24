<template>
  <div class="category-cube">
    <div class="section-header">
      <h2 class="section-title">
        <span class="title-icon">🎯</span>
        探索分类
      </h2>
      <p class="section-desc">发现更多精彩内容</p>
    </div>
    
    <div class="cube-grid">
      <div 
        v-for="(category, index) in categories" 
        :key="category.id"
        class="cube-item"
        :style="{ animationDelay: `${index * 0.1}s` }"
        @click="selectCategory(category.name)"
      >
        <div class="cube-inner" :style="{ background: category.gradient }">
          <div class="cube-front">
            <span class="cube-icon">{{ category.icon }}</span>
            <h3 class="cube-name">{{ category.name }}</h3>
            <p class="cube-count">{{ category.count }} 篇文章</p>
          </div>
          <div class="cube-back">
            <p class="cube-desc">{{ category.description }}</p>
            <el-button type="primary" size="small" class="view-btn">
              查看全部
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { categories } from '@/data/staticData'

const router = useRouter()

const selectCategory = (categoryName) => {
  router.push(`/category/${categoryName}`)
}
</script>

<style scoped>
.category-cube {
  margin-bottom: 50px;
}

.section-header {
  text-align: center;
  margin-bottom: 35px;
}

.section-title {
  font-size: 28px;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 10px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.title-icon {
  font-size: 32px;
  animation: bounce 2s ease-in-out infinite;
}

.section-desc {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}

.cube-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  perspective: 1000px;
}

.cube-item {
  height: 180px;
  cursor: pointer;
  animation: fadeInUp 0.6s ease-out both;
}

.cube-inner {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  transform-style: preserve-3d;
  transition: transform 0.6s ease, box-shadow 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.cube-item:hover .cube-inner {
  transform: rotateY(180deg);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.cube-front,
.cube-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 20px;
}

.cube-front {
  z-index: 2;
}

.cube-back {
  transform: rotateY(180deg);
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.cube-icon {
  font-size: 40px;
  margin-bottom: 12px;
  transition: transform 0.3s ease;
}

.cube-item:hover .cube-icon {
  transform: scale(1.2);
}

.cube-name {
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
}

.cube-count {
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
}

.cube-desc {
  color: white;
  font-size: 13px;
  text-align: center;
  margin-bottom: 15px;
  line-height: 1.5;
}

.view-btn {
  background: white;
  color: var(--primary-color);
  border: none;
  font-weight: 600;
}

.view-btn:hover {
  transform: scale(1.05);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@media (max-width: 1200px) {
  .cube-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .cube-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  
  .cube-item {
    height: 150px;
  }
  
  .cube-icon {
    font-size: 32px;
  }
  
  .cube-name {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .cube-grid {
    grid-template-columns: 1fr;
  }
}
</style>
