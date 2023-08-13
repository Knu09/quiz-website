let machineProblemCount = 0;

const nextBtn = document.querySelector('.next-button-machine-problem');
const backBtn = document.querySelector('.back-button-machine-problem')
const machineProblemText = document.querySelector('.machine-problem-question');
const machineProblemAnswer = document.querySelector('.answer-machineProb');


nextBtn.addEventListener('keydown', (event) => {
    console.log(event.key)
    if (event.key === 'Enter') {
        nextQuestionMP();
    }
})
function nextQuestionMP() {
    if (machineProblemCount < questions.length - 1) {
        machineProblemCount++;
        showMachineProblem(machineProblemCount);
    }

    nextBtn.classList.remove('active');
}
nextBtn.onclick = () => {
    nextQuestionMP();
}

backBtn.onclick = () => {
    if (machineProblemCount > 0) {
        machineProblemCount--;
        showMachineProblem(machineProblemCount);
    }
    machineProblemAnswer.classList.remove('wrong');
    machineProblemAnswer.value = "";
    machineProblemAnswer.classList.remove('correct');

}

function showMachineProblem(machineProblemCount) {

    if(machineProblemCount === 0) {
        backBtn.classList.add('hide');
    } else {
        backBtn.classList.remove('hide');
    }

    machineProblemText.textContent = `${questions[machineProblemCount].num}. ${questions[machineProblemCount].question}`;

    document.querySelector('.question-total-machineProb')
        .innerHTML = `${machineProblemCount + 1} of ${questions.length} Questions`;
}

