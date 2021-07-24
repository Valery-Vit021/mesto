//Записываем содержимое заголовков в поля
// Заголовки
let profileName = document.querySelector(".usercard__name-user");
let profileAboutMe = document.querySelector(".usercard__about-me");



// Инпуты
let nameInput = document.querySelector(".popup__input_name_user");
let jobInput = document.querySelector(".popup__input_about_me");

// Управление popup
let popup = document.querySelector("#edit-profile");
let btnEdit = document.querySelector(".usercard__edit");
let btnClose = document.querySelector("#popup-edit-close");


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


