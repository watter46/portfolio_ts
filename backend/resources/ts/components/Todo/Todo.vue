<script setup lang="ts">
import type { GridStateType } from './Functions/type'

import draggable from 'vuedraggable'
import AddTitle from './Title/AddTitle.vue'
import TitleComponent from './Title/TitleComponent.vue'
import ChangeGrid from './ChangeGrid.vue'

import { reactive, provide } from 'vue'
import { state } from './Store/state'
import { key as StateKey } from './Store/InjectionKey/StateKey'
import { key as GridStateKey } from './Store/InjectionKey/GridStateKey'
import { getAllData }  from './Api/todo-api'
import { updateTitlePosition } from './Title/updateTitlePosition'


const gridState = reactive<GridStateType>({
  gridCols: "",
  is_divide: false
})

getAllData()

const gridChange = (emitGridCols: string) => gridState.gridCols = emitGridCols

const divideChange = (emit_is_divide: boolean) => gridState.is_divide = emit_is_divide


const updatePosition = (event: any) => updateTitlePosition(event)


provide(StateKey, state)

provide(GridStateKey, gridState)
</script>

<template>
  <!-- グリッドを変更する -->
  <change-grid @gridChange="gridChange"
               @divideChange="divideChange" />

  <AddTitle style="background-color: grey; height: 50px;" />

  <draggable  class="grid gap-3"
              :class="gridState.gridCols"
              :list="state.allData"
              :group="{name: 'title'}"
              animation="600"
              item-key="id"
              @end="updatePosition">
    <template #item="{ element, index }">
      <TitleComponent :id="element.id"
                      :title="element.title"
                      :task-list="element.tasks"
                      :title-index="index" />
    </template>
  </draggable>
</template>
