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
const hiddenCart = document.querySelector('.usercard__blank-card').content;
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
		resetSppanError(popupEdit);
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



// Управление popup new place

//Открываем попап по клику на иконку "+"
btnNewPlace.addEventListener("click", function () {
	openPopup(popupNewPlace);
	resetSppanError(popupNewPlace);
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


//del and like
const onClickDelete = event => {
	const deleteButton = event.currentTarget;
	const deletingCard = deleteButton.closest('.usercard__card');
	
	deletingCard.remove();
};


// Привязываем обработчик клика на иконку Like
const onClickLike = event => {
	const likeButton = event.currentTarget;
	 likeButton.classList.toggle('usercard__like_active');
};

// Popup place img

const onClickOpenImg = event => {
	const clickImg = event.currentTarget;
	const clikedCard = clickImg.closest('.usercard__card');
	document.querySelector('#popup-new-place-img').querySelector('.popup__img').src = clikedCard.querySelector('.usercard__img-cards').src;
	document.querySelector('#popup-new-place-img').querySelector('.popup__name-img').textContent = clikedCard.textContent;
	document.querySelector('#popup-new-place-img').querySelector('.popup__img').alt =clikedCard.querySelector(".usercard__name-cards").textContent;
	openPopup(popupImge);
};


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


// Добовляем карточки 

function createCard (name, link){
	// клонируем пустую карту
	const clonedCart = hiddenCart.cloneNode(true);

	// находим элемент с именем карты
	const cardNameElement = clonedCart.querySelector('.usercard__name-cards');
	// и меняем его содержимое на имя из 
	cardNameElement.textContent = name;
		// находим элемент с картинкой карты
	const cardLinkElement = clonedCart.querySelector('.usercard__img-cards');
	// и меняем его содержимое на картинку из массива
	cardLinkElement.src = link;
		// добовляем alt
	cardLinkElement.alt = name;
		//del
	clonedCart.querySelector('.usercard__btn-delete').addEventListener('click', onClickDelete);
	//like
	const likeButton = clonedCart.querySelector('.usercard__like');
	likeButton.addEventListener('click', onClickLike);
	//превью
	clonedCart.querySelector('.usercard__img-cards').addEventListener('click', onClickOpenImg);

	return clonedCart;	
}

// добавление карточки в контейнер
function renderCard(card) {
	const newCard = createCard (card.name, card.link);
	userCardContainer.prepend(newCard);
}

// Проходим по массиву данных для карточек
initialCards.forEach(card => {
	renderCard(card);
});


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandlerPlace(evt) {
	evt.preventDefault();

	const cardObject = {};
    cardObject.name = cardNameInput.value;
    cardObject.link = cardLinkInput.value;

	renderCard(cardObject);

  closePopup(popupNewPlace);

  formNewPlace.reset();
 
}

formNewPlace.addEventListener('submit', formSubmitHandlerPlace);

