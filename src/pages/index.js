import {profileName, addForm, profileAboutMe, nameImg, editForm, nameInput, addPopup, aboutInput, btnEdit, btnNewPlace} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import {validationConfig} from '../utils/validationConfig.js';
import {initialCards} from '../utils/initial-сards.js';
import './index.css';

//данные пользователя
const userInfo = new UserInfo({nameSelector:".usercard__name-user", aboutSelector:".usercard__about-me"});
// popup img
const popupWithImage = new PopupWithImage("#popup-new-place-img");
// popup add
const popupAdd = new PopupWithForm("#popup-new-place", addFormSubmitHandler);
//popup edit 
const popupEdit = new PopupWithForm("#edit-profile", editFormSubmitHandler);
//card section
const cardSection = new Section({items: initialCards, renderer: createCard}, ".usercard__content");

 

const addFormValid = new FormValidator(validationConfig, addForm);
addFormValid.enableValidation();

const editFormValid = new FormValidator(validationConfig, editForm);
editFormValid.enableValidation();

//функция создания карты через попап
function createCard(item) {
	return new Card({data: item, handleCardClick}, '.usercard__blank-card').createCard();
}

//отображение инфы о пользователе
function editProfile() {
	popupEdit.open();
	editFormValid.resetSppanError();
	nameInput.value = userInfo.getUserInfo().name;
	aboutInput.value = userInfo.getUserInfo().about;
}

// колбэк сабмита формы edit
function editFormSubmitHandler({name, about}) {
	userInfo.setUserInfo({name, about});
	popupEdit.close();
}


function addElement() {
	popupAdd.open();
	addFormValid.resetSppanError();
}

// колбэк сабмита формы add
function addFormSubmitHandler( {place, link} ) {
	cardSection.addItems(createCard( {name: place, link: link, alt: place} ));
	popupAdd.close();
}

function handleCardClick(evt) {
	const popupImageSrc = evt.target.getAttribute("src");
	const popupImageAlt = evt.target.getAttribute("alt");
	
	
	popupWithImage.open( {src: popupImageSrc, alt: popupImageAlt} );
	nameImg.textContent = popupImageAlt;
}
 
//слушатель на кнопку ручки
btnEdit.addEventListener('click', editProfile);
// слушатель а кнопку +
btnNewPlace.addEventListener('click', addElement);
 

cardSection.renderItems();
popupAdd.setEventListeners();
popupEdit.setEventListeners();
popupWithImage.setEventListeners();
