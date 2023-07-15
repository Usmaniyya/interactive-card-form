const cardNumber = document.getElementById('number')
const cardName = document.getElementById('name')
const cardMonth = document.getElementById('month')
const cardYear = document.getElementById('year')
const cardCvv = document.getElementById('cvv')
const nameInput = document.getElementById('card-name')
const numberInput = document.getElementById('card-number')
const monthInput = document.getElementById('card-month')
const yearInput = document.getElementById('card-year')
const cvvInput = document.getElementById('card-cvv')
const cardReset = document.querySelectorAll('.reset')
const submitBtn = document.getElementById('btn-submit')
const successBtn = document.getElementById('success-btn')
const completed = document.querySelector('.success-container')
const form = document.querySelector('form')

function setCardNumber(e) {
  cardNumber.innerText = format(e.target.value)
}
function setCardName(e) {
  cardName.innerText = format(e.target.value)
}
function setCardMonth(e) {
  cardMonth.innerText = format(e.target.value)
}

function setCardYear(e) {
  cardYear.innerText = format(e.target.value)
}

function setCardCvv(e) {
  cardCvv.innerText = format(e.target.value)
}

function handleSubmit(e) {
  e.preventDefault()
  if (!nameInput.value) {
    nameInput.classList.add('error')
    nameInput.parentElement.classList.add('error-msg')
  } else {
    nameInput.classList.remove('error')
    nameInput.parentElement.classList.remove('error-msg')
  }
  if (!numberInput.value) {
    numberInput.classList.add('error')
    numberInput.parentElement.classList.add('error-msg')
  } else {
    numberInput.classList.remove('error')
    numberInput.parentElement.classList.remove('error-msg')
  }
  if (!monthInput.value) {
    monthInput.classList.add('error')
    monthInput.parentElement.classList.add('error-msg')
  } else {
    monthInput.classList.remove('error')
    monthInput.parentElement.classList.remove('error-msg')
  }
  if (!yearInput.value) {
    yearInput.classList.add('error')
    yearInput.parentElement.classList.add('error-msg')
  } else {
    yearInput.classList.remove('error')
    yearInput.parentElement.classList.remove('error-msg')
  }
  if (!cvvInput.value) {
    cvvInput.classList.add('error')
    cvvInput.parentElement.classList.add('error-msg')
  } else {
    cvvInput.classList.remove('error')
    cvvInput.parentElement.classList.remove('error-msg')
  }

  if (
    nameInput.value &&
    numberInput.value &&
    monthInput.value &&
    yearInput.value &&
    cvvInput.value &&
    numberInput.value.length == 16
  ) {
    completed.classList.remove('hidden')
    form.classList.add('hidden')
  }
}

function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, '$& ')
}

function reset(e) {
  e.preventDefault()
  completed.classList.add('hidden')
  form.classList.remove('hidden')
  cardReset.forEach((card) => {
    card.value = ''
  })

  cardNumber.innerHTML = '0000 0000 0000 0000'
  cardName.innerHTML = 'JANE APPLESEED'
  cardMonth.innerHTML = '00'
  cardYear.innerHTML = '00'
  cardCvv.innerHTML = '000'
}

// numberInput.onkeydown = function () {
//   if (numberInput.value.length > 0) {
//     if (numberInput.value.length % 4 == 0) {
//       numberInput.value += ' '
//     }
//   }
// }
numberInput.addEventListener('keyup', setCardNumber)
nameInput.addEventListener('keyup', setCardName)
monthInput.addEventListener('keyup', setCardMonth)
yearInput.addEventListener('keyup', setCardYear)
cvvInput.addEventListener('keyup', setCardCvv)

submitBtn.addEventListener('click', handleSubmit)
successBtn.addEventListener('click', reset)
