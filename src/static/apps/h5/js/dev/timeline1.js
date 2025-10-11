/**
 * JavaScript Document
 * by ZHAO Xudong,zxdong@gmail.com
 */

$(document).ready(function () {
  const isTouchDevice = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch
  const arr = location.href.split('#')
  let link = arr[1]
  let count = 0

  $('.nav-tabs a').each(function () {
    const t = $(this)
    const h1 = t.prop('href').split('#')[1]
    if (h1 == link) count++
  })

  if (!count) link = 'about-me'

  // tab
  $('.nav-tabs a').click(function () {
    const r = $(this)
    const p = r.parent()
    const href = r.prop('href').split('#')[1]

    if (r.hasClass('active')) return
    $('.nav-tabs a').removeClass('active')
    r.addClass('active')
    $('.tab-content[data-tab="' + href + '"]').removeClass('hide').siblings('.tab-content').addClass('hide')
  })

  // hash link
  $('.nav-tabs a[href="#' + link + '"]').trigger('click')

  $('a.more').click(function () {
    $('.nav-tabs a[href="#open-sourced"]').trigger('click')
  })

  // open link at new page
  $('.tab-content a, .left-panel a').each(function () {
    const t = $(this)
    const href = t.prop('href')
    if (href !== 'javascript:;') t.prop('target', '_blank')
  })

  // time content init
  $('.time-sections .times').each(function () {
    const
      b = $(this)
    const t = b.children().eq(0)
    const p = b.parent()
    t.after('<span class="arr iblock">&raquo</span>')
    if (p.hasClass('compact')) b.append('<a class="iblock expand on" href="javascript:">&dArr;</a>')
    else b.append('<a class="iblock expand" href="javascript:">&lArr;</a>')
  })

  $('.time-section.compact').each(function () {
    $(this).children('.projs').addClass('hide2')
    $(this).children('.desc').addClass('hide2')
  })

  // expand btn
  $('.time-sections').on('click', '.times', function () {
    const t = $(this).find('a.expand')
    if (t.hasClass('on')) {
      t.removeClass('on').html('&lArr;')
		    t.parent().siblings().slideDown(500)
    } else {
      t.addClass('on').html('&dArr;')
      t.parent().siblings().slideUp(500)
    }
  })

  // end
})
