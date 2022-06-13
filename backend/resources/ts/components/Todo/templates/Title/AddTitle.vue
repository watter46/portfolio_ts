<script setup lang="ts">
import { addTitleToApi } from '../../modules/API/Title/addTitleToApi';
import { ref } from 'vue'

const titleInput = ref("")

const addTitle = () => {
  addTitleToApi(titleInput.value)

  titleInput.value = ""
}
</script>

<template>
  <div class="addInput-flex">
    <input type="text" class="addInput-flex__input" v-model="titleInput" placeholder="Titleを入力してください">
    <div class="addInput-flex__add">
      <span type="button" class="buttonCircle" @click="addTitle">
        <span class="buttonCircle-plus"></span>
      </span>
    </div>
  </div>
</template>
