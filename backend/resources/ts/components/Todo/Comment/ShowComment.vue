<script setup lang="ts">
import { reactive } from 'vue'
import { editCommentToApi } from './API/editCommentToApi';
import { CommentType } from '../../../Store/type';


type CommentProps = {
  titleIndex: number;
  taskIndex: number;
  commentIndex: number;
  comments: CommentType;
}

const commentProps = defineProps<CommentProps>();

const commentState = reactive({
  is_edit: false
})
</script>

<template>
  <div class="card-flex__show">
    <div class="card-flex__show__input"
         v-if="!commentState.is_edit"
         v-text="comments.comment"
         @click="commentState.is_edit = true">
    </div>
    <input class="card-flex__show__input"
           v-if="commentState.is_edit"
           type="text"
           v-model="comments.comment"
           @change="editCommentToApi(commentProps)"
           @blur="commentState.is_edit = false"
           v-focus>
  </div>
</template>
