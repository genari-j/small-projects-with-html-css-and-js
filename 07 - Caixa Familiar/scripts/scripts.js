function sum(array) {
    let familyTotalValues = 0

    for (let arrayPositionValue of array)
        familyTotalValues += arrayPositionValue

    return familyTotalValues
}

familyBox = [0]
familyExpenses = [0]

function calculateFamilyBalance() {
    let earningsInput = document.getElementById('earnings').value
    let expensesInput = document.getElementById('expenses').value

    if (!earningsInput || !expensesInput) {
        alert("Por gentileza, preencha todos os campos antes de registrar!")
        return
    }

    familyBox.push(Number(earningsInput))
    familyExpenses.push(Number(expensesInput))

    let calculateEarnings = sum(familyBox)
    let calculateExpenses = sum(familyExpenses)

    let earningsVsExpensesResult = calculateEarnings - calculateExpenses

    let numberOfEarningsTotal = document.getElementById('numberOfEarningsTotal')
    let numberOfExpensesTotal = document.getElementById('numberOfExpensesTotal')

    numberOfEarningsTotal.innerText = `R$: ${earningsVsExpensesResult.toFixed(2).replace(".", ",")}`
    numberOfExpensesTotal.innerText = `R$: ${calculateExpenses.toFixed(2).replace(".", ",")}`

    earningsInput = document.getElementById('earnings').value = ""
    expensesInput = document.getElementById('expenses').value = ""
}