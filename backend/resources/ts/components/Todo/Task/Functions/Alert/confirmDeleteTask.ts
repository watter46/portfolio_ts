import type { TaskProps } from "../type"
import { state } from "../../../../../Store/state"

// export const confirmDeleteTask = (taskProps: TaskProps, deleteTaskList: number[]) => {
//   const titleIndex = taskProps.titleIndex

//   const tasks = state.allData[titleIndex].tasks?.map(tasks => {
//     if (tasks.done) {
//       return '・' + tasks.task + '\r\n'
//     }
//   }).filter(x => x !== undefined)

//   const message = tasks?.join("")
  
//   const is_done = confirm("これらのタスクを削除しますか?\r\n" + message)

//   return is_done
// }

export const alertNotDoneTask = () => alert("タスクがまだ完了していません")

export const alertNotSelectedTask = () => alert("タスクが選択されていません")

