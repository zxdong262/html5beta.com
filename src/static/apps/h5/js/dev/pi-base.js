/*!
 * javascript document for http://html5beta.com/
 */

$(function() {

	//globals
	var 
	isTouchDevice = false
	,c = $('#cbg')[0]
	,supportCanvas = c.getContext?true:false
	,isTouchDevice =  ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch
	,bodyW = $('body').width()
	,bodyH = $('body').height()
	,shapesInst = null

	//class replace
	$('.centered').addClass('container')

	//tooltip
	$('[title]').tooltip({
		placement: 'bottom'
	})

	//checknav
	checkNav()

	//loop
	loop(checkResize, 1500)

	//code highlight
	//pre code operation
	var pres = $('pre')
	,codes = $('code')
	,contentEditable = isTouchDevice?'':'contentEditable="true"'
	
	pres.each(function() {
		var t = $(this)
		,ht = t.html().replace(/\\t/g, '    ')
		t.html(ht)
		t.addClass('prettyprint lang-' + t.prop('lang'))
		.wrapInner('<code ' + contentEditable + ' />')
	})
	
	prettyPrint()

	//qrcode
	if(supportCanvas) {
		$('#qr1').qrcode({width: 128, height: 128, text: window.location.href })
	}

	//side nav
	if(!$('#no-sidenav').length) sidenav()

	//shapes animation bg
	if(!$('#no-bubble').length && supportCanvas) {


		shapesInst = new Shapes('#cbg', {})
		shapesInst.methodsPool = ['light']
		resize()
		window.shapesInst = shapesInst
		shapesInst.start()

		$(window).on('resize', resize)

		$('#footer .addBubble').click(function() {
			shapesInst.pushShape({})
		})

		$('#footer .stop').click(function() {
			var th = $(this)
			if(th.hasClass('off')) {
				th.removeClass('off').text('Stop it')
				shapesInst.start()
			}
			else {
				th.addClass('off').text('Continue')
				shapesInst.clearShapes()
				shapesInst.stop()
			}
			
		})
		$('#footer .faster').click(function() {
			shapesInst.opts.step ++
			if(shapesInst.opts.step > 100) shapesInst.opts.step = 100
		})

		var shapes = ['star', 'bubble', 'heart', 'light', 'balloon']
		,actions = shapes.concat(['random'])
		,len = actions.length
		,flag = 2

		$('#footer .fish, .change-shape').click(function() {
			shapesInst.stop()
			var act =  actions[flag]
			if(act !== 'random') shapesInst.methodsPool = [act]
			else shapesInst.methodsPool = shapes
			shapesInst.shapes = []
			shapesInst.start()

			flag = (flag + 1 + len) % len
		})

		//shapes to text
		
		$('.shapes-to-text').click(function() {

			shapesInst.stop()
			clearTimeout(shapesInst.timerHandle0)
			if(shapesInst.methodsPool.length === 1 && shapesInst.methodsPool[0] === 'light') {
				shapesInst.methodsPool = shapes
			}
			
			var text = ('' + Math.random()).slice(2, 6)
			$(this).text(text)
			var tarArr = shapesInst.buildPosArrayFromText(text, {
				fontSize: 100
				,top: 100
			})
			shapesInst.opts.shapeCount = tarArr.length
			shapesInst.opts.minSize = 5
			shapesInst.opts.maxSize = 5
			shapesInst.shapes = []
			shapesInst.start()


			setTimeout(startText, 1000)

			function startText() {

				clearTimeout(shapesInst.timerHandle)

				loop()

				function loop() {

					var th = this
					shapesInst.moveTo(tarArr)
					shapesInst.renderShapes()
					
					shapesInst.timerHandle0 = setTimeout(function() {
						if(shapesInst.arriveTarget) return clearTimeout(shapesInst.timerHandle0)
						loop()
					}, shapesInst.opts.timer)
					
				}
			}

		})

		//end
	}
	else {
		$('.exp').hide()
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

	function resize() {
		var wr = shapesInst.wrap
		,w = wr.width()
		,h = wr.height()
		wr.prop({ width: w, height: h })
		shapesInst.width = w
		shapesInst.height = h
		if(w < 768) {
			shapesInst.stop()
			clearTimeout(shapesInst.timerHandle0)
		}
	}

	//check resize
	function checkResize() {
		var b = $('body')
		,w = b.width()
		,h = b.height()
		if(bodyW !== w || bodyH !== h) {
			resize()
			bodyW = w
			bodyH = h
		}
	}

	//checkNav()
	function checkNav() {
		var href = location.href.split('#')[0]
		if(href === h5.host + '/') href = h5.host
		var tar = $('#nav a[href="' + href + '"]').parent()
		if(tar.parents('li').length) tar.parents('li').addClass('active')
		else tar.addClass('active')
	}

	//loop
	function loop(func, timer) {
		var 
		x
		,todo = function() {
			func()
			x = setTimeout(todo, timer)
		}
		x = setTimeout(todo, timer)
	}

	//debug
	function debug(w) {
		$('#debug').prepend('<p>' + w + '</p>')
		if($('#debug').children().size() > 2) $('#debug').children().last().remove()
	}

	//end
})