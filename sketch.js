const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1, pig2;
var log1, log2;
var box3, box4;
var log3, log4, box5;
var bird;

function setup(){
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);

    ground = new Ground();

    box2 = new Box(920, 320, 70, 70);

    pig1 = new Pig(810, 320);

    log1 = new Log(810, 260, 300, 20, PI);

    box3 = new Box(700, 240, 70, 70);

    box4 = new Box(920, 240, 70, 70);

    pig2 = new Pig(810, 240)

    log2 = new Log(810, 140, 300, 20, PI)

    box5 = new Box(810, 120, 70, 70)

    log3 = new Log(770, 120, 20, 150, PI/6)

    log4 = new Log(869, 120, 20, 150, -PI/6)

    bird = new Bird(200, 200)
    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();

    ground.display();

    box2.display();

    pig1.display();

    log1.display();

    box3.display();
    
    box4.display();

    pig2.display();

    log2.display();

    box5.display();

    log3.display();

    log4.display();

    bird.display();

}