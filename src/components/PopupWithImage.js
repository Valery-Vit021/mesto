import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
   constructor(selector){
      super(selector);
      this._popupImg = this._popup.querySelector('.popup__img');
      this._popupNameImg = this._popup.querySelector('.popup__name-img');
   }

   open(data) {
      super.open();
      this._popupImg.src = data.src;
      this._popupImg.alt = data.name; 
      this._popupNameImg.textContent = data.name;
   }   
}