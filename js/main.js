
   $('.body_2_left .tab-').on('mouseover','.caijing', function(){
   		var id = $(this).attr('data-id');
   		$(this).addClass('active').siblings().removeClass('active');
   		$('#'+id).show().siblings().hide();

   });
   $('.body_2_left .tab').on('mouseover','.chanjing', function(){
		 var id = $(this).attr('data-id');
		$(this).addClass('active').siblings().removeClass('active');
   		$('#'+id).show().siblings().hide();
   });

});