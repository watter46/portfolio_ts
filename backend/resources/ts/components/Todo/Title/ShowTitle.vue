<script setup lang="ts">
import { TitleType } from 'resources/ts/Store/type';
import { reactive } from 'vue'
import { editTitleToApi } from './API/editTitleToApi'


type Props = {
  titleIndex: number;
  titles: TitleType;
}

// interface Props {
//   id: number,
//   title: string,
//   titleIndex: number,
//   title_position: number
// }

const props = defineProps<Props>();

const titleState = reactive({
  is_edit: false
})
// const titleState = reactive<{input: string, is_edit: boolean}>({
//   input: props.title,
//   is_edit: false
// })
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
<!-- <template>
  <div class="card-flex__show">
    <div class="card-flex__show__input"
         v-if="!titleState.is_edit"
         v-text="titleState.input"
         @click="titleState.is_edit = true">
    </div>
    <input class="card-flex__show__input"
           v-if="titleState.is_edit"
           type="text"
           v-model="titleState.input"
           @change="editTitleToApi(titleState.input,
                                    props.id,
                                    props.titleIndex,
                                    props.title_position)"
           @blur="titleState.is_edit = false"
           v-focus>
  </div>
</template> -->
