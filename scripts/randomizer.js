const sectionConsequences = document.querySelector('.consequences');
const navbarConsequences = document.querySelector('.consequences-navbar');
const consequencesBox = document.querySelector('.consequences-box');
const randomizerBTN = document.querySelector('.js-randomize-button');
const openMysteryBox = document.querySelector('.js-randomize-open');
const okayBtnMysteryBox = document.querySelector('.js-randomize-okay');

navbarConsequences.onclick = () => {
    sectionConsequences.classList.add('active');
    consequencesBox.classList.add('active');
    navbarConsequences.classList.add('active');
    homeNavBar.classList.remove('active');

    machineProblem.classList.remove('active');
    machineProblemNavBar.classList.remove('active');

    brainTeaser.classList.remove('active');
    navBarBrainTeaser.classList.remove('active');
}



let randomValueMysteryBox = 0;
let randomValue = 0;
const imageRandomizer = document.querySelector('.image-randomizer');
const titleRandomizer = document.querySelector('.title-randomizer');

randomizerBTN.onclick = () => {

    randomValue = Math.floor(Math.random() * 100);

    if(randomValue < 60) {
        console.log(randomValue)
        imageRandomizer.src = consequences[0].image;
        titleRandomizer.innerText = consequences[0].title;
        randomizerBTN.classList.add('hide');
        openMysteryBox.classList.add('active');
        openMysteryBox.onclick = () => {
            randomValueMysteryBox = Math.floor(Math.random() * 4);
            console.log(randomValueMysteryBox)

            okayBtnMysteryBox.classList.add('active');
            openMysteryBox.classList.remove('active');

            const mysteryBoxIndex = randomValueMysteryBox;

            if (consequences.length > 0 && consequences[0].mysteryBox[mysteryBoxIndex]) {
                imageRandomizer.src = consequences[0].mysteryBox[mysteryBoxIndex].mysteryImage;
                titleRandomizer.innerText = consequences[0].mysteryBox[mysteryBoxIndex].name;
            }

            okayBtnMysteryBox.onclick = () => {
                okayBtnMysteryBox.classList.remove('active');
                randomizerBTN.classList.remove('hide');
                imageRandomizer.src = 'images/question-mark.png';
            }

        }

    } else {
        console.log(randomValue)
        titleRandomizer.innerText = consequences[1].title;
        imageRandomizer.src = consequences[1].image;
    }

}

