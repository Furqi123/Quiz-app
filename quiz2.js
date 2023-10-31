var cssQuestion = [
    {
        question: 'What does CSS stand for?',
        option1: 'Cascade sheets style',
        option2: 'Color and style sheets',     
        option3: 'Cascading style sheets',
        option4: 'Coded Style Sheet',
        answer: 'Cascading style sheets'
    },
    {
        question: 'Which of the below CSS properties is used to change the background color of CSS ?',
        option1: 'bg color',
        option2: 'color-background',     
        option3: 'background-color',
        option4: 'color',
        answer:  'background-color'
    },
    {
        question: 'Which of the below CSS class is used to change the text color of CSS ?',
        option1: 'background-color',
        option2: 'color',     
        option3: 'color-background',
        option4: 'None of the above',
        answer:  'color'
    },
    {
        question: 'Which of the below is the correct syntax to put a line over text in CSS?',
        option1: 'text-decoration: line',
        option2: 'text-decoration: none',     
        option3: 'text-decoration: overline',
        option4: 'text-decoration: underline',
        answer:  'text-decoration: overline'
    },
    {
        question: 'Which below property of CSS is used to set the indentation of the first line in a block of text ?',
        option1: '< a >',
        option2: '< img >',     
        option3: '< div >',
        option4: '< link >',
        answer: '< a >'
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
        question: 'Which of the following is the correct syntax to add the external stylesheet in CSS?',
        option1: '< style src = quiz.css >',
        option2: '< style src = "quiz.css" >',     
        option3: '< stylesheet > quiz.css < / stylesheet >',
        option4: '< link rel="stylesheet" type="quiz/css" href=" quiz.css " >',
         answer: '< link rel="stylesheet" type="quiz/css" href="quiz.css" >'
    },
    {
        question: 'Which below property of CSS is used to set the indentation of the first line in a block of text ',
        option1: 'text-indent property',
        option2: 'text-underlne-property',     
        option3: 'text-decoration none',
        option4: 'text-overflow property',
        answer: 'text-indent property'
    },
    {
        question: 'Which of the below CSS properties represent the order of flex items in the grid container ?',
        option1: 'order',
        option2: 'float',     
        option3: 'overflow',
        option4: 'All of the above',
        answer: 'order'
    },
    {
        question: 'How do we set the default width of the font in CSS ?',
        option1: 'font-stretch',
        option2: 'font-weight',     
        option3: 'text-transform',
        option4: 'font-variant',
        answer: 'font-stretch'
    },
] 





var cssIndex = 0
var correctCountCss = 0
var quesCountCss = 1
var scoreCss = 0
var sec = 20
function nextQuestionCss(){
 
    var cont = document.getElementById('cont2')
    var options = document.getElementsByName('option');
    for (var i = 0; i < options.length; i++) {
      if (options[i].checked) {
        console.log(options[i].value)
        if (options[i].value === cssQuestion[cssIndex - 1].answer) {
          scoreCss += 10
          correctCountCss++
        }
      }
  
    }
  
     
    if (!cssQuestion[cssIndex]) {
     (scoreCss / 10) * 100
  
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
         <p> ${scoreCss}% Percentage</p>
        </div>
        
        <div class="result-btn">
         
        <a href = "./index.html"><button>Quit Quiz</button></a>
       
        </div>
       
        </div>
      `
  
      return;
    }
  
  
    cont.innerHTML = `
    <div class="box" id="quiz-question">
    <div class="correct-timer">
      <div class="count">
        <p>Correct: <span class="comb-color">${correctCountCss}/10</span></p>
      </div>
      <div class="time">
        <p>Timer: <span class="comb-color">20</span></p>
      </div>
    </div>
    <br>
    <div class="box-body">
  
      <p class="ques">${quesCountCss++}) ${cssQuestion[cssIndex].question}</p>
      <div>
        <label for=""><input onclick="clicked()" type="radio" name="option" value="${cssQuestion[cssIndex].option1}" id="">${cssQuestion[cssIndex].option1}</label>
      </div>
      <br>
      <div>
        <label for=""><input onclick="clicked()" type="radio" name="option" value="${cssQuestion[cssIndex].option2}" id="">${cssQuestion[cssIndex].option2}</label>
      </div>
      <br>
      <div>
        <label for=""><input onclick="clicked()" type="radio" name="option" value="${cssQuestion[cssIndex].option3}" id="">${cssQuestion[cssIndex].option3}</label>
      </div>
      <br>
      <div>
        <label for=""><input onclick="clicked()" type="radio" name="option" value="${cssQuestion[cssIndex].option4}" id="">${cssQuestion[cssIndex].option4}</label>
      </div>
      <div>
        <button disabled onclick="nextQuestionCss()" id="btn" class="box-btn">Next</button>
      </div>
    </div>
  </div> 
    `
    cssIndex++;
  
   
  }
   
nextQuestionCss()


function clicked() {
    var btn = document.getElementById('btn')
    btn.disabled = false
  }
  