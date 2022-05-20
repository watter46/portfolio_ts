<script setup lang="ts">
interface Props {
  id: number,
  title: string,
  titleIndex: number
}

defineProps<Props>();
</script>

<template>
  <div class="card-flex__show">
    <p class="h2">{{title}}</p>
  </div>
</template>
