$(document).ready(function(){
    
    var expression=""
    var currentval=""
    $(".num").click(function(){
        const val = $(this).text()
        currentval+=val
        $(".screen").text(currentval)
        expression+=val
        console.log(expression);
    })
    $(".op").click(function(){
        $(".screen").text("")
        currentval=""
        expression+=$(this).text()
        console.log(expression);
    })
    $(".pi").click(function(){
        $(".screen").text("3.14")


    })
    $(".equal").click(function(){
        console.log(eval(expression));
        $(".screen").text(eval(expression))
        currentval=""

    })
    $(".clear").click(function(){
        expression=""
        currentval=""
        $(".screen").text("0")
    })
    $(".inverse").click(function(){
        $(".screen").text(eval("1/"+$(".screen").text()))

    })
    $(".sqrt").click(function(){
        $(".screen").text(window.Math.sqrt($(".screen").text()))
    })
    $(".plus_or_minise").click(function(){
        $(".screen").text(eval("-1*"+$(".screen").text()))
        

    })
    $(".backspace").click(function(){
        currentval=currentval.slice(0,-1)
        expression=expression.slice(0,-1)
        $(".screen").text(currentval)

    })
    
    
})