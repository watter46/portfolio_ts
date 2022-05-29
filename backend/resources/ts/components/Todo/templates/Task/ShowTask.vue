<script setup lang="ts">
interface Props {
  id: number,
  task: string,
  taskIndex: number,
  titleIndex: number
}

defineProps<Props>();
</script>

<template>
  <div class="card-flex__show">
    <p class="h3">{{task}}</p>
  </div>
</template>
