<template>
  <component :is="props.name" class="v-chart" ref="vChart" :baseScale="{...baseScale}"></component>
</template>
<script setup lang="ts">
import {onMounted,ref,onBeforeUnmount} from "vue"
const props= defineProps({
  name:{
    type:String,
    default:''
  }
})
// 子节点dom
const vChart=ref(null)
// 基础缩放比例为1920下为1倍
let baseScale=ref({
      width:window.innerWidth/1920,
      height:window.innerHeight/930,
})
// 做一个防抖处理
let lock=void 0
const resize=()=>{
      // 以1920为基准缩放比例，监听缩放充值比例维护echarts中字体大小等比缩放
      baseScale.value={
        width:window.innerWidth/1920,
        height:window.innerHeight/930,
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

