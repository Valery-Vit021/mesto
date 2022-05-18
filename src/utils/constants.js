// Заголовки 
export const profileName = document.querySelector(".usercard__name-user").textContent; 
export const profileAboutMe = document.querySelector(".usercard__about-me").textContent;

// Инпуты
export const nameInput = document.querySelector(".popup__input_profile_name-user");
export const aboutInput = document.querySelector(".popup__input_profile_about-me");

// Управление popup
export const btnEdit = document.querySelector(".usercard__edit");
export const editPopup = document.querySelector("#edit-profile");

/*    popup new place     */ 
export const btnNewPlace = document.querySelector(".usercard__add-post");
export const addPopup = document.querySelector("#popup-new-place");

export const addForm = addPopup.querySelector('.popup__form');
export const editForm = editPopup.querySelector('.popup__form');
export const nameImg = document.querySelector('.popup__name-img');