<script setup lang="ts">
import { deleteTitleToApi } from '../../modules/API/Title/deleteTitleToApi'


interface Props {
  id: number,
  title: string,
  titleIndex: number
}

const props = defineProps<Props>();
</script>


<template>
  <div class="card-flex__delete">
    <span type="button" class="buttonCircle" @click="deleteTitleToApi(props.id)">
      <span class="buttonCircle-cross"></span>
    </span>
  </div>
</template>
