//Problem #11: First Last 6

function firstLast6(arr){

    var first = arr[0];
    var last = arr[arr.length - 1];
    if (first == 6 || last == 6){
        return true;
    }else{
        return false;
    }
}

//Problem #12: Has 23

function has23(arr){
    if (arr.length == 2){
        if (arr.includes(2) || arr.includes(3)){
            return true;
        }else{
            return false;
        }

    }

}

//Problem #13: Fix 23

function fix23(arr){
    if (arr.length == 3){
        if(arr.indexOf(2) = arr.indexOf(3) - 1){
            arr(3) = 0;
        }
        return arr;
    }

}

//Problem #14: Count YZ

function countYZ(str) {
    var num = 0;
    str = str.toLowerCase();

    for (i = 0; i < str.length; i++) {

        if ((str[i] == "y" || str[i] == "z") && str[i+1] == " ") {
            num = num + 1;
        }
        if ((str[i] == "y" || str[i] == "z") && i == str.length - 1){
            num = num + 1;
        }
    }
    return num;
}


//Problem #15: End Other

function endOther(str1, str2){
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if (str1.endsWith(str2) || str2.endsWith(str1)){
        return true;
    }else{
        return false;
    }
}


//Problem #16: Star Out


function starOut(str){

    if (str.includes("*")){
        var answer = "";
        for (i = 0; i < str.length; i ++){
            if (str[i] != "*" && str[i + 1] != "*" && str[i - 1] != "*"){
                answer = answer + str.charAt(i);
            }
        }
    }else{
        var answer = str;
    }
    return answer;
}

//Problem #17: Get Sandwich

function getSandwich(str) {
    if (str.includes("bread")) {
        var firstBread = str.indexOf("bread");
        var lastBread = str.lastIndexOf("bread");
        var stringLength = str.length;
        var answer = str.slice (firstBread + 5, lastBread);
        return answer;
    }else{
        return "";
    }

}

//Problem #18: Can Balance

function canBalance(arr){
    var sum1 = 0;
    var sum2 = 0;
    for (i = 0; i < arr.length; i++){
        sum1 += arr[i];
        for (j = i + 1; j < arr.length; j++){
            sum2 +=arr[j];
        }
        if (sum1 == sum2){

            return true;
        }else{
            sum2 = 0;
        }
    }
    return false;
}

//Problem #19: Count Clumps

function countClumps(arr){
    var numClumps = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            for (j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j] && arr[i] != arr[j + 1]) {
                    numClumps += 1;
                } else {
                    break;
                }

            }
        }
    }
    return numClumps;
}

//Problem #20: Evenly Spaced

function evenlySpaced(int1,int2,int3) {
    var arr = [int1, int2, int3];

    arr.sort(function (a, b) {
        return a - b});

    int1 = arr[0];
    int2 = arr[1];
    int3 = arr[2];

    var difference1 = int2 - int1;
    var difference2 = int3 - int2;

    if (difference1 == difference2){
        return true;
    }
    else{
        return false;
    }

}






//write second method
function nextOne(param1, param2) {
    return param1;
}

//function runs on click and outputs test cases you create to page
function tester() {
    //document.getElementById("output").innerHTML += sleepIn(true, false);
    document.getElementById("output").innerHTML += countClumps([0, 0, 0, 2, 2, 1, 1, 1, 2, 1, 1, 2, 2]);
    //test third method, etc
}