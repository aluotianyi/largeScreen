<template>
  <div class="flex-col">
    <div class="info-one bg" >
      <div class="mark-title">我是一个钟</div>
      <v-chart class="info-one-clock" name="v-clock"></v-chart>
    </div>
    <div class="info-two bg" ref="diss">
      <div class="mark-title">我是信息框</div>
      <div class="info-two-box" ref="infoBox">
        <div class="info-two-box-animate" ref="animateBox">
          <div class="info-two-box-info" v-for="(item,key) in infoList" :key="key">·&nbsp;&nbsp;&nbsp;{{item}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref ,onMounted,reactive,onUnmounted,getCurrentInstance } from 'vue';
const infoBox= ref(null)
const animateBox=ref(null)
const infoList= reactive([
  '科西嘉的怪物在儒安港登陆',
  '吃人的魔鬼向格腊斯前进',
  '篡位者进入格勒诺布尔',
  '波拿巴占领里昂',
  '拿破仑接近枫丹白露',
  '皇帝陛下将于今日抵达他忠实的巴黎',
  '科西嘉的怪物在儒安港登陆',
  '吃人的魔鬼向格腊斯前进',
  '篡位者进入格勒诺布尔',
  '波拿巴占领里昂',
  '拿破仑接近枫丹白露',
  '皇帝陛下将于今日抵达他忠实的巴黎',
  '科西嘉的怪物在儒安港登陆',
  '吃人的魔鬼向格腊斯前进',
  '篡位者进入格勒诺布尔',
  '波拿巴占领里昂',
  '拿破仑接近枫丹白露',
  '皇帝陛下将于今日抵达他忠实的巴黎',
])
// 获取基础屏幕宽高
const screenData= getCurrentInstance()?.appContext.config.globalProperties.$screenData
// 取得缩放比
// 声明动画方法，并为cancelAnimationFrame预留变量
let animate= ref(0)
// 通过requestAnimationFrame递归执行滚动动画，逻辑为检测信息数*单条信息高度是否大于父盒子总高+单条信息高度，
let scroll=()=>{
  const baseScale =window.innerWidth*(window.devicePixelRatio||1)/screenData.width
  if(animate.value){
    window.cancelAnimationFrame(animate.value)
    animate.value=0
  }
  let fatherHeight=infoBox.value.getBoundingClientRect().height
  let BaseSpeed=baseScale*40
  let childrenHeight=BaseSpeed*infoList.length
  let base=0
  let render=()=>{
    base+=(0.2*baseScale)
    if(base<BaseSpeed){
      animateBox.value.style.marginTop=-base+'px'
      animate.value=window.requestAnimationFrame(render)
    }else{
      base=0
      let info = infoList.splice(0,1)
      infoList.push(...info)
      animateBox.value.style.marginTop= 0+'px'
      animate.value=window.requestAnimationFrame(render)
    }
  }
  if(childrenHeight-fatherHeight>BaseSpeed){
    animate.value = window.requestAnimationFrame(render)
  }
}
onMounted(() => {
  // 无限滚动加载：盒子总元素高度高出父容器时，可以开启动画
  // 动画逻辑：
  // 1、1.5s内将内容向上抬升一条信息的高度
  // 2、移除首条元素，植入到数组尾部
  // 3、动画完成后，重置元素高度
  scroll()
  window.addEventListener('resize',scroll)
})
onUnmounted(()=>{
  animate&&window.cancelAnimationFrame(animate);
  window.removeEventListener('resize',scroll)
})
</script>
<style scoped>
.info-one{
  height: 49.5%;
}
.info-one-clock{
  height: calc(100% - 0.25rem);
}
.info-two{
  height: 49.5%;
}
.info-two-box{
  overflow: hidden;
  height: calc(100% - 0.25rem);
}
.info-two-box-animate{
  width: 100%;
  height: fit-content;
}
.info-two-box-info{
 box-sizing: border-box;
 width: calc(100% - 0.4rem);
 margin-left: 0.2rem;
 padding: 0 0.2rem;
 border-bottom: 0.01rem dashed rgb(221, 165, 11);
 color: white;
 height: 0.4rem;
 line-height: 0.4rem;
 font-size: 0.2rem;
 white-space: nowrap; 
 text-overflow: ellipsis; 
 overflow: hidden; 
}
</style>