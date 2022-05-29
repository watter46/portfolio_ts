<script setup lang="ts">
import DeleteComment from './DeleteComment.vue'
import ShowComment from './ShowComment.vue'


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
  <div class="card mb-1" style="background-color: purple;">
    <div class="card-flex">
      <ShowComment  :id="id"
                    :comment="comment"
                    :title-index="titleIndex"
                    :task-index="taskIndex"
                    :comment-index="commentIndex" />
      <DeleteComment  :id="id"
                      :comment="comment"
                      :task-index="taskIndex"
                      :title-index="titleIndex"
                      :comment-index="commentIndex" />
    </div>
  </div>
</template>
