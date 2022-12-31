function handleCalculateIMC() {
    let weightInputValue = document.getElementById('weight').value
    let heightInputValue = document.getElementById('height').value

    if (weightInputValue.includes(",")) {
        alert("Por gentileza, insira valores com ponto ao invés de vírgula no campo Peso.")
        return
    }

    if (heightInputValue.includes(",")) {
        alert("Por gentileza, insira valores com ponto ao invés de vírgula no campo Altura.")
        return
    }

    if (!weightInputValue || !heightInputValue) {
        alert("Por gentileza, preencha os campos.")
        return
    }

    let imcResult = weightInputValue / (heightInputValue * heightInputValue)

    let msgResult

    if (imcResult < 10) {
        msgResult = `O resultado da consulta é ${Number(imcResult).toFixed(1)}. Procure ajuda, pois o estado é de Desnutrição Grau V.`
    } else if (imcResult >= 10 && imcResult <= 12.9) {
        msgResult = `O resultado da consulta é ${Number(imcResult).toFixed(1)}. Procure ajuda, pois o estado é de Desnutrição Grau IV.`
    } else if (imcResult >= 13 && imcResult < 15.9) {
        msgResult = `O resultado da consulta é ${Number(imcResult).toFixed(1)}. Procure ajuda, pois o estado é de Desnutrição Grau III.`
    } else if (imcResult >= 16 && imcResult < 16.9) {
        msgResult = `O resultado da consulta é ${Number(imcResult).toFixed(1)}. Procure ajuda, pois o estado é de Desnutrição Grau II.`
    } else if (imcResult >= 17 && imcResult < 18.4) {
        msgResult = `O resultado da consulta é ${Number(imcResult).toFixed(1)}. Fique atento, pois o estado é de Desnutrição Grau I.`
    } else if (imcResult >= 18.5 && imcResult < 24.9) {
        msgResult = `O resultado da consulta é ${Number(imcResult).toFixed(1)}. Mantenha dessa forma, pois o estado é Normal.`
    } else if (imcResult >= 25 && imcResult < 29.9) {
        msgResult = `O resultado da consulta é ${Number(imcResult).toFixed(1)}. Fique atento, pois o estado é de Pré-obesidade.`
    } else if (imcResult >= 30 && imcResult < 34.5) {
        msgResult = `O resultado da consulta é ${Number(imcResult).toFixed(1)}. Procure ajuda, pois o estado é de Obesidade Grau I.`
    } else if (imcResult >= 35 && imcResult < 39.9) {
        msgResult = `O resultado da consulta é ${Number(imcResult).toFixed(1)}. Procure ajuda, pois o estado é de Obesidade Grau II.`
    } else if (imcResult > 40) {
        msgResult = `O resultado da consulta é ${Number(imcResult).toFixed(1)}. Procure ajuda, pois o estado é de Obesidade Grau III.`
    }

    let result = document.getElementById('result')
    result.innerText = result

    weightInputValue = document.getElementById('weight').value = ''
    heightInputValue = document.getElementById('height').value = ''
}