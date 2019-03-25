 var question1,question2,question3;
(function(){
   
    var heroPath;
    console.log($('.banner-title').position().top);
    $('.banner-receive').on('click',function(){
      $('html,body').animate({"scrollTop":$('.banner-title').position().top});
    });
     // 问卷弹窗
    var layerQuest1 = $('#layer-quest1').IUI('layer', {
        closeHandle: '.close',
        shadow: false,
        cancelCall: function() {
            
        }
    });
      var layerQuest2 = $('#layer-quest2').IUI('layer', {
        closeHandle: '.close',
           shadow: false,
        cancelCall: function() {
            
        }
    });

        var layerQuest3 = $('#layer-quest3').IUI('layer', {
        closeHandle: '.close',
           shadow: false,
        showCall:function(){

          $('#'+ heroPath).addClass("special")
          // .on('click',function(){
          //   layerQuest3.hideLayer();
           
          // });
         

        },
        cancelCall: function() {
            
        }
    });
     
    

   


  
    $.ichecked({
        type: 'radio',
        obj: '#layer-quest1 .answer-all',
        parent: '.quest-list',
        success: function() {
         

          //判断答案
          question1 = $('#layer-quest1 input[name=question1]:checked').val();
          question2 = $('#layer-quest2 input[name=question2]:checked').val();
          question3 = $('#layer-quest3 input[name=question3]:checked').val();
          if(question1.indexOf('A')>-1){
            heroPath= 'A';
            
          }else if(question1.indexOf('B')>-1){
            heroPath= 'B';
             
          }else if(question1.indexOf('C')>-1){
            heroPath= 'C';
             
          }

          if(heroPath == 'C'){
              $('.banner').css({
            "background":"url(./local-assets/taikang-piao/images/banner"+ heroPath+".png) 0 0 no-repeat",
            "background-size":"contain",
            "height":"62.85rem"
        })
            }else{
                $('.banner').css({
            "background":"url(./local-assets/taikang-piao/images/banner"+ heroPath+".png) 0 0 no-repeat",
            "background-size":"contain",
            
        })

            }

        
          layerQuest1.hideLayer();
            createjs.Tween.get(taikangTwoPeople,{loop:true}).to({
            x:taikangTwoPeople.x +220,
            y:taikangTwoPeople.y-800,
            visible:false
        },28000,createjs.Ease.linear );  
           heroMove();
          
        },
        abandon: function() {
          
        }
    });

      $.ichecked({
        type: 'radio',
        obj: '#layer-quest2 .answer-all',
        parent: '.quest-list',
        success: function() {
           question2 = $('#layer-quest2 input[name=question2]:checked').val();

            if(question2.indexOf('A')>-1){
              $.alert({
                text: '生命诚可贵，就医需及时！喝再多枸杞养生水也练不成自愈神功, 切勿盲目治疗！！转送医院中…',
                timeout: 4000
            });
        
            
          }else if(question2.indexOf('B')>-1){
           
             
          }
          layerQuest2.hideLayer();
           createjs.Tween.get(container).to({
                  y:container.y-1700,
                  visible:false
              },1000,createjs.Ease.sineIn );  
            paintMove();
          
          
        },
        abandon: function() {
          
        }
    });


      $.ichecked({
        type: 'radio',
        obj: '#layer-quest3 .answer-all',
        parent: '.quest-list',
        success: function() {
          $('.answer').removeClass('current');
          var id = $('#layer-quest3 input[name=question3]:checked').siblings('span').attr('id');
          console.log(id);
          if(heroPath !== id){
            return;
          }
          layerQuest3.hideLayer();
           // question3 = $('#layer-quest3 input[name=question3]:checked').val();
             question3 = $('#layer-quest3 input[name=question3]:checked').val();
            


            if(question3.indexOf('A')>-1){
            moneyMove(paintHero.x,paintHero.y,function(){
            //金额改变
           //金额改变
            text = 100000;
              welfareNum =50000;
              welfareNum2 = 400;
            changeVal=1000;
          });
              
        
            
          }else if(question3.indexOf('B')>-1){

               moneyMove(paintHero.x,paintHero.y,function(){
            //金额改变
           //金额改变
            text = 500;
              welfareNum =0;
              welfareNum2 = 0;
            changeVal=10;
          });
             

             // text = 500;
             //  welfareNum =0;
             //  welfareNum2 = 0;
           
             
          }
          else if(question3.indexOf('C')>-1){

                  moneyMove(paintHero.x,paintHero.y,function(){
            //金额改变
           //金额改变
            text = 50000;
              welfareNum =0;
              welfareNum2 = 0;
            changeVal=1000;
          });
              // text = 50000;
              // welfareNum =0;
              // welfareNum2 = 0;
             
          }
          setTimeout(function(){
            $("#main").fadeOut();
            $(".view").fadeIn();
            $('#a-pendant').removeClass('hide');

          },3000);

         
      
          
          
        },
        abandon: function() {
          
        }
    });







       //创建一个阶段，得到一个参考的画布
    var stage = new createjs.Stage("main");
     createjs.Ticker.framerate =55;
 
     //动画部分
      var animateObj = {
      container:function(){
         
           createjs.Tween.get(container).to({
                  y:-title1.y,
                  visible:true
              },1200,createjs.Ease.linear).call(function(){
                   welfareContaier.alpha = 1; 
              });   
        },
        jian:function(){
           stage.addChild(jian);

           createjs.Tween.get(jian).to({
                  y:1000,
                  scaleX:0,
                  scaleY:0,
                  
                  visible:false
              },800,createjs.Ease.linear ).wait(500).call(boyMove).wait(500).call(titleShow).wait(5000).call(function(){

                layerQuest1.showLayer();
                welfareNum=500;
              });   
        },
    };



   
    




     //更新阶段将呈现下一帧
    createjs.Ticker.addEventListener("tick", handleTick);
 
   

   //绘制背景
   var container = new createjs.Container();
   stage.addChild(container);
   for(var i=0;i<8;i++){
    var bg = new createjs.Bitmap('./local-assets/taikang-piao/images/'+(i+1)+'.jpg');
    bg.y = 1334*i;
    container.addChild(bg);
   }

   //首页*****************************************
   var firstPage = new createjs.Bitmap('./local-assets/taikang-piao/images/banner1.png');
   container.addChild(firstPage);
   firstPage.regX = 359;
   firstPage.x = 375;
   firstPage.y = 10;
   //剑
     var jian = new createjs.Bitmap('./local-assets/taikang-piao/images/jian.png')
    container.addChild(jian);
    jian.regX =45;
    jian.regY = 149;
    jian.rotation = 35;
    jian.x = 600;
    jian.y = 1070;




     //剑飞下来动画

     function jianFly(){
      // return;
      createjs.Tween.get(jian).wait(1000).play(function(){
         
        }).to({
            x:375,
            y:716,
            scaleX:2,
            scaleY:2,
            delay:1,
            visible:true,
            rotation: -360,
            alpha:1,
        },800,createjs.Ease.getPowIn(2.2) ).call(animateObj.container).call(cloudMove).call(animateObj.jian)

     }
        





 
   //首页人物

   var zhujiao = new createjs.Bitmap('./local-assets/taikang-piao/images/zhujiao.png');
    container.addChild(zhujiao);
    zhujiao.x = 261;
    zhujiao.y = 672;
  




    //文字
    var textContainer = new createjs.Container();
    container.addChild(textContainer);
    window.onload = function(){
      for(var i = 0;i<4;i++){

      var title = new createjs.Bitmap('./local-assets/taikang-piao/images/text/'+i+'.png');
     title.alpha = 0;
     title.x = -50;

      container.addChild(title);
      if(i==3){
        title.x = 0;
        
        createjs.Tween.get(title).to({
           
            y:50,
            visible:true,
            
       },500,createjs.Ease.linear ).to({y:0,visible:true,},500,createjs.Ease.linear).wait(1000).call(jianFly); 
      }

         createjs.Tween.get(title).wait(i*1000).to({
            x:0,
            y:0,
            alpha:1,
            visible:true,
       },600,createjs.Ease.linear );       
    }
    }
    


    //向下箭头
    var bottomTip = new createjs.Bitmap('./local-assets/taikang-piao/images/bottomTip.png');
        bottomTip.x = 375;
        bottomTip.regX =22.5;
        bottomTip.y = 1100;
        container.addChild(bottomTip);
          createjs.Tween.get(bottomTip,{loop:true}).to({
            x:bottomTip.x ,
            y:bottomTip.y + 50,
            alpha:0.1,
            visible:true,
       },1000,createjs.Ease.linear); 

       






      //云朵
      function cloudMove(){

           var cloudLocation = [
        {x:-108,y:1497},
        {x:525,y:1810},
        {x:152, y:2144},
        {x:620, y:2538},
        {x:26,  y:3197}

    ];
    for(var i =0;i<cloudLocation.length;i++){
        var cloud = new createjs.Bitmap('./local-assets/taikang-piao/images/cloud.png');
        cloud.x = cloudLocation[i].x;
        cloud.y = cloudLocation[i].y;
        container.addChild(cloud);
        if(cloud.x<350){
            createjs.Tween.get(cloud).wait(Math.random()*500).to({
            x:cloud.x-500 ,
            visible:true,
       },1000,createjs.Ease.linear); 
        }else{
            createjs.Tween.get(cloud).wait(Math.random()*500).to({
            x:cloud.x+500 ,
            visible:true,
       },1000,createjs.Ease.linear); 
        }

      
    }

      }
 

     //泰康屋子****************************************
     
     var welfareContaier = new createjs.Container();
     var welfare1 = new createjs.Bitmap('./local-assets/taikang-piao/images/welfare1.png');
     var welfare2 = new createjs.Bitmap('./local-assets/taikang-piao/images/welfare2.png');
     welfare2.y = 75;
     welfareContaier.addChild(welfare1);
     welfareContaier.addChild(welfare2);
     welfareContaier.alpha = 0;
     //添加财富文字
     stage.addChild(welfareContaier);
     var text1 = new createjs.Text("当前财富值:", "bold 24px Arial", "#fff");
      text1.x = 80;
      text1.y = 20;
      welfareContaier.addChild(text1);

      var text2 = new createjs.Text("投资所得财富值:", "bold 24px Arial", "#fff");
      text2.x = 80;
      text2.y = 100;
      welfareContaier.addChild(text2);

      //  var yellowText1 = new createjs.Text("500金", "bold 26px Arial", "#ffe032");
      // yellowText1.x = 320;
      // yellowText1.y = 20;
      // welfareContaier.addChild(yellowText1);

      //金额变化
      var text = 500;
      var yellowText1;
      var welfareNum = 0;
      var isAdd = false;
      var changeVal = 1000;
      function changeText(){
      if(text == welfareNum){
        return;
      }
      welfareContaier.removeChild(yellowText1);
     
      if(welfareNum> text){
        text = text+Math.floor(Math.random()*changeVal);
        isAdd = true;
      }else{
         text = text-Math.floor(Math.random()*changeVal);
         isAdd = false;
      }

      if(isAdd && welfareNum<=text){
        text = welfareNum;
      }else if(!isAdd && welfareNum>=text){
         text = welfareNum;
      }
   

      
      yellowText1 = new createjs.Text(text + '金', "bold 26px Arial", "#ffe032");
      yellowText1.x = 320;
      yellowText1.y = 20;
      welfareContaier.addChild(yellowText1);
      }

       createjs.Ticker.addEventListener("tick", changeText);

    var welfareNum2 = 0;
    var yellowText2;
    var changeVal2=1000;
    function changeText2(){

      welfareContaier.removeChild(yellowText2);
      yellowText2 = new createjs.Text(welfareNum2  + "金", "bold 26px Arial", "#ffe032");
      yellowText2.x = 320;
      yellowText2.y = 100;
      welfareContaier.y = 20;
      welfareContaier.addChild(yellowText2);

    }
     

       createjs.Ticker.addEventListener("tick", changeText2);


   
    
      //泰康房子*****************
    var taikangHouse = new createjs.Bitmap('./local-assets/taikang-piao/images/taikangHouse.png');
    taikangHouse.x = 0;
    taikangHouse.y = 3802;   

    //泰康妇女
    var spriteSheet = new createjs.SpriteSheet( {
        images: ["./local-assets/taikang-piao/images/taikangPeople/0.png","./local-assets/taikang-piao/images/taikangPeople/1.png"],
        frames: {width:81, height:208},
        animations: {
            move:[0,1,"move",0.05]
            
        }
    });
     var taikangWomen = new createjs.Sprite(spriteSheet);
     taikangWomen.gotoAndPlay('move');
     taikangWomen.x = 197;
     taikangWomen.y = 4447;
     container.addChild(taikangWomen);
     //泰康女
      var spriteSheet = new createjs.SpriteSheet( {
        images: ["./local-assets/taikang-piao/images/taikangPeople/0.png","./local-assets/taikang-piao/images/taikangPeople/1.png"],
        frames: {width:81, height:208},
        animations: {
            move:[0,1,"move",0.05]
            
        }
    });
     var taikangWomen = new createjs.Sprite(spriteSheet);
     taikangWomen.gotoAndPlay('move');
     taikangWomen.x = 197;
     taikangWomen.y = 4447;
     


     // container.y = -6500;
     // container.y = -3600;
      // container.y = -7900;

      //大人和小孩

      var spriteSheetTwo = new createjs.SpriteSheet( {
        images: ["./local-assets/taikang-piao/images/taikangTwoPeople/0.png","./local-assets/taikang-piao/images/taikangTwoPeople/1.png","./local-assets/taikang-piao/images/taikangTwoPeople/2.png","./local-assets/taikang-piao/images/taikangTwoPeople/3.png","./local-assets/taikang-piao/images/taikangTwoPeople/4.png",],
        frames: {width:205, height:268},
        animations: {
            move:[0,4,"move",0.05]
            
        }
    });
   
    var taikangTwoPeople = new createjs.Sprite(spriteSheetTwo);
     taikangTwoPeople.gotoAndPlay('move');
     taikangTwoPeople.x = 500;
     taikangTwoPeople.y = 4800;
     container.addChild(taikangTwoPeople);
     // createjs.Tween.get(taikangTwoPeople,{loop:true}).to({
     //        x:taikangTwoPeople.x +220,
     //        y:taikangTwoPeople.y-800,
     //        visible:false
     //    },28000,createjs.Ease.linear );  

   var spriteSheetHero = new createjs.SpriteSheet( {
        images: ["./local-assets/taikang-piao/images/hero/0.png","./local-assets/taikang-piao/images/hero/1.png","./local-assets/taikang-piao/images/hero/2.png","./local-assets/taikang-piao/images/hero/3.png","./local-assets/taikang-piao/images/hero/4.png","./local-assets/taikang-piao/images/hero/5.png",],
        frames: {width:138, height:236},
        animations: {
            move:[0,4,"move",0.15],
            stand:[5]
            
        }
    });

    //铁铺*******************************************

    var tiepu = new createjs.Bitmap('./local-assets/taikang-piao/images/tiepu.png');
    tiepu.x = 120;
    tiepu.y = 4673;   
    container.addChild(tiepu);
    
    //外漂侠
     var spriteSheetHero3 = new createjs.SpriteSheet( {
        images: ["./local-assets/taikang-piao/images/hero1/0.png","./local-assets/taikang-piao/images/hero1/1.png","./local-assets/taikang-piao/images/hero1/2.png","./local-assets/taikang-piao/images/hero1/3.png","./local-assets/taikang-piao/images/hero1/4.png",],
        frames: {width:138, height:236},
        animations: {
            move:[0,4,"move",0.15],
            stand:[0]
            
        }
    });
       var hero3 = new createjs.Sprite(spriteSheetHero3);
     hero3.gotoAndPlay('move');
     hero3.x = 400;
     hero3.y = 3800;
     container.addChild(hero3);
         container.addChild(taikangHouse); 
         container.addChild(taikangWomen);
     //走出来
     function boyMove(){
      createjs.Tween.get(hero3).to({
            x:hero3.x +400,
            y:hero3.y+300,
            visible:false
        },4000,createjs.Ease.linear )
     }
       



    var hero = new createjs.Sprite(spriteSheetHero);
     hero.gotoAndPlay('move');
     hero.x = 750;
     hero.y = 4190;
     //  hero.x = 560;
     // hero.y = 3900;
     container.addChild(hero);
     //左侧

     var spriteSheetHero1 = new createjs.SpriteSheet( {
        images: ["./local-assets/taikang-piao/images/hero1/0.png","./local-assets/taikang-piao/images/hero1/1.png","./local-assets/taikang-piao/images/hero1/2.png","./local-assets/taikang-piao/images/hero1/3.png","./local-assets/taikang-piao/images/hero1/4.png","./local-assets/taikang-piao/images/hero1/5.png",],
        frames: {width:138, height:236},
        animations: {
            move:[0,4,"move",0.15],
            stand:[5]
            
        }
    });

     //右侧

     var hero1 = new createjs.Sprite(spriteSheetHero1);
     hero1.gotoAndPlay('move');
     hero1.x = -200;
     hero1.y = 5200;
     container.addChild(hero1);



     var spriteSheetHero2 = new createjs.SpriteSheet( {
        images: ["./local-assets/taikang-piao/images/hero2/0.png","./local-assets/taikang-piao/images/hero2/1.png","./local-assets/taikang-piao/images/hero2/2.png","./local-assets/taikang-piao/images/hero2/3.png","./local-assets/taikang-piao/images/hero2/4.png","./local-assets/taikang-piao/images/hero2/5.png",],
        frames: {width:138, height:236},
        animations: {
            move:[0,4,"move",0.15],
            stand:[0]
            
            
        }
    });

      var hero2 = new createjs.Sprite(spriteSheetHero2);
     hero2.gotoAndPlay('move');
     hero2.x = 600;
     hero2.y = 6200;
     hero2.alpha = 0;
     container.addChild(hero2);
  


    function heroMove(){

      

     //外漂侠走路（泰康保险）A
     if(heroPath == 'A'){
       createjs.Tween.get(hero).to({
            x:hero.x -450,
            y:hero.y+400,
            visible:true
        },3000,createjs.Ease.linear).call(function(){
          hero.gotoAndPlay('stand');
          moneyMove(hero.x,hero.y,function(){
            //金额改变
            text = 500;
            welfareNum =400;
            welfareNum2= 0;
            changeVal =10;
          });
            showConversation(0);

          
            // hero.gotoAndPlay('stand');
          
        }).wait(3000).call(function(){
           hero.gotoAndPlay('move');
        createjs.Tween.get(container).to({
                  y:-6400,
                  visible:true
              },15000,createjs.Ease.linear );
        createjs.Tween.get(hero).to({
            x:hero.x -450,
            y:hero.y+500,
            visible:false
        },3000,createjs.Ease.linear ).call(function(){
          //外漂侠右侧走路
           createjs.Tween.get(hero1).to({
            x:hero1.x +800,
            y:hero1.y+1000,
            visible:false
        },7000,createjs.Ease.linear ).call(function(){
           hero2.alpha = 1;
            createjs.Tween.get(hero2).to({
            x:hero2.x,
            y:hero2.y+550,
            visible:true
        },3000,createjs.Ease.linear ).call(biwu);
        });

        }); 

        });
      }else if(heroPath == 'B'){
           container.y = -3600;
       createjs.Tween.get(container).to({
                  y:-6400,
                  visible:true
              },20000,createjs.Ease.linear );

           // 外漂侠走路（钱庄）B
        createjs.Tween.get(hero).to({
            x:hero.x -900,
            y:hero.y+800,
            visible:false
        },7000,createjs.Ease.linear )
       .call(function(){
          //外漂侠右侧走路
           createjs.Tween.get(hero1).to({
            x:hero1.x +400,
            y:hero1.y+600,
            visible:true
        },3000,createjs.Ease.linear ).call(function(){
           moneyMove(hero1.x,hero1.y,function(){

            changeVal2 = 1000;
           //金额改变
            text = 500;
            welfareNum =0;
            welfareNum2= 50000;
          });
           hero1.gotoAndPlay('stand');
            showConversation(1);
          
        }).wait(3000).call(function(){
          hero1.gotoAndPlay('move');
          createjs.Tween.get(hero1).to({
            x:hero1.x +400,
            y:hero1.y+400,
            visible:false
        },3000,createjs.Ease.linear ).call(function(){
           hero2.alpha = 1;
            createjs.Tween.get(hero2).to({
            x:hero2.x,
            y:hero2.y+550,
            visible:true
        },3000,createjs.Ease.linear ).call(biwu);
        });

        })

        }); 


      }else if(heroPath == 'C'){
        container.y = -3600;
       createjs.Tween.get(container).to({
                  y:-6400,
                  visible:true
              },18000,createjs.Ease.linear );

        // 外漂侠走路（钱庄）C
        createjs.Tween.get(hero).to({
            x:hero.x -900,
            y:hero.y+800,
            visible:false
        },7000,createjs.Ease.linear ).call(function(){
          //外漂侠右侧走路
           createjs.Tween.get(hero1).to({
            x:hero1.x +800,
            y:hero1.y+1000,
            visible:false
        },7000,createjs.Ease.linear ).call(function(){
           hero2.alpha = 1;
               createjs.Tween.get(hero2).to({
            x:hero2.x,
            y:hero2.y+550,
            visible:true
        },3000,createjs.Ease.linear ).call(function(){
           hero2.gotoAndPlay('stand');
             moneyMove(hero2.x,hero2.y,function(){
            //金额改变
           //金额改变
            text = 500;
            welfareNum =500;
            welfareNum2= 50;
            changeVal=10;
          });
            showConversation(2);
          
        }).wait(3000).call(biwu);

        });
        }); 


      }
    
        



    }
   


    


    
    

     //泰康男

      var spriteSheet1 = new createjs.SpriteSheet( {
        images: ["./local-assets/taikang-piao/images/taikangMan/0.png","./local-assets/taikang-piao/images/taikangMan/1.png"],
        frames: {width:86, height:211},
        animations: {
             move:[0,1,"move",0.05]
            
        }
    });

      var taikangMan = new createjs.Sprite(spriteSheet1);
     taikangMan.gotoAndPlay('move');
     taikangMan.x = 80;
     taikangMan.y = 4450;
     container.addChild(taikangMan);


     

     //灯笼1
      var lantern1Sheet = new createjs.SpriteSheet( {
        images: ["./local-assets/taikang-piao/images/lantern1/0.png","./local-assets/taikang-piao/images/lantern1/1.png"],
        frames: {width:540, height:402},
        animations: {
             move:[0,1,"move",0.05]
            
        }
    });

      var lantern1 = new createjs.Sprite(lantern1Sheet);
     lantern1.gotoAndPlay('move');
     lantern1.regX = 540;
     lantern1.x = 770;
     lantern1.y = 3605;
     container.addChild(lantern1);


     //灯笼2
      var lantern2Sheet = new createjs.SpriteSheet( {
        images: ["./local-assets/taikang-piao/images/lantern2/0.png","./local-assets/taikang-piao/images/lantern2/1.png"],
        frames: {width:336, height:307},
        animations: {
             move:[0,1,"move",0.05]
            
        }
    });

      var lantern2 = new createjs.Sprite(lantern2Sheet);
     lantern2.gotoAndPlay('move');
  
     lantern2.x = 0;
     lantern2.y = 4920;
     container.addChild(lantern2);


      //灯笼3
      var lantern3Sheet = new createjs.SpriteSheet( {
        images: ["./local-assets/taikang-piao/images/lantern3/0.png","./local-assets/taikang-piao/images/lantern3/1.png"],
        frames: {width:460, height:386},
        animations: {
             move:[0,1,"move",0.05]
            
        }
    });

      var lantern3 = new createjs.Sprite(lantern3Sheet);
     lantern3.gotoAndPlay('move');
  
     lantern3.x = 300;
     lantern3.y = 6070;
     container.addChild(lantern3);

      //灯笼4
      var lantern4Sheet = new createjs.SpriteSheet( {
        images: ["./local-assets/taikang-piao/images/lantern4/0.png","./local-assets/taikang-piao/images/lantern4/1.png"],
        frames: {width:350, height:302},
        animations: {
             move:[0,1,"move",0.05]
            
        }
    });

      var lantern4 = new createjs.Sprite(lantern4Sheet);
     lantern4.gotoAndPlay('move');
    lantern4.regX = 350;
     lantern4.x = 750;
     lantern4.y = 8270;
    



       //标题1
      var title1 = new createjs.Bitmap('./local-assets/taikang-piao/images/title1.png');
    title1.x = 500;
    title1.y = 3702;   
    container.addChild(title1);
    title1.alpha = 0;
    title1.scaleX = 1.2;
    title1.scaleY = 1.2;

    function titleShow(){
 createjs.Tween.get(title1).to({
            alpha:1,
            scaleX:1,
            scaleY:1,
            visible:true
        },500,createjs.Ease.linear)
    }



   
    //人

    var tiepuPeopleSheet = new createjs.SpriteSheet( {
        images: ["./local-assets/taikang-piao/images/tiepuPeople/0.png","./local-assets/taikang-piao/images/tiepuPeople/1.png"],
        frames: {width:102, height:287},
        animations: {
             move:[0,1,"move",0.05]
            
        }
    });

      var tiepuPeople = new createjs.Sprite(tiepuPeopleSheet);
     tiepuPeople.gotoAndPlay('move');
   
     tiepuPeople.x = 500;
     tiepuPeople.y = 5700;
     container.addChild(tiepuPeople);




    //钱庄*************************
    var qianzhuang = new createjs.Bitmap('./local-assets/taikang-piao/images/qianzhuang.png');
    qianzhuang.x = 0;
    qianzhuang.y = 5981;   
    container.addChild(qianzhuang);



    //擂台*************************

    var leitai = new createjs.Bitmap('./local-assets/taikang-piao/images/leitai.png');
    leitai.regX = 623;
    leitai.x = 750;
    leitai.y = 6966;   
    container.addChild(leitai);

     var story2 = new createjs.Bitmap('./local-assets/taikang-piao/images/story2.png');
  
    story2.x = 500;
    story2.y = 6766;   
    container.addChild(story2);
    story2.alpha = 0;
     var biwuren1 = new createjs.Bitmap('./local-assets/taikang-piao/images/biwuren1.png');
    biwuren1.regX = 129;
    biwuren1.x = 750;
    biwuren1.y = 7450;   
    container.addChild(biwuren1);

    //比武

    function biwu(){
      //外漂侠右侧走路
          var hero1 = new createjs.Bitmap('./local-assets/taikang-piao/images/hero1/0.png');
    
          hero1.x = 510;
          hero1.y = 6766;
          hero1.alpha = 0;
          container.addChild(hero1);
           container.addChild(story2);
            createjs.Tween.get(story2).to({
            alpha:1,
            visible:true
        },1000,createjs.Ease.linear).call(function(){
       
            hero1.alpha = 0;
            createjs.Tween.get(hero1).to({
                        x:hero1.x ,
                        y:hero1.y+550,
                        alpha:1,
                        visible:true
                    },500,createjs.Ease.linear).wait(1000).call(function(){
                      hero1.alpha =0;
                      biwuren1.alpha = 0;

                    var dadouSheet = new createjs.SpriteSheet( {
                    images: ["./local-assets/taikang-piao/images/dadou/0.png","./local-assets/taikang-piao/images/dadou/1.png","./local-assets/taikang-piao/images/dadou/2.png","./local-assets/taikang-piao/images/dadou/3.png","./local-assets/taikang-piao/images/dadou/4.png"],
                    frames: {width:400, height:365},
                    animations: {
                         move:[0,3,"move",0.05]
                        
                    }
                });

                  var dadou = new createjs.Sprite(dadouSheet);
                 dadou.gotoAndPlay('move');
               
                 dadou.x = 440;
                 dadou.y = 7200;
                 container.addChild(dadou);
                 setTimeout(function(){
                  container.removeChild(dadou);
                  layerQuest2.showLayer();
                 },2000)



                    });
        });


    }

     var spriteSheetPaintHero = new createjs.SpriteSheet( {
        images: ["./local-assets/taikang-piao/images/paintHero/0.png","./local-assets/taikang-piao/images/paintHero/1.png","./local-assets/taikang-piao/images/paintHero/2.png","./local-assets/taikang-piao/images/paintHero/3.png","./local-assets/taikang-piao/images/paintHero/4.png",],
        frames: {width:138, height:236},
        animations: {
            move:[0,4,"move",0.1],
            stand:[0]
            
        }
    });

      var paintHero = new createjs.Sprite(spriteSheetPaintHero);
     paintHero.gotoAndPlay('move');
     paintHero.x = 550;
     paintHero.y = 8200;
     // paintHero.alpha = 0;
     container.addChild(paintHero);


     //受伤人移动
     function paintMove(){
      createjs.Tween.get(paintHero).to({
                        x:paintHero.x ,
                        y:paintHero.y+800,
                        alpha:1,
                        visible:true
                    },4000,createjs.Ease.linear).call(function(){
                      paintHero.gotoAndPlay('stand');

                      layerQuest3.showLayer();
                    })

     }
      


      container.addChild(lantern4);
   



    //人
    var leitaiPeopleSheet = new createjs.SpriteSheet( {
        images: ["./local-assets/taikang-piao/images/leitaiPeople/0.png","./local-assets/taikang-piao/images/leitaiPeople/1.png"],
        frames: {width:107, height:290},
        animations: {
             move:[0,1,"move",0.05]
            
        }
    });

      var leitaiPeople = new createjs.Sprite(leitaiPeopleSheet);
     leitaiPeople.gotoAndPlay('move');

     leitaiPeople.x = 120;
     leitaiPeople.y = 7585;
     container.addChild(leitaiPeople);

     var leitaiThreePeopleSheet = new createjs.SpriteSheet( {
        images: ["./local-assets/taikang-piao/images/leitaiThreePeople/0.png","./local-assets/taikang-piao/images/leitaiThreePeople/1.png"],
        frames: {width:265, height:300},
        animations: {
             move:[0,1,"move",0.05]
            
        }
    });

      var leitaiThreePeople = new createjs.Sprite(leitaiThreePeopleSheet);
     leitaiThreePeople.gotoAndPlay('move');

     leitaiThreePeople.x = 450;
     leitaiThreePeople.y = 7900;
     container.addChild(leitaiThreePeople);

   




     //医馆**************************
    var yiguan = new createjs.Bitmap('./local-assets/taikang-piao/images/yiguan.png');
    yiguan.x = 0;
    yiguan.y = 8159;   
    container.addChild(yiguan);


     createjs.Touch.enable(stage);
   
     
//滑动
    // var initalY,containerY;
    // stage.on('stagemousedown', function(e) {
    //    initalY = e.stageY;
    //    containerY = container.y;
     
    // });
    // stage.on('stagemousemove', function(e) {
    //   var moveDis = e.stageY -initalY;
    //   console.log(container.y);

    //      createjs.Tween.get(container,{override: true}).to({
            
    //         y:containerY + moveDis,
          
    //         visible:true,
    //       },100,createjs.Ease.linear );  
    //    });
    

    //对话框
       //医馆**************************
       var conversationArr=[];
       var conversationLocation = [{x:270,y:4350},{x:294,y:5655},{x:294,y:6690},]

       function showConversation(index){
        for(var i = 0;i<3; i++){
           var conversation = new createjs.Bitmap('./local-assets/taikang-piao/images/conversation'+(i+1)+'.png');
           conversation.x = conversationLocation[i].x;
           conversation.y= conversationLocation[i].y;
           conversation.alpha = 0;
           container.addChild(conversation);
           conversationArr.push(conversation);

           
        }


         createjs.Tween.get(conversationArr[index]).to({
                     
                        y:conversationArr[index].y-20,
                        alpha:1,
                        visible:true
                    },1300,createjs.Ease.linear)

                   
       

       }



       function moneyMove(rotX,rotY,callBack){

           var money = new createjs.Bitmap('./local-assets/taikang-piao/images/money.png');
            money.x = rotX;
            money.y = rotY;
            money.regX = 23;
             money.regY = 39;
            // money.alpha = 0;   
            container.addChild(money);
           


               createjs.Tween.get(money).to({
                     
                        y:rotY-100,
                        alpha:1,
                        scaleX:1.1,
                        scaleY:1.1,
                        visible:true
                    },100,createjs.Ease.sineIn).call(function(){

                        createjs.Tween.get(money).to({
                        x:340,
                        y:(-container.y) +text1.y,
                        alpha:0,
                        visible:true
                    },400,createjs.Ease.sineIn).call(callBack).call(function(){
                       createjs.Tween.get(money).to({
                        // scaleX:0,
                        // scaleY:0,
                        alpha:0,
                        visible:false
                    },200,createjs.Ease.sineIn)
                    })

                    })

       }
       // setTimeout(function(){
       //   moneyMove(0,300)
       // },1000)
      
       // console.log()
     
    
    // var conversation1 =  new createjs.Bitmap('./local-assets/taikang-piao/images/conversation1.png')
    // conversation1.x = 270;
    // conversation1.y = 4350;   
    // container.addChild(conversation1);



    //   var conversation2 = new createjs.Bitmap('./local-assets/taikang-piao/images/conversation2.png');
    // conversation2.x = 294;
    // conversation2.y = 5655;   
    // container.addChild(conversation2);


    // var conversation3 = new createjs.Bitmap('./local-assets/taikang-piao/images/conversation3.png');
    // conversation3.x = 294;
    // conversation3.y = 6690;   
    // container.addChild(conversation3);
    // container.y = -4000;

 
    
 // var zhujiao1SpriteSheet = new createjs.SpriteSheet( {
 //        images: ["./local-assets/taikang-piao/images/zhujiao1/0.png","./local-assets/taikang-piao/images/zhujiao1/1.png","./local-assets/taikang-piao/images/zhujiao1/2.png","./local-assets/taikang-piao/images/zhujiao1/3.png","./local-assets/taikang-piao/images/zhujiao1/4.png",],
 //        frames: {width:107, height:290},
 //        animations: {
 //            move:[0,4,"move",0.05]
            
 //        }
 //    });
   
 //    var zhujiao1 = new createjs.Sprite(zhujiao1SpriteSheet);
 //     zhujiao1.gotoAndPlay('move');
 //     zhujiao1.x = 0;
 //     zhujiao1.y = 0;
 //     container.addChild(zhujiao1);
     // createjs.Tween.get(zhujiao).to({
     //        x:zhujiao.x +220,
     //        y:zhujiao.y-600,
     //        visible:false
     //    },28000,createjs.Ease.linear ); 
  
     
   
  
    function handleTick() {
          stage.update();      
    }
})()