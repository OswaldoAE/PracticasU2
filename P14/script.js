var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

var player = { x: canvas.width / 2, y: canvas.height / 2, size: 40 };
var bullets =[];

var enemies =[];

for (var i=0; i < 10; i++) {
    enemies.push({

        x: Math.random() * canvas.width,
        y: (Math.random() * canvas.height)/2,
        size: 40,
});
}

var score=0;

var naveImg = new Image();

naveImg.src = "nave1.png";

var enenyImg = new Image();

enemyImg.src = "nave.png";

naveImg.onload = function(){

    requestAnimationFrame(gameLoop);
};

//esperamos a que la imagen del enemigo se desaparezca
enemyImg.onload=function(){
    requestAnimationFrame(gameLoop);
};

//definimmoos la función gameloop que se ejecute
function gameLoop(){
    //limitamos al jugador dentro del canvas
    player.x = Math.max(0, Math.min(canvas.width-player.size,player.x));
    player.y = Math.max(0, Math.min(canvas.width-player.size,player.y));
    ctx.clearRect(0,0, canvas.width, canvas.height); 
    ctx.drawImage(naveImg, player.x, player.y, player.size);
    
    for (var i = 0; i < bullets.length; i++){
        bullets[i].y -=5;
        ctx.fillRect(bullets[i].x, bullets[i].y, bullets[i].size, bullets[i].size);
    }
    for (var i =0; i < enemies.length; i++)
        enemies[i].y += 1;
        if (enemies[i].y >= canvas.height){
            enemies[i] = {x: Math.random()
            * canvas.width, y: 0, size: 40 };
        }
    ctx.drawImage(
        enemyImg,
        enemies[i].x,
        enemies[i].y,
        enemies[i].size,
        enemies[i].size
    );


    for (var i =0; i < bullets.length; i++){
        for(var j = 0; j < enemies.length; j++){
        if (
            bullets[i].x + enemies[j].x > enemies[j].size &&
            bullets[i].x + bullets[i].size > enemies[j].x &&
            bullets[i].y < enemies[j].y + enemies[j].size &&
            bullets[i].y + bullets[i].size > enemies[j].y
        ){
            enemies[j] = {x: Math.random()
                *canvas.width, y: 0, size: 40};
                bullets.splice(i, 1);
                score++;
                break;
        }
    }
}
    ctx.font = "30px Arial";
    ctx.fillText("Score: "+ score, 10, 50);
    ctx.fillStyle = "#fff";

    requestAnimationFrame(gameLoop);
}

gameLoop();




