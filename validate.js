

 // Функция, которая добавляет класс с ошибко
 const showInputError = (formElement, input, errorMessage) => {
	const errorElement = document.querySelector(`#${input.id}-error`);
	input.classList.add(initialsConfig.inputErrorClass);
	// Показываем сообщение об ошибке
	errorElement.textContent = errorMessage;
	errorElement.classList.add(initialsConfig.errorClass);
 };

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, input) => {
	const errorElement = document.querySelector(`#${input.id}-error`);
	input.classList.remove(initialsConfig.inputErrorClass);
	 // Скрываем сообщение об ошибке
	 errorElement.classList.remove(initialsConfig.errorClass);
	 errorElement.textContent = '';
 };


function validateField (formElement, input) {
	if (!input.validity.valid) {
		// Если поле не проходит валидацию, покажем ошибку
		showInputError(formElement, input, input.validationMessage);
	 } else {
		// Если проходит, скроем
		hideInputError(formElement, input);
	 }
	
}

const hasInvalidInput = (inputList) => {
	// проходим по этому массиву методом some
	return inputList.some((input) => {
	  // Если поле не валидно, колбэк вернёт true
	  // Обход массива прекратится и вся фунцкция
	  // hasInvalidInput вернёт true
 
	  return !input.validity.valid;
	})
 }; 


 // Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять

const toggleButtonState = (inputList, buttonElement) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.classList.remove(initialsConfig.inactiveButtonClass);
	 buttonElement.setAttribute('disabled', true);
  } else {
    // иначе сделай кнопку активной
	 buttonElement.removeAttribute('disabled');
	 buttonElement.classList.add(initialsConfig.inactiveButtonClass);
  }
}; 

function setActiveButtonState(button, state){
	if(state){
		button.removeAttribute('disabled');
		button.classList.add(initialsConfig.inactiveButtonClass);
		return;
		
	}

	button.classList.remove(initialsConfig.inactiveButtonClass);
	button.setAttribute('disabled', true);
		
}

const allInpout = document.querySelectorAll(initialsConfig.inputSelector);

const resetSppanError = () => {
allInpout.forEach(input => {
	hideInputError(formElement, input);
});
}

const setEventListeners = (formElement) => {
	// Находим все поля внутри формы,
	// сделаем из них массив методом Array.from
	const inputList = Array.from(formElement.querySelectorAll(initialsConfig.inputSelector));
	
	const buttonElement = formElement.querySelector(initialsConfig.submitButtonSelector);
 
	// Обойдём все элементы полученной коллекции
	inputList.forEach((input) => {
	  // каждому полю добавим обработчик события input
	  input.addEventListener('input', () => {
		 // Внутри колбэка вызовем isValid,
		 // передав ей форму и проверяемый элемент
		 validateField(formElement, input);
		 // Вызовем toggleButtonState и передадим ей массив полей и кнопку
		 toggleButtonState(inputList, buttonElement);
	  });
	});
 }; 

const enableValidation = () => {
	// Найдём все формы с указанным классом в DOM,
	// сделаем из них массив методом Array.from
	const formList = Array.from(document.querySelectorAll(initialsConfig.formSelector));
 
	// Переберём полученную коллекцию
	formList.forEach((formElement) => {
	  formElement.addEventListener('submit', (evt) => {
		 // У каждой формы отменим стандартное поведение
		 evt.preventDefault();
	  });
 
	  // Для каждой формы вызовем функцию setEventListeners,
	  // передав ей элемент формы
	  setEventListeners(formElement);
	});
 };
 
// Вызовем функцию
enableValidation(initialsConfig); 


