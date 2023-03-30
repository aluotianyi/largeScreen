<template>
  <main>
    <div class="container">
      <div class="box info-left  animate__backInLeft animate__animated">
        <left-component></left-component>
      </div>
      <div class="box map-center animate__backInDown animate__animated">
        <center-component></center-component>
      </div>
      <div class="box chart-right animate__backInRight animate__animated">
        <right-component></right-component>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import leftComponent from '@/views/leftComponent.vue'
import rightComponent from '@/views/rightComponent.vue'
import centerComponent from '@/views/centerComponent.vue'
</script>
<style scoped>
.container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.box :deep(.mark-title){
  border-left: 0.03rem solid rgb(221, 165, 11);
  border-bottom: 0.01rem solid rgba(255,255,255,0.4);
  height: 0.25rem;
  line-height: 0.25rem;
  font-size: 0.16rem;
  padding-left: 0.1rem;
  color:white;
  box-sizing: border-box;
}
.box :deep(.bg){
  background: rgba(255,255,255,0.1)
}
.box :deep(.flex-col){
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 height: 100%;
}
.info-left{
  width: 29%;
  height: 100%;
}
.map-center{
  width: 40%;
  margin:0 1%;
  height: 100%;
}
.chart-right{
  width: 29%;
  height: 100%;
}
</style>

