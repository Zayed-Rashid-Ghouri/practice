function getnumber(n){
    var a = document.getElementById("result");
    a.value+=n;
}
function getresult(){
    var a = document.getElementById("result");
    a.value = eval(result.value);
}
function clearResult(){
    var result = document.getElementById("result");
    result.value=""
}