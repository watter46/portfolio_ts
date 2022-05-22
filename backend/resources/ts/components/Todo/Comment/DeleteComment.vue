<script setup lang="ts">
import type { CommentType, StateType, TaskType } from '../Functions/type'
import { key as StateKey } from '../Store/InjectionKey/StateKey'
import { inject } from 'vue'


interface Props {
  id: number,
  comment: string,
  titleIndex: number,
  taskIndex: number,
  commentIndex: number
}

const props = defineProps<Props>();

const state = inject(StateKey) as StateType

const deleteComment = () => {
  const taskList = state.testList[props.titleIndex].tasks as TaskType[]
  const commentList = taskList[props.taskIndex].comments as CommentType[]

  commentList.splice(props.commentIndex, 1)
}
</script>

<template>
  <div class="card-flex__delete">
    <span type="button" class="buttonCircle" @click="deleteComment()">
      <span class="buttonCircle-cross"></span>
    </span>
  </div>
</template>
