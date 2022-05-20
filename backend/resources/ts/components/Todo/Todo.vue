<script setup lang="ts">
import draggable from 'vuedraggable'
import AddTitle from './Title/AddTitle.vue'
import TitleComponent from './Title/TitleComponent.vue'
import getMaxTitleId from './Functions/Title/getMaxTitleId'
import getMaxTaskId from './Functions/Task/getMaxTaskId'
import getMaxCommentId from './Functions/Comment/getMaxCommentId'
import ChangeGrid from './ChangeGrid.vue'

import { Ref, ref, reactive, provide, watchEffect } from 'vue'
import type { GridStateType } from './Functions/type'

import { state } from './Store/state'
import { StateKey } from './Store/key'

const gridState = reactive<GridStateType>({
  gridCols: "",
  is_divide: false
})


watchEffect(() => {
    state.maxTitleId = getMaxTitleId(state.testList)
    state.maxTaskId = getMaxTaskId(state.testList)
    state.maxCommentId = getMaxCommentId(state.testList)
    // console.log(JSON.stringify(state.testList, null, 2))
  }
)

// grid幅を変える
const gridChange = (emitGridCols: string) => {
  gridState.gridCols = emitGridCols
}

const divideChange = (emit_is_divide: boolean) => {
  gridState.is_divide = emit_is_divide
}


// provide('divideComment', is_divide)

// provide('addTitle-testList', state.testList)
// provide('addTitle-maxTitleId', state.maxTitleId)
provide(StateKey, state)

// provide(key, gridState)


// provide('deleteTitle', testList)

/**
* リアクティブな全てのデータとタスクの最大値をprovideする
* @param {testList: array, maxTaskId: number}
*/
// provide('addTask', { testList, maxTaskId })

// provide('deleteTask', testList)

/**
* リアクティブな全てのデータとタスクの最大値をprovideする
* @param {testList: array, maxTaskId: number}
*/
// provide('addComment', { testList, maxCommentId })

// provide('deleteComment', testList)
</script>

<template>
  <!-- グリッドを変更する -->
  <change-grid @gridChange="gridChange"
               @divideChange="divideChange" />

  <AddTitle style="background-color: grey; height: 50px;" />

  <div class="d-flex justify-content-center">
    maxTitleId: {{ state.maxTitleId }}<br>
    maxTaskId: {{ state.maxTaskId }}<br>
    maxCommentId: {{ state.maxCommentId }}
  </div>

  <draggable  class="grid gap-1"
              :class="gridState.gridCols"
              :list="state.testList"
              :group="{name: 'title'}"
              animation="600"
              item-key="id">
    <template #item="{ element, index }">
      <TitleComponent :id="element.id"
                      :title="element.title"
                      :task-list="element.tasks"
                      :title-index="index" />
    </template>
  </draggable>
</template>
