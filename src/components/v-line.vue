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
      left:'center',
      bottom:'0%',
      type: 'scroll',
      textStyle: {
        color: "white"
      },
      pageTextStyle: {
        color: "white"
      },
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        label: {
          show: true,
          position: 'top'
        },
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320]
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
 
 