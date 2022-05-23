import { reactive } from "vue"
import { StateType, TitleType } from '../Functions/type'

const t1: TitleType[] = []

const t3:TitleType[] = [
  {
    id: 1,
    title: 'title1',
    title_position: 1024,
    tasks: [
            {
              id: 1,
              title_id: 1,
              task_position: 1024,
              done: false,
              is_showing: false,
              task: 'task1',
              comments: [
                          {
                            id: 1,
                            task_id: 1,
                            comment_position: 1024,
                            comment: 'comment1'
                          },
                          {
                            id: 2,
                            task_id: 1,
                            comment_position: 2048,
                            comment: 'comment2'
                          }
                        ]
            },
            {
              id: 2,
              title_id: 1,
              task_position: 2048,
              done: false,
              is_showing: false,
              task: 'task2',
              comments: [
                          {
                            id: 4,
                            task_id: 2,
                            comment_position: 1024,
                            comment: 'comment4'
                          }
                        ]
            },
            {
              id: 3,
              title_id: 1,
              task_position: 3072,
              done: false,
              is_showing: false,
              task: 'task3',
              comments: []
            },
          ]
  }
]

export const state = reactive<StateType>({
  testList: t1,
  maxTitleId: 0,
  maxTaskId: 0,
  maxCommentId: 0,
})
