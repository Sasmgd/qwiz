
const   option1=document.querySelector('.option1'),
option2=document.querySelector('.option2'),
option3=document.querySelector('.option3'),
option4=document.querySelector('.option4');

const optionElements=document.querySelectorAll('.option');
const question=document.getElementById('question');
const numberOfQuestion=document.getElementById('number-of-question'),
numberOfAllQuestions=document.getElementById('number-of-all-questions'); 
let indexOfQuestion,
indexPage=0;
const answersTracker=document.getElementById('answers-tracker');
const btnNext=document.getElementById('btn-next');
let score=0;
const correctAnswer=document.getElementById('correct-answer'),
numberOfAllQuestions2=document.getElementById('number-of-all-questions-2'),
btnTryAgain=document.getElementById('btn-try-again');
const quizOverModal=document.querySelector('.quiz-over-modal');

const questions=[
{
question:'რა ნომრით თამაშობდა მესი არგენტინის ნაკრებში?',
options:[
'10',
'25',
'15',
'55',
],
rightAnswer:0
},
{
question:'პელე არის',
options:[
'ფეხბურთელი',
'მსახიობი',
'რეგბისტი',
'პოლიციელი',
],
rightAnswer:0
},
{
question:'რამდენი ფეხბურთელი თამაშობს ერთ გუნდში',
options:[
'11',
'20',
'10',
'9',
],
rightAnswer:0
}
]
numberOfAllQuestions.innerHTML=questions.length;
const load=()=>{
question.innerHTML=questions[indexOfQuestion].question;
option1.innerHTML=questions[indexOfQuestion].options[0];
option2.innerHTML=questions[indexOfQuestion].options[1];
option3.innerHTML=questions[indexOfQuestion].options[2];
option4.innerHTML=questions[indexOfQuestion].options[3];
numberOfQuestion.innerHTML=indexPage+1;
indexPage++;
}
let completAnswer=[];
const randomQuestion=()=>{
let randomNumber=Math.floor(Math.random()*questions.length);
let hitDuplicate=false;

if(indexPage==questions.length){
quizOver();
}else{
if(completAnswer.length>0){
completAnswer.forEach(item=>{
  if(item==randomNumber){
      hitDuplicate=true;
  }
});
if(hitDuplicate){
  randomQuestion();
  
}else{
  indexOfQuestion=randomNumber;
  load();
}
}
if(completAnswer.length==0){
indexOfQuestion=randomNumber;
load();
}
}
completAnswer.push(indexOfQuestion);
};
const chekAnswer = el =>{

if(el.target.dataset.id==questions[indexOfQuestion].rightAnswer){
el.target.classList.add('correct')
uppdateAnswerTracker('correct');
score++;
}else{
el.target.classList.add('wrong');
uppdateAnswerTracker('wrong');
}
disableOptiond();

}
for(option of optionElements){
option.addEventListener('click',e=>chekAnswer(e))
}
const disableOptiond=()=>{
optionElements.forEach(item=>{
item.classList.add('disabled');
if(item.dataset.id==questions[indexOfQuestion].rightAnswer){
item.classList.add('correct');
}
})
}
const validate=()=>{
if(!optionElements[0].classList.contains('disabled')){
alert('vam nujna vibrad odin iz variandv otveda')
}else{
randomQuestion();
enebloptions();
}}
btnNext.addEventListener('click',()=>{
validate();
})
const enebloptions=()=>{
optionElements.forEach(item=>{
item.classList.remove('disabled','correct','wrong')
})
}
const answerTracker=()=>{
questions.forEach(()=>{
const div=document.createElement('div');
answersTracker.appendChild(div);
})
}
const uppdateAnswerTracker=status=>{
answersTracker.children[indexPage-1].classList.add(`${status}`);
}
const quizOver = ()=>{
quizOverModal.classList.add('active');
correctAnswer.innerHTML=score;
numberOfAllQuestions2.innerHTML=questions.length;
};
const tryAgen=()=>{
window.location.reload();
}
btnTryAgain.addEventListener('click',tryAgen);
window.addEventListener('load',()=>{
randomQuestion();
answerTracker();
})



