<template>
  <component :is="props.name" class="v-chart" ref="vChart" :baseScale="{...baseScale}"></component>
</template>
<script setup lang="ts">
import {onMounted,ref,onBeforeUnmount,getCurrentInstance} from "vue"
const props= defineProps({
  name:{
    type:String,
    default:''
  }
})
// 子节点dom
const vChart=ref(null)
const screenData= getCurrentInstance()?.appContext.config.globalProperties.$screenData
// 基础缩放比例为1920下为1倍
let baseScale=ref({
      width:window.innerWidth*(window.devicePixelRatio||1)/screenData.width,
      height:window.innerHeight*(window.devicePixelRatio||1)/screenData.height,
})
// 以1920为基准缩放比例，监听缩放充值比例维护echarts中字体大小等比缩放
const resize=()=>{
      baseScale.value={
        width:window.innerWidth*(window.devicePixelRatio||1)/screenData.width,
        height:window.innerHeight*(window.devicePixelRatio||1)/screenData.height,
      }
}
onMounted(()=>{
  window.addEventListener('resize',resize)
})
onBeforeUnmount(()=>{
  window.removeEventListener('resize',resize)
})
</script>
<style scoped>
.v-chart{
  width: 100%;
  height:calc(100% - 0.25rem) ;
}
</style>

