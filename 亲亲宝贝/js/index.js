 $(function(){
			  	   //获取商标尾部数列
			   $lis=$('.links').children().eq(0);	
			   $li  =$('.links').children();
			  	   var icurrindex=1;
			  	 //设立定时器，无缝滚动
			   var $timer=setInterval(function(){
			  	     icurrindex++
			  	     $('.links').animate({left:-icurrindex*$lis.size()},20);
			  	     if (icurrindex>670) {
			  	    	 icurrindex=0
			  	    	        }		  	    	
			  	    },20)
			  $('.links li a').each(function(){
			  	   $(this).hover(function(){
			  	   	     clearInterval($timer)	  	   	
			  	   },
			  	   function(){
			  	   	   timer=setInterval(function(){			  	    
			  	    	icurrindex++
			  	    	$('.links').animate({left:-icurrindex*$lis.size()},20);
			  	    	 if (icurrindex>670) {
			  	    	  	icurrindex=0
			  	    	                   }		  	    	
			  	             },20)
			  	         }
			  	   )	
			  })
//			  $('.links').mouseenter(function(){
//			  		clearInterval($timer)
//			  	});
//			  $('.links').mouseleave(function(){
//			  		setInterval(function(){			  	    
//			  	    	icurrindex++
//			  	    	$('.links').animate({left:-icurrindex*$lis.size()},20);
//			  	    	 if (icurrindex>670) {
//			  	    	  	icurrindex=0
//			  	    	  }		  	    	
//			  	    },20)
//			  	})
			  	
			  	
			  	//获取轮播图片,准备轮播
			  	var $mpic=$('.mpic');
			  	var $lifirst=$('.mpic').children().eq(0);//获取li宽度
			  	var $inttxt=$('.int-txt');	//获取下标字体  	
			  	var index;//声明字体下标的变量
			  	var nowindex=0;//声明轮播图片下标变量			 
			    $mpic.stop(true).animate({left:-nowindex*$lifirst.width()},1000) 
			    nowindex++;
			  	var $lunbo=setInterval(function(){	 	  //开始轮播	    
			  		  if (nowindex===6) {//判断无缝滚动
			  		  	nowindex=0
			  		  }
			  		  $inttxt.children().removeClass('active');	//先清除所有字体对应active名字	  		  
			  		  $mpic.stop(true).animate({left:-nowindex*$lifirst.width()},500)
			  		  index=nowindex;//定义好图片下标与字体下标关系
			  		  $inttxt.children().eq(index).addClass('active');//实现字体对应图片 轮播		  		  
			  		  nowindex++;	  		  
			  	 },2000);
			  	 
			  	 
			  	 //字体下标的鼠标事件
			   $('.int-txt li').each(function(){
			   	       $(this).hover(
			   	       	            function(){
			   	       	            	clearInterval($lunbo);
			   	       	            	nowindex=$(this).index();
			   	       	            	$inttxt.children().removeClass('active');//清除标签名	
								  		$(this).addClass('active');//标签名给当前 		
								  		$mpic.stop(true).animate({left:-$(this).index()*$lifirst.width()},500)		  		  
							  		     //图片对应轮播		   	       	            	
			   	       	            },function(){
				   	       	            $lunbo=setInterval(function(){	 	  //开始轮播	    
								  		  if (nowindex===6) {//判断无缝滚动
								  		  	nowindex=0
								  		  }
								  		  $inttxt.children().removeClass('active');	//先清除所有字体对应active名字	  		  
								  		  $mpic.stop(true).animate({left:-nowindex*$lifirst.width()},500)
								  		  index=nowindex;//定义好图片下标与字体下标关系
								  		  $inttxt.children().eq(index).addClass('active');//实现字体对应图片 轮播		  		  
								  		  nowindex++;	  		  
								  	 },2000);
			   	       	            	
			   	       	            })	   	
			     });
			
			
			
			//滑轮滚动事件，出现或消失	
			  $(window).on('scroll',function(){		  			
			  		 var $stop=$(window).scrollTop();		  			
			  		  if ($stop>100) {
			  		    	$('#fixpic').css({'display':'block','opacity':0}).animate({opacity:100},500)
			  		    }else{
			  		    	$('#fixpic').css('display','none')
			  		    }		  			
			  		})			
			  		
			  
			  		
			  		
			  		
			  		
			  		
			  		
			  		
			  		
			  		
			  		
			});