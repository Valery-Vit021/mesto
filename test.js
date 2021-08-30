/*const formAddCard = document.querySelector("form[name=new-place-form]"); //form place
const formProfileUser = document.querySelector("form[name=edit-profile]"); //form profile*/
const formElement = document.querySelector('.popup__form');
const formInput = document.querySelector('.popup__input'); //input
//const errorElement = document.querySelector(`#${formInput.id}-error`);
	


 // Функция, которая добавляет класс с ошибко
 const showInputError = (formElement, formInput, errorMessage) => {
	const errorElement = document.querySelector(`#${formInput.id}-error`);
	
	element.classList.add('popup__input_type_error');
	console.log(element.classList);
	  // Заменим содержимое span с ошибкой на переданный парамет
	formError.textContent = errorMessage;
	// Показываем сообщение об ошибке
	errorElement.classList.add('error_active');
	console.log(errorElement);
 };

 // Функция, которая удаляет класс с ошибкой
const hideInputError = (element,) => {
	element.classList.remove('popup__input_type_error');
	 // Скрываем сообщение об ошибке
	 errorElement.classList.remove('error_active');
 };

// Функция, которая проверяет валидность поля
const isValid = (formElement, formInput) => {
	if (!formInput.validity.valid) {
	  // Если поле не проходит валидацию, покажем ошибку
	  showInputError(formElement, formInput, formInput.validationMessage);
	} else {
	  // Если проходит, скроем
	  hideInputError(formElement, formInput);
	}
 };
  
 
 // Вызовем функцию isValid на каждый ввод символа
 formInput.addEventListener('input', isValid); 

/*   ***     form profile   ***   */
 

formProfileUser.addEventListener('submit', function (evt) {
	// Отменим стандартное поведение
	evt.preventDefault();
 });

// Слушатель события input
 formProfileUser.addEventListener('input', function (evt) {
	// Выведем в консоль значение свойства validity.valid поля ввода, 
	// на котором слушаем событие input
	console.log(evt.target.validity.valid);
 });


 /*    ***   form new place     ***    */

 formAddCard.addEventListener('submit', function (evt) {
	// Отменим стандартное поведение
	evt.preventDefault();
 });

 formAddCard.addEventListener('input', function (evt) {
	// Выведем в консоль значение свойства validity.valid поля ввода, 
	// на котором слушаем событие input
	console.log(evt.target.validity.valid);
 });
 

 

 