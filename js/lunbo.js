             $('.lunbo .yuandian li').on('click',function(){   //СԲ����ʽ  ��꾭��СԲ��ͼƬ�л�
                  var index = $(this).index();
                  $(this).addClass('active').siblings().removeClass('active');
                  $('.slides-list').animate({left: (index * -395) + 'px'});
              });

              $('.jiantou .left').on('click',function(){    //������ͷͼƬѭ��
                var activePrev = $('.lunbo .yuandian .active').prev();
                console.log(activePrev)
                if(activePrev.length === 0){
                  var activePrev = $('.lunbo .yuandian li').last();
                }
                activePrev.click();
              });
                  
                   $('.lunbo .yuandian li').on('mouseover',function(){   //СԲ����ʽ  ��꾭��СԲ��ͼƬ�л�
                  var index = $(this).index();
                  $(this).addClass('active').siblings().removeClass('active');
                  $('.slides-list').animate({left: (index * -395) + 'px'});
              });


               $('.jiantou .right').on('click',function(){   //����Ҽ�ͷͼƬѭ��
                var activePrev = $('.lunbo .yuandian .active').next();
                if(activePrev.length === 0){
                  var activePrev = $('.lunbo .yuandian li').first();
                }
                activePrev.click();
              });


               setInterval(function(){  //��ʱ��
               $('.jiantou .right').click(); 
               },3000)                  //3��ִ��һ�ε����¼�
              //$('.lunbo').on('mouseenter', function(){ //��ͷ��ʾ

                //$('.jiantou').show(); });
              //$('.lunbo').on('mouseleave', function(){  //��ͷ����

               // $('.jiantou').hide();});
       