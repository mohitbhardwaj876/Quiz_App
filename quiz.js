const questions=[
    {
      ques:"which of the following is a markup language ?",
      a:"html",
      b:"css",
      c:"javascript",
      d:"java",
      correct:"a",  
    },
    {
        ques:"which year was javascript launched ?",
        a:"1996",
        b:"1995",
        c:"1954",
        d:"none of the above",
        correct:"b",
    },
    {
        ques:"what does css stand for ?",
        a:"hypertext markup language",
        b:"casacding style sheet",
        c:"jason object notation",
        d:"helipcopters of lemborghini",
        correct:"b",
    },
]
const quesBox=document.getElementById('queBox');
const optionInputs=document.querySelectorAll('.options')
let index=0;
let total=questions.length;
let right=0,wrong=0;
function loadQuestion() {
    if(index==total){
        end();
    }
    reset();

    data=questions[index];
    quesBox.innerText=`${index+1}) ${data.ques}`;
    optionInputs[0].nextElementSibling.innerText=`${data.a}`
    optionInputs[1].nextElementSibling.innerText=`${data.b}`
    optionInputs[2].nextElementSibling.innerText=`${data.c}`
    optionInputs[3].nextElementSibling.innerText=`${data.d}`
    // console.log(data);
};
loadQuestion();

function submitQuiz(){
    const data=questions[index];
   const ans=getAnswer();
   if(ans===data.correct){
    right++;
   }
    else{
     wrong++;
    }
   index++;
   loadQuestion();
   return;
};


function getAnswer(){
    let answer;
    optionInputs.forEach((input)=>{
        if(input.checked){
            answer=input.value;
        }
    })
    return answer;
}

function reset(){
    optionInputs.forEach((input)=>{
        input.checked=false;
    })
}
function end(){
    document.getElementById('box').innerText=`congratulations your quiz is end
    your score is ${right} out of ${right+wrong}`;
};

