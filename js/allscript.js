var wizard = {
	accordionBtn: '.accordionBtn',
	prts: '.row',
	speed: 222,
	clicklable
	init: function(){
		var _t = this, accordionBtn = $( _t.accordionBtn );
		if( accordionBtn.length > 0 )
			accordionBtn.bind('click', function(){
				var _this = $( this ), prt = _this.parents( _t.prts ), sib = prt.siblings( _t.prts );
				if( prts.hasClass('selected') ){
					prt.slideUp( _t.speed , function(){
						
					});
					row.removeClass('selected');
				}else{
					row.removeClass('selected');
					prt.addClass('selected');
				}
			});
	}
};