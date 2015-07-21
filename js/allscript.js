//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// EASING

jQuery.easing["jswing"]=jQuery.easing["swing"];
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d)},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*(--t*(t-2)-1)+b},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/
2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b},easeInSine:function(x,
t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b},easeInExpo:function(x,t,b,c,d){return t==0?b:c*Math.pow(2,10*(t/d-1))+b},easeOutExpo:function(x,t,b,c,d){return t==d?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b},
easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*0.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*
Math.PI)/p))+b},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*0.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(0.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-0.5*(a*Math.pow(2,
10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*0.5+c+b},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=1.525)+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+b},easeInBounce:function(x,t,
b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b},easeOutBounce:function(x,t,b,c,d){if((t/=d)<1/2.75)return c*(7.5625*t*t)+b;else if(t<2/2.75)return c*(7.5625*(t-=1.5/2.75)*t+0.75)+b;else if(t<2.5/2.75)return c*(7.5625*(t-=2.25/2.75)*t+0.9375)+b;else return c*(7.5625*(t-=2.625/2.75)*t+0.984375)+b},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*0.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*0.5+c*0.5+b}});

var wizard = {
	accordionBtn: '.accordionBtn',
	typeSelectionBtn: '.type ul li a',
	typeSelectionBackBtn: '.typeSelectionBtn',
	customizeBtn: '.customize > ul > li > a',
	multiSelectBtn: '.multiSelect li > a',
	singleSelectBtn: '.singleSelect li > a',
	firstPage: 'firstPage',
	prts: '.row',
	easing: 'easeInOutExpo',
	speed: 333,
	cls: 'selected',
	typeCls: 'detail',
	clicklable: true,
	disabled: function( ID ){ 
		var _t = this, customizeBtn = $(_t.customizeBtn, ID);
		ID.removeClass('success');
		customizeBtn.addClass('disabled');
	},
	enabled: function( ID ){
		var _t = this, customizeBtn = $(_t.customizeBtn, ID);
		ID.addClass('success');
		customizeBtn.removeClass('disabled');
	},
	reset: function( ID ){
		var _t = this;
		$(_t.singleSelectBtn, ID).parent('li').removeClass( _t.cls ).siblings('li').removeClass( _t.cls );
		$(_t.multiSelectBtn, ID).parent('li').removeClass( _t.cls ).eq( 0 ).addClass( _t.cls );
	},
	init: function(){
		var _t = this, accordionBtn = $( _t.accordionBtn ), typeSelectionBtn = $( _t.typeSelectionBtn ), typeSelectionBackBtn = $( _t.typeSelectionBackBtn ), customizeBtn = $( _t.customizeBtn ), multiSelectBtn = $( _t.multiSelectBtn ), singleSelectBtn = $( _t.singleSelectBtn );
		if( accordionBtn.length > 0 )
			accordionBtn.bind('click', function(){
				if( $('.' + _t.firstPage).length 	> 0 ) return false;	
				if( _t.clicklable ){
					//_t.clicklable = false;
					var _this = $( this ), prt = _this.parents( _t.prts ), sib = prt.siblings( _t.prts ), b = $('.body', prt), bsib = $('.body', sib);
					if( prt.hasClass( _t.cls ) ){
						b.slideUp( _t.speed, _t.easing, function(){ _t.clicklable = true; });
						bsib.slideUp( _t.speed, _t.easing );
						prt.removeClass( _t.cls );
						sib.removeClass( _t.cls );
					}else{
						b.slideDown( _t.speed, _t.easing, function(){ _t.clicklable = true; });
						bsib.slideUp( _t.speed, _t.easing );
						prt.addClass( _t.cls );
						sib.removeClass( _t.cls );
					}
				}
			});
		
		if( typeSelectionBtn.length > 0 )
			typeSelectionBtn.bind('click', function(){
				var _this = $( this ), txt = $('span', _this).eq( 0 ).text(), prt = _this.parent('li'), sib = prt.siblings('li'), prts = prt.parents( _t.prts ), backBtn = $(_t.typeSelectionBackBtn + ' small', prts);
				sib.removeClass( _t.cls );
				prt.addClass( _t.cls );
				prts.addClass( _t.typeCls );
				backBtn.html( txt );
				$('.' + _t.firstPage ).removeClass( _t.firstPage );
				
				_t.reset( prts );
				if( !$(_t.customizeBtn, prts).eq( 0 ).parent('li').hasClass( _t.cls ) ){
					$(_t.customizeBtn, prts).eq( 0 ).click();
				}
				_t.disabled( prts );	
			});
		
		if( typeSelectionBackBtn.length > 0 )
			typeSelectionBackBtn.bind('click', function(){
				var _this = $( this ), prts = _this.parents( _t.prts );
				prts.removeClass( _t.typeCls );
				$(_t.typeSelectionBtn, prts).parents('li').removeClass( _t.cls );
			});
		
		
		if( customizeBtn.length > 0 )
			customizeBtn.bind('click', function(){
				var _this = $( this ), prt = _this.parents('li'), sib = prt.siblings('li'), b = $('.sub', prt), bsib = $('.sub', sib);
				if( _this.hasClass('disabled') ) return false;	
				if( _t.clicklable ){
					//_t.clicklable = false;
					if( prt.hasClass( _t.cls ) ){
						b.slideUp( _t.speed, _t.easing, function(){ _t.clicklable = true; });
						bsib.slideUp( _t.speed, _t.easing );
						prt.removeClass( _t.cls );
						sib.removeClass( _t.cls );
					}else{
						b.slideDown( _t.speed, _t.easing, function(){ _t.clicklable = true; });
						bsib.slideUp( _t.speed, _t.easing );
						prt.addClass( _t.cls );
						sib.removeClass( _t.cls );
					}
				}	
			});	
		
		if( multiSelectBtn.length > 0 )
			multiSelectBtn.bind('click', function(){
				var _this = $( this ), prt = _this.parent('li');
				prt.toggleClass( _t.cls );
			}); 
		
		if( singleSelectBtn.length > 0 )
			singleSelectBtn.bind('click', function(){
				var _this = $( this ), prt = _this.parent('li'), sib = prt.siblings('li'), prts = prt.parents( _t.prts );	
				
				
				if( _this.hasClass('required') ){ 
					
					sib.removeClass( _t.cls );
					prt.addClass( _t.cls );
					
					_t.enabled( prts );
					setTimeout(function(){
						var e = _this.parents('.sub').parent('li').next('li').find('> a');
						if( e.length > 0 )
							e.click();
					}, 444);
				}else{
					
					if( prt.hasClass( _t.cls ) ){
						sib.removeClass( _t.cls );
						prt.removeClass( _t.cls );
					}else{
						sib.removeClass( _t.cls );
						prt.addClass( _t.cls );
					}
					
					
				}
			});
					
	}
	
};

wizard.init();

var bdy = $('body'), popup = $('.popupSelect');
$( window ).resize(function(){
	if( bdy.hasClass('alt') )
		popup.css('margin-bottom', window.innerHeight - 650);
});