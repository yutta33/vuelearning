<script setup>
import {ref, onMounted} from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const root = ref(null);
onMounted(() => console.log(root.value.outerHTML));

</script>

<template>
<div class="container-fluid">
    <div class="row">

        <div id="sidebar" class="col p-0 min-vh-100">
            <div class="sidebar-item-wrapper">
                <div class="menu-button">
                  <RouterLink to="/chap03">chapter03</RouterLink>
                </div>
                <div class="menu-button">
                  <RouterLink to="/chap04">chapter04</RouterLink>
                </div>
                <div class="menu-button">
                  <RouterLink to="/chap05">chapter05</RouterLink>
                </div>
            </div>
        </div>
        <main class="main">
      <div ref="root" >
        <RouterView />
      </div>        
    </main>
      </div>
      
</div>


</template>

<style scoped>
#sidebar {
    background: #ECEBC2;
    widows: 100px;
    flex: 0 0 250px;
    -ms-flex: 0 0 250px;
}

.sidebar-item-wrapper {
    margin-bottom: 0;
    top: 0;
    position: sticky;
    z-index: 1;
}

.menu-button {
    background: #FFFFFF;
    display: block;
    font-size: 16px;
    height: 55px;
    padding:10px 20px;
    text-decoration: none;
}
/* nav {
  width: 30%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
} */

</style>
