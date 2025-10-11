/*
 * jsminify
 */
$(function () {
  // option toggle
  $('.options .btn').click(function () {
    const t = $(this)
    if (t.hasClass('btn-primary')) t.addClass('btn-secondary').removeClass('btn-primary')
    else t.addClass('btn-primary').removeClass('btn-secondary')
  })

  // trigger
  $('.do').click(function () {
    const t = $('.t1')
    const t2 = $('.t2')
    const v = t.val()
    const x = $(this)

    if (!v || x.data('working')) return
    x.data('working', true).text(x.text() + ' working...')
    $.ajax({
      type: 'post',
      url: '/uglify',
      dataType: 'json',
      data: {
        mangle: $('.options [data-opt="mangle"]').hasClass('btn-primary'),
        seajs: $('.options [data-opt="seajs"]').hasClass('btn-primary'),
        src: v
      },
      success: function (res) {
        x.data('working', false).text(x.text().replace(' working...', ''))
        $('.post .err').remove()
        $('.post').prepend('<div class="pdtb err"></div>')
        if (res.errorMsg) ht.alert(res.errorMsg, 'warn', $('.err'))
        else t2.val(res.output)
      }
    })
  })

  // end
})
