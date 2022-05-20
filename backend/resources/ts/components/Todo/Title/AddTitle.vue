<script setup lang="ts">
import type { StateType, TitleType } from '../Functions/type'
import { inject, ref } from 'vue'
import { key } from '../Store/key'

const state = inject(key) as StateType

const titleInput = ref("")

const addTitle = (input: string) => {
  const addTitleObject: TitleType = {
    id: state.maxTitleId + 1,
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
