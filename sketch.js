var Greensnake, Yellowsnake, Pinksnake, Longsnake, Rollsnake, Rainbowsnake;
var ladder 
var Snake1, Snake2, Snake3, Snake4, Snake5
var Ladder1,Ladder2
var dice1,dice2,dice3,dice4,dice5,dice6;
var Dice;
var r=1
var player1,player2
var player1img,player2img

function preload(){
Greensnake = loadImage("Greensnake.png")
Yellowsnake = loadImage("yellowsnake.png")
Pinksnake = loadImage("Pinksnake.png")
Rollsnake = loadImage("rollsnake.png")
Rainbowsnake = loadImage("rainbowsnake.png")
ladder = loadImage("ladder.png")
Longsnake = loadImage("longsnake.png")
dice1 = loadAnimation("Dice1.png")
dice2 = loadAnimation("Dice2.png")
dice3 = loadAnimation("Dice3.png")
dice4 = loadAnimation("Dice4.png")
dice5 = loadAnimation("Dice5.png")
dice6 = loadAnimation("Dice6.png")
player1img = loadImage("player1.png")
player2img = loadImage("player2.png")

}

function setup(){
createCanvas(1000,800)
Snake1 = createSprite(200,400,20,80)
Snake1.addImage(Greensnake)
Snake1.scale = 0.9

Snake2 = createSprite(530,600,20,80)
Snake2.addImage(Pinksnake)
Snake2.scale = 0.5

Snake3 = createSprite(600,300,20,80)
Snake3.addImage(Rainbowsnake)
Snake3.scale = 0.8

snake4 = createSprite(620,110,20,80)
snake4.addImage(Yellowsnake)
snake4.scale = 0.5
snake4.rotation = 40
    
Ladder1 = createSprite(470,420,20,80)
Ladder1.addImage(ladder)
Ladder1.scale = 0.5 
Ladder1.rotation = 10

Ladder2 = createSprite(220,420,20,80)
Ladder2.addImage(ladder)
Ladder2.scale = 0.5
Ladder2.rotation = 10


Ladder3 = createSprite(700,670,20,80)
Ladder3.addImage(ladder)
Ladder3.scale = 0.5
Ladder3.rotation = 10

Ladder4 = createSprite(65,270,20,80)
Ladder4.addImage(ladder)
Ladder4.scale = 0.5
Ladder4.rotation = 10

Dice = createSprite(900,700,50,50)
Dice.addAnimation("dice1",dice1)
Dice.addAnimation("dice2",dice2)
Dice.addAnimation("dice3",dice3)
Dice.addAnimation("dice4",dice4)
Dice.addAnimation("dice5",dice5)
Dice.addAnimation("dice6",dice6)

player1 = createSprite(30,770,10,10)
player1.addImage(player1img)
player1.scale = 0.2

player2 = createSprite(40,770,10,10)
player2.addImage(player2img)
player2.scale = 0.2

}


function draw(){
background("orange")
//creating 100 square boxes
for(i=0;i<800;i=i+80){
line(0,i,800,i)

}
for(y=0;y<850;y=y+80){
line(y,0,y,800)

}
// Displaying Numbers  
var a=1; 
for(i=0;i<800;i=i+80){  
textSize(30)
fill("black")
text(a,i,750) 
a=a+1
}
var b=20
for(i=0;i<800;i=i+80){
textSize(30)
fill("black")
text(b,i,670)
b=b-1
}
var c=21
for(i=0;i<800;i=i+80){
textSize(30)
fill("black")
text(c,i,590)
c=c+1
}
var d=40
for(i=0;i<800;i=i+80){
textSize(30)
fill("black")
text(d,i,510)
d=d-1
}
var e=41
for(i=0;i<800;i=i+80){
    textSize(30)
    fill("black")
    text(e,i,430)
    e=e+1
}
var f=60
for(i=0;i<800;i=i+80){
    textSize(30)
    fill("black")
    text(f,i,350)
    f=f-1
}
var g=61
for(i=0;i<800;i=i+80){
    textSize(30)
    fill("black")
    text(g,i,270)
    g=g+1
}
var h=80
for(i=0;i<800;i=i+80){
    textSize(30)
    fill("black")
    text(h,i,190)
    h=h-1
}
var k=81
for(i=0;i<800;i=i+80){
    textSize(30)
    fill("black")
    text(k,i,110)
    k=k+1
}
var j=100
for(i=0;i<800;i=i+80){
    textSize(30)
    fill("black")
    text(j,i,30)
    j=j-1
}
if(keyWentDown("Space")){
r=Math.round(random(1,6))    
Dice.changeAnimation("dice"+r)
}

if(keyWentDown("up")){
player1.y = player1.y-80    
}

if(keyWentDown("right")){
player1.x = player1.x+80    
}

if(keyWentDown("left")){
    player1.x = player1.x-80    
    }

    if(keyWentDown("down")){
        player1.y = player1.y+80    
        }

        if(keyWentDown("A")){
            player2.x = player2.x-80    
            }

            if(keyWentDown("W")){
                player2.y = player2.y-80    
                }  
               
                if(keyWentDown("S")){
                    player2.y = player2.y+80    
                    }    
                 
                    if(keyWentDown("D")){
                        player2.x = player2.x+80    
                        }   
                        
if(player1.x>780){
    player1.x=780
}

if(player2.x>780){
    player2.x=780
}
         
if(player1.x<20){
    player1.x=20
}

if(player2.x<20){
    player2.x=20
}

if(player1.y<20){
    player1.y=20
}

if(player2.y<20){
    player2.y=20
}

if(player1.y>770){
    player1.y=770
}

if(player2.y>770){
    player2.y=770
}

drawSprites()
}