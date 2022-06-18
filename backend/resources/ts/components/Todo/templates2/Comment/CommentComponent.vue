<script setup lang="ts">
import draggable from 'vuedraggable'

import { CommentType } from '../../Store/type';
import AddComment from '../Comment/AddComment.vue'
import DeleteComment from './DeleteComment.vue'
import ShowComment from './ShowComment.vue'


type Props = {
  titleIndex: number;
  taskIndex: number;
  commentList: CommentType[];
}

defineProps<Props>();
</script>

<template>
  <draggable :list="commentList"
             :group="{name: 'comment'}"
             animation="600"
             item-key="id">
    <template #item="{ element, index }">
      <div class="card mb-1" style="background-color: purple;">
        <div class="card-flex">
          <AddComment :title-index="titleIndex"
                      :task-index="taskIndex"
                      :id="element.id"
                      :task_id="element.task_id"
                      :comment-list="commentList" />

          <ShowComment  :title-index="titleIndex"
                        :task-index="taskIndex"
                        :comment-index="index"
                        :id="element.id"
                        :task_id="element.task_id"
                        :comment="element.comment"
                        :comment_position="element.comment_position" />
          <DeleteComment  :id="element.id"
                          :comment="element.comment"
                          :task-index="taskIndex"
                          :title-index="titleIndex"
                          :comment-index="index" />
        </div>
      </div>
    </template>
  </draggable>
</template>
