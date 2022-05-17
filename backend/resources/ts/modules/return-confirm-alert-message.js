export class Message {
  constructor({event, id, title, task, comment}) {
    if(event) {
      this.id = event.target.getAttribute('id')
      this.title = event.target.getAttribute('title');
      this.task = event.target.getAttribute('task');
      this.comment = event.target.getAttribute('comment');
    }
    
    if({id, title, comment}) {
      this.id = id
      this.title = title
      this.task = task
      this.comment = comment
    }
  }

  returnConfirmMessage() {
    return window.confirm('タイトル:' + `${this.title}` + 'のタスク全てを削除しますか？');
  }
  
  unfinishedAlertMessage() {
    return window.alert('タスクが終わっていません')
  }

  inputAlertMessage() {
    return window.alert('タスクを入力してください')
  }

  returnCheckedDeleteConfirm() {
    return window.confirm("選択したものすべてを削除しますか？")
  }
}
