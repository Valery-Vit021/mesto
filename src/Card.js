import {previewImg, previewName, popupImage,} from '../utils/constants.js';
import {openPopup} from '../utils/utils.js';

export default class Card {
	constructor(data, cardTemplateSelector){
		this._name = data.name;
		this._link = data.link;
		this._cardTemplate = document.querySelector(cardTemplateSelector);
	}
	
	createCard() {
		this._element = this._cloneCard();
      this._setEventListeners();
		this.cardImg = this._element.querySelector('.usercard__img-cards');
		this._element.querySelector('.usercard__name-cards').textContent = this._name;
		this.cardImg.alt = this._name;
		this.cardImg.src = this._link;

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
		this._element.querySelector('.usercard__img-cards').addEventListener('click', () => {
			this._onClickOpenImg(this.cardImg);
	  });
	}
	
	_onClickDelete () {
		this._element.remove();
	}

	_onClickLike() {
		this.classList.toggle('usercard__like_active');
	}

	_onClickOpenImg(cardImg) {
		openPopup(popupImage);
		previewImg.src = cardImg.src;
		previewName.textContent = cardImg.alt;
		previewImg.alt = cardImg.alt;
	}

	
};

