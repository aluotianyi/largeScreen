<template>
  <div class="flex-col">
    <div class="info-one bg" >
      <div class="mark-title">我是一个地图</div>
      <v-chart class="info-chart" name="v-map"></v-chart>
    </div>
    <div class="info-two bg" >
      <div class="mark-title">我是一个折线</div>
      <v-chart class="info-chart" name="v-line"></v-chart>
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
  position: relative;
}
.info-two{
  height: 49.5%;
}
</style>