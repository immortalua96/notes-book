 import { notsApi } from "./notsApi";
export async function onBtnDeleteClick(evt) {
  if (evt.target.nodeName === 'BUTTON') {
    try {
       const id = evt.target.dataset.id
      const response = await notsApi.deleteNote(id)
      if (response) {
        evt.target.parentNode.remove()
      }
      
    } catch (error) {
      console.log(error);
    }
   
  }
}