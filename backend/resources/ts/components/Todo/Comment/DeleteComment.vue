<script setup lang="ts">
import { deleteCommentToApi } from './API/deleteCommentToApi' 


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
  <div class="card-flex__delete">
    <span type="button" class="buttonCircle" @click="deleteCommentToApi(titleIndex, taskIndex, commentIndex, id)">
      <span class="buttonCircle-cross"></span>
    </span>
  </div>
</template>
