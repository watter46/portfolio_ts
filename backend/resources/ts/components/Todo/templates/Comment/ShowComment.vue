<script setup lang="ts">
import { reactive } from 'vue'
import { editCommentToApi } from '../../modules/API/Comment/editCommentToApi';
import { CommentType } from '../../Store/type';


type Props = {
  titleIndex: number;
  taskIndex: number;
  commentIndex: number;
  commentList: CommentType;
}

type CommentStateType = {
  input: string;
  is_edit: boolean;
}

const props = defineProps<Props>();

const commentState = reactive<CommentStateType>({
  input: props.commentList.comment,
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
