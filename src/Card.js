class Card {
	constructor(data, cardTemplateSelector){
		this._name = data.name;
		this._link = data.link;
		this._cardTemplate = document.querySelector(cardTemplateSelector);
	}
	
	createCard() {
		this._element = this._cloneCard();
      this._setEventListeners();

		this._element.querySelector('.usercard__name-cards').textContent = this._name;
		this._element.querySelector('.usercard__img-cards').alt = this._name;
		this._element.querySelector('.usercard__img-cards').src = this._link;

		return this._element;
	}

	_cloneCard() {
		return this._cardTemplate.content.firstElementChild.cloneNode(true);
	}    

	_setEventListeners() {
		//del
		this._element.querySelector('.usercard__btn-delete').addEventListener('click', () => this._onClickDelete());

		//like
		this._element.querySelector('.usercard__like').addEventListener('click',  this._onClickLike);

		//preview
		this._element.querySelector('.usercard__img-cards').addEventListener('click',  this._onClickOpenImg);
	}
	
	_onClickDelete () {
		this._element.remove();
	}

	_onClickLike() {
		this.classList.toggle('usercard__like_active');
	}

	_onClickOpenImg() {
		openPopup(popupImge);
		document.querySelector('#popup-new-place-img').querySelector('.popup__img').src = this.src;
		document.querySelector('#popup-new-place-img').querySelector('.popup__name-img').textContent = document.querySelector('.usercard__name-cards').textContent;
		document.querySelector('#popup-new-place-img').querySelector('.popup__img').alt = document.querySelector('.usercard__name-cards').textContent;
	}

	
};

