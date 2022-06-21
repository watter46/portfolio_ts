<script setup lang="ts">
import type { CommentType, TaskType } from '../../Store/type'

import AddTask from '../Task/AddTask.vue'
import DeleteTask from './DeleteTask.vue'
import CommentComponent from '../Comment/CommentComponent.vue'
import ShowTask from './ShowTask.vue'
import draggable from 'vuedraggable'

import { classSwitching__gridCols11,
         classSwitching__colSpan5,
         classSwitching__colSpan1,
         classSwitching__arrow } from '../../modules/classSwitching'
import { updateTaskPositionToApi } from '../../modules/API/Task/updateTaskPositionToApi'
import { includes } from 'lodash'


type Props = {
  titleIndex: number;
  title_id: number;
  taskList: TaskType[];
}

defineProps<Props>();
</script>

<template>
  <!-- AddTask Component: タスクの追加 -->
  <AddTask class="my-3" 
            :title-index="titleIndex"
            :title_id="title_id"
            :task-list="taskList" />

  <!-- draggableライブラリ: タスクのposition変更 -->
  <draggable :list="taskList"
              :group="{name: 'task'}"
              animation="600"
              item-key="id"
              @end="updateTaskPositionToApi">
    <template #item="{ element, index }">
      <div class="mb-1" :class="classSwitching__gridCols11" style="background-color: green;">
        <div class="card-flex">

          <!-- ShowTask Component: タスクの表示、編集 -->
          <ShowTask :title-index="titleIndex"
                    :task-index="index"
                    :task-list="element" />

          <!-- DeleteTask Component:　タスクの削除 -->
          <DeleteTask :title-index="titleIndex"
                      :task-index="index"
                      :id="element.id"
                      :task="element.task" />
        </div>

        <!-- Comment Component -->
        <CommentComponent :title-index="titleIndex"
                          :task-index="index"
                          :task_id="element.id"
                          :comment-list="element.comments" />
      </div>
    </template>
  </draggable>
</template>
