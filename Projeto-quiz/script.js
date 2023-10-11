//Initial data

let correntQuestions = 0;
let correctAnswers = 0;

// Events

document.querySelector('.scoreArea button').addEventListener('click', resetEvent);

showQuestions();

// functions

function showQuestions(){
    if(questions [correntQuestions]){
      let q = questions[correntQuestions];

      let pct = Math.floor((correntQuestions / questions.length ) * 100);
      
      document.querySelector('.progress--bar').style.width = `${pct}%`

      document.querySelector('.scoreArea').style.display = 'none';
      document.querySelector('.questionArea').style.display = 'block';


      document.querySelector('.question').innerHTML = q.question ;

      let optionsHtml = "";
      for(let i in q.options){
        optionsHtml += `<div data-op="${i}"class= "option"><span>${parseInt(i)+1}</span>${q.options[i]}</div>`
        document.querySelector('.options').innerHTML = optionsHtml;
    

         document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click',optionClickEvent )
         })



      }

    } else{
        finishQuiz();

    }

}

function optionClickEvent(e){
   let clickedOptions =  parseInt ( e.target.getAttribute('data-op'));
   if(questions [correntQuestions].answer === clickedOptions){
       correctAnswers ++;
       
   } else{
     
   }


   correntQuestions ++;
   showQuestions();
}

function finishQuiz(){

    let points = Math.floor ( (correctAnswers / questions.length) * 100 );

    if( points < 30 ){
        document.querySelector('.scoreText1').innerHTML = "tá ruim em?"
        document.querySelector('.scorePct').style.color= "#ff0000"
    } else if( points >= 30 && points < 70 ){
        document.querySelector('.scoreText1').innerHTML = "Muito bomm"
        document.querySelector('.scorePct').style.color= "#ffff00"
    } else if(points >= 70){
        document.querySelector('.scoreText1').innerHTML = "Parabéns"
        document.querySelector('.scorePct').style.color= "#0D630D"
    }

    
    document.querySelector('.scoreText2').innerHTML = `você respondeu${questions.length} questões acertou ${correctAnswers}`
    document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`
    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.progress--bar').style.width = `100%`

}
function resetEvent(){
    correctAnswers = 0;
    correntQuestions = 0;
     showQuestions();
}

