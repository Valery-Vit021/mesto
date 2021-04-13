let popup = document.querySelector(".popup-edit");
let btn = document.querySelector(".usercard__edit");
let close = document.querySelector(".popup-edit__close");

btn.addEventListener("click", function(event){
   event.preventDefault();
   popup.classList.remove("hidden");
});

popup.addEventListener("click", function(event) {
   e = event || window.event
   if (e.target == this) {
    popup.classList.add("hidden");
   }
});

close.addEventListener("click", function(event){
   event.preventDefault();
   popup.classList.add("hidden");
});
	 

	// Находим форму в DOM
let formElement =  document.querySelector(".popup-edit__info"); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector(".popup-edit__name-user");// Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector(".popup-edit__about-me");// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
																
// Получите значение полей jobInput и nameInput из свойства value
     let NameUser = nameInput.value;
	  let AboutUser = jobInput.value;
	  console.log(AboutUser);

// Выберите элементы, куда должны быть вставлены значения полей
	  let profileName = document.querySelecto(".usercard__name-user");
	  let profileAboutMe = document.querySelecto(".usercard__about-me");
	  console.log(profileAboutMe);

// Вставьте новые значения с помощью textContent
	  profileName = NameUser.textContent;
	   profileAboutMe =AboutUser.textContent;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);