$("#contactForm").validator().on("submit",function(event){if(event.isDefaultPrevented()){formError();submitMSG(false,"Did you fill in the form properly?");}else{event.preventDefault();submitForm();}});function submitForm(){var name=$("#name").val();var email=$("#email").val();var message=$("#message").val();$.ajax({type:"POST",url:"assets/php/form-process.php",data:"name="+name+"&email="+email+"&message="+message,success:function(text){if(text=="success"){formSuccess();}else{formError();submitMSG(false,text);}}});}
function formSuccess(){$("#contactForm")[0].reset();submitMSG(true,"Message Submitted!")}
function formError(){$("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){$(this).removeClass();});}
function submitMSG(valid,msg){if(valid){var msgClasses="h3 text-left tada animated text-success";}else{var msgClasses="h3 text-left text-danger";}
$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);}
