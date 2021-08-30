const formAddCard = document.querySelector("form[name=new-place-form]");
const formProfileUser = document.querySelector("form[name=edit-profile]");

 // Функция, которая добавляет класс с ошибко
 const showInputError = (element) => {
	const errorElement = document.querySelector(`#${element.id}-error`);
	element.classList.add('popup__input_type_error');
	// Показываем сообщение об ошибке
	errorElement.classList.add('error_active');
 };

// Функция, которая удаляет класс с ошибкой
const hideInputError = (element,) => {
	const errorElement = document.querySelector(`#${element.id}-error`);
	element.classList.remove('popup__input_type_error');
	 // Скрываем сообщение об ошибке
	 errorElement.classList.remove('error_active');
 };

function validFiel(input) {
	input.setCustomValidity(""); 

	if (input.validity.valueMissing){
		input.setCustomValidity("Поле обязательно для заполнения");
		return false;	
	}

	if (input.validity.tooShort){
		input.setCustomValidity(`Минимальное количество символов ${input.minLength}`);
		return false;	
	}

	if (input.validity.tooLong){
		input.setCustomValidity(`Максимальное количество символов ${input.maxLength}`);
		return false;	
	}

	if (input.validity.typeMismatch && input.tupe === "url"){
		input.setCustomValidity('Пожалуйста, введите корректную ссылку');
		return false;	
	}

	return input.checkValidity();
}

function validateField (input) {
	const errorElement = input.parentNode.querySelector(`#${input.id}-error`);
	validFiel(input);
	if (!input.validity.valid) {
		// Если поле не проходит валидацию, покажем ошибку
		showInputError(input);
	 } else {
		// Если проходит, скроем
		hideInputError(input);
	 }
	errorElement.innerText = input.validationMessage;
	
}

function setActiveButtonState(button, state){
	if(state){
		button.removeAttribute('disabled');
		button.classList.add('popup__btn_valid');
		return;
		
	}

	button.classList.remove('popup__btn_valid');
	button.setAttribute('disabled', true);
		
}
//валидация инпута 
function handlerInputForm(event) {
	const form = event.currentTarget; //форм в которой клик инпут
	const input = event.target; //клик инпут
	const formButton = form.querySelector(".popup__btn")

	validateField(input);

	if (form.checkValidity()) {
		setActiveButtonState(formButton, true);
	}else{
		setActiveButtonState(formButton, false);
	}
}

formAddCard.addEventListener('input', handlerInputForm, true);
formProfileUser.addEventListener('input', handlerInputForm, true);

const allInpout = document.querySelectorAll('.popup__input');
const resetSppanError = () => {
allInpout.forEach(element => {
	hideInputError(element);
});
}






