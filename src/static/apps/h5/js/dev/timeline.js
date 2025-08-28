/**
 * JavaScript Document
 * by ZHAO Xudong,zxdong@gmail.com
 * for  http://html5beta.com/timeline/
 */
 
$(document).ready(function() {
	initTimelines()
})

//initTimelines()
function initTimelines() {
	
	var isTouchDevice =  ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch
	,link = location.href.split('#')[1]

	//open link at new page
	$('.tab-content a').each(function() {
		var t = $(this)
		,href = t.prop('href')
		if(href !== 'javascript:;') t.prop('target', '_blank')
	})

	//time content init
	$('#timeline .time-sections .times').each(function() {
		var 
		b = $(this),
		t = b.children().eq(0),
		p = b.parent()
		t.after('<span class="arr iblock">&raquo</span>')
		if(p.hasClass('compact')) b.append('<a class="iblock expand on" href="javascript:">&dArr;</a>')
		else b.append('<a class="iblock expand" href="javascript:">&lArr;</a>')
	})

	$('#timeline .time-section.compact').each(function() {
		$(this).children('.projs').addClass('hide2')
		$(this).children('.desc').addClass('hide2')
	})
	
	//expand btn
	$('#timeline .time-sections').on('click','.times',function() {
		var t = $(this).find('a.expand')
		if(t.hasClass('on')) {
			t.removeClass('on').html('&lArr;')
		    t.parent().siblings().slideDown(500)
		}
		else {
			t.addClass('on').html('&dArr;')
			t.parent().siblings().slideUp(500)
		}
	})
	
	//lang toggle
	$('.btn-lang').click(function() {
		var t = $(this)
		if(t.children(':visible').text() !== '中文') {
			$('.lang.cn').addClass('hide')
			$('.lang.en').removeClass('hide')
		}
		else {
			$('.lang.en').addClass('hide')
			$('.lang.cn').removeClass('hide')
		}
	})
	
	//tab
	$('#timeline .tabs .tab').click(function() {
		var r = $(this)
		,cls1 = r.prop('id').slice(4)
		,c = $('#timeline')
		if(r.hasClass('on')) return
		r.addClass('on')
		.siblings('.tab').removeClass('on')
		c.children('.' + cls1).removeClass('hide').siblings('.tab-content').addClass('hide')
	})

	//hash link
	$('a.tab[href="#' + link + '"]').trigger('click')

	//end
}
