console.log("1) " + totalDistance(0.2, 0.4, 100.0));
console.log("2) " + equal(3, 4, 3));
console.log("3) " + isTriangle(2, 3, 4));
console.log("4) " + multiplyByLength([1, 2, 3, 4]));
console.log("5) " + equalSlices(24, 12, 2));
console.log("6) " + checkPalindrome("lul"));
console.log("7) " + rps("rock", "paper"));
console.log("8) " + differenceMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));
console.log("9) " + warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]));
console.log("10) " + checkEnding("rock", "ck"));
console.log("11) " + canCapture(["A8", "E8"]));
function totalDistance(stairHeight, stairLength, towerLength) {
    return towerLength / stairHeight * (stairHeight + stairLength);
}
function equal(a, b, c) {
    if (a == b && b == c)
        return 3;
    else if (a == b || b == c || a == c)
        return 2;
    return 0;
}
function isTriangle(a, b, c) {
    return (a + b) > c && (b + c) > a && (c + a) > b;
}
function multiplyByLength(array) {
    let arrLength = array.length;
    for (let i = 0; i < arrLength; i++) {
        array[i] *= arrLength;
    }
    return array;
}
function equalSlices(totalSlices, people, slicesEach) {
    return (people * slicesEach) <= totalSlices;
}
function checkPalindrome(str) {
    return str == str.split('').reverse().join('');
}
function rps(player1, player2) {
    if (player1 == player2)
        return "Draw";
    switch (player1) {
        case "rock":
            if (player2 == "paper")
                return "player 2 won";
        case "paper":
            if (player2 == "scissors")
                return "player 2 won";
        case "scissors":
            if (player2 == "rock")
                return "player 2 won";
    }
    return "player 1 won";
}
function differenceMaxMin(numbers) {
    return Math.abs(numbers[numbers.length - 1] - numbers[0]);
}
function warOfNumbers(numbers) {
    let even = 0;
    let odd = 0;
    for (let num of numbers) {
        if (num % 2 == 0)
            even += num;
        else
            odd += num;
    }
    if (even >= odd) {
        return even - odd;
    }
    else
        return odd - even;
}
function checkEnding(first, second) {
    return first.endsWith(second);
}
function canCapture(array) {
    for (var i = 0; i < 2; i++) {
        if (array[0][i] == array[1][i])
            return true;
    }
    return false;
}
//# sourceMappingURL=Exercises.js.map