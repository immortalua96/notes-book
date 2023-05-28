import { refs } from "./refs"
export function renderNewCard({ name, text, id }) {
  const markup =`<li class="task-list-item">
     <button class="task-list-item-btn" data-id=${id}>Удалить</button>
    <h3>${name}</h3>
    <p>${text}</p>
    </li>`
  refs.renderlist.insertAdjacentHTML('afterbegin',markup)
}