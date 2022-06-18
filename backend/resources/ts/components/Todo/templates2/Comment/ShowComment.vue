<script setup lang="ts">
import { reactive } from 'vue'
import { editCommentToApi } from '../../modules/API/Comment/editCommentToApi';

interface Props {
  titleIndex: number,
  taskIndex: number,
  commentIndex: number,
  id: number,
  task_id: number,
  comment: string,
  comment_position: number,
}

const props = defineProps<Props>();

const commentState = reactive<{input: string, is_edit: boolean}>({
  input: props.comment,
  is_edit: false
})
</script>

<template>
  <div class="card-flex__show">
    <div class="card-flex__show__input"
         v-if="!commentState.is_edit"
         v-text="commentState.input"
         @click="commentState.is_edit = true">
    </div>
    <input class="card-flex__show__input"
           v-if="commentState.is_edit"
           type="text"
           v-model="commentState.input"
           @change="editCommentToApi(commentState.input, props)"
           @blur="commentState.is_edit = false"
           v-focus>
  </div>
</template>
