export const confirmDeleteTask = (done: boolean, task: string) => {
  if (done) {
    confirm(task + " を本当に削除しますか?")
    return true
  }
  else {
    alert(task + " が完了していません")
    return false
  }
}
