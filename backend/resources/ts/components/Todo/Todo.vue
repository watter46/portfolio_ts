<script setup lang="ts">
import type { GridStateType } from './Functions/type'

import draggable from 'vuedraggable'
import AddTitle from './Title/AddTitle.vue'
import TitleComponent from './Title/TitleComponent.vue'
import { getMaxTitleId } from './Functions/Title/getMaxTitleId'
import { getMaxTaskId } from './Functions/Task/getMaxTaskId'
import { getMaxCommentId } from './Functions/Comment/getMaxCommentId'
import ChangeGrid from './ChangeGrid.vue'

import { reactive, provide, watchEffect, ref, onMounted, onBeforeMount  } from 'vue'
import { state } from './Store/state'
import { key as StateKey } from './Store/InjectionKey/StateKey'
import { key as GridStateKey } from './Store/InjectionKey/GridStateKey'

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

const gridChange = (emitGridCols: string) => {
  gridState.gridCols = emitGridCols
}

const divideChange = (emit_is_divide: boolean) => {
  gridState.is_divide = emit_is_divide
}


provide(StateKey, state)

provide(GridStateKey, gridState)
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

  <draggable  class="grid gap-3"
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
