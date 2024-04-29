<template>
<div>
  <h2>5.2.3 データバインドを一度だけ表示させるv-once</h2>
  <section>
    <input type="number" v-model="price">円<br>
    <p>金額は{{ price }}円です</p>
    <p v-once>金額は{{ price }}円です</p>
  </section>
</div>
</template>
<script setup >
import {ref} from "vue";
// 5.2.3 データバインドを一度だけ表示させるv-once
const price = ref(1000);
</script>
