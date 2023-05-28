/**
 * Створи список справ.
 * На сторінці є два інпути які має вводиться назва і текст задачі.
 * Після натискання на кнопку "Додати" завдання додається до списку #task-list.
 *
 * Розмітка картки задачі
 * <li class="task-list-item">
 *     <button class="task-list-item-btn">Удалить</button>
 *     <h3>Заголовок</h3>
 *     <p>Текст</p>
 * </li>
 *
 * У кожної картки має бути кнопка "Видалити", щоб можна було
 * прибрати завдання зі списку.
 * Список із завданнями має бути доступним після перезавантаження сторінки.
 */
import { notsApi } from "./js/notsApi";
import { refs } from './js/refs'
import { renderCards } from "./js/renderCards";
import { onBtnDeleteClick } from "./js/onBtnDeleteClick";
import {onFormSubmit} from './js/onFormSubmit'

refs.renderlist.addEventListener('click', onBtnDeleteClick)
refs.form.addEventListener('submit',onFormSubmit)
renderCards()
