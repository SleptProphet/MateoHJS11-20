
function firstLast6(array){
    if (6 == array[0] || 6 == array[array.length-1]){
        return true;
    }else{
        return false;
    }
}

function has23(al2){
    if (al2[0] == 2 || al2[1] == 2 || al2[0] == 3 || al2[1] == 3){
        return true;
    }else{
        return false
    }
}

function fix23(al3){
    if (al3[0]+al3[1]==5 && al3[0]*al3[1]==6 && al3[0]<al3[1]){
        al3[1] = 0;
        return al3;
    }
    if (al3[1]+al3[2]==5 && al3[1]*al3[2]==6 && al3[1]<al3[2]) {
        al3[2] = 0;
        return al3;
    }else{
        return al3;
    }
}

function countYZ(s){
    var result = 0;
    for (var i=0; i<s.length; i++){
        if ((s[i] == "z" && s[i+1] == " ") || (s[i] == "y" && s[i+1] == " ") || (s[i] == "Z" && s[i+1] == " ") || (s[i] == "Y" && s[i+1] == " ")){
            result += 1
        }
    }
    if (s[s.length - 1] == "y" || s[s.length - 1] == "z" || s[s.length - 1] == "Y" || s[s.length - 1] == "Z") {
        result += 1;
    }
    return result;
}


function endOther(original1,original2){
    var s1 = original1.toLowerCase();
    var s2 = original2.toLowerCase();
    if (s1.endsWith(s2)){
        return true;
    }
    if (s2.endsWith(s1)) {
        return true;
    }else{
        return false;
    }
}

function starOut(s){
    var result = "";
    for (var i = 0; i < s.length; i++){
        if (s[i] != "*" && s[i-1] != "*" && s[i+1] != "*"){
            result += s[i];
        }
    }
    return result;
}

//flips a string for later use (thought I needed it in getSandwich but guess not)
function stringFlip(s){
    var result = "";
    for (var i = 0; i < s.length; i++){
        result += s[s.length - 1 - i]
    }
    return result;
}

function getSandwich(s){
    if (!s.includes("bread")){
        return ""
    }
    var result = "";
    var sFlipped = "";
    for (var i = 0; i < s.length; i++) {
        sFlipped += s[s.length - 1 - i];
    }
    result += s.slice(s.search("bread")+5,s.length - 5 -  sFlipped.search("daerb"));
    return result;
}



function canBalance(a){
    var sumAll = 0;
    for (var i=0;i<a.length;i++) sumAll += a[i];
    var sumHalf = sumAll / 2;
    var sumUp = 0;
    for (var x=0;x<a.length;x++) {
        sumUp += a[x];
        if (sumUp == sumHalf) return true;
    }
    return false;
}

function countClumps(a){
    var numCouples = 0;
    var numTriples = 0;
    for (var i = 0; i < a.length; i++){
        if (a[i] == a[i+1]){
            numCouples += 1;
        }
    }
    for (var i = 0; i < a.length; i++){
        if (a[i] == a[i+1] && a[i] == a[i+2]){
            numTriples += 1;
        }
    }
    return numCouples - numTriples;
}

function evenlySpaced(array){
    array.sort();
    return(array[2] - array[1] === array[1] - array[0]);
}

function tester() {

    document.getElementById("output").innerHTML = firstLast6([1,3,8])
    document.getElementById("output2").innerHTML = has23([1,2]);
    document.getElementById("output3").innerHTML = fix23([123]);
    document.getElementById("output4").innerHTML = countYZ("happy birthday");
    document.getElementById("output5").innerHTML = endOther("manny","nny")
    document.getElementById("output6").innerHTML = starOut(fay*xmily)
    document.getElementById("output7").innerHTML = getSandwich("happy bread man with a plan bread")
    document.getElementById("output8").innerHTML = canBalance([1,0,6,7])
    document.getElementById("output9").innerHTML = countClumps([1,2,2,2,4,4,4,4,4,6,7,7,6,6])
    document.getElementById("output10").innerHTML = evenlySpaced([9,10,11]);

}
