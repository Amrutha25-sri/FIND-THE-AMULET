var image1,image2,image3,back,play,p,start,s,help,h,gr,grI,message,mI,amulet,a;
var m,re,r,c,cI,c2I,b,bI,b2I,d,dI,t1,t1I,t2,t2I,i,iI,h,hI,s,s1,sI,f,fI,key1,k,plate,pI,go,goI;
var p1,p1I,p2,p2I,t,tI,e1,eI,e1st,gold,g,crown,crI,arrow1,a1,arrow2,a2,hint,hintI,hintb,right,hbI,rI;
var time = 1000;
var won,w,lost,l,popup,up;

function preload(){
  image1 = loadImage("1.png");
  image2 = loadImage("2.png");
  image3 = loadImage("3.jpg");
  p = loadImage("play.png");
  s = loadImage("start.png");
  h = loadImage("help.png");
  m = loadImage("m.png");
  r = loadImage("return.png");
  p1I = loadImage("p1.png");
  tI = loadImage("t.png");
  eI = loadImage("e1.png");
  bI = loadImage("b1.png");
  cI = loadImage("c1.png");
  dI = loadImage("d.png");
  c2I = loadImage("c2.png");
  b2I = loadImage("b2.png");
  t1I = loadImage("book1.png");
  t2I = loadImage("book2.png");
  iI = loadImage("ink.png");
  hI = loadImage("toy.png");
  sI = loadImage("sand.png");
  fI = loadImage("frame.png");
  k = loadImage("key.png");
  pI = loadImage("plates.png");
  g = loadImage("gold.png");
  crI = loadImage("crown.png");
  a1 = loadImage("how.png");
  a2 = loadImage("use.png");
  goI = loadImage("go.png");
  hintI = loadImage("hint.png");
  hbI = loadImage("hbox.png");
  rI = loadImage("ri.png");
  p2I = loadImage("p2.png");
  grI = loadImage("g.png");
  mI = loadImage("l2.png");
  a = loadImage("a.png");
  w = loadImage("won.png");
  l = loadImage("lost.png");
  up = loadImage("pop.png");
  }
  
  function setup() {
    createCanvas(650, 400);

    back = createSprite(325,200,800,400);
    back.addImage("pic",image1);
    back.scale = 1.3;

    start = createSprite(490,348,1,1);
    start.addImage("button",p);

    play = createSprite(325,170,1,1);
    play.addImage("button1",s);
    play.scale = 1.5;
    play.visible = false;

    help = createSprite(325,250,1,1);
    help.addImage("button2",h);
    help.scale = 1.5;
    help.visible = false;

    ms = createSprite(325,200,1,1);
    ms.addImage("message",m);
    ms.visible = false;  

    re = createSprite(80,345,1,1);
    re.addImage("to back",r);
    re.visible = false;
    re.scale = 2;

    t = createSprite(90,350,1,1);
    t.addImage("table",tI);
    t.visible = false;  
    t.scale = 1;
    
    p2 = createSprite(490,230,1,1);
    p2.addImage("first",p2I);
    p2.visible = false;
    p2.scale = 1.1;

    e1 = createSprite(25,260,1,1);
    e1.addImage("ene",eI);
    e1.visible = false;  
    e1.scale = 0.5;

    e1st = createSprite(640,240,10,120);
    e1st.visible = false;

    b = createSprite(50,320,1,1);
    b.addImage("table",bI);
    b.scale = 0.6;
    b.visible = false;

    gold = createSprite(60,300,1,1);
    gold.addImage("treasure",g);
    gold.scale = 0.06;
    gold.visible = false;  

    c = createSprite(513,170,1,1);
    c.addImage("table",cI);
    c.scale = 0.7;
    c.visible = false;
    c.debug = false;  
    c.setCollider("rectangle",0,0,130,230);
    
    s1 = createSprite(490,117,1,1);
    s1.addImage("sandal",sI);
    s1.scale = 0.1;
    s1.visible = false;

    t1 = createSprite(495,157,1,1);
    t1.addImage("book",t1I);
    t1.scale = 0.5;
    t1.visible = false;

    t2 = createSprite(553,205,1,1);
    t2.addImage("books",t2I);
    t2.scale = 0.4;
    t2.visible = false;

    h = createSprite(510,205,1,1);
    h.addImage("toy",hI);
    h.scale = 0.1;
    h.visible = false;

    i = createSprite(545,167,1,1);
    i.addImage("ink",iI);
    i.scale = 0.1;
    i.visible = false; 

    plate = createSprite(545,117,1,1);
    plate.addImage("dinning",pI);
    plate.scale = 0.08;
    plate.visible = false;  

    d = createSprite(240,290,1,1);
    d.addImage("dinningtable",dI);
    d.scale = 0.9;
    d.visible = false;

    f = createSprite(360,170,1,1);
    f.addImage("frame",fI);
    f.scale = 0.6;
    f.visible = false;     

    p1 = createSprite(410,290,1,1);
    p1.addImage("first",p1I);
    p1.visible = false;
    p1.scale = 0.5;
    p1.debug = false;
    p1.setCollider("rectangle",0,0,120,280); 

    key1 = createSprite(360,190,1,1);
    key1.addImage("key",k);
    key1.scale = 0.1;
    key1.visible = false;  

    crown = createSprite(40,320,1,1);
    crown.addImage("shiny",crI);
    crown.scale = 0.1;
    crown.visible = false;
    
    arrow1 = createSprite(325,50,1,1);
    arrow1.addImage("HOW",a1);
    arrow1.visible = false;
    
    arrow2 = createSprite(325,100,1,1);
    arrow2.addImage("HOW",a2);
    arrow2.visible = false;
    arrow2.scale = 0.7;
    
    go = createSprite(250,20,1,1);
    go.addImage("return",goI);
    go.visible = false;
    
    s = createSprite(509,117,1,1);
    s.addImage("sandal",sI);
    s.scale = 0.1;
    s.visible = false;
    
    hint = createSprite(60,50,1,1);
    hint.addImage("idea",hintI);
    hint.visible = false;
    
    hintb = createSprite(325,200,1,1);
    hintb.addImage("idea",hbI);
    hintb.visible = false;
    hintb.scale = 1.4;
    
    right = createSprite(325,310,1,1);
    right.addImage("idea",rI);
    right.visible = false;
    right.scale = 1.7;
    
    gr = createSprite(550,100,1,1);
    gr.addImage("secound",grI);
    gr.visible = false;
    
    message = createSprite(190,120,1,1);
    message.addImage("secound",mI);
    message.visible = false;
    message.scale = 0.7;
    
    amulet = createSprite(530,100,1,1);
    amulet.addImage("done",a);
    amulet.visible = false;
    amulet.scale = 0.2;
    
    popup = createSprite(60,240,1,1);
    popup.addImage("ppop",up);
    popup.visible = false;
    popup.scale = 1;
    
    won = createSprite(325,200,1,1);
    won.addImage("image1",w);
    won.visible = false;
    
    lost = createSprite(325,200,1,1);
    lost.addImage("image2",l);
    lost.visible = false;
    
}
    
  function draw() {
    background("purple");
    
    if (p1.isTouching(gr) && gr.x === 325 && p1.y === 290){
      won.visible = true;
      b.visible = false;
      c.visible = false;
      d.visible = false;
      p1.visible = false;
      f.visible = false;
      key1.visible = false;
      arrow1.visible = false;
      hint.visible = false;
      back.visible = false;
      message.visible = false;
      gr.visible = false;
      crown.visible = false;
      gold.visible = false;
      amulet.visible = false;
      s.visible = false;

    }
    if (time === 0){
      lost.visible = true;
      b.visible = false;
      c.visible = false;
      d.visible = false;
      p1.visible = false;
      f.visible = false;
      key1.visible = false;
      arrow1.visible = false;
      hint.visible = false;
      back.visible = false;
      message.visible = false;
      
      crown.visible = false;
      gold.visible = false;
      s.visible = false;
    }
    
    if(crown.x === p1.x && s.x === p1.x){
      gr.x = 325;
      gr.y = 350;
      amulet.x = 310;
      amulet.y = 345;
    }
    
    if (p1.isTouching(b)){
      popup.visible = true;
    }
    else{
      popup.visible = false;
    }
    
    if (p1.visible === true){
      time = time - 1;
        if (keyDown(RIGHT_ARROW)){
            p1.x = p1.x + 10;
          }
        if (keyDown(LEFT_ARROW)){
            p1.x = p1.x - 10;
          }
        if (keyDown(DOWN_ARROW)){
            p1.y = p1.y + 10;
          }
        if (keyDown(UP_ARROW)){
            p1.y = p1.y - 10;
          }
      
    }
    
    if (p1.isTouching(c)){
      c.addImage("open",c2I);
      c.changeImage("open",c2I);
      s.visible = true;
      s1.visible = true;
      t1.visible = true;
      t2.visible = true;
      h.visible = true;
      i.visible = true;
      plate.visible = true;
    }
    else {
      c.addImage("table",cI);
      c.changeImage("table",cI);
      s.visible = false;
      s1.visible = false;
      t1.visible = false;
      t2.visible = false;
      h.visible = false;
      i.visible = false;
      plate.visible = false;
    }
    
    if (p1.isTouching(key1)){
      key1.x = p1.x;
      key1.y = p1.y;
      key1.scale = 0.2;
    }
    
    if (p1.isTouching(b) && key1.isTouching(b)){
      b.addImage("opened",b2I);
      b.changeImage("opened",b2I);
      key1.destroy();
      gold.visible = true;
      crown.visible = true;
    }
    
    if (p1.isTouching(crown)){
      crown.x = p1.x;
      crown.y = p1.y;
      crown.scale = 0.1;
    }
    
    if (p1.isTouching(s)){
      s.x = p1.x;
      s.y = p1.y;
      s.visible = true;
    }
    
    if (mousePressedOver(hint)){
      hintb.visible = true;
      right.visible = true;
    }
    
    if (mousePressedOver(right)){
      hintb.visible = false;
      right.visible = false;
    }
    
    if (mousePressedOver(start)){
      slide1();
    }
    
    if (mousePressedOver(help)){
      play.visible = false;
      help.visible = false;
      ms.visible = true;
      re.visible = true;
    }
    
    if (mousePressedOver(re)){
      slide1(); 
    }
    
    if (mousePressedOver(play)){
      back.visible = true;
      back.addImage("pic",image2);
      back.changeImage("pic",image2);
      p1.visible = false;
      back.scale = 1.1;
      back.x = 300;
      play.visible = false;
      help.visible = false;
      e1.visible = true;
      e1.velocityX = 3;
      t.visible = true;
      b.visible = false;
      c.visible = false;
      d.visible = false;
      p2.visible = true;
    }
    
    if (e1.isTouching(e1st)){
      e1.destroy();
      back.addImage("pic",image3);
      back.changeImage("pic",image3);
      t.visible = false;
      b.visible = true;
      c.visible = true;
      d.visible = true;
      p1.visible = true;
      p2.visible = false;
      f.visible = true;
      key1.visible = true;
      arrow1.visible = true;
      time = time - 1;
      hint.visible = true;
    }
    
    if (mousePressedOver(arrow1)){
      arrow2.visible = true;
      go.visible = true;
    }
    
    if (mousePressedOver(go)){
      arrow2.visible = false;
      go.visible = false;
    }
  
    drawSprites();
    
    fill("black");
    textSize(30);
    text("Time Left = 00:" + time,380,40);
    
    if (crown.x === p1.x || s.x === p1.x){        
      message.visible = true;
      } 
    
    if (keyDown("enter")){
      gr.visible = true;
      amulet.visible = true;
      message.visible = false;
    }
  
  }
   
  function slide1(){
    start.visible = false;
    back.visible = false;
    play.visible = true;
    help.visible = true;
    ms.visible = false;
    re.visible = false;
  }
