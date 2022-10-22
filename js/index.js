let Questions = document.getElementById("Questions");
let ArrayQuestions = [
	{
		id:"1",
		Question:"The After One ......",
		Answers:[
			{id:"a",title:"One"},
			{id:"b",title:"Two"},
			{id:"c",title:"Three"},
			{id:"d",title:"Four"},
		],
		TrueAnswer:"b",
		Degree:2
	},
	{
		id:"2",
		Question:"What is Mean Hello......",
		Answers:[
			{id:"a",title:"مرحبا"},
			{id:"b",title:"كيف حالك"},
			{id:"c",title:"انا بخر"},
			{id:"d",title:"انت عامل ايه"},
		],
		TrueAnswer:"a",
		Degree:2
	},
	{
		id:"3",
		Question:"1+2+3+4+5+6+7+8+9+10",
		Answers:[
			{id:"a",title:"20"},
			{id:"b",title:"54"},
			{id:"c",title:"55"},
			{id:"d",title:"40"},
		],
		TrueAnswer:"c",
		Degree:2
	},
]
Questions.innerHTML = ""
for (var i = 0; i < ArrayQuestions.length; i++) {
	Questions.innerHTML += `
	    <div class="Question">
          <div class="QuestionTitle">
            <p>${ArrayQuestions[i].Question}</p>
          </div>
          <div class="Answers">
            <form action="POST">
              <div class="a">
                <input type="radio" name="${ArrayQuestions[i].id}" value="${ArrayQuestions[i].id} a" id="a${ArrayQuestions[i].id}">
                <label for="a${ArrayQuestions[i].id}">${ArrayQuestions[i].Answers[0].title}</label>
              </div>
              <div class="b">
                <input type="radio" name="${ArrayQuestions[i].id}" value="${ArrayQuestions[i].id} b" id="b${ArrayQuestions[i].id}">                
                <label for="b${ArrayQuestions[i].id}">${ArrayQuestions[i].Answers[1].title}</label>
              </div>
              <div class="c">
                <input type="radio" name="${ArrayQuestions[i].id}" value="${ArrayQuestions[i].id} c" id="c${ArrayQuestions[i].id}">            
                <label for="c${ArrayQuestions[i].id}">${ArrayQuestions[i].Answers[2].title}</label>
              </div>
              <div class="d">
                <input type="radio" name="${ArrayQuestions[i].id}" value="${ArrayQuestions[i].id} d" id="d${ArrayQuestions[i].id}">              
                <label for="d${ArrayQuestions[i].id}">${ArrayQuestions[i].Answers[3].title}</label>
              </div>
            </form>
          </div>
        </div>
	`
}
let button = document.getElementById("SendScore")
document.body.onclick = function(){
	let From = document.getElementById("Data");
  	const formData = new FormData(From);
  	let Data = Object.fromEntries(formData)
  	let LengthObjectOfAnswers = Object.keys(Data).length  	
  	if(ArrayQuestions.length === LengthObjectOfAnswers){
		button.classList.add("Active")
  	}else{
  		button.classList.remove("Active")
  	}
};
button.onclick = ()=>{
	let ExamResult = 0
	let ExamTopResult = 0
	let From = document.getElementById("Data");
	let resultExam = document.getElementById("resultExam");
  	const formData = new FormData(From);
  	let Data = Object.fromEntries(formData)
  	let Answers = []
  	for (var i = 0; i < ArrayQuestions.length; i++) {  		  		
  		let Value = Data[i+1].split(" ")
  		Answers.push({QuestionId:Value[0],AnswerTitle:Value[1]})
  	}
  	for (var i = 0; i < Answers.length; i++) {
 		let Result = ArrayQuestions.filter(ArrayQuestion => ArrayQuestion.id === Answers[i].QuestionId)
  		if(Result[0].TrueAnswer ===  Answers[i].AnswerTitle){
			ExamResult += Result[0].Degree
  		}
  	}
  	for (var i = 0; i < ArrayQuestions.length; i++) {
  		ExamTopResult += ArrayQuestions[i].Degree
  	}
  	Questions.classList.add("Active")
  	button.classList.add("Active2")
  	resultExam.innerHTML = `Your Score Is : ${ExamResult} / ${ExamTopResult}`
  	resultExam.classList.add("Active")
}
