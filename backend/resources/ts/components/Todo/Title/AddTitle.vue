<script setup lang="ts">
import type { StateType, TitleType } from '../Functions/type'
import { getTitlePosition } from '../Functions/Title/getTitlePosition'

import { inject, ref } from 'vue'
import { key as StateKey } from '../Store/InjectionKey/StateKey'

const state = inject(StateKey) as StateType

const titleInput = ref("")



const addTitle = (input: string) => {
  const title_position = getTitlePosition(state.testList)

  const addTitleObject: TitleType = {
    id: state.maxTitleId + 1,
    title_position: title_position,
    title: input,
    tasks: []
  }
  state.testList.push(addTitleObject)
  titleInput.value = ""
}
</script>

<template>
  <div class="addInput-flex">
    <input type="text" class="addInput-flex__input" v-model="titleInput" placeholder="Titleを入力してください">
    <div class="addInput-flex__add">
      <span type="button" class="buttonCircle" @click="addTitle(titleInput)">
        <span class="buttonCircle-plus"></span>
      </span>
    </div>
  </div>
</template>
