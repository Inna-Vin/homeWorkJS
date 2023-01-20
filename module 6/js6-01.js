//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
//При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

function numberEvenOdd () {
    let arrNumber = [2, 15, 23, 12, 0, null, 28]
    let even = 0;
    let odd = 0;
    for ( let i = 0; i < arrNumber.length; i++) {
    if (typeof arrNumber[i] != 'number' || arrNumber[i] == 0) {
       console.log (arrNumber[i]);
  } else if (arrNumber[i] % 2 == 0 && arrNumber[i] != 0) {
      even++
  } else if (arrNumber[i] % 2 != 0) {
      odd++
    }
  }
    console.log (`четных - ${even}, нечетных - ${odd}`)
  }
  
  numberEvenOdd ();