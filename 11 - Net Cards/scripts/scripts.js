let firstPlan = document.querySelector('#firstPlan');
let secondPlan = document.querySelector('#secondPlan');
let thirdPlan = document.querySelector('#thirdPlan');

function handleSelectPlan(plan) {
    switch (plan) {
        case 'first':
            secondPlan.classList.add('hideCard');
            thirdPlan.classList.add('hideCard');
            break;
        case 'second':
            firstPlan.classList.add('hideCard');
            thirdPlan.classList.add('hideCard');
            break;
        case 'third':
            firstPlan.classList.add('hideCard');
            secondPlan.classList.add('hideCard');
            break;
        // default: ;
    }
}

function handleShowAllPlans() {
    firstPlan.classList.remove('hideCard');
    secondPlan.classList.remove('hideCard');
    thirdPlan.classList.remove('hideCard');
}