import { notsApi } from "./notsApi";
import { refs } from "./refs";
export async function renderCards() {
  try {
    const data = await notsApi.getNotes()
  const markup = data.map(({ name, text,id }) => `<li class="task-list-item">
     <button class="task-list-item-btn" data-id=${id}>Удалить</button>
    <h3>${name}</h3>
    <p>${text}</p>
    </li>`
  ).join('')
refs.renderlist.insertAdjacentHTML('afterbegin',markup)
  } catch (error) {
    console.log(error);
  }
  
}