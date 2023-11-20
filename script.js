//function table(num){
// for (let i = 1; i <= 10; i++) {
//print(num, "*", i, "=", num * i)
// console.log(num, "*", i, "=", num * i)
//  }
//}


function createTable() {
    let num = document.getElementById("num").value;
    let res = "<table border='2' width = '1200' cellpadding='0' cellsapcing ='0'>";

    for(let i = 1; i <= 10; i++) {
        res += "<tr>";
        for (let j = 1; j <= num; j++) {
            res += "<td>" + ` x  = ` + i * j + "</td>";
        }
        res+= "</tr>";
        j=1;
    }
    res+= "</table>";
    document.getElementById("table").innerHTML = res;
}  

//num = document.getElementById('num');
//console.log(num));