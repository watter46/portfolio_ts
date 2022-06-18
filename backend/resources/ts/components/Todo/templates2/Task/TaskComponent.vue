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
import { updateTaskPositionToApi } from '../../modules2/API/Task/updateTaskPositionToApi'
import { includes } from 'lodash'


type Props = {
  titleIndex: number;
  title_id: number;
  taskList: TaskType[];
}

defineProps<Props>();
</script>

<template>
  <AddTask class="my-3" 
            :title-index="titleIndex"
            :title_id="title_id"
            :task-list="taskList" />
  <draggable :list="taskList"
              :group="{name: 'task'}"
              animation="600"
              item-key="id"
              @end="updateTaskPositionToApi">
    <template #item="{ element, index }">
      <div class="mb-1" :class="classSwitching__gridCols11" style="background-color: green;">
        <div class="card-flex">
          <ShowTask :title-index="titleIndex"
                    :task-index="index"
                    :id="element.id"
                    :title_id="element.title_id"
                    :task="element.task"
                    :task_position="element.task_position"
                    :done="element.done"
                    :is_showing="element.is_showing" />

          <DeleteTask :title-index="index"
                      :task-index="index"
                      :id="element.id"
                      :task="element.task" />
        </div>
      </div>
    </template>
  </draggable>
</template>
