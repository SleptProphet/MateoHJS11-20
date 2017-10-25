function tester() {

    //document.getElementById("output").innerHTML = firstLast6([1,4,8,2]);
    //document.getElementById("output2").innerHTML = has23([1,2]);
    //document.getElementById("output3").innerHTML = fix23([123]);
    //document.getElementById("output4").innerHTML = countYZ("happy birthday");
    document.getElementById("output5").innerHTML = endOther("manny","nny")
    //document.getElementById("output6").innerHTML =
    //document.getElementById("output7").innerHTML =
    //document.getElementById("output8").innerHTML =
    //document.getElementById("output9").innerHTML =
    //document.getElementById("output10").innerHTML =

}

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


function endOther(s1,s2){
    s1.toLowerCase();
    s2.toLowerCase();
    if (s1 == s2.slice(s2.length - s1.length, s2.length - 1)){
        return true;
    }
    if (s2 == s1.slice(s1.length - s2.length, s1.length - 1)){
        return true;
    }else{
        return false;
    }

}
