/*!
 * javascript document for http://html5beta.com/
 */

$(function () {
  // globals
  var
    isTouchDevice = false
  const c = $('#xbg')[0]
  const supportCanvas = !!c.getContext
  var isTouchDevice = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch
  let bodyW = $('body').width()
  let bodyH = $('body').height()
  const shapesInst = null

  // class replace
  $('.centered').addClass('container')

  // tooltip
  $('[title]').tooltip({
    placement: 'bottom'
  })

  // checknav
  checkNav()

  // loop
  loop(checkResize, 1500)

  // code highlight
  // pre code operation
  const pres = $('pre')
  const codes = $('code')
  const contentEditable = isTouchDevice ? '' : 'contentEditable="true"'
  let uni

  pres.each(function () {
    const t = $(this)
    const ht = t.html().replace(/\\t/g, '    ')
    t.html(ht)
    t.addClass('prettyprint lang-' + t.prop('lang'))
      .wrapInner('<code ' + contentEditable + ' />')
  })

  prettyPrint()

  // qrcode
  if (supportCanvas) {
    $('#qr1').qrcode({ width: 128, height: 128, text: window.location.href })
    if ($(window).width() > 768) {
      uni = new Universe({
        id: 'cbg',
        size: 20,
        container: document.getElementById('bg'),
        map: THREE.ImageUtils.loadTexture(h5.host + '/res/star.png')
      })
    }
  }

  // side nav
  if (!$('#no-sidenav').length) sidenav()

  // sidenav()
  function sidenav () {
    const flag = $('body').hasClass('home') || $('body').hasClass('tag')
    const res = flag ? $('h1, #footer-widgets h3, .post-title h2') : $('h1, #footer-widgets h3, h2')
    let ht = '<div id="sidenav"><div id="sidenav-inner"><ul>'
    res.each(function (i, ele) {
      const t = $(this)
      t.before('<a href="#" name="nav-' + i + '"></a>')
      ht += '<li><a href="#nav-' + i + '">' + t.text() + '</a></li>'
    })
    $('#header a').prop('name', 'top')
    $('body').append(ht + '</ul><p><a href="#top">&uarr;top</a></p></div></div>')
    checkSideNavWidth()

    // event handle
    $('#sidenav').hover(function () {
      $(this).addClass('hover')
      checkSideNavWidth()
    }, function () {
      $(this).removeClass('hover')
      $('#sidenav').removeClass('scroll')
    })
  }

  // checkSideNavWidth()
  function checkSideNavWidth () {
    const w = $(window).height() * 0.9
    sn = $('#sidenav-inner').height()
    if (sn > w) $('#sidenav').addClass('scroll')
    else $('#sidenav').removeClass('scroll')
  }

  function resize () {
    $(window).trigger('resize')
  }

  // check resize
  function checkResize () {
    if ($(window).width() < 768) {
      uni = null
      $('#cbg').remove()
      $('body').removeClass('theme-dark')
    } else if (uni) $('body').addClass('theme-dark')
    const b = $('body')
    const w = b.width()
    const h = b.height()
    if (bodyW !== w || bodyH !== h) {
      resize()
      bodyW = w
      bodyH = h
    }
  }

  // checkNav()
  function checkNav () {
    let href = location.href.split('#')[0]
    if (href === h5.host + '/') href = h5.host
    const tar = $('#nav a[href="' + href + '"]').parent()
    if (tar.parents('li').length) tar.parents('li').addClass('active')
    else tar.addClass('active')
  }

  // loop
  function loop (func, timer) {
    let
      x
    const todo = function () {
      func()
      x = setTimeout(todo, timer)
    }
    x = setTimeout(todo, timer)
  }

  // debug
  function debug (w) {
    $('#debug').prepend('<p>' + w + '</p>')
    if ($('#debug').children().size() > 2) $('#debug').children().last().remove()
  }

  // end
})
