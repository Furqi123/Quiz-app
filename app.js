var htmlQuestions = [
  {
    question: 'HTML stands for',
    option1: 'Hyper Text Modul Language',
    option2: 'Hyper Text Markup Language',
    option3: 'Hyper Test Markup Language',
    option4: 'Hyperlink Markup Language',
    answer: 'Hyper Text Markup Language'
  },

  {
    question: 'Where we can use the < style > tag?',
    option1: 'In the head element',
    option2: 'In the body element',
    option3: 'In the head and body elements',
    option4: 'None of above',
    answer: 'In the head and body elements'
  },

  {
    question: 'Which tag is used to create a hyperlink?',
    option1: '< a >',
    option2: '< img >',
    option3: '< div >',
    option4: '< link >',
    answer: '< a >'
  },
  {
    question: 'Which of the following characters indicate closing of a tag?',
    option1: '.',
    option2: '/',
    option3: '//',
    option4: '!',
    answer: '/'
  },
  {
    question: 'What is the font-size of the h1 heading tag?',
    option1: '3.5 em',
    option2: '2.17 em',
    option3: '2 em',
    option4: '1.5 em',
    answer: '2 em'
  },
  {
    question: 'How many heading tags are there in HTML5?',
    option1: '2',
    option2: '3',
    option3: '5',
    option4: '6',
    answer: '6'
  },
  {
    question: 'How many attributes are there in HTML5?',
    option1: '2',
    option2: '4',
    option3: '1',
    option4: 'None of the Above',
    answer: 'None of the Above'
  },
  {
    question: 'Which of the following attributes is used to add link to any element',
    option1: 'link',
    option2: 'ref',
    option3: 'href',
    option4: 'newref',
    answer: 'href'
  },
  {
    question: 'What is the purpose of using div tags in HTML?',
    option1: 'For creating Different styles.',
    option2: 'For creating different sections',
    option3: 'For adding headings',
    option4: 'For adding styles',
    answer: 'For creating different sections'
  },
  {
    question: 'Which of the following attributes is used to open an hyperlink in new tab?',
    option1: 'target',
    option2: 'tab',
    option3: 'ref',
    option4: 'href',
    answer: 'target'
  },
]




function quizSelect(){
var email = document.getElementById('email')
var pass = document.getElementById('pass')
var signUpForm = document.getElementById('sign-up')
var quiz_select = document.getElementById('quiz-select')

if(email.value.trim() == "furi" && pass.value.trim() == 2567){
  signUpForm.style.display = 'none';
   quiz_select.style.display = 'block';
}
else{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Please Enter Correct Email & Password',
    
  })
}
email.value = ""
pass.value = ""
}

var htmlIndex = 0
var correctCount = 0
var quesCount = 1
var score = 0
var sec = 20
function nextQuestionHtml(){
  var cont = document.getElementById('cont')
  var options = document.getElementsByName('option');
  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      console.log(options[i].value)
      if (options[i].value === htmlQuestions[htmlIndex - 1].answer) {
        score += 10
        correctCount++
      }
    }

  }

   
  if (!htmlQuestions[htmlIndex]) {
   (score / 10) * 100

    cont.innerHTML = `
    <div class="result">
    <div class="result-icon">
       <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-trophy-fill" viewBox="0 0 16 16">
         <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z"/>
       </svg>
      </div>
      <br>
      <div class="result-body">
       <p>Congratulation</p>
      
       </div>
      <div class="result-body-p2">
      <p>You Have Get</p>
      </div>
      <div class="result-body-p3">
       <p> ${score}% Percentage</p>
      </div>
      
      <div class="result-btn">
       
      <a href = "./index.html"><button>Quit Quiz</button></a>
     
      </div>
     
      </div>
    `
   console.log(htmlIndex)
    return;
  }


  cont.innerHTML = `
  <div class="box" id="quiz-question">
  <div class="correct-timer">
    <div class="count">
      <p>Correct: <span class="comb-color">${correctCount}/10</span></p>
    </div>
    <div class="time">
      <p>Timer: <span class="comb-color">20</span></p>
    </div>
  </div>
  <br>
  <div class="box-body">

    <p class="ques">${quesCount++}) ${htmlQuestions[htmlIndex].question}</p>
    <div>
      <label for=""><input onclick="clicked()" type="radio" name="option" value="${htmlQuestions[htmlIndex].option1}" id="">${htmlQuestions[htmlIndex].option1}</label>
    </div>
    <br>
    <div>
      <label for=""><input onclick="clicked()" type="radio" name="option" value="${htmlQuestions[htmlIndex].option2}" id="">${htmlQuestions[htmlIndex].option2}</label>
    </div>
    <br>
    <div>
      <label for=""><input onclick="clicked()" type="radio" name="option" value="${htmlQuestions[htmlIndex].option3}" id="">${htmlQuestions[htmlIndex].option3}</label>
    </div>
    <br>
    <div>
      <label for=""><input onclick="clicked()" type="radio" name="option" value="${htmlQuestions[htmlIndex].option4}" id="">${htmlQuestions[htmlIndex].option4}</label>
    </div>
    <div>
      <button disabled onclick="nextQuestionHtml()" id="btn" class="box-btn">Next</button>
    </div>
  </div>
</div> 
  `
  htmlIndex++;

 
}

nextQuestionHtml()
 
function clicked() {
  var btn = document.getElementById('btn')
  btn.disabled = false
}




