
export function openPopup(popup) {
	popup.classList.add("popup_opened");
	document.addEventListener('keydown', closePopupClickEsc);
}

export function closePopup(popup) {
	 popup.classList.remove("popup_opened");
	 document.removeEventListener('keydown', closePopupClickEsc);
}

// Закрываем попап по клику на иконку "Escape"
export function closePopupClickEsc(evt) {
	const activePopup = document.querySelector('.popup_opened');
 
	if (evt.key === 'Escape') {
	  closePopup(activePopup);
	}
};
