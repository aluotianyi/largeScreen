<template>
  <div ref="chart" class="v-chart" id="chart">
 
  </div>
 </template>
 <script setup lang="ts">
 import {ref,nextTick,watch} from "vue"
 import * as echarts from 'echarts';
 const props=defineProps({
   baseScale:{
     type:Object,
     default:()=>{
       return {
         width:window.innerWidth/1920,
         height:window.innerHeight/930,
       }
     }
   }
 })
 let myChart = void 0
 watch(()=>props.baseScale,()=>{
   nextTick(()=>{
     init()
   })
 },{immediate:true,deep:true})
 const init =()=>{
   // 重置option
  myChart = new BMapGL.Map("chart");
  var point = new BMapGL.Point(113.307649675,23.1200491021);
  myChart.centerAndZoom(point, 6); 
  myChart.enableScrollWheelZoom(true)
  myChart.setMapType(BMAP_SATELLITE_MAP);
  let dist = new BMapGL.DistrictLayer({
      name: '(  广东省  )',
      kind: 1,
      fillColor: '#618bf8',
      strokeColor: '#daeafa',
      viewport: true
  });
  myChart.addDistrictLayer(dist);
 }
 
 </script>
<style scoped>
.v-chart :deep(.anchorBL){
  display: none !important;
}
.v-chart :deep(.logo-text){
 display: none !important;
}
</style>
 