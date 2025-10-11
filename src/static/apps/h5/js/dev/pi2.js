/*!
 * javascript document for http://html5beta.com/
 */

// function start
$(document).ready(function () {
  // globals
  var
    isTouchDevice = false
  const c = $('#cbg')[0]
  const supportCanvas = !!c.getContext
  var isTouchDevice = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch
  let bodyW = $('body').width()
  let bodyH = $('body').height()

  debug('support canvas: ' + supportCanvas)

  // ie6 warning
  if ($('body').hasClass('lt-ie9')) {
    ie6fix()
    return false
  }

  // width adjust
  resize()
  loop(checkResize, 1500)

  if ($('.post-share').length) initShare()

  // side nav
  if (!isTouchDevice && !$('#no-sidenav').length) sidenav()

  // pre code operation
  const pres = $('pre')
  const codes = $('code')
  const contentEditable = isTouchDevice ? '' : 'contentEditable="true"'

  pres.each(function () {
    // console.log($(this).html())
    const t = $(this)
    const ht = t.html().replace(/\\t/g, '    ')
    console.log($(this).html().indexOf('\t'))
    t.html(ht)
    // console.log(ht)
    t.addClass('prettyprint lang-' + t.prop('lang'))
      .wrapInner('<code ' + contentEditable + ' />')
  })

  codes.each(function () {
    const t = $(this)
    t.addClass('prettyprint lang-' + t.prop('lang'))
  })

  // highlight
  prettyPrint()

  // qrcode
  if (supportCanvas) {
    $('#debug').before('<div class="pdtb aligncenter" id="qr"></div>')
    $('#qr').qrcode({ width: 128, height: 128, text: window.location.href })
  }

  // canvas bubble

  debug('touch device:' + isTouchDevice)
  if (supportCanvas && !isTouchDevice && !$('#no-bubble').length) {
    var bubbleInst = new Bubbles({}, $('#cbg'))
    window.bubbleInst = bubbleInst
    $(window).on('resize', function () {
      const wr = bubbleInst.wrapper
      const w = parseInt(wr.width(), 10)
      const h = parseInt(wr.height(), 10)
      wr.prop({ width: w, height: h })
      bubbleInst.width = w
      bubbleInst.height = h
      bubbleInst.init()
    })
    $('#footer .addBubble').click(function () {
      bubbleInst.num++
      bubbleInst.initShape()
    })
    $('#footer .stop').click(function () {
      const th = $(this)
      if (th.hasClass('off')) {
        th.removeClass('off').text('Stop it')
        bubbleInst.on = true
      } else {
        th.addClass('off').text('Continue')
        bubbleInst.clearShapes()
        bubbleInst.on = false
      }
    })
    $('#footer .faster').click(function () {
      bubbleInst.step++
      if (bubbleInst.step > 100) bubbleInst.step = 100
    })
    $('#footer .fish').click(function () {
      const res = $(this)
      if (res.hasClass('on')) {
        bubbleInst.isHeart = false
        res.removeClass('on')
        res.text('I am ?')
      } else {
        bubbleInst.isHeart = true
        res.addClass('on')
        res.text('I am not ?')
      }
    })
  } else {
    $('#footer .exp').hide()
  }

  // resize
  function resize () {
    var w = $('body').width()
    var h = $('body').height()
    debug('body width: ' + w + ', height: ' + h)
    if (!bubbleInst) return
    const wr = bubbleInst.wrapper
    var w = parseInt(wr.width(), 10)
    var h = parseInt(wr.height(), 10)
    wr.prop({ width: w, height: h })
    bubbleInst.width = w
    bubbleInst.height = h
    bubbleInst.init()
  }

  // check resize
  function checkResize () {
    const b = $('body')
    const w = b.width()
    const h = b.height()
    if (bodyW !== w || bodyH !== h) {
      resize()
      bodyW = w
      bodyH = h
    }
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

  // initShare()
  function initShare () {
    const link = encodeURIComponent(location.href)
    const title = encodeURIComponent(document.title)
    $('.post-share .social a').each(function () {
      const t = $(this)
      const hr = t.prop('href').replace('##', title).replace('#', link)
      t.prop('href', hr)
    })
  }

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

  // debug
  function debug (w) {
    $('#debug').prepend('<p>' + w + '</p>')
    if ($('#debug').children().size() > 2) $('#debug').children().last().remove()
  }

  // ie6fix()
  function ie6fix () {
    $('#wrapper').slideUp(500, function () {
      $('body').append($('#iewarn').html())
    })
  }

  // end
})

window.ht = {}

ht.alert = function (msg, type, wrap) {
  wrap.html('<div class="relative pd tip-' + type + '"><div class="relative">' + msg + '</div><a href="javascript" class="close-tip">&times;</a></div>')
}

// draw bubbles plugin
;(function () { Bubbles = function (e, t) { const n = { colorPool: ['rgba(156,183,52,.25)', 'rgba(227,163,26,.25)', 'rgba(217,84,56,.25)', 'rgba(4,80,150,.25)', 'rgba(122,24,105,.25)'], num: 20, isHeart: !1, timer: 100, step: 3, minSize: 50, maxSize: 150, maxFrame: 230 }; let r = this; r = $.extend(r, $.extend(n, e)), r = $.extend(r, { wrapper: t, ctx: t[0].getContext('2d'), width: t.width(), height: t.height(), shapes: [], on: !0, flag: null, inited: !1 }), r.init() }, Bubbles.prototype = { init: function () { const e = this; num = e.num, wr = e.wrapper, wr.prop({ width: parseInt(e.width, 10), height: parseInt(e.height, 10) }), e.inited = !0, e.clearShapes(), e.shapes = []; for (let t = 0; t < num; t++)e.initShape(); e.flag && clearTimeout(e.flag), e.animateShapes() }, clearShapes: function () { const e = this; e.ctx.clearRect(0, 0, e.width, e.height) }, initShape: function () { const e = this; const t = Math.floor(Math.random() * (e.maxSize - e.minSize)) + e.minSize; const n = t * 2; const r = e.width > n ? e.width : n + 1; const i = e.height > n ? e.height : n + 1; const s = t + Math.floor(Math.random() * (r - n)); const o = t + Math.floor(Math.random() * (i - n)); const u = e.colorPool; const a = Math.floor(Math.random() * u.length); const f = u[a]; const l = Math.random() > 0.5 ? !0 : !1; const c = Math.random() > 0.5 ? !0 : !1; const h = { x: s, y: o, r: t, fillStyle: f, stepCount: e.maxFrame, plusX: l, plusY: c }; e.shapes.push(h) }, drawShape: function (e, t, n, r, i) { const s = this; ctx = s.ctx; if (!s.on) return; if (i) { ctx.beginPath(), ctx.fillStyle = 'rgba(207,13,31,.25)'; const o = 2 * n / 150; ctx.moveTo(e - n + o * 75, t - n + o * 40), ctx.bezierCurveTo(e - n + o * 75, t - n + o * 37, e - n + o * 70, t - n + o * 25, e - n + o * 50, t - n + o * 25), ctx.bezierCurveTo(e - n + o * 20, t - n + o * 25, e - n + o * 20, t - n + o * 62.5, e - n + o * 20, t - n + o * 62.5), ctx.bezierCurveTo(e - n + o * 20, t - n + o * 80, e - n + o * 40, t - n + o * 102, e - n + o * 75, t - n + o * 120), ctx.bezierCurveTo(e - n + o * 110, t - n + o * 102, e - n + o * 130, t - n + o * 80, e - n + o * 130, t - n + o * 62.5), ctx.bezierCurveTo(e - n + o * 130, t - n + o * 62.5, e - n + o * 130, t - n + o * 25, e - n + o * 100, t - n + o * 25), ctx.bezierCurveTo(e - n + o * 85, t - n + o * 25, e - n + o * 75, t - n + o * 37, e - n + o * 75, t - n + o * 40), ctx.fill(), ctx.closePath() } else ctx.beginPath(), ctx.fillStyle = r, ctx.arc(e, t, n, 0, Math.PI * 2, !0), ctx.fill(), ctx.closePath() }, animateShapes: function () { const e = this; const t = e.num; const n = e.step; const r = e.shapes; e.on || (e.flag = e.flag = setTimeout(function () { e.animateShapes }, e.timer)), e.clearShapes(); for (let i = 0; i < t; i++) { const s = r[i]; const o = s.r; let u = s.stepCount + 1; var a = s.plusX; var f = s.plusY; const l = s.fillStyle; if (u >= e.maxFrame) { var a = Math.random() > 0.5 ? !0 : !1; var f = Math.random() > 0.5 ? !0 : !1; u = 0 } let c = a ? s.x + n : s.x - n; c > e.width - o && (c -= 2 * n, a = !s.plusX), c < o && (c += 2 * n, a = !s.plusX); let h = f ? s.y + n : s.y - n; h > e.height - o && (h -= 2 * n, f = !s.plusY), h < o && (h += 2 * n, f = !s.plusY); const p = { x: c, y: h, r: o, fillStyle: l, stepCount: u, plusX: a, plusY: f }; r[i] = p, e.drawShape(c, h, o, l, e.isHeart), i === t - 1 && (e.flag = setTimeout(function () { e.animateShapes() }, e.timer)) } }, destroy: function () { clearTimeout(this.flag), this.wrapper.off('resize', '**'), this.delete } }, this.Bubbles = Bubbles }).call(this)

// prettify.js Copyright (C) 2006 Google Inc.
// Copyright (C) 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview
 * some functions for browser-side pretty printing of code contained in html.
 *
 * <p>
 * For a fairly comprehensive set of languages see the
 * <a href="http://google-code-prettify.googlecode.com/svn/trunk/README.html#langs">README</a>
 * file that came with this source.  At a minimum, the lexer should work on a
 * number of languages including C and friends, Java, Python, Bash, SQL, HTML,
 * XML, CSS, Javascript, and Makefiles.  It works passably on Ruby, PHP and Awk
 * and a subset of Perl, but, because of commenting conventions, doesn't work on
 * Smalltalk, Lisp-like, or CAML-like languages without an explicit lang class.
 * <p>
 * Usage: <ol>
 * <li> include this source file in an html page via
 *   {@code <script type="text/javascript" src="/path/to/prettify.js"></script>}
 * <li> define style rules.  See the example page for examples.
 * <li> mark the {@code <pre>} and {@code <code>} tags in your source with
 *    {@code class=prettyprint.}
 *    You can also use the (html deprecated) {@code <xmp>} tag, but the pretty
 *    printer needs to do more substantial DOM manipulations to support that, so
 *    some css styles may not be preserved.
 * </ol>
 * That's it.  I wanted to keep the API as simple as possible, so there's no
 * need to specify which language the code is in, but if you wish, you can add
 * another class to the {@code <pre>} or {@code <code>} element to specify the
 * language, as in {@code <pre class="prettyprint lang-java">}.  Any class that
 * starts with "lang-" followed by a file extension, specifies the file type.
 * See the "lang-*.js" files in this directory for code that implements
 * per-language file handlers.
 * <p>
 * Change log:<br>
 * cbeust, 2006/08/22
 * <blockquote>
 *   Java annotations (start with "@") are now captured as literals ("lit")
 * </blockquote>
 * @requires console
 */

// JSLint declarations
/* global console, document, navigator, setTimeout, window, define */

/** @define {boolean} */
const IN_GLOBAL_SCOPE = true

/**
 * Split {@code prettyPrint} into multiple timeouts so as not to interfere with
 * UI events.
 * If set to {@code false}, {@code prettyPrint()} is synchronous.
 */
window.PR_SHOULD_USE_CONTINUATION = true

/**
 * Pretty print a chunk of code.
 * @param {string} sourceCodeHtml The HTML to pretty print.
 * @param {string} opt_langExtension The language name to use.
 *     Typically, a filename extension like 'cpp' or 'java'.
 * @param {number|boolean} opt_numberLines True to number lines,
 *     or the 1-indexed number of the first line in sourceCodeHtml.
 * @return {string} code as html, but prettier
 */
let prettyPrintOne
/**
 * Find all the {@code <pre>} and {@code <code>} tags in the DOM with
 * {@code class=prettyprint} and prettify them.
 *
 * @param {Function} opt_whenDone called when prettifying is done.
 * @param {HTMLElement|HTMLDocument} opt_root an element or document
 *   containing all the elements to pretty print.
 *   Defaults to {@code document.body}.
 */
let prettyPrint;

(function () {
  const win = window
  // Keyword lists for various languages.
  // We use things that coerce to strings to make them compact when minified
  // and to defeat aggressive optimizers that fold large string constants.
  const FLOW_CONTROL_KEYWORDS = ['break,continue,do,else,for,if,return,while']
  const C_KEYWORDS = [FLOW_CONTROL_KEYWORDS, 'auto,case,char,const,default,' +
      'double,enum,extern,float,goto,inline,int,long,register,short,signed,' +
      'sizeof,static,struct,switch,typedef,union,unsigned,void,volatile']
  const COMMON_KEYWORDS = [C_KEYWORDS, 'catch,class,delete,false,import,' +
      'new,operator,private,protected,public,this,throw,true,try,typeof']
  const CPP_KEYWORDS = [COMMON_KEYWORDS, 'alignof,align_union,asm,axiom,bool,' +
      'concept,concept_map,const_cast,constexpr,decltype,delegate,' +
      'dynamic_cast,explicit,export,friend,generic,late_check,' +
      'mutable,namespace,nullptr,property,reinterpret_cast,static_assert,' +
      'static_cast,template,typeid,typename,using,virtual,where']
  const JAVA_KEYWORDS = [COMMON_KEYWORDS,
    'abstract,assert,boolean,byte,extends,final,finally,implements,import,' +
      'instanceof,interface,null,native,package,strictfp,super,synchronized,' +
      'throws,transient']
  const CSHARP_KEYWORDS = [JAVA_KEYWORDS,
    'as,base,by,checked,decimal,delegate,descending,dynamic,event,' +
      'fixed,foreach,from,group,implicit,in,internal,into,is,let,' +
      'lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,' +
      'sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,' +
      'var,virtual,where']
  const COFFEE_KEYWORDS = 'all,and,by,catch,class,else,extends,false,finally,' +
      'for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,' +
      'throw,true,try,unless,until,when,while,yes'
  const JSCRIPT_KEYWORDS = [COMMON_KEYWORDS,
    'debugger,eval,export,function,get,null,set,undefined,var,with,' +
      'Infinity,NaN']
  const PERL_KEYWORDS = 'caller,delete,die,do,dump,elsif,eval,exit,foreach,for,' +
      'goto,if,import,last,local,my,next,no,our,print,package,redo,require,' +
      'sub,undef,unless,until,use,wantarray,while,BEGIN,END'
  const PYTHON_KEYWORDS = [FLOW_CONTROL_KEYWORDS, 'and,as,assert,class,def,del,' +
      'elif,except,exec,finally,from,global,import,in,is,lambda,' +
      'nonlocal,not,or,pass,print,raise,try,with,yield,' +
      'False,True,None']
  const RUBY_KEYWORDS = [FLOW_CONTROL_KEYWORDS, 'alias,and,begin,case,class,' +
      'def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,' +
      'rescue,retry,self,super,then,true,undef,unless,until,when,yield,' +
      'BEGIN,END']
  const RUST_KEYWORDS = [FLOW_CONTROL_KEYWORDS, 'as,assert,const,copy,drop,' +
      'enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,' +
      'pub,pure,ref,self,static,struct,true,trait,type,unsafe,use']
  const SH_KEYWORDS = [FLOW_CONTROL_KEYWORDS, 'case,done,elif,esac,eval,fi,' +
      'function,in,local,set,then,until']
  const ALL_KEYWORDS = [
    CPP_KEYWORDS, CSHARP_KEYWORDS, JSCRIPT_KEYWORDS, PERL_KEYWORDS,
    PYTHON_KEYWORDS, RUBY_KEYWORDS, SH_KEYWORDS]
  const C_TYPES = /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/

  // token style names.  correspond to css classes
  /**
   * token style for a string literal
   * @const
   */
  const PR_STRING = 'str'
  /**
   * token style for a keyword
   * @const
   */
  const PR_KEYWORD = 'kwd'
  /**
   * token style for a comment
   * @const
   */
  const PR_COMMENT = 'com'
  /**
   * token style for a type
   * @const
   */
  const PR_TYPE = 'typ'
  /**
   * token style for a literal value.  e.g. 1, null, true.
   * @const
   */
  const PR_LITERAL = 'lit'
  /**
   * token style for a punctuation string.
   * @const
   */
  const PR_PUNCTUATION = 'pun'
  /**
   * token style for plain text.
   * @const
   */
  const PR_PLAIN = 'pln'

  /**
   * token style for an sgml tag.
   * @const
   */
  const PR_TAG = 'tag'
  /**
   * token style for a markup declaration such as a DOCTYPE.
   * @const
   */
  const PR_DECLARATION = 'dec'
  /**
   * token style for embedded source.
   * @const
   */
  const PR_SOURCE = 'src'
  /**
   * token style for an sgml attribute name.
   * @const
   */
  const PR_ATTRIB_NAME = 'atn'
  /**
   * token style for an sgml attribute value.
   * @const
   */
  const PR_ATTRIB_VALUE = 'atv'

  /**
   * A class that indicates a section of markup that is not code, e.g. to allow
   * embedding of line numbers within code listings.
   * @const
   */
  const PR_NOCODE = 'nocode'

  /**
   * A set of tokens that can precede a regular expression literal in
   * javascript
   * http://web.archive.org/web/20070717142515/http://www.mozilla.org/js/language/js20/rationale/syntax.html
   * has the full list, but I've removed ones that might be problematic when
   * seen in languages that don't support regular expression literals.
   *
   * <p>Specifically, I've removed any keywords that can't precede a regexp
   * literal in a syntactically legal javascript program, and I've removed the
   * "in" keyword since it's not a keyword in many languages, and might be used
   * as a count of inches.
   *
   * <p>The link above does not accurately describe EcmaScript rules since
   * it fails to distinguish between (a=++/b/i) and (a++/b/i) but it works
   * very well in practice.
   *
   * @private
   * @const
   */
  const REGEXP_PRECEDER_PATTERN = '(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*'

  // CAVEAT: this does not properly handle the case where a regular
  // expression immediately follows another since a regular expression may
  // have flags for case-sensitivity and the like.  Having regexp tokens
  // adjacent is not valid in any language I'm aware of, so I'm punting.
  // TODO: maybe style special characters inside a regexp as punctuation.

  /**
   * Given a group of {@link RegExp}s, returns a {@code RegExp} that globally
   * matches the union of the sets of strings matched by the input RegExp.
   * Since it matches globally, if the input strings have a start-of-input
   * anchor (/^.../), it is ignored for the purposes of unioning.
   * @param {Array.<RegExp>} regexs non multiline, non-global regexs.
   * @return {RegExp} a global regex.
   */
  function combinePrefixPatterns (regexs) {
    let capturedGroupIndex = 0

    let needToFoldCase = false
    let ignoreCase = false
    for (var i = 0, n = regexs.length; i < n; ++i) {
      var regex = regexs[i]
      if (regex.ignoreCase) {
        ignoreCase = true
      } else if (/[a-z]/i.test(regex.source.replace(
        /\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi, ''))) {
        needToFoldCase = true
        ignoreCase = false
        break
      }
    }

    const escapeCharToCodeUnit = {
      b: 8,
      t: 9,
      n: 0xa,
      v: 0xb,
      f: 0xc,
      r: 0xd
    }

    function decodeEscape (charsetPart) {
      let cc0 = charsetPart.charCodeAt(0)
      if (cc0 !== 92 /* \\ */) {
        return cc0
      }
      const c1 = charsetPart.charAt(1)
      cc0 = escapeCharToCodeUnit[c1]
      if (cc0) {
        return cc0
      } else if (c1 >= '0' && c1 <= '7') {
        return parseInt(charsetPart.substring(1), 8)
      } else if (c1 === 'u' || c1 === 'x') {
        return parseInt(charsetPart.substring(2), 16)
      } else {
        return charsetPart.charCodeAt(1)
      }
    }

    function encodeEscape (charCode) {
      if (charCode < 0x20) {
        return (charCode < 0x10 ? '\\x0' : '\\x') + charCode.toString(16)
      }
      const ch = String.fromCharCode(charCode)
      return (ch === '\\' || ch === '-' || ch === ']' || ch === '^')
        ? '\\' + ch
        : ch
    }

    function caseFoldCharset (charSet) {
      const charsetParts = charSet.substring(1, charSet.length - 1).match(
        new RegExp(
          '\\\\u[0-9A-Fa-f]{4}' +
              '|\\\\x[0-9A-Fa-f]{2}' +
              '|\\\\[0-3][0-7]{0,2}' +
              '|\\\\[0-7]{1,2}' +
              '|\\\\[\\s\\S]' +
              '|-' +
              '|[^-\\\\]',
          'g'))
      const ranges = []
      const inverse = charsetParts[0] === '^'

      const out = ['[']
      if (inverse) { out.push('^') }

      for (var i = inverse ? 1 : 0, n = charsetParts.length; i < n; ++i) {
        const p = charsetParts[i]
        if (/\\[bdsw]/i.test(p)) { // Don't muck with named groups.
          out.push(p)
        } else {
          const start = decodeEscape(p)
          var end
          if (i + 2 < n && charsetParts[i + 1] === '-') {
            end = decodeEscape(charsetParts[i + 2])
            i += 2
          } else {
            end = start
          }
          ranges.push([start, end])
          // If the range might intersect letters, then expand it.
          // This case handling is too simplistic.
          // It does not deal with non-latin case folding.
          // It works for latin source code identifiers though.
          if (!(end < 65 || start > 122)) {
            if (!(end < 65 || start > 90)) {
              ranges.push([Math.max(65, start) | 32, Math.min(end, 90) | 32])
            }
            if (!(end < 97 || start > 122)) {
              ranges.push([Math.max(97, start) & ~32, Math.min(end, 122) & ~32])
            }
          }
        }
      }

      // [[1, 10], [3, 4], [8, 12], [14, 14], [16, 16], [17, 17]]
      // -> [[1, 12], [14, 14], [16, 17]]
      ranges.sort(function (a, b) { return (a[0] - b[0]) || (b[1] - a[1]) })
      const consolidatedRanges = []
      let lastRange = []
      for (var i = 0; i < ranges.length; ++i) {
        var range = ranges[i]
        if (range[0] <= lastRange[1] + 1) {
          lastRange[1] = Math.max(lastRange[1], range[1])
        } else {
          consolidatedRanges.push(lastRange = range)
        }
      }

      for (var i = 0; i < consolidatedRanges.length; ++i) {
        var range = consolidatedRanges[i]
        out.push(encodeEscape(range[0]))
        if (range[1] > range[0]) {
          if (range[1] + 1 > range[0]) { out.push('-') }
          out.push(encodeEscape(range[1]))
        }
      }
      out.push(']')
      return out.join('')
    }

    function allowAnywhereFoldCaseAndRenumberGroups (regex) {
      // Split into character sets, escape sequences, punctuation strings
      // like ('(', '(?:', ')', '^'), and runs of characters that do not
      // include any of the above.
      const parts = regex.source.match(
        new RegExp(
          '(?:' +
              '\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]' + // a character set
              '|\\\\u[A-Fa-f0-9]{4}' + // a unicode escape
              '|\\\\x[A-Fa-f0-9]{2}' + // a hex escape
              '|\\\\[0-9]+' + // a back-reference or octal escape
              '|\\\\[^ux0-9]' + // other escape sequence
              '|\\(\\?[:!=]' + // start of a non-capturing group
              '|[\\(\\)\\^]' + // start/end of a group, or line start
              '|[^\\x5B\\x5C\\(\\)\\^]+' + // run of other characters
              ')',
          'g'))
      const n = parts.length

      // Maps captured group numbers to the number they will occupy in
      // the output or to -1 if that has not been determined, or to
      // undefined if they need not be capturing in the output.
      const capturedGroups = []

      // Walk over and identify back references to build the capturedGroups
      // mapping.
      for (var i = 0, groupIndex = 0; i < n; ++i) {
        var p = parts[i]
        if (p === '(') {
          // groups are 1-indexed, so max group index is count of '('
          ++groupIndex
        } else if (p.charAt(0) === '\\') {
          var decimalValue = +p.substring(1)
          if (decimalValue) {
            if (decimalValue <= groupIndex) {
              capturedGroups[decimalValue] = -1
            } else {
              // Replace with an unambiguous escape sequence so that
              // an octal escape sequence does not turn into a backreference
              // to a capturing group from an earlier regex.
              parts[i] = encodeEscape(decimalValue)
            }
          }
        }
      }

      // Renumber groups and reduce capturing groups to non-capturing groups
      // where possible.
      for (var i = 1; i < capturedGroups.length; ++i) {
        if (capturedGroups[i] === -1) {
          capturedGroups[i] = ++capturedGroupIndex
        }
      }
      for (var i = 0, groupIndex = 0; i < n; ++i) {
        var p = parts[i]
        if (p === '(') {
          ++groupIndex
          if (!capturedGroups[groupIndex]) {
            parts[i] = '(?:'
          }
        } else if (p.charAt(0) === '\\') {
          var decimalValue = +p.substring(1)
          if (decimalValue && decimalValue <= groupIndex) {
            parts[i] = '\\' + capturedGroups[decimalValue]
          }
        }
      }

      // Remove any prefix anchors so that the output will match anywhere.
      // ^^ really does mean an anchored match though.
      for (var i = 0; i < n; ++i) {
        if (parts[i] === '^' && parts[i + 1] !== '^') { parts[i] = '' }
      }

      // Expand letters to groups to handle mixing of case-sensitive and
      // case-insensitive patterns if necessary.
      if (regex.ignoreCase && needToFoldCase) {
        for (var i = 0; i < n; ++i) {
          var p = parts[i]
          const ch0 = p.charAt(0)
          if (p.length >= 2 && ch0 === '[') {
            parts[i] = caseFoldCharset(p)
          } else if (ch0 !== '\\') {
            // TODO: handle letters in numeric escapes.
            parts[i] = p.replace(
              /[a-zA-Z]/g,
              function (ch) {
                const cc = ch.charCodeAt(0)
                return '[' + String.fromCharCode(cc & ~32, cc | 32) + ']'
              })
          }
        }
      }

      return parts.join('')
    }

    const rewritten = []
    for (var i = 0, n = regexs.length; i < n; ++i) {
      var regex = regexs[i]
      if (regex.global || regex.multiline) { throw new Error('' + regex) }
      rewritten.push(
        '(?:' + allowAnywhereFoldCaseAndRenumberGroups(regex) + ')')
    }

    return new RegExp(rewritten.join('|'), ignoreCase ? 'gi' : 'g')
  }

  /**
   * Split markup into a string of source code and an array mapping ranges in
   * that string to the text nodes in which they appear.
   *
   * <p>
   * The HTML DOM structure:</p>
   * <pre>
   * (Element   "p"
   *   (Element "b"
   *     (Text  "print "))       ; #1
   *   (Text    "'Hello '")      ; #2
   *   (Element "br")            ; #3
   *   (Text    "  + 'World';")) ; #4
   * </pre>
   * <p>
   * corresponds to the HTML
   * {@code <p><b>print </b>'Hello '<br>  + 'World';</p>}.</p>
   *
   * <p>
   * It will produce the output:</p>
   * <pre>
   * {
   *   sourceCode: "print 'Hello '\n  + 'World';",
   *   //                     1          2
   *   //           012345678901234 5678901234567
   *   spans: [0, #1, 6, #2, 14, #3, 15, #4]
   * }
   * </pre>
   * <p>
   * where #1 is a reference to the {@code "print "} text node above, and so
   * on for the other text nodes.
   * </p>
   *
   * <p>
   * The {@code} spans array is an array of pairs.  Even elements are the start
   * indices of substrings, and odd elements are the text nodes (or BR elements)
   * that contain the text for those substrings.
   * Substrings continue until the next index or the end of the source.
   * </p>
   *
   * @param {Node} node an HTML DOM subtree containing source-code.
   * @param {boolean} isPreformatted true if white-space in text nodes should
   *    be considered significant.
   * @return {Object} source code and the text nodes in which they occur.
   */
  function extractSourceSpans (node, isPreformatted) {
    const nocode = /(?:^|\s)nocode(?:\s|$)/

    const chunks = []
    let length = 0
    const spans = []
    let k = 0

    function walk (node) {
      const type = node.nodeType
      if (type == 1) { // Element
        if (nocode.test(node.className)) { return }
        for (let child = node.firstChild; child; child = child.nextSibling) {
          walk(child)
        }
        const nodeName = node.nodeName.toLowerCase()
        if (nodeName === 'br' || nodeName === 'li') {
          chunks[k] = '\n'
          spans[k << 1] = length++
          spans[(k++ << 1) | 1] = node
        }
      } else if (type == 3 || type == 4) { // Text
        let text = node.nodeValue
        if (text.length) {
          if (!isPreformatted) {
            text = text.replace(/[ \t\r\n]+/g, ' ')
          } else {
            text = text.replace(/\r\n?/g, '\n') // Normalize newlines.
          }
          // TODO: handle tabs here?
          chunks[k] = text
          spans[k << 1] = length
          length += text.length
          spans[(k++ << 1) | 1] = node
        }
      }
    }

    walk(node)

    return {
      sourceCode: chunks.join('').replace(/\n$/, ''),
      spans
    }
  }

  /**
   * Apply the given language handler to sourceCode and add the resulting
   * decorations to out.
   * @param {number} basePos the index of sourceCode within the chunk of source
   *    whose decorations are already present on out.
   */
  function appendDecorations (basePos, sourceCode, langHandler, out) {
    if (!sourceCode) { return }
    const job = {
      sourceCode,
      basePos
    }
    langHandler(job)
    out.push.apply(out, job.decorations)
  }

  const notWs = /\S/

  /**
   * Given an element, if it contains only one child element and any text nodes
   * it contains contain only space characters, return the sole child element.
   * Otherwise returns undefined.
   * <p>
   * This is meant to return the CODE element in {@code <pre><code ...>} when
   * there is a single child element that contains all the non-space textual
   * content, but not to return anything where there are multiple child elements
   * as in {@code <pre><code>...</code><code>...</code></pre>} or when there
   * is textual content.
   */
  function childContentWrapper (element) {
    let wrapper
    for (let c = element.firstChild; c; c = c.nextSibling) {
      const type = c.nodeType
      wrapper = (type === 1) // Element Node
        ? (wrapper ? element : c)
        : (type === 3) // Text Node
            ? (notWs.test(c.nodeValue) ? element : wrapper)
            : wrapper
    }
    return wrapper === element ? undefined : wrapper
  }

  /** Given triples of [style, pattern, context] returns a lexing function,
    * The lexing function interprets the patterns to find token boundaries and
    * returns a decoration list of the form
    * [index_0, style_0, index_1, style_1, ..., index_n, style_n]
    * where index_n is an index into the sourceCode, and style_n is a style
    * constant like PR_PLAIN.  index_n-1 <= index_n, and style_n-1 applies to
    * all characters in sourceCode[index_n-1:index_n].
    *
    * The stylePatterns is a list whose elements have the form
    * [style : string, pattern : RegExp, DEPRECATED, shortcut : string].
    *
    * Style is a style constant like PR_PLAIN, or can be a string of the
    * form 'lang-FOO', where FOO is a language extension describing the
    * language of the portion of the token in $1 after pattern executes.
    * E.g., if style is 'lang-lisp', and group 1 contains the text
    * '(hello (world))', then that portion of the token will be passed to the
    * registered lisp handler for formatting.
    * The text before and after group 1 will be restyled using this decorator
    * so decorators should take care that this doesn't result in infinite
    * recursion.  For example, the HTML lexer rule for SCRIPT elements looks
    * something like ['lang-js', /<[s]cript>(.+?)<\/script>/].  This may match
    * '<script>foo()<\/script>', which would cause the current decorator to
    * be called with '<script>' which would not match the same rule since
    * group 1 must not be empty, so it would be instead styled as PR_TAG by
    * the generic tag rule.  The handler registered for the 'js' extension would
    * then be called with 'foo()', and finally, the current decorator would
    * be called with '<\/script>' which would not match the original rule and
    * so the generic tag rule would identify it as a tag.
    *
    * Pattern must only match prefixes, and if it matches a prefix, then that
    * match is considered a token with the same style.
    *
    * Context is applied to the last non-whitespace, non-comment token
    * recognized.
    *
    * Shortcut is an optional string of characters, any of which, if the first
    * character, gurantee that this pattern and only this pattern matches.
    *
    * @param {Array} shortcutStylePatterns patterns that always start with
    *   a known character.  Must have a shortcut string.
    * @param {Array} fallthroughStylePatterns patterns that will be tried in
    *   order if the shortcut ones fail.  May have shortcuts.
    *
    * @return {function (Object)} a
    *   function that takes source code and returns a list of decorations.
    */
  function createSimpleLexer (shortcutStylePatterns, fallthroughStylePatterns) {
    const shortcuts = {}
    let tokenizer;
    (function () {
      const allPatterns = shortcutStylePatterns.concat(fallthroughStylePatterns)
      const allRegexs = []
      const regexKeys = {}
      for (let i = 0, n = allPatterns.length; i < n; ++i) {
        const patternParts = allPatterns[i]
        const shortcutChars = patternParts[3]
        if (shortcutChars) {
          for (let c = shortcutChars.length; --c >= 0;) {
            shortcuts[shortcutChars.charAt(c)] = patternParts
          }
        }
        const regex = patternParts[1]
        const k = '' + regex
        if (!regexKeys.hasOwnProperty(k)) {
          allRegexs.push(regex)
          regexKeys[k] = null
        }
      }
      allRegexs.push(/[\0-\uffff]/)
      tokenizer = combinePrefixPatterns(allRegexs)
    })()

    const nPatterns = fallthroughStylePatterns.length

    /**
     * Lexes job.sourceCode and produces an output array job.decorations of
     * style classes preceded by the position at which they start in
     * job.sourceCode in order.
     *
     * @param {Object} job an object like <pre>{
     *    sourceCode: {string} sourceText plain text,
     *    basePos: {int} position of job.sourceCode in the larger chunk of
     *        sourceCode.
     * }</pre>
     */
    const decorate = function (job) {
      const sourceCode = job.sourceCode; const basePos = job.basePos
      /** Even entries are positions in source in ascending order.  Odd enties
        * are style markers (e.g., PR_COMMENT) that run from that position until
        * the end.
        * @type {Array.<number|string>}
        */
      const decorations = [basePos, PR_PLAIN]
      let pos = 0 // index into sourceCode
      const tokens = sourceCode.match(tokenizer) || []
      const styleCache = {}

      for (let ti = 0, nTokens = tokens.length; ti < nTokens; ++ti) {
        const token = tokens[ti]
        let style = styleCache[token]
        let match = void 0

        var isEmbedded
        if (typeof style === 'string') {
          isEmbedded = false
        } else {
          let patternParts = shortcuts[token.charAt(0)]
          if (patternParts) {
            match = token.match(patternParts[1])
            style = patternParts[0]
          } else {
            for (let i = 0; i < nPatterns; ++i) {
              patternParts = fallthroughStylePatterns[i]
              match = token.match(patternParts[1])
              if (match) {
                style = patternParts[0]
                break
              }
            }

            if (!match) { // make sure that we make progress
              style = PR_PLAIN
            }
          }

          isEmbedded = style.length >= 5 && style.substring(0, 5) === 'lang-'
          if (isEmbedded && !(match && typeof match[1] === 'string')) {
            isEmbedded = false
            style = PR_SOURCE
          }

          if (!isEmbedded) { styleCache[token] = style }
        }

        const tokenStart = pos
        pos += token.length

        if (!isEmbedded) {
          decorations.push(basePos + tokenStart, style)
        } else { // Treat group 1 as an embedded block of source code.
          const embeddedSource = match[1]
          let embeddedSourceStart = token.indexOf(embeddedSource)
          let embeddedSourceEnd = embeddedSourceStart + embeddedSource.length
          if (match[2]) {
            // If embeddedSource can be blank, then it would match at the
            // beginning which would cause us to infinitely recurse on the
            // entire token, so we catch the right context in match[2].
            embeddedSourceEnd = token.length - match[2].length
            embeddedSourceStart = embeddedSourceEnd - embeddedSource.length
          }
          const lang = style.substring(5)
          // Decorate the left of the embedded source
          appendDecorations(
            basePos + tokenStart,
            token.substring(0, embeddedSourceStart),
            decorate, decorations)
          // Decorate the embedded source
          appendDecorations(
            basePos + tokenStart + embeddedSourceStart,
            embeddedSource,
            langHandlerForExtension(lang, embeddedSource),
            decorations)
          // Decorate the right of the embedded section
          appendDecorations(
            basePos + tokenStart + embeddedSourceEnd,
            token.substring(embeddedSourceEnd),
            decorate, decorations)
        }
      }
      job.decorations = decorations
    }
    return decorate
  }

  /** returns a function that produces a list of decorations from source text.
    *
    * This code treats ", ', and ` as string delimiters, and \ as a string
    * escape.  It does not recognize perl's qq() style strings.
    * It has no special handling for double delimiter escapes as in basic, or
    * the tripled delimiters used in python, but should work on those regardless
    * although in those cases a single string literal may be broken up into
    * multiple adjacent string literals.
    *
    * It recognizes C, C++, and shell style comments.
    *
    * @param {Object} options a set of optional parameters.
    * @return {function (Object)} a function that examines the source code
    *     in the input job and builds the decoration list.
    */
  function sourceDecorator (options) {
    const shortcutStylePatterns = []; const fallthroughStylePatterns = []
    if (options.tripleQuotedStrings) {
      // '''multi-line-string''', 'single-line-string', and double-quoted
      shortcutStylePatterns.push(
        [PR_STRING, /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,
          null, '\'"'])
    } else if (options.multiLineStrings) {
      // 'multi-line-string', "multi-line-string"
      shortcutStylePatterns.push(
        [PR_STRING, /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,
          null, '\'"`'])
    } else {
      // 'single-line-string', "single-line-string"
      shortcutStylePatterns.push(
        [PR_STRING,
          /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,
          null, '"\''])
    }
    if (options.verbatimStrings) {
      // verbatim-string-literal production from the C# grammar.  See issue 93.
      fallthroughStylePatterns.push(
        [PR_STRING, /^@\"(?:[^\"]|\"\")*(?:\"|$)/, null])
    }
    const hc = options.hashComments
    if (hc) {
      if (options.cStyleComments) {
        if (hc > 1) { // multiline hash comments
          shortcutStylePatterns.push(
            [PR_COMMENT, /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, null, '#'])
        } else {
          // Stop C preprocessor declarations at an unclosed open comment
          shortcutStylePatterns.push(
            [PR_COMMENT, /^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,
              null, '#'])
        }
        // #include <stdio.h>
        fallthroughStylePatterns.push(
          [PR_STRING,
            /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,
            null])
      } else {
        shortcutStylePatterns.push([PR_COMMENT, /^#[^\r\n]*/, null, '#'])
      }
    }
    if (options.cStyleComments) {
      fallthroughStylePatterns.push([PR_COMMENT, /^\/\/[^\r\n]*/, null])
      fallthroughStylePatterns.push(
        [PR_COMMENT, /^\/\*[\s\S]*?(?:\*\/|$)/, null])
    }
    const regexLiterals = options.regexLiterals
    if (regexLiterals) {
      /**
       * @const
       */
      const regexExcls = regexLiterals > 1
        ? '' // Multiline regex literals
        : '\n\r'
      /**
       * @const
       */
      const regexAny = regexExcls ? '.' : '[\\S\\s]'
      /**
       * @const
       */
      const REGEX_LITERAL = (
        // A regular expression literal starts with a slash that is
        // not followed by * or / so that it is not confused with
        // comments.
        '/(?=[^/*' + regexExcls + '])' +
          // and then contains any number of raw characters,
          '(?:[^/\\x5B\\x5C' + regexExcls + ']' +
          // escape sequences (\x5C),
          '|\\x5C' + regexAny +
          // or non-nesting character sets (\x5B\x5D);
          '|\\x5B(?:[^\\x5C\\x5D' + regexExcls + ']' +
          '|\\x5C' + regexAny + ')*(?:\\x5D|$))+' +
          // finally closed by a /.
          '/')
      fallthroughStylePatterns.push(
        ['lang-regex',
          RegExp('^' + REGEXP_PRECEDER_PATTERN + '(' + REGEX_LITERAL + ')')
        ])
    }

    const types = options.types
    if (types) {
      fallthroughStylePatterns.push([PR_TYPE, types])
    }

    const keywords = ('' + options.keywords).replace(/^ | $/g, '')
    if (keywords.length) {
      fallthroughStylePatterns.push(
        [PR_KEYWORD,
          new RegExp('^(?:' + keywords.replace(/[\s,]+/g, '|') + ')\\b'),
          null])
    }

    shortcutStylePatterns.push([PR_PLAIN, /^\s+/, null, ' \r\n\t\xA0'])

    let punctuation =
    // The Bash man page says

    // A word is a sequence of characters considered as a single
    // unit by GRUB. Words are separated by metacharacters,
    // which are the following plus space, tab, and newline: { }
    // | & $ ; < >
    // ...

    // A word beginning with # causes that word and all remaining
    // characters on that line to be ignored.

    // which means that only a '#' after /(?:^|[{}|&$;<>\s])/ starts a
    // comment but empirically
    // $ echo {#}
    // {#}
    // $ echo \$#
    // $#
    // $ echo }#
    // }#

    // so /(?:^|[|&;<>\s])/ is more appropriate.

    // http://gcc.gnu.org/onlinedocs/gcc-2.95.3/cpp_1.html#SEC3
    // suggests that this definition is compatible with a
    // default mode that tries to use a single token definition
    // to recognize both bash/python style comments and C
    // preprocessor directives.

      // This definition of punctuation does not include # in the list of
      // follow-on exclusions, so # will not be broken before if preceeded
      // by a punctuation character.  We could try to exclude # after
      // [|&;<>] but that doesn't seem to cause many major problems.
      // If that does turn out to be a problem, we should change the below
      // when hc is truthy to include # in the run of punctuation characters
      // only when not followint [|&;<>].
      '^.[^\\s\\w.$@\'"`/\\\\]*'
    if (options.regexLiterals) {
      punctuation += '(?!\s*\/)'
    }

    fallthroughStylePatterns.push(
      // TODO(mikesamuel): recognize non-latin letters and numerals in idents
      [PR_LITERAL, /^@[a-z_$][a-z_$@0-9]*/i, null],
      [PR_TYPE, /^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/, null],
      [PR_PLAIN, /^[a-z_$][a-z_$@0-9]*/i, null],
      [PR_LITERAL,
        new RegExp(
          '^(?:' +
             // A hex number
             '0x[a-f0-9]+' +
             // or an octal or decimal number,
             '|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)' +
             // possibly in scientific notation
             '(?:e[+\\-]?\\d+)?' +
             ')' +
             // with an optional modifier like UL for unsigned long
             '[a-z]*', 'i'),
        null, '0123456789'],
      // Don't treat escaped quotes in bash as starting strings.
      // See issue 144.
      [PR_PLAIN, /^\\[\s\S]?/, null],
      [PR_PUNCTUATION, new RegExp(punctuation), null])

    return createSimpleLexer(shortcutStylePatterns, fallthroughStylePatterns)
  }

  const decorateSource = sourceDecorator({
    keywords: ALL_KEYWORDS,
    hashComments: true,
    cStyleComments: true,
    multiLineStrings: true,
    regexLiterals: true
  })

  /**
   * Given a DOM subtree, wraps it in a list, and puts each line into its own
   * list item.
   *
   * @param {Node} node modified in place.  Its content is pulled into an
   *     HTMLOListElement, and each line is moved into a separate list item.
   *     This requires cloning elements, so the input might not have unique
   *     IDs after numbering.
   * @param {boolean} isPreformatted true iff white-space in text nodes should
   *     be treated as significant.
   */
  function numberLines (node, opt_startLineNum, isPreformatted) {
    const nocode = /(?:^|\s)nocode(?:\s|$)/
    const lineBreak = /\r\n?|\n/

    const document = node.ownerDocument

    let li = document.createElement('li')
    while (node.firstChild) {
      li.appendChild(node.firstChild)
    }
    // An array of lines.  We split below, so this is initialized to one
    // un-split line.
    const listItems = [li]

    function walk (node) {
      const type = node.nodeType
      if (type == 1 && !nocode.test(node.className)) { // Element
        if (node.nodeName === 'br') {
          breakAfter(node)
          // Discard the <BR> since it is now flush against a </LI>.
          if (node.parentNode) {
            node.parentNode.removeChild(node)
          }
        } else {
          for (let child = node.firstChild; child; child = child.nextSibling) {
            walk(child)
          }
        }
      } else if ((type == 3 || type == 4) && isPreformatted) { // Text
        const text = node.nodeValue
        const match = text.match(lineBreak)
        if (match) {
          const firstLine = text.substring(0, match.index)
          node.nodeValue = firstLine
          const tail = text.substring(match.index + match[0].length)
          if (tail) {
            const parent = node.parentNode
            parent.insertBefore(
              document.createTextNode(tail), node.nextSibling)
          }
          breakAfter(node)
          if (!firstLine) {
            // Don't leave blank text nodes in the DOM.
            node.parentNode.removeChild(node)
          }
        }
      }
    }

    // Split a line after the given node.
    function breakAfter (lineEndNode) {
      // If there's nothing to the right, then we can skip ending the line
      // here, and move root-wards since splitting just before an end-tag
      // would require us to create a bunch of empty copies.
      while (!lineEndNode.nextSibling) {
        lineEndNode = lineEndNode.parentNode
        if (!lineEndNode) { return }
      }

      function breakLeftOf (limit, copy) {
        // Clone shallowly if this node needs to be on both sides of the break.
        const rightSide = copy ? limit.cloneNode(false) : limit
        const parent = limit.parentNode
        if (parent) {
          // We clone the parent chain.
          // This helps us resurrect important styling elements that cross lines.
          // E.g. in <i>Foo<br>Bar</i>
          // should be rewritten to <li><i>Foo</i></li><li><i>Bar</i></li>.
          const parentClone = breakLeftOf(parent, 1)
          // Move the clone and everything to the right of the original
          // onto the cloned parent.
          let next = limit.nextSibling
          parentClone.appendChild(rightSide)
          for (let sibling = next; sibling; sibling = next) {
            next = sibling.nextSibling
            parentClone.appendChild(sibling)
          }
        }
        return rightSide
      }

      let copiedListItem = breakLeftOf(lineEndNode.nextSibling, 0)

      // Walk the parent chain until we reach an unattached LI.
      for (var parent;
      // Check nodeType since IE invents document fragments.
        (parent = copiedListItem.parentNode) && parent.nodeType === 1;) {
        copiedListItem = parent
      }
      // Put it on the list of lines for later processing.
      listItems.push(copiedListItem)
    }

    // Split lines while there are lines left to split.
    for (var i = 0; // Number of lines that have been split so far.
      i < listItems.length; // length updated by breakAfter calls.
      ++i) {
      walk(listItems[i])
    }

    // Make sure numeric indices show correctly.
    if (opt_startLineNum === (opt_startLineNum | 0)) {
      listItems[0].setAttribute('value', opt_startLineNum)
    }

    const ol = document.createElement('ol')
    ol.className = 'linenums'
    const offset = Math.max(0, ((opt_startLineNum - 1 /* zero index */)) | 0) || 0
    for (var i = 0, n = listItems.length; i < n; ++i) {
      li = listItems[i]
      // Stick a class on the LIs so that stylesheets can
      // color odd/even rows, or any other row pattern that
      // is co-prime with 10.
      li.className = 'L' + ((i + offset) % 10)
      if (!li.firstChild) {
        li.appendChild(document.createTextNode('\xA0'))
      }
      ol.appendChild(li)
    }

    node.appendChild(ol)
  }
  /**
   * Breaks {@code job.sourceCode} around style boundaries in
   * {@code job.decorations} and modifies {@code job.sourceNode} in place.
   * @param {Object} job like <pre>{
   *    sourceCode: {string} source as plain text,
   *    sourceNode: {HTMLElement} the element containing the source,
   *    spans: {Array.<number|Node>} alternating span start indices into source
   *       and the text node or element (e.g. {@code <BR>}) corresponding to that
   *       span.
   *    decorations: {Array.<number|string} an array of style classes preceded
   *       by the position at which they start in job.sourceCode in order
   * }</pre>
   * @private
   */
  function recombineTagsAndDecorations (job) {
    let isIE8OrEarlier = /\bMSIE\s(\d+)/.exec(navigator.userAgent)
    isIE8OrEarlier = isIE8OrEarlier && +isIE8OrEarlier[1] <= 8
    const newlineRe = /\n/g

    const source = job.sourceCode
    const sourceLength = source.length
    // Index into source after the last code-unit recombined.
    let sourceIndex = 0

    const spans = job.spans
    const nSpans = spans.length
    // Index into spans after the last span which ends at or before sourceIndex.
    let spanIndex = 0

    const decorations = job.decorations
    let nDecorations = decorations.length
    // Index into decorations after the last decoration which ends at or before
    // sourceIndex.
    let decorationIndex = 0

    // Remove all zero-length decorations.
    decorations[nDecorations] = sourceLength
    let decPos, i
    for (i = decPos = 0; i < nDecorations;) {
      if (decorations[i] !== decorations[i + 2]) {
        decorations[decPos++] = decorations[i++]
        decorations[decPos++] = decorations[i++]
      } else {
        i += 2
      }
    }
    nDecorations = decPos

    // Simplify decorations.
    for (i = decPos = 0; i < nDecorations;) {
      const startPos = decorations[i]
      // Conflate all adjacent decorations that use the same style.
      const startDec = decorations[i + 1]
      var end = i + 2
      while (end + 2 <= nDecorations && decorations[end + 1] === startDec) {
        end += 2
      }
      decorations[decPos++] = startPos
      decorations[decPos++] = startDec
      i = end
    }

    nDecorations = decorations.length = decPos

    const sourceNode = job.sourceNode
    let oldDisplay
    if (sourceNode) {
      oldDisplay = sourceNode.style.display
      sourceNode.style.display = 'none'
    }
    try {
      const decoration = null
      while (spanIndex < nSpans) {
        const spanStart = spans[spanIndex]
        const spanEnd = spans[spanIndex + 2] || sourceLength

        const decEnd = decorations[decorationIndex + 2] || sourceLength

        var end = Math.min(spanEnd, decEnd)

        let textNode = spans[spanIndex + 1]
        var styledText
        if (textNode.nodeType !== 1 && // Don't muck with <BR>s or <LI>s
            // Don't introduce spans around empty text nodes.
            (styledText = source.substring(sourceIndex, end))) {
          // This may seem bizarre, and it is.  Emitting LF on IE causes the
          // code to display with spaces instead of line breaks.
          // Emitting Windows standard issue linebreaks (CRLF) causes a blank
          // space to appear at the beginning of every line but the first.
          // Emitting an old Mac OS 9 line separator makes everything spiffy.
          if (isIE8OrEarlier) {
            styledText = styledText.replace(newlineRe, '\r')
          }
          textNode.nodeValue = styledText
          const document = textNode.ownerDocument
          const span = document.createElement('span')
          span.className = decorations[decorationIndex + 1]
          const parentNode = textNode.parentNode
          parentNode.replaceChild(span, textNode)
          span.appendChild(textNode)
          if (sourceIndex < spanEnd) { // Split off a text node.
            spans[spanIndex + 1] = textNode =
                // TODO: Possibly optimize by using '' if there's no flicker.
                document.createTextNode(source.substring(end, spanEnd))
            parentNode.insertBefore(textNode, span.nextSibling)
          }
        }

        sourceIndex = end

        if (sourceIndex >= spanEnd) {
          spanIndex += 2
        }
        if (sourceIndex >= decEnd) {
          decorationIndex += 2
        }
      }
    } finally {
      if (sourceNode) {
        sourceNode.style.display = oldDisplay
      }
    }
  }

  /** Maps language-specific file extensions to handlers. */
  const langHandlerRegistry = {}
  /** Register a language handler for the given file extensions.
    * @param {function (Object)} handler a function from source code to a list
    *      of decorations.  Takes a single argument job which describes the
    *      state of the computation.   The single parameter has the form
    *      {@code {
    *        sourceCode: {string} as plain text.
    *        decorations: {Array.<number|string>} an array of style classes
    *                     preceded by the position at which they start in
    *                     job.sourceCode in order.
    *                     The language handler should assigned this field.
    *        basePos: {int} the position of source in the larger source chunk.
    *                 All positions in the output decorations array are relative
    *                 to the larger source chunk.
    *      } }
    * @param {Array.<string>} fileExtensions
    */
  function registerLangHandler (handler, fileExtensions) {
    for (let i = fileExtensions.length; --i >= 0;) {
      const ext = fileExtensions[i]
      if (!langHandlerRegistry.hasOwnProperty(ext)) {
        langHandlerRegistry[ext] = handler
      } else if (win.console) {
        console.warn('cannot override language handler %s', ext)
      }
    }
  }
  function langHandlerForExtension (extension, source) {
    if (!(extension && langHandlerRegistry.hasOwnProperty(extension))) {
      // Treat it as markup if the first non whitespace character is a < and
      // the last non-whitespace character is a >.
      extension = /^\s*</.test(source)
        ? 'default-markup'
        : 'default-code'
    }
    return langHandlerRegistry[extension]
  }
  registerLangHandler(decorateSource, ['default-code'])
  registerLangHandler(
    createSimpleLexer(
      [],
      [
        [PR_PLAIN, /^[^<?]+/],
        [PR_DECLARATION, /^<!\w[^>]*(?:>|$)/],
        [PR_COMMENT, /^<\!--[\s\S]*?(?:-\->|$)/],
        // Unescaped content in an unknown language
        ['lang-', /^<\?([\s\S]+?)(?:\?>|$)/],
        ['lang-', /^<%([\s\S]+?)(?:%>|$)/],
        [PR_PUNCTUATION, /^(?:<[%?]|[%?]>)/],
        ['lang-', /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],
        // Unescaped content in javascript.  (Or possibly vbscript).
        ['lang-js', /^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],
        // Contains unescaped stylesheet content
        ['lang-css', /^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],
        ['lang-in.tag', /^(<\/?[a-z][^<>]*>)/i]
      ]),
    ['default-markup', 'htm', 'html', 'mxml', 'xhtml', 'xml', 'xsl'])
  registerLangHandler(
    createSimpleLexer(
      [
        [PR_PLAIN, /^[\s]+/, null, ' \t\r\n'],
        [PR_ATTRIB_VALUE, /^(?:\"[^\"]*\"?|\'[^\']*\'?)/, null, '\"\'']
      ],
      [
        [PR_TAG, /^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],
        [PR_ATTRIB_NAME, /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],
        ['lang-uq.val', /^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],
        [PR_PUNCTUATION, /^[=<>\/]+/],
        ['lang-js', /^on\w+\s*=\s*\"([^\"]+)\"/i],
        ['lang-js', /^on\w+\s*=\s*\'([^\']+)\'/i],
        ['lang-js', /^on\w+\s*=\s*([^\"\'>\s]+)/i],
        ['lang-css', /^style\s*=\s*\"([^\"]+)\"/i],
        ['lang-css', /^style\s*=\s*\'([^\']+)\'/i],
        ['lang-css', /^style\s*=\s*([^\"\'>\s]+)/i]
      ]),
    ['in.tag'])
  registerLangHandler(
    createSimpleLexer([], [[PR_ATTRIB_VALUE, /^[\s\S]+/]]), ['uq.val'])
  registerLangHandler(sourceDecorator({
    keywords: CPP_KEYWORDS,
    hashComments: true,
    cStyleComments: true,
    types: C_TYPES
  }), ['c', 'cc', 'cpp', 'cxx', 'cyc', 'm'])
  registerLangHandler(sourceDecorator({
    keywords: 'null,true,false'
  }), ['json'])
  registerLangHandler(sourceDecorator({
    keywords: CSHARP_KEYWORDS,
    hashComments: true,
    cStyleComments: true,
    verbatimStrings: true,
    types: C_TYPES
  }), ['cs'])
  registerLangHandler(sourceDecorator({
    keywords: JAVA_KEYWORDS,
    cStyleComments: true
  }), ['java'])
  registerLangHandler(sourceDecorator({
    keywords: SH_KEYWORDS,
    hashComments: true,
    multiLineStrings: true
  }), ['bash', 'bsh', 'csh', 'sh'])
  registerLangHandler(sourceDecorator({
    keywords: PYTHON_KEYWORDS,
    hashComments: true,
    multiLineStrings: true,
    tripleQuotedStrings: true
  }), ['cv', 'py', 'python'])
  registerLangHandler(sourceDecorator({
    keywords: PERL_KEYWORDS,
    hashComments: true,
    multiLineStrings: true,
    regexLiterals: 2 // multiline regex literals
  }), ['perl', 'pl', 'pm'])
  registerLangHandler(sourceDecorator({
    keywords: RUBY_KEYWORDS,
    hashComments: true,
    multiLineStrings: true,
    regexLiterals: true
  }), ['rb', 'ruby'])
  registerLangHandler(sourceDecorator({
    keywords: JSCRIPT_KEYWORDS,
    cStyleComments: true,
    regexLiterals: true
  }), ['javascript', 'js'])
  registerLangHandler(sourceDecorator({
    keywords: COFFEE_KEYWORDS,
    hashComments: 3, // ### style block comments
    cStyleComments: true,
    multilineStrings: true,
    tripleQuotedStrings: true,
    regexLiterals: true
  }), ['coffee'])
  registerLangHandler(sourceDecorator({
    keywords: RUST_KEYWORDS,
    cStyleComments: true,
    multilineStrings: true
  }), ['rc', 'rs', 'rust'])
  registerLangHandler(
    createSimpleLexer([], [[PR_STRING, /^[\s\S]+/]]), ['regex'])

  function applyDecorator (job) {
    const opt_langExtension = job.langExtension

    try {
      // Extract tags, and convert the source code to plain text.
      const sourceAndSpans = extractSourceSpans(job.sourceNode, job.pre)
      /** Plain text. @type {string} */
      const source = sourceAndSpans.sourceCode
      job.sourceCode = source
      job.spans = sourceAndSpans.spans
      job.basePos = 0

      // Apply the appropriate language handler
      langHandlerForExtension(opt_langExtension, source)(job)

      // Integrate the decorations and tags back into the source code,
      // modifying the sourceNode in place.
      recombineTagsAndDecorations(job)
    } catch (e) {
      if (win.console) {
        console.log(e && e.stack || e)
      }
    }
  }

  /**
   * Pretty print a chunk of code.
   * @param sourceCodeHtml {string} The HTML to pretty print.
   * @param opt_langExtension {string} The language name to use.
   *     Typically, a filename extension like 'cpp' or 'java'.
   * @param opt_numberLines {number|boolean} True to number lines,
   *     or the 1-indexed number of the first line in sourceCodeHtml.
   */
  function $prettyPrintOne (sourceCodeHtml, opt_langExtension, opt_numberLines) {
    let container = document.createElement('div')
    // This could cause images to load and onload listeners to fire.
    // E.g. <img onerror="alert(1337)" src="nosuchimage.png">.
    // We assume that the inner HTML is from a trusted source.
    // The pre-tag is required for IE8 which strips newlines from innerHTML
    // when it is injected into a <pre> tag.
    // http://stackoverflow.com/questions/451486/pre-tag-loses-line-breaks-when-setting-innerhtml-in-ie
    // http://stackoverflow.com/questions/195363/inserting-a-newline-into-a-pre-tag-ie-javascript
    container.innerHTML = '<pre>' + sourceCodeHtml + '</pre>'
    container = container.firstChild
    if (opt_numberLines) {
      numberLines(container, opt_numberLines, true)
    }

    const job = {
      langExtension: opt_langExtension,
      numberLines: opt_numberLines,
      sourceNode: container,
      pre: 1
    }
    applyDecorator(job)
    return container.innerHTML
  }

  /**
    * Find all the {@code <pre>} and {@code <code>} tags in the DOM with
    * {@code class=prettyprint} and prettify them.
    *
    * @param {Function} opt_whenDone called when prettifying is done.
    * @param {HTMLElement|HTMLDocument} opt_root an element or document
    *   containing all the elements to pretty print.
    *   Defaults to {@code document.body}.
    */
  function $prettyPrint (opt_whenDone, opt_root) {
    const root = opt_root || document.body
    const doc = root.ownerDocument || document
    function byTagName (tn) { return root.getElementsByTagName(tn) }
    // fetch a list of nodes to rewrite
    let codeSegments = [byTagName('pre'), byTagName('code'), byTagName('xmp')]
    const elements = []
    for (let i = 0; i < codeSegments.length; ++i) {
      for (let j = 0, n = codeSegments[i].length; j < n; ++j) {
        elements.push(codeSegments[i][j])
      }
    }
    codeSegments = null

    let clock = Date
    if (!clock.now) {
      clock = { now: function () { return +(new Date()) } }
    }

    // The loop is broken into a series of continuations to make sure that we
    // don't make the browser unresponsive when rewriting a large page.
    let k = 0
    let prettyPrintingJob

    const langExtensionRe = /\blang(?:uage)?-([\w.]+)(?!\S)/
    const prettyPrintRe = /\bprettyprint\b/
    const prettyPrintedRe = /\bprettyprinted\b/
    const preformattedTagNameRe = /pre|xmp/i
    const codeRe = /^code$/i
    const preCodeXmpRe = /^(?:pre|code|xmp)$/i
    const EMPTY = {}

    function doWork () {
      const endTime = (win.PR_SHOULD_USE_CONTINUATION
        ? clock.now() + 250
        : /* ms */ Infinity)
      for (; k < elements.length && clock.now() < endTime; k++) {
        const cs = elements[k]

        // Look for a preceding comment like
        // <?prettify lang="..." linenums="..."?>
        var attrs = EMPTY
        {
          for (let preceder = cs; (preceder = preceder.previousSibling);) {
            const nt = preceder.nodeType
            // <?foo?> is parsed by HTML 5 to a comment node (8)
            // like <!--?foo?-->, but in XML is a processing instruction
            const value = (nt === 7 || nt === 8) && preceder.nodeValue
            if (value
              ? !/^\??prettify\b/.test(value)
              : (nt !== 3 || /\S/.test(preceder.nodeValue))) {
              // Skip over white-space text nodes but not others.
              break
            }
            if (value) {
              attrs = {}
              value.replace(
                /\b(\w+)=([\w:.%+-]+)/g,
                function (_, name, value) { attrs[name] = value })
              break
            }
          }
        }

        const className = cs.className
        if ((attrs !== EMPTY || prettyPrintRe.test(className)) &&
            // Don't redo this if we've already done it.
            // This allows recalling pretty print to just prettyprint elements
            // that have been added to the page since last call.
            !prettyPrintedRe.test(className)) {
          // make sure this is not nested in an already prettified element
          let nested = false
          for (let p = cs.parentNode; p; p = p.parentNode) {
            const tn = p.tagName
            if (preCodeXmpRe.test(tn) &&
                p.className && prettyPrintRe.test(p.className)) {
              nested = true
              break
            }
          }
          if (!nested) {
            // Mark done.  If we fail to prettyprint for whatever reason,
            // we shouldn't try again.
            cs.className += ' prettyprinted'

            // If the classes includes a language extensions, use it.
            // Language extensions can be specified like
            //     <pre class="prettyprint lang-cpp">
            // the language extension "cpp" is used to find a language handler
            // as passed to PR.registerLangHandler.
            // HTML5 recommends that a language be specified using "language-"
            // as the prefix instead.  Google Code Prettify supports both.
            // http://dev.w3.org/html5/spec-author-view/the-code-element.html
            let langExtension = attrs.lang
            if (!langExtension) {
              langExtension = className.match(langExtensionRe)
              // Support <pre class="prettyprint"><code class="language-c">
              var wrapper
              if (!langExtension && (wrapper = childContentWrapper(cs)) &&
                  codeRe.test(wrapper.tagName)) {
                langExtension = wrapper.className.match(langExtensionRe)
              }

              if (langExtension) { langExtension = langExtension[1] }
            }

            var preformatted
            if (preformattedTagNameRe.test(cs.tagName)) {
              preformatted = 1
            } else {
              const currentStyle = cs.currentStyle
              const defaultView = doc.defaultView
              const whitespace = (
                currentStyle
                  ? currentStyle.whiteSpace
                  : (defaultView &&
                     defaultView.getComputedStyle)
                      ? defaultView.getComputedStyle(cs, null)
                        .getPropertyValue('white-space')
                      : 0)
              preformatted = whitespace &&
                  whitespace.substring(0, 3) === 'pre'
            }

            // Look for a class like linenums or linenums:<n> where <n> is the
            // 1-indexed number of the first line.
            let lineNums = attrs.linenums
            if (!(lineNums = lineNums === 'true' || +lineNums)) {
              lineNums = className.match(/\blinenums\b(?::(\d+))?/)
              lineNums =
                lineNums
                  ? lineNums[1] && lineNums[1].length
                    ? +lineNums[1]
                    : true
                  : false
            }
            if (lineNums) { numberLines(cs, lineNums, preformatted) }

            // do the pretty printing
            prettyPrintingJob = {
              langExtension,
              sourceNode: cs,
              numberLines: lineNums,
              pre: preformatted
            }
            applyDecorator(prettyPrintingJob)
          }
        }
      }
      if (k < elements.length) {
        // finish up in a continuation
        setTimeout(doWork, 250)
      } else if (typeof opt_whenDone === 'function') {
        opt_whenDone()
      }
    }

    doWork()
  }

  /**
   * Contains functions for creating and registering new language handlers.
   * @type {Object}
   */
  const PR = win.PR = {
    createSimpleLexer,
    registerLangHandler,
    sourceDecorator,
    PR_ATTRIB_NAME,
    PR_ATTRIB_VALUE,
    PR_COMMENT,
    PR_DECLARATION,
    PR_KEYWORD,
    PR_LITERAL,
    PR_NOCODE,
    PR_PLAIN,
    PR_PUNCTUATION,
    PR_SOURCE,
    PR_STRING,
    PR_TAG,
    PR_TYPE,
    prettyPrintOne:
           IN_GLOBAL_SCOPE
             ? (win.prettyPrintOne = $prettyPrintOne)
             : (prettyPrintOne = $prettyPrintOne),
    prettyPrint: prettyPrint =
           IN_GLOBAL_SCOPE
             ? (win.prettyPrint = $prettyPrint)
             : (prettyPrint = $prettyPrint)
  }

  // Make PR available via the Asynchronous Module Definition (AMD) API.
  // Per https://github.com/amdjs/amdjs-api/wiki/AMD:
  // The Asynchronous Module Definition (AMD) API specifies a
  // mechanism for defining modules such that the module and its
  // dependencies can be asynchronously loaded.
  // ...
  // To allow a clear indicator that a global define function (as
  // needed for script src browser loading) conforms to the AMD API,
  // any global define function SHOULD have a property called "amd"
  // whose value is an object. This helps avoid conflict with any
  // other existing JavaScript code that could have defined a define()
  // function that does not conform to the AMD API.
  if (typeof define === 'function' && define.amd) {
    define('google-code-prettify', [], function () {
      return PR
    })
  }
})()
// lang-css
// Copyright (C) 2009 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview
 * Registers a language handler for CSS.
 *
 *
 * To use, include prettify.js and this file in your HTML page.
 * Then put your code in an HTML tag like
 *      <pre class="prettyprint lang-css"></pre>
 *
 *
 * http://www.w3.org/TR/CSS21/grammar.html Section G2 defines the lexical
 * grammar.  This scheme does not recognize keywords containing escapes.
 *
 * @author mikesamuel@gmail.com
 */

// This file is a call to a function defined in prettify.js which defines a
// lexical scanner for CSS and maps tokens to styles.

// The call to PR['registerLangHandler'] is quoted so that Closure Compiler
// will not rename the call so that this language extensions can be
// compiled/minified separately from one another.  Other symbols defined in
// prettify.js are similarly quoted.

// The call is structured thus:
// PR['registerLangHandler'](
//    PR['createSimpleLexer'](
//        shortcutPatterns,
//        fallThroughPatterns),
//    [languageId0, ..., languageIdN])

// Langugage IDs
// =============
// The language IDs are typically the file extensions of source files for
// that language so that users can syntax highlight arbitrary files based
// on just the extension.  This is heuristic, but works pretty well in
// practice.

// Patterns
// ========
// Lexers are typically implemented as a set of regular expressions.
// The SimpleLexer function takes regular expressions, styles, and some
// pragma-info and produces a lexer.  A token description looks like
//   [STYLE_NAME, /regular-expression/, pragmas]

// Initially, simple lexer's inner loop looked like:

//    while sourceCode is not empty:
//      try each regular expression in order until one matches
//      remove the matched portion from sourceCode

// This was really slow for large files because some JS interpreters
// do a buffer copy on the matched portion which is O(n*n)

// The current loop now looks like

//    1. use js-modules/combinePrefixPatterns.js to
//       combine all regular expressions into one
//    2. use a single global regular expresion match to extract all tokens
//    3. for each token try regular expressions in order until one matches it
//       and classify it using the associated style

// This is a lot more efficient but it does mean that lookahead and lookbehind
// can't be used across boundaries to classify tokens.

// Sometimes we need lookahead and lookbehind and sometimes we want to handle
// embedded language -- JavaScript or CSS embedded in HTML, or inline assembly
// in C.

// If a particular pattern has a numbered group, and its style pattern starts
// with "lang-" as in
//    ['lang-js', /<script>(.*?)<\/script>/]
// then the token classification step breaks the token into pieces.
// Group 1 is re-parsed using the language handler for "lang-js", and the
// surrounding portions are reclassified using the current language handler.
// This mechanism gives us both lookahead, lookbehind, and language embedding.

// Shortcut Patterns
// =================
// A shortcut pattern is one that is tried before other patterns if the first
// character in the token is in the string of characters.
// This very effectively lets us make quick correct decisions for common token
// types.

// All other patterns are fall-through patterns.

// The comments inline below refer to productions in the CSS specification's
// lexical grammar.  See link above.
PR.registerLangHandler(
  PR.createSimpleLexer(
    // Shortcut patterns.
    [
      // The space production <s>
      [PR.PR_PLAIN, /^[ \t\r\n\f]+/, null, ' \t\r\n\f']
    ],
    // Fall-through patterns.
    [
      // Quoted strings.  <string1> and <string2>
      [PR.PR_STRING,
        /^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/, null],
      [PR.PR_STRING,
        /^\'(?:[^\n\r\f\\\']|\\(?:\r\n?|\n|\f)|\\[\s\S])*\'/, null],
      ['lang-css-str', /^url\(([^\)\"\']+)\)/i],
      [PR.PR_KEYWORD,
        /^(?:url|rgb|\!important|@import|@page|@media|@charset|inherit)(?=[^\-\w]|$)/i,
        null],
      // A property name -- an identifier followed by a colon.
      ['lang-css-kw', /^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i],
      // A C style block comment.  The <comment> production.
      [PR.PR_COMMENT, /^\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\//],
      // Escaping text spans
      [PR.PR_COMMENT, /^(?:<!--|-->)/],
      // A number possibly containing a suffix.
      [PR.PR_LITERAL, /^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i],
      // A hex color
      [PR.PR_LITERAL, /^#(?:[0-9a-f]{3}){1,2}\b/i],
      // An identifier
      [PR.PR_PLAIN,
        /^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i],
      // A run of punctuation
      [PR.PR_PUNCTUATION, /^[^\s\w\'\"]+/]
    ]),
  ['css'])
// Above we use embedded languages to highlight property names (identifiers
// followed by a colon) differently from identifiers in values.
PR.registerLangHandler(
  PR.createSimpleLexer([],
    [
      [PR.PR_KEYWORD,
        /^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i]
    ]),
  ['css-kw'])
// The content of an unquoted URL literal like url(http://foo/img.png) should
// be colored as string content.  This language handler is used above in the
// URL production to do so.
PR.registerLangHandler(
  PR.createSimpleLexer([],
    [
      [PR.PR_STRING, /^[^\)\"\']+/]
    ]),
  ['css-str'])

// jquery.qrcode
;(function (r) {
  r.fn.qrcode = function (h) {
    let s; function u (a) { this.mode = s; this.data = a } function o (a, c) { this.typeNumber = a; this.errorCorrectLevel = c; this.modules = null; this.moduleCount = 0; this.dataCache = null; this.dataList = [] } function q (a, c) { if (void 0 == a.length) throw Error(a.length + '/' + c); for (var d = 0; d < a.length && a[d] == 0;)d++; this.num = Array(a.length - d + c); for (let b = 0; b < a.length - d; b++) this.num[b] = a[b + d] } function p (a, c) { this.totalCount = a; this.dataCount = c } function t () { this.buffer = []; this.length = 0 }u.prototype = {
      getLength: function () { return this.data.length },
      write: function (a) { for (let c = 0; c < this.data.length; c++)a.put(this.data.charCodeAt(c), 8) }
    }; o.prototype = {
      addData: function (a) { this.dataList.push(new u(a)); this.dataCache = null },
      isDark: function (a, c) { if (a < 0 || this.moduleCount <= a || c < 0 || this.moduleCount <= c) throw Error(a + ',' + c); return this.modules[a][c] },
      getModuleCount: function () { return this.moduleCount },
      make: function () {
        if (this.typeNumber < 1) {
          for (var a = 1, a = 1; a < 40; a++) {
            for (var c = p.getRSBlocks(a, this.errorCorrectLevel), d = new t(), b = 0, e = 0; e < c.length; e++)b += c[e].dataCount
            for (e = 0; e < this.dataList.length; e++)c = this.dataList[e], d.put(c.mode, 4), d.put(c.getLength(), j.getLengthInBits(c.mode, a)), c.write(d); if (d.getLengthInBits() <= 8 * b) break
          } this.typeNumber = a
        } this.makeImpl(!1, this.getBestMaskPattern())
      },
      makeImpl: function (a, c) {
        this.moduleCount = 4 * this.typeNumber + 17; this.modules = Array(this.moduleCount); for (let d = 0; d < this.moduleCount; d++) { this.modules[d] = Array(this.moduleCount); for (let b = 0; b < this.moduleCount; b++) this.modules[d][b] = null } this.setupPositionProbePattern(0, 0); this.setupPositionProbePattern(this.moduleCount -
7, 0); this.setupPositionProbePattern(0, this.moduleCount - 7); this.setupPositionAdjustPattern(); this.setupTimingPattern(); this.setupTypeInfo(a, c); this.typeNumber >= 7 && this.setupTypeNumber(a); this.dataCache == null && (this.dataCache = o.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)); this.mapData(this.dataCache, c)
      },
      setupPositionProbePattern: function (a, c) {
        for (let d = -1; d <= 7; d++) {
          if (!(a + d <= -1 || this.moduleCount <= a + d)) {
            for (let b = -1; b <= 7; b++) {
              c + b <= -1 || this.moduleCount <= c + b || (this.modules[a + d][c + b] =
d >= 0 && d <= 6 && (b == 0 || b == 6) || b >= 0 && b <= 6 && (d == 0 || d == 6) || d >= 2 && d <= 4 && b >= 2 && b <= 4 ? !0 : !1)
            }
          }
        }
      },
      getBestMaskPattern: function () { for (var a = 0, c = 0, d = 0; d < 8; d++) { this.makeImpl(!0, d); const b = j.getLostPoint(this); if (d == 0 || a > b)a = b, c = d } return c },
      createMovieClip: function (a, c, d) { a = a.createEmptyMovieClip(c, d); this.make(); for (c = 0; c < this.modules.length; c++) for (var d = 1 * c, b = 0; b < this.modules[c].length; b++) { const e = 1 * b; this.modules[c][b] && (a.beginFill(0, 100), a.moveTo(e, d), a.lineTo(e + 1, d), a.lineTo(e + 1, d + 1), a.lineTo(e, d + 1), a.endFill()) } return a },
      setupTimingPattern: function () { for (var a = 8; a < this.moduleCount - 8; a++) this.modules[a][6] == null && (this.modules[a][6] = a % 2 == 0); for (a = 8; a < this.moduleCount - 8; a++) this.modules[6][a] == null && (this.modules[6][a] = a % 2 == 0) },
      setupPositionAdjustPattern: function () { for (let a = j.getPatternPosition(this.typeNumber), c = 0; c < a.length; c++) for (let d = 0; d < a.length; d++) { const b = a[c]; const e = a[d]; if (this.modules[b][e] == null) for (let f = -2; f <= 2; f++) for (let i = -2; i <= 2; i++) this.modules[b + f][e + i] = f == -2 || f == 2 || i == -2 || i == 2 || f == 0 && i == 0 ? !0 : !1 } },
      setupTypeNumber: function (a) {
        for (var c =
j.getBCHTypeNumber(this.typeNumber), d = 0; d < 18; d++) { var b = !a && (c >> d & 1) == 1; this.modules[Math.floor(d / 3)][d % 3 + this.moduleCount - 8 - 3] = b } for (d = 0; d < 18; d++)b = !a && (c >> d & 1) == 1, this.modules[d % 3 + this.moduleCount - 8 - 3][Math.floor(d / 3)] = b
      },
      setupTypeInfo: function (a, c) {
        for (var d = j.getBCHTypeInfo(this.errorCorrectLevel << 3 | c), b = 0; b < 15; b++) { var e = !a && (d >> b & 1) == 1; b < 6 ? this.modules[b][8] = e : b < 8 ? this.modules[b + 1][8] = e : this.modules[this.moduleCount - 15 + b][8] = e } for (b = 0; b < 15; b++) {
          e = !a && (d >> b & 1) == 1, b < 8
            ? this.modules[8][this.moduleCount -
b - 1] = e
            : b < 9 ? this.modules[8][15 - b - 1 + 1] = e : this.modules[8][15 - b - 1] = e
        } this.modules[this.moduleCount - 8][8] = !a
      },
      mapData: function (a, c) { for (let d = -1, b = this.moduleCount - 1, e = 7, f = 0, i = this.moduleCount - 1; i > 0; i -= 2) for (i == 6 && i--; ;) { for (let g = 0; g < 2; g++) if (this.modules[b][i - g] == null) { let n = !1; f < a.length && (n = (a[f] >>> e & 1) == 1); j.getMask(c, b, i - g) && (n = !n); this.modules[b][i - g] = n; e--; e == -1 && (f++, e = 7) }b += d; if (b < 0 || this.moduleCount <= b) { b -= d; d = -d; break } } }
    }; o.PAD0 = 236; o.PAD1 = 17; o.createData = function (a, c, d) {
      for (var c = p.getRSBlocks(a,
          c), b = new t(), e = 0; e < d.length; e++) { const f = d[e]; b.put(f.mode, 4); b.put(f.getLength(), j.getLengthInBits(f.mode, a)); f.write(b) } for (e = a = 0; e < c.length; e++)a += c[e].dataCount; if (b.getLengthInBits() > 8 * a) throw Error('code length overflow. (' + b.getLengthInBits() + '>' + 8 * a + ')'); for (b.getLengthInBits() + 4 <= 8 * a && b.put(0, 4); b.getLengthInBits() % 8 != 0;)b.putBit(!1); for (;!(b.getLengthInBits() >= 8 * a);) { b.put(o.PAD0, 8); if (b.getLengthInBits() >= 8 * a) break; b.put(o.PAD1, 8) } return o.createBytes(b, c)
    }; o.createBytes = function (a, c) {
      for (var d =
0, b = 0, e = 0, f = Array(c.length), i = Array(c.length), g = 0; g < c.length; g++) { var n = c[g].dataCount; let h = c[g].totalCount - n; var b = Math.max(b, n); var e = Math.max(e, h); f[g] = Array(n); for (var k = 0; k < f[g].length; k++)f[g][k] = 255 & a.buffer[k + d]; d += n; k = j.getErrorCorrectPolynomial(h); n = (new q(f[g], k.getLength() - 1)).mod(k); i[g] = Array(k.getLength() - 1); for (k = 0; k < i[g].length; k++)h = k + n.getLength() - i[g].length, i[g][k] = h >= 0 ? n.get(h) : 0 } for (k = g = 0; k < c.length; k++)g += c[k].totalCount; d = Array(g); for (k = n = 0; k < b; k++) {
        for (g = 0; g < c.length; g++) {
          k < f[g].length &&
(d[n++] = f[g][k])
        }
      } for (k = 0; k < e; k++) for (g = 0; g < c.length; g++)k < i[g].length && (d[n++] = i[g][k]); return d
    }; s = 4; for (var j = {
        PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52,
          78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
        G15: 1335,
        G18: 7973,
        G15_MASK: 21522,
        getBCHTypeInfo: function (a) { for (var c = a << 10; j.getBCHDigit(c) - j.getBCHDigit(j.G15) >= 0;)c ^= j.G15 << j.getBCHDigit(c) - j.getBCHDigit(j.G15); return (a << 10 | c) ^ j.G15_MASK },
        getBCHTypeNumber: function (a) {
          for (var c = a << 12; j.getBCHDigit(c) -
j.getBCHDigit(j.G18) >= 0;)c ^= j.G18 << j.getBCHDigit(c) - j.getBCHDigit(j.G18); return a << 12 | c
        },
        getBCHDigit: function (a) { for (var c = 0; a != 0;)c++, a >>>= 1; return c },
        getPatternPosition: function (a) { return j.PATTERN_POSITION_TABLE[a - 1] },
        getMask: function (a, c, d) {
          switch (a) {
            case 0:return (c + d) % 2 == 0; case 1:return c % 2 == 0; case 2:return d % 3 == 0; case 3:return (c + d) % 3 == 0; case 4:return (Math.floor(c / 2) + Math.floor(d / 3)) % 2 == 0; case 5:return c * d % 2 + c * d % 3 == 0; case 6:return (c * d % 2 + c * d % 3) % 2 == 0; case 7:return (c * d % 3 + (c + d) % 2) % 2 == 0; default:throw Error('bad maskPattern:' +
a)
          }
        },
        getErrorCorrectPolynomial: function (a) { for (var c = new q([1], 0), d = 0; d < a; d++)c = c.multiply(new q([1, l.gexp(d)], 0)); return c },
        getLengthInBits: function (a, c) {
          if (c >= 1 && c < 10) switch (a) { case 1:return 10; case 2:return 9; case s:return 8; case 8:return 8; default:throw Error('mode:' + a) } else if (c < 27) switch (a) { case 1:return 12; case 2:return 11; case s:return 16; case 8:return 10; default:throw Error('mode:' + a) } else if (c < 41) {
            switch (a) {
              case 1:return 14; case 2:return 13; case s:return 16; case 8:return 12; default:throw Error('mode:' +
a)
            }
          } else throw Error('type:' + c)
        },
        getLostPoint: function (a) {
          for (var c = a.getModuleCount(), d = 0, b = 0; b < c; b++) for (var e = 0; e < c; e++) { for (var f = 0, i = a.isDark(b, e), g = -1; g <= 1; g++) if (!(b + g < 0 || c <= b + g)) for (let h = -1; h <= 1; h++)e + h < 0 || c <= e + h || g == 0 && h == 0 || i == a.isDark(b + g, e + h) && f++; f > 5 && (d += 3 + f - 5) } for (b = 0; b < c - 1; b++) for (e = 0; e < c - 1; e++) if (f = 0, a.isDark(b, e) && f++, a.isDark(b + 1, e) && f++, a.isDark(b, e + 1) && f++, a.isDark(b + 1, e + 1) && f++, f == 0 || f == 4)d += 3; for (b = 0; b < c; b++) {
            for (e = 0; e < c - 6; e++) {
              a.isDark(b, e) && !a.isDark(b, e + 1) && a.isDark(b, e +
2) && a.isDark(b, e + 3) && a.isDark(b, e + 4) && !a.isDark(b, e + 5) && a.isDark(b, e + 6) && (d += 40)
            }
          } for (e = 0; e < c; e++) for (b = 0; b < c - 6; b++)a.isDark(b, e) && !a.isDark(b + 1, e) && a.isDark(b + 2, e) && a.isDark(b + 3, e) && a.isDark(b + 4, e) && !a.isDark(b + 5, e) && a.isDark(b + 6, e) && (d += 40); for (e = f = 0; e < c; e++) for (b = 0; b < c; b++)a.isDark(b, e) && f++; a = Math.abs(100 * f / c / c - 50) / 5; return d + 10 * a
        }
      }, l = {
        glog: function (a) { if (a < 1) throw Error('glog(' + a + ')'); return l.LOG_TABLE[a] },
        gexp: function (a) { for (;a < 0;)a += 255; for (;a >= 256;)a -= 255; return l.EXP_TABLE[a] },
        EXP_TABLE: Array(256),
        LOG_TABLE: Array(256)
      }, m = 0; m < 8; m++)l.EXP_TABLE[m] = 1 << m; for (m = 8; m < 256; m++)l.EXP_TABLE[m] = l.EXP_TABLE[m - 4] ^ l.EXP_TABLE[m - 5] ^ l.EXP_TABLE[m - 6] ^ l.EXP_TABLE[m - 8]; for (m = 0; m < 255; m++)l.LOG_TABLE[l.EXP_TABLE[m]] = m; q.prototype = {
      get: function (a) { return this.num[a] },
      getLength: function () { return this.num.length },
      multiply: function (a) { for (var c = Array(this.getLength() + a.getLength() - 1), d = 0; d < this.getLength(); d++) for (let b = 0; b < a.getLength(); b++)c[d + b] ^= l.gexp(l.glog(this.get(d)) + l.glog(a.get(b))); return new q(c, 0) },
      mod: function (a) {
        if (this.getLength() - a.getLength() <
0) return this; for (var c = l.glog(this.get(0)) - l.glog(a.get(0)), d = Array(this.getLength()), b = 0; b < this.getLength(); b++)d[b] = this.get(b); for (b = 0; b < a.getLength(); b++)d[b] ^= l.gexp(l.glog(a.get(b)) + c); return (new q(d, 0)).mod(a)
      }
    }; p.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27],
      [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146,
        116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15,
        43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45,
        3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19,
        55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10,
        45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]]; p.getRSBlocks = function (a, c) { const d = p.getRsBlockTable(a, c); if (void 0 == d) throw Error('bad rs block @ typeNumber:' + a + '/errorCorrectLevel:' + c); for (var b = d.length / 3, e = [], f = 0; f < b; f++) for (let h = d[3 * f + 0], g = d[3 * f + 1], j = d[3 * f + 2], l = 0; l < h; l++)e.push(new p(g, j)); return e }; p.getRsBlockTable = function (a, c) {
      switch (c) {
        case 1:return p.RS_BLOCK_TABLE[4 * (a - 1) + 0]; case 0:return p.RS_BLOCK_TABLE[4 * (a - 1) + 1]; case 3:return p.RS_BLOCK_TABLE[4 *
(a - 1) + 2]; case 2:return p.RS_BLOCK_TABLE[4 * (a - 1) + 3]
      }
    }; t.prototype = { get: function (a) { return (this.buffer[Math.floor(a / 8)] >>> 7 - a % 8 & 1) == 1 }, put: function (a, c) { for (let d = 0; d < c; d++) this.putBit((a >>> c - d - 1 & 1) == 1) }, getLengthInBits: function () { return this.length }, putBit: function (a) { const c = Math.floor(this.length / 8); this.buffer.length <= c && this.buffer.push(0); a && (this.buffer[c] |= 128 >>> this.length % 8); this.length++ } }; typeof h === 'string' && (h = { text: h }); h = r.extend({}, {
      render: 'canvas',
      width: 256,
      height: 256,
      typeNumber: -1,
      correctLevel: 2,
      background: '#ffffff',
      foreground: '#000000'
    }, h); return this.each(function () {
      let a; if (h.render == 'canvas') {
        a = new o(h.typeNumber, h.correctLevel); a.addData(h.text); a.make(); var c = document.createElement('canvas'); c.width = h.width; c.height = h.height; for (var d = c.getContext('2d'), b = h.width / a.getModuleCount(), e = h.height / a.getModuleCount(), f = 0; f < a.getModuleCount(); f++) {
          for (var i = 0; i < a.getModuleCount(); i++) {
            d.fillStyle = a.isDark(f, i) ? h.foreground : h.background; const g = Math.ceil((i + 1) * b) - Math.floor(i * b)
            const j = Math.ceil((f + 1) * b) - Math.floor(f * b); d.fillRect(Math.round(i * b), Math.round(f * e), g, j)
          }
        }
      } else {
        a = new o(h.typeNumber, h.correctLevel); a.addData(h.text); a.make(); c = r('<table></table>').css('width', h.width + 'px').css('height', h.height + 'px').css('border', '0px').css('border-collapse', 'collapse').css('background-color', h.background); d = h.width / a.getModuleCount(); b = h.height / a.getModuleCount(); for (e = 0; e < a.getModuleCount(); e++) {
          f = r('<tr></tr>').css('height', b + 'px').appendTo(c); for (i = 0; i < a.getModuleCount(); i++) {
            r('<td></td>').css('width',
              d + 'px').css('background-color', a.isDark(e, i) ? h.foreground : h.background).appendTo(f)
          }
        }
      }a = c; $(a).appendTo(this)
    })
  }
})($)
