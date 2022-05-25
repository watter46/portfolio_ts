<script setup lang="ts">
import type { CommentType, StateType, TaskType } from '../Functions/type'
import { key as StateKey } from '../Store/InjectionKey/StateKey'
import { inject, ref } from 'vue'
import { getCommentPosition } from '../Functions/Comment/getCommentPosition'


interface Props {
  commentList: CommentType[],
  taskId: number,
  titleIndex: number,
  taskIndex: number
}

const props = defineProps<Props>();

const commentInput = ref('')


const state = inject(StateKey) as StateType


const addComment = (input: string) => {
  const comment_position = getCommentPosition(props.commentList)

  const addListObject: CommentType = {
    id: state.maxCommentId + 1,
    task_id: props.taskId,
    comment_position: comment_position,
    comment: input,
  }

  const taskList = state.allData[props.titleIndex].tasks as TaskType[]
  const commentList = taskList[props.taskIndex].comments as CommentType[]

  commentList.push(addListObject)

  commentInput.value = ""
}
</script>

<template>
  <div class="addInput-flex my-5">
    <input type="text" class="addInput-flex__input" v-model="commentInput" placeholder="commentを入力してください">
    <div class="addInput-flex__add">
      <span type="button" class="buttonCircle" @click="addComment(commentInput)">
        <span class="buttonCircle-plus"></span>
      </span>
    </div>
  </div>
</template>
