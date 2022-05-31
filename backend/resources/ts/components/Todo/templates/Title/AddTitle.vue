<script setup lang="ts">
import { titleInput, addTitleToApi } from '../../modules/API/Title/addTitleToApi';

</script>

<template>
  <div class="addInput-flex">
    <input type="text" class="addInput-flex__input" v-model="titleInput" placeholder="Titleを入力してください">
    <div class="addInput-flex__add">
      <span type="button" class="buttonCircle" @click="addTitleToApi(titleInput)">
        <span class="buttonCircle-plus"></span>
      </span>
    </div>
  </div>
</template>
