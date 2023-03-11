const earningsList = [];
const expensesList = [];
const totalList = [];

const options = {
    style: 'currency',
    currency: 'BRL'
}

const sumLists = (list) => {
    let totalSumLists = 0;

    for (let i = 0; i < list.length; i++) {
        totalSumLists = totalSumLists + list[i];
    }

    return totalSumLists;
}

const handleRegisterValues = () => {
    let earningsValue = document.querySelector('#earnings').value;
    let expensesValue = document.querySelector('#expenses').value;

    if (!earningsValue || !expensesValue) {
        alert("Por gentileza, preencha todos os campos.");
        return
    }

    let totalAvailable = earningsValue - expensesValue;

    earningsList.push(Number(earningsValue));
    expensesList.push(Number(expensesValue));
    totalList.push(Number(totalAvailable));

    sumLists(earningsList);
    sumLists(expensesList);
    sumLists(totalList);

    let earningsText = document.querySelector('#earningsTotal');
    let expensesText = document.querySelector('#expensesTotal');
    let totalAvailableText = document.querySelector('#totalAvailable');

    earningsText.innerHTML = sumLists(earningsList).toLocaleString('pt-BR', options);
    expensesText.innerHTML = sumLists(expensesList).toLocaleString('pt-BR', options);
    totalAvailableText.innerHTML = sumLists(totalList).toLocaleString('pt-BR', options);

    document.querySelector('#earnings').value = '';
    document.querySelector('#expenses').value = '';
}