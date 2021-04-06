const optionn1=document.querySelector('.optionn1'),
      optionn2=document.querySelector('.optionn2'),
      optionn3=document.querySelector('.optionn3'),
      optionn4=document.querySelector('.optionn4');
 
const optionElementss=document.querySelectorAll('.optionn');
const questionn=document.getElementById('questionn');

const numberOfQuestionn=document.getElementById('numberr-of-question'),
      numberOfAllQuestionss=document.getElementById('numberr-of-all-questions'); 
let indexOfQuestionn,
    indexPagee=0;
const answersTrackerr=document.getElementById('answerss-tracker');
const btnNextt=document.getElementById('btnn-next');
let scoree=0;

const correctAnswerr=document.getElementById('correctt-answer');
const numberOfAllQuestionss2=document.getElementById('numberr-of-all-questions-2');
const btnTryAgainn=document.getElementById('btnn-try-again');
const quizOverModall=document.querySelector('.quizz-over-modal');
const questionss=[
  {
    questionn:'1000/(2+100)/10=',
    optionns:[
        '0.665',
        '0.144',
        '0.554',
        '0.980',
    ],
    rightAnswerr:3
  },
  {
  questionn:'200-ის 15%=',
  optionns:[
    '15',
    '20',
    '30',
    '40',
  ],
  rightAnswerr:2
  },
  {
  questionn:'4^2+2^3=',
  optionns:[
    '25',
    '32',
    '18',
    '42',
  ],
  rightAnswerr:1
  }
  ]
  numberOfAllQuestionss.innerHTML=questionss.length;
  const loadd=()=>{
  questionn.innerHTML=questionss[indexOfQuestionn].questionn;
  optionn1.innerHTML=questionss[indexOfQuestionn].optionns[0];
  optionn2.innerHTML=questionss[indexOfQuestionn].optionns[1];
  optionn3.innerHTML=questionss[indexOfQuestionn].optionns[2];
  optionn4.innerHTML=questionss[indexOfQuestionn].optionns[3];
  numberOfQuestionn.innerHTML=indexPagee+1;
  indexPagee++;
  }

  let completAnsweree=[];
  const randomQuestionn=()=>{
  let randomNumberr=Math.floor(Math.random()*questionss.length);
  let hitDuplicatee=false;
  
  if(indexPagee==questionss.length){
    quizOverr();
  }else{
    if(completAnsweree.length>0){
        completAnsweree.forEach(itemm=>{
            if(itemm==randomNumberr){
                hitDuplicatee=true;
            }
        });
        if(hitDuplicatee){
            randomQuestionn();
            
        }else{
            indexOfQuestionn=randomNumberr;
            loadd();
        }
    }
    if(completAnsweree.length==0){
        indexOfQuestionn=randomNumberr;
        loadd();
    }
  }
  completAnsweree.push(indexOfQuestionn);
  };
  const chekAnswerrs = ew =>{
    
  if(ew.target.dataset.idd==questionss[indexOfQuestionn].rightAnswerr){
        ew.target.classList.add('correctt');
       
        uppdateAnswerTrackerr('correctt');
    scoree++;
  }else{
   ew.target.classList.add('wrongg');
        uppdateAnswerTrackerr('wrongg');
  }
  disableOptiondd();
  
  }
  for(optionn of optionElementss){
  optionn.addEventListener('click',es=>chekAnswerrs(es))
  }
  const disableOptiondd=()=>{
  optionElementss.forEach(items=>{
    items.classList.add('disabledd');
    if(items.dataset.idd==questionss[indexOfQuestionn].rightAnswerr){
        items.classList.add('correctt');
    }
  })
  }
  const validatee=()=>{
  if(!optionElementss[0].classList.contains('disabledd')){
    alert('vam nujna vibrad odin iz variandv otveda')
  }else{
    randomQuestionn();
    enebloptionss();
  }}
  btnNextt.addEventListener('click',()=>{
  validatee();
  })
  const enebloptionss=()=>{
  optionElementss.forEach(item=>{
    item.classList.remove('disabledd','correctt','wrongg')
  })
  }
  const answerTrackerr=()=>{
  questionss.forEach(()=>{
    const divs=document.createElement('div');
    answersTrackerr.appendChild(divs);
  })
  }
  const uppdateAnswerTrackerr=statuss=>{
  answersTrackerr.children[indexPagee-1].classList.add(`${statuss}`);
  }
  const quizOverr = ()=>{
  quizOverModall.classList.add('active');
  correctAnswerr.innerHTML=scoree;
  numberOfAllQuestionss2.innerHTML=questionss.length;
  };
  const tryAgenn=()=>{
  window.location.reload();
  }
  btnTryAgainn.addEventListener('click',tryAgenn);
  window.addEventListener('load',()=>{
  randomQuestionn();
  answerTrackerr();
  })
  