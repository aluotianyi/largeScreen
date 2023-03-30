<template>
  <div ref="chart" class="v-chart">
 
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
 const chart= ref(null)
 let myChart = void 0
 watch(()=>props.baseScale,()=>{
   nextTick(()=>{
     init()
   })
 },{immediate:true,deep:true})
 // 浏览器Size变化驱动重绘，重绘则决定option重置
 const defineOption=()=>{
  let option={
    title: {
      text: 'Referer of a Website',
      left: 'center',
      top:10,
      textStyle: {
        fontSize: 22,
        color: "white"
      },
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      padding:20,
      left:25,
      rigth:25,
      top:40,
      type: 'scroll',
      textStyle: {
        color: "white"
      },
      pageTextStyle: {
        color: "white"
      }
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        center: ['50%', '60%'],  
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
   return option
 }
 const init =()=>{
   // 重置option
   let option= defineOption()
   // 已绘制过则销毁重绘
   myChart&&myChart.dispose()
   myChart = echarts.init(chart.value);
   myChart.setOption(option);
 }
 
 </script>
 
 