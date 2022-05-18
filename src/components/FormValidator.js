export default class FormValidator {
	constructor(config, formElement){
		this._formElement = formElement;
		this._inputSelector = config.inputSelector;
		this._submitButtonElement = this._formElement.querySelector(config.submitButtonSelector);
		this._inactiveButtonClass = config.inactiveButtonClass;
		this._inputErrorClass = config.inputErrorClass;
		this._errorClass = config.errorClass;
		this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
	}

	_showInputError(input, errorMessage) {
		const errorElement = this._formElement.querySelector(`#${input.id}-error`);
		input.classList.add(this._inputErrorClass);
		// Показываем сообщение об ошибке
		errorElement.textContent = errorMessage;
		errorElement.classList.add(this._errorClass);//подсвет красным
	};

	_hideInputError = (input) => {
		const errorElement = this._formElement.querySelector(`#${input.id}-error`);
		input.classList.remove(this._inputErrorClass);
		 // Скрываем сообщение об ошибке
		 errorElement.textContent = '';
		 // убираем подсветку
		  errorElement.classList.remove(this._errorClass);
	};

	_validateField (input) {
		if (!input.validity.valid) {
			// Если поле не проходит валидацию, покажем ошибку
			this._showInputError(input, input.validationMessage);
		} else {
			// Если проходит, скроем
			this._hideInputError(input);
		}
	};

	_hasInvalidInput() { 
		// проходим по этому массиву методом some
		return this._inputList.some((input) => {
		  // Если поле не валидно, колбэк вернёт true
		  // Обход массива прекратится и вся фунцкция
		  // hasInvalidInput вернёт true
	 
		  return !input.validity.valid;
		});
	};

	_toggleButtonState () {
		// Если есть хотя бы один невалидный инпут
		if (this._hasInvalidInput(this._inputList)) {
		  // сделай кнопку неактивной
		  this._submitButtonElement.classList.remove(this._inactiveButtonClass);
		  this._submitButtonElement.setAttribute('disabled', true);
		} else {
		  // иначе сделай кнопку активной
		  this._submitButtonElement.removeAttribute('disabled');
		  this._submitButtonElement.classList.add(this._inactiveButtonClass);
		}
	}; 

	
	_setEventListeners () {
		this._toggleButtonState();
		// Обойдём все элементы полученной коллекции
		this._inputList.forEach((input) => {
		  // каждому полю добавим обработчик события input
		  input.addEventListener('input', () => {
			 this._validateField(input);
			 // Вызовем toggleButtonState 
			 this._toggleButtonState();
		  });
		});
	};


	resetSppanError()  {
			this._toggleButtonState();
			this._inputList.forEach(input => {
				this._hideInputError(input);
			});
		};

	enableValidation() {
		this._setEventListeners ()
		// Переберём полученную коллекцию
			  this._formElement.addEventListener('submit', (evt) => {
			 // У каждой формы отменим стандартное поведение
			 evt.preventDefault();
		  });
	 
		  // Для каждой формы вызовем функцию setEventListeners,
		   this._setEventListeners();
			
		};
	
		
}

