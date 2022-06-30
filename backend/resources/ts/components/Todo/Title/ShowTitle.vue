<script setup lang="ts">
import { TitleType } from 'resources/ts/Store/type';
import { reactive } from 'vue'
import { editTitleToApi } from './API/editTitleToApi'


type TitleProps = {
  titleIndex: number;
  titles: TitleType;
}

const props = defineProps<TitleProps>();

const titleState = reactive({
  is_edit: false
})
</script>

<template>
  <div class="card-flex__show">
    <div class="card-flex__show__input"
         v-if="!titleState.is_edit"
         v-text="props.titles.title"
         @click="titleState.is_edit = true">
    </div>
    <input class="card-flex__show__input"
           v-if="titleState.is_edit"
           type="text"
           v-model="props.titles.title"
           @change="editTitleToApi(props)"
           @blur="titleState.is_edit = false"
           v-focus>
  </div>
</template>
