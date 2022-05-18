export default class Popup{
   constructor(selector){
      this._popup = document.querySelector(selector);
      this._handleEscClose = this._handleEscClose.bind(this);
      this._overlayClick = this._overlayClick.bind(this);
   };

   open() {
      this._popup.classList.add("popup_opened");
      document.addEventListener('keydown', this._handleEscClose);
      document.addEventListener('click',  this._overlayClick);
   }

   close() {
      this._popup.classList.remove("popup_opened");
      document.removeEventListener('keydown',  this._handleEscClose);
      document.removeEventListener('click',  this._overlayClick);
   }

   _handleEscClose(evt) {
      if (evt.key === 'Escape' && this._popup.classList.contains('popup_opened')) {
         this.close();
      }
   }

   _overlayClick(evt){
      if (evt.target.classList.contains('popup')) {
         this.close();
      }
   }

   setEventListeners() {
      this._popup.querySelector('.popup__close').addEventListener("click", () => this.close());
   }
}