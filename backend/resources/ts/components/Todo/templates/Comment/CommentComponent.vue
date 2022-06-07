<script setup lang="ts">
import DeleteComment from './DeleteComment.vue'
import ShowComment from './ShowComment.vue'


type Props = {
  titleIndex: number;
  taskIndex: number;
  commentIndex: number;
  id: number;
  task_id: number;
  comment: string;
  comment_position: number;
}

defineProps<Props>();
</script>

<template>
  <div class="card mb-1" style="background-color: purple;">
    <div class="card-flex">
      <ShowComment  :title-index="titleIndex"
                    :task-index="taskIndex"
                    :comment-index="commentIndex"
                    :id="id"
                    :task_id="task_id"
                    :comment="comment"
                    :comment_position="comment_position" />
      <DeleteComment  :id="id"
                      :comment="comment"
                      :task-index="taskIndex"
                      :title-index="titleIndex"
                      :comment-index="commentIndex" />
    </div>
  </div>
</template>
