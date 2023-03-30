<template>
  <div class="flex-col">
    <div class="info-one bg" >
      <div class="mark-title">我是一个饼</div>
      <v-chart class="info-chart" name="v-pie"></v-chart>
    </div>
    <div class="info-two bg" >
      <div class="mark-title">我是一个条形图</div>
      <v-chart class="info-chart" name="v-bar"></v-chart>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
.info-one{
  height: 49.5%;
}
.info-chart{
  height: calc(100% - 0.25rem);
}
.info-two{
  height: 49.5%;
}
</style>