$(document).ready(function(){
    $("#design").click(function(){
        $("#designP").show();
        $("#design").hide();
    }); 
    
    $("#designP").click(function(){
        $("#design").show();
        $("#designP").hide();
    });

   
        $("#development").click(function(){
            $("#developmentP").show();
            $("#development").hide();
        });

        $("#developmentP").click(function(){
            $("#development").show();
            $("#developmentP").hide();
        
    });

     
    $("#product").click(function(){
        $("#productP").show();
        $("#product").hide();
    });

    $("#productP").click(function(){
        $("#product").show();
        $("#productP").hide();
    
});

$(".one").mouseenter(function(){
    $("#one").show();
   

});


$(".one").mouseleave(function(){
    $("#one").hide();

   

});


$(".two").mouseenter(function(){
    $("#two").show();
   

});


$(".two").mouseleave(function(){
    $("#two").hide();

   

});

$(".three").mouseenter(function(){
    $("#three").show();
   

});


$(".four").mouseleave(function(){
    $("#four").hide();

   

});

$(".four").mouseenter(function(){
    $("#four").show();
   

});


$(".three").mouseleave(function(){
    $("#three").hide();

   

});

});

function submit(){
    alert("Your message has been received and thank you for contacting us");
}

