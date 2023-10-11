

let currentQuestion = 0;
let correctAnswers = 0;
showQuestion();

function showQuestion (){
    if(questions[currentQuestion]){
      
        let q = questions [currentQuestion]
        document.querySelector('.scoreArea button').addEventListener('click',resetEvent);
        let pct = Math.floor((currentQuestion / questions.length) *100);
        document.querySelector('.progress--bar').style.width = `${pct}%`
        
        document.querySelector('.scoreArea').style.display = "none"
        document.querySelector('.questionArea').style.display = 'block'
        document.querySelector('.question').innerHTML = q.question;

        let optionHtml = "";
        for(let i in q.options){
            optionHtml += `<div data-op='${i}'class="option"><span>${ parseInt(i)+1}</span>${q.options[i]}</div>`
        }

        document.querySelector('.options').innerHTML = optionHtml;
        document.querySelectorAll('.options .option').forEach(item => {
         item.addEventListener('click',optionClickEvent);
        });
    } else{
        finishQuiz();
    }

} 
function optionClickEvent(e){
    let ws = parseInt (e.target.getAttribute('data-op'));

    if(questions[currentQuestion].answer == ws){
        correctAnswers ++;

        
    }

    currentQuestion ++;
        showQuestion();
}

function finishQuiz(){
    let points = Math.floor((correctAnswers / questions.length) *100);

    if(points <=30){
        document.querySelector('.scoreText1').innerHTML = 'muito ruimm!!';
        document.querySelector('.scorePct').style.color = '#FF0000';
    } else if(points >= 30 && points <70){
        document.querySelector('.scoreText1').innerHTML = 'muito Bomm!!';
        document.querySelector('.scoreText1').style.color = "#FFFF00"
    } else if(points >= 70){
        document.querySelector('.scoreText1').innerHTML = 'Parabéns!!';
        document.querySelector('.scoreText1').style.color = "#0D630D"
    }

    document.querySelector('.scoreArea').style.display = "block";
    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.scorePct').innerHTML = `${points}%`;
    document.querySelector('.scoreText2').innerHTML = `você respondeu${questions.length} questões e acertou ${correctAnswers}`
     document.querySelector('.progress--bar').style.width = "100%"


}
function resetEvent(){
    currentQuestion = 0;
    correctAnswers = 0;
    showQuestion();
}