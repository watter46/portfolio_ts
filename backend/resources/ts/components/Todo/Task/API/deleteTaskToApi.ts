import axios,{ AxiosError } from 'axios'
import { state } from '../../../../Store/state'
import { confirmDeleteTask } from '../Functions/Alert/confirmDeleteTask'

type Props = {
  titleIndex: number;
  taskIndex: number;
  done: boolean;
  id: number;
  task: string;
}

export const deleteTaskToApi = (props: Props) => {
  const is_confirm = confirmDeleteTask(props.done, props.task)

  if (is_confirm) {
    /* API通信 */
    axios.delete('/api/todo/task/' + props.id + '/delete', {
      data: { id: props.id }
    })
    .then(() => console.log("delete 成功"))
    .catch((e: AxiosError<{ error: string }>) => console.log(e.message))

    state.allData[props.titleIndex].tasks?.splice(props.taskIndex, 1)
  }
}
