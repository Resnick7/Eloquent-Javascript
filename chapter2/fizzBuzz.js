for (let i=0; i<100; i++) {
    let num = i
    if (num % 15 === 0) {
        num = "FizzBuzz"
    }else if (num % 3 === 0) {
        num = "Fizz"
    } else if (num % 5 === 0) {
        num = "Buzz"
    }
    console.log(num)
}