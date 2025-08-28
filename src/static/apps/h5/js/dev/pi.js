/**
 * javascript document for pi2 theme(http://html5beta.com/)
 * feel free to grab any code you need,i will be glad it helps.
 * offer me a job?contact me by zxdong@gmail.com
 */


//function start
$(document).ready(function() {
	//globals
	var 
	isTouchDevice = false
	,c = $('#cbg')[0]
	,supportCanvas = c.getContext?true:false
	,isTouchDevice =  ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch
	debug('support canvas: ' + supportCanvas)
	initSite()


	//init  site function
	function initSite() {
		
		//ie6 warning
		if($('body').hasClass('lt-ie7')) {
		    ie6fix()
		    return false
		}

		//side nav
		if(!isTouchDevice && !$('#timeline').length) sidenav()

		//width adjust
		adjustWidth()
		$(window).resize(adjustWidth)
		
		//rewrite category list
		var cats = $('#footer-widget-area .widget_categories')
		if(cats.length) {
			var as = ''
			cats.find('li').each(function() {
				as += '<span class="iblock">' + $(this).children('a').end().html() + '</span> '
			})
			cats.children('ul').remove().end().append('<div class="pdb">' + as + '</div>')
		}
		
		//pre code operation
		var pres = $('pre')
		,codes = $('code')
		,contentEditable = isTouchDevice?'':'contentEditable="true"'
		
		pres.each(function() {
			var t = $(this)
			t.addClass('prettyprint lang-' + t.prop('lang'))
			.wrapInner('<code ' + contentEditable + ' />')
		})
		
		codes.wrap('<pre class="prettyprint" />');
		
	    //highlight
	    prettyPrint()
		
		//init UI
		initUI()
		initShare()
		
		//inputs
		$('.input.submit').addClass('btn btn-c shadow')
		
		//qrcode
		if(supportCanvas) {
			$('#debug').before('<div class="pdtb aligncenter" id="qr"></div>')
			$('#qr').qrcode({width: 128,height: 128,text: window.location.href })
		}

		//nav menu hover
		$('#nav ul.menu li.menu-item').hover(function() {
			var t = $(this)
			,tc = $(this).children('ul')
			t.addClass('hover')
			checkMenuWidth( tc )
			tc.slideDown()
			
		},function() {
			var t = $(this)
			,tc = $(this).children('ul')
			t.removeClass('hover')
			tc.hide()
		})
		
		//more link
		$('.more-link').addClass('btn btn-a btn-inline btn-corner')
		
		//canvas bubble
		
		debug('touch device:' + isTouchDevice)
		if(supportCanvas && !isTouchDevice && !$('#timeline').length) {
			var bubbleInst = new Bubbles({}, $('#cbg'))
			window.bubbleInst = bubbleInst
			$(window).on('resize',function() {
				var wr = bubbleInst.wrapper
				,w = parseInt(wr.width(),10)
				,h = parseInt(wr.height(),10)
				wr.prop({width:w,height:h})
				bubbleInst.width = w
				bubbleInst.height = h
				bubbleInst.init()
			})
			$('#footer .addBubble').click(function() {
				bubbleInst.num ++ 
				bubbleInst.initShape()
			})
			$('#footer .stop').click(function() {
				var th = $(this)
				if(th.hasClass('off')) {
					th.removeClass('off').text('Stop it')
					bubbleInst.on = true
				}
				else {
					th.addClass('off').text('Continue')
					bubbleInst.clearShapes()
					bubbleInst.on = false
				}
				
			})
			$('#footer .faster').click(function() {
				bubbleInst.step ++
				if(bubbleInst.step > 100) bubbleInst.step = 100
			})
			$('#footer .fish').click(function() {
				var res = $(this)
				if(res.hasClass('on')) {
					bubbleInst.isHeart = false
					res.removeClass('on')
					res.text('I am ?')
				}
				else {
					bubbleInst.isHeart = true
					res.addClass('on')
					res.text('I am not ?')
				}
			})
		}
		else {
			$('#footer .exp').hide()
		}
		//end
	}

	//sidenav()
	function sidenav() {
		var flag = $('body').hasClass('home') || $('body').hasClass('tag')
		,res = flag? $('h1, #footer-widgets h3, .post-title h2') : $('h1, #footer-widgets h3, h2')
		,ht = '<div id="sidenav"><div id="sidenav-inner"><ul>'
		res.each(function(i, ele) {
            var t = $(this)
			t.before('<a href="#" name="nav-' + i + '"></a>')
			ht += '<li><a href="#nav-' + i + '">' + t.text() + '</a></li>'
        })
		$('#header a').prop('name', 'top')
		$('body').append(ht + '</ul><p><a href="#top">&uarr;top</a></p></div></div>')
		checkSideNavWidth()
		
		//event handle
		$('#sidenav').hover(function() {
			$(this).addClass('hover')
			checkSideNavWidth()
		}, function() {
			$(this).removeClass('hover')
			$('#sidenav').removeClass('scroll')
		})
	}
	
	//checkSideNavWidth()
	function checkSideNavWidth() {
		var w = $(window).height() * 0.9
		sn = $('#sidenav-inner').height()
		if(sn > w) $('#sidenav').addClass('scroll')
		else $('#sidenav').removeClass('scroll')
	}

	//debug
	function debug(w) {
		$('#debug').append('<p>' + w + '</p>')
	}

	//adjust width
	function adjustWidth() {

		var w = $(window).width()
		,cs = $('.centered')
		debug( 'window width changed to ' + w +  ' px')

		if(w>800) {
			cs.css({
				width: 800
			})
		}
		else if(w >= 600) {
			cs.css({
				width: 600
			})
		}
		else {
			debug('window width less than 600')
			cs.css({
				width:'100%'
			})
		}
	}

	//ie6fix()
	function ie6fix() {
		$('#wrapper').slideUp(500,function() {
			$('body').append($('#ie6warn').html())
		})
	}

	//checkMenuWidth
	function checkMenuWidth(res) {
		var li = res.children('li')
		,len = li.length
		,len2 = 0
		for(var i = 0;i < len;i ++) {
			var len3 = li.eq(i).children('a').text().length * 9-50
			len2 = len2>len3?len2:len3
			if(i == (len -1)) {
				res.css('width',len2)
			}
		}
	}

	/* init UI elem */ 
	function initUI(fa) {

		var x = fa?fa.toString() + ' ':'body '

		//btn init
		$(x + '.btn').each(function() {
			var th = $(this)
			,hasType = !th.prop('type')
			,cls = th.prop('class')
			,icon = cls.split('with-')
			if(hasType && !th.hasClass('select')) th.html('<span class="btn-txt">' + th.text() + '</span>')
	          if(icon.length > 1 && hasType) {
	           var ic = icon[1].split(' ')[0]
	           th.prepend(
	            (th.hasClass('icon-only')?'<span class="icon-cell icon-shadow icon-corner">':'') +
	            '<span class="icon icon-corner ' + ic +'"></span>' +
	            (th.hasClass('icon-only')?'</span>':'')
	            ).addClass('btn-with-icon')
	       }

	   })

		//table
		$(x + 'table').each(function() {
			var th = $(this)
			th.children('caption').addClass('bar-c corner')
			th.addClass('table').find('tr').filter(function(index){
				return index%2 == 0
			}).addClass('odd')
			th.find('th').addClass('th td')
			th.find('td').addClass('td')
		})

	    //input
	    $(x + 'input').each(function() {
	    	var t = $(this)
	    	t.addClass('input ' + t.prop('type'));
	    })
	    //input wrapper
	    var typs = ['button','checkbox','date','datetime','datetime-local',
	    'email','file','hidden','image','month','number','password',
	    'radio','range','reset','submit','text','time','url','week','color','search','tel']
	    ,typ1 = ['date','datetime','datetime-local',
	    'email','month','number','password',
	    'range','text','time','url','week','color','search','tel']
	    ,q = 'textarea,input.' + typ1.join(',input.')

	    $(x).find(q).addClass('text-input').wrap('<div class="input-cell input-corner input-shadow" />')
	    $(x + '.text-input.search').parent().addClass('input-search-cell')
	    $(x + 'textarea.text-input').parent().addClass('textarea-cell')
	    $(x + '.text-input.with-btn-clear')
	    .after('<a href="javascript:;" class="btn-clear icon-cell icon-shadow icon-corner hide"><span class="icon icon-corner icon-delete"></span></a>')
	    .parent().addClass('with-btn-clear')
	    $(x).on('focus', '.text-input', function(e) {
	        $(this).parent().addClass('focus-shadow')
	    }).on('blur', '.text-input', function(e) {
	        $(this).parent().removeClass('focus-shadow')
	    }).on('keyup','.text-input.with-btn-clear', function() {
	        var t = $(this)
	        if(t.val()) t.siblings('.btn-clear').removeClass('hide')
	        else t.siblings('.btn-clear').addClass('hide')
	    }).on('click', '.input-cell .btn-clear', function() {
	        $(this).addClass('hide').siblings('.with-btn-clear').val('').focus()
	    })

	    //ui-checkbox
	    $(x + '.ui-checkbox').each(function() {
	    	var t = $(this)
	    	,txt = t.prev('label').addClass('hide').text()
	    	t.addClass('hide').wrap('<a href="javascript:;" class="btn btn-with-icon btn-checkbox '+
	        (t.hasClass('checkbox-inline')? 'btn-inline':'') +
	        (t.hasClass('with-shadow')? 'shadow ':' ') +
	        ' btn-a" />').parent().prepend('<span class="icon icon-corner icon-checkbox-' +
	        (t.prop('checked')?'on':'off') +
	        '"></span><span class="btn-txt">' +
	        (txt?txt:'&nbsp;') +
	        '</span>')
	     })

	    //checkbox function
	    $(x).on('click','.btn-checkbox',function() {
	    	var t = $(this)
	    	,tc = t.children('.checkbox')
	    	,ti = t.children('.icon')
	    	,tcc = tc.prop('checked')
	    	if(tcc) {
	    		t.addClass('btn-a').removeClass('btn-c')
	    		tc.prop('checked',false)
	    		ti.removeClass('icon-checkbox-on').addClass('icon-checkbox-off')
	    	}
	    	else {
	    		t.removeClass('btn-a').addClass('btn-c')
	    		tc.prop('checked',true)
	    		ti.addClass('icon-checkbox-on').removeClass('icon-checkbox-off')
	    	}   	
	    })

	    //ui-radio
	    $(x + '.radiogroup > .radio').each(function() {
	    	var t = $(this)
	    	,tp = t.parent()
	    	,txt = t.prev('label').addClass('hide').text()
	    	,tc = t.prop('checked')
	    	t.addClass('hide').wrap('<a href="javascript:;" class="radio-in btn btn-with-icon btn-radio '+
	        (tp.hasClass('radio-inline')? 'btn-inline ':' ') +
	        (tp.hasClass('with-shadow')? 'shadow ':' ') +
	        (tc?'btn-c':'btn-a') +
	        '" />').parent().prepend('<span class="icon icon-corner icon-radio-' +
	        (tc?'on':'off') +
	        '"></span><span class="btn-txt">' +
	        (txt?txt:'&nbsp;') +
	        '</span>')
	     })
	    $(x + '.radiogroup').each(function() {
	    	var t = $(this).children('.btn-radio')
	    	t.first().addClass('radio-first').removeClass('radio-in')
	    	t.last().addClass('radio-last').removeClass('radio-in')
	    })

	    //radio function
	    $(x).on('click','.btn-radio',function() {
	    	var t = $(this)
	    	,tc = t.children('.radio')
	    	,ti = t.children('.icon')
	    	,tcc = tc.prop('checked')
	    	,ts = t.siblings('.btn-radio')
	    	if(tcc) return;
	    	else {
	    		t.removeClass('btn-a').addClass('btn-c')
	    		ts.addClass('btn-a').removeClass('btn-c')
	    		tc.trigger('click')
	    		ti.addClass('icon-radio-on').removeClass('icon-radio-off')
	    		ts.children('.icon').removeClass('icon-radio-on').addClass('icon-radio-off')
	    	}
	    	
	    })

		//list 
		$(x + '.list').each(function() {
			var t = $(this)
			,tc = t.children()
			if(t.hasClass('corner')) {
				tc.first().addClass('cornert')
				tc.last().addClass('cornerb')
			}
			tc.first().addClass('li-first')
			tc.last().addClass('li-last')
		})

		//controlgroup 
		$(x + '.controlgroup').each(function() {
			var t = $(this).addClass('fix')
			,tc = t.children()
			,tcl = tc.length
			tc.addClass('btn-control').first().addClass('btn-control-first')
			tc.last().addClass('btn-control-last')
			tc.filter(function(index) {
				return (index > 0)  && (index < tcl-1)
			}).addClass('btn-control-in')
		})

	}
})

