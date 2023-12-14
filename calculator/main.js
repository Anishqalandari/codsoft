function one(){
    let one= document.getElementById("one").value
    document.getElementById("input").value+=""+one
}
function two(){
    let two= document.getElementById("two").value
    document.getElementById("input").value+=""+two
}
function multi(){
    let multi= document.getElementById("multi").value
    document.getElementById("input").value+=""+multi
}
function three(){
    let three= document.getElementById("three").value
    document.getElementById("input").value+=""+three
}
function four(){
    let four= document.getElementById("four").value
    document.getElementById("input").value+=""+four
}
function five(){
    let five= document.getElementById("five").value
    document.getElementById("input").value+=""+five
}
function six(){
    let six= document.getElementById("six").value
    document.getElementById("input").value+=""+six
}
function seven(){
    let seven= document.getElementById("seven").value
    document.getElementById("input").value+=""+seven
}
function eight(){
    let eight= document.getElementById("eight").value
    document.getElementById("input").value+=""+eight
}
function nine(){
    let nine= document.getElementById("nine").value
    document.getElementById("input").value+=""+nine
}
function divi(){
    let divi= document.getElementById("divi").value
    document.getElementById("input").value+=""+divi
}
function cut(){
    let cut= document.getElementById("cut").value
    document.getElementById("input").value+=""+cut
}
function plus(){
    let plus= document.getElementById("plus").value
    document.getElementById("input").value+=""+plus
}
function equal(){
    var get_values=document.getElementById("input").value
    document.getElementById("input").value=parse(get_values)

}

function parse(str) {
    return Function(`'use strict'; return (${str})`)()
}
function dot(){
    let dot= document.getElementById("dot").value
    document.getElementById("input").value+=""+dot
}
function ac(){
    let ac= document.getElementById("ac").value
    document.getElementById("input").value=""
}
function persen(){
    let persen= document.getElementById("persen").value
    document.getElementById("input").value+=""+ persen
}
function del(){
    let del= document.getElementById("del").value
    document.getElementById("input").value-=""
}


