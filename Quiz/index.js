document.addEventListener("DOMContentLoaded",() => {
let qContainer = document.querySelector(".question-container")
let rContainer = document.querySelector(".result-container")
let questionText =  document.querySelector(".question-text")
let options = document.querySelector(".options")
let nextBtn = document.querySelector(".nextBtn")
let totalScore = document.querySelector(".score")
let stBtn = document.querySelector(".stBtn")
let restBtn = document.querySelector(".restartBtn")


    
    let currentIndex = 0;
    let score = 0;
    let questions = [
    {question:"Which planet is known as the Red Planet?",
        options: ["Earth","Mars","Jupiter"],
        answer: "Mars"
    },{question:"What is the capital city of France?",
        options: ["Berlin","Madrid","Paris"],
        answer: "Paris"
    },{question:"Who painted the Mona Lisa?",
        options: ["Vincent van Gogh","Pablo Picasso","Leonardo da Vinci"],
        answer: "Leonardo da Vinci"
    },{question:"What is the largest ocean on Earth?",
        options: ["Atlantic Ocean","Indian Ocean","Pacific Ocean"],
        answer: "Pacific Ocean"
    },{question:"Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen","Nitrogen","Carbon Dioxide"],
        answer: "Carbon Dioxide"
    },
]

    stBtn.addEventListener("click",showQuestion)


    function showQuestion(){
        stBtn.classList.add("hidden")
        nextBtn.classList.add("hidden")
        
        qContainer.classList.remove("hidden")
        rContainer.classList.add("hidden")
        questionText.innerHTML = ""

        let question = questions[currentIndex]
        questionText.innerHTML = question.question
        options.innerHTML = ""

        question.options.forEach(element => {
            
            let list = document.createElement("li")
            list.textContent = element
            
            options.appendChild(list)
            
            list.addEventListener("click",()=>checkAnswer(list))
        })


    
        
        
    }
    
    restBtn.addEventListener("click",() => {
        currentIndex = 0;
        score = 0;
        totalScore.textContent = ""
        
        showQuestion()
    })


    function showResult(){
            qContainer.classList.add("hidden")
            rContainer.classList.remove("hidden")
            totalScore.innerHTML = ""

            totalScore.textContent = `Your score is ${score} out of ${questions.length}`
        }
    function checkAnswer(list){
    
            
            if(list.textContent == questions[currentIndex].answer){

                score++
            }
            nextBtn.classList.remove("hidden")

        }


         nextBtn.addEventListener("click",() => {
            currentIndex++

            if(currentIndex < questions.length){
                console.log(currentIndex,questions.length)
                showQuestion()
            }else{
                console.log("else block:",currentIndex,questions.length)
                showResult()
            }

        })





    
    



    

    

    
})