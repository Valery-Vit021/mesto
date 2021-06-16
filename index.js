//Записываем содержимое заголовков в поля
// Заголовки
let profileName = document.querySelector(".usercard__name-user");
let profileAboutMe = document.querySelector(".usercard__about-me");

// Инпуты
let nameInput = document.querySelector(".popup__input_name");
let jobInput = document.querySelector(".popup__input_about-me");

// Сразу присвоим заголовки в инпуты
nameInput.value = profileName.textContent;
jobInput.value = profileAboutMe.textContent;

// Управление popup
let popup = document.querySelector("#edit-profile");
let btnEdit = document.querySelector(".usercard__edit");
let btnClose = document.querySelector("#popup-edit-close");


function openPopup() {
    popup.classList.remove("hidden");
}

function closePopup() {
    popup.classList.add("hidden");

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
let formElement = document.querySelector("form[name=edit-profile]");
console.log(formElement);
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
    evt.preventDefault();

// Получите значение полей jobInput и nameInput из свойства value
    let NameUser = nameInput.value;
    let AboutUser = jobInput.value;

// Вставьте новые значения с помощью textContent
    profileName.textContent = NameUser;
    profileAboutMe.textContent = AboutUser;

    closePopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);


// popup new place

// Управление popup new place
let popupNewPlace = document.querySelector("#popup-new-place");
let btnNewPlace = document.querySelector(".usercard__add-post");
let btnCloseNewPlace = document.querySelector("#popup-new-place-close");
console.log(popupNewPlace.classList);

//Открываем попап по клику на иконку "+"
btnNewPlace.addEventListener("click", function (event) {
    event.preventDefault();
    popupNewPlace.classList.remove("hidden");
});

// Закрываем попап по клику вне его
popupNewPlace.addEventListener("click", function (event) {
    if (event.target === this) {
        popupNewPlace.classList.add("hidden");
        console.log(popupNewPlace.classList);
    }
});

// Закрываем попап по клику на иконку "Крестик"
btnCloseNewPlace.addEventListener("click", function (event) {
    event.preventDefault();
    popupNewPlace.classList.add("hidden");
});


/* РАБОТА С КАРТОЧКАМИ */

//Cards
const initialCards = [
    {
        name: 'Аланский Успенский мужской монастырь',
        link: './img/Alan Holy Dormition Monastery.jpg'
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
        link: './img/Tsey Gorge.jpg'
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
const hiddenCart = userCardContainer.querySelector('.usercard__card.hidden');

// Проходим по массиву данных для карточек
initialCards.forEach(card => {
    // клонируем пустую карту
	const clonedCart = hiddenCart.cloneNode(true);
	// делаем её видимой
	clonedCart.classList.remove('hidden');

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
let formNewPlace = document.querySelector("form[name=new-place-form]");
console.log(formNewPlace);
// находим input с именем карты
const cardNameInput = document.querySelector('.popup__input_name-place');
// находим input с картинкой карты
const cardLinkInput = document.querySelector('.popup__input_link');
console.log(formNewPlace);
console.log(cardNameInput.value);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandlerPlace(evt) {
    evt.preventDefault();
	// клонируем пустую карту
	const clonedNewCart = hiddenCart.cloneNode(true);
	// делаем её видимой
	clonedNewCart.classList.remove('hidden');


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
	

	popupNewPlace.classList.add("hidden");
}
formNewPlace.addEventListener('submit', formSubmitHandlerPlace);


//del and like
const deleteCard = deletingCard => {
	deletingCard.querySelector('.usercard__btn-delete').addEventListener('click', () => {
		 deletingCard.closest('.usercard__card').remove();
	});
};

// Привязываем обработчик клика на иконку Like
const onClickLike = card => {
	const likeButton = card.querySelector('.usercard__like');
	likeButton.addEventListener('click', () => {
		if(likeButton.classList.contains('usercard__like_active')){
			 likeButton.classList.remove('usercard__like_active');
		}
		else{
			likeButton.classList.add('usercard__like_active');
		}
	});
};

// Найдём все карточки
const cardsArray = document.querySelectorAll('.usercard__card');
// И привяжем необходимые обработчики
cardsArray.forEach(card => {
    deleteCard(card);
    onClickLike(card);
});
