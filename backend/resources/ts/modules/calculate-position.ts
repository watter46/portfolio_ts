// export class DraggedPosition {
//     constructor({component, previousElement, nextElement}) {

//         this.attributeName = component + '-position'
//         this.previousElement = previousElement
//         this.nextElement = nextElement
//     }

//     calculatePosition() {
//       let previousPosition
//       let nextPosition
//       let draggedPosition

//       let calculateDraggedPosition = (previousPosition, nextPosition) => Math.floor((previousPosition + nextPosition) / 2)

//       if(this.previousElement && this.nextElement) {
//         previousPosition = Number(this.previousElement.getAttribute(this.attributeName))
//         nextPosition = Number(this.nextElement.getAttribute(this.attributeName))
//         draggedPosition = calculateDraggedPosition(previousPosition, nextPosition)
//       }
      
//       if(!this.previousElement) {
//         previousPosition = Number(this.nextElement.getAttribute(this.attributeName)) - 512
//         nextPosition = Number(this.nextElement.getAttribute(this.attributeName))
//         draggedPosition = calculateDraggedPosition(previousPosition, nextPosition)
//       } 

//       if(!this.nextElement){
//         previousPosition = Number(this.previousElement.getAttribute(this.attributeName))
//         nextPosition = Number(this.previousElement.getAttribute(this.attributeName)) + 512
//         draggedPosition = calculateDraggedPosition(previousPosition, nextPosition)
//       }

//       return [previousPosition, nextPosition, draggedPosition]
//     }
// } 
