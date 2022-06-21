<script setup lang="ts">
import draggable from 'vuedraggable'

import { CommentType } from '../../Store/type'

import AddComment from '../Comment/AddComment.vue'
import DeleteComment from './DeleteComment.vue'
import ShowComment from './ShowComment.vue'

import { updateCommentPositionToApi } from '../../modules/API/Comment/updateCommentPositionToApi'


type Props = {
  titleIndex: number;
  taskIndex: number;
  task_id: number;
  commentList: CommentType[];
}

defineProps<Props>();
</script>

<template>
  <!-- AddComment Component: コメントの追加 -->
  <AddComment :title-index="titleIndex"
              :task-index="taskIndex"
              :task_id="task_id"
              :comment-list="commentList" />

  <!-- draggableライブラリ: コメントのposition変更 -->
  <draggable :list="commentList"
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
                        :comment-list="element" />

          <!-- DeleteComment Component: コメントの削除 -->
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
