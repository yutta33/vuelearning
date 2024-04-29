<template>
<div>
  <h2>5.1.1 双方向データバインディングを実現するv-model</h2>
  <section>
  <input type="text" v-model="inputNameModel">
  <p>{{ inputNameModel }}</p>
</section>
</div>
</template>
<script setup >
import {ref} from "vue";
// 5.1.1 双方向データバインディングを実現するv-model
const inputNameModel = ref("双方向");
</script>
