<script setup lang="ts">
import { inject, ref } from 'vue'
import type { TitleType } from '../Functions/type'


const titleInput = ref("")


const testList = inject('addTitle-testList') as TitleType[]
const maxTitleId = inject('addTitle-maxTitleId') as number


const addTitle = (input: string) => {
  const addTitleObject: TitleType = {
    id: maxTitleId + 1,
    title: input,
    tasks: []
  }
  testList.push(addTitleObject)
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
