<template>
<div>
  <h2>5.2.1 HTML文字列をそのまま表示するv-html</h2>
  <section>{{ htmlstr }}</section><br>
  <section v-html="htmlstr"></section>  
</div>
</template>
<script setup >
import {ref} from "vue";
// 5.2.1 HTML文字列をそのまま表示するv-html
const htmlstr = ref('<a href="https://vuejs.org//">Vue.jsのTOPページ</a>');
</script>
