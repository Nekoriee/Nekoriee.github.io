const messengerForm = document.querySelector('.mes-main');
const inputArea = document.querySelector('.mes-textarea');
const outputArea = document.querySelector('.mes-messages');

function AddMessage(){

    let text = inputArea.value.trim();

    if(text !== ''){
        //input.focus();
        outputArea.insertAdjacentHTML('beforeend',`<div class="mes-message-row"><p><span class="mes-message" id="sent">${text}</span></p></div>`);
    }

    inputArea.value = '';

}