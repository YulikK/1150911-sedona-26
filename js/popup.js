var link = document.querySelector(".open-form");
var popup = document.querySelector(".form-reservation");
var form = document.querySelector("form");
var dateIn = popup.querySelector("[name=date-in]");
var dateOut = popup.querySelector("[name=date-out]");
var adult = popup.querySelector("[name=adult]");
var children = popup.querySelector("[name=children]");
var storageAdult = "";
var storageChildren = "";
var isStorageSupport = true;

try{
  storageAdult = localStorage.getItem("adult");
  storageChildren = localStorage.getItem("children");
}
catch(err){
  isStorageSupport = false;

}

link.addEventListener("click", function(evt){
  evt.preventDefault();
  if(popup.classList.contains("form-reservation-show")){
    evt.preventDefault();
    popup.classList.remove("form-reservation-show");
    popup.classList.remove("form-reservation-animation");
  }
  else{
    popup.classList.add("form-reservation-show");
    popup.classList.add("form-reservation-animation");
    dateIn.focus();
    if (storageAdult){
      adult.value = storageAdult;
      children.value = storageChildren;
    }
  }
});

form.addEventListener("submit", function(evt){
  if(!dateIn.value || !dateOut.value || !adult.value){
    evt.preventDefault();
    dateIn.focus();
  }
  else{
    if(isStorageSupport){
      localStorage.setItem("adult", adult.value);
      localStorage.setItem("children", children.value);
    }
  }
})

window.addEventListener("keydown", function(evt){
  if(evt.keyCode === 27){
    if(popup.classList.contains("form-reservation-show")){
      evt.preventDefault();
      popup.classList.remove("form-reservation-show");
    }
  }
})
