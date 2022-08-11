var event_open_model = document.querySelector('.button-open-btn')
var event_model = document.querySelector('.Model')
var event_icon_header = document.querySelector('#icon-header')
var event_button_close = document.querySelector('.button_close')
// lấy các event mà muốn lắng nghe 
// thêm event vào 
event_open_model.onclick = function(){
    event_model.classList.toggle('hide')
}
event_icon_header.onclick = function(){
    event_model.classList.toggle('hide')
}
event_button_close.onclick = function(){
    event_model.classList.toggle('hide')
}
//
event_model.onclick = function(e){
  if(e.target === e.currentTarget ){
    event_model.classList.toggle('hide')

  }  
}