//initShare()
function initShare() {
	var link = encodeURIComponent( location.href )
	,title = encodeURIComponent( document.title )
	$('.post-share .social a').each(function() {
		var t = $(this)
		,hr = t.prop('href').replace('##', title).replace('#', link)
		t.prop('href', hr)
	})
}

//draw bubbles plugin
;(function(){Bubbles=function(e,t){var n={colorPool:["rgba(156,183,52,.25)","rgba(227,163,26,.25)","rgba(217,84,56,.25)","rgba(4,80,150,.25)","rgba(122,24,105,.25)"],num:20,isHeart:!1,timer:100,step:3,minSize:50,maxSize:150,maxFrame:230},r=this;r=$.extend(r,$.extend(n,e)),r=$.extend(r,{wrapper:t,ctx:t[0].getContext("2d"),width:t.width(),height:t.height(),shapes:[],on:!0,flag:null,inited:!1}),r.init()},Bubbles.prototype={init:function(){var e=this;num=e.num,wr=e.wrapper,wr.prop({width:parseInt(e.width,10),height:parseInt(e.height,10)}),e.inited=!0,e.clearShapes(),e.shapes=[];for(var t=0;t<num;t++)e.initShape();e.flag&&clearTimeout(e.flag),e.animateShapes()},clearShapes:function(){var e=this;e.ctx.clearRect(0,0,e.width,e.height)},initShape:function(){var e=this,t=Math.floor(Math.random()*(e.maxSize-e.minSize))+e.minSize,n=t*2,r=e.width>n?e.width:n+1,i=e.height>n?e.height:n+1,s=t+Math.floor(Math.random()*(r-n)),o=t+Math.floor(Math.random()*(i-n)),u=e.colorPool,a=Math.floor(Math.random()*u.length),f=u[a],l=Math.random()>.5?!0:!1,c=Math.random()>.5?!0:!1,h={x:s,y:o,r:t,fillStyle:f,stepCount:e.maxFrame,plusX:l,plusY:c};e.shapes.push(h)},drawShape:function(e,t,n,r,i){var s=this;ctx=s.ctx;if(!s.on)return;if(i){ctx.beginPath(),ctx.fillStyle="rgba(207,13,31,.25)";var o=2*n/150;ctx.moveTo(e-n+o*75,t-n+o*40),ctx.bezierCurveTo(e-n+o*75,t-n+o*37,e-n+o*70,t-n+o*25,e-n+o*50,t-n+o*25),ctx.bezierCurveTo(e-n+o*20,t-n+o*25,e-n+o*20,t-n+o*62.5,e-n+o*20,t-n+o*62.5),ctx.bezierCurveTo(e-n+o*20,t-n+o*80,e-n+o*40,t-n+o*102,e-n+o*75,t-n+o*120),ctx.bezierCurveTo(e-n+o*110,t-n+o*102,e-n+o*130,t-n+o*80,e-n+o*130,t-n+o*62.5),ctx.bezierCurveTo(e-n+o*130,t-n+o*62.5,e-n+o*130,t-n+o*25,e-n+o*100,t-n+o*25),ctx.bezierCurveTo(e-n+o*85,t-n+o*25,e-n+o*75,t-n+o*37,e-n+o*75,t-n+o*40),ctx.fill(),ctx.closePath()}else ctx.beginPath(),ctx.fillStyle=r,ctx.arc(e,t,n,0,Math.PI*2,!0),ctx.fill(),ctx.closePath()},animateShapes:function(){var e=this,t=e.num,n=e.step,r=e.shapes;e.on||(e.flag=e.flag=setTimeout(function(){e.animateShapes},e.timer)),e.clearShapes();for(var i=0;i<t;i++){var s=r[i],o=s.r,u=s.stepCount+1,a=s.plusX,f=s.plusY,l=s.fillStyle;if(u>=e.maxFrame){var a=Math.random()>.5?!0:!1,f=Math.random()>.5?!0:!1;u=0}var c=a?s.x+n:s.x-n;c>e.width-o&&(c-=2*n,a=!s.plusX),c<o&&(c+=2*n,a=!s.plusX);var h=f?s.y+n:s.y-n;h>e.height-o&&(h-=2*n,f=!s.plusY),h<o&&(h+=2*n,f=!s.plusY);var p={x:c,y:h,r:o,fillStyle:l,stepCount:u,plusX:a,plusY:f};r[i]=p,e.drawShape(c,h,o,l,e.isHeart),i===t-1&&(e.flag=setTimeout(function(){e.animateShapes()},e.timer))}},destroy:function(){clearTimeout(this.flag),this.wrapper.off("resize","**"),this.delete}},this.Bubbles=Bubbles}).call(this)

