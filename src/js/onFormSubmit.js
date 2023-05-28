import { renderNewCard } from './renderNewCard';
import { notsApi } from './notsApi';
import { creatNote } from './creatNote';
export async function onFormSubmit(evt) {
  evt.preventDefault();
  try {
    const data = creatNote(evt)
    const response = await notsApi.addNote(data);
    renderNewCard(response);
  } catch (error) {
    console.log(error);
  }
}
