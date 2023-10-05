let arr = [];
const contador = {
    "1" : 0,
    "2" : 0,
    "3" : 0,
    "4" : 0,
    "5" : 0,
    "6" : 0,
    "7" : 0,
    "8" : 0,
    "9" : 0,
    "10" : 0,
    "11" : 0,
    "12" : 0,
    "13" : 0,
    "14" : 0,
    "15" : 0,
    "16" : 0,
    "17" : 0,
    "18" : 0,
    "19" : 0,
    "20" : 0,
}

for(let i = 0; i < 10000; i++){
    arr.push(Math.round(Math.random() * 20) + 1);
}

for(let i = 0; i < arr.length; i++){
    const numero = arr[i].toString();
    if (contador[numero] !== undefined){
        contador[numero]++; 
    }
}


console.log(contador)