<script setup lang="ts">
import type { CommentType } from '../../Store/type'

import AddComment from '../Comment/AddComment.vue'
import DeleteTask from './DeleteTask.vue'
import CommentComponent from '../Comment/CommentComponent.vue'
import ShowTask from './ShowTask.vue'
import draggable from 'vuedraggable'

import { classSwitching__gridCols11,
         classSwitching__colSpan5,
         classSwitching__colSpan1,
         classSwitching__arrow } from '../../modules/classSwitching'
import { updateCommentPositionToApi } from '../../modules/API/Comment/updateCommentPositionToApi'


type Props = {
  titleIndex: number;
  taskIndex: number;
  id: number;
  title_id: number;
  task: string;
  task_position: number;
  done: boolean;
  is_showing: boolean;
  commentList: CommentType[];
}

defineProps<Props>();
</script>

<template>
  <div class="mb-1" :class="classSwitching__gridCols11" style="background-color: green;">
    <div :class="classSwitching__colSpan5">
        <div class="card-flex">
          <ShowTask :title-index="titleIndex"
                    :task-index="taskIndex"
                    :id="id"
                    :title_id="title_id"
                    :task="task"
                    :task_position="task_position"
                    :done="done"
                    :is_showing="is_showing" />
          <DeleteTask :id="id"
                      :task="task"
                      :title-index="titleIndex"
                      :task-index="taskIndex" />
        </div>

      <AddComment :title-index="titleIndex"
                  :task-index="taskIndex"
                  :id="id"
                  :task_id="id"
                  :comment-list="commentList" />
    </div>

    <div :class="classSwitching__colSpan1" style="border: 1px solid red;">
      <div :class="classSwitching__arrow"></div>
    </div>

    <div :class="classSwitching__colSpan5">
      <draggable :list="commentList"
                 :group="{name: 'comment'}"
                 animation="600"
                 item-key="id"
                 @end="updateCommentPositionToApi($event, titleIndex, taskIndex)">
        <template #item="{ element, index }">
          <CommentComponent :title-index="titleIndex"
                            :task-index="taskIndex"
                            :comment-index="index"
                            :id="element.id"
                            :task_id="element.id"
                            :comment="element.comment"
                            :comment_position="element.comment_position" />
        </template>
      </draggable>
    </div>
  </div>
</template>
