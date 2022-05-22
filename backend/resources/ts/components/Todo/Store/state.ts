import { reactive } from "vue"
import { StateType, TitleType } from '../Functions/type'

const t1: TitleType[] = []

const t2: TitleType[] = [
  {id: 1987654, title: 'title1', tasks: [{id: 3456789, task: 'task1'}]},
  {id: 2252, title: 'title2', tasks: [{id: 3456456789, task: 'task1'}]},
]

const t3:TitleType[] = [
  {id: 1, title: 'title1', tasks: [
                                    {id: 1, task: 'task1', comments: [
                                                                        {
                                                                          id: 1,
                                                                          comment: 'comment1'
                                                                        },
                                                                        {
                                                                          id: 2,
                                                                          comment: 'comment2'
                                                                        },
                                                                        {
                                                                          id: 3,
                                                                          comment: 'comment3'
                                                                        },
                                                                      ]
                                    },
                                    {id: 2, task: 'task2', comments: [
                                                                       {
                                                                          id: 4,
                                                                          comment: 'comment4'
                                                                       }
                                                                     ]
                                    },
                                    {id: 3, task: 'task3', comments: []},
                                  ]
  },
  {id: 2, title: 'title2', tasks: [
                                    {id: 4, task: 'task4', comments: [
                                                                      {
                                                                          id: 5,
                                                                          comment: 'comment5'
                                                                      }
                                                                      ]
                                    },
                                    {id: 5, task: 'task5', comments: []},
                                  ]},
  {id: 3, title: 'title3', tasks: [
                                    {id: 6, task: 'task6', comments: []},
                                    {id: 7, task: 'task7', comments: [
                                                                      {
                                                                          id: 6,
                                                                          comment: 'comment6'
                                                                      }
                                                                      ]
                                    },
                                  ]},
  {id: 4, title: 'title4', tasks:[]}
]

export const state = reactive<StateType>({
  testList: t3,
  maxTitleId: 0,
  maxTaskId: 0,
  maxCommentId: 0
})
