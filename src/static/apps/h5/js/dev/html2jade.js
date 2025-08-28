/*
 * html2jade
 */
$(function() {

	//trigger
	$('.do').click(function() {
		var t = $('.t1')
		,t2 = $('.t2')
		,v = t.val()
		,x = $(this)

		if(!v || x.data('working')) return
		x.data('working', true).text(x.text() + ' working...')
		$.ajax({
			type: 'post'
			,url: '/html2jade'
			,dataType: 'json'
			,data: {
				src: v 
			}
			,success: function(res) {
				x.data('working', false).text(x.text().replace(' working...', ''))
				$('.post .err').remove()
				$('.post').prepend('<div class="pdtb err"></div>')
				if(res.errorMsg) ht.alert(res.errorMsg, 'warn', $('.err'))
				else t2.val(res.output)
			}
		})
	})

	//end
})