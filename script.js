$(".calc").click(function(){ //When the button with the class calc is clicked
    var now = parseInt ($(".current").val());
    //The input with the class "current" will be made the value of the variable now
    var lose = parseInt ($(".lost").val());
     //The input with the class "lost" will be made the value of the variable lose
    var obtain= parseInt ($(".gain").val()); 
    //The input with the class "gain" will be made the value of the variable obtain
    var multiply = 45;
    // the value of the variable multipy will be 45
    var add = obtain * multiply;
    //The value of the variable add will be the product of the variables obtain and multiply
    var sub = lose * multiply;
    //The value of the variable sub will be the product of the variables lose and multiply
    var prt1 = now + add;
    //The value of the variable prt1 will be the sum of the variables now and add
    var final = prt1 - sub;
    //The value of the variable final will be the difference between the variables from sub to prt1
    $(".state").text("By the year 2063, you will own "+final+" sweaters.");
    //The text tag with class "state" wll be changed to the "By the year 2063, you will own " along with the value of the variable final, followed by " sweaters"
    $(".answer").show();
    //The tag(s) with the class answer will be shown
    $(".main").hide(); 
    //The tag(s) with the class "main" will be hidden
});
$(".reset").click(function() {
    $(".main").show();
    $(".answer").hide();
    $("input").val("");
    
});