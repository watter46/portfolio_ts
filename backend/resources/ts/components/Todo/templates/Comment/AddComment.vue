<script setup lang="ts">
import type { CommentType } from '../../Store/type'
import { commentInput, addCommentToApi } from '../../modules/API/Comment/addCommentToApi'


type Props = {
  titleIndex: number;
  taskIndex: number;
  id: number;
  task_id: number;
  commentList: CommentType[];
}

defineProps<Props>();
</script>

<template>
  <div class="addInput-flex my-5">
    <input type="text" class="addInput-flex__input" v-model="commentInput" placeholder="commentを入力してください">
    <div class="addInput-flex__add">
      <span type="button" class="buttonCircle" @click="addCommentToApi(commentInput, titleIndex, taskIndex, task_id, commentList)">
        <span class="buttonCircle-plus"></span>
      </span>
    </div>
  </div>
</template>
