<template>
  <div class="banner-carousel">
    <el-carousel 
      :interval="4000" 
      type="card"
      height="380px"
      :autoplay="true"
      indicator-position="outside"
      arrow="always"
    >
      <el-carousel-item v-for="banner in banners" :key="banner.id">
        <div class="banner-item" :style="{ background: banner.gradient }">
          <div class="banner-content">
            <div class="banner-text">
              <h1 class="banner-title">{{ banner.title }}</h1>
              <p class="banner-subtitle">{{ banner.subtitle }}</p>
              <div class="banner-actions">
                <el-button type="primary" size="large" class="explore-btn fun-button">
                  开始探索
                </el-button>
                <el-button size="large" class="more-btn">
                  了解更多
                </el-button>
              </div>
            </div>
            <div class="banner-decoration">
              <div class="deco-circle deco-1"></div>
              <div class="deco-circle deco-2"></div>
              <div class="deco-circle deco-3"></div>
              <div class="deco-shape shape-1"></div>
              <div class="deco-shape shape-2"></div>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { banners } from '@/data/staticData'
</script>

<style scoped>
.banner-carousel {
  margin-bottom: 40px;
}

:deep(.el-carousel__container) {
  border-radius: 20px;
  overflow: hidden;
}

:deep(.el-carousel__indicators--outside) {
  margin-top: 20px;
}

:deep(.el-carousel__indicator) {
  padding: 10px 6px;
}

:deep(.el-carousel__button) {
  width: 30px;
  height: 8px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.3);
  transition: var(--transition);
}

:deep(.is-active .el-carousel__button) {
  background: var(--gradient-1);
  width: 50px;
}

:deep(.el-carousel__arrow) {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  font-size: 20px;
  transition: var(--transition);
}

:deep(.el-carousel__arrow:hover) {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.banner-item {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.banner-content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
}

.banner-text {
  flex: 1;
  max-width: 500px;
}

.banner-title {
  font-size: 42px;
  font-weight: 800;
  color: white;
  margin-bottom: 15px;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  animation: slideUp 0.6s ease-out;
}

.banner-subtitle {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 30px;
  line-height: 1.6;
  animation: slideUp 0.6s ease-out 0.1s both;
}

.banner-actions {
  display: flex;
  gap: 15px;
  animation: slideUp 0.6s ease-out 0.2s both;
}

.explore-btn {
  background: white;
  color: var(--primary-color);
  border: none;
  font-weight: 700;
  padding: 15px 35px;
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: var(--transition);
}

.explore-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.more-btn {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.5);
  font-weight: 600;
  padding: 15px 35px;
  border-radius: 30px;
  backdrop-filter: blur(10px);
  transition: var(--transition);
}

.more-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: white;
  transform: translateY(-3px);
}

.banner-decoration {
  position: relative;
  width: 300px;
  height: 300px;
}

.deco-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
}

.deco-1 {
  width: 200px;
  height: 200px;
  top: 50px;
  right: 50px;
  animation: float 4s ease-in-out infinite;
}

.deco-2 {
  width: 120px;
  height: 120px;
  top: 100px;
  left: 30px;
  animation: float 3.5s ease-in-out infinite 0.5s;
}

.deco-3 {
  width: 80px;
  height: 80px;
  bottom: 50px;
  right: 80px;
  background: rgba(255, 255, 255, 0.2);
  animation: float 4.5s ease-in-out infinite 1s;
}

.deco-shape {
  position: absolute;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.15);
}

.shape-1 {
  top: 20px;
  left: 80px;
  transform: rotate(45deg);
  animation: rotate 10s linear infinite;
}

.shape-2 {
  bottom: 80px;
  left: 120px;
  transform: rotate(15deg);
  animation: rotate 15s linear infinite reverse;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 1024px) {
  .banner-content {
    padding: 0 40px;
  }
  
  .banner-title {
    font-size: 32px;
  }
  
  .banner-subtitle {
    font-size: 16px;
  }
  
  .banner-decoration {
    display: none;
  }
}

@media (max-width: 768px) {
  .banner-carousel {
    margin-bottom: 30px;
  }
  
  :deep(.el-carousel__container) {
    height: 300px !important;
  }
  
  .banner-content {
    padding: 0 20px;
  }
  
  .banner-title {
    font-size: 26px;
  }
  
  .banner-subtitle {
    font-size: 14px;
  }
  
  .banner-actions {
    flex-direction: column;
  }
  
  .explore-btn,
  .more-btn {
    width: 100%;
  }
}
</style>
