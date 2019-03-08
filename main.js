let changeProjectsList = (event) => {
  if (projectsList.style.display == "none") {
    projectsList.style.display = "block"
  } else {
    projectsList.style.display = "none"
  }
}

let randomQuote = (event) => {
  quote.style.display = "block"
  quotes = ["Here is a quote", "This one is particularly inspirational!", "This quote definitely changed my life"]
  let newQuote = quote.innerText
  while (newQuote == quote.innerText) {
    newQuote = quotes[Math.floor(Math.random() * 3)]
    debugger;
  }
  quote.innerText = newQuote;
}

let checkCommentFormForInput = (event) => {
  let formFields = [nameForm, locationForm, commentForm]
  let done = true;
  formFields.forEach((field) => {
    if (field.value == "") {
      done = false;
      field.previousElementSibling.style.visibility = "visible"
    } else {
      field.previousElementSibling.style.visibility = "hidden"
    }
  })
  if (done == true) {
    userName = nameForm.value
    userLocation = locationForm.value
    alert(`Thank you for your comment, ${userName} from ${userLocation}!`)
  }
}

projectsButton = document.getElementById("project-button")
projectsList = document.getElementById("project-list")
projectsList.style.display = "none"

quotesButton = document.getElementById("quote-button")
quote = document.getElementById("quote-paragraph")
quote.style.display = "none"

nameForm = document.getElementById("your-name-form")
locationForm = document.getElementById("your-location-form")
commentForm = document.getElementById("your-comment-form")
submitButton = document.getElementById("submit-button")

projectsButton.addEventListener('click', changeProjectsList)
quotesButton.addEventListener('click', randomQuote)
submitButton.addEventListener('click', checkCommentFormForInput)

let userName = ""
let userLocation = ""
