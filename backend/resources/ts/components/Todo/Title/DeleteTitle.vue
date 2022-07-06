<script setup lang="ts">
import type { TitleType } from 'resources/ts/Store/type';
import { deleteTitleToApi } from './API/deleteTitleToApi'

type TitleProps = {
  titleIndex: number;
  titles: TitleType;
}

const props = defineProps<TitleProps>();
</script>


<template>
  <div class="card-flex__delete">
    <span type="button" class="buttonCircle" @click="deleteTitleToApi(props)">
      <span class="buttonCircle-cross"></span>
    </span>
  </div>
</template>
