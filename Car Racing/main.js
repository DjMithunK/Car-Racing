var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");

var car_1image = "image1.png";
var car_1width = 100;
var car_1height = 100;
var car_1x = 10;
var car_1y = 10;


var car_2image = "image2.png";
var car_2width = 100;
var car_2height = 100;
var car_2x = 10;
var car_2y = 100;
var background = "racing.gif";
function onload(){
    background_image = new Image();
    background_image.onload = upload_background;
    background_image.src="download.jpg";

    car_image = new Image();
    car_image.onload = upload_car1;
    car_image.src = car_1image;
    
    car_2_image_object = new Image();
    car_2_image_object.onload = upload_car2;
    car_2_image_object.src = car_2image;
    

}


function upload_background(){
    
    ctx.drawImage(background_image,0,0,canvas.width,canvas.height);

}

function upload_car1(){
    ctx.drawImage(car_image,car_1x,car_1y,car_1width,car_1height);
    
}

function upload_car2(){
    ctx.drawImage(car_2_image_object,car_2x,car_2y,car_2width,car_2height);
    
}
window.addEventListener("keydown",keydown);
function keydown(e){
    var keycode = e.keyCode;
    console.log(keycode);
 if (keycode == 38 ){
 car1_up();
 }
 if (keycode == 40 ){
    car1_down();
    }
  if (keycode == 39 ){
        car1_right();
        }
        if (keycode == 37 ){
            car1_left();
            }

  
            if (keycode == 65){
                car2_a();
            }
          if (keycode == 87){
                car2_w();
          }
          if (keycode == 83){
                car2_s();
          }
          if (keycode == 68){
                car2_d();
        }
}




function car1_up(){
    if (car_1y > 0){
        car_1y = car_1y - 10;
        console.log("Car moving up y =  " + car_1y);
        upload_background();
        upload_car1();
        upload_car2();
    }
   

    
}
function car1_down(){
    if (car_1y <= 500){
        car_1y = car_1y + 10;
        console.log("Car moving up y =  " + car_1y);
        upload_background();
        upload_car1();
        upload_car2();
    }


    
}
function car1_right(){
    if (car_1x < 750){
        car_1x = car_1x + 10;
        upload_background();
            upload_car1();
            upload_car2();
    
    }
   

}
function car1_left(){
    if (car_1x > 0){
        car_1x = car_1x - 10;
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function car2_w(){
    if (car_2y > 0){
        car_2y = car_2y - 10;
        console.log("Car moving up y =  " + car_2y);
        upload_background();
        upload_car1();
        upload_car2();
    }
   

    
}
function car2_s(){
    if (car_2y <= 500){
        car_2y = car_2y + 10;
        console.log("Car moving up y =  " + car_2y);
        upload_background();
        upload_car1();
        upload_car2();
    }


    
}
function car2_d(){
    if (car_2x < 750){
        car_2x = car_2x + 10;
        upload_background();
        upload_car1();
            upload_car2();
    
    }
   

}
function car2_a(){
    if (car_2x > 0){
        car_2x = car_2x - 10;
        upload_background();
        upload_car1();
        upload_car2();
    }
}









