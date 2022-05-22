<script setup lang="ts">
import type { CommentType, GridStateType } from '../Functions/type'

import AddComment from '../Comment/AddComment.vue'
import DeleteTask from './DeleteTask.vue'
import CommentComponent from '../Comment/CommentComponent.vue'
import ShowTask from './ShowTask.vue'
import draggable from 'vuedraggable'
import { inject, computed } from 'vue'
import { key as GridStateKey } from '../Store/InjectionKey/GridStateKey'


interface Props {
  id: number,
  task: string,
  commentList: CommentType[],
  taskIndex: number,
  titleIndex: number
}

defineProps<Props>();


const gridState = inject(GridStateKey) as GridStateType

const classSwitching__gridCols11 = computed(() => gridState.is_divide ? 'grid grid-cols-11' : '')
const classSwitching__colSpan5 = computed(() => gridState.is_divide ? 'col-span-5' : '')
const classSwitching__colSpan1 = computed(() => gridState.is_divide ? 'col-span-1' : '')
const classSwitching__arrow = computed(() => gridState.is_divide ? 'arrow' : '')
</script>

<template>
  <div class="mb-1" :class="classSwitching__gridCols11" style="background-color: green;">
    <div :class="classSwitching__colSpan5">
        <div class="card-flex bg-primary">
          <ShowTask :id="id"
                    :task="task"
                    :task-index="taskIndex"
                    :title-index="titleIndex" />
          <DeleteTask :id="id"
                      :task="task"
                      :title-index="titleIndex"
                      :task-index="taskIndex" />
        </div>

      <AddComment :title-index="titleIndex"
                  :task-index="taskIndex" />
    </div>

    <div :class="classSwitching__colSpan1" style="border: 1px solid red;">
      <div :class="classSwitching__arrow"></div>
    </div>

    <div :class="classSwitching__colSpan5">
      <draggable :list="commentList"
                :group="{name: 'comment'}"
                animation="600"
                item-key="id"
                >
        <template #item="{ element, index }">
          <CommentComponent :id="element.id"
                            :comment="element.comment"
                            :title-index="titleIndex"
                            :task-index="taskIndex"
                            :comment-index="index"
                             />
        </template>
      </draggable>
    </div>
  </div>
</template>
