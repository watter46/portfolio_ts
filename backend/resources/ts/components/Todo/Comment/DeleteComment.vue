<script setup lang="ts">
import type { CommentType } from 'resources/ts/Store/type';
import { deleteCommentToApi } from './API/deleteCommentToApi' 


type CommentProps = {
  titleIndex: number;
  taskIndex: number;
  commentIndex: number;
  comments: CommentType;
}

const commentProps = defineProps<CommentProps>();
</script>

<template>
  <div class="card-flex__delete">
    <span type="button" class="buttonCircle" @click="deleteCommentToApi(commentProps)">
      <span class="buttonCircle-cross"></span>
    </span>
  </div>
</template>
