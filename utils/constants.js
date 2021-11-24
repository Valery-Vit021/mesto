// Заголовки
export const profileName = document.querySelector(".usercard__name-user");
export const profileAboutMe = document.querySelector(".usercard__about-me");

// Инпуты
export const nameInput = document.querySelector(".popup__input_profile_name-user");
export const jobInput = document.querySelector(".popup__input_profile_about-me");

// Управление popup
export const popupEdit = document.querySelector("#edit-profile");
export const btnEdit = document.querySelector(".usercard__edit");
export const btnClose = document.querySelector("#popup-edit-close");
// Находим форму в DOM
export const formEditProfile = document.querySelector("form[name=edit-profile]");

/*    popup new place     */

export const popupNewPlace = document.querySelector("#popup-new-place");
export const btnNewPlace = document.querySelector(".usercard__add-post");
export const btnCloseNewPlace = document.querySelector("#popup-new-place-close");
// Нахожу контейнер куда добавлять карточки
export const userCardContainer = document.querySelector('.usercard__content'); //куда добав эл
// Нахожу кнопку 'создать'
export const addButton = document.querySelector('#btn-add-card'); //кнопка добавить
// Находим пустую карточку
export const hiddenCardSelector = '.usercard__blank-card';
export const hiddenCart = document.querySelector(hiddenCardSelector).content;
// Находим форму в DOM
export const formNewPlace = document.querySelector("form[name=new-place-form]");
// находим input с именем карты
export const cardNameInput = document.querySelector('.popup__input_new-place_name');
// находим input с картинкой карты
export const cardLinkInput = document.querySelector('.popup__input_new-place_link');

/*      Popup place img      */

export const popupImage = document.querySelector("#popup-new-place-img");
export const btnClosePopupImg = document.querySelector('#popup-img-close');
export const previewImg = document.querySelector('#popup-new-place-img').querySelector('.popup__img');
export const previewName = document.querySelector('#popup-new-place-img').querySelector('.popup__name-img');

