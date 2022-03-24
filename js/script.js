//fonction remove space
function remove_space(champs){
    str=$(champs).val()
    result=$.trim(str)
    return result
}
//fonction validate email
function ValidateEmail(email) {
    var format = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return format.test(email);
}
// 

//slider-animation and control form from jquery
$(document).ready(function(){    
    $("#next1").click(function(e){
        var $user =remove_space($('#user'));
        if($user.length == 0 || $user.length < 3 ){
            $(".modal-title").text("Notification")
            $(".alert-info").text("Renseignez votre nom")
            $("#myModal").modal()
            e.preventDefault()
        }
        else{
            $(".form2").css("display","block")
            $(".form2").animate({right: '7px'});
            $(".form1").hide()
            $(".form3").hide()
            $(".form4").hide()
            $(".form5").hide()
            $(".form6").hide()
            $(".form7").hide()
            $(".form8").hide()
            $(".form9").hide()
            $(".progress-bar").css("width","10%")
            $(".progress-bar").text("10%")
        }
      
    });
  //next2
    $("#next2").click(function(e){
        var $username = remove_space($('#username'));
        if($username.length == 0 || $username.length < 3 ){
            $(".modal-title").text("Notification")
            $(".alert-info").text("Renseignez votre prenom")
            $("#myModal").modal();
            e.preventDefault()
        }
        else{
            $(".form3").css("display","block")
            $(".form3").animate({right: '7px'});
            $(".form1").hide()
            $(".form2").hide()
            $(".form4").hide()
            $(".form5").hide()
            $(".form6").hide()
            $(".form7").hide()
            $(".form8").hide()
            $(".form9").hide()
            $(".progress-bar").css("width","20%")
            $(".progress-bar").text("20%")
        }
    });
          //next3 
        $("#next3").click(function(){
            $(".form4").css("display","block")
            $(".form4").animate({right: '7px'});
            $(".form3").hide()
            $(".form2").hide()
            $(".form5").hide()
            $(".form6").hide()
            $(".form7").hide()
            $(".form8").hide()
            $(".form9").hide()
            $(".form1").hide()
            $(".progress-bar").css("width","30%")
            $(".progress-bar").text("30%")
        
     
        });
   // next 4
   $("#next4").click(function(){
        $(".form5").css("display","block")
        $(".form5").animate({right: '7px'});
        $(".form3").hide()
        $(".form2").hide()
        $(".form6").hide()
        $(".form7").hide()
        $(".form8").hide()
        $(".form4").hide()
        $(".form1").hide()
        $(".progress-bar").css("width","40%")
        $(".progress-bar").text("40%")
    });
  //next5
    $("#next5").click(function(e){
      $(".form6").css("display","block")
      $(".form6").animate({right: '7px'});
      $(".form3").hide()
      $(".form2").hide()
      $(".form5").hide()
      $(".form7").hide()
      $(".form8").hide()
      $(".form4").hide()
      $(".form1").hide()
      $(".progress-bar").css("width","50%")
      $(".progress-bar").text("50%")
      
    });
    //next6
    $("#next6").click(function(e){
        var $tel = remove_space($('#phone'));
        if($tel.length == 0 || $tel.length < 9 ){
            $(".modal-title").text("Notification")
            $(".alert-info").text("Renseignez votre numéro de téléphone")
            $("#myModal").modal();
            e.preventDefault()
        }
        else{
            $(".form7").css("display","block")
            $(".form7").animate({right: '7px'});
            $(".form3").hide()
            $(".form6").hide()
            $(".form2").hide()
            $(".form5").hide()
            $(".form8").hide()
            $(".form4").hide()
            $(".form1").hide()
            $(".progress-bar").css("width","60%")
            $(".progress-bar").text("60%")
        }
      
    });
    //next7
    $("#next7").click(function(e){
        var $email = remove_space($('#email'));
        
        if($email.length == 0){
            $(".modal-title").text("Notification")
            $(".alert-info").text("Renseignez votre adresse email")
            $("#myModal").modal();
            e.preventDefault()
        }
        else if(!ValidateEmail($email)){
            $(".modal-title").text("Notification")
            $(".alert-info").text("Adresse email invalide")
            $("#myModal").modal();
            e.preventDefault()
        }
        else{
            $(".form8").css("display","block")
            $(".form8").animate({right: '7px'});
            $(".form7").hide()
            $(".form6").hide()
            $(".form2").hide()
            $(".form5").hide()
            $(".form7").hide()
            $(".form4").hide()
            $(".form3").hide()
            $(".form1").hide()
            $(".progress-bar").css("width","70%")
            $(".progress-bar").text("70%")
        }
     
    });
    //next8
    $("#next8").click(function(e){
        var $sponsor = remove_space($('#sponsor'));
        if($sponsor.length == 0 ){
            $(".modal-title").text("Notification")
            $(".alert-info").text("Renseignez votre nom d'utilistaeur")
            $("#myModal").modal();
            e.preventDefault()
        }
        else{
            $(".form9").css("display","block")
            $(".form9").animate({right: '7px'});
            $(".form8").hide()
            $(".form6").hide()
            $(".form2").hide()
            $(".form5").hide()
            $(".form7").hide()
            $(".form4").hide()
            $(".form3").hide()
            $(".form1").hide()
            $(".progress-bar").css("width","80%")
            $(".progress-bar").text("80%")
        }
      
    });
    //next9
    $("#next9").click(function(e){
        var $adresse = remove_space($('#adress'));
        if($adresse.length == 0 ){
            $(".modal-title").text("Notification")
            $(".alert-info").text("Renseignez votre adresse")
            $("#myModal").modal();
            e.preventDefault()
        }
        else{
            $(".form10").css("display","block")
            $(".form10").animate({right: '7px'});
            $(".form9").hide()
            $(".form8").hide()
            $(".form6").hide()
            $(".form2").hide()
            $(".form5").hide()
            $(".form7").hide()
            $(".form4").hide()
            $(".form3").hide()
            $(".form1").hide()
            $(".progress-bar").css("width","88%")
            $(".progress-bar").text("88%")
        }
      
    })

    //next10
    $("#next10").click(function(e){
        // let table=$("form").serializeArray()
        $pass1=remove_space($("#pass1"))
        $pass2=remove_space($("#pass2"))
        $accept_condition=remove_space($("#choix"))
        if($pass1.length == 0 || $pass2.length == 0){
            $(".modal-title").text("Notification")
            $(".alert-info").text("Renseignez le mot de passe")
            $("#myModal").modal();
            e.preventDefault()
        }

        else if($pass1.length < 8 || $pass2.length < 8){
            $(".modal-title").text("Notification")
            $(".alert-info").text("le mot de passe doit contenir au moins huit caractères")
            $("#myModal").modal();
            e.preventDefault()
        }
        else if($pass1.length != $pass2.length){
            $(".modal-title").text("Notification")
            $(".alert-info").text("les mots de passes ne correspondent pas!")
            $("#myModal").modal();
            e.preventDefault()
        }
        
        else if( $pass1.length && $pass2.length && !$("#choix").is(":checked")){
            $(".modal-title").text("Notification")
            $(".alert-info").text("svp veuillez accepter les conditions d'utilisations")
            $("#myModal").modal();
        }
        else{
            //recupération data of user
            $("form").submit()
            let dataForm=$("form").serializeArray();
            let url=$("form").attr("action")
            $.post(url,dataForm,(data)=>{ })

            //affiher les donnees
            // data_user=[
            //     {
            //         username:$("#user").val(),
            //         forename:$("#username").val(),
            //         jour:$("#jour").val(),
            //         mois:$("#mois").val(),
            //         annee:$("#annee").val(),
            //         gender:$("#sexe").val(),
            //         country:$("#pays").val(),
            //         phone:$("#phone").val(),
            //         email:$("#email").val(),
            //         sponsor:$("#sponsor").val(),
            //         adress:$("#adress").val(),
            //         pass1:$("#pass1").val(),
            //         adress:$("#choix").val(),
            //     }
            // ]
            //  //select data to user
            //  $(".alert-info").hide()
            //  $(".progress-bar").css("width","100%")
            //  $(".progress-bar").text("100%")
            //  $(".informations").css("display","block")
            //  $(".modal-title").text("Vos informations")
            //  $(".btn btn-info").text("Confirmer")
            //  $(".btn btn-info").css("background","green")
            //  $(".info1").text("Username: "+$("#user").val())
            //  $(".info2").text("Name of foreName: "+$("#username").val())
            //  $(".info3").text("date birthday: "+$("#jour").val()+"/ "+$("#mois")+"/"+$("#annee"))
            //  $(".info4").text("Genre: "+$("#sexe").val())
            //  $(".info5").text("Country: "+$("#pays").val())
            //  $(".info6").text("Number phone: "+$("#phone").val())
            //  $(".info7").text("Email: "+$("#email").val())
            //  $(".info8").text("Sponsor user name admin: "+$("#sponsor").val())
            //  $(".info9").text("Address USDT TRC20: "+$("#adress").val())
            //  $("#myModal").modal()

        }

    })


})

    //back1



// control button back
$(document).ready(function(){
    //button back1
    $("#back1").click(function(){
        $(".form1").css("display","block")
        $(".form3").hide()
        $(".form2").hide()
        $(".form4").hide()
        $(".form5").hide()
        $(".form6").hide()
        $(".form7").hide()
        $(".form8").hide()
        $(".form9").hide()
        $(".form10").hide()
        $(".progress-bar").css("width","00%")
        $(".progress-bar").text("00%")
    })
    //button back2
    $("#back2").click(function(e){
        $(".form2").css("display","block")
        $(".form3").hide()
        $(".form4").hide()
        $(".form5").hide()
        $(".form6").hide()
        $(".form7").hide()
        $(".form8").hide()
        $(".form9").hide()
        $(".form10").hide()
        $(".form1").hide()
        e.preventDefault()
        $(".progress-bar").css("width","10%")
        $(".progress-bar").text("10%")
    })
    //button back3
    $("#back3").click(function(e){
        $(".form3").css("display","block")
        $(".form4").hide()
        $(".form5").hide()
        $(".form6").hide()
        $(".form7").hide()
        $(".form8").hide()
        $(".form9").hide()
        $(".form1").hide()
        $(".form2").hide()
        $(".form10").hide()
        $(".progress-bar").css("width","20%")
        $(".progress-bar").text("20%")
        e.preventDefault()
    })
    //button back4
    $("#back4").click(function(e){
        $(".form4").css("display","block")
        $(".form3").hide()
        $(".form6").hide()
        $(".form7").hide()
        $(".form8").hide()
        $(".form9").hide()
        $(".form1").hide()
        $(".form2").hide()
        $(".form5").hide()
        $(".form10").hide()
        $(".progress-bar").css("width","30%")
        $(".progress-bar").text("30%")
        e.preventDefault()
    })
    //button back5
    $("#back5").click(function(e){
        $(".form5").css("display","block")
        $(".form3").hide()
        $(".form6").hide()
        $(".form7").hide()
        $(".form8").hide()
        $(".form9").hide()
        $(".form1").hide()
        $(".form2").hide()
        $(".form4").hide()
        $(".form10").hide()
        $(".progress-bar").css("width","40%")
        $(".progress-bar").text("40%")
        e.preventDefault()
    })
    //button back6
    $("#back6").click(function(e){
        $(".form6").css("display","block")
        $(".form3").hide()
        $(".form5").hide()
        $(".form7").hide()
        $(".form8").hide()
        $(".form9").hide()
        $(".form1").hide()
        $(".form2").hide()
        $(".form4").hide()
        $(".form10").hide()
        $(".progress-bar").css("width","50%")
        $(".progress-bar").text("50%")
        e.preventDefault()
    })
    //button back7
    $("#back7").click(function(e){
        $(".form7").css("display","block")
        $(".form3").hide()
        $(".form5").hide()
        $(".form6").hide()
        $(".form8").hide()
        $(".form9").hide()
        $(".form1").hide()
        $(".form2").hide()
        $(".form4").hide()
        $(".form10").hide()
        e.preventDefault()
        $(".progress-bar").css("width","60%")
        $(".progress-bar").text("60%")
    })
     //button back8
     $("#back8").click(function(e){
        $(".form8").css("display","block")
        $(".form3").hide()
        $(".form5").hide()
        $(".form6").hide()
        $(".form7").hide()
        $(".form9").hide()
        $(".form1").hide()
        $(".form2").hide()
        $(".form4").hide()
        $(".form10").hide()
        $(".progress-bar").css("width","70%")
        $(".progress-bar").text("70%")
        e.preventDefault()
    })
    //button back9
    $("#back9").click(function(e){
        $(".form9").css("display","block")
        $(".form3").hide()
        $(".form5").hide()
        $(".form6").hide()
        $(".form7").hide()
        $(".form8").hide()
        $(".form1").hide()
        $(".form2").hide()
        $(".form4").hide()
        $(".form10").hide()
        $(".progress-bar").css("width","80%")
        $(".progress-bar").text("80%")
        e.preventDefault()
    })
     //button back9
     $("#back10").click(function(e){
        $(".form10").css("display","block")
        $(".form3").hide()
        $(".form5").hide()
        $(".form6").hide()
        $(".form7").hide()
        $(".form8").hide()
        $(".form1").hide()
        $(".form2").hide()
        $(".form4").hide()
        $(".form9").hide()
        $(".form10").hide()
        e.preventDefault()
    })
   //affichage du mot de passe
   //pass1
   $('#eye1').click(function(){
       if($("#eye1").is(":checked")){
            $("#pass1").attr("type","text")
        }
        else{
            $("#pass1").attr("type","password")
        }
   })
   //pass2
   $('#eye2').click(function(){
    if($("#eye2").is(":checked")){
         $("#pass2").attr("type","text")
     }
     else{
         $("#pass2").attr("type","password")
     }
})
   
   
    




})





