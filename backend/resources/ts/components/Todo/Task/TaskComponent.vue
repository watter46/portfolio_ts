<script setup lang="ts">
import type { TaskType } from '../../../Store/type'

import AddTask from '../Task/AddTask.vue'
import DeleteTask from './DeleteTask.vue'
import CommentComponent from '../Comment/CommentComponent.vue'
import CountDoneTask from './CountDoneTask.vue'
import SelectDeleteTask from './SelectDeleteTask.vue'
import ShowTask from './ShowTask.vue'
import draggable from 'vuedraggable'

import './css/countDoneTask.css'

import { classSwitching__gridCols11,
         classSwitching__colSpan5,
         classSwitching__colSpan1,
         classSwitching__arrow } from './Functions/classSwitching'
import { updateTaskPositionToApi } from './API/updateTaskPositionToApi'
import { computed, reactive, provide } from 'vue'

import { deleteState } from '../../../Store/state'


type TaskProps = {
  titleIndex: number;
  title_id: number;
  tasks: TaskType[];
}

defineProps<TaskProps>();

// const deleteState = reactive<{deleteTaskList: number[]}>({
//   deleteTaskList: []
// })

type ProvideType = {
  deleteTaskList: number[]
}

provide<ProvideType>('delete', deleteState)
</script>

<template>
  <!-- AddTask Component: タスクの追加 -->
  <AddTask class="my-3" 
           :title-index="titleIndex"
           :title_id="title_id"
           :tasks="tasks" />

  <div class="countDoneTask">
    <!-- CountDoneTask Component: 完了したタスクのカウントを表示 -->
    <CountDoneTask :tasks="tasks" />

    <!-- SelectDeleteTask Component: 同一タイトル内の選択したタスクをまとめて削除 -->
    <SelectDeleteTask :tasks="tasks" />
    <!-- <SelectDeleteTask :tasks="tasks"
                      :delete-state="deleteState" /> -->
  </div>

  <!-- draggableライブラリ: タスクの入れ替え -->
  <draggable :list="tasks"
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
                    :tasks="element"
                    :delete-state="deleteState" />

          <!-- DeleteTask Component:　タスクの削除 -->
          <DeleteTask :title-index="titleIndex"
                      :task-index="index"
                      :tasks="element"
                      :delete-state="deleteState" />
        </div>

        <!-- CommentComponent: コメント一覧 -->
        <CommentComponent :title-index="titleIndex"
                          :task-index="index"
                          :task_id="element.id"
                          :comments="element.comments" />
      </div>
    </template>
  </draggable>
</template>
