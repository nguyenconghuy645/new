function printArray(row, col){
    let square = [];
    for(let i = 0; i < row; i++){
        let arr = [];
        for(let j = 0; j < col; j++){
            arr[j] = Math.floor(Math.random()*81+10);
        }
        square.push(arr);
    }
    return square;
}
function printSquare(matrix){
    let squa = "";
    for(let i = 0; i < matrix.length; i++){
        squa += "<tr>";
        for(let j = 0; j < matrix[i].length; j++){
            squa += `<td>${matrix[i][j]}</td>`;
        }
        squa += "</tr>";
    }
    let tbody = document.getElementsByTagName('tbody')[0];
    tbody.innerHTML = squa;
}

function inputValue(msg){
    let num = 0;
    do{
        num = Number(prompt(msg));
    }
    while(isNaN(num) || !Number.isInteger(num) || num <= 0)
    return num;
}
function total(matrix){
    let total = 0;
    for(let i = 0; i < matrix.length; i++){
        total = total + matrix[i][matrix.length-1-i];
    }
    return total;
}
function main(){
    let row = inputValue("Nhập row: ");
    let col = inputValue("Nhập col: ");
    matrix = printArray(row, col);
    printSquare(matrix);
    let totalofmatrix = total(matrix);
    document.write("<br>");
    document.write(`<div class="total"><b>Tổng các giá trị trên đường chéo phụ: ${totalofmatrix}</b></div>`);
}
let matrix;
main();