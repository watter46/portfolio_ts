<script setup lang="ts">
import draggable from 'vuedraggable'

import { CommentType } from '../../../Store/type'

import AddComment from '../Comment/AddComment.vue'
import DeleteComment from './DeleteComment.vue'
import ShowComment from './ShowComment.vue'

import { updateCommentPositionToApi } from './API/updateCommentPositionToApi'


type Props = {
  titleIndex: number;
  taskIndex: number;
  task_id: number;
  comments: CommentType[];
}

defineProps<Props>();
</script>

<template>
  <!-- AddComment Component: コメントの追加 -->
  <AddComment :title-index="titleIndex"
              :task-index="taskIndex"
              :task_id="task_id"
              :comments="comments" />

  <!-- draggableライブラリ: コメントの入れ替え -->
  <draggable :list="comments"
             :group="{name: 'comment'}"
             animation="600"
             item-key="id"
             @end="updateCommentPositionToApi">
    <template #item="{ element, index }">
      <div class="card mb-1" style="background-color: purple;">
        <div class="card-flex">
          
          <!-- ShowComment Component: コメントの表示、編集 -->
          <ShowComment  :title-index="titleIndex"
                        :task-index="taskIndex"
                        :comment-index="index"
                        :comments="element" />

          <!-- DeleteComment Component: コメントの削除 -->
          <DeleteComment :title-index="titleIndex"
                         :task-index="taskIndex"
                         :comment-index="index"
                         :comments="element" />
        </div>
      </div>
    </template>
  </draggable>
</template>
