let inputBtn = document.querySelector('#input_btn')
let inputText = document.querySelector('#input_text')


const modifyInput = (e) => {
  let doneBtnClick = () => { 
	inputBtn.innerText = 'edit';
	inputText.disabled = true;
	}

	let editBtnClick = () => {
	inputBtn.innerText = 'done';
	inputText.disabled = false;
	}
  
  if (inputText.attributes.disabled === true) {
    doneBtnClick()
  } else {
    editBtnClick()
  }
}
console.dir(inputText)

inputBtn.addEventListener('click', modifyInput)
