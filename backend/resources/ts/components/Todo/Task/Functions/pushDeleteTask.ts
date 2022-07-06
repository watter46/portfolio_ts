import type { TaskType } from "resources/ts/Store/type"

type pushDeleteTaskListType = (
  tasks: TaskType,
  deleteState: {deleteTaskList: number[]}
) => void;

/* 削除するタスクのidをリスト化 */
export const pushDeleteTaskList: pushDeleteTaskListType = (tasks, deleteState) => {
  if (tasks.done)
  {
    deleteState.deleteTaskList.push(tasks.id)
  }
  else
  {
    const deleteIndex = deleteState.deleteTaskList.findIndex(taskIds => taskIds === tasks.id )
    deleteState.deleteTaskList.splice(deleteIndex, 1)
  }
}
