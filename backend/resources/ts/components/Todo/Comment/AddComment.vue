<script setup lang="ts">
import type { CommentType } from '../../../Store/type'
import { addCommentToApi } from './API/addCommentToApi'
import { ref } from 'vue'


type CommentProps = {
  titleIndex: number;
  taskIndex: number;
  task_id: number;
  comments: CommentType[];
}

const commentProps = defineProps<CommentProps>();

const commentInput = ref("")

const addComment = () => {
  addCommentToApi(commentInput.value, commentProps)

  commentInput.value = ""
}
</script>

<template>
  <div class="addInput-flex my-5">
    <input type="text" class="addInput-flex__input" v-model="commentInput" placeholder="commentを入力してください">
    <div class="addInput-flex__add">
      <span type="button" class="buttonCircle" @click="addComment">
        <span class="buttonCircle-plus"></span>
      </span>
    </div>
  </div>
</template>
