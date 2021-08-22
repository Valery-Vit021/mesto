//Записываем содержимое заголовков в поля
// Заголовки
const profileName = document.querySelector(".usercard__name-user");
const profileAboutMe = document.querySelector(".usercard__about-me");

// Инпуты
const nameInput = document.querySelector(".popup__input_profile_name-user");
const jobInput = document.querySelector(".popup__input_profile_about-me");

// Управление popup
const popup = document.querySelector("#edit-profile");
const btnEdit = document.querySelector(".usercard__edit");
const btnClose = document.querySelector("#popup-edit-close");


function openPopup() {
	 popup.classList.add("popup_opened");
	
}

function closePopup() {
	 popup.classList.remove("popup_opened");
	 nameInput.value = profileName.textContent;
    jobInput.value = profileAboutMe.textContent;
}

// Открываем попап по клику на иконку "Карандаш"
btnEdit.addEventListener("click", function (event) {
    event.preventDefault();
    openPopup();
});

// Закрываем попап по клику вне его
popup.addEventListener("click", function (event) {
    if (event.target === this) {
        closePopup();
    }
});

// Закрываем попап по клику на иконку "Крестик"
btnClose.addEventListener("click", function (event) {
    event.preventDefault();
    closePopup();
});

// Находим форму в DOM
const formElement = document.querySelector("form[name=edit-profile]");

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

    closePopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

// popup new place

// Управление popup new place
const popupNewPlace = document.querySelector("#popup-new-place");
const btnNewPlace = document.querySelector(".usercard__add-post");
const btnCloseNewPlace = document.querySelector("#popup-new-place-close");


//Открываем попап по клику на иконку "+"
btnNewPlace.addEventListener("click", function () {
     popupNewPlace.classList.add("popup_opened");
});

// Закрываем попап по клику вне его
popupNewPlace.addEventListener("click", function (event) {
    if (event.target === this) {
        popupNewPlace.classList.remove("popup_opened");
      }
});

// Закрываем попап по клику на иконку "Крестик"
btnCloseNewPlace.addEventListener("click", function (event) {
    event.preventDefault();
    popupNewPlace.classList.remove("popup_opened");
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

// Нахожу контейнер куда добавлять карточки
const userCardContainer = document.querySelector('.usercard__content'); //куда добав эл
// Нахожу кнопку 'добавить'
const addButton = document.querySelector('#btn-add-card'); //кнопка добавить
// Находим пустую карточку
const hiddenCart = document.querySelector('.usercard__blank-card').content;
console.log('hiddenCart');

// Проходим по массиву данных для карточек
initialCards.forEach(card => {
	// клонируем пустую карту
  const clonedCart = hiddenCart.cloneNode(true);
 
  // находим элемент с именем карты
  const cardNameElement = clonedCart.querySelector('.usercard__name-cards');
  // и меняем его содержимое на имя из массива
  cardNameElement.textContent = card.name;

  // находим элемент с картинкой карты
  const cardLinkElement = clonedCart.querySelector('.usercard__img-cards');
  // и меняем его содержимое на картинку из массива
  cardLinkElement.src = card.link;

  // добавляем полученную карточку в контейнер карточек
  userCardContainer.append(clonedCart);
});


// Находим форму в DOM
const formNewPlace = document.querySelector("form[name=new-place-form]");

// находим input с именем карты
const cardNameInput = document.querySelector('.popup__input_new-place_name');
// находим input с картинкой карты
const cardLinkInput = document.querySelector('.popup__input_new-place_link');


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandlerPlace(evt) {
	evt.preventDefault();
  // клонируем пустую карту
  const clonedNewCart = hiddenCart.querySelector('.usercard__card').cloneNode(true);
  

  // находим элемент с именем карты
  const cardNameNewElement = clonedNewCart.querySelector('.usercard__name-cards');
  // и меняем его содержимое на имя из input
  cardNameNewElement.textContent = cardNameInput.value;

  // находим элемент с картинкой карты
  const cardLinkNewElement = clonedNewCart.querySelector('.usercard__img-cards');
  // и меняем его содержимое на картинку из input
  cardLinkNewElement.src = cardLinkInput.value;

  // добавляем полученную карточку в контейнер карточек
  userCardContainer.prepend(clonedNewCart);

  cardNameInput.value = '';
  cardLinkInput.value = '';
  

  popupNewPlace.classList.remove("popup_opened");

  addDeleteCardHandler(clonedNewCart);
  addLikeHandler(clonedNewCart);
  addOpenImgHandler(clonedNewCart);
}

formNewPlace.addEventListener('submit', formSubmitHandlerPlace);

//del and like
const onClickDelete = event => {
	const deleteButton = event.currentTarget;
	const deletingCard = deleteButton.closest('.usercard__card');

	deletingCard.remove();
};
const addDeleteCardHandler = deletingCard => {
	deletingCard.querySelector('.usercard__btn-delete').addEventListener('click', onClickDelete);
};


// Привязываем обработчик клика на иконку Like
const onClickLike = event => {
	const likeButton = event.currentTarget;

	if (likeButton.classList.contains('usercard__like_active')) {
		 likeButton.classList.remove('usercard__like_active');
	} else {
		 likeButton.classList.add('usercard__like_active');
	}
}
const addLikeHandler = card => {
	const likeButton = card.querySelector('.usercard__like');

	likeButton.addEventListener('click', onClickLike);
}

// Popup place img

const nameCard = document.querySelector(".usercard__name-cards");
const imgCard = document.querySelector(".usercard__img-cards");
const popupImge = document.querySelector("#popup-new-place-img");
const btnClosePopupImg = document.querySelector('#popup-img-close');

const onClickOpenImg = event => {
	const clickImg = event.currentTarget;
	const clikedCard = clickImg.closest('.usercard__card');
	document.querySelector('#popup-new-place-img').querySelector('.popup__img').src = clikedCard.querySelector('.usercard__img-cards').src;
	document.querySelector('#popup-new-place-img').querySelector('.popup__name-img').textContent = clikedCard.textContent;

	popupImge.classList.add("popup_opened");
}

const addOpenImgHandler = clikedCard=> {
	clikedCard.querySelector('.usercard__img-cards').addEventListener('click', onClickOpenImg);
};

// Закрываем попап по клику вне его
popupImge.addEventListener("click", function (event) {
	if (event.target === this) {
		popupImge.classList.remove("popup_opened");
	}
});

// Закрываем попап по клику на иконку "Крестик"
btnClosePopupImg.addEventListener("click", function (event) {
	event.preventDefault();
	popupImge.classList.remove("popup_opened");
});

// Найдём все карточки
const cardsArray = document.querySelectorAll('.usercard__card');
// И привяжем необходимые обработчики
cardsArray.forEach(card => {
	addDeleteCardHandler(card);
	addLikeHandler(card);
	addOpenImgHandler(card);
	
});