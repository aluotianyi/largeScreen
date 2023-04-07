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
    tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        padding:20,
        left:25,
        rigth:25,
        type: 'scroll',
        textStyle: {
          color: "white"
        },
        pageTextStyle: {
          color: "white"
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '6%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLine: {
            lineStyle: {
              color: "white"
            }
          },
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: "white"
            }
          },
          splitLine:{ //修改背景线条样式
            show:true,//是否展示 
            lineStyle:{ 
              color:"rgb(221, 165, 11)",//线条颜色
              type:"dashed"//线条样式，默认是实现，dashed是虚线
            },
          },
        }
      ],
      series: [
        {
          name: 'Direct',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: 'Email',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Union Ads',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Video Ads',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series'
          },
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: 'Search Engine',
          type: 'bar',
          data: [862, 1018, 964, 1026, 1679, 1600, 1570],
          emphasis: {
            focus: 'series'
          },
          markLine: {
            lineStyle: {
              type: 'dashed'
            },
            data: [[{ type: 'min' }, { type: 'max' }]]
          }
        },
        {
          name: 'Baidu',
          type: 'bar',
          barWidth: 5,
          stack: 'Search Engine',
          emphasis: {
            focus: 'series'
          },
          data: [620, 732, 701, 734, 1090, 1130, 1120]
        },
        {
          name: 'Google',
          type: 'bar',
          stack: 'Search Engine',
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 290, 230, 220]
        },
        {
          name: 'Bing',
          type: 'bar',
          stack: 'Search Engine',
          emphasis: {
            focus: 'series'
          },
          data: [60, 72, 71, 74, 190, 130, 110]
        },
        {
          name: 'Others',
          type: 'bar',
          stack: 'Search Engine',
          emphasis: {
            focus: 'series'
          },
          data: [62, 82, 91, 84, 109, 110, 120]
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
 
 