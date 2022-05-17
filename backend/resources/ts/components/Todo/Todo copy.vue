<template>
  <!-- グリッドを変更する -->
  <change-grid @gridChange="gridChange" />

  <AddTitle style="background-color: grey; height: 50px;" />

  <div class="d-flex justify-content-center">
    <!-- maxTitleId: {{ maxTitleId }}<br>
    maxTaskId: {{ maxTaskId }}<br>
    maxCommentId: {{ maxCommentId }} -->
  </div>

  <draggable  class="grid gap-1"
              :class="gridCols"
              :list="testList"
              :group="{name: 'title'}"
              animation="600"
              item-key="id">
    <template #item="{ element, index }">
      <TitleComponent :id="element.id"
                      :title="element.title"
                      :task-list="element.tasks"
                      :title-index="index" />
    </template>
  </draggable>
</template>

<script lang="ts">
import draggable from 'vuedraggable'
import AddTitle from './Title/AddTitle.vue'
import TitleComponent from './Title/TitleComponent.vue'
// import getMaxTitleId from './Functions/Title/getMaxTitleId'
// import getMaxTaskId from './Functions/Task/getMaxTaskId'
// import getMaxCommentId from './Functions/Comment/getMaxCommentId'
import ChangeGrid from './ChangeGrid.vue'

import { ref, provide, watchEffect, onMounted, onUpdated } from 'vue'
import { has as _has } from 'lodash'



export default {
  name: 'todo',
  components: {
    AddTitle,
    ChangeGrid,
    draggable,
    TitleComponent,
  },
  setup() {

    type All = {
      id: number;
      title: string;
      tasks?: {
        id?: number;
        task?: string;
        comments?: {
          id?: number;
          comment?: string
        }
      }
    };

// ===================================================================================
    /**
    * @type {array} testList 全てのデータ配列
    */
    // const testList = ref([])

    const testList:All = ref([
                                {id:1, title: 'タイトル1', tasks: []},
                                {id:2, title: 'タイトル2', tasks: []},
                              ])

    type Test = {
      id: number;
      name: string;
    };

    const test = ref<Test>({id: 1, name: 'Taro'})

    console.log(test)

    // const testList: AllData = ref([
    //                       {id: 1, title: 'title1', tasks: [
    //                                                         {id: 1, task: 'task1', comments: [
    //                                                                                            {
    //                                                                                               id: 1,
    //                                                                                               comment: 'comment1'
    //                                                                                            },
    //                                                                                            {
    //                                                                                               id: 2,
    //                                                                                               comment: 'comment2'
    //                                                                                            },
    //                                                                                            {
    //                                                                                               id: 3,
    //                                                                                               comment: 'comment3'
    //                                                                                            },
    //                                                                                          ]
    //                                                         },
    //                                                         // {id: 2, task: 'task2', comments: [
    //                                                         //                                    {
    //                                                         //                                       id: 4,
    //                                                         //                                       comment: 'comment4'
    //                                                         //                                    }
    //                                                         //                                  ]
    //                                                         // },
    //                                                         // {id: 3, task: 'task3', comments: []},
    //                                                       ]
    //                       },
    //                       {id: 2, title: 'title2', tasks: [
    //                                                         {id: 4, task: 'task4', comments: [
    //                                                                                           {
    //                                                                                               id: 5,
    //                                                                                               comment: 'comment5'
    //                                                                                           }
    //                                                                                          ]
    //                                                         },
    //                                                         {id: 5, task: 'task5', comments: []},
    //                                                       ]},
    //                       // {id: 3, title: 'title3', tasks: [
    //                       //                                   {id: 6, task: 'task6', comments: []},
    //                       //                                   {id: 7, task: 'task7', comments: [
    //                       //                                                                     {
    //                       //                                                                         id: 6,
    //                       //                                                                         comment: 'comment6'
    //                       //                                                                     }
    //                       //                                                                    ]
    //                       //                                   },
    //                       //                                 ]},
    //                     ])

    /**
    * タイトルidの最大値
    */
    // const maxTitleId = ref<number>()

    /**
    * タスクidの最大値
    */
    // const maxTaskId = ref<number>()

    /**
    * コメントidの最大値
    */
    // const maxCommentId = ref<number>()

    /**
    * Grid幅
    */
    const gridCols = ref<string>('')

    const is_divide = ref()




// ===============================methods=====================================
    /**
    * タイトル、タスク、コメントが追加されるとタイトル、タスク、コメントの最大値を更新
    */
    // watchEffect(() => {
    //     maxTitleId.value = getMaxTitleId(testList.value, 'id')
    //     maxTaskId.value = getMaxTaskId(testList.value, 'tasks', 'id')
    //     maxCommentId.value = getMaxCommentId(testList.value, 'tasks', 'comments', 'id')
    //     console.log(JSON.stringify(testList.value, null, 2))
    //   }
    // )

    // grid幅を変える
    const gridChange = (...args) => {
      [gridCols.value, is_divide.value] = args
      // console.log("TODO")
      // console.log(is_divide.value)
    }

    provide('divideComment', is_divide)

    /**
    * リアクティブな全てのデータとタスクの最大値と入力されたタイトルをprovideする
    * @param {testList: array, titleInput: string= maxTaskId: number}
    */
    // provide('addTitle', { testList, maxTitleId })

    // provide('deleteTitle', testList)

    /**
    * リアクティブな全てのデータとタスクの最大値をprovideする
    * @param {testList: array, maxTaskId: number}
    */
    // provide('addTask', { testList, maxTaskId })

    // provide('deleteTask', testList)

    /**
    * リアクティブな全てのデータとタスクの最大値をprovideする
    * @param {testList: array, maxTaskId: number}
    */
    // provide('addComment', { testList, maxCommentId })

    // provide('deleteComment', testList)

// ===================================================================================

    return {
      testList,
      // maxTitleId,
      // maxTaskId,
      // maxCommentId,
      // getMaxTitleId,
      // getMaxTaskId,
      // getMaxCommentId,
      gridCols,
      gridChange,
      is_divide
    }
  },
}
</script>
