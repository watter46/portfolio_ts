<!-- <script setup lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: 'main-component',
})
</script> -->

<template>
    <div class="container-fluid">
        <div id="nav">
          <router-link to="/todo">Todo</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
