<script setup lang="ts">
import { ygRequest } from '@/service';

ygRequest.get({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
})



</script>

<template>
  <div class="main">
    <h2>Main</h2>
  </div>
</template>

<style lang="less" scoped></style>
