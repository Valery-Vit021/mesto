//Записываем содержимое заголовков в поля
// Заголовки
const profileName = document.querySelector(".usercard__name-user");
const profileAboutMe = document.querySelector(".usercard__about-me");

// Инпуты
const nameInput = document.querySelector(".popup__input_profile_name-user");
const jobInput = document.querySelector(".popup__input_profile_about-me");

// Управление popup
const popupEdit = document.querySelector("#edit-profile");
const btnEdit = document.querySelector(".usercard__edit");
const btnClose = document.querySelector("#popup-edit-close");
// Находим форму в DOM
const formElement = document.querySelector("form[name=edit-profile]");

/*    popup new place     */

const popupNewPlace = document.querySelector("#popup-new-place");
const btnNewPlace = document.querySelector(".usercard__add-post");
const btnCloseNewPlace = document.querySelector("#popup-new-place-close");
// Нахожу контейнер куда добавлять карточки
const userCardContainer = document.querySelector('.usercard__content'); //куда добав эл
// Нахожу кнопку 'создать'
const addButton = document.querySelector('#btn-add-card'); //кнопка добавить
// Находим пустую карточку
const hiddenCardSelector = '.usercard__blank-card';
const hiddenCart = document.querySelector(hiddenCardSelector).content;
// Находим форму в DOM
const formNewPlace = document.querySelector("form[name=new-place-form]");
// находим input с именем карты
const cardNameInput = document.querySelector('.popup__input_new-place_name');
// находим input с картинкой карты
const cardLinkInput = document.querySelector('.popup__input_new-place_link');

/*      Popup place img      */

const nameCard = document.querySelector(".usercard__name-cards");
const imgCard = document.querySelector(".usercard__img-cards");
const popupImge = document.querySelector("#popup-new-place-img");
const btnClosePopupImg = document.querySelector('#popup-img-close');

function openPopup(popup) {
	popup.classList.add("popup_opened");
	document.addEventListener('keydown', closePopupClickEsc);
}

function closePopup(popup) {
	 popup.classList.remove("popup_opened");
	 document.removeEventListener('keydown', closePopupClickEsc);
}

// Открываем попап по клику на иконку "Карандаш"
btnEdit.addEventListener("click", function () {
	   openPopup(popupEdit);
		nameInput.value = profileName.textContent;
		jobInput.value = profileAboutMe.textContent;
		validinputEditPopup.resetSppanError();
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

// Закрываем попап по клику на иконку "Escape"
function closePopupClickEsc(evt) {
	const activePopup = document.querySelector('.popup_opened');
 
	if (evt.key === 'Escape') {
	  closePopup(activePopup);
	}
};

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет

function formSubmitHandler(evt) {
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
formElement.addEventListener('submit', formSubmitHandler);

/*      Управление popup new place          */ 

//Открываем попап по клику на иконку "+"
btnNewPlace.addEventListener("click", function () {
	openPopup(popupNewPlace);
	validInputAddPopup.resetSppanError();
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

//Cards


const initialCards = [
	{
		 name: 'Аланский Успенский мужской монастырь',
		 link: './img/Alan_Holy_Dormition_Monastery.jpg'
	},
	{
		 name: 'Тоторс',
		 link: './img/Тоторс.jpeg'
	},
	{
		 name: 'Даргавс',
		 link: './img/town-of-the-dead.jpg'
	},
	{
		 name: 'Цейское ущелье',
		 link: './img/Tsey_Gorge.jpg'
	},
	{
		 name: 'Караугом',
		 link: './img/Караугом.jpeg',
	},
	{
		 name: 'Владикавказ',
		 link: './img/vladikavkaz.jpeg'
	},
];


// Закрываем попап по клику вне его
popupImge.addEventListener("click", function (event) {
	if (event.target === this) {
		closePopup(popupImge)
		
	};
});

// Закрываем попап по клику на иконку "Крестик"
btnClosePopupImg.addEventListener("click", function (event) {
	closePopup(popupImge);
});

// Найдём все карточки
const cardsArray = document.querySelectorAll('.usercard__card');
 function renderCard (card) {
	userCardContainer.prepend(card);
 }

initialCards.forEach(card => {
	const newCardObject = new Card({name: card.name, link: card.link}, hiddenCardSelector);
	const newCard = newCardObject.createCard();
	renderCard(newCard);
});


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandlerPlace(evt) {
	evt.preventDefault();
	
	const newCard = new Card({name: cardNameInput.value, link:cardLinkInput.value}, 'section.usercard__content > template').createCard(); 
	renderCard(newCard);
		
  closePopup(popupNewPlace);
  
  formNewPlace.reset();
  
  
}
formNewPlace.addEventListener('submit', formSubmitHandlerPlace);


/* Валидация  */

const validInputAddPopup = new FormValidator(initialsConfig, popupNewPlace);
validInputAddPopup.enableValidation();
const validinputEditPopup = new FormValidator(initialsConfig, popupEdit);
validinputEditPopup.enableValidation();
