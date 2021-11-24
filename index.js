import {profileName, profileAboutMe, nameInput, jobInput, popupEdit, btnEdit, btnClose, formEditProfile, 
	popupNewPlace, btnNewPlace, btnCloseNewPlace, userCardContainer, hiddenCardSelector, formNewPlace,
	cardNameInput, cardLinkInput, popupImage, btnClosePopupImg, 
} from "./utils/constants.js";
import {initialCards} from "./utils/initial-сards.js";
import {openPopup, closePopup} from "./utils/utils.js";
import FormValidator from "./src/FormValidator.js";
import Card from "./src/Card.js";
import {validationConfig} from  "./src/FormValidator.js";

// Открываем попап по клику на иконку "Карандаш"
btnEdit.addEventListener("click", function () {
	   openPopup(popupEdit);
		nameInput.value = profileName.textContent;
		jobInput.value = profileAboutMe.textContent;
		validatorEditProfile.resetSppanError();
});

// Закрываем попап по клику вне его
popupEdit.addEventListener("click", function (event) {
    if (event.target === this) {
        closePopup(popupEdit);
    }
});

// Закрываем попап по клику на иконку "Крестик"
btnClose.addEventListener("click", function () {
     closePopup(popupEdit);
});

function addCard (name, link, selection) {
	const newCard = new Card ({name, link}, selection).createCard();
	renderCard(newCard);
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет

function submitEditProfileForm(evt) {
	evt.preventDefault();

// Получите значение полей jobInput и nameInput из свойства value
	const nameUser = nameInput.value;
	const aboutUser = jobInput.value;

// Вставьте новые значения с помощью textContent
	profileName.textContent = nameUser;
	profileAboutMe.textContent = aboutUser;
	
	closePopup(popupEdit);
	
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formEditProfile.addEventListener('submit', submitEditProfileForm);

/*      Управление popup new place          */ 

//Открываем попап по клику на иконку "+"
btnNewPlace.addEventListener("click", function () {
	openPopup(popupNewPlace);
	validatorAddCard.resetSppanError();
});

// Закрываем попап по клику вне его
popupNewPlace.addEventListener("click", function (event) {
    if (event.target === this) {
		closePopup(popupNewPlace);
		formNewPlace.reset();
      }
});

// Закрываем попап по клику на иконку "Крестик"
btnCloseNewPlace.addEventListener("click", function () {
   
   closePopup(popupNewPlace);
	formNewPlace.reset();
});


/* РАБОТА С КАРТОЧКАМИ */

// Закрываем попап по клику вне его
popupImage.addEventListener("click", function (event) {
	if (event.target === this) {
		closePopup(popupImage)
		
	};
});

// Закрываем попап по клику на иконку "Крестик"
btnClosePopupImg.addEventListener("click", function (event) {
	closePopup(popupImage);
});


function renderCard (card) {
	userCardContainer.prepend(card);
}

initialCards.forEach(card => {
	addCard(card.name, card.link, hiddenCardSelector);
});

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function submitAddCardForm(evt) {
	evt.preventDefault();
	
	addCard(cardNameInput.value, cardLinkInput.value, 'section.usercard__content > template'); 
			
  closePopup(popupNewPlace);
  
  formNewPlace.reset();
  
}
formNewPlace.addEventListener('submit', submitAddCardForm);


/* Валидация  */

const validatorAddCard = new FormValidator(validationConfig, popupNewPlace);
validatorAddCard.enableValidation();
const validatorEditProfile = new FormValidator(validationConfig, popupEdit);
validatorEditProfile.enableValidation();