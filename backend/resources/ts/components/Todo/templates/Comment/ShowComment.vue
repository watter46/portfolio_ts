<script setup lang="ts">
interface Props {
  id: number,
  comment: string,
  titleIndex: number,
  taskIndex: number,
  commentIndex: number
}

defineProps<Props>();
</script>

<template>
  <div class="card-flex__show">
    <p class="h4">{{comment}}</p>
  </div>
</template>
