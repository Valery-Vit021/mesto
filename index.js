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

