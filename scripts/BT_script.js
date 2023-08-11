let brainTeaserCount = 0;

const BTQuestionText = document.querySelector('.brain-teaser-question');
const BTNextButton = document.querySelector('.brain-teaser-next-btn')
const verifyButtonBrainTeaser = document.querySelector('.verify-button');
const BTAnswer = document.querySelector('.brain-teaser-answer');
const BTBackButton = document.querySelector('.brain-teaser-back-btn')
const correctAnswer = document.querySelector('.correct-answer');
const inputQuestionNum = document.querySelector('.question-number')

function nextQuestionBT() {
    if (brainTeaserCount < questions_BT.length - 1) {
        brainTeaserCount++;
        showBrainTeaser(brainTeaserCount);
    }

    verifyButtonBrainTeaser.classList.add('active');
    BTAnswer.classList.remove('correct')
    BTNextButton.classList.remove('active');
    BTAnswer.value = "";
}

BTNextButton.onclick = () => {
    nextQuestionBT();
}

BTBackButton.onclick = () => {
    if (brainTeaserCount > 0) {
        brainTeaserCount--;
        showBrainTeaser(brainTeaserCount);
    }
    BTAnswer.classList.remove('wrong');
    BTAnswer.value = "";
    BTAnswer.classList.remove('correct');
}

inputQuestionNum.onkeydown = function(event) {
    console.log(event);
    if (event.key === "Enter") {
        brainTeaserCount = inputQuestionNum.value - 1;
        showBrainTeaser(brainTeaserCount)

    }
}

inputQuestionNum.addEventListener("input", () => {
    if(inputQuestionNum.value.length > 30) {
        inputQuestionNum.value = inputQuestionNum.value.slice(0, 43);

    }
})
// verifyButtonBrainTeaser.onclick = () => {
//     const enteredAnswer = BTAnswer.value.toLowerCase();
//     let timerID = true;
//     console.log(timerID);
//     // console.log(typeof BTAnswer.value.toLowerCase())
//     // console.log(questions_BT[brainTeaserCount].answer)
//     if (enteredAnswer === questions_BT[brainTeaserCount].answer.toLowerCase()) {
//         timerID = true;
//         BTNextButton.classList.add('active');
//         BTAnswer.classList.add('correct');
//         verifyButtonBrainTeaser.classList.remove('active');
//     } else {
//         BTAnswer.classList.add('wrong');
//         timerID = setTimeout(() => {
//             timerID = false;
//             BTAnswer.classList.remove('wrong');
//         }, 5000);
//
//         // correctAnswer.innerHTML = `
//         //    <i class="fa-solid fa-xmark wrong-mark"></i> <p>${questions_BT[brainTeaserCount].answer}</p>
//         // `
//     }
// }
function showBrainTeaser(brainTeaserCount) {

    if(brainTeaserCount === 0) {
        BTBackButton.classList.add('hide');
    } else {
        BTBackButton.classList.remove('hide');
    }

    BTAnswer.value = questions_BT[brainTeaserCount].answer;

    BTQuestionText.innerHTML = `${questions_BT[brainTeaserCount].num}. ${questions_BT[brainTeaserCount].question}`;

    inputQuestionNum.value = `${brainTeaserCount + 1}`;
}


