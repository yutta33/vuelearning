<template>
<div>
  <h2>5.1.5 v-modelの修飾子</h2>
  <section>
    <input type="text" v-model.trim="trimedText">
  </section><br>
    <p>{{ trimedText }}</p>
</div>
</template>
<script setup >
import {ref} from "vue";
// 5.1.5 v-modelの修飾子
const trimedText = ref("");
</script>
