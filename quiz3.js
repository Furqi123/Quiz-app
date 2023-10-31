var jsQuestion = [
    {
        question: 'Which tag is used to create a hyperlink?',
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
        question: 'Which tag is used to create a hyperlink?',
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
        question: 'Which tag is used to create a hyperlink?',
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
        question: 'Which tag is used to create a hyperlink?',
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
        question: 'Which tag is used to create a hyperlink?',
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
] 



var jsIndex = 0
var correctCountJs = 0
var quesCountJs = 1
var scoreJs = 0
var sec = 20
function nextQuestionJs(){
 
    var cont = document.getElementById('cont3')
    var options = document.getElementsByName('option');
    for (var i = 0; i < options.length; i++) {
      if (options[i].checked) {
        console.log(options[i].value)
        if (options[i].value === jsQuestion[jsIndex - 1].answer) {
          scoreJs += 10
          correctCountJs++
        }
      }
  
    }
  
     
    if (!jsQuestion[jsIndex]) {
     (scoreJs / 10) * 100
  
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
         <p> ${scoreJs}% Percentage</p>
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
        <p>Correct: <span class="comb-color">${correctCountJs}/10</span></p>
      </div>
      <div class="time">
        <p>Timer: <span class="comb-color">20</span></p>
      </div>
    </div>
    <br>
    <div class="box-body">
  
      <p class="ques">${quesCountJs++}) ${jsQuestion[jsIndex].question}</p>
      <div>
        <label for=""><input onclick="clicked()" type="radio" name="option" value="${jsQuestion[jsIndex].option1}" id="">${jsQuestion[jsIndex].option1}</label>
      </div>
      <br>
      <div>
        <label for=""><input onclick="clicked()" type="radio" name="option" value="${jsQuestion[jsIndex].option2}" id="">${jsQuestion[jsIndex].option2}</label>
      </div>
      <br>
      <div>
        <label for=""><input onclick="clicked()" type="radio" name="option" value="${jsQuestion[jsIndex].option3}" id="">${jsQuestion[jsIndex].option3}</label>
      </div>
      <br>
      <div>
        <label for=""><input onclick="clicked()" type="radio" name="option" value="${jsQuestion[jsIndex].option4}" id="">${jsQuestion[jsIndex].option4}</label>
      </div>
      <div>
        <button disabled onclick="nextQuestionJs()" id="btn" class="box-btn">Next</button>
      </div>
    </div>
  </div> 
    `
    jsIndex++;
  
   
  }
   
nextQuestionJs()


function clicked() {
    var btn = document.getElementById('btn')
    btn.disabled = false
  }
  