//wp add comment
addComment={moveForm:function(d,f,i,c){var m=this,a,h=m.I(d),b=m.I(i),l=m.I("cancel-comment-reply-link"),j=m.I("comment_parent"),k=m.I("comment_post_ID");if(!h||!b||!l||!j){return}m.respondId=i;c=c||false;if(!m.I("wp-temp-form-div")){a=document.createElement("div");a.id="wp-temp-form-div";a.style.display="none";b.parentNode.insertBefore(a,b)}h.parentNode.insertBefore(b,h.nextSibling);if(k&&c){k.value=c}j.value=f;l.style.display="";l.onclick=function(){var n=addComment,e=n.I("wp-temp-form-div"),o=n.I(n.respondId);if(!e||!o){return}n.I("comment_parent").value="0";e.parentNode.insertBefore(o,e);e.parentNode.removeChild(e);this.style.display="none";this.onclick=null;return false};try{m.I("comment").focus()}catch(g){}return false},I:function(a){return document.getElementById(a)}}


// prettify.js Copyright (C) 2006 Google Inc.
var IN_GLOBAL_SCOPE=!0;window.PR_SHOULD_USE_CONTINUATION=!0;var prettyPrintOne,prettyPrint;(function(){function O(e){function a(e){var t=e.charCodeAt(0);if(t!==92)return t;var n=e.charAt(1);return t=u[n],t?t:"0"<=n&&n<="7"?parseInt(e.substring(1),8):n==="u"||n==="x"?parseInt(e.substring(2),16):e.charCodeAt(1)}function f(e){if(e<32)return(e<16?"\\x0":"\\x")+e.toString(16);var t=String.fromCharCode(e);return t==="\\"||t==="-"||t==="]"||t==="^"?"\\"+t:t}function l(e){var t=e.substring(1,e.length-1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g")),n=[],r=t[0]==="^",i=["["];r&&i.push("^");for(var s=r?1:0,o=t.length;s<o;++s){var u=t[s];if(/\\[bdsw]/i.test(u))i.push(u);else{var l=a(u),c;s+2<o&&"-"===t[s+1]?(c=a(t[s+2]),s+=2):c=l,n.push([l,c]),c<65||l>122||(c<65||l>90||n.push([Math.max(65,l)|32,Math.min(c,90)|32]),c<97||l>122||n.push([Math.max(97,l)&-33,Math.min(c,122)&-33]))}}n.sort(function(e,t){return e[0]-t[0]||t[1]-e[1]});var h=[],p=[];for(var s=0;s<n.length;++s){var d=n[s];d[0]<=p[1]+1?p[1]=Math.max(p[1],d[1]):h.push(p=d)}for(var s=0;s<h.length;++s){var d=h[s];i.push(f(d[0])),d[1]>d[0]&&(d[1]+1>d[0]&&i.push("-"),i.push(f(d[1])))}return i.push("]"),i.join("")}function c(e){var r=e.source.match(new RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),i=r.length,s=[];for(var o=0,u=0;o<i;++o){var a=r[o];if(a==="(")++u;else if("\\"===a.charAt(0)){var c=+a.substring(1);c&&(c<=u?s[c]=-1:r[o]=f(c))}}for(var o=1;o<s.length;++o)-1===s[o]&&(s[o]=++t);for(var o=0,u=0;o<i;++o){var a=r[o];if(a==="(")++u,s[u]||(r[o]="(?:");else if("\\"===a.charAt(0)){var c=+a.substring(1);c&&c<=u&&(r[o]="\\"+s[c])}}for(var o=0;o<i;++o)"^"===r[o]&&"^"!==r[o+1]&&(r[o]="");if(e.ignoreCase&&n)for(var o=0;o<i;++o){var a=r[o],h=a.charAt(0);a.length>=2&&h==="["?r[o]=l(a):h!=="\\"&&(r[o]=a.replace(/[a-zA-Z]/g,function(e){var t=e.charCodeAt(0);return"["+String.fromCharCode(t&-33,t|32)+"]"}))}return r.join("")}var t=0,n=!1,r=!1;for(var i=0,s=e.length;i<s;++i){var o=e[i];if(o.ignoreCase)r=!0;else if(/[a-z]/i.test(o.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){n=!0,r=!1;break}}var u={b:8,t:9,n:10,v:11,f:12,r:13},h=[];for(var i=0,s=e.length;i<s;++i){var o=e[i];if(o.global||o.multiline)throw new Error(""+o);h.push("(?:"+c(o)+")")}return new RegExp(h.join("|"),r?"gi":"g")}function M(e,t){function u(e){var a=e.nodeType;if(a==1){if(n.test(e.className))return;for(var f=e.firstChild;f;f=f.nextSibling)u(f);var l=e.nodeName.toLowerCase();if("br"===l||"li"===l)r[o]="\n",s[o<<1]=i++,s[o++<<1|1]=e}else if(a==3||a==4){var c=e.nodeValue;c.length&&(t?c=c.replace(/\r\n?/g,"\n"):c=c.replace(/[ \t\r\n]+/g," "),r[o]=c,s[o<<1]=i,i+=c.length,s[o++<<1|1]=e)}}var n=/(?:^|\s)nocode(?:\s|$)/,r=[],i=0,s=[],o=0;return u(e),{sourceCode:r.join("").replace(/\n$/,""),spans:s}}function _(e,t,n,r){if(!t)return;var i={sourceCode:t,basePos:e};n(i),r.push.apply(r,i.decorations)}function P(e){var t=undefined;for(var n=e.firstChild;n;n=n.nextSibling){var r=n.nodeType;t=r===1?t?e:n:r===3?D.test(n.nodeValue)?e:t:t}return t===e?undefined:t}function H(e,t){var n={},r;(function(){var i=e.concat(t),s=[],o={};for(var u=0,a=i.length;u<a;++u){var f=i[u],l=f[3];if(l)for(var c=l.length;--c>=0;)n[l.charAt(c)]=f;var h=f[1],p=""+h;o.hasOwnProperty(p)||(s.push(h),o[p]=null)}s.push(/[\0-\uffff]/),r=O(s)})();var i=t.length,s=function(e){var o=e.sourceCode,u=e.basePos,a=[u,S],f=0,l=o.match(r)||[],c={};for(var h=0,p=l.length;h<p;++h){var d=l[h],v=c[d],m=void 0,g;if(typeof v=="string")g=!1;else{var y=n[d.charAt(0)];if(y)m=d.match(y[1]),v=y[0];else{for(var b=0;b<i;++b){y=t[b],m=d.match(y[1]);if(m){v=y[0];break}}m||(v=S)}g=v.length>=5&&"lang-"===v.substring(0,5),g&&(!m||typeof m[1]!="string")&&(g=!1,v=N),g||(c[d]=v)}var w=f;f+=d.length;if(!g)a.push(u+w,v);else{var E=m[1],x=d.indexOf(E),T=x+E.length;m[2]&&(T=d.length-m[2].length,x=T-E.length);var C=v.substring(5);_(u+w,d.substring(0,x),s,a),_(u+w+x,E,U(C,E),a),_(u+w+T,d.substring(T),s,a)}}e.decorations=a};return s}function B(e){var t=[],n=[];e.tripleQuotedStrings?t.push([m,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]):e.multiLineStrings?t.push([m,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):t.push([m,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]),e.verbatimStrings&&n.push([m,/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var r=e.hashComments;r&&(e.cStyleComments?(r>1?t.push([y,/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):t.push([y,/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),n.push([m,/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):t.push([y,/^#[^\r\n]*/,null,"#"])),e.cStyleComments&&(n.push([y,/^\/\/[^\r\n]*/,null]),n.push([y,/^\/\*[\s\S]*?(?:\*\/|$)/,null]));var i=e.regexLiterals;if(i){var s=i>1?"":"\n\r",o=s?".":"[\\S\\s]",u="/(?=[^/*"+s+"])"+"(?:[^/\\x5B\\x5C"+s+"]"+"|\\x5C"+o+"|\\x5B(?:[^\\x5C\\x5D"+s+"]"+"|\\x5C"+o+")*(?:\\x5D|$))+"+"/";n.push(["lang-regex",RegExp("^"+A+"("+u+")")])}var a=e.types;a&&n.push([b,a]);var f=(""+e.keywords).replace(/^ | $/g,"");f.length&&n.push([g,new RegExp("^(?:"+f.replace(/[\s,]+/g,"|")+")\\b"),null]),t.push([S,/^\s+/,null," \r\n	 "]);var l="^.[^\\s\\w.$@'\"`/\\\\]*";return e.regexLiterals&&(l+="(?!s*/)"),n.push([w,/^@[a-z_$][a-z_$@0-9]*/i,null],[b,/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],[S,/^[a-z_$][a-z_$@0-9]*/i,null],[w,new RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*","i"),null,"0123456789"],[S,/^\\[\s\S]?/,null],[E,new RegExp(l),null]),H(t,n)}function F(e,t,n){function a(e){var t=e.nodeType;if(t==1&&!r.test(e.className))if("br"===e.nodeName)f(e),e.parentNode&&e.parentNode.removeChild(e);else for(var o=e.firstChild;o;o=o.nextSibling)a(o);else if((t==3||t==4)&&n){var u=e.nodeValue,l=u.match(i);if(l){var c=u.substring(0,l.index);e.nodeValue=c;var h=u.substring(l.index+l[0].length);if(h){var p=e.parentNode;p.insertBefore(s.createTextNode(h),e.nextSibling)}f(e),c||e.parentNode.removeChild(e)}}}function f(e){function t(e,n){var r=n?e.cloneNode(!1):e,i=e.parentNode;if(i){var s=t(i,1),o=e.nextSibling;s.appendChild(r);for(var u=o;u;u=o)o=u.nextSibling,s.appendChild(u)}return r}while(!e.nextSibling){e=e.parentNode;if(!e)return}var n=t(e.nextSibling,0);for(var r;(r=n.parentNode)&&r.nodeType===1;)n=r;u.push(n)}var r=/(?:^|\s)nocode(?:\s|$)/,i=/\r\n?|\n/,s=e.ownerDocument,o=s.createElement("li");while(e.firstChild)o.appendChild(e.firstChild);var u=[o];for(var l=0;l<u.length;++l)a(u[l]);t===(t|0)&&u[0].setAttribute("value",t);var c=s.createElement("ol");c.className="linenums";var h=Math.max(0,t-1|0)||0;for(var l=0,p=u.length;l<p;++l)o=u[l],o.className="L"+(l+h)%10,o.firstChild||o.appendChild(s.createTextNode(" ")),c.appendChild(o);e.appendChild(c)}function I(e){var t=/\bMSIE\s(\d+)/.exec(navigator.userAgent);t=t&&+t[1]<=8;var n=/\n/g,r=e.sourceCode,i=r.length,s=0,o=e.spans,u=o.length,a=0,f=e.decorations,l=f.length,c=0;f[l]=i;var h,p;for(p=h=0;p<l;)f[p]!==f[p+2]?(f[h++]=f[p++],f[h++]=f[p++]):p+=2;l=h;for(p=h=0;p<l;){var d=f[p],v=f[p+1],m=p+2;while(m+2<=l&&f[m+1]===v)m+=2;f[h++]=d,f[h++]=v,p=m}l=f.length=h;var g=e.sourceNode,y;g&&(y=g.style.display,g.style.display="none");try{var b=null;while(a<u){var w=o[a],E=o[a+2]||i,S=f[c+2]||i,m=Math.min(E,S),x=o[a+1],T;if(x.nodeType!==1&&(T=r.substring(s,m))){t&&(T=T.replace(n,"\r")),x.nodeValue=T;var N=x.ownerDocument,C=N.createElement("span");C.className=f[c+1];var k=x.parentNode;k.replaceChild(C,x),C.appendChild(x),s<E&&(o[a+1]=x=N.createTextNode(r.substring(m,E)),k.insertBefore(x,C.nextSibling))}s=m,s>=E&&(a+=2),s>=S&&(c+=2)}}finally{g&&(g.style.display=y)}}function R(t,n){for(var r=n.length;--r>=0;){var i=n[r];q.hasOwnProperty(i)?e.console&&console.warn("cannot override language handler %s",i):q[i]=t}}function U(e,t){if(!e||!q.hasOwnProperty(e))e=/^\s*</.test(t)?"default-markup":"default-code";return q[e]}function z(t){var n=t.langExtension;try{var r=M(t.sourceNode,t.pre),i=r.sourceCode;t.sourceCode=i,t.spans=r.spans,t.basePos=0,U(n,i)(t),I(t)}catch(s){e.console&&console.log(s&&s.stack||s)}}function W(e,t,n){var r=document.createElement("div");r.innerHTML="<pre>"+e+"</pre>",r=r.firstChild,n&&F(r,n,!0);var i={langExtension:t,numberLines:n,sourceNode:r,pre:1};return z(i),r.innerHTML}function X(t,n){function s(e){return r.getElementsByTagName(e)}function E(){var n=e.PR_SHOULD_USE_CONTINUATION?c.now()+250:Infinity;for(;h<u.length&&c.now()<n;h++){var r=u[h],s=w;for(var o=r;o=o.previousSibling;){var a=o.nodeType,f=(a===7||a===8)&&o.nodeValue;if(f?!/^\??prettify\b/.test(f):a!==3||/\S/.test(o.nodeValue))break;if(f){s={},f.replace(/\b(\w+)=([\w:.%+-]+)/g,function(e,t,n){s[t]=n});break}}var l=r.className;if((s!==w||v.test(l))&&!m.test(l)){var S=!1;for(var x=r.parentNode;x;x=x.parentNode){var T=x.tagName;if(b.test(T)&&x.className&&v.test(x.className)){S=!0;break}}if(!S){r.className+=" prettyprinted";var N=s.lang;if(!N){N=l.match(d);var C;!N&&(C=P(r))&&y.test(C.tagName)&&(N=C.className.match(d)),N&&(N=N[1])}var k;if(g.test(r.tagName))k=1;else{var L=r.currentStyle,A=i.defaultView,O=L?L.whiteSpace:A&&A.getComputedStyle?A.getComputedStyle(r,null).getPropertyValue("white-space"):0;k=O&&"pre"===O.substring(0,3)}var M=s.linenums;(M=M==="true"||+M)||(M=l.match(/\blinenums\b(?::(\d+))?/),M=M?M[1]&&M[1].length?+M[1]:!0:!1),M&&F(r,M,k),p={langExtension:N,sourceNode:r,numberLines:M,pre:k},z(p)}}}h<u.length?setTimeout(E,250):"function"==typeof t&&t()}var r=n||document.body,i=r.ownerDocument||document,o=[s("pre"),s("code"),s("xmp")],u=[];for(var a=0;a<o.length;++a)for(var f=0,l=o[a].length;f<l;++f)u.push(o[a][f]);o=null;var c=Date;c.now||(c={now:function(){return+(new Date)}});var h=0,p,d=/\blang(?:uage)?-([\w.]+)(?!\S)/,v=/\bprettyprint\b/,m=/\bprettyprinted\b/,g=/pre|xmp/i,y=/^code$/i,b=/^(?:pre|code|xmp)$/i,w={};E()}var e=window,t=["break,continue,do,else,for,if,return,while"],n=[t,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],r=[n,"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],i=[r,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],s=[r,"abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],o=[s,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],u="all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",a=[r,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],f="caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",l=[t,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],c=[t,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],h=[t,"as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],p=[t,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],d=[i,o,a,f,l,c,p],v=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,m="str",g="kwd",y="com",b="typ",w="lit",E="pun",S="pln",x="tag",T="dec",N="src",C="atn",k="atv",L="nocode",A="(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*",D=/\S/,j=B({keywords:d,hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),q={};R(j,["default-code"]),R(H([],[[S,/^[^<?]+/],[T,/^<!\w[^>]*(?:>|$)/],[y,/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],[E,/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]),R(H([[S,/^[\s]+/,null," 	\r\n"],[k,/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[[x,/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],[C,/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[E,/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]),R(H([],[[k,/^[\s\S]+/]]),["uq.val"]),R(B({keywords:i,hashComments:!0,cStyleComments:!0,types:v}),["c","cc","cpp","cxx","cyc","m"]),R(B({keywords:"null,true,false"}),["json"]),R(B({keywords:o,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:v}),["cs"]),R(B({keywords:s,cStyleComments:!0}),["java"]),R(B({keywords:p,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]),R(B({keywords:l,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]),R(B({keywords:f,hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]),R(B({keywords:c,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]),R(B({keywords:a,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]),R(B({keywords:u,hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),R(B({keywords:h,cStyleComments:!0,multilineStrings:!0}),["rc","rs","rust"]),R(H([],[[m,/^[\s\S]+/]]),["regex"]);var V=e.PR={createSimpleLexer:H,registerLangHandler:R,sourceDecorator:B,PR_ATTRIB_NAME:C,PR_ATTRIB_VALUE:k,PR_COMMENT:y,PR_DECLARATION:T,PR_KEYWORD:g,PR_LITERAL:w,PR_NOCODE:L,PR_PLAIN:S,PR_PUNCTUATION:E,PR_SOURCE:N,PR_STRING:m,PR_TAG:x,PR_TYPE:b,prettyPrintOne:IN_GLOBAL_SCOPE?e.prettyPrintOne=W:prettyPrintOne=W,prettyPrint:prettyPrint=IN_GLOBAL_SCOPE?e.prettyPrint=X:prettyPrint=X};typeof define=="function"&&define.amd&&define("google-code-prettify",[],function(){return V})})()
//lang-css
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[ \t\r\n\f]+/,null," 	\r\n\f"]],[[PR.PR_STRING,/^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/,null],[PR.PR_STRING,/^\'(?:[^\n\r\f\\\']|\\(?:\r\n?|\n|\f)|\\[\s\S])*\'/,null],["lang-css-str",/^url\(([^\)\"\']+)\)/i],[PR.PR_KEYWORD,/^(?:url|rgb|\!important|@import|@page|@media|@charset|inherit)(?=[^\-\w]|$)/i,null],["lang-css-kw",/^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i],[PR.PR_COMMENT,/^\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\//],[PR.PR_COMMENT,/^(?:<!--|-->)/],[PR.PR_LITERAL,/^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i],[PR.PR_LITERAL,/^#(?:[0-9a-f]{3}){1,2}\b/i],[PR.PR_PLAIN,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i],[PR.PR_PUNCTUATION,/^[^\s\w\'\"]+/]]),["css"]),PR.registerLangHandler(PR.createSimpleLexer([],[[PR.PR_KEYWORD,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i]]),["css-kw"]),PR.registerLangHandler(PR.createSimpleLexer([],[[PR.PR_STRING,/^[^\)\"\']+/]]),["css-str"])

//jquery.qrcode
;(function(r){r.fn.qrcode=function(h){var s;function u(a){this.mode=s;this.data=a}function o(a,c){this.typeNumber=a;this.errorCorrectLevel=c;this.modules=null;this.moduleCount=0;this.dataCache=null;this.dataList=[]}function q(a,c){if(void 0==a.length)throw Error(a.length+"/"+c);for(var d=0;d<a.length&&0==a[d];)d++;this.num=Array(a.length-d+c);for(var b=0;b<a.length-d;b++)this.num[b]=a[b+d]}function p(a,c){this.totalCount=a;this.dataCount=c}function t(){this.buffer=[];this.length=0}u.prototype={getLength:function(){return this.data.length},
write:function(a){for(var c=0;c<this.data.length;c++)a.put(this.data.charCodeAt(c),8)}};o.prototype={addData:function(a){this.dataList.push(new u(a));this.dataCache=null},isDark:function(a,c){if(0>a||this.moduleCount<=a||0>c||this.moduleCount<=c)throw Error(a+","+c);return this.modules[a][c]},getModuleCount:function(){return this.moduleCount},make:function(){if(1>this.typeNumber){for(var a=1,a=1;40>a;a++){for(var c=p.getRSBlocks(a,this.errorCorrectLevel),d=new t,b=0,e=0;e<c.length;e++)b+=c[e].dataCount;
for(e=0;e<this.dataList.length;e++)c=this.dataList[e],d.put(c.mode,4),d.put(c.getLength(),j.getLengthInBits(c.mode,a)),c.write(d);if(d.getLengthInBits()<=8*b)break}this.typeNumber=a}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(a,c){this.moduleCount=4*this.typeNumber+17;this.modules=Array(this.moduleCount);for(var d=0;d<this.moduleCount;d++){this.modules[d]=Array(this.moduleCount);for(var b=0;b<this.moduleCount;b++)this.modules[d][b]=null}this.setupPositionProbePattern(0,0);this.setupPositionProbePattern(this.moduleCount-
7,0);this.setupPositionProbePattern(0,this.moduleCount-7);this.setupPositionAdjustPattern();this.setupTimingPattern();this.setupTypeInfo(a,c);7<=this.typeNumber&&this.setupTypeNumber(a);null==this.dataCache&&(this.dataCache=o.createData(this.typeNumber,this.errorCorrectLevel,this.dataList));this.mapData(this.dataCache,c)},setupPositionProbePattern:function(a,c){for(var d=-1;7>=d;d++)if(!(-1>=a+d||this.moduleCount<=a+d))for(var b=-1;7>=b;b++)-1>=c+b||this.moduleCount<=c+b||(this.modules[a+d][c+b]=
0<=d&&6>=d&&(0==b||6==b)||0<=b&&6>=b&&(0==d||6==d)||2<=d&&4>=d&&2<=b&&4>=b?!0:!1)},getBestMaskPattern:function(){for(var a=0,c=0,d=0;8>d;d++){this.makeImpl(!0,d);var b=j.getLostPoint(this);if(0==d||a>b)a=b,c=d}return c},createMovieClip:function(a,c,d){a=a.createEmptyMovieClip(c,d);this.make();for(c=0;c<this.modules.length;c++)for(var d=1*c,b=0;b<this.modules[c].length;b++){var e=1*b;this.modules[c][b]&&(a.beginFill(0,100),a.moveTo(e,d),a.lineTo(e+1,d),a.lineTo(e+1,d+1),a.lineTo(e,d+1),a.endFill())}return a},
setupTimingPattern:function(){for(var a=8;a<this.moduleCount-8;a++)null==this.modules[a][6]&&(this.modules[a][6]=0==a%2);for(a=8;a<this.moduleCount-8;a++)null==this.modules[6][a]&&(this.modules[6][a]=0==a%2)},setupPositionAdjustPattern:function(){for(var a=j.getPatternPosition(this.typeNumber),c=0;c<a.length;c++)for(var d=0;d<a.length;d++){var b=a[c],e=a[d];if(null==this.modules[b][e])for(var f=-2;2>=f;f++)for(var i=-2;2>=i;i++)this.modules[b+f][e+i]=-2==f||2==f||-2==i||2==i||0==f&&0==i?!0:!1}},setupTypeNumber:function(a){for(var c=
j.getBCHTypeNumber(this.typeNumber),d=0;18>d;d++){var b=!a&&1==(c>>d&1);this.modules[Math.floor(d/3)][d%3+this.moduleCount-8-3]=b}for(d=0;18>d;d++)b=!a&&1==(c>>d&1),this.modules[d%3+this.moduleCount-8-3][Math.floor(d/3)]=b},setupTypeInfo:function(a,c){for(var d=j.getBCHTypeInfo(this.errorCorrectLevel<<3|c),b=0;15>b;b++){var e=!a&&1==(d>>b&1);6>b?this.modules[b][8]=e:8>b?this.modules[b+1][8]=e:this.modules[this.moduleCount-15+b][8]=e}for(b=0;15>b;b++)e=!a&&1==(d>>b&1),8>b?this.modules[8][this.moduleCount-
b-1]=e:9>b?this.modules[8][15-b-1+1]=e:this.modules[8][15-b-1]=e;this.modules[this.moduleCount-8][8]=!a},mapData:function(a,c){for(var d=-1,b=this.moduleCount-1,e=7,f=0,i=this.moduleCount-1;0<i;i-=2)for(6==i&&i--;;){for(var g=0;2>g;g++)if(null==this.modules[b][i-g]){var n=!1;f<a.length&&(n=1==(a[f]>>>e&1));j.getMask(c,b,i-g)&&(n=!n);this.modules[b][i-g]=n;e--; -1==e&&(f++,e=7)}b+=d;if(0>b||this.moduleCount<=b){b-=d;d=-d;break}}}};o.PAD0=236;o.PAD1=17;o.createData=function(a,c,d){for(var c=p.getRSBlocks(a,
c),b=new t,e=0;e<d.length;e++){var f=d[e];b.put(f.mode,4);b.put(f.getLength(),j.getLengthInBits(f.mode,a));f.write(b)}for(e=a=0;e<c.length;e++)a+=c[e].dataCount;if(b.getLengthInBits()>8*a)throw Error("code length overflow. ("+b.getLengthInBits()+">"+8*a+")");for(b.getLengthInBits()+4<=8*a&&b.put(0,4);0!=b.getLengthInBits()%8;)b.putBit(!1);for(;!(b.getLengthInBits()>=8*a);){b.put(o.PAD0,8);if(b.getLengthInBits()>=8*a)break;b.put(o.PAD1,8)}return o.createBytes(b,c)};o.createBytes=function(a,c){for(var d=
0,b=0,e=0,f=Array(c.length),i=Array(c.length),g=0;g<c.length;g++){var n=c[g].dataCount,h=c[g].totalCount-n,b=Math.max(b,n),e=Math.max(e,h);f[g]=Array(n);for(var k=0;k<f[g].length;k++)f[g][k]=255&a.buffer[k+d];d+=n;k=j.getErrorCorrectPolynomial(h);n=(new q(f[g],k.getLength()-1)).mod(k);i[g]=Array(k.getLength()-1);for(k=0;k<i[g].length;k++)h=k+n.getLength()-i[g].length,i[g][k]=0<=h?n.get(h):0}for(k=g=0;k<c.length;k++)g+=c[k].totalCount;d=Array(g);for(k=n=0;k<b;k++)for(g=0;g<c.length;g++)k<f[g].length&&
(d[n++]=f[g][k]);for(k=0;k<e;k++)for(g=0;g<c.length;g++)k<i[g].length&&(d[n++]=i[g][k]);return d};s=4;for(var j={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,
78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(a){for(var c=a<<10;0<=j.getBCHDigit(c)-j.getBCHDigit(j.G15);)c^=j.G15<<j.getBCHDigit(c)-j.getBCHDigit(j.G15);return(a<<10|c)^j.G15_MASK},getBCHTypeNumber:function(a){for(var c=a<<12;0<=j.getBCHDigit(c)-
j.getBCHDigit(j.G18);)c^=j.G18<<j.getBCHDigit(c)-j.getBCHDigit(j.G18);return a<<12|c},getBCHDigit:function(a){for(var c=0;0!=a;)c++,a>>>=1;return c},getPatternPosition:function(a){return j.PATTERN_POSITION_TABLE[a-1]},getMask:function(a,c,d){switch(a){case 0:return 0==(c+d)%2;case 1:return 0==c%2;case 2:return 0==d%3;case 3:return 0==(c+d)%3;case 4:return 0==(Math.floor(c/2)+Math.floor(d/3))%2;case 5:return 0==c*d%2+c*d%3;case 6:return 0==(c*d%2+c*d%3)%2;case 7:return 0==(c*d%3+(c+d)%2)%2;default:throw Error("bad maskPattern:"+
a);}},getErrorCorrectPolynomial:function(a){for(var c=new q([1],0),d=0;d<a;d++)c=c.multiply(new q([1,l.gexp(d)],0));return c},getLengthInBits:function(a,c){if(1<=c&&10>c)switch(a){case 1:return 10;case 2:return 9;case s:return 8;case 8:return 8;default:throw Error("mode:"+a);}else if(27>c)switch(a){case 1:return 12;case 2:return 11;case s:return 16;case 8:return 10;default:throw Error("mode:"+a);}else if(41>c)switch(a){case 1:return 14;case 2:return 13;case s:return 16;case 8:return 12;default:throw Error("mode:"+
a);}else throw Error("type:"+c);},getLostPoint:function(a){for(var c=a.getModuleCount(),d=0,b=0;b<c;b++)for(var e=0;e<c;e++){for(var f=0,i=a.isDark(b,e),g=-1;1>=g;g++)if(!(0>b+g||c<=b+g))for(var h=-1;1>=h;h++)0>e+h||c<=e+h||0==g&&0==h||i==a.isDark(b+g,e+h)&&f++;5<f&&(d+=3+f-5)}for(b=0;b<c-1;b++)for(e=0;e<c-1;e++)if(f=0,a.isDark(b,e)&&f++,a.isDark(b+1,e)&&f++,a.isDark(b,e+1)&&f++,a.isDark(b+1,e+1)&&f++,0==f||4==f)d+=3;for(b=0;b<c;b++)for(e=0;e<c-6;e++)a.isDark(b,e)&&!a.isDark(b,e+1)&&a.isDark(b,e+
2)&&a.isDark(b,e+3)&&a.isDark(b,e+4)&&!a.isDark(b,e+5)&&a.isDark(b,e+6)&&(d+=40);for(e=0;e<c;e++)for(b=0;b<c-6;b++)a.isDark(b,e)&&!a.isDark(b+1,e)&&a.isDark(b+2,e)&&a.isDark(b+3,e)&&a.isDark(b+4,e)&&!a.isDark(b+5,e)&&a.isDark(b+6,e)&&(d+=40);for(e=f=0;e<c;e++)for(b=0;b<c;b++)a.isDark(b,e)&&f++;a=Math.abs(100*f/c/c-50)/5;return d+10*a}},l={glog:function(a){if(1>a)throw Error("glog("+a+")");return l.LOG_TABLE[a]},gexp:function(a){for(;0>a;)a+=255;for(;256<=a;)a-=255;return l.EXP_TABLE[a]},EXP_TABLE:Array(256),
LOG_TABLE:Array(256)},m=0;8>m;m++)l.EXP_TABLE[m]=1<<m;for(m=8;256>m;m++)l.EXP_TABLE[m]=l.EXP_TABLE[m-4]^l.EXP_TABLE[m-5]^l.EXP_TABLE[m-6]^l.EXP_TABLE[m-8];for(m=0;255>m;m++)l.LOG_TABLE[l.EXP_TABLE[m]]=m;q.prototype={get:function(a){return this.num[a]},getLength:function(){return this.num.length},multiply:function(a){for(var c=Array(this.getLength()+a.getLength()-1),d=0;d<this.getLength();d++)for(var b=0;b<a.getLength();b++)c[d+b]^=l.gexp(l.glog(this.get(d))+l.glog(a.get(b)));return new q(c,0)},mod:function(a){if(0>
this.getLength()-a.getLength())return this;for(var c=l.glog(this.get(0))-l.glog(a.get(0)),d=Array(this.getLength()),b=0;b<this.getLength();b++)d[b]=this.get(b);for(b=0;b<a.getLength();b++)d[b]^=l.gexp(l.glog(a.get(b))+c);return(new q(d,0)).mod(a)}};p.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],
[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,
116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,
43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,
3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,
55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,
45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];p.getRSBlocks=function(a,c){var d=p.getRsBlockTable(a,c);if(void 0==d)throw Error("bad rs block @ typeNumber:"+a+"/errorCorrectLevel:"+c);for(var b=d.length/3,e=[],f=0;f<b;f++)for(var h=d[3*f+0],g=d[3*f+1],j=d[3*f+2],l=0;l<h;l++)e.push(new p(g,j));return e};p.getRsBlockTable=function(a,c){switch(c){case 1:return p.RS_BLOCK_TABLE[4*(a-1)+0];case 0:return p.RS_BLOCK_TABLE[4*(a-1)+1];case 3:return p.RS_BLOCK_TABLE[4*
(a-1)+2];case 2:return p.RS_BLOCK_TABLE[4*(a-1)+3]}};t.prototype={get:function(a){return 1==(this.buffer[Math.floor(a/8)]>>>7-a%8&1)},put:function(a,c){for(var d=0;d<c;d++)this.putBit(1==(a>>>c-d-1&1))},getLengthInBits:function(){return this.length},putBit:function(a){var c=Math.floor(this.length/8);this.buffer.length<=c&&this.buffer.push(0);a&&(this.buffer[c]|=128>>>this.length%8);this.length++}};"string"===typeof h&&(h={text:h});h=r.extend({},{render:"canvas",width:256,height:256,typeNumber:-1,
correctLevel:2,background:"#ffffff",foreground:"#000000"},h);return this.each(function(){var a;if("canvas"==h.render){a=new o(h.typeNumber,h.correctLevel);a.addData(h.text);a.make();var c=document.createElement("canvas");c.width=h.width;c.height=h.height;for(var d=c.getContext("2d"),b=h.width/a.getModuleCount(),e=h.height/a.getModuleCount(),f=0;f<a.getModuleCount();f++)for(var i=0;i<a.getModuleCount();i++){d.fillStyle=a.isDark(f,i)?h.foreground:h.background;var g=Math.ceil((i+1)*b)-Math.floor(i*b),
j=Math.ceil((f+1)*b)-Math.floor(f*b);d.fillRect(Math.round(i*b),Math.round(f*e),g,j)}}else{a=new o(h.typeNumber,h.correctLevel);a.addData(h.text);a.make();c=r("<table></table>").css("width",h.width+"px").css("height",h.height+"px").css("border","0px").css("border-collapse","collapse").css("background-color",h.background);d=h.width/a.getModuleCount();b=h.height/a.getModuleCount();for(e=0;e<a.getModuleCount();e++){f=r("<tr></tr>").css("height",b+"px").appendTo(c);for(i=0;i<a.getModuleCount();i++)r("<td></td>").css("width",
d+"px").css("background-color",a.isDark(e,i)?h.foreground:h.background).appendTo(f)}}a=c;$(a).appendTo(this)})}})($);