/*
 AngularJS v1.3.15
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (Q, W, t) {
  'use strict'; function R (b) { return function () { let a = arguments[0]; let c; c = '[' + (b ? b + ':' : '') + a + '] http://errors.angularjs.org/1.3.15/' + (b ? b + '/' : '') + a; for (a = 1; a < arguments.length; a++) { c = c + (a == 1 ? '?' : '&') + 'p' + (a - 1) + '='; const d = encodeURIComponent; var e; e = arguments[a]; e = typeof e === 'function' ? e.toString().replace(/ \{[\s\S]*$/, '') : typeof e === 'undefined' ? 'undefined' : typeof e !== 'string' ? JSON.stringify(e) : e; c += d(e) } return Error(c) } } function Sa (b) {
    if (b == null || Ta(b)) return !1; const a = b.length; return b.nodeType ===
qa && a
      ? !0
      : C(b) || H(b) || a === 0 || typeof a === 'number' && a > 0 && a - 1 in b
  } function r (b, a, c) { let d, e; if (b) if (G(b)) for (d in b)d == 'prototype' || d == 'length' || d == 'name' || b.hasOwnProperty && !b.hasOwnProperty(d) || a.call(c, b[d], d, b); else if (H(b) || Sa(b)) { const f = typeof b !== 'object'; d = 0; for (e = b.length; d < e; d++)(f || d in b) && a.call(c, b[d], d, b) } else if (b.forEach && b.forEach !== r)b.forEach(a, c, b); else for (d in b)b.hasOwnProperty(d) && a.call(c, b[d], d, b); return b } function Ed (b, a, c) {
    for (var d = Object.keys(b).sort(), e = 0; e < d.length; e++) {
      a.call(c,
        b[d[e]], d[e])
    } return d
  } function mc (b) { return function (a, c) { b(c, a) } } function Fd () { return ++ob } function nc (b, a) { a ? b.$$hashKey = a : delete b.$$hashKey } function w (b) { for (var a = b.$$hashKey, c = 1, d = arguments.length; c < d; c++) { const e = arguments[c]; if (e) for (let f = Object.keys(e), g = 0, h = f.length; g < h; g++) { const l = f[g]; b[l] = e[l] } }nc(b, a); return b } function aa (b) { return parseInt(b, 10) } function Ob (b, a) { return w(Object.create(b), a) } function E () {} function ra (b) { return b } function ea (b) { return function () { return b } } function x (b) {
    return typeof b ===
'undefined'
  } function y (b) { return typeof b !== 'undefined' } function J (b) { return b !== null && typeof b === 'object' } function C (b) { return typeof b === 'string' } function Y (b) { return typeof b === 'number' } function ga (b) { return Ca.call(b) === '[object Date]' } function G (b) { return typeof b === 'function' } function Ua (b) { return Ca.call(b) === '[object RegExp]' } function Ta (b) { return b && b.window === b } function Va (b) { return b && b.$evalAsync && b.$watch } function Wa (b) { return typeof b === 'boolean' } function oc (b) {
    return !(!b || !(b.nodeName || b.prop &&
b.attr && b.find))
  } function Gd (b) { const a = {}; b = b.split(','); let c; for (c = 0; c < b.length; c++)a[b[c]] = !0; return a } function va (b) { return z(b.nodeName || b[0] && b[0].nodeName) } function Xa (b, a) { const c = b.indexOf(a); c >= 0 && b.splice(c, 1); return a } function Da (b, a, c, d) {
    if (Ta(b) || Va(b)) throw Ja('cpws'); if (a) {
      if (b === a) throw Ja('cpi'); c = c || []; d = d || []; if (J(b)) { var e = c.indexOf(b); if (e !== -1) return d[e]; c.push(b); d.push(a) } if (H(b)) for (var f = a.length = 0; f < b.length; f++)e = Da(b[f], null, c, d), J(b[f]) && (c.push(b[f]), d.push(e)), a.push(e)
      else { const g = a.$$hashKey; H(a) ? a.length = 0 : r(a, function (b, c) { delete a[c] }); for (f in b)b.hasOwnProperty(f) && (e = Da(b[f], null, c, d), J(b[f]) && (c.push(b[f]), d.push(e)), a[f] = e); nc(a, g) }
    } else if (a = b)H(b) ? a = Da(b, [], c, d) : ga(b) ? a = new Date(b.getTime()) : Ua(b) ? (a = new RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), a.lastIndex = b.lastIndex) : J(b) && (e = Object.create(Object.getPrototypeOf(b)), a = Da(b, e, c, d)); return a
  } function sa (b, a) {
    if (H(b)) { a = a || []; for (var c = 0, d = b.length; c < d; c++)a[c] = b[c] } else if (J(b)) {
      for (c in a = a || {},
      b) if (c.charAt(0) !== '$' || c.charAt(1) !== '$')a[c] = b[c]
    } return a || b
  } function ha (b, a) {
    if (b === a) return !0; if (b === null || a === null) return !1; if (b !== b && a !== a) return !0; let c = typeof b; let d; if (c === typeof a && c == 'object') {
      if (H(b)) { if (!H(a)) return !1; if ((c = b.length) == a.length) { for (d = 0; d < c; d++) if (!ha(b[d], a[d])) return !1; return !0 } } else {
        if (ga(b)) return ga(a) ? ha(b.getTime(), a.getTime()) : !1; if (Ua(b)) return Ua(a) ? b.toString() == a.toString() : !1; if (Va(b) || Va(a) || Ta(b) || Ta(a) || H(a) || ga(a) || Ua(a)) return !1; c = {}; for (d in b) {
          if (d.charAt(0) !==
'$' && !G(b[d])) { if (!ha(b[d], a[d])) return !1; c[d] = !0 }
        } for (d in a) if (!c.hasOwnProperty(d) && d.charAt(0) !== '$' && a[d] !== t && !G(a[d])) return !1; return !0
      }
    } return !1
  } function Ya (b, a, c) { return b.concat(Za.call(a, c)) } function pc (b, a) { const c = arguments.length > 2 ? Za.call(arguments, 2) : []; return !G(a) || a instanceof RegExp ? a : c.length ? function () { return arguments.length ? a.apply(b, Ya(c, arguments, 0)) : a.apply(b, c) } : function () { return arguments.length ? a.apply(b, arguments) : a.call(b) } } function Hd (b, a) {
    let c = a; typeof b === 'string' &&
b.charAt(0) === '$' && b.charAt(1) === '$'
      ? c = t
      : Ta(a) ? c = '$WINDOW' : a && W === a ? c = '$DOCUMENT' : Va(a) && (c = '$SCOPE'); return c
  } function $a (b, a) { if (typeof b === 'undefined') return t; Y(a) || (a = a ? 2 : null); return JSON.stringify(b, Hd, a) } function qc (b) { return C(b) ? JSON.parse(b) : b } function wa (b) { b = A(b).clone(); try { b.empty() } catch (a) {} const c = A('<div>').append(b).html(); try { return b[0].nodeType === pb ? z(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) { return '<' + z(b) }) } catch (d) { return z(c) } } function rc (b) { try { return decodeURIComponent(b) } catch (a) {} }
  function sc (b) { const a = {}; let c; let d; r((b || '').split('&'), function (b) { b && (c = b.replace(/\+/g, '%20').split('='), d = rc(c[0]), y(d) && (b = y(c[1]) ? rc(c[1]) : !0, tc.call(a, d) ? H(a[d]) ? a[d].push(b) : a[d] = [a[d], b] : a[d] = b)) }); return a } function Pb (b) { const a = []; r(b, function (b, d) { H(b) ? r(b, function (b) { a.push(Ea(d, !0) + (!0 === b ? '' : '=' + Ea(b, !0))) }) : a.push(Ea(d, !0) + (!0 === b ? '' : '=' + Ea(b, !0))) }); return a.length ? a.join('&') : '' } function qb (b) { return Ea(b, !0).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+') } function Ea (b, a) {
    return encodeURIComponent(b).replace(/%40/gi,
      '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%3B/gi, ';').replace(/%20/g, a ? '%20' : '+')
  } function Id (b, a) { let c; let d; const e = rb.length; b = A(b); for (d = 0; d < e; ++d) if (c = rb[d] + a, C(c = b.attr(c))) return c; return null } function Jd (b, a) {
    let c; let d; const e = {}; r(rb, function (a) { a += 'app'; !c && b.hasAttribute && b.hasAttribute(a) && (c = b, d = b.getAttribute(a)) }); r(rb, function (a) { a += 'app'; let e; !c && (e = b.querySelector('[' + a.replace(':', '\\:') + ']')) && (c = e, d = e.getAttribute(a)) }); c && (e.strictDi = Id(c, 'strict-di') !== null,
    a(c, d ? [d] : [], e))
  } function uc (b, a, c) {
    J(c) || (c = {}); c = w({ strictDi: !1 }, c); const d = function () {
      b = A(b); if (b.injector()) { var d = b[0] === W ? 'document' : wa(b); throw Ja('btstrpd', d.replace(/</, '&lt;').replace(/>/, '&gt;')) }a = a || []; a.unshift(['$provide', function (a) { a.value('$rootElement', b) }]); c.debugInfoEnabled && a.push(['$compileProvider', function (a) { a.debugInfoEnabled(!0) }]); a.unshift('ng'); d = ab(a, c.strictDi); d.invoke(['$rootScope', '$rootElement', '$compile', '$injector', function (a, b, c, d) {
        a.$apply(function () {
          b.data('$injector',
            d); c(b)(a)
        })
      }]); return d
    }; const e = /^NG_ENABLE_DEBUG_INFO!/; const f = /^NG_DEFER_BOOTSTRAP!/; Q && e.test(Q.name) && (c.debugInfoEnabled = !0, Q.name = Q.name.replace(e, '')); if (Q && !f.test(Q.name)) return d(); Q.name = Q.name.replace(f, ''); ca.resumeBootstrap = function (b) { r(b, function (b) { a.push(b) }); return d() }; G(ca.resumeDeferredBootstrap) && ca.resumeDeferredBootstrap()
  } function Kd () { Q.name = 'NG_ENABLE_DEBUG_INFO!' + Q.name; Q.location.reload() } function Ld (b) { b = ca.element(b).injector(); if (!b) throw Ja('test'); return b.get('$$testability') }
  function vc (b, a) { a = a || '_'; return b.replace(Md, function (b, d) { return (d ? a : '') + b.toLowerCase() }) } function Nd () { let b; wc || ((ta = Q.jQuery) && ta.fn.on ? (A = ta, w(ta.fn, { scope: Ka.scope, isolateScope: Ka.isolateScope, controller: Ka.controller, injector: Ka.injector, inheritedData: Ka.inheritedData }), b = ta.cleanData, ta.cleanData = function (a) { let c; if (Qb)Qb = !1; else for (var d = 0, e; (e = a[d]) != null; d++)(c = ta._data(e, 'events')) && c.$destroy && ta(e).triggerHandler('$destroy'); b(a) }) : A = T, ca.element = A, wc = !0) } function Rb (b, a, c) {
    if (!b) {
      throw Ja('areq',
        a || '?', c || 'required')
    } return b
  } function sb (b, a, c) { c && H(b) && (b = b[b.length - 1]); Rb(G(b), a, 'not a function, got ' + (b && typeof b === 'object' ? b.constructor.name || 'Object' : typeof b)); return b } function La (b, a) { if (b === 'hasOwnProperty') throw Ja('badname', a) } function xc (b, a, c) { if (!a) return b; a = a.split('.'); for (var d, e = b, f = a.length, g = 0; g < f; g++)d = a[g], b && (b = (e = b)[d]); return !c && G(b) ? pc(e, b) : b } function tb (b) { let a = b[0]; b = b[b.length - 1]; const c = [a]; do { a = a.nextSibling; if (!a) break; c.push(a) } while (a !== b); return A(c) } function ia () { return Object.create(null) }
  function Od (b) {
    function a (a, b, c) { return a[b] || (a[b] = c()) } const c = R('$injector'); const d = R('ng'); b = a(b, 'angular', Object); b.$$minErr = b.$$minErr || R; return a(b, 'module', function () {
      const b = {}; return function (f, g, h) {
        if (f === 'hasOwnProperty') throw d('badname', 'module'); g && b.hasOwnProperty(f) && (b[f] = null); return a(b, f, function () {
          function a (c, d, e, f) { f || (f = b); return function () { f[e || 'push']([c, d, arguments]); return u } } if (!g) throw c('nomod', f); var b = []; const d = []; const e = []; const q = a('$injector', 'invoke', 'push', d); var u = {
            _invokeQueue: b,
            _configBlocks: d,
            _runBlocks: e,
            requires: g,
            name: f,
            provider: a('$provide', 'provider'),
            factory: a('$provide', 'factory'),
            service: a('$provide', 'service'),
            value: a('$provide', 'value'),
            constant: a('$provide', 'constant', 'unshift'),
            animation: a('$animateProvider', 'register'),
            filter: a('$filterProvider', 'register'),
            controller: a('$controllerProvider', 'register'),
            directive: a('$compileProvider', 'directive'),
            config: q,
            run: function (a) { e.push(a); return this }
          }; h && q(h); return u
        })
      }
    })
  } function Pd (b) {
    w(b, {
      bootstrap: uc,
      copy: Da,
      extend: w,
      equals: ha,
      element: A,
      forEach: r,
      injector: ab,
      noop: E,
      bind: pc,
      toJson: $a,
      fromJson: qc,
      identity: ra,
      isUndefined: x,
      isDefined: y,
      isString: C,
      isFunction: G,
      isObject: J,
      isNumber: Y,
      isElement: oc,
      isArray: H,
      version: Qd,
      isDate: ga,
      lowercase: z,
      uppercase: ub,
      callbacks: { counter: 0 },
      getTestability: Ld,
      $$minErr: R,
      $$csp: bb,
      reloadWithDebugInfo: Kd
    }); cb = Od(Q); try { cb('ngLocale') } catch (a) { cb('ngLocale', []).provider('$locale', Rd) }cb('ng', ['ngLocale'], ['$provide', function (a) {
      a.provider({ $$sanitizeUri: Sd }); a.provider('$compile', yc).directive({
        a: Td,
        input: zc,
        textarea: zc,
        form: Ud,
        script: Vd,
        select: Wd,
        style: Xd,
        option: Yd,
        ngBind: Zd,
        ngBindHtml: $d,
        ngBindTemplate: ae,
        ngClass: be,
        ngClassEven: ce,
        ngClassOdd: de,
        ngCloak: ee,
        ngController: fe,
        ngForm: ge,
        ngHide: he,
        ngIf: ie,
        ngInclude: je,
        ngInit: ke,
        ngNonBindable: le,
        ngPluralize: me,
        ngRepeat: ne,
        ngShow: oe,
        ngStyle: pe,
        ngSwitch: qe,
        ngSwitchWhen: re,
        ngSwitchDefault: se,
        ngOptions: te,
        ngTransclude: ue,
        ngModel: ve,
        ngList: we,
        ngChange: xe,
        pattern: Ac,
        ngPattern: Ac,
        required: Bc,
        ngRequired: Bc,
        minlength: Cc,
        ngMinlength: Cc,
        maxlength: Dc,
        ngMaxlength: Dc,
        ngValue: ye,
        ngModelOptions: ze
      }).directive({ ngInclude: Ae }).directive(vb).directive(Ec); a.provider({ $anchorScroll: Be, $animate: Ce, $browser: De, $cacheFactory: Ee, $controller: Fe, $document: Ge, $exceptionHandler: He, $filter: Fc, $interpolate: Ie, $interval: Je, $http: Ke, $httpBackend: Le, $location: Me, $log: Ne, $parse: Oe, $rootScope: Pe, $q: Qe, $$q: Re, $sce: Se, $sceDelegate: Te, $sniffer: Ue, $templateCache: Ve, $templateRequest: We, $$testability: Xe, $timeout: Ye, $window: Ze, $$rAF: $e, $$asyncCallback: af, $$jqLite: bf })
    }])
  } function db (b) {
    return b.replace(cf,
      function (a, b, d, e) { return e ? d.toUpperCase() : d }).replace(df, 'Moz$1')
  } function Gc (b) { b = b.nodeType; return b === qa || !b || b === 9 } function Hc (b, a) {
    let c; let d; const e = a.createDocumentFragment(); let f = []; if (Sb.test(b)) { c = c || e.appendChild(a.createElement('div')); d = (ef.exec(b) || ['', ''])[1].toLowerCase(); d = ja[d] || ja._default; c.innerHTML = d[1] + b.replace(ff, '<$1></$2>') + d[2]; for (d = d[0]; d--;)c = c.lastChild; f = Ya(f, c.childNodes); c = e.firstChild; c.textContent = '' } else f.push(a.createTextNode(b)); e.textContent = ''; e.innerHTML = ''; r(f, function (a) { e.appendChild(a) })
    return e
  } function T (b) { if (b instanceof T) return b; let a; C(b) && (b = N(b), a = !0); if (!(this instanceof T)) { if (a && b.charAt(0) != '<') throw Tb('nosel'); return new T(b) } if (a) { a = W; let c; b = (c = gf.exec(b)) ? [a.createElement(c[1])] : (c = Hc(b, a)) ? c.childNodes : [] }Ic(this, b) } function Ub (b) { return b.cloneNode(!0) } function wb (b, a) { a || xb(b); if (b.querySelectorAll) for (let c = b.querySelectorAll('*'), d = 0, e = c.length; d < e; d++)xb(c[d]) } function Jc (b, a, c, d) {
    if (y(d)) throw Tb('offargs'); const e = (d = yb(b)) && d.events; const f = d && d.handle; if (f) {
      if (a) {
        r(a.split(' '),
          function (a) { if (y(c)) { const d = e[a]; Xa(d || [], c); if (d && d.length > 0) return }b.removeEventListener(a, f, !1); delete e[a] })
      } else for (a in e)a !== '$destroy' && b.removeEventListener(a, f, !1), delete e[a]
    }
  } function xb (b, a) { const c = b.ng339; const d = c && zb[c]; d && (a ? delete d.data[a] : (d.handle && (d.events.$destroy && d.handle({}, '$destroy'), Jc(b)), delete zb[c], b.ng339 = t)) } function yb (b, a) { var c = b.ng339; var c = c && zb[c]; a && !c && (b.ng339 = c = ++hf, c = zb[c] = { events: {}, data: {}, handle: t }); return c } function Vb (b, a, c) {
    if (Gc(b)) {
      const d = y(c); const e = !d && a && !J(a)
      const f = !a; b = (b = yb(b, !e)) && b.data; if (d)b[a] = c; else { if (f) return b; if (e) return b && b[a]; w(b, a) }
    }
  } function Ab (b, a) { return b.getAttribute ? (' ' + (b.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').indexOf(' ' + a + ' ') > -1 : !1 } function Bb (b, a) { a && b.setAttribute && r(a.split(' '), function (a) { b.setAttribute('class', N((' ' + (b.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').replace(' ' + N(a) + ' ', ' '))) }) } function Cb (b, a) {
    if (a && b.setAttribute) {
      let c = (' ' + (b.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ')
      r(a.split(' '), function (a) { a = N(a); c.indexOf(' ' + a + ' ') === -1 && (c += a + ' ') }); b.setAttribute('class', N(c))
    }
  } function Ic (b, a) { if (a) if (a.nodeType)b[b.length++] = a; else { const c = a.length; if (typeof c === 'number' && a.window !== a) { if (c) for (let d = 0; d < c; d++)b[b.length++] = a[d] } else b[b.length++] = a } } function Kc (b, a) { return Db(b, '$' + (a || 'ngController') + 'Controller') } function Db (b, a, c) {
    b.nodeType == 9 && (b = b.documentElement); for (a = H(a) ? a : [a]; b;) {
      for (let d = 0, e = a.length; d < e; d++) if ((c = A.data(b, a[d])) !== t) return c; b = b.parentNode ||
b.nodeType === 11 && b.host
    }
  } function Lc (b) { for (wb(b, !0); b.firstChild;)b.removeChild(b.firstChild) } function Mc (b, a) { a || wb(b); const c = b.parentNode; c && c.removeChild(b) } function jf (b, a) { a = a || Q; if (a.document.readyState === 'complete')a.setTimeout(b); else A(a).on('load', b) } function Nc (b, a) { const c = Eb[a.toLowerCase()]; return c && Oc[va(b)] && c } function kf (b, a) { const c = b.nodeName; return (c === 'INPUT' || c === 'TEXTAREA') && Pc[a] } function lf (b, a) {
    const c = function (c, e) {
      c.isDefaultPrevented = function () { return c.defaultPrevented }; let f =
a[e || c.type]; const g = f ? f.length : 0; if (g) { if (x(c.immediatePropagationStopped)) { const h = c.stopImmediatePropagation; c.stopImmediatePropagation = function () { c.immediatePropagationStopped = !0; c.stopPropagation && c.stopPropagation(); h && h.call(c) } }c.isImmediatePropagationStopped = function () { return !0 === c.immediatePropagationStopped }; g > 1 && (f = sa(f)); for (let l = 0; l < g; l++)c.isImmediatePropagationStopped() || f[l].call(b, c) }
    }; c.elem = b; return c
  } function bf () {
    this.$get = function () {
      return w(T, {
        hasClass: function (b, a) {
          b.attr && (b = b[0])
          return Ab(b, a)
        },
        addClass: function (b, a) { b.attr && (b = b[0]); return Cb(b, a) },
        removeClass: function (b, a) { b.attr && (b = b[0]); return Bb(b, a) }
      })
    }
  } function Ma (b, a) { let c = b && b.$$hashKey; if (c) return typeof c === 'function' && (c = b.$$hashKey()), c; c = typeof b; return c = c == 'function' || c == 'object' && b !== null ? b.$$hashKey = c + ':' + (a || Fd)() : c + ':' + b } function eb (b, a) { if (a) { let c = 0; this.nextUid = function () { return ++c } }r(b, this.put, this) } function mf (b) {
    return (b = b.toString().replace(Qc, '').match(Rc))
      ? 'function(' + (b[1] || '').replace(/[\s\r\n]+/,
        ' ') + ')'
      : 'fn'
  } function ab (b, a) {
    function c (a) { return function (b, c) { if (J(b))r(b, mc(a)); else return a(b, c) } } function d (a, b) { La(a, 'service'); if (G(b) || H(b))b = q.instantiate(b); if (!b.$get) throw Fa('pget', a); return p[a + 'Provider'] = b } function e (a, b) { return function () { const c = s.invoke(b, this); if (x(c)) throw Fa('undef', a); return c } } function f (a, b, c) { return d(a, { $get: !1 !== c ? e(a, b) : b }) } function g (a) {
      let b = []; let c; r(a, function (a) {
        function d (a) {
          let b, c; b = 0; for (c = a.length; b < c; b++) {
            const e = a[b]; const f = q.get(e[0]); f[e[1]].apply(f,
              e[2])
          }
        } if (!n.get(a)) { n.put(a, !0); try { C(a) ? (c = cb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : G(a) ? b.push(q.invoke(a)) : H(a) ? b.push(q.invoke(a)) : sb(a, 'module') } catch (e) { throw H(a) && (a = a[a.length - 1]), e.message && e.stack && e.stack.indexOf(e.message) == -1 && (e = e.message + '\n' + e.stack), Fa('modulerr', a, e.stack || e.message || e) } }
      }); return b
    } function h (b, c) {
      function d (a, e) {
        if (b.hasOwnProperty(a)) { if (b[a] === l) throw Fa('cdep', a + ' <- ' + k.join(' <- ')); return b[a] } try {
          return k.unshift(a),
          b[a] = l, b[a] = c(a, e)
        } catch (f) { throw b[a] === l && delete b[a], f } finally { k.shift() }
      } function e (b, c, f, g) { typeof f === 'string' && (g = f, f = null); const k = []; const h = ab.$$annotate(b, a, g); let l; let q; let p; q = 0; for (l = h.length; q < l; q++) { p = h[q]; if (typeof p !== 'string') throw Fa('itkn', p); k.push(f && f.hasOwnProperty(p) ? f[p] : d(p, g)) }H(b) && (b = b[l]); return b.apply(c, k) } return {
        invoke: e,
        instantiate: function (a, b, c) { const d = Object.create((H(a) ? a[a.length - 1] : a).prototype || null); a = e(a, d, b, c); return J(a) || G(a) ? a : d },
        get: d,
        annotate: ab.$$annotate,
        has: function (a) {
          return p.hasOwnProperty(a +
'Provider') || b.hasOwnProperty(a)
        }
      }
    }a = !0 === a; var l = {}; var k = []; var n = new eb([], !0); var p = { $provide: { provider: c(d), factory: c(f), service: c(function (a, b) { return f(a, ['$injector', function (a) { return a.instantiate(b) }]) }), value: c(function (a, b) { return f(a, ea(b), !1) }), constant: c(function (a, b) { La(a, 'constant'); p[a] = b; u[a] = b }), decorator: function (a, b) { const c = q.get(a + 'Provider'); const d = c.$get; c.$get = function () { const a = s.invoke(d, c); return s.invoke(b, null, { $delegate: a }) } } } }; var q = p.$injector = h(p, function (a, b) {
      ca.isString(b) && k.push(b)
      throw Fa('unpr', k.join(' <- '))
    }); var u = {}; var s = u.$injector = h(u, function (a, b) { const c = q.get(a + 'Provider', b); return s.invoke(c.$get, c, t, a) }); r(g(b), function (a) { s.invoke(a || E) }); return s
  } function Be () {
    let b = !0; this.disableAutoScrolling = function () { b = !1 }; this.$get = ['$window', '$location', '$rootScope', function (a, c, d) {
      function e (a) { let b = null; Array.prototype.some.call(a, function (a) { if (va(a) === 'a') return b = a, !0 }); return b } function f (b) {
        if (b) {
          b.scrollIntoView(); let c; c = g.yOffset; G(c)
            ? c = c()
            : oc(c)
              ? (c = c[0], c = a.getComputedStyle(c).position !==
'fixed'
                  ? 0
                  : c.getBoundingClientRect().bottom)
              : Y(c) || (c = 0); c && (b = b.getBoundingClientRect().top, a.scrollBy(0, b - c))
        } else a.scrollTo(0, 0)
      } function g () { const a = c.hash(); let b; a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : a === 'top' && f(null) : f(null) } var h = a.document; b && d.$watch(function () { return c.hash() }, function (a, b) { a === b && a === '' || jf(function () { d.$evalAsync(g) }) }); return g
    }]
  } function af () {
    this.$get = ['$$rAF', '$timeout', function (b, a) {
      return b.supported
        ? function (a) { return b(a) }
        : function (b) { return a(b, 0, !1) }
    }]
  } function nf (b, a, c, d) {
    function e (a) { try { a.apply(null, Za.call(arguments, 1)) } finally { if (m--, m === 0) for (;F.length;) try { F.pop()() } catch (b) { c.error(b) } } } function f (a, b) { (function da () { r(Z, function (a) { a() }); L = b(da, a) })() } function g () { h(); l() } function h () { a: { try { B = u.state; break a } catch (a) {}B = void 0 }B = x(B) ? null : B; ha(B, O) && (B = O); O = B } function l () { if (D !== n.url() || I !== B)D = n.url(), I = B, r(X, function (a) { a(n.url(), B) }) } function k (a) { try { return decodeURIComponent(a) } catch (b) { return a } }
    var n = this; const p = a[0]; let q = b.location; var u = b.history; const s = b.setTimeout; const M = b.clearTimeout; const v = {}; n.isMock = !1; var m = 0; var F = []; n.$$completeOutstandingRequest = e; n.$$incOutstandingRequestCount = function () { m++ }; n.notifyWhenNoOutstandingRequests = function (a) { r(Z, function (a) { a() }); m === 0 ? a() : F.push(a) }; var Z = []; let L; n.addPollFn = function (a) { x(L) && f(100, s); Z.push(a); return a }; let B; let I; var D = q.href; const S = a.find('base'); let P = null; h(); I = B; n.url = function (a, c, e) {
      x(e) && (e = null); q !== b.location && (q = b.location); u !== b.history && (u = b.history); if (a) {
        const f =
I === e; if (D === a && (!d.history || f)) return n; const g = D && Ga(D) === Ga(a); D = a; I = e; !d.history || g && f ? (g || (P = a), c ? q.replace(a) : g ? (c = q, e = a.indexOf('#'), a = e === -1 ? '' : a.substr(e + 1), c.hash = a) : q.href = a) : (u[c ? 'replaceState' : 'pushState'](e, '', a), h(), I = B); return n
      } return P || q.href.replace(/%27/g, "'")
    }; n.state = function () { return B }; var X = []; let ba = !1; var O = null; n.onUrlChange = function (a) { if (!ba) { if (d.history)A(b).on('popstate', g); A(b).on('hashchange', g); ba = !0 }X.push(a); return a }; n.$$checkUrlChange = l; n.baseHref = function () {
      const a = S.attr('href')
      return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, '') : ''
    }; let fa = {}; let y = ''; const ka = n.baseHref(); n.cookies = function (a, b) {
      let d, e, f, g; if (a)b === t ? p.cookie = encodeURIComponent(a) + '=;path=' + ka + ';expires=Thu, 01 Jan 1970 00:00:00 GMT' : C(b) && (d = (p.cookie = encodeURIComponent(a) + '=' + encodeURIComponent(b) + ';path=' + ka).length + 1, d > 4096 && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + ' > 4096 bytes)!')); else {
        if (p.cookie !== y) {
          for (y = p.cookie, d = y.split('; '), fa = {}, f = 0; f < d.length; f++) {
            e = d[f], g =
e.indexOf('='), g > 0 && (a = k(e.substring(0, g)), fa[a] === t && (fa[a] = k(e.substring(g + 1))))
          }
        } return fa
      }
    }; n.defer = function (a, b) { let c; m++; c = s(function () { delete v[c]; e(a) }, b || 0); v[c] = !0; return c }; n.defer.cancel = function (a) { return v[a] ? (delete v[a], M(a), e(E), !0) : !1 }
  } function De () { this.$get = ['$window', '$log', '$sniffer', '$document', function (b, a, c, d) { return new nf(b, d, a, c) }] } function Ee () {
    this.$get = function () {
      function b (b, d) {
        function e (a) { a != p && (q ? q == a && (q = a.n) : q = a, f(a.n, a.p), f(a, p), p = a, p.n = null) } function f (a, b) {
          a !=
b && (a && (a.p = b), b && (b.n = a))
        } if (b in a) throw R('$cacheFactory')('iid', b); let g = 0; let h = w({}, d, { id: b }); let l = {}; const k = d && d.capacity || Number.MAX_VALUE; let n = {}; var p = null; var q = null; return a[b] = {
          put: function (a, b) { if (k < Number.MAX_VALUE) { const c = n[a] || (n[a] = { key: a }); e(c) } if (!x(b)) return a in l || g++, l[a] = b, g > k && this.remove(q.key), b },
          get: function (a) { if (k < Number.MAX_VALUE) { const b = n[a]; if (!b) return; e(b) } return l[a] },
          remove: function (a) {
            if (k < Number.MAX_VALUE) { const b = n[a]; if (!b) return; b == p && (p = b.p); b == q && (q = b.n); f(b.n, b.p); delete n[a] } delete l[a]
            g--
          },
          removeAll: function () { l = {}; g = 0; n = {}; p = q = null },
          destroy: function () { n = h = l = null; delete a[b] },
          info: function () { return w({}, h, { size: g }) }
        }
      } var a = {}; b.info = function () { const b = {}; r(a, function (a, e) { b[e] = a.info() }); return b }; b.get = function (b) { return a[b] }; return b
    }
  } function Ve () { this.$get = ['$cacheFactory', function (b) { return b('templates') }] } function yc (b, a) {
    function c (a, b) {
      const c = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/; const d = {}; r(a, function (a, e) {
        const f = a.match(c); if (!f) throw la('iscp', b, e, a); d[e] = {
          mode: f[1][0],
          collection: f[2] ===
'*',
          optional: f[3] === '?',
          attrName: f[4] || e
        }
      }); return d
    } const d = {}; const e = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/; const f = /(([\w\-]+)(?:\:([^;]+))?;?)/; const g = Gd('ngSrc,ngSrcset,src,srcset'); const h = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/; const l = /^(on[a-z]+|formaction)$/; this.directive = function p (a, e) {
      La(a, 'directive'); C(a)
        ? (Rb(e, 'directiveFactory'), d.hasOwnProperty(a) || (d[a] = [], b.factory(a + 'Directive', ['$injector', '$exceptionHandler', function (b, e) {
            const f = []; r(d[a], function (d, g) {
              try {
                let h = b.invoke(d); G(h)
                  ? h = { compile: ea(h) }
                  : !h.compile && h.link &&
(h.compile = ea(h.link)); h.priority = h.priority || 0; h.index = g; h.name = h.name || a; h.require = h.require || h.controller && h.name; h.restrict = h.restrict || 'EA'; J(h.scope) && (h.$$isolateBindings = c(h.scope, h.name)); f.push(h)
              } catch (k) { e(k) }
            }); return f
          }])), d[a].push(e))
        : r(a, mc(p)); return this
    }; this.aHrefSanitizationWhitelist = function (b) { return y(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist() }; this.imgSrcSanitizationWhitelist = function (b) { return y(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist() }
    let k = !0; this.debugInfoEnabled = function (a) { return y(a) ? (k = a, this) : k }; this.$get = ['$injector', '$interpolate', '$exceptionHandler', '$templateRequest', '$parse', '$controller', '$rootScope', '$document', '$sce', '$animate', '$$sanitizeUri', function (a, b, c, s, M, v, m, F, Z, L, B) {
      function I (a, b) { try { a.addClass(b) } catch (c) {} } function D (a, b, c, d, e) {
        a instanceof A || (a = A(a)); r(a, function (b, c) { b.nodeType == pb && b.nodeValue.match(/\S+/) && (a[c] = A(b).wrap('<span></span>').parent()[0]) }); const f = S(a, b, a, c, d, e); D.$$addScopeClass(a)
        let g = null; return function (b, c, d) { Rb(b, 'scope'); d = d || {}; let e = d.parentBoundTranscludeFn; const h = d.transcludeControllers; d = d.futureParentElement; e && e.$$boundTransclude && (e = e.$$boundTransclude); g || (g = (d = d && d[0]) ? va(d) !== 'foreignobject' && d.toString().match(/SVG/) ? 'svg' : 'html' : 'html'); d = g !== 'html' ? A(Xb(g, A('<div>').append(a).html())) : c ? Ka.clone.call(a) : a; if (h) for (const k in h)d.data('$' + k + 'Controller', h[k].instance); D.$$addScopeInfo(d, b); c && c(d, b); f && f(b, d, d, e); return d }
      } function S (a, b, c, d, e, f) {
        function g (a,
          c, d, e) { let f, k, l, q, p, s, M; if (m) for (M = Array(c.length), q = 0; q < h.length; q += 3)f = h[q], M[f] = c[f]; else M = c; q = 0; for (p = h.length; q < p;)k = M[h[q++]], c = h[q++], f = h[q++], c ? (c.scope ? (l = a.$new(), D.$$addScopeInfo(A(k), l)) : l = a, s = c.transcludeOnThisElement ? P(a, c.transclude, e, c.elementTranscludeOnThisElement) : !c.templateOnThisElement && e ? e : !e && b ? P(a, b) : null, c(f, l, k, d, s)) : f && f(a, k.childNodes, t, e) } for (var h = [], k, l, q, p, m, s = 0; s < a.length; s++) {
          k = new Yb(); l = X(a[s], [], k, s === 0 ? d : t, e); (f = l.length ? fa(l, a[s], k, b, c, null, [], [], f) : null) &&
f.scope && D.$$addScopeClass(k.$$element); k = f && f.terminal || !(q = a[s].childNodes) || !q.length ? null : S(q, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b); if (f || k)h.push(s, f, k), p = !0, m = m || f; f = null
        } return p ? g : null
      } function P (a, b, c, d) { return function (d, e, f, g, h) { d || (d = a.$new(!1, h), d.$$transcluded = !0); return b(d, e, { parentBoundTranscludeFn: c, transcludeControllers: f, futureParentElement: g }) } } function X (a, b, c, d, g) {
        const h = c.$attr; let k; switch (a.nodeType) {
          case qa:ka(b, xa(va(a)), 'E', d, g); for (var l,
            q, p, m = a.attributes, s = 0, M = m && m.length; s < M; s++) { let u = !1; let L = !1; l = m[s]; k = l.name; q = N(l.value); l = xa(k); if (p = U.test(l))k = k.replace(Sc, '').substr(8).replace(/_(.)/g, function (a, b) { return b.toUpperCase() }); const B = l.replace(/(Start|End)$/, ''); x(B) && l === B + 'Start' && (u = k, L = k.substr(0, k.length - 5) + 'end', k = k.substr(0, k.length - 6)); l = xa(k.toLowerCase()); h[l] = k; if (p || !c.hasOwnProperty(l))c[l] = q, Nc(a, l) && (c[l] = !0); Oa(a, b, q, l, p); ka(b, l, 'A', d, g, u, L) }a = a.className; J(a) && (a = a.animVal); if (C(a) && a !== '') {
              for (;k = f.exec(a);) {
                l = xa(k[2]),
                ka(b, l, 'C', d, g) && (c[l] = N(k[3])), a = a.substr(k.index + k[0].length)
              }
            } break; case pb:za(b, a.nodeValue); break; case 8:try { if (k = e.exec(a.nodeValue))l = xa(k[1]), ka(b, l, 'M', d, g) && (c[l] = N(k[2])) } catch (v) {}
        }b.sort(da); return b
      } function ba (a, b, c) { const d = []; let e = 0; if (b && a.hasAttribute && a.hasAttribute(b)) { do { if (!a) throw la('uterdir', b, c); a.nodeType == qa && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--); d.push(a); a = a.nextSibling } while (e > 0) } else d.push(a); return A(d) } function O (a, b, c) {
        return function (d, e, f, g, h) {
          e = ba(e[0],
            b, c); return a(d, e, f, g, h)
        }
      } function fa (a, d, e, f, g, k, l, p, m) {
        function s (a, b, c, d) { if (a) { c && (a = O(a, c, d)); a.require = K.require; a.directiveName = da; if (P === K || K.$$isolateScope)a = Y(a, { isolateScope: !0 }); l.push(a) } if (b) { c && (b = O(b, c, d)); b.require = K.require; b.directiveName = da; if (P === K || K.$$isolateScope)b = Y(b, { isolateScope: !0 }); p.push(b) } } function L (a, b, c, d) {
          let e; let f = 'data'; let g = !1; let k = c; let l; if (C(b)) {
            l = b.match(h); b = b.substring(l[0].length); l[3] && (l[1] ? l[3] = null : l[1] = l[3]); l[1] === '^'
              ? f = 'inheritedData'
              : l[1] === '^^' && (f = 'inheritedData',
              k = c.parent()); l[2] === '?' && (g = !0); e = null; d && f === 'data' && (e = d[b]) && (e = e.instance); e = e || k[f]('$' + b + 'Controller'); if (!e && !g) throw la('ctreq', b, a); return e || null
          }H(b) && (e = [], r(b, function (b) { e.push(L(a, b, c, d)) })); return e
        } function B (a, c, f, g, h) {
          function k (a, b, c) { let d; Va(a) || (c = b, b = a, a = t); E && (d = F); c || (c = E ? X.parent() : X); return h(a, b, d, c, Wb) } let m, s, u, I, F, gb, X, O; d === f ? (O = e, X = e.$$element) : (X = A(f), O = new Yb(X, e)); P && (I = c.$new(!0)); h && (gb = k, gb.$$boundTransclude = h); S && (Z = {}, F = {}, r(S, function (a) {
            let b = {
              $scope: a ===
P || a.$$isolateScope
                ? I
                : c,
              $element: X,
              $attrs: O,
              $transclude: gb
            }; u = a.controller; u == '@' && (u = O[a.name]); b = v(u, b, !0, a.controllerAs); F[a.name] = b; E || X.data('$' + a.name + 'Controller', b.instance); Z[a.name] = b
          })); if (P) {
            D.$$addScopeInfo(X, I, !0, !(ma && (ma === P || ma === P.$$originalDirective))); D.$$addScopeClass(X, !0); g = Z && Z[P.name]; let ba = I; g && g.identifier && !0 === P.bindToController && (ba = g.instance); r(I.$$isolateBindings = P.$$isolateBindings, function (a, d) {
              const e = a.attrName; let f = a.optional; let g; let h; let k; let l; switch (a.mode) {
                case '@':O.$observe(e,
                  function (a) { ba[d] = a }); O.$$observers[e].$$scope = c; O[e] && (ba[d] = b(O[e])(c)); break; case '=':if (f && !O[e]) break; h = M(O[e]); l = h.literal ? ha : function (a, b) { return a === b || a !== a && b !== b }; k = h.assign || function () { g = ba[d] = h(c); throw la('nonassign', O[e], P.name) }; g = ba[d] = h(c); f = function (a) { l(a, ba[d]) || (l(a, g) ? k(c, a = ba[d]) : ba[d] = a); return g = a }; f.$stateful = !0; f = a.collection ? c.$watchCollection(O[e], f) : c.$watch(M(O[e], f), null, h.literal); I.$on('$destroy', f); break; case '&':h = M(O[e]), ba[d] = function (a) { return h(c, a) }
              }
            })
          }Z &&
(r(Z, function (a) { a() }), Z = null); g = 0; for (m = l.length; g < m; g++)s = l[g], $(s, s.isolateScope ? I : c, X, O, s.require && L(s.directiveName, s.require, X, F), gb); var Wb = c; P && (P.template || P.templateUrl === null) && (Wb = I); a && a(Wb, f.childNodes, t, h); for (g = p.length - 1; g >= 0; g--)s = p[g], $(s, s.isolateScope ? I : c, X, O, s.require && L(s.directiveName, s.require, X, F), gb)
        }m = m || {}; for (var I = -Number.MAX_VALUE, F, S = m.controllerDirectives, Z, P = m.newIsolateScopeDirective, ma = m.templateDirective, fa = m.nonTlbTranscludeDirective, ka = !1, x = !1, E = m.hasElementTranscludeDirective,
          w = e.$$element = A(d), K, da, V, fb = f, za, z = 0, Q = a.length; z < Q; z++) {
          K = a[z]; const Oa = K.$$start; const U = K.$$end; Oa && (w = ba(d, Oa, U)); V = t; if (I > K.priority) break; if (V = K.scope)K.templateUrl || (J(V) ? (Na('new/isolated scope', P || F, K, w), P = K) : Na('new/isolated scope', P, K, w)), F = F || K; da = K.name; !K.templateUrl && K.controller && (V = K.controller, S = S || {}, Na("'" + da + "' controller", S[da], K, w), S[da] = K); if (V = K.transclude) {
            ka = !0, K.$$tlb || (Na('transclusion', fa, K, w), fa = K), V == 'element'
              ? (E = !0, I = K.priority, V = w, w = e.$$element = A(W.createComment(' ' + da + ': ' +
e[da] + ' ')), d = w[0], T(g, Za.call(V, 0), d), fb = D(V, f, I, k && k.name, { nonTlbTranscludeDirective: fa }))
              : (V = A(Ub(d)).contents(), w.empty(), fb = D(V, f))
          } if (K.template) if (x = !0, Na('template', ma, K, w), ma = K, V = G(K.template) ? K.template(w, e) : K.template, V = Tc(V), K.replace) { k = K; V = Sb.test(V) ? Uc(Xb(K.templateNamespace, N(V))) : []; d = V[0]; if (V.length != 1 || d.nodeType !== qa) throw la('tplrt', da, ''); T(g, w, d); Q = { $attr: {} }; V = X(d, [], Q); const aa = a.splice(z + 1, a.length - (z + 1)); P && y(V); a = a.concat(V).concat(aa); R(e, Q); Q = a.length } else w.html(V); if (K.templateUrl) {
            x =
!0, Na('template', ma, K, w), ma = K, K.replace && (k = K), B = of(a.splice(z, a.length - z), w, e, g, ka && fb, l, p, { controllerDirectives: S, newIsolateScopeDirective: P, templateDirective: ma, nonTlbTranscludeDirective: fa }), Q = a.length
          } else if (K.compile) try { za = K.compile(w, e, fb), G(za) ? s(null, za, Oa, U) : za && s(za.pre, za.post, Oa, U) } catch (pf) { c(pf, wa(w)) }K.terminal && (B.terminal = !0, I = Math.max(I, K.priority))
        }B.scope = F && !0 === F.scope; B.transcludeOnThisElement = ka; B.elementTranscludeOnThisElement = E; B.templateOnThisElement = x; B.transclude = fb
        m.hasElementTranscludeDirective = E; return B
      } function y (a) { for (let b = 0, c = a.length; b < c; b++)a[b] = Ob(a[b], { $$isolateScope: !0 }) } function ka (b, e, f, g, h, k, l) { if (e === h) return null; h = null; if (d.hasOwnProperty(e)) { let q; e = a.get(e + 'Directive'); for (let m = 0, s = e.length; m < s; m++) try { q = e[m], (g === t || g > q.priority) && q.restrict.indexOf(f) != -1 && (k && (q = Ob(q, { $$start: k, $$end: l })), b.push(q), h = q) } catch (M) { c(M) } } return h } function x (b) {
        if (d.hasOwnProperty(b)) for (let c = a.get(b + 'Directive'), e = 0, f = c.length; e < f; e++) if (b = c[e], b.multiElement) return !0
        return !1
      } function R (a, b) { const c = b.$attr; const d = a.$attr; const e = a.$$element; r(a, function (d, e) { e.charAt(0) != '$' && (b[e] && b[e] !== d && (d += (e === 'style' ? ';' : ' ') + b[e]), a.$set(e, d, !0, c[e])) }); r(b, function (b, f) { f == 'class' ? (I(e, b), a.class = (a.class ? a.class + ' ' : '') + b) : f == 'style' ? (e.attr('style', e.attr('style') + ';' + b), a.style = (a.style ? a.style + ';' : '') + b) : f.charAt(0) == '$' || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f]) }) } function of (a, b, c, d, e, f, g, h) {
        let k = []; let l; let q; const p = b[0]; const m = a.shift(); const M = Ob(m, {
          templateUrl: null,
          transclude: null,
          replace: null,
          $$originalDirective: m
        }); const u = G(m.templateUrl) ? m.templateUrl(b, c) : m.templateUrl; const L = m.templateNamespace; b.empty(); s(Z.getTrustedResourceUrl(u)).then(function (s) {
          let B, v; s = Tc(s); if (m.replace) { s = Sb.test(s) ? Uc(Xb(L, N(s))) : []; B = s[0]; if (s.length != 1 || B.nodeType !== qa) throw la('tplrt', m.name, u); s = { $attr: {} }; T(d, b, B); var D = X(B, [], s); J(m.scope) && y(D); a = D.concat(a); R(c, s) } else B = p, b.html(s); a.unshift(M); l = fa(a, B, c, e, b, m, f, g, h); r(d, function (a, c) { a == B && (d[c] = b[0]) }); for (q = S(b[0].childNodes, e); k.length;) {
            s =
k.shift(); v = k.shift(); const F = k.shift(); const O = k.shift(); var D = b[0]; if (!s.$$destroyed) { if (v !== p) { const Z = v.className; h.hasElementTranscludeDirective && m.replace || (D = Ub(B)); T(F, A(v), D); I(A(D), Z) }v = l.transcludeOnThisElement ? P(s, l.transclude, O) : O; l(q, s, D, d, v) }
          }k = null
        }); return function (a, b, c, d, e) { a = e; b.$$destroyed || (k ? k.push(b, c, d, a) : (l.transcludeOnThisElement && (a = P(b, l.transclude, e)), l(q, b, c, d, a))) }
      } function da (a, b) { const c = b.priority - a.priority; return c !== 0 ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index } function Na (a,
        b, c, d) { if (b) throw la('multidir', b.name, c.name, a, wa(d)) } function za (a, c) { const d = b(c, !0); d && a.push({ priority: 0, compile: function (a) { a = a.parent(); const b = !!a.length; b && D.$$addBindingClass(a); return function (a, c) { const e = c.parent(); b || D.$$addBindingClass(e); D.$$addBindingInfo(e, d.expressions); a.$watch(d, function (a) { c[0].nodeValue = a }) } } }) } function Xb (a, b) { a = z(a || 'html'); switch (a) { case 'svg':case 'math':var c = W.createElement('div'); c.innerHTML = '<' + a + '>' + b + '</' + a + '>'; return c.childNodes[0].childNodes; default:return b } }
      function Q (a, b) { if (b == 'srcdoc') return Z.HTML; const c = va(a); if (b == 'xlinkHref' || c == 'form' && b == 'action' || c != 'img' && (b == 'src' || b == 'ngSrc')) return Z.RESOURCE_URL } function Oa (a, c, d, e, f) {
        const h = Q(a, e); f = g[e] || f; let k = b(d, !0, h, f); if (k) {
          if (e === 'multiple' && va(a) === 'select') throw la('selmulti', wa(a)); c.push({
            priority: 100,
            compile: function () {
              return {
                pre: function (a, c, g) {
                  c = g.$$observers || (g.$$observers = {}); if (l.test(e)) throw la('nodomevents'); const m = g[e]; m !== d && (k = m && b(m, !0, h, f), d = m); k && (g[e] = k(a), (c[e] || (c[e] = [])).$$inter =
!0, (g.$$observers && g.$$observers[e].$$scope || a).$watch(k, function (a, b) { e === 'class' && a != b ? g.$updateClass(a, b) : g.$set(e, a) }))
                }
              }
            }
          })
        }
      } function T (a, b, c) {
        let d = b[0]; let e = b.length; let f = d.parentNode; let g; let h; if (a) for (g = 0, h = a.length; g < h; g++) if (a[g] == d) { a[g++] = c; h = g + e - 1; for (let k = a.length; g < k; g++, h++)h < k ? a[g] = a[h] : delete a[g]; a.length -= e - 1; a.context === d && (a.context = c); break }f && f.replaceChild(c, d); a = W.createDocumentFragment(); a.appendChild(d); A(c).data(A(d).data()); ta ? (Qb = !0, ta.cleanData([d])) : delete A.cache[d[A.expando]]
        d = 1; for (e = b.length; d < e; d++)f = b[d], A(f).remove(), a.appendChild(f), delete b[d]; b[0] = c; b.length = 1
      } function Y (a, b) { return w(function () { return a.apply(null, arguments) }, a, b) } function $ (a, b, d, e, f, g) { try { a(b, d, e, f, g) } catch (h) { c(h, wa(d)) } } var Yb = function (a, b) { if (b) { const c = Object.keys(b); let d; let e; let f; d = 0; for (e = c.length; d < e; d++)f = c[d], this[f] = b[f] } else this.$attr = {}; this.$$element = a }; Yb.prototype = {
        $normalize: xa,
        $addClass: function (a) { a && a.length > 0 && L.addClass(this.$$element, a) },
        $removeClass: function (a) {
          a && a.length > 0 &&
L.removeClass(this.$$element, a)
        },
        $updateClass: function (a, b) { let c = Vc(a, b); c && c.length && L.addClass(this.$$element, c); (c = Vc(b, a)) && c.length && L.removeClass(this.$$element, c) },
        $set: function (a, b, d, e) {
          var f = this.$$element[0]; var g = Nc(f, a); var h = kf(f, a); var f = a; g ? (this.$$element.prop(a, b), e = g) : h && (this[h] = b, f = h); this[a] = b; e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = vc(a, '-')); g = va(this.$$element); if (g === 'a' && a === 'href' || g === 'img' && a === 'src') this[a] = b = B(b, a === 'src'); else if (g === 'img' && a === 'srcset') {
            for (var g =
'', h = N(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(h) ? k : /(,)/, h = h.split(k), k = Math.floor(h.length / 2), l = 0; l < k; l++) var q = 2 * l, g = g + B(N(h[q]), !0), g = g + (' ' + N(h[q + 1])); h = N(h[2 * l]).split(/\s/); g += B(N(h[0]), !0); h.length === 2 && (g += ' ' + N(h[1])); this[a] = b = g
          }!1 !== d && (b === null || b === t ? this.$$element.removeAttr(e) : this.$$element.attr(e, b)); (a = this.$$observers) && r(a[f], function (a) { try { a(b) } catch (d) { c(d) } })
        },
        $observe: function (a, b) {
          const c = this; const d = c.$$observers || (c.$$observers = ia()); const e = d[a] || (d[a] = []); e.push(b)
          m.$evalAsync(function () { !e.$$inter && c.hasOwnProperty(a) && b(c[a]) }); return function () { Xa(e, b) }
        }
      }; const V = b.startSymbol(); const ma = b.endSymbol(); var Tc = V == '{{' || ma == '}}' ? ra : function (a) { return a.replace(/\{\{/g, V).replace(/}}/g, ma) }; var U = /^ngAttr[A-Z]/; D.$$addBindingInfo = k ? function (a, b) { let c = a.data('$binding') || []; H(b) ? c = c.concat(b) : c.push(b); a.data('$binding', c) } : E; D.$$addBindingClass = k ? function (a) { I(a, 'ng-binding') } : E; D.$$addScopeInfo = k
        ? function (a, b, c, d) {
          a.data(c ? d ? '$isolateScopeNoTemplate' : '$isolateScope' : '$scope',
            b)
        }
        : E; D.$$addScopeClass = k ? function (a, b) { I(a, b ? 'ng-isolate-scope' : 'ng-scope') } : E; return D
    }]
  } function xa (b) { return db(b.replace(Sc, '')) } function Vc (b, a) { let c = ''; const d = b.split(/\s+/); const e = a.split(/\s+/); let f = 0; a:for (;f < d.length; f++) { for (var g = d[f], h = 0; h < e.length; h++) if (g == e[h]) continue a; c += (c.length > 0 ? ' ' : '') + g } return c } function Uc (b) { b = A(b); let a = b.length; if (a <= 1) return b; for (;a--;)b[a].nodeType === 8 && qf.call(b, a, 1); return b } function Fe () {
    const b = {}; let a = !1; const c = /^(\S+)(\s+as\s+(\w+))?$/; this.register = function (a, c) {
      La(a,
        'controller'); J(a) ? w(b, a) : b[a] = c
    }; this.allowGlobals = function () { a = !0 }; this.$get = ['$injector', '$window', function (d, e) {
      function f (a, b, c, d) { if (!a || !J(a.$scope)) throw R('$controller')('noscp', d, b); a.$scope[b] = c } return function (g, h, l, k) {
        let n, p, q; l = !0 === l; k && C(k) && (q = k); if (C(g)) { k = g.match(c); if (!k) throw rf('ctrlfmt', g); p = k[1]; q = q || k[3]; g = b.hasOwnProperty(p) ? b[p] : xc(h.$scope, p, !0) || (a ? xc(e, p, !0) : t); sb(g, p, !0) } if (l) {
          return l = (H(g) ? g[g.length - 1] : g).prototype, n = Object.create(l || null), q && f(h, q, n, p || g.name), w(function () {
            d.invoke(g,
              n, h, p); return n
          }, { instance: n, identifier: q })
        } n = d.instantiate(g, h, p); q && f(h, q, n, p || g.name); return n
      }
    }]
  } function Ge () { this.$get = ['$window', function (b) { return A(b.document) }] } function He () { this.$get = ['$log', function (b) { return function (a, c) { b.error.apply(b, arguments) } }] } function Zb (b, a) { if (C(b)) { const c = b.replace(sf, '').trim(); if (c) { let d = a('Content-Type'); (d = d && d.indexOf(Wc) === 0) || (d = (d = c.match(tf)) && uf[d[0]].test(c)); d && (b = qc(c)) } } return b } function Xc (b) {
    const a = ia(); let c; let d; let e; if (!b) return a; r(b.split('\n'),
      function (b) { e = b.indexOf(':'); c = z(N(b.substr(0, e))); d = N(b.substr(e + 1)); c && (a[c] = a[c] ? a[c] + ', ' + d : d) }); return a
  } function Yc (b) { let a = J(b) ? b : t; return function (c) { a || (a = Xc(b)); return c ? (c = a[z(c)], void 0 === c && (c = null), c) : a } } function Zc (b, a, c, d) { if (G(d)) return d(b, a, c); r(d, function (d) { b = d(b, a, c) }); return b } function Ke () {
    const b = this.defaults = {
      transformResponse: [Zb],
      transformRequest: [function (a) {
        return J(a) && Ca.call(a) !== '[object File]' && Ca.call(a) !== '[object Blob]' && Ca.call(a) !== '[object FormData]'
          ? $a(a)
          : a
      }],
      headers: { common: { Accept: 'application/json, text/plain, */*' }, post: sa($b), put: sa($b), patch: sa($b) },
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN'
    }; let a = !1; this.useApplyAsync = function (b) { return y(b) ? (a = !!b, this) : a }; const c = this.interceptors = []; this.$get = ['$httpBackend', '$browser', '$cacheFactory', '$rootScope', '$q', '$injector', function (d, e, f, g, h, l) {
      function k (a) {
        function c (a) {
          const b = w({}, a); b.data = a.data ? Zc(a.data, a.headers, a.status, e.transformResponse) : a.data; a = a.status; return a >= 200 && a < 300
            ? b
            : h.reject(b)
        } function d (a) { let b; const c = {}; r(a, function (a, d) { G(a) ? (b = a(), b != null && (c[d] = b)) : c[d] = a }); return c } if (!ca.isObject(a)) throw R('$http')('badreq', a); var e = w({ method: 'get', transformRequest: b.transformRequest, transformResponse: b.transformResponse }, a); e.headers = (function (a) { var c = b.headers; const e = w({}, a.headers); let f; let g; var c = w({}, c.common, c[z(a.method)]); a:for (f in c) { a = z(f); for (g in e) if (z(g) === a) continue a; e[f] = c[f] } return d(e) }(a)); e.method = ub(e.method); const f = [function (a) {
          const d = a.headers; const e = Zc(a.data, Yc(d),
            t, a.transformRequest); x(e) && r(d, function (a, b) { z(b) === 'content-type' && delete d[b] }); x(a.withCredentials) && !x(b.withCredentials) && (a.withCredentials = b.withCredentials); return n(a, e).then(c, c)
        }, t]; var g = h.when(e); for (r(u, function (a) { (a.request || a.requestError) && f.unshift(a.request, a.requestError); (a.response || a.responseError) && f.push(a.response, a.responseError) }); f.length;) { a = f.shift(); const k = f.shift(); var g = g.then(a, k) }g.success = function (a) { g.then(function (b) { a(b.data, b.status, b.headers, e) }); return g }; g.error =
function (a) { g.then(null, function (b) { a(b.data, b.status, b.headers, e) }); return g }; return g
      } function n (c, f) {
        function l (b, c, d, e) { function f () { m(c, b, d, e) }I && (b >= 200 && b < 300 ? I.put(P, [b, c, Xc(d), e]) : I.remove(P)); a ? g.$applyAsync(f) : (f(), g.$$phase || g.$apply()) } function m (a, b, d, e) { b = Math.max(b, 0); (b >= 200 && b < 300 ? L.resolve : L.reject)({ data: a, status: b, headers: Yc(d), config: c, statusText: e }) } function n (a) { m(a.data, a.status, sa(a.headers()), a.statusText) } function u () {
          const a = k.pendingRequests.indexOf(c); a !== -1 && k.pendingRequests.splice(a,
            1)
        } var L = h.defer(); const B = L.promise; let I; let D; const S = c.headers; var P = p(c.url, c.params); k.pendingRequests.push(c); B.then(u, u); !c.cache && !b.cache || !1 === c.cache || c.method !== 'GET' && c.method !== 'JSONP' || (I = J(c.cache) ? c.cache : J(b.cache) ? b.cache : q); I && (D = I.get(P), y(D) ? D && G(D.then) ? D.then(n, n) : H(D) ? m(D[1], D[0], sa(D[2]), D[3]) : m(D, 200, {}, 'OK') : I.put(P, B)); x(D) && ((D = $c(c.url) ? e.cookies()[c.xsrfCookieName || b.xsrfCookieName] : t) && (S[c.xsrfHeaderName || b.xsrfHeaderName] = D), d(c.method, P, f, l, S, c.timeout, c.withCredentials, c.responseType))
        return B
      } function p (a, b) { if (!b) return a; const c = []; Ed(b, function (a, b) { a === null || x(a) || (H(a) || (a = [a]), r(a, function (a) { J(a) && (a = ga(a) ? a.toISOString() : $a(a)); c.push(Ea(b) + '=' + Ea(a)) })) }); c.length > 0 && (a += (a.indexOf('?') == -1 ? '?' : '&') + c.join('&')); return a } var q = f('$http'); var u = []; r(c, function (a) { u.unshift(C(a) ? l.get(a) : l.invoke(a)) }); k.pendingRequests = []; (function (a) { r(arguments, function (a) { k[a] = function (b, c) { return k(w(c || {}, { method: a, url: b })) } }) })('get', 'delete', 'head', 'jsonp'); (function (a) {
        r(arguments, function (a) {
          k[a] =
function (b, c, d) { return k(w(d || {}, { method: a, url: b, data: c })) }
        })
      })('post', 'put', 'patch'); k.defaults = b; return k
    }]
  } function vf () { return new Q.XMLHttpRequest() } function Le () { this.$get = ['$browser', '$window', '$document', function (b, a, c) { return wf(b, vf, b.defer, a.angular.callbacks, c[0]) }] } function wf (b, a, c, d, e) {
    function f (a, b, c) {
      let f = e.createElement('script'); let n = null; f.type = 'text/javascript'; f.src = a; f.async = !0; n = function (a) {
        f.removeEventListener('load', n, !1); f.removeEventListener('error', n, !1); e.body.removeChild(f)
        f = null; let g = -1; let u = 'unknown'; a && (a.type !== 'load' || d[b].called || (a = { type: 'error' }), u = a.type, g = a.type === 'error' ? 404 : 200); c && c(g, u)
      }; f.addEventListener('load', n, !1); f.addEventListener('error', n, !1); e.body.appendChild(f); return n
    } return function (e, h, l, k, n, p, q, u) {
      function s () { m && m(); F && F.abort() } function M (a, d, e, f, g) { L !== t && c.cancel(L); m = F = null; a(d, e, f, g); b.$$completeOutstandingRequest(E) }b.$$incOutstandingRequestCount(); h = h || b.url(); if (z(e) == 'jsonp') {
        const v = '_' + (d.counter++).toString(36); d[v] = function (a) {
          d[v].data =
a; d[v].called = !0
        }; var m = f(h.replace('JSON_CALLBACK', 'angular.callbacks.' + v), v, function (a, b) { M(k, a, d[v].data, '', b); d[v] = E })
      } else {
        var F = a(); F.open(e, h, !0); r(n, function (a, b) { y(a) && F.setRequestHeader(b, a) }); F.onload = function () { const a = F.statusText || ''; const b = 'response' in F ? F.response : F.responseText; let c = F.status === 1223 ? 204 : F.status; c === 0 && (c = b ? 200 : Aa(h).protocol == 'file' ? 404 : 0); M(k, c, b, F.getAllResponseHeaders(), a) }; e = function () { M(k, -1, null, null, '') }; F.onerror = e; F.onabort = e; q && (F.withCredentials = !0); if (u) {
          try {
            F.responseType =
u
          } catch (Z) { if (u !== 'json') throw Z }
        }F.send(l || null)
      } if (p > 0) var L = c(s, p); else p && G(p.then) && p.then(s)
    }
  } function Ie () {
    let b = '{{'; let a = '}}'; this.startSymbol = function (a) { return a ? (b = a, this) : b }; this.endSymbol = function (b) { return b ? (a = b, this) : a }; this.$get = ['$parse', '$exceptionHandler', '$sce', function (c, d, e) {
      function f (a) { return '\\\\\\' + a } function g (f, g, u, s) {
        function M (c) { return c.replace(k, b).replace(n, a) } function v (a) {
          try {
            const b = a; a = u ? e.getTrusted(u, b) : e.valueOf(b); var c; if (s && !y(a))c = a; else if (a == null)c = ''
            else { switch (typeof a) { case 'string':break; case 'number':a = '' + a; break; default:a = $a(a) }c = a } return c
          } catch (g) { c = ac('interr', f, g.toString()), d(c) }
        }s = !!s; for (var m, F, r = 0, L = [], B = [], I = f.length, D = [], S = []; r < I;) if ((m = f.indexOf(b, r)) != -1 && (F = f.indexOf(a, m + h)) != -1)r !== m && D.push(M(f.substring(r, m))), r = f.substring(m + h, F), L.push(r), B.push(c(r, v)), r = F + l, S.push(D.length), D.push(''); else { r !== I && D.push(M(f.substring(r))); break } if (u && D.length > 1) throw ac('noconcat', f); if (!g || L.length) {
          const P = function (a) {
            for (let b = 0, c =
L.length; b < c; b++) { if (s && x(a[b])) return; D[S[b]] = a[b] } return D.join('')
          }; return w(function (a) { let b = 0; const c = L.length; const e = Array(c); try { for (;b < c; b++)e[b] = B[b](a); return P(e) } catch (g) { a = ac('interr', f, g.toString()), d(a) } }, { exp: f, expressions: L, $$watchDelegate: function (a, b, c) { let d; return a.$watchGroup(B, function (c, e) { const f = P(c); G(b) && b.call(this, f, c !== e ? d : f, a); d = f }, c) } })
        }
      } var h = b.length; var l = a.length; var k = new RegExp(b.replace(/./g, f), 'g'); var n = new RegExp(a.replace(/./g, f), 'g'); g.startSymbol = function () { return b }; g.endSymbol =
function () { return a }; return g
    }]
  } function Je () {
    this.$get = ['$rootScope', '$window', '$q', '$$q', function (b, a, c, d) {
      function e (e, h, l, k) { const n = a.setInterval; const p = a.clearInterval; let q = 0; const u = y(k) && !k; const s = (u ? d : c).defer(); const M = s.promise; l = y(l) ? l : 0; M.then(null, null, e); M.$$intervalId = n(function () { s.notify(q++); l > 0 && q >= l && (s.resolve(q), p(M.$$intervalId), delete f[M.$$intervalId]); u || b.$apply() }, h); f[M.$$intervalId] = s; return M } var f = {}; e.cancel = function (b) {
        return b && b.$$intervalId in f
          ? (f[b.$$intervalId].reject('canceled'), a.clearInterval(b.$$intervalId),
            delete f[b.$$intervalId], !0)
          : !1
      }; return e
    }]
  } function Rd () {
    this.$get = function () {
      return {
        id: 'en-us',
        NUMBER_FORMATS: { DECIMAL_SEP: '.', GROUP_SEP: ',', PATTERNS: [{ minInt: 1, minFrac: 0, maxFrac: 3, posPre: '', posSuf: '', negPre: '-', negSuf: '', gSize: 3, lgSize: 3 }, { minInt: 1, minFrac: 2, maxFrac: 2, posPre: '\u00a4', posSuf: '', negPre: '(\u00a4', negSuf: ')', gSize: 3, lgSize: 3 }], CURRENCY_SYM: '$' },
        DATETIME_FORMATS: {
          MONTH: 'January February March April May June July August September October November December'.split(' '),
          SHORTMONTH: 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' '),
          DAY: 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' '),
          SHORTDAY: 'Sun Mon Tue Wed Thu Fri Sat'.split(' '),
          AMPMS: ['AM', 'PM'],
          medium: 'MMM d, y h:mm:ss a',
          short: 'M/d/yy h:mm a',
          fullDate: 'EEEE, MMMM d, y',
          longDate: 'MMMM d, y',
          mediumDate: 'MMM d, y',
          shortDate: 'M/d/yy',
          mediumTime: 'h:mm:ss a',
          shortTime: 'h:mm a',
          ERANAMES: ['Before Christ', 'Anno Domini'],
          ERAS: ['BC', 'AD']
        },
        pluralCat: function (b) { return b === 1 ? 'one' : 'other' }
      }
    }
  } function bc (b) {
    b = b.split('/'); for (let a = b.length; a--;)b[a] = qb(b[a])
    return b.join('/')
  } function ad (b, a) { const c = Aa(b); a.$$protocol = c.protocol; a.$$host = c.hostname; a.$$port = aa(c.port) || xf[c.protocol] || null } function bd (b, a) { const c = b.charAt(0) !== '/'; c && (b = '/' + b); const d = Aa(b); a.$$path = decodeURIComponent(c && d.pathname.charAt(0) === '/' ? d.pathname.substring(1) : d.pathname); a.$$search = sc(d.search); a.$$hash = decodeURIComponent(d.hash); a.$$path && a.$$path.charAt(0) != '/' && (a.$$path = '/' + a.$$path) } function ya (b, a) { if (a.indexOf(b) === 0) return a.substr(b.length) } function Ga (b) {
    const a = b.indexOf('#')
    return a == -1 ? b : b.substr(0, a)
  } function Fb (b) { return b.replace(/(#.+)|#$/, '$1') } function cc (b) { return b.substr(0, Ga(b).lastIndexOf('/') + 1) } function dc (b, a) {
    this.$$html5 = !0; a = a || ''; const c = cc(b); ad(b, this); this.$$parse = function (a) { const b = ya(c, a); if (!C(b)) throw Gb('ipthprfx', a, c); bd(b, this); this.$$path || (this.$$path = '/'); this.$$compose() }; this.$$compose = function () { const a = Pb(this.$$search); const b = this.$$hash ? '#' + qb(this.$$hash) : ''; this.$$url = bc(this.$$path) + (a ? '?' + a : '') + b; this.$$absUrl = c + this.$$url.substr(1) }; this.$$parseLinkUrl =
function (d, e) { if (e && e[0] === '#') return this.hash(e.slice(1)), !0; let f, g; (f = ya(b, d)) !== t ? (g = f, g = (f = ya(a, f)) !== t ? c + (ya('/', f) || f) : b + g) : (f = ya(c, d)) !== t ? g = c + f : c == d + '/' && (g = c); g && this.$$parse(g); return !!g }
  } function ec (b, a) {
    const c = cc(b); ad(b, this); this.$$parse = function (d) { d = ya(b, d) || ya(c, d); let e; d.charAt(0) === '#' ? (e = ya(a, d), x(e) && (e = d)) : e = this.$$html5 ? d : ''; bd(e, this); d = this.$$path; const f = /^\/[A-Z]:(\/.*)/; e.indexOf(b) === 0 && (e = e.replace(b, '')); f.exec(e) || (d = (e = f.exec(d)) ? e[1] : d); this.$$path = d; this.$$compose() }
    this.$$compose = function () { const c = Pb(this.$$search); const e = this.$$hash ? '#' + qb(this.$$hash) : ''; this.$$url = bc(this.$$path) + (c ? '?' + c : '') + e; this.$$absUrl = b + (this.$$url ? a + this.$$url : '') }; this.$$parseLinkUrl = function (a, c) { return Ga(b) == Ga(a) ? (this.$$parse(a), !0) : !1 }
  } function cd (b, a) {
    this.$$html5 = !0; ec.apply(this, arguments); const c = cc(b); this.$$parseLinkUrl = function (d, e) { if (e && e[0] === '#') return this.hash(e.slice(1)), !0; let f, g; b == Ga(d) ? f = d : (g = ya(c, d)) ? f = b + a + g : c === d + '/' && (f = c); f && this.$$parse(f); return !!f }; this.$$compose =
function () { const c = Pb(this.$$search); const e = this.$$hash ? '#' + qb(this.$$hash) : ''; this.$$url = bc(this.$$path) + (c ? '?' + c : '') + e; this.$$absUrl = b + a + this.$$url }
  } function Hb (b) { return function () { return this[b] } } function dd (b, a) { return function (c) { if (x(c)) return this[b]; this[b] = a(c); this.$$compose(); return this } } function Me () {
    let b = ''; const a = { enabled: !1, requireBase: !0, rewriteLinks: !0 }; this.hashPrefix = function (a) { return y(a) ? (b = a, this) : b }; this.html5Mode = function (b) {
      return Wa(b)
        ? (a.enabled = b, this)
        : J(b)
          ? (Wa(b.enabled) && (a.enabled =
b.enabled), Wa(b.requireBase) && (a.requireBase = b.requireBase), Wa(b.rewriteLinks) && (a.rewriteLinks = b.rewriteLinks), this)
          : a
    }; this.$get = ['$rootScope', '$browser', '$sniffer', '$rootElement', '$window', function (c, d, e, f, g) {
      function h (a, b, c) { const e = k.url(); const f = k.$$state; try { d.url(a, b, c), k.$$state = d.state() } catch (g) { throw k.url(e), k.$$state = f, g } } function l (a, b) { c.$broadcast('$locationChangeSuccess', k.absUrl(), a, k.$$state, b) } let k, n; n = d.baseHref(); const p = d.url(); let q; if (a.enabled) {
        if (!n && a.requireBase) throw Gb('nobase')
        q = p.substring(0, p.indexOf('/', p.indexOf('//') + 2)) + (n || '/'); n = e.history ? dc : cd
      } else q = Ga(p), n = ec; k = new n(q, '#' + b); k.$$parseLinkUrl(p, p); k.$$state = d.state(); const u = /^\s*(javascript|mailto):/i; f.on('click', function (b) {
        if (a.rewriteLinks && !b.ctrlKey && !b.metaKey && !b.shiftKey && b.which != 2 && b.button != 2) {
          for (var e = A(b.target); va(e[0]) !== 'a';) if (e[0] === f[0] || !(e = e.parent())[0]) return; let h = e.prop('href'); const l = e.attr('href') || e.attr('xlink:href'); J(h) && h.toString() === '[object SVGAnimatedString]' && (h = Aa(h.animVal).href)
          u.test(h) || !h || e.attr('target') || b.isDefaultPrevented() || !k.$$parseLinkUrl(h, l) || (b.preventDefault(), k.absUrl() != d.url() && (c.$apply(), g.angular['ff-684208-preventDefault'] = !0))
        }
      }); Fb(k.absUrl()) != Fb(p) && d.url(k.absUrl(), !0); let s = !0; d.onUrlChange(function (a, b) { c.$evalAsync(function () { const d = k.absUrl(); const e = k.$$state; let f; k.$$parse(a); k.$$state = b; f = c.$broadcast('$locationChangeStart', a, d, b, e).defaultPrevented; k.absUrl() === a && (f ? (k.$$parse(d), k.$$state = e, h(d, !1, e)) : (s = !1, l(d, e))) }); c.$$phase || c.$digest() })
      c.$watch(function () { const a = Fb(d.url()); const b = Fb(k.absUrl()); const f = d.state(); const g = k.$$replace; const q = a !== b || k.$$html5 && e.history && f !== k.$$state; if (s || q)s = !1, c.$evalAsync(function () { const b = k.absUrl(); const d = c.$broadcast('$locationChangeStart', b, a, k.$$state, f).defaultPrevented; k.absUrl() === b && (d ? (k.$$parse(a), k.$$state = f) : (q && h(b, g, f === k.$$state ? null : k.$$state), l(a, f))) }); k.$$replace = !1 }); return k
    }]
  } function Ne () {
    let b = !0; const a = this; this.debugEnabled = function (a) { return y(a) ? (b = a, this) : b }; this.$get = ['$window', function (c) {
      function d (a) {
        a instanceof
Error && (a.stack ? a = a.message && a.stack.indexOf(a.message) === -1 ? 'Error: ' + a.message + '\n' + a.stack : a.stack : a.sourceURL && (a = a.message + '\n' + a.sourceURL + ':' + a.line)); return a
      } function e (a) { const b = c.console || {}; const e = b[a] || b.log || E; a = !1; try { a = !!e.apply } catch (l) {} return a ? function () { const a = []; r(arguments, function (b) { a.push(d(b)) }); return e.apply(b, a) } : function (a, b) { e(a, b == null ? '' : b) } } return {
        log: e('log'),
        info: e('info'),
        warn: e('warn'),
        error: e('error'),
        debug: (function () {
          const c = e('debug'); return function () {
            b && c.apply(a,
              arguments)
          }
        }())
      }
    }]
  } function ua (b, a) { if (b === '__defineGetter__' || b === '__defineSetter__' || b === '__lookupGetter__' || b === '__lookupSetter__' || b === '__proto__') throw na('isecfld', a); return b } function oa (b, a) { if (b) { if (b.constructor === b) throw na('isecfn', a); if (b.window === b) throw na('isecwindow', a); if (b.children && (b.nodeName || b.prop && b.attr && b.find)) throw na('isecdom', a); if (b === Object) throw na('isecobj', a) } return b } function fc (b) { return b.constant } function hb (b, a, c, d, e) {
    oa(b, e); oa(a, e); c = c.split('.'); for (var f,
      g = 0; c.length > 1; g++) { f = ua(c.shift(), e); let h = g === 0 && a && a[f] || b[f]; h || (h = {}, b[f] = h); b = oa(h, e) }f = ua(c.shift(), e); oa(b[f], e); return b[f] = d
  } function Pa (b) { return b == 'constructor' } function ed (b, a, c, d, e, f, g) {
    ua(b, f); ua(a, f); ua(c, f); ua(d, f); ua(e, f); const h = function (a) { return oa(a, f) }; const l = g || Pa(b) ? h : ra; const k = g || Pa(a) ? h : ra; const n = g || Pa(c) ? h : ra; const p = g || Pa(d) ? h : ra; const q = g || Pa(e) ? h : ra; return function (f, g) {
      let h = g && g.hasOwnProperty(b) ? g : f; if (h == null) return h; h = l(h[b]); if (!a) return h; if (h == null) return t; h = k(h[a]); if (!c) return h; if (h ==
null) return t; h = n(h[c]); if (!d) return h; if (h == null) return t; h = p(h[d]); return e ? h == null ? t : h = q(h[e]) : h
    }
  } function yf (b, a) { return function (c, d) { return b(c, d, oa, a) } } function zf (b, a, c) {
    const d = a.expensiveChecks; const e = d ? Af : Bf; let f = e[b]; if (f) return f; const g = b.split('.'); const h = g.length; if (a.csp)f = h < 6 ? ed(g[0], g[1], g[2], g[3], g[4], c, d) : function (a, b) { let e = 0; let f; do f = ed(g[e++], g[e++], g[e++], g[e++], g[e++], c, d)(a, b), b = t, a = f; while (e < h); return f }; else {
      let l = ''; d && (l += 's = eso(s, fe);\nl = eso(l, fe);\n'); let k = d; r(g, function (a, b) {
        ua(a,
          c); let e = (b ? 's' : '((l&&l.hasOwnProperty("' + a + '"))?l:s)') + '.' + a; if (d || Pa(a))e = 'eso(' + e + ', fe)', k = !0; l += 'if(s == null) return undefined;\ns=' + e + ';\n'
      }); l += 'return s;'; a = new Function('s', 'l', 'eso', 'fe', l); a.toString = ea(l); k && (a = yf(a, c)); f = a
    }f.sharedGetter = !0; f.assign = function (a, c, d) { return hb(a, d, b, c, b) }; return e[b] = f
  } function gc (b) { return G(b.valueOf) ? b.valueOf() : Cf.call(b) } function Oe () {
    const b = ia(); const a = ia(); this.$get = ['$filter', '$sniffer', function (c, d) {
      function e (a) {
        let b = a; a.sharedGetter && (b = function (b,
          c) { return a(b, c) }, b.literal = a.literal, b.constant = a.constant, b.assign = a.assign); return b
      } function f (a, b) { for (let c = 0, d = a.length; c < d; c++) { const e = a[c]; e.constant || (e.inputs ? f(e.inputs, b) : b.indexOf(e) === -1 && b.push(e)) } return b } function g (a, b) { return a == null || b == null ? a === b : typeof a === 'object' && (a = gc(a), typeof a === 'object') ? !1 : a === b || a !== a && b !== b } function h (a, b, c, d) {
        var e = d.$$inputs || (d.$$inputs = f(d.inputs, [])); let h; if (e.length === 1) {
          let k = g; var e = e[0]; return a.$watch(function (a) {
            const b = e(a); g(b, k) || (h = d(a), k = b &&
gc(b)); return h
          }, b, c)
        } for (var l = [], q = 0, p = e.length; q < p; q++)l[q] = g; return a.$watch(function (a) { for (var b = !1, c = 0, f = e.length; c < f; c++) { const k = e[c](a); if (b || (b = !g(k, l[c])))l[c] = k && gc(k) }b && (h = d(a)); return h }, b, c)
      } function l (a, b, c, d) { let e, f; return e = a.$watch(function (a) { return d(a) }, function (a, c, d) { f = a; G(b) && b.apply(this, arguments); y(a) && d.$$postDigest(function () { y(f) && e() }) }, c) } function k (a, b, c, d) {
        function e (a) { let b = !0; r(a, function (a) { y(a) || (b = !1) }); return b } let f, g; return f = a.$watch(function (a) { return d(a) },
          function (a, c, d) { g = a; G(b) && b.call(this, a, c, d); e(a) && d.$$postDigest(function () { e(g) && f() }) }, c)
      } function n (a, b, c, d) { let e; return e = a.$watch(function (a) { return d(a) }, function (a, c, d) { G(b) && b.apply(this, arguments); e() }, c) } function p (a, b) {
        if (!b) return a; var c = a.$$watchDelegate; var c = c !== k && c !== l ? function (c, d) { const e = a(c, d); return b(e, c, d) } : function (c, d) { const e = a(c, d); const f = b(e, c, d); return y(e) ? f : e }; a.$$watchDelegate && a.$$watchDelegate !== h
          ? c.$$watchDelegate = a.$$watchDelegate
          : b.$stateful || (c.$$watchDelegate = h, c.inputs =
[a]); return c
      } const q = { csp: d.csp, expensiveChecks: !1 }; const u = { csp: d.csp, expensiveChecks: !0 }; return function (d, f, g) { let m, r, t; switch (typeof d) { case 'string':t = d = d.trim(); var L = g ? a : b; m = L[t]; m || (d.charAt(0) === ':' && d.charAt(1) === ':' && (r = !0, d = d.substring(2)), g = g ? u : q, m = new hc(g), m = (new ib(m, c, g)).parse(d), m.constant ? m.$$watchDelegate = n : r ? (m = e(m), m.$$watchDelegate = m.literal ? k : l) : m.inputs && (m.$$watchDelegate = h), L[t] = m); return p(m, f); case 'function':return p(d, f); default:return p(E, f) } }
    }]
  } function Qe () {
    this.$get =
['$rootScope', '$exceptionHandler', function (b, a) { return fd(function (a) { b.$evalAsync(a) }, a) }]
  } function Re () { this.$get = ['$browser', '$exceptionHandler', function (b, a) { return fd(function (a) { b.defer(a) }, a) }] } function fd (b, a) {
    function c (a, b, c) { function d (b) { return function (c) { e || (e = !0, b.call(a, c)) } } var e = !1; return [d(b), d(c)] } function d () { this.$$state = { status: 0 } } function e (a, b) { return function (c) { b.call(a, c) } } function f (c) {
      !c.processScheduled && c.pending && (c.processScheduled = !0, b(function () {
        let b, d, e; e = c.pending
        c.processScheduled = !1; c.pending = t; for (let f = 0, g = e.length; f < g; ++f) { d = e[f][0]; b = e[f][c.status]; try { G(b) ? d.resolve(b(c.value)) : c.status === 1 ? d.resolve(c.value) : d.reject(c.value) } catch (h) { d.reject(h), a(h) } }
      }))
    } function g () { this.promise = new d(); this.resolve = e(this, this.resolve); this.reject = e(this, this.reject); this.notify = e(this, this.notify) } const h = R('$q', TypeError); d.prototype = {
      then: function (a, b, c) {
        const d = new g(); this.$$state.pending = this.$$state.pending || []; this.$$state.pending.push([d, a, b, c]); this.$$state.status > 0 &&
f(this.$$state); return d.promise
      },
      catch: function (a) { return this.then(null, a) },
      finally: function (a, b) { return this.then(function (b) { return k(b, !0, a) }, function (b) { return k(b, !1, a) }, b) }
    }; g.prototype = {
      resolve: function (a) { this.promise.$$state.status || (a === this.promise ? this.$$reject(h('qcycle', a)) : this.$$resolve(a)) },
      $$resolve: function (b) {
        let d, e; e = c(this, this.$$resolve, this.$$reject); try {
          if (J(b) || G(b))d = b && b.then; G(d)
            ? (this.promise.$$state.status = -1, d.call(b, e[0], e[1], this.notify))
            : (this.promise.$$state.value =
b, this.promise.$$state.status = 1, f(this.promise.$$state))
        } catch (g) { e[1](g), a(g) }
      },
      reject: function (a) { this.promise.$$state.status || this.$$reject(a) },
      $$reject: function (a) { this.promise.$$state.value = a; this.promise.$$state.status = 2; f(this.promise.$$state) },
      notify: function (c) { const d = this.promise.$$state.pending; this.promise.$$state.status <= 0 && d && d.length && b(function () { for (var b, e, f = 0, g = d.length; f < g; f++) { e = d[f][0]; b = d[f][3]; try { e.notify(G(b) ? b(c) : c) } catch (h) { a(h) } } }) }
    }; const l = function (a, b) {
      const c = new g(); b
        ? c.resolve(a)
        : c.reject(a); return c.promise
    }; var k = function (a, b, c) { let d = null; try { G(c) && (d = c()) } catch (e) { return l(e, !1) } return d && G(d.then) ? d.then(function () { return l(a, b) }, function (a) { return l(a, !1) }) : l(a, b) }; const n = function (a, b, c, d) { const e = new g(); e.resolve(a); return e.promise.then(b, c, d) }; const p = function u (a) { if (!G(a)) throw h('norslvr', a); if (!(this instanceof u)) return new u(a); const b = new g(); a(function (a) { b.resolve(a) }, function (a) { b.reject(a) }); return b.promise }; p.defer = function () { return new g() }; p.reject = function (a) {
      const b = new g()
      b.reject(a); return b.promise
    }; p.when = n; p.all = function (a) { const b = new g(); let c = 0; const d = H(a) ? [] : {}; r(a, function (a, e) { c++; n(a).then(function (a) { d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d)) }, function (a) { d.hasOwnProperty(e) || b.reject(a) }) }); c === 0 && b.resolve(d); return b.promise }; return p
  } function $e () {
    this.$get = ['$window', '$timeout', function (b, a) {
      const c = b.requestAnimationFrame || b.webkitRequestAnimationFrame; const d = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.webkitCancelRequestAnimationFrame; const e = !!c; const f = e
        ? function (a) {
          const b =
c(a); return function () { d(b) }
        }
        : function (b) { const c = a(b, 16.66, !1); return function () { a.cancel(c) } }; f.supported = e; return f
    }]
  } function Pe () {
    function b (a) { function b () { this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null; this.$$listeners = {}; this.$$listenerCount = {}; this.$$watchersCount = 0; this.$id = ++ob; this.$$ChildScope = null }b.prototype = a; return b } let a = 10; const c = R('$rootScope'); let d = null; let e = null; this.digestTtl = function (b) { arguments.length && (a = b); return a }; this.$get = ['$injector', '$exceptionHandler',
      '$parse', '$browser', function (f, g, h, l) {
        function k (a) { a.currentScope.$$destroyed = !0 } function n () { this.$id = ++ob; this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null; this.$root = this; this.$$destroyed = !1; this.$$listeners = {}; this.$$listenerCount = {}; this.$$isolateBindings = null } function p (a) { if (v.$$phase) throw c('inprog', v.$$phase); v.$$phase = a } function q (a, b, c) {
          do a.$$listenerCount[c] -= b, a.$$listenerCount[c] === 0 && delete a.$$listenerCount[c]
          while (a = a.$parent)
        } function u () {} function s () { for (;t.length;) try { t.shift()() } catch (a) { g(a) }e = null } function M () { e === null && (e = l.defer(function () { v.$apply(s) })) }n.prototype = {
          constructor: n,
          $new: function (a, c) { let d; c = c || this; a ? (d = new n(), d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = b(this)), d = new this.$$ChildScope()); d.$parent = c; d.$$prevSibling = c.$$childTail; c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d; (a || c != this) && d.$on('$destroy', k); return d },
          $watch: function (a, b, c) { const e = h(a); if (e.$$watchDelegate) return e.$$watchDelegate(this, b, c, e); let f = this.$$watchers; const g = { fn: b, last: u, get: e, exp: a, eq: !!c }; d = null; G(b) || (g.fn = E); f || (f = this.$$watchers = []); f.unshift(g); return function () { Xa(f, g); d = null } },
          $watchGroup: function (a, b) {
            function c () { h = !1; k ? (k = !1, b(e, e, g)) : b(e, d, g) } var d = Array(a.length); var e = Array(a.length); const f = []; var g = this; var h = !1; var k = !0; if (!a.length) { let l = !0; g.$evalAsync(function () { l && b(e, e, g) }); return function () { l = !1 } } if (a.length === 1) {
              return this.$watch(a[0],
                function (a, c, f) { e[0] = a; d[0] = c; b(e, a === c ? e : d, f) })
            } r(a, function (a, b) { const k = g.$watch(a, function (a, f) { e[b] = a; d[b] = f; h || (h = !0, g.$evalAsync(c)) }); f.push(k) }); return function () { for (;f.length;)f.shift()() }
          },
          $watchCollection: function (a, b) {
            function c (a) {
              e = a; let b, d, g, h; if (!x(e)) {
                if (J(e)) {
                  if (Sa(e)) for (f !== p && (f = p, u = f.length = 0, l++), a = e.length, u !== a && (l++, f.length = u = a), b = 0; b < a; b++)h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g); else {
                    f !== n && (f = n = {}, u = 0, l++); a = 0; for (b in e) {
                      e.hasOwnProperty(b) && (a++, g = e[b], h =
f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (u++, f[b] = g, l++))
                    } if (u > a) for (b in l++, f)e.hasOwnProperty(b) || (u--, delete f[b])
                  }
                } else f !== e && (f = e, l++); return l
              }
            }c.$stateful = !0; const d = this; let e; let f; let g; const k = b.length > 1; var l = 0; const q = h(a, c); var p = []; var n = {}; let m = !0; var u = 0; return this.$watch(q, function () { m ? (m = !1, b(e, e, d)) : b(e, g, d); if (k) if (J(e)) if (Sa(e)) { g = Array(e.length); for (var a = 0; a < e.length; a++)g[a] = e[a] } else for (a in g = {}, e)tc.call(e, a) && (g[a] = e[a]); else g = e })
          },
          $digest: function () {
            let b; let f; let h; let k; let q; let n; let r = a; let t; const O = []; let M; let y; p('$digest'); l.$$checkUrlChange()
            this === v && e !== null && (l.defer.cancel(e), s()); d = null; do {
              n = !1; for (t = this; m.length;) { try { y = m.shift(), y.scope.$eval(y.expression, y.locals) } catch (w) { g(w) }d = null }a:do {
                if (k = t.$$watchers) {
                  for (q = k.length; q--;) {
                    try {
                      if (b = k[q]) {
                        if ((f = b.get(t)) !== (h = b.last) && !(b.eq ? ha(f, h) : typeof f === 'number' && typeof h === 'number' && isNaN(f) && isNaN(h)))n = !0, d = b, b.last = b.eq ? Da(f, null) : f, b.fn(f, h === u ? f : h, t), r < 5 && (M = 4 - r, O[M] || (O[M] = []), O[M].push({ msg: G(b.exp) ? 'fn: ' + (b.exp.name || b.exp.toString()) : b.exp, newVal: f, oldVal: h })); else if (b ===
d) { n = !1; break a }
                      }
                    } catch (A) { g(A) }
                  }
                } if (!(k = t.$$childHead || t !== this && t.$$nextSibling)) for (;t !== this && !(k = t.$$nextSibling);)t = t.$parent
              } while (t = k); if ((n || m.length) && !r--) throw v.$$phase = null, c('infdig', a, O)
            } while (n || m.length); for (v.$$phase = null; F.length;) try { F.shift()() } catch (x) { g(x) }
          },
          $destroy: function () {
            if (!this.$$destroyed) {
              const a = this.$parent; this.$broadcast('$destroy'); this.$$destroyed = !0; if (this !== v) {
                for (const b in this.$$listenerCount)q(this, this.$$listenerCount[b], b); a.$$childHead == this && (a.$$childHead =
this.$$nextSibling); a.$$childTail == this && (a.$$childTail = this.$$prevSibling); this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling); this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling); this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = E; this.$on = this.$watch = this.$watchGroup = function () { return E }; this.$$listeners = {}; this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
              }
            }
          },
          $eval: function (a,
            b) { return h(a)(this, b) },
          $evalAsync: function (a, b) { v.$$phase || m.length || l.defer(function () { m.length && v.$digest() }); m.push({ scope: this, expression: a, locals: b }) },
          $$postDigest: function (a) { F.push(a) },
          $apply: function (a) { try { return p('$apply'), this.$eval(a) } catch (b) { g(b) } finally { v.$$phase = null; try { v.$digest() } catch (c) { throw g(c), c } } },
          $applyAsync: function (a) { function b () { c.$eval(a) } var c = this; a && t.push(b); M() },
          $on: function (a, b) {
            let c = this.$$listeners[a]; c || (this.$$listeners[a] = c = []); c.push(b); let d = this; do {
              d.$$listenerCount[a] ||
(d.$$listenerCount[a] = 0), d.$$listenerCount[a]++
            } while (d = d.$parent); const e = this; return function () { const d = c.indexOf(b); d !== -1 && (c[d] = null, q(e, 1, a)) }
          },
          $emit: function (a, b) {
            const c = []; let d; let e = this; let f = !1; var h = { name: a, targetScope: e, stopPropagation: function () { f = !0 }, preventDefault: function () { h.defaultPrevented = !0 }, defaultPrevented: !1 }; const k = Ya([h], arguments, 1); let l; let q; do {
              d = e.$$listeners[a] || c; h.currentScope = e; l = 0; for (q = d.length; l < q; l++) if (d[l]) try { d[l].apply(null, k) } catch (p) { g(p) } else d.splice(l, 1), l--, q--; if (f) {
                return h.currentScope =
null, h
              } e = e.$parent
            } while (e); h.currentScope = null; return h
          },
          $broadcast: function (a, b) {
            let c = this; let d = this; var e = { name: a, targetScope: this, preventDefault: function () { e.defaultPrevented = !0 }, defaultPrevented: !1 }; if (!this.$$listenerCount[a]) return e; for (var f = Ya([e], arguments, 1), h, l; c = d;) {
              e.currentScope = c; d = c.$$listeners[a] || []; h = 0; for (l = d.length; h < l; h++) if (d[h]) try { d[h].apply(null, f) } catch (k) { g(k) } else d.splice(h, 1), h--, l--; if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling)) {
                for (;c !== this && !(d =
c.$$nextSibling);)c = c.$parent
              }
            }e.currentScope = null; return e
          }
        }; var v = new n(); var m = v.$$asyncQueue = []; var F = v.$$postDigestQueue = []; var t = v.$$applyAsyncQueue = []; return v
      }]
  } function Sd () {
    let b = /^\s*(https?|ftp|mailto|tel|file):/; let a = /^\s*((https?|ftp|file|blob):|data:image\/)/; this.aHrefSanitizationWhitelist = function (a) { return y(a) ? (b = a, this) : b }; this.imgSrcSanitizationWhitelist = function (b) { return y(b) ? (a = b, this) : a }; this.$get = function () {
      return function (c, d) {
        const e = d ? a : b; let f; f = Aa(c).href; return f === '' || f.match(e)
          ? c
          : 'unsafe:' +
f
      }
    }
  } function Df (b) { if (b === 'self') return b; if (C(b)) { if (b.indexOf('***') > -1) throw Ba('iwcard', b); b = gd(b).replace('\\*\\*', '.*').replace('\\*', '[^:/.?&;]*'); return new RegExp('^' + b + '$') } if (Ua(b)) return new RegExp('^' + b.source + '$'); throw Ba('imatcher') } function hd (b) { const a = []; y(b) && r(b, function (b) { a.push(Df(b)) }); return a } function Te () {
    this.SCE_CONTEXTS = pa; let b = ['self']; let a = []; this.resourceUrlWhitelist = function (a) { arguments.length && (b = hd(a)); return b }; this.resourceUrlBlacklist = function (b) {
      arguments.length &&
(a = hd(b)); return a
    }; this.$get = ['$injector', function (c) {
      function d (a, b) { return a === 'self' ? $c(b) : !!a.exec(b.href) } function e (a) { const b = function (a) { this.$$unwrapTrustedValue = function () { return a } }; a && (b.prototype = new a()); b.prototype.valueOf = function () { return this.$$unwrapTrustedValue() }; b.prototype.toString = function () { return this.$$unwrapTrustedValue().toString() }; return b } let f = function (a) { throw Ba('unsafe') }; c.has('$sanitize') && (f = c.get('$sanitize')); const g = e(); const h = {}; h[pa.HTML] = e(g); h[pa.CSS] = e(g); h[pa.URL] =
e(g); h[pa.JS] = e(g); h[pa.RESOURCE_URL] = e(h[pa.URL]); return {
        trustAs: function (a, b) { const c = h.hasOwnProperty(a) ? h[a] : null; if (!c) throw Ba('icontext', a, b); if (b === null || b === t || b === '') return b; if (typeof b !== 'string') throw Ba('itype', a); return new c(b) },
        getTrusted: function (c, e) {
          if (e === null || e === t || e === '') return e; var g = h.hasOwnProperty(c) ? h[c] : null; if (g && e instanceof g) return e.$$unwrapTrustedValue(); if (c === pa.RESOURCE_URL) {
            var g = Aa(e.toString()); let p; let q; let u = !1; p = 0; for (q = b.length; p < q; p++) if (d(b[p], g)) { u = !0; break } if (u) {
              for (p =
0, q = a.length; p < q; p++) if (d(a[p], g)) { u = !1; break }
            } if (u) return e; throw Ba('insecurl', e.toString())
          } if (c === pa.HTML) return f(e); throw Ba('unsafe')
        },
        valueOf: function (a) { return a instanceof g ? a.$$unwrapTrustedValue() : a }
      }
    }]
  } function Se () {
    let b = !0; this.enabled = function (a) { arguments.length && (b = !!a); return b }; this.$get = ['$parse', '$sceDelegate', function (a, c) {
      if (b && Qa < 8) throw Ba('iequirks'); const d = sa(pa); d.isEnabled = function () { return b }; d.trustAs = c.trustAs; d.getTrusted = c.getTrusted; d.valueOf = c.valueOf; b || (d.trustAs =
d.getTrusted = function (a, b) { return b }, d.valueOf = ra); d.parseAs = function (b, c) { const e = a(c); return e.literal && e.constant ? e : a(c, function (a) { return d.getTrusted(b, a) }) }; const e = d.parseAs; const f = d.getTrusted; const g = d.trustAs; r(pa, function (a, b) { const c = z(b); d[db('parse_as_' + c)] = function (b) { return e(a, b) }; d[db('get_trusted_' + c)] = function (b) { return f(a, b) }; d[db('trust_as_' + c)] = function (b) { return g(a, b) } }); return d
    }]
  } function Ue () {
    this.$get = ['$window', '$document', function (b, a) {
      const c = {}; const d = aa((/android (\d+)/.exec(z((b.navigator ||
{}).userAgent)) || [])[1]); const e = /Boxee/i.test((b.navigator || {}).userAgent); const f = a[0] || {}; let g; const h = /^(Moz|webkit|ms)(?=[A-Z])/; const l = f.body && f.body.style; let k = !1; let n = !1; if (l) { for (const p in l) if (k = h.exec(p)) { g = k[0]; g = g.substr(0, 1).toUpperCase() + g.substr(1); break }g || (g = 'WebkitOpacity' in l && 'webkit'); k = !!('transition' in l || g + 'Transition' in l); n = !!('animation' in l || g + 'Animation' in l); !d || k && n || (k = C(f.body.style.webkitTransition), n = C(f.body.style.webkitAnimation)) } return {
        history: !(!b.history || !b.history.pushState || d < 4 || e),
        hasEvent: function (a) {
          if (a ===
'input' && Qa <= 11) return !1; if (x(c[a])) { const b = f.createElement('div'); c[a] = 'on' + a in b } return c[a]
        },
        csp: bb(),
        vendorPrefix: g,
        transitions: k,
        animations: n,
        android: d
      }
    }]
  } function We () {
    this.$get = ['$templateCache', '$http', '$q', function (b, a, c) {
      function d (e, f) {
        d.totalPendingRequests++; let g = a.defaults && a.defaults.transformResponse; H(g) ? g = g.filter(function (a) { return a !== Zb }) : g === Zb && (g = null); return a.get(e, { cache: b, transformResponse: g }).finally(function () { d.totalPendingRequests-- }).then(function (a) { return a.data },
          function (a) { if (!f) throw la('tpload', e); return c.reject(a) })
      }d.totalPendingRequests = 0; return d
    }]
  } function Xe () {
    this.$get = ['$rootScope', '$browser', '$location', function (b, a, c) {
      return {
        findBindings: function (a, b, c) { a = a.getElementsByClassName('ng-binding'); const g = []; r(a, function (a) { const d = ca.element(a).data('$binding'); d && r(d, function (d) { c ? (new RegExp('(^|\\s)' + gd(b) + '(\\s|\\||$)')).test(d) && g.push(a) : d.indexOf(b) != -1 && g.push(a) }) }); return g },
        findModels: function (a, b, c) {
          for (let g = ['ng-', 'data-ng-', 'ng\\:'],
            h = 0; h < g.length; ++h) { const l = a.querySelectorAll('[' + g[h] + 'model' + (c ? '=' : '*=') + '"' + b + '"]'); if (l.length) return l }
        },
        getLocation: function () { return c.url() },
        setLocation: function (a) { a !== c.url() && (c.url(a), b.$digest()) },
        whenStable: function (b) { a.notifyWhenNoOutstandingRequests(b) }
      }
    }]
  } function Ye () {
    this.$get = ['$rootScope', '$browser', '$q', '$$q', '$exceptionHandler', function (b, a, c, d, e) {
      function f (f, l, k) {
        const n = y(k) && !k; const p = (n ? d : c).defer(); const q = p.promise; l = a.defer(function () {
          try { p.resolve(f()) } catch (a) { p.reject(a), e(a) } finally { delete g[q.$$timeoutId] }n ||
b.$apply()
        }, l); q.$$timeoutId = l; g[l] = p; return q
      } var g = {}; f.cancel = function (b) { return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject('canceled'), delete g[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1 }; return f
    }]
  } function Aa (b) {
    Qa && ($.setAttribute('href', b), b = $.href); $.setAttribute('href', b); return {
      href: $.href,
      protocol: $.protocol ? $.protocol.replace(/:$/, '') : '',
      host: $.host,
      search: $.search ? $.search.replace(/^\?/, '') : '',
      hash: $.hash ? $.hash.replace(/^#/, '') : '',
      hostname: $.hostname,
      port: $.port,
      pathname: $.pathname.charAt(0) ===
'/'
        ? $.pathname
        : '/' + $.pathname
    }
  } function $c (b) { b = C(b) ? Aa(b) : b; return b.protocol === id.protocol && b.host === id.host } function Ze () { this.$get = ea(Q) } function Fc (b) {
    function a (c, d) { if (J(c)) { const e = {}; r(c, function (b, c) { e[c] = a(c, b) }); return e } return b.factory(c + 'Filter', d) } this.register = a; this.$get = ['$injector', function (a) { return function (b) { return a.get(b + 'Filter') } }]; a('currency', jd); a('date', kd); a('filter', Ef); a('json', Ff); a('limitTo', Gf); a('lowercase', Hf); a('number', ld); a('orderBy', md); a('uppercase',
      If)
  } function Ef () { return function (b, a, c) { if (!H(b)) return b; let d; switch (typeof a) { case 'function':break; case 'boolean':case 'number':case 'string':d = !0; case 'object':a = Jf(a, c, d); break; default:return b } return b.filter(a) } } function Jf (b, a, c) { const d = J(b) && '$' in b; !0 === a ? a = ha : G(a) || (a = function (a, b) { if (J(a) || J(b)) return !1; a = z('' + a); b = z('' + b); return a.indexOf(b) !== -1 }); return function (e) { return d && !J(e) ? Ha(e, b.$, a, !1) : Ha(e, b, a, c) } } function Ha (b, a, c, d, e) {
    let f = b !== null ? typeof b : 'null'; const g = a !== null
      ? typeof a
      : 'null'; if (g === 'string' && a.charAt(0) === '!') return !Ha(b, a.substring(1), c, d); if (H(b)) return b.some(function (b) { return Ha(b, a, c, d) }); switch (f) { case 'object':var h; if (d) { for (h in b) if (h.charAt(0) !== '$' && Ha(b[h], a, c, !0)) return !0; return e ? !1 : Ha(b, a, c, !1) } if (g === 'object') { for (h in a) if (e = a[h], !G(e) && !x(e) && (f = h === '$', !Ha(f ? b : b[h], e, c, f, f))) return !1; return !0 } return c(b, a); case 'function':return !1; default:return c(b, a) }
  } function jd (b) {
    const a = b.NUMBER_FORMATS; return function (b, d, e) {
      x(d) && (d = a.CURRENCY_SYM); x(e) &&
(e = a.PATTERNS[1].maxFrac); return b == null ? b : nd(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, e).replace(/\u00A4/g, d)
    }
  } function ld (b) { const a = b.NUMBER_FORMATS; return function (b, d) { return b == null ? b : nd(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d) } } function nd (b, a, c, d, e) {
    if (!isFinite(b) || J(b)) return ''; let f = b < 0; b = Math.abs(b); var g = b + ''; let h = ''; const l = []; var k = !1; if (g.indexOf('e') !== -1) { var n = g.match(/([\d\.]+)e(-?)(\d+)/); n && n[2] == '-' && n[3] > e + 1 ? b = 0 : (h = g, k = !0) } if (k)e > 0 && b < 1 && (h = b.toFixed(e), b = parseFloat(h)); else {
      g = (g.split(od)[1] ||
'').length; x(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac)); b = +(Math.round(+(b.toString() + 'e' + e)).toString() + 'e' + -e); var g = ('' + b).split(od); var k = g[0]; var g = g[1] || ''; let p = 0; const q = a.lgSize; const u = a.gSize; if (k.length >= q + u) for (p = k.length - q, n = 0; n < p; n++)(p - n) % u === 0 && n !== 0 && (h += c), h += k.charAt(n); for (n = p; n < k.length; n++)(k.length - n) % q === 0 && n !== 0 && (h += c), h += k.charAt(n); for (;g.length < e;)g += '0'; e && e !== '0' && (h += d + g.substr(0, e))
    }b === 0 && (f = !1); l.push(f ? a.negPre : a.posPre, h, f ? a.negSuf : a.posSuf); return l.join('')
  } function Ib (b, a,
    c) { let d = ''; b < 0 && (d = '-', b = -b); for (b = '' + b; b.length < a;)b = '0' + b; c && (b = b.substr(b.length - a)); return d + b } function U (b, a, c, d) { c = c || 0; return function (e) { e = e['get' + b](); if (c > 0 || e > -c)e += c; e === 0 && c == -12 && (e = 12); return Ib(e, a, d) } } function Jb (b, a) { return function (c, d) { const e = c['get' + b](); const f = ub(a ? 'SHORT' + b : b); return d[f][e] } } function pd (b) { const a = (new Date(b, 0, 1)).getDay(); return new Date(b, 0, (a <= 4 ? 5 : 12) - a) } function qd (b) {
    return function (a) {
      const c = pd(a.getFullYear()); a = +new Date(a.getFullYear(), a.getMonth(), a.getDate() +
(4 - a.getDay())) - +c; a = 1 + Math.round(a / 6048E5); return Ib(a, b)
    }
  } function ic (b, a) { return b.getFullYear() <= 0 ? a.ERAS[0] : a.ERAS[1] } function kd (b) {
    function a (a) { let b; if (b = a.match(c)) { a = new Date(0); let f = 0; let g = 0; let h = b[8] ? a.setUTCFullYear : a.setFullYear; const l = b[8] ? a.setUTCHours : a.setHours; b[9] && (f = aa(b[9] + b[10]), g = aa(b[9] + b[11])); h.call(a, aa(b[1]), aa(b[2]) - 1, aa(b[3])); f = aa(b[4] || 0) - f; g = aa(b[5] || 0) - g; h = aa(b[6] || 0); b = Math.round(1E3 * parseFloat('0.' + (b[7] || 0))); l.call(a, f, g, h, b) } return a } var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/
    return function (c, e, f) { let g = ''; let h = []; let l; let k; e = e || 'mediumDate'; e = b.DATETIME_FORMATS[e] || e; C(c) && (c = Kf.test(c) ? aa(c) : a(c)); Y(c) && (c = new Date(c)); if (!ga(c)) return c; for (;e;)(k = Lf.exec(e)) ? (h = Ya(h, k, 1), e = h.pop()) : (h.push(e), e = null); f && f === 'UTC' && (c = new Date(c.getTime()), c.setMinutes(c.getMinutes() + c.getTimezoneOffset())); r(h, function (a) { l = Mf[a]; g += l ? l(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, '').replace(/''/g, "'") }); return g }
  } function Ff () { return function (b, a) { x(a) && (a = 2); return $a(b, a) } } function Gf () {
    return function (b,
      a) { Y(b) && (b = b.toString()); return H(b) || C(b) ? (a = Infinity === Math.abs(Number(a)) ? Number(a) : aa(a)) ? a > 0 ? b.slice(0, a) : b.slice(a) : C(b) ? '' : [] : b }
  } function md (b) {
    return function (a, c, d) {
      function e (a, b) { return b ? function (b, c) { return a(c, b) } : a } function f (a) { switch (typeof a) { case 'number':case 'boolean':case 'string':return !0; default:return !1 } } function g (a) { return a === null ? 'null' : typeof a.valueOf === 'function' && (a = a.valueOf(), f(a)) || typeof a.toString === 'function' && (a = a.toString(), f(a)) ? a : '' } function h (a, b) {
        const c =
typeof a; const d = typeof b; c === d && c === 'object' && (a = g(a), b = g(b)); return c === d ? (c === 'string' && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1
      } if (!Sa(a)) return a; c = H(c) ? c : [c]; c.length === 0 && (c = ['+']); c = c.map(function (a) { let c = !1; let d = a || ra; if (C(a)) { if (a.charAt(0) == '+' || a.charAt(0) == '-')c = a.charAt(0) == '-', a = a.substring(1); if (a === '') return e(h, c); d = b(a); if (d.constant) { const f = d(); return e(function (a, b) { return h(a[f], b[f]) }, c) } } return e(function (a, b) { return h(d(a), d(b)) }, c) }); return Za.call(a).sort(e(function (a,
        b) { for (let d = 0; d < c.length; d++) { const e = c[d](a, b); if (e !== 0) return e } return 0 }, d))
    }
  } function Ia (b) { G(b) && (b = { link: b }); b.restrict = b.restrict || 'AC'; return ea(b) } function rd (b, a, c, d, e) {
    const f = this; const g = []; const h = f.$$parentForm = b.parent().controller('form') || Kb; f.$error = {}; f.$$success = {}; f.$pending = t; f.$name = e(a.name || a.ngForm || '')(c); f.$dirty = !1; f.$pristine = !0; f.$valid = !0; f.$invalid = !1; f.$submitted = !1; h.$addControl(f); f.$rollbackViewValue = function () { r(g, function (a) { a.$rollbackViewValue() }) }; f.$commitViewValue = function () {
      r(g,
        function (a) { a.$commitViewValue() })
    }; f.$addControl = function (a) { La(a.$name, 'input'); g.push(a); a.$name && (f[a.$name] = a) }; f.$$renameControl = function (a, b) { const c = a.$name; f[c] === a && delete f[c]; f[b] = a; a.$name = b }; f.$removeControl = function (a) { a.$name && f[a.$name] === a && delete f[a.$name]; r(f.$pending, function (b, c) { f.$setValidity(c, null, a) }); r(f.$error, function (b, c) { f.$setValidity(c, null, a) }); r(f.$$success, function (b, c) { f.$setValidity(c, null, a) }); Xa(g, a) }; sd({
      ctrl: this,
      $element: b,
      set: function (a, b, c) {
        const d = a[b]
        d ? d.indexOf(c) === -1 && d.push(c) : a[b] = [c]
      },
      unset: function (a, b, c) { const d = a[b]; d && (Xa(d, c), d.length === 0 && delete a[b]) },
      parentForm: h,
      $animate: d
    }); f.$setDirty = function () { d.removeClass(b, Ra); d.addClass(b, Lb); f.$dirty = !0; f.$pristine = !1; h.$setDirty() }; f.$setPristine = function () { d.setClass(b, Ra, Lb + ' ng-submitted'); f.$dirty = !1; f.$pristine = !0; f.$submitted = !1; r(g, function (a) { a.$setPristine() }) }; f.$setUntouched = function () { r(g, function (a) { a.$setUntouched() }) }; f.$setSubmitted = function () {
      d.addClass(b, 'ng-submitted')
      f.$submitted = !0; h.$setSubmitted()
    }
  } function jc (b) { b.$formatters.push(function (a) { return b.$isEmpty(a) ? a : a.toString() }) } function jb (b, a, c, d, e, f) {
    const g = z(a[0].type); if (!e.android) { var h = !1; a.on('compositionstart', function (a) { h = !0 }); a.on('compositionend', function () { h = !1; l() }) } var l = function (b) { k && (f.defer.cancel(k), k = null); if (!h) { let e = a.val(); b = b && b.type; g === 'password' || c.ngTrim && c.ngTrim === 'false' || (e = N(e)); (d.$viewValue !== e || e === '' && d.$$hasNativeValidators) && d.$setViewValue(e, b) } }; if (e.hasEvent('input')) {
      a.on('input',
        l)
    } else { var k; const n = function (a, b, c) { k || (k = f.defer(function () { k = null; b && b.value === c || l(a) })) }; a.on('keydown', function (a) { const b = a.keyCode; b === 91 || b > 15 && b < 19 || b >= 37 && b <= 40 || n(a, this, this.value) }); if (e.hasEvent('paste'))a.on('paste cut', n) }a.on('change', l); d.$render = function () { a.val(d.$isEmpty(d.$viewValue) ? '' : d.$viewValue) }
  } function Mb (b, a) {
    return function (c, d) {
      let e, f; if (ga(c)) return c; if (C(c)) {
        c.charAt(0) == '"' && c.charAt(c.length - 1) == '"' && (c = c.substring(1, c.length - 1)); if (Nf.test(c)) return new Date(c); b.lastIndex =
0; if (e = b.exec(c)) return e.shift(), f = d ? { yyyy: d.getFullYear(), MM: d.getMonth() + 1, dd: d.getDate(), HH: d.getHours(), mm: d.getMinutes(), ss: d.getSeconds(), sss: d.getMilliseconds() / 1E3 } : { yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0 }, r(e, function (b, c) { c < a.length && (f[a[c]] = +b) }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0)
      } return NaN
    }
  } function kb (b, a, c, d) {
    return function (e, f, g, h, l, k, n) {
      function p (a) { return a && !(a.getTime && a.getTime() !== a.getTime()) } function q (a) { return y(a) ? ga(a) ? a : c(a) : t }td(e, f, g, h)
      jb(e, f, g, h, l, k); const u = h && h.$options && h.$options.timezone; let s; h.$$parserName = b; h.$parsers.push(function (b) { return h.$isEmpty(b) ? null : a.test(b) ? (b = c(b, s), u === 'UTC' && b.setMinutes(b.getMinutes() - b.getTimezoneOffset()), b) : t }); h.$formatters.push(function (a) { if (a && !ga(a)) throw Nb('datefmt', a); if (p(a)) { if ((s = a) && u === 'UTC') { const b = 6E4 * s.getTimezoneOffset(); s = new Date(s.getTime() + b) } return n('date')(a, d, u) }s = null; return '' }); if (y(g.min) || g.ngMin) {
        let r; h.$validators.min = function (a) { return !p(a) || x(r) || c(a) >= r }
        g.$observe('min', function (a) { r = q(a); h.$validate() })
      } if (y(g.max) || g.ngMax) { let v; h.$validators.max = function (a) { return !p(a) || x(v) || c(a) <= v }; g.$observe('max', function (a) { v = q(a); h.$validate() }) }
    }
  } function td (b, a, c, d) { (d.$$hasNativeValidators = J(a[0].validity)) && d.$parsers.push(function (b) { const c = a.prop('validity') || {}; return c.badInput && !c.typeMismatch ? t : b }) } function ud (b, a, c, d, e) { if (y(d)) { b = b(d); if (!b.constant) throw R('ngModel')('constexpr', c, d); return b(a) } return e } function kc (b, a) {
    b = 'ngClass' + b; return ['$animate',
      function (c) {
        function d (a, b) { const c = []; let d = 0; a:for (;d < a.length; d++) { for (var e = a[d], n = 0; n < b.length; n++) if (e == b[n]) continue a; c.push(e) } return c } function e (a) { if (!H(a)) { if (C(a)) return a.split(' '); if (J(a)) { let b = []; r(a, function (a, c) { a && (b = b.concat(c.split(' '))) }); return b } } return a } return {
          restrict: 'AC',
          link: function (f, g, h) {
            function l (a, b) { const c = g.data('$classCounts') || {}; const d = []; r(a, function (a) { if (b > 0 || c[a])c[a] = (c[a] || 0) + b, c[a] === +(b > 0) && d.push(a) }); g.data('$classCounts', c); return d.join(' ') } function k (b) {
              if (!0 ===
a || f.$index % 2 === a) { var k = e(b || []); if (!n) { var u = l(k, 1); h.$addClass(u) } else if (!ha(b, n)) { const s = e(n); var u = d(k, s); var k = d(s, k); var u = l(u, 1); var k = l(k, -1); u && u.length && c.addClass(g, u); k && k.length && c.removeClass(g, k) } }n = sa(b)
            } let n; f.$watch(h[b], k, !0); h.$observe('class', function (a) { k(f.$eval(h[b])) }); b !== 'ngClass' && f.$watch('$index', function (c, d) { let g = c & 1; if (g !== (d & 1)) { const k = e(f.$eval(h[b])); g === a ? (g = l(k, 1), h.$addClass(g)) : (g = l(k, -1), h.$removeClass(g)) } })
          }
        }
      }]
  } function sd (b) {
    function a (a, b) {
      b && !f[a]
        ? (k.addClass(e, a),
          f[a] = !0)
        : !b && f[a] && (k.removeClass(e, a), f[a] = !1)
    } function c (b, c) { b = b ? '-' + vc(b, '-') : ''; a(lb + b, !0 === c); a(vd + b, !1 === c) } const d = b.ctrl; var e = b.$element; var f = {}; const g = b.set; const h = b.unset; const l = b.parentForm; var k = b.$animate; f[vd] = !(f[lb] = e.hasClass(lb)); d.$setValidity = function (b, e, f) {
      e === t ? (d.$pending || (d.$pending = {}), g(d.$pending, b, f)) : (d.$pending && h(d.$pending, b, f), wd(d.$pending) && (d.$pending = t)); Wa(e) ? e ? (h(d.$error, b, f), g(d.$$success, b, f)) : (g(d.$error, b, f), h(d.$$success, b, f)) : (h(d.$error, b, f), h(d.$$success, b, f)); d.$pending
        ? (a(xd,
            !0), d.$valid = d.$invalid = t, c('', null))
        : (a(xd, !1), d.$valid = wd(d.$error), d.$invalid = !d.$valid, c('', d.$valid)); e = d.$pending && d.$pending[b] ? t : d.$error[b] ? !1 : d.$$success[b] ? !0 : null; c(b, e); l.$setValidity(b, e, d)
    }
  } function wd (b) { if (b) for (const a in b) return !1; return !0 } const Of = /^\/(.+)\/([a-z]*)$/; var z = function (b) { return C(b) ? b.toLowerCase() : b }; var tc = Object.prototype.hasOwnProperty; var ub = function (b) { return C(b) ? b.toUpperCase() : b }; let Qa; let A; let ta; var Za = [].slice; var qf = [].splice; const Pf = [].push; var Ca = Object.prototype.toString; var Ja = R('ng'); var ca = Q.angular ||
(Q.angular = {}); let cb; var ob = 0; Qa = W.documentMode; E.$inject = []; ra.$inject = []; var H = Array.isArray; var N = function (b) { return C(b) ? b.trim() : b }; var gd = function (b) { return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08') }; var bb = function () { if (y(bb.isActive_)) return bb.isActive_; let b = !(!W.querySelector('[ng-csp]') && !W.querySelector('[data-ng-csp]')); if (!b) try { new Function('') } catch (a) { b = !0 } return bb.isActive_ = b }; var rb = ['ng-', 'data-ng-', 'ng:', 'x-ng-']; var Md = /[A-Z]/g; var wc = !1; let Qb; var qa = 1; var pb = 3; var Qd = {
    full: '1.3.15',
    major: 1,
    minor: 3,
    dot: 15,
    codeName: 'locality-filtration'
  }; T.expando = 'ng339'; var zb = T.cache = {}; var hf = 1; T._data = function (b) { return this.cache[b[this.expando]] || {} }; var cf = /([\:\-\_]+(.))/g; var df = /^moz([A-Z])/; const Qf = { mouseleave: 'mouseout', mouseenter: 'mouseover' }; var Tb = R('jqLite'); var gf = /^<(\w+)\s*\/?>(?:<\/\1>|)$/; var Sb = /<|&#?\w+;/; var ef = /<([\w:]+)/; var ff = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi; var ja = {
    option: [1, '<select multiple="multiple">', '</select>'],
    thead: [1, '<table>', '</table>'],
    col: [2, '<table><colgroup>',
      '</colgroup></table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
    _default: [0, '', '']
  }; ja.optgroup = ja.option; ja.tbody = ja.tfoot = ja.colgroup = ja.caption = ja.thead; ja.th = ja.td; var Ka = T.prototype = {
    ready: function (b) { function a () { c || (c = !0, b()) } var c = !1; W.readyState === 'complete' ? setTimeout(a) : (this.on('DOMContentLoaded', a), T(Q).on('load', a)) },
    toString: function () { const b = []; r(this, function (a) { b.push('' + a) }); return '[' + b.join(', ') + ']' },
    eq: function (b) {
      return b >=
0
        ? A(this[b])
        : A(this[this.length + b])
    },
    length: 0,
    push: Pf,
    sort: [].sort,
    splice: [].splice
  }; var Eb = {}; r('multiple selected checked disabled readOnly required open'.split(' '), function (b) { Eb[z(b)] = b }); var Oc = {}; r('input select option textarea button form details'.split(' '), function (b) { Oc[b] = !0 }); var Pc = { ngMinlength: 'minlength', ngMaxlength: 'maxlength', ngMin: 'min', ngMax: 'max', ngPattern: 'pattern' }; r({ data: Vb, removeData: xb }, function (b, a) { T[a] = b }); r({
    data: Vb,
    inheritedData: Db,
    scope: function (b) {
      return A.data(b, '$scope') ||
Db(b.parentNode || b, ['$isolateScope', '$scope'])
    },
    isolateScope: function (b) { return A.data(b, '$isolateScope') || A.data(b, '$isolateScopeNoTemplate') },
    controller: Kc,
    injector: function (b) { return Db(b, '$injector') },
    removeAttr: function (b, a) { b.removeAttribute(a) },
    hasClass: Ab,
    css: function (b, a, c) { a = db(a); if (y(c))b.style[a] = c; else return b.style[a] },
    attr: function (b, a, c) {
      const d = z(a); if (Eb[d]) {
        if (y(c))c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d)); else {
          return b[a] || (b.attributes.getNamedItem(a) || E).specified
            ? d
            : t
        }
      } else if (y(c))b.setAttribute(a, c); else if (b.getAttribute) return b = b.getAttribute(a, 2), b === null ? t : b
    },
    prop: function (b, a, c) { if (y(c))b[a] = c; else return b[a] },
    text: (function () { function b (a, b) { if (x(b)) { const d = a.nodeType; return d === qa || d === pb ? a.textContent : '' }a.textContent = b }b.$dv = ''; return b }()),
    val: function (b, a) { if (x(a)) { if (b.multiple && va(b) === 'select') { const c = []; r(b.options, function (a) { a.selected && c.push(a.value || a.text) }); return c.length === 0 ? null : c } return b.value }b.value = a },
    html: function (b, a) {
      if (x(a)) return b.innerHTML
      wb(b, !0); b.innerHTML = a
    },
    empty: Lc
  }, function (b, a) { T.prototype[a] = function (a, d) { let e; let f; let g = this.length; if (b !== Lc && (b.length == 2 && b !== Ab && b !== Kc ? a : d) === t) { if (J(a)) { for (e = 0; e < g; e++) if (b === Vb)b(this[e], a); else for (f in a)b(this[e], f, a[f]); return this }e = b.$dv; g = e === t ? Math.min(g, 1) : g; for (f = 0; f < g; f++) { const h = b(this[f], a, d); e = e ? e + h : h } return e } for (e = 0; e < g; e++)b(this[e], a, d); return this } }); r({
    removeData: xb,
    on: function a (c, d, e, f) {
      if (y(f)) throw Tb('onargs'); if (Gc(c)) {
        var g = yb(c, !0); f = g.events; let h = g.handle; h || (h =
g.handle = lf(c, f)); for (var g = d.indexOf(' ') >= 0 ? d.split(' ') : [d], l = g.length; l--;) { d = g[l]; let k = f[d]; k || (f[d] = [], d === 'mouseenter' || d === 'mouseleave' ? a(c, Qf[d], function (a) { const c = a.relatedTarget; c && (c === this || this.contains(c)) || h(a, d) }) : d !== '$destroy' && c.addEventListener(d, h, !1), k = f[d]); k.push(e) }
      }
    },
    off: Jc,
    one: function (a, c, d) { a = A(a); a.on(c, function f () { a.off(c, d); a.off(c, f) }); a.on(c, d) },
    replaceWith: function (a, c) {
      let d; const e = a.parentNode; wb(a); r(new T(c), function (c) {
        d
          ? e.insertBefore(c, d.nextSibling)
          : e.replaceChild(c,
            a); d = c
      })
    },
    children: function (a) { const c = []; r(a.childNodes, function (a) { a.nodeType === qa && c.push(a) }); return c },
    contents: function (a) { return a.contentDocument || a.childNodes || [] },
    append: function (a, c) { var d = a.nodeType; if (d === qa || d === 11) { c = new T(c); for (var d = 0, e = c.length; d < e; d++)a.appendChild(c[d]) } },
    prepend: function (a, c) { if (a.nodeType === qa) { const d = a.firstChild; r(new T(c), function (c) { a.insertBefore(c, d) }) } },
    wrap: function (a, c) { c = A(c).eq(0).clone()[0]; const d = a.parentNode; d && d.replaceChild(c, a); c.appendChild(a) },
    remove: Mc,
    detach: function (a) { Mc(a, !0) },
    after: function (a, c) { let d = a; const e = a.parentNode; c = new T(c); for (let f = 0, g = c.length; f < g; f++) { const h = c[f]; e.insertBefore(h, d.nextSibling); d = h } },
    addClass: Cb,
    removeClass: Bb,
    toggleClass: function (a, c, d) { c && r(c.split(' '), function (c) { let f = d; x(f) && (f = !Ab(a, c)); (f ? Cb : Bb)(a, c) }) },
    parent: function (a) { return (a = a.parentNode) && a.nodeType !== 11 ? a : null },
    next: function (a) { return a.nextElementSibling },
    find: function (a, c) { return a.getElementsByTagName ? a.getElementsByTagName(c) : [] },
    clone: Ub,
    triggerHandler: function (a, c, d) {
      let e; let f; const g = c.type || c; let h = yb(a); if (h = (h = h && h.events) && h[g]) {
        e = { preventDefault: function () { this.defaultPrevented = !0 }, isDefaultPrevented: function () { return !0 === this.defaultPrevented }, stopImmediatePropagation: function () { this.immediatePropagationStopped = !0 }, isImmediatePropagationStopped: function () { return !0 === this.immediatePropagationStopped }, stopPropagation: E, type: g, target: a }, c.type && (e = w(e, c)), c = sa(h), f = d ? [e].concat(d) : [e], r(c, function (c) {
          e.isImmediatePropagationStopped() || c.apply(a,
            f)
        })
      }
    }
  }, function (a, c) { T.prototype[c] = function (c, e, f) { for (var g, h = 0, l = this.length; h < l; h++)x(g) ? (g = a(this[h], c, e, f), y(g) && (g = A(g))) : Ic(g, a(this[h], c, e, f)); return y(g) ? g : this }; T.prototype.bind = T.prototype.on; T.prototype.unbind = T.prototype.off }); eb.prototype = { put: function (a, c) { this[Ma(a, this.nextUid)] = c }, get: function (a) { return this[Ma(a, this.nextUid)] }, remove: function (a) { const c = this[a = Ma(a, this.nextUid)]; delete this[a]; return c } }; var Rc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m; const Rf = /,/; const Sf = /^\s*(_?)(\S+?)\1\s*$/
  var Qc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg; var Fa = R('$injector'); ab.$$annotate = function (a, c, d) { let e; if (typeof a === 'function') { if (!(e = a.$inject)) { e = []; if (a.length) { if (c) throw C(d) && d || (d = a.name || mf(a)), Fa('strictdi', d); c = a.toString().replace(Qc, ''); c = c.match(Rc); r(c[1].split(Rf), function (a) { a.replace(Sf, function (a, c, d) { e.push(d) }) }) }a.$inject = e } } else H(a) ? (c = a.length - 1, sb(a[c], 'fn'), e = a.slice(0, c)) : sb(a, 'fn', !0); return e }; const Tf = R('$animate'); var Ce = ['$provide', function (a) {
    this.$$selectors = {}; this.register = function (c,
      d) { const e = c + '-animation'; if (c && c.charAt(0) != '.') throw Tf('notcsel', c); this.$$selectors[c.substr(1)] = e; a.factory(e, d) }; this.classNameFilter = function (a) { arguments.length === 1 && (this.$$classNameFilter = a instanceof RegExp ? a : null); return this.$$classNameFilter }; this.$get = ['$$q', '$$asyncCallback', '$rootScope', function (a, d, e) {
      function f (d) { let f; const g = a.defer(); g.promise.$$cancelFn = function () { f && f() }; e.$$postDigest(function () { f = d(function () { g.resolve() }) }); return g.promise } function g (a, c) {
        const d = []; const e = []; const f = ia()
        r((a.attr('class') || '').split(/\s+/), function (a) { f[a] = !0 }); r(c, function (a, c) { const g = f[c]; !1 === a && g ? e.push(c) : !0 !== a || g || d.push(c) }); return d.length + e.length > 0 && [d.length ? d : null, e.length ? e : null]
      } function h (a, c, d) { for (let e = 0, f = c.length; e < f; ++e)a[c[e]] = d } function l () { n || (n = a.defer(), d(function () { n.resolve(); n = null })); return n.promise } function k (a, c) { if (ca.isObject(c)) { const d = w(c.from || {}, c.to || {}); a.css(d) } } let n; return {
        animate: function (a, c, d) { k(a, { from: c, to: d }); return l() },
        enter: function (a, c, d, e) {
          k(a,
            e); d ? d.after(a) : c.prepend(a); return l()
        },
        leave: function (a, c) { k(a, c); a.remove(); return l() },
        move: function (a, c, d, e) { return this.enter(a, c, d, e) },
        addClass: function (a, c, d) { return this.setClass(a, c, [], d) },
        $$addClassImmediately: function (a, c, d) { a = A(a); c = C(c) ? c : H(c) ? c.join(' ') : ''; r(a, function (a) { Cb(a, c) }); k(a, d); return l() },
        removeClass: function (a, c, d) { return this.setClass(a, [], c, d) },
        $$removeClassImmediately: function (a, c, d) { a = A(a); c = C(c) ? c : H(c) ? c.join(' ') : ''; r(a, function (a) { Bb(a, c) }); k(a, d); return l() },
        setClass: function (a,
          c, d, e) { const k = this; let l = !1; a = A(a); let m = a.data('$$animateClasses'); m ? e && m.options && (m.options = ca.extend(m.options || {}, e)) : (m = { classes: {}, options: e }, l = !0); e = m.classes; c = H(c) ? c : c.split(' '); d = H(d) ? d : d.split(' '); h(e, c, !0); h(e, d, !1); l && (m.promise = f(function (c) { const d = a.data('$$animateClasses'); a.removeData('$$animateClasses'); if (d) { const e = g(a, d.classes); e && k.$$setClassImmediately(a, e[0], e[1], d.options) }c() }), a.data('$$animateClasses', m)); return m.promise },
        $$setClassImmediately: function (a, c, d, e) {
          c && this.$$addClassImmediately(a,
            c); d && this.$$removeClassImmediately(a, d); k(a, e); return l()
        },
        enabled: E,
        cancel: E
      }
    }]
  }]; var la = R('$compile'); yc.$inject = ['$provide', '$$sanitizeUriProvider']; var Sc = /^((?:x|data)[\:\-_])/i; var rf = R('$controller'); var Wc = 'application/json'; var $b = { 'Content-Type': Wc + ';charset=utf-8' }; var tf = /^\[|^\{(?!\{)/; var uf = { '[': /]$/, '{': /}$/ }; var sf = /^\)\]\}',?\n/; var ac = R('$interpolate'); const Uf = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/; var xf = { http: 80, https: 443, ftp: 21 }; var Gb = R('$location'); const Vf = {
    $$html5: !1,
    $$replace: !1,
    absUrl: Hb('$$absUrl'),
    url: function (a) {
      if (x(a)) return this.$$url
      const c = Uf.exec(a); (c[1] || a === '') && this.path(decodeURIComponent(c[1])); (c[2] || c[1] || a === '') && this.search(c[3] || ''); this.hash(c[5] || ''); return this
    },
    protocol: Hb('$$protocol'),
    host: Hb('$$host'),
    port: Hb('$$port'),
    path: dd('$$path', function (a) { a = a !== null ? a.toString() : ''; return a.charAt(0) == '/' ? a : '/' + a }),
    search: function (a, c) {
      switch (arguments.length) {
        case 0:return this.$$search; case 1:if (C(a) || Y(a))a = a.toString(), this.$$search = sc(a); else if (J(a)) {
          a = Da(a, {}), r(a, function (c, e) { c == null && delete a[e] }), this.$$search =
a
        } else throw Gb('isrcharg'); break; default:x(c) || c === null ? delete this.$$search[a] : this.$$search[a] = c
      } this.$$compose(); return this
    },
    hash: dd('$$hash', function (a) { return a !== null ? a.toString() : '' }),
    replace: function () { this.$$replace = !0; return this }
  }; r([cd, ec, dc], function (a) { a.prototype = Object.create(Vf); a.prototype.state = function (c) { if (!arguments.length) return this.$$state; if (a !== dc || !this.$$html5) throw Gb('nostate'); this.$$state = x(c) ? null : c; return this } }); var na = R('$parse'); const Wf = Function.prototype.call
  const Xf = Function.prototype.apply; const Yf = Function.prototype.bind; const mb = ia(); r({ null: function () { return null }, true: function () { return !0 }, false: function () { return !1 }, undefined: function () {} }, function (a, c) { a.constant = a.literal = a.sharedGetter = !0; mb[c] = a }); mb.this = function (a) { return a }; mb.this.sharedGetter = !0; const nb = w(ia(), {
    '+': function (a, c, d, e) { d = d(a, c); e = e(a, c); return y(d) ? y(e) ? d + e : d : y(e) ? e : t },
    '-': function (a, c, d, e) { d = d(a, c); e = e(a, c); return (y(d) ? d : 0) - (y(e) ? e : 0) },
    '*': function (a, c, d, e) { return d(a, c) * e(a, c) },
    '/': function (a, c, d, e) { return d(a, c) / e(a, c) },
    '%': function (a, c, d, e) { return d(a, c) % e(a, c) },
    '===': function (a, c, d, e) { return d(a, c) === e(a, c) },
    '!==': function (a, c, d, e) { return d(a, c) !== e(a, c) },
    '==': function (a, c, d, e) { return d(a, c) == e(a, c) },
    '!=': function (a, c, d, e) { return d(a, c) != e(a, c) },
    '<': function (a, c, d, e) { return d(a, c) < e(a, c) },
    '>': function (a, c, d, e) { return d(a, c) > e(a, c) },
    '<=': function (a, c, d, e) { return d(a, c) <= e(a, c) },
    '>=': function (a, c, d, e) { return d(a, c) >= e(a, c) },
    '&&': function (a, c, d, e) { return d(a, c) && e(a, c) },
    '||': function (a, c, d, e) { return d(a, c) || e(a, c) },
    '!': function (a, c, d) { return !d(a, c) },
    '=': !0,
    '|': !0
  }); const Zf = { n: '\n', f: '\f', r: '\r', t: '\t', v: '\v', "'": "'", '"': '"' }; var hc = function (a) { this.options = a }; hc.prototype = {
    constructor: hc,
    lex: function (a) {
      this.text = a; this.index = 0; for (this.tokens = []; this.index < this.text.length;) {
        if (a = this.text.charAt(this.index), a === '"' || a === "'") this.readString(a); else if (this.isNumber(a) || a === '.' && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdent(a)) this.readIdent(); else if (this.is(a,
          '(){}[].,;:?')) this.tokens.push({ index: this.index, text: a }), this.index++; else if (this.isWhitespace(a)) this.index++; else { const c = a + this.peek(); const d = c + this.peek(2); const e = nb[c]; const f = nb[d]; nb[a] || e || f ? (a = f ? d : e ? c : a, this.tokens.push({ index: this.index, text: a, operator: !0 }), this.index += a.length) : this.throwError('Unexpected next character ', this.index, this.index + 1) }
      } return this.tokens
    },
    is: function (a, c) { return c.indexOf(a) !== -1 },
    peek: function (a) { a = a || 1; return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1 },
    isNumber: function (a) { return a >= '0' && a <= '9' && typeof a === 'string' },
    isWhitespace: function (a) { return a === ' ' || a === '\r' || a === '\t' || a === '\n' || a === '\v' || a === '\u00a0' },
    isIdent: function (a) { return a >= 'a' && a <= 'z' || a >= 'A' && a <= 'Z' || a === '_' || a === '$' },
    isExpOperator: function (a) { return a === '-' || a === '+' || this.isNumber(a) },
    throwError: function (a, c, d) { d = d || this.index; c = y(c) ? 's ' + c + '-' + this.index + ' [' + this.text.substring(c, d) + ']' : ' ' + d; throw na('lexerr', a, c, this.text) },
    readNumber: function () {
      for (var a = '', c = this.index; this.index <
this.text.length;) { const d = z(this.text.charAt(this.index)); if (d == '.' || this.isNumber(d))a += d; else { const e = this.peek(); if (d == 'e' && this.isExpOperator(e))a += d; else if (this.isExpOperator(d) && e && this.isNumber(e) && a.charAt(a.length - 1) == 'e')a += d; else if (!this.isExpOperator(d) || e && this.isNumber(e) || a.charAt(a.length - 1) != 'e') break; else this.throwError('Invalid exponent') } this.index++ } this.tokens.push({ index: c, text: a, constant: !0, value: Number(a) })
    },
    readIdent: function () {
      for (var a = this.index; this.index < this.text.length;) {
        const c =
this.text.charAt(this.index); if (!this.isIdent(c) && !this.isNumber(c)) break; this.index++
      } this.tokens.push({ index: a, text: this.text.slice(a, this.index), identifier: !0 })
    },
    readString: function (a) {
      const c = this.index; this.index++; for (var d = '', e = a, f = !1; this.index < this.text.length;) {
        const g = this.text.charAt(this.index); var e = e + g; if (f) {
          g === 'u'
            ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError('Invalid unicode escape [\\u' + f + ']'), this.index += 4, d += String.fromCharCode(parseInt(f, 16)))
            : d += Zf[g] || g, f = !1
        } else if (g === '\\')f = !0; else { if (g === a) { this.index++; this.tokens.push({ index: c, text: e, constant: !0, value: d }); return }d += g } this.index++
      } this.throwError('Unterminated quote', c)
    }
  }; var ib = function (a, c, d) { this.lexer = a; this.$filter = c; this.options = d }; ib.ZERO = w(function () { return 0 }, { sharedGetter: !0, constant: !0 }); ib.prototype = {
    constructor: ib,
    parse: function (a) {
      this.text = a; this.tokens = this.lexer.lex(a); a = this.statements(); this.tokens.length !== 0 && this.throwError('is an unexpected token', this.tokens[0])
      a.literal = !!a.literal; a.constant = !!a.constant; return a
    },
    primary: function () {
      let a; this.expect('(') ? (a = this.filterChain(), this.consume(')')) : this.expect('[') ? a = this.arrayDeclaration() : this.expect('{') ? a = this.object() : this.peek().identifier && this.peek().text in mb ? a = mb[this.consume().text] : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError('not a primary expression', this.peek()); for (var c, d; c = this.expect('(', '[', '.');) {
        c.text === '('
          ? (a = this.functionCall(a,
              d), d = null)
          : c.text === '[' ? (d = a, a = this.objectIndex(a)) : c.text === '.' ? (d = a, a = this.fieldAccess(a)) : this.throwError('IMPOSSIBLE')
      } return a
    },
    throwError: function (a, c) { throw na('syntax', c.text, a, c.index + 1, this.text, this.text.substring(c.index)) },
    peekToken: function () { if (this.tokens.length === 0) throw na('ueoe', this.text); return this.tokens[0] },
    peek: function (a, c, d, e) { return this.peekAhead(0, a, c, d, e) },
    peekAhead: function (a, c, d, e, f) {
      if (this.tokens.length > a) {
        a = this.tokens[a]; const g = a.text; if (g === c || g === d || g === e || g ===
f || !(c || d || e || f)) return a
      } return !1
    },
    expect: function (a, c, d, e) { return (a = this.peek(a, c, d, e)) ? (this.tokens.shift(), a) : !1 },
    consume: function (a) { if (this.tokens.length === 0) throw na('ueoe', this.text); const c = this.expect(a); c || this.throwError('is unexpected, expecting [' + a + ']', this.peek()); return c },
    unaryFn: function (a, c) { const d = nb[a]; return w(function (a, f) { return d(a, f, c) }, { constant: c.constant, inputs: [c] }) },
    binaryFn: function (a, c, d, e) {
      const f = nb[c]; return w(function (c, e) { return f(c, e, a, d) }, {
        constant: a.constant &&
d.constant,
        inputs: !e && [a, d]
      })
    },
    identifier: function () { for (var a = this.consume().text; this.peek('.') && this.peekAhead(1).identifier && !this.peekAhead(2, '(');)a += this.consume().text + this.consume().text; return zf(a, this.options, this.text) },
    constant: function () { const a = this.consume().value; return w(function () { return a }, { constant: !0, literal: !0 }) },
    statements: function () {
      for (var a = []; ;) {
        if (this.tokens.length > 0 && !this.peek('}', ')', ';', ']') && a.push(this.filterChain()), !this.expect(';')) {
          return a.length === 1
            ? a[0]
            : function (c,
              d) { for (var e, f = 0, g = a.length; f < g; f++)e = a[f](c, d); return e }
        }
      }
    },
    filterChain: function () { for (var a = this.expression(); this.expect('|');)a = this.filter(a); return a },
    filter: function (a) { const c = this.$filter(this.consume().text); let d; let e; if (this.peek(':')) for (d = [], e = []; this.expect(':');)d.push(this.expression()); const f = [a].concat(d || []); return w(function (f, h) { let l = a(f, h); if (e) { e[0] = l; for (l = d.length; l--;)e[l + 1] = d[l](f, h); return c.apply(t, e) } return c(l) }, { constant: !c.$stateful && f.every(fc), inputs: !c.$stateful && f }) },
    expression: function () { return this.assignment() },
    assignment: function () { const a = this.ternary(); let c; let d; return (d = this.expect('=')) ? (a.assign || this.throwError('implies assignment but [' + this.text.substring(0, d.index) + '] can not be assigned to', d), c = this.ternary(), w(function (d, f) { return a.assign(d, c(d, f), f) }, { inputs: [a, c] })) : a },
    ternary: function () { const a = this.logicalOR(); let c; if (this.expect('?') && (c = this.assignment(), this.consume(':'))) { const d = this.assignment(); return w(function (e, f) { return a(e, f) ? c(e, f) : d(e, f) }, { constant: a.constant && c.constant && d.constant }) } return a },
    logicalOR: function () { for (var a = this.logicalAND(), c; c = this.expect('||');)a = this.binaryFn(a, c.text, this.logicalAND(), !0); return a },
    logicalAND: function () { for (var a = this.equality(), c; c = this.expect('&&');)a = this.binaryFn(a, c.text, this.equality(), !0); return a },
    equality: function () { for (var a = this.relational(), c; c = this.expect('==', '!=', '===', '!==');)a = this.binaryFn(a, c.text, this.relational()); return a },
    relational: function () {
      for (var a = this.additive(), c; c = this.expect('<', '>', '<=', '>=');) {
        a = this.binaryFn(a, c.text,
          this.additive())
      } return a
    },
    additive: function () { for (var a = this.multiplicative(), c; c = this.expect('+', '-');)a = this.binaryFn(a, c.text, this.multiplicative()); return a },
    multiplicative: function () { for (var a = this.unary(), c; c = this.expect('*', '/', '%');)a = this.binaryFn(a, c.text, this.unary()); return a },
    unary: function () { let a; return this.expect('+') ? this.primary() : (a = this.expect('-')) ? this.binaryFn(ib.ZERO, a.text, this.unary()) : (a = this.expect('!')) ? this.unaryFn(a.text, this.unary()) : this.primary() },
    fieldAccess: function (a) {
      const c =
this.identifier(); return w(function (d, e, f) { d = f || a(d, e); return d == null ? t : c(d) }, { assign: function (d, e, f) { let g = a(d, f); g || a.assign(d, g = {}, f); return c.assign(g, e) } })
    },
    objectIndex: function (a) { const c = this.text; const d = this.expression(); this.consume(']'); return w(function (e, f) { const g = a(e, f); const h = d(e, f); ua(h, c); return g ? oa(g[h], c) : t }, { assign: function (e, f, g) { const h = ua(d(e, g), c); let l = oa(a(e, g), c); l || a.assign(e, l = {}, g); return l[h] = f } }) },
    functionCall: function (a, c) {
      const d = []; if (this.peekToken().text !== ')') {
        do d.push(this.expression())
        while (this.expect(','))
      } this.consume(')'); const e = this.text; const f = d.length ? [] : null; return function (g, h) { let l = c ? c(g, h) : y(c) ? t : g; const k = a(g, h, l) || E; if (f) for (let n = d.length; n--;)f[n] = oa(d[n](g, h), e); oa(l, e); if (k) { if (k.constructor === k) throw na('isecfn', e); if (k === Wf || k === Xf || k === Yf) throw na('isecff', e) }l = k.apply ? k.apply(l, f) : k(f[0], f[1], f[2], f[3], f[4]); f && (f.length = 0); return oa(l, e) }
    },
    arrayDeclaration: function () {
      const a = []; if (this.peekToken().text !== ']') {
        do { if (this.peek(']')) break; a.push(this.expression()) } while (this.expect(','))
      } this.consume(']'); return w(function (c, d) { for (var e = [], f = 0, g = a.length; f < g; f++)e.push(a[f](c, d)); return e }, { literal: !0, constant: a.every(fc), inputs: a })
    },
    object: function () {
      const a = []; const c = []; if (this.peekToken().text !== '}') { do { if (this.peek('}')) break; const d = this.consume(); d.constant ? a.push(d.value) : d.identifier ? a.push(d.text) : this.throwError('invalid key', d); this.consume(':'); c.push(this.expression()) } while (this.expect(',')) } this.consume('}'); return w(function (d, f) {
        for (var g = {}, h = 0, l = c.length; h < l; h++) {
          g[a[h]] =
c[h](d, f)
        } return g
      }, { literal: !0, constant: c.every(fc), inputs: c })
    }
  }; var Bf = ia(); var Af = ia(); var Cf = Object.prototype.valueOf; var Ba = R('$sce'); var pa = { HTML: 'html', CSS: 'css', URL: 'url', RESOURCE_URL: 'resourceUrl', JS: 'js' }; var la = R('$compile'); var $ = W.createElement('a'); var id = Aa(Q.location.href); Fc.$inject = ['$provide']; jd.$inject = ['$locale']; ld.$inject = ['$locale']; var od = '.'; var Mf = {
    yyyy: U('FullYear', 4),
    yy: U('FullYear', 2, 0, !0),
    y: U('FullYear', 1),
    MMMM: Jb('Month'),
    MMM: Jb('Month', !0),
    MM: U('Month', 2, 1),
    M: U('Month', 1, 1),
    dd: U('Date', 2),
    d: U('Date',
      1),
    HH: U('Hours', 2),
    H: U('Hours', 1),
    hh: U('Hours', 2, -12),
    h: U('Hours', 1, -12),
    mm: U('Minutes', 2),
    m: U('Minutes', 1),
    ss: U('Seconds', 2),
    s: U('Seconds', 1),
    sss: U('Milliseconds', 3),
    EEEE: Jb('Day'),
    EEE: Jb('Day', !0),
    a: function (a, c) { return a.getHours() < 12 ? c.AMPMS[0] : c.AMPMS[1] },
    Z: function (a) { a = -1 * a.getTimezoneOffset(); return a = (a >= 0 ? '+' : '') + (Ib(Math[a > 0 ? 'floor' : 'ceil'](a / 60), 2) + Ib(Math.abs(a % 60), 2)) },
    ww: qd(2),
    w: qd(1),
    G: ic,
    GG: ic,
    GGG: ic,
    GGGG: function (a, c) { return a.getFullYear() <= 0 ? c.ERANAMES[0] : c.ERANAMES[1] }
  }; var Lf = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/
  var Kf = /^\-?\d+$/; kd.$inject = ['$locale']; var Hf = ea(z); var If = ea(ub); md.$inject = ['$parse']; var Td = ea({ restrict: 'E', compile: function (a, c) { if (!c.href && !c.xlinkHref && !c.name) return function (a, c) { if (c[0].nodeName.toLowerCase() === 'a') { const f = Ca.call(c.prop('href')) === '[object SVGAnimatedString]' ? 'xlink:href' : 'href'; c.on('click', function (a) { c.attr(f) || a.preventDefault() }) } } } }); var vb = {}; r(Eb, function (a, c) {
    if (a != 'multiple') {
      const d = xa('ng-' + c); vb[d] = function () {
        return {
          restrict: 'A',
          priority: 100,
          link: function (a, f, g) {
            a.$watch(g[d],
              function (a) { g.$set(c, !!a) })
          }
        }
      }
    }
  }); r(Pc, function (a, c) { vb[c] = function () { return { priority: 100, link: function (a, e, f) { if (c === 'ngPattern' && f.ngPattern.charAt(0) == '/' && (e = f.ngPattern.match(Of))) { f.$set('ngPattern', new RegExp(e[1], e[2])); return }a.$watch(f[c], function (a) { f.$set(c, a) }) } } } }); r(['src', 'srcset', 'href'], function (a) {
    const c = xa('ng-' + a); vb[c] = function () {
      return {
        priority: 99,
        link: function (d, e, f) {
          let g = a; let h = a; a === 'href' && Ca.call(e.prop('href')) === '[object SVGAnimatedString]' && (h = 'xlinkHref', f.$attr[h] = 'xlink:href',
          g = null); f.$observe(c, function (c) { c ? (f.$set(h, c), Qa && g && e.prop(g, f[h])) : a === 'href' && f.$set(h, null) })
        }
      }
    }
  }); var Kb = { $addControl: E, $$renameControl: function (a, c) { a.$name = c }, $removeControl: E, $setValidity: E, $setDirty: E, $setPristine: E, $setSubmitted: E }; rd.$inject = ['$element', '$attrs', '$scope', '$animate', '$interpolate']; const yd = function (a) {
    return ['$timeout', function (c) {
      return {
        name: 'form',
        restrict: a ? 'EAC' : 'E',
        controller: rd,
        compile: function (d, e) {
          d.addClass(Ra).addClass(lb); const f = e.name
            ? 'name'
            : a && e.ngForm
              ? 'ngForm'
              : !1; return {
            pre: function (a, d, e, k) {
              if (!('action' in e)) { const n = function (c) { a.$apply(function () { k.$commitViewValue(); k.$setSubmitted() }); c.preventDefault() }; d[0].addEventListener('submit', n, !1); d.on('$destroy', function () { c(function () { d[0].removeEventListener('submit', n, !1) }, 0, !1) }) } const p = k.$$parentForm; f && (hb(a, null, k.$name, k, k.$name), e.$observe(f, function (c) { k.$name !== c && (hb(a, null, k.$name, t, k.$name), p.$$renameControl(k, c), hb(a, null, k.$name, k, k.$name)) })); d.on('$destroy', function () {
                p.$removeControl(k)
                f && hb(a, null, e[f], t, k.$name); w(k, Kb)
              })
            }
          }
        }
      }
    }]
  }; var Ud = yd(); var ge = yd(!0); var Nf = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/; const $f = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/; const ag = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i; const bg = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/; const zd = /^(\d{4})-(\d{2})-(\d{2})$/; const Ad = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/; const lc = /^(\d{4})-W(\d\d)$/; const Bd = /^(\d{4})-(\d\d)$/
  const Cd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/; const Dd = {
    text: function (a, c, d, e, f, g) { jb(a, c, d, e, f, g); jc(e) },
    date: kb('date', zd, Mb(zd, ['yyyy', 'MM', 'dd']), 'yyyy-MM-dd'),
    'datetime-local': kb('datetimelocal', Ad, Mb(Ad, 'yyyy MM dd HH mm ss sss'.split(' ')), 'yyyy-MM-ddTHH:mm:ss.sss'),
    time: kb('time', Cd, Mb(Cd, ['HH', 'mm', 'ss', 'sss']), 'HH:mm:ss.sss'),
    week: kb('week', lc, function (a, c) {
      if (ga(a)) return a; if (C(a)) {
        lc.lastIndex = 0; let d = lc.exec(a); if (d) {
          const e = +d[1]; var f = +d[2]; let g = d = 0; let h = 0; let l = 0; const k = pd(e); var f = 7 * (f - 1); c && (d = c.getHours(), g =
c.getMinutes(), h = c.getSeconds(), l = c.getMilliseconds()); return new Date(e, 0, k.getDate() + f, d, g, h, l)
        }
      } return NaN
    }, 'yyyy-Www'),
    month: kb('month', Bd, Mb(Bd, ['yyyy', 'MM']), 'yyyy-MM'),
    number: function (a, c, d, e, f, g) {
      td(a, c, d, e); jb(a, c, d, e, f, g); e.$$parserName = 'number'; e.$parsers.push(function (a) { return e.$isEmpty(a) ? null : bg.test(a) ? parseFloat(a) : t }); e.$formatters.push(function (a) { if (!e.$isEmpty(a)) { if (!Y(a)) throw Nb('numfmt', a); a = a.toString() } return a }); if (y(d.min) || d.ngMin) {
        let h; e.$validators.min = function (a) {
          return e.$isEmpty(a) ||
x(h) || a >= h
        }; d.$observe('min', function (a) { y(a) && !Y(a) && (a = parseFloat(a, 10)); h = Y(a) && !isNaN(a) ? a : t; e.$validate() })
      } if (y(d.max) || d.ngMax) { let l; e.$validators.max = function (a) { return e.$isEmpty(a) || x(l) || a <= l }; d.$observe('max', function (a) { y(a) && !Y(a) && (a = parseFloat(a, 10)); l = Y(a) && !isNaN(a) ? a : t; e.$validate() }) }
    },
    url: function (a, c, d, e, f, g) { jb(a, c, d, e, f, g); jc(e); e.$$parserName = 'url'; e.$validators.url = function (a, c) { const d = a || c; return e.$isEmpty(d) || $f.test(d) } },
    email: function (a, c, d, e, f, g) {
      jb(a, c, d, e, f, g); jc(e)
      e.$$parserName = 'email'; e.$validators.email = function (a, c) { const d = a || c; return e.$isEmpty(d) || ag.test(d) }
    },
    radio: function (a, c, d, e) { x(d.name) && c.attr('name', ++ob); c.on('click', function (a) { c[0].checked && e.$setViewValue(d.value, a && a.type) }); e.$render = function () { c[0].checked = d.value == e.$viewValue }; d.$observe('value', e.$render) },
    checkbox: function (a, c, d, e, f, g, h, l) {
      const k = ud(l, a, 'ngTrueValue', d.ngTrueValue, !0); const n = ud(l, a, 'ngFalseValue', d.ngFalseValue, !1); c.on('click', function (a) {
        e.$setViewValue(c[0].checked, a &&
a.type)
      }); e.$render = function () { c[0].checked = e.$viewValue }; e.$isEmpty = function (a) { return !1 === a }; e.$formatters.push(function (a) { return ha(a, k) }); e.$parsers.push(function (a) { return a ? k : n })
    },
    hidden: E,
    button: E,
    submit: E,
    reset: E,
    file: E
  }; var zc = ['$browser', '$sniffer', '$filter', '$parse', function (a, c, d, e) { return { restrict: 'E', require: ['?ngModel'], link: { pre: function (f, g, h, l) { l[0] && (Dd[z(h.type)] || Dd.text)(f, g, h, l[0], c, a, d, e) } } } }]; const cg = /^(true|false|\d+)$/; var ye = function () {
    return {
      restrict: 'A',
      priority: 100,
      compile: function (a,
        c) { return cg.test(c.ngValue) ? function (a, c, f) { f.$set('value', a.$eval(f.ngValue)) } : function (a, c, f) { a.$watch(f.ngValue, function (a) { f.$set('value', a) }) } }
    }
  }; var Zd = ['$compile', function (a) { return { restrict: 'AC', compile: function (c) { a.$$addBindingClass(c); return function (c, e, f) { a.$$addBindingInfo(e, f.ngBind); e = e[0]; c.$watch(f.ngBind, function (a) { e.textContent = a === t ? '' : a }) } } } }]; var ae = ['$interpolate', '$compile', function (a, c) {
    return {
      compile: function (d) {
        c.$$addBindingClass(d); return function (d, f, g) {
          d = a(f.attr(g.$attr.ngBindTemplate))
          c.$$addBindingInfo(f, d.expressions); f = f[0]; g.$observe('ngBindTemplate', function (a) { f.textContent = a === t ? '' : a })
        }
      }
    }
  }]; var $d = ['$sce', '$parse', '$compile', function (a, c, d) { return { restrict: 'A', compile: function (e, f) { const g = c(f.ngBindHtml); const h = c(f.ngBindHtml, function (a) { return (a || '').toString() }); d.$$addBindingClass(e); return function (c, e, f) { d.$$addBindingInfo(e, f.ngBindHtml); c.$watch(h, function () { e.html(a.getTrustedHtml(g(c)) || '') }) } } } }]; var xe = ea({ restrict: 'A', require: 'ngModel', link: function (a, c, d, e) { e.$viewChangeListeners.push(function () { a.$eval(d.ngChange) }) } })
  var be = kc('', !0); var de = kc('Odd', 0); var ce = kc('Even', 1); var ee = Ia({ compile: function (a, c) { c.$set('ngCloak', t); a.removeClass('ng-cloak') } }); var fe = [function () { return { restrict: 'A', scope: !0, controller: '@', priority: 500 } }]; var Ec = {}; const dg = { blur: !0, focus: !0 }; r('click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'.split(' '), function (a) {
    const c = xa('ng-' + a); Ec[c] = ['$parse', '$rootScope', function (d, e) {
      return {
        restrict: 'A',
        compile: function (f, g) {
          const h =
d(g[c], null, !0); return function (c, d) { d.on(a, function (d) { const f = function () { h(c, { $event: d }) }; dg[a] && e.$$phase ? c.$evalAsync(f) : c.$apply(f) }) }
        }
      }
    }]
  }); var ie = ['$animate', function (a) {
    return {
      multiElement: !0,
      transclude: 'element',
      priority: 600,
      terminal: !0,
      restrict: 'A',
      $$tlb: !0,
      link: function (c, d, e, f, g) {
        let h, l, k; c.$watch(e.ngIf, function (c) {
          c
            ? l || g(function (c, f) { l = f; c[c.length++] = W.createComment(' end ngIf: ' + e.ngIf + ' '); h = { clone: c }; a.enter(c, d.parent(), d) })
            : (k && (k.remove(), k = null), l && (l.$destroy(), l = null), h && (k =
tb(h.clone), a.leave(k).then(function () { k = null }), h = null))
        })
      }
    }
  }]; var je = ['$templateRequest', '$anchorScroll', '$animate', '$sce', function (a, c, d, e) {
    return {
      restrict: 'ECA',
      priority: 400,
      terminal: !0,
      transclude: 'element',
      controller: ca.noop,
      compile: function (f, g) {
        const h = g.ngInclude || g.src; const l = g.onload || ''; const k = g.autoscroll; return function (f, g, q, r, s) {
          let t = 0; let v; let m; let F; const w = function () { m && (m.remove(), m = null); v && (v.$destroy(), v = null); F && (d.leave(F).then(function () { m = null }), m = F, F = null) }; f.$watch(e.parseAsResourceUrl(h), function (e) {
            const h =
function () { !y(k) || k && !f.$eval(k) || c() }; const m = ++t; e ? (a(e, !0).then(function (a) { if (m === t) { const c = f.$new(); r.template = a; a = s(c, function (a) { w(); d.enter(a, null, g).then(h) }); v = c; F = a; v.$emit('$includeContentLoaded', e); f.$eval(l) } }, function () { m === t && (w(), f.$emit('$includeContentError', e)) }), f.$emit('$includeContentRequested', e)) : (w(), r.template = null)
          })
        }
      }
    }
  }]; var Ae = ['$compile', function (a) {
    return {
      restrict: 'ECA',
      priority: -400,
      require: 'ngInclude',
      link: function (c, d, e, f) {
        /SVG/.test(d[0].toString())
          ? (d.empty(), a(Hc(f.template,
              W).childNodes)(c, function (a) { d.append(a) }, { futureParentElement: d }))
          : (d.html(f.template), a(d.contents())(c))
      }
    }
  }]; var ke = Ia({ priority: 450, compile: function () { return { pre: function (a, c, d) { a.$eval(d.ngInit) } } } }); var we = function () {
    return {
      restrict: 'A',
      priority: 100,
      require: 'ngModel',
      link: function (a, c, d, e) {
        const f = c.attr(d.$attr.ngList) || ', '; const g = d.ngTrim !== 'false'; const h = g ? N(f) : f; e.$parsers.push(function (a) { if (!x(a)) { const c = []; a && r(a.split(h), function (a) { a && c.push(g ? N(a) : a) }); return c } }); e.$formatters.push(function (a) {
          return H(a)
            ? a.join(f)
            : t
        }); e.$isEmpty = function (a) { return !a || !a.length }
      }
    }
  }; var lb = 'ng-valid'; var vd = 'ng-invalid'; var Ra = 'ng-pristine'; var Lb = 'ng-dirty'; var xd = 'ng-pending'; var Nb = new R('ngModel'); const eg = ['$scope', '$exceptionHandler', '$attrs', '$element', '$parse', '$animate', '$timeout', '$rootScope', '$q', '$interpolate', function (a, c, d, e, f, g, h, l, k, n) {
    this.$modelValue = this.$viewValue = Number.NaN; this.$$rawModelValue = t; this.$validators = {}; this.$asyncValidators = {}; this.$parsers = []; this.$formatters = []; this.$viewChangeListeners = []; this.$untouched = !0
    this.$touched = !1; this.$pristine = !0; this.$dirty = !1; this.$valid = !0; this.$invalid = !1; this.$error = {}; this.$$success = {}; this.$pending = t; this.$name = n(d.name || '', !1)(a); const p = f(d.ngModel); const q = p.assign; let u = p; let s = q; let M = null; let v; const m = this; this.$$setOptions = function (a) {
      if ((m.$options = a) && a.getterSetter) { const c = f(d.ngModel + '()'); const g = f(d.ngModel + '($$$p)'); u = function (a) { let d = p(a); G(d) && (d = c(a)); return d }; s = function (a, c) { G(p(a)) ? g(a, { $$$p: m.$modelValue }) : q(a, m.$modelValue) } } else if (!p.assign) throw Nb('nonassign', d.ngModel, wa(e))
    }; this.$render = E; this.$isEmpty = function (a) { return x(a) || a === '' || a === null || a !== a }; const F = e.inheritedData('$formController') || Kb; let w = 0; sd({ ctrl: this, $element: e, set: function (a, c) { a[c] = !0 }, unset: function (a, c) { delete a[c] }, parentForm: F, $animate: g }); this.$setPristine = function () { m.$dirty = !1; m.$pristine = !0; g.removeClass(e, Lb); g.addClass(e, Ra) }; this.$setDirty = function () { m.$dirty = !0; m.$pristine = !1; g.removeClass(e, Ra); g.addClass(e, Lb); F.$setDirty() }; this.$setUntouched = function () {
      m.$touched = !1; m.$untouched = !0; g.setClass(e,
        'ng-untouched', 'ng-touched')
    }; this.$setTouched = function () { m.$touched = !0; m.$untouched = !1; g.setClass(e, 'ng-touched', 'ng-untouched') }; this.$rollbackViewValue = function () { h.cancel(M); m.$viewValue = m.$$lastCommittedViewValue; m.$render() }; this.$validate = function () { if (!Y(m.$modelValue) || !isNaN(m.$modelValue)) { const a = m.$$rawModelValue; const c = m.$valid; const d = m.$modelValue; const e = m.$options && m.$options.allowInvalid; m.$$runValidators(a, m.$$lastCommittedViewValue, function (f) { e || c === f || (m.$modelValue = f ? a : t, m.$modelValue !== d && m.$$writeModelToScope()) }) } }
    this.$$runValidators = function (a, c, d) {
      function e () { let d = !0; r(m.$validators, function (e, f) { const h = e(a, c); d = d && h; g(f, h) }); return d ? !0 : (r(m.$asyncValidators, function (a, c) { g(c, null) }), !1) } function f () { const d = []; let e = !0; r(m.$asyncValidators, function (f, h) { const k = f(a, c); if (!k || !G(k.then)) throw Nb('$asyncValidators', k); g(h, t); d.push(k.then(function () { g(h, !0) }, function (a) { e = !1; g(h, !1) })) }); d.length ? k.all(d).then(function () { h(e) }, E) : h(!0) } function g (a, c) { l === w && m.$setValidity(a, c) } function h (a) { l === w && d(a) }w++; var l =
w; (function () { const a = m.$$parserName || 'parse'; if (v === t)g(a, null); else return v || (r(m.$validators, function (a, c) { g(c, null) }), r(m.$asyncValidators, function (a, c) { g(c, null) })), g(a, v), v; return !0 })() ? e() ? f() : h(!1) : h(!1)
    }; this.$commitViewValue = function () { const a = m.$viewValue; h.cancel(M); if (m.$$lastCommittedViewValue !== a || a === '' && m.$$hasNativeValidators)m.$$lastCommittedViewValue = a, m.$pristine && this.$setDirty(), this.$$parseAndValidate() }; this.$$parseAndValidate = function () {
      let c = m.$$lastCommittedViewValue; if (v =
x(c) ? t : !0) for (let d = 0; d < m.$parsers.length; d++) if (c = m.$parsers[d](c), x(c)) { v = !1; break }Y(m.$modelValue) && isNaN(m.$modelValue) && (m.$modelValue = u(a)); const e = m.$modelValue; const f = m.$options && m.$options.allowInvalid; m.$$rawModelValue = c; f && (m.$modelValue = c, m.$modelValue !== e && m.$$writeModelToScope()); m.$$runValidators(c, m.$$lastCommittedViewValue, function (a) { f || (m.$modelValue = a ? c : t, m.$modelValue !== e && m.$$writeModelToScope()) })
    }; this.$$writeModelToScope = function () { s(a, m.$modelValue); r(m.$viewChangeListeners, function (a) { try { a() } catch (d) { c(d) } }) }
    this.$setViewValue = function (a, c) { m.$viewValue = a; m.$options && !m.$options.updateOnDefault || m.$$debounceViewValueCommit(c) }; this.$$debounceViewValueCommit = function (c) { let d = 0; let e = m.$options; e && y(e.debounce) && (e = e.debounce, Y(e) ? d = e : Y(e[c]) ? d = e[c] : Y(e.default) && (d = e.default)); h.cancel(M); d ? M = h(function () { m.$commitViewValue() }, d) : l.$$phase ? m.$commitViewValue() : a.$apply(function () { m.$commitViewValue() }) }; a.$watch(function () {
      const c = u(a); if (c !== m.$modelValue) {
        m.$modelValue = m.$$rawModelValue = c; v = t; for (var d =
m.$formatters, e = d.length, f = c; e--;)f = d[e](f); m.$viewValue !== f && (m.$viewValue = m.$$lastCommittedViewValue = f, m.$render(), m.$$runValidators(c, f, E))
      } return c
    })
  }]; var ve = ['$rootScope', function (a) {
    return {
      restrict: 'A',
      require: ['ngModel', '^?form', '^?ngModelOptions'],
      controller: eg,
      priority: 1,
      compile: function (c) {
        c.addClass(Ra).addClass('ng-untouched').addClass(lb); return {
          pre: function (a, c, f, g) {
            const h = g[0]; const l = g[1] || Kb; h.$$setOptions(g[2] && g[2].$options); l.$addControl(h); f.$observe('name', function (a) {
              h.$name !== a && l.$$renameControl(h,
                a)
            }); a.$on('$destroy', function () { l.$removeControl(h) })
          },
          post: function (c, e, f, g) { const h = g[0]; if (h.$options && h.$options.updateOn)e.on(h.$options.updateOn, function (a) { h.$$debounceViewValueCommit(a && a.type) }); e.on('blur', function (e) { h.$touched || (a.$$phase ? c.$evalAsync(h.$setTouched) : c.$apply(h.$setTouched)) }) }
        }
      }
    }
  }]; const fg = /(\s+|^)default(\s+|$)/; var ze = function () {
    return {
      restrict: 'A',
      controller: ['$scope', '$attrs', function (a, c) {
        const d = this; this.$options = a.$eval(c.ngModelOptions); this.$options.updateOn !== t
          ? (this.$options.updateOnDefault =
!1, this.$options.updateOn = N(this.$options.updateOn.replace(fg, function () { d.$options.updateOnDefault = !0; return ' ' })))
          : this.$options.updateOnDefault = !0
      }]
    }
  }; var le = Ia({ terminal: !0, priority: 1E3 }); var me = ['$locale', '$interpolate', function (a, c) {
    const d = /{}/g; const e = /^when(Minus)?(.+)$/; return {
      restrict: 'EA',
      link: function (f, g, h) {
        function l (a) { g.text(a || '') } const k = h.count; var n = h.$attr.when && g.attr(h.$attr.when); const p = h.offset || 0; const q = f.$eval(n) || {}; const u = {}; var n = c.startSymbol(); const s = c.endSymbol(); const t = n + k + '-' + p + s; let v = ca.noop; let m; r(h, function (a, c) {
          let d =
e.exec(c); d && (d = (d[1] ? '-' : '') + z(d[2]), q[d] = g.attr(h.$attr[c]))
        }); r(q, function (a, e) { u[e] = c(a.replace(d, t)) }); f.$watch(k, function (c) { c = parseFloat(c); const d = isNaN(c); d || c in q || (c = a.pluralCat(c - p)); c === m || d && isNaN(m) || (v(), v = f.$watch(u[c], l), m = c) })
      }
    }
  }]; var ne = ['$parse', '$animate', function (a, c) {
    const d = R('ngRepeat'); const e = function (a, c, d, e, k, n, p) { a[d] = e; k && (a[k] = n); a.$index = c; a.$first = c === 0; a.$last = c === p - 1; a.$middle = !(a.$first || a.$last); a.$odd = !(a.$even = (c & 1) === 0) }; return {
      restrict: 'A',
      multiElement: !0,
      transclude: 'element',
      priority: 1E3,
      terminal: !0,
      $$tlb: !0,
      compile: function (f, g) {
        const h = g.ngRepeat; const l = W.createComment(' end ngRepeat: ' + h + ' '); var k = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/); if (!k) throw d('iexp', h); const n = k[1]; const p = k[2]; const q = k[3]; const u = k[4]; var k = n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/); if (!k) throw d('iidexp', n); const s = k[3] || k[1]; const y = k[2]; if (q && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q))) {
          throw d('badident',
            q)
        } let v; let m; let w; let x; const E = { $id: Ma }; u ? v = a(u) : (w = function (a, c) { return Ma(c) }, x = function (a) { return a }); return function (a, f, g, k, n) {
          v && (m = function (c, d, e) { y && (E[y] = c); E[s] = d; E.$index = e; return v(a, E) }); let u = ia(); a.$watchCollection(p, function (g) {
            let k; let p; let v = f[0]; let D; const E = ia(); let G; let H; let L; let S; let J; let C; let z; q && (a[q] = g); if (Sa(g))J = g, p = m || w; else { p = m || x; J = []; for (z in g)g.hasOwnProperty(z) && z.charAt(0) != '$' && J.push(z); J.sort() }G = J.length; z = Array(G); for (k = 0; k < G; k++) {
              if (H = g === J ? k : J[k], L = g[H], S = p(H, L, k), u[S])C = u[S], delete u[S], E[S] = C, z[k] = C; else {
                if (E[S]) {
                  throw r(z,
                    function (a) { a && a.scope && (u[a.id] = a) }), d('dupes', h, S, L)
                } z[k] = { id: S, scope: t, clone: t }; E[S] = !0
              }
            } for (D in u) { C = u[D]; S = tb(C.clone); c.leave(S); if (S[0].parentNode) for (k = 0, p = S.length; k < p; k++)S[k].$$NG_REMOVED = !0; C.scope.$destroy() } for (k = 0; k < G; k++) {
              if (H = g === J ? k : J[k], L = g[H], C = z[k], C.scope) { D = v; do D = D.nextSibling; while (D && D.$$NG_REMOVED); C.clone[0] != D && c.move(tb(C.clone), null, A(v)); v = C.clone[C.clone.length - 1]; e(C.scope, k, s, L, y, H, G) } else {
                n(function (a, d) {
                  C.scope = d; const f = l.cloneNode(!1); a[a.length++] = f; c.enter(a,
                    null, A(v)); v = f; C.clone = a; E[C.id] = C; e(C.scope, k, s, L, y, H, G)
                })
              }
            }u = E
          })
        }
      }
    }
  }]; var oe = ['$animate', function (a) { return { restrict: 'A', multiElement: !0, link: function (c, d, e) { c.$watch(e.ngShow, function (c) { a[c ? 'removeClass' : 'addClass'](d, 'ng-hide', { tempClasses: 'ng-hide-animate' }) }) } } }]; var he = ['$animate', function (a) { return { restrict: 'A', multiElement: !0, link: function (c, d, e) { c.$watch(e.ngHide, function (c) { a[c ? 'addClass' : 'removeClass'](d, 'ng-hide', { tempClasses: 'ng-hide-animate' }) }) } } }]; var pe = Ia(function (a, c, d) {
    a.$watchCollection(d.ngStyle,
      function (a, d) { d && a !== d && r(d, function (a, d) { c.css(d, '') }); a && c.css(a) })
  }); var qe = ['$animate', function (a) {
    return {
      restrict: 'EA',
      require: 'ngSwitch',
      controller: ['$scope', function () { this.cases = {} }],
      link: function (c, d, e, f) {
        let g = []; const h = []; const l = []; const k = []; const n = function (a, c) { return function () { a.splice(c, 1) } }; c.$watch(e.ngSwitch || e.on, function (c) {
          let d, e; d = 0; for (e = l.length; d < e; ++d)a.cancel(l[d]); d = l.length = 0; for (e = k.length; d < e; ++d) { const s = tb(h[d].clone); k[d].$destroy(); (l[d] = a.leave(s)).then(n(l, d)) }h.length = 0; k.length = 0; (g =
f.cases['!' + c] || f.cases['?']) && r(g, function (c) { c.transclude(function (d, e) { k.push(e); const f = c.element; d[d.length++] = W.createComment(' end ngSwitchWhen: '); h.push({ clone: d }); a.enter(d, f.parent(), f) }) })
        })
      }
    }
  }]; var re = Ia({ transclude: 'element', priority: 1200, require: '^ngSwitch', multiElement: !0, link: function (a, c, d, e, f) { e.cases['!' + d.ngSwitchWhen] = e.cases['!' + d.ngSwitchWhen] || []; e.cases['!' + d.ngSwitchWhen].push({ transclude: f, element: c }) } }); var se = Ia({
    transclude: 'element',
    priority: 1200,
    require: '^ngSwitch',
    multiElement: !0,
    link: function (a, c, d, e, f) { e.cases['?'] = e.cases['?'] || []; e.cases['?'].push({ transclude: f, element: c }) }
  }); var ue = Ia({ restrict: 'EAC', link: function (a, c, d, e, f) { if (!f) throw R('ngTransclude')('orphan', wa(c)); f(function (a) { c.empty(); c.append(a) }) } }); var Vd = ['$templateCache', function (a) { return { restrict: 'E', terminal: !0, compile: function (c, d) { d.type == 'text/ng-template' && a.put(d.id, c[0].text) } } }]; const gg = R('ngOptions'); var te = ea({ restrict: 'A', terminal: !0 }); var Wd = ['$compile', '$parse', function (a, c) {
    const d = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/
    const e = { $setViewValue: E }; return {
      restrict: 'E',
      require: ['select', '?ngModel'],
      controller: ['$element', '$scope', '$attrs', function (a, c, d) {
        const l = this; const k = {}; let n = e; let p; l.databound = d.ngModel; l.init = function (a, c, d) { n = a; p = d }; l.addOption = function (c, d) { La(c, '"option value"'); k[c] = !0; n.$viewValue == c && (a.val(c), p.parent() && p.remove()); d && d[0].hasAttribute('selected') && (d[0].selected = !0) }; l.removeOption = function (a) { this.hasOption(a) && (delete k[a], n.$viewValue === a && this.renderUnknownOption(a)) }; l.renderUnknownOption = function (c) {
          c =
'? ' + Ma(c) + ' ?'; p.val(c); a.prepend(p); a.val(c); p.prop('selected', !0)
        }; l.hasOption = function (a) { return k.hasOwnProperty(a) }; c.$on('$destroy', function () { l.renderUnknownOption = E })
      }],
      link: function (e, g, h, l) {
        function k (a, c, d, e) { d.$render = function () { const a = d.$viewValue; e.hasOption(a) ? (C.parent() && C.remove(), c.val(a), a === '' && v.prop('selected', !0)) : x(a) && v ? c.val('') : e.renderUnknownOption(a) }; c.on('change', function () { a.$apply(function () { C.parent() && C.remove(); d.$setViewValue(c.val()) }) }) } function n (a, c, d) {
          let e
          d.$render = function () { const a = new eb(d.$viewValue); r(c.find('option'), function (c) { c.selected = y(a.get(c.value)) }) }; a.$watch(function () { ha(e, d.$viewValue) || (e = sa(d.$viewValue), d.$render()) }); c.on('change', function () { a.$apply(function () { const a = []; r(c.find('option'), function (c) { c.selected && a.push(c.value) }); d.$setViewValue(a) }) })
        } function p (e, f, g) {
          function h (a, c, d) { T[x] = d; G && (T[G] = c); return a(e, T) } function k (a) {
            let c; if (u) {
              if (I && H(a)) { c = new eb([]); for (let d = 0; d < a.length; d++)c.put(h(I, null, a[d]), !0) } else {
                c =
new eb(a)
              }
            } else I && (a = h(I, null, a)); return function (d, e) { let f; f = I || (B || z); return u ? y(c.remove(h(f, d, e))) : a === h(f, d, e) }
          } function l () { m || (e.$$postDigest(p), m = !0) } function n (a, c, d) { a[c] = a[c] || 0; a[c] += d ? 1 : -1 } function p () {
            m = !1; const a = { '': [] }; const c = ['']; let d; let l; let s; let t; let v; s = g.$viewValue; t = L(e) || []; let B = G ? Object.keys(t).sort() : t; let x; let A; let H; let z; const O = {}; v = k(s); let N = !1; let U; let W; Q = {}; for (z = 0; H = B.length, z < H; z++) {
              x = z; if (G && (x = B[z], x.charAt(0) === '$')) continue; A = t[x]; d = h(J, x, A) || ''; (l = a[d]) || (l = a[d] = [], c.push(d)); d = v(x, A); N = N || d; A = h(C, x, A)
              A = y(A) ? A : ''; W = I ? I(e, T) : G ? B[z] : z; I && (Q[W] = x); l.push({ id: W, label: A, selected: d })
            }u || (w || s === null ? a[''].unshift({ id: '', label: '', selected: !N }) : N || a[''].unshift({ id: '?', label: '', selected: !0 })); x = 0; for (B = c.length; x < B; x++) {
              d = c[x]; l = a[d]; R.length <= x ? (s = { element: E.clone().attr('label', d), label: l.label }, t = [s], R.push(t), f.append(s.element)) : (t = R[x], s = t[0], s.label != d && s.element.attr('label', s.label = d)); N = null; z = 0; for (H = l.length; z < H; z++) {
                d = l[z], (v = t[z + 1])
                  ? (N = v.element, v.label !== d.label && (n(O, v.label, !1), n(O, d.label,
                      !0), N.text(v.label = d.label), N.prop('label', v.label)), v.id !== d.id && N.val(v.id = d.id), N[0].selected !== d.selected && (N.prop('selected', v.selected = d.selected), Qa && N.prop('selected', v.selected)))
                  : (d.id === '' && w ? U = w : (U = F.clone()).val(d.id).prop('selected', d.selected).attr('selected', d.selected).prop('label', d.label).text(d.label), t.push(v = { element: U, label: d.label, id: d.id, selected: d.selected }), n(O, d.label, !0), N ? N.after(U) : s.element.append(U), N = U)
              } for (z++; t.length > z;)d = t.pop(), n(O, d.label, !1), d.element.remove()
            } for (;R.length >
x;) { l = R.pop(); for (z = 1; z < l.length; ++z)n(O, l[z].label, !1); l[0].element.remove() }r(O, function (a, c) { a > 0 ? q.addOption(c) : a < 0 && q.removeOption(c) })
          } let v; if (!(v = s.match(d))) throw gg('iexp', s, wa(f)); var C = c(v[2] || v[1]); var x = v[4] || v[6]; const A = / as /.test(v[0]) && v[1]; var B = A ? c(A) : null; var G = v[5]; var J = c(v[3] || ''); var z = c(v[2] ? v[1] : x); var L = c(v[7]); var I = v[8] ? c(v[8]) : null; var Q = {}; var R = [[{ element: f, label: '' }]]; var T = {}; w && (a(w)(e), w.removeClass('ng-scope'), w.remove()); f.empty(); f.on('change', function () {
            e.$apply(function () {
              const a = L(e) || []; let c; if (u) {
                c = [], r(f.val(),
                  function (d) { d = I ? Q[d] : d; c.push(d === '?' ? t : d === '' ? null : h(B || z, d, a[d])) })
              } else { const d = I ? Q[f.val()] : f.val(); c = d === '?' ? t : d === '' ? null : h(B || z, d, a[d]) }g.$setViewValue(c); p()
            })
          }); g.$render = p; e.$watchCollection(L, l); e.$watchCollection(function () { const a = L(e); let c; if (a && H(a)) { c = Array(a.length); for (var d = 0, f = a.length; d < f; d++)c[d] = h(C, d, a[d]) } else if (a) for (d in c = {}, a)a.hasOwnProperty(d) && (c[d] = h(C, d, a[d])); return c }, l); u && e.$watchCollection(function () { return g.$modelValue }, l)
        } if (l[1]) {
          var q = l[0]; l = l[1]; var u = h.multiple
          var s = h.ngOptions; var w = !1; var v; var m = !1; var F = A(W.createElement('option')); var E = A(W.createElement('optgroup')); var C = F.clone(); h = 0; for (let B = g.children(), G = B.length; h < G; h++) if (B[h].value === '') { v = w = B.eq(h); break }q.init(l, w, C); u && (l.$isEmpty = function (a) { return !a || a.length === 0 }); s ? p(e, g, l) : u ? n(e, g, l) : k(e, g, l, q)
        }
      }
    }
  }]; var Yd = ['$interpolate', function (a) {
    const c = { addOption: E, removeOption: E }; return {
      restrict: 'E',
      priority: 100,
      compile: function (d, e) {
        if (x(e.value)) { var f = a(d.text(), !0); f || e.$set('value', d.text()) } return function (a, d, e) {
          const k =
d.parent(); let n = k.data('$selectController') || k.parent().data('$selectController'); n && n.databound || (n = c); f ? a.$watch(f, function (a, c) { e.$set('value', a); c !== a && n.removeOption(c); n.addOption(a, d) }) : n.addOption(e.value, d); d.on('$destroy', function () { n.removeOption(e.value) })
        }
      }
    }
  }]; var Xd = ea({ restrict: 'E', terminal: !1 }); var Bc = function () { return { restrict: 'A', require: '?ngModel', link: function (a, c, d, e) { e && (d.required = !0, e.$validators.required = function (a, c) { return !d.required || !e.$isEmpty(c) }, d.$observe('required', function () { e.$validate() })) } } }
  var Ac = function () { return { restrict: 'A', require: '?ngModel', link: function (a, c, d, e) { if (e) { let f; const g = d.ngPattern || d.pattern; d.$observe('pattern', function (a) { C(a) && a.length > 0 && (a = new RegExp('^' + a + '$')); if (a && !a.test) throw R('ngPattern')('noregexp', g, a, wa(c)); f = a || t; e.$validate() }); e.$validators.pattern = function (a) { return e.$isEmpty(a) || x(f) || f.test(a) } } } } }; var Dc = function () {
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function (a, c, d, e) {
        if (e) {
          let f = -1; d.$observe('maxlength', function (a) { a = aa(a); f = isNaN(a) ? -1 : a; e.$validate() })
          e.$validators.maxlength = function (a, c) { return f < 0 || e.$isEmpty(c) || c.length <= f }
        }
      }
    }
  }; var Cc = function () { return { restrict: 'A', require: '?ngModel', link: function (a, c, d, e) { if (e) { let f = 0; d.$observe('minlength', function (a) { f = aa(a) || 0; e.$validate() }); e.$validators.minlength = function (a, c) { return e.$isEmpty(c) || c.length >= f } } } } }; Q.angular.bootstrap ? console.log('WARNING: Tried to load angular more than once.') : (Nd(), Pd(ca), A(W).ready(function () { Jd(W, uc) }))
})(window, document); !window.angular.$$csp() && window.angular.element(document).find('head').prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
// # sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.3.15
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (N, f, W) {
  'use strict'; f.module('ngAnimate', ['ng']).directive('ngAnimateChildren', function () { return function (X, C, g) { g = g.ngAnimateChildren; f.isString(g) && g.length === 0 ? C.data('$$ngAnimateChildren', !0) : X.$watch(g, function (f) { C.data('$$ngAnimateChildren', !!f) }) } }).factory('$$animateReflow', ['$$rAF', '$document', function (f, C) { return function (g) { return f(function () { g() }) } }]).config(['$provide', '$animateProvider', function (X, C) {
    function g (f) { for (let n = 0; n < f.length; n++) { const g = f[n]; if (g.nodeType == 1) return g } }
    function ba (f, n) { return g(f) == g(n) } const t = f.noop; const n = f.forEach; const da = C.$$selectors; const aa = f.isArray; const ea = f.isString; const ga = f.isObject; const r = { running: !0 }; let u; X.decorator('$animate', ['$delegate', '$$q', '$injector', '$sniffer', '$rootElement', '$$asyncCallback', '$rootScope', '$document', '$templateRequest', '$$jqLite', function (O, N, M, Y, y, H, P, W, Z, Q) {
      function R (a, c) { const b = a.data('$$ngAnimateState') || {}; c && (b.running = !0, b.structural = !0, a.data('$$ngAnimateState', b)); return b.disabled || b.running && b.structural } function D (a) {
        let c; const b = N.defer()
        b.promise.$$cancelFn = function () { c && c() }; P.$$postDigest(function () { c = a(function () { b.resolve() }) }); return b.promise
      } function I (a) { if (ga(a)) return a.tempClasses && ea(a.tempClasses) && (a.tempClasses = a.tempClasses.split(/\s+/)), a } function S (a, c, b) {
        b = b || {}; const d = {}; n(b, function (e, a) { n(a.split(' '), function (a) { d[a] = e }) }); const h = Object.create(null); n((a.attr('class') || '').split(/\s+/), function (e) { h[e] = !0 }); const f = []; const l = []; n(c && c.classes || [], function (e, a) {
          const b = h[a]; const c = d[a] || {}; !1 === e
            ? (b || c.event == 'addClass') &&
l.push(a)
            : !0 === e && (b && c.event != 'removeClass' || f.push(a))
        }); return f.length + l.length > 0 && [f.join(' '), l.join(' ')]
      } function T (a) { if (a) { const c = []; const b = {}; a = a.substr(1).split('.'); (Y.transitions || Y.animations) && c.push(M.get(da[''])); for (let d = 0; d < a.length; d++) { const f = a[d]; const k = da[f]; k && !b[f] && (c.push(M.get(k)), b[f] = !0) } return c } } function U (a, c, b, d) {
        function h (e, a) {
          let b = e[a]; let c = e['before' + a.charAt(0).toUpperCase() + a.substr(1)]; if (b || c) {
            return a == 'leave' && (c = b, b = null), u.push({ event: a, fn: b }), J.push({ event: a, fn: c }),
            !0
          }
        } function k (c, l, w) { const E = []; n(c, function (a) { a.fn && E.push(a) }); let m = 0; n(E, function (c, f) { const p = function () { a: { if (l) { (l[f] || t)(); if (++m < E.length) break a; l = null }w() } }; switch (c.event) { case 'setClass':l.push(c.fn(a, e, A, p, d)); break; case 'animate':l.push(c.fn(a, b, d.from, d.to, p)); break; case 'addClass':l.push(c.fn(a, e || b, p, d)); break; case 'removeClass':l.push(c.fn(a, A || b, p, d)); break; default:l.push(c.fn(a, p, d)) } }); l && l.length === 0 && w() } const l = a[0]; if (l) {
          d && (d.to = d.to || {}, d.from = d.from || {}); var e, A; aa(b) && (e =
b[0], A = b[1], e ? A ? b = e + ' ' + A : (b = e, c = 'addClass') : (b = A, c = 'removeClass')); const w = c == 'setClass'; const E = w || c == 'addClass' || c == 'removeClass' || c == 'animate'; var p = a.attr('class') + ' ' + b; if (x(p)) {
            let ca = t; const m = []; var J = []; let g = t; const s = []; var u = []; var p = (' ' + p).replace(/\s+/g, '.'); n(T(p), function (a) { !h(a, c) && w && (h(a, 'addClass'), h(a, 'removeClass')) }); return {
              node: l,
              event: c,
              className: b,
              isClassBased: E,
              isSetClassOperation: w,
              applyStyles: function () { d && a.css(f.extend(d.from || {}, d.to || {})) },
              before: function (a) { ca = a; k(J, m, function () { ca = t; a() }) },
              after: function (a) {
                g =
a; k(u, s, function () { g = t; a() })
              },
              cancel: function () { m && (n(m, function (a) { (a || t)(!0) }), ca(!0)); s && (n(s, function (a) { (a || t)(!0) }), g(!0)) }
            }
          }
        }
      } function G (a, c, b, d, h, k, l, e) {
        function A (e) { const l = '$animate:' + e; J && J[l] && J[l].length > 0 && H(function () { b.triggerHandler(l, { event: a, className: c }) }) } function w () { A('before') } function E () { A('after') } function p () { p.hasBeenRun || (p.hasBeenRun = !0, k()) } function g () {
          if (!g.hasBeenRun) {
            m && m.applyStyles(); g.hasBeenRun = !0; l && l.tempClasses && n(l.tempClasses, function (a) {
              u.removeClass(b,
                a)
            }); const w = b.data('$$ngAnimateState'); w && (m && m.isClassBased ? B(b, c) : (H(function () { const e = b.data('$$ngAnimateState') || {}; fa == e.index && B(b, c, a) }), b.data('$$ngAnimateState', w))); A('close'); e()
          }
        } var m = U(b, a, c, l); if (!m) return p(), w(), E(), g(), t; a = m.event; c = m.className; var J = f.element._data(m.node); var J = J && J.events; d || (d = h ? h.parent() : b.parent()); if (z(b, d)) return p(), w(), E(), g(), t; d = b.data('$$ngAnimateState') || {}; let L = d.active || {}; let s = d.totalActive || 0; const q = d.last; h = !1; if (s > 0) {
          s = []; if (m.isClassBased) {
            q.event == 'setClass'
              ? (s.push(q), B(b, c))
              : L[c] && (v = L[c], v.event == a ? h = !0 : (s.push(v), B(b, c)))
          } else if (a == 'leave' && L['ng-leave'])h = !0; else { for (var v in L)s.push(L[v]); d = {}; B(b, !0) }s.length > 0 && n(s, function (a) { a.cancel() })
        }!m.isClassBased || m.isSetClassOperation || a == 'animate' || h || (h = a == 'addClass' == b.hasClass(c)); if (h) return p(), w(), E(), A('close'), e(), t; L = d.active || {}; s = d.totalActive || 0; if (a == 'leave')b.one('$destroy', function (a) { a = f.element(this); let e = a.data('$$ngAnimateState'); e && (e = e.active['ng-leave']) && (e.cancel(), B(a, 'ng-leave')) })
        u.addClass(b, 'ng-animate'); l && l.tempClasses && n(l.tempClasses, function (a) { u.addClass(b, a) }); var fa = K++; s++; L[c] = m; b.data('$$ngAnimateState', { last: m, active: L, index: fa, totalActive: s }); w(); m.before(function (e) { const l = b.data('$$ngAnimateState'); e = e || !l || !l.active[c] || m.isClassBased && l.active[c].event != a; p(); !0 === e ? g() : (E(), m.after(g)) }); return m.cancel
      } function q (a) {
        if (a = g(a)) {
          a = f.isFunction(a.getElementsByClassName) ? a.getElementsByClassName('ng-animate') : a.querySelectorAll('.ng-animate'), n(a, function (a) {
            a =
f.element(a); (a = a.data('$$ngAnimateState')) && a.active && n(a.active, function (a) { a.cancel() })
          })
        }
      } function B (a, c) { if (ba(a, y))r.disabled || (r.running = !1, r.structural = !1); else if (c) { const b = a.data('$$ngAnimateState') || {}; const d = !0 === c; !d && b.active && b.active[c] && (b.totalActive--, delete b.active[c]); if (d || !b.totalActive)u.removeClass(a, 'ng-animate'), a.removeData('$$ngAnimateState') } } function z (a, c) {
        if (r.disabled) return !0; if (ba(a, y)) return r.running; let b, d, g; do {
          if (c.length === 0) break; let k = ba(c, y); const l = k
            ? r
            : c.data('$$ngAnimateState') ||
{}; if (l.disabled) return !0; k && (g = !0); !1 !== b && (k = c.data('$$ngAnimateChildren'), f.isDefined(k) && (b = k)); d = d || l.running || l.last && !l.last.isClassBased
        } while (c = c.parent()); return !g || !b && d
      }u = Q; y.data('$$ngAnimateState', r); var $ = P.$watch(function () { return Z.totalPendingRequests }, function (a, c) { a === 0 && ($(), P.$$postDigest(function () { P.$$postDigest(function () { r.running = !1 }) })) }); var K = 0; const V = C.classNameFilter(); var x = V ? function (a) { return V.test(a) } : function () { return !0 }; return {
        animate: function (a, c, b, d, h) {
          d = d || 'ng-inline-animate'
          h = I(h) || {}; h.from = b ? c : null; h.to = b || c; return D(function (b) { return G('animate', d, f.element(g(a)), null, null, t, h, b) })
        },
        enter: function (a, c, b, d) { d = I(d); a = f.element(a); c = c && f.element(c); b = b && f.element(b); R(a, !0); O.enter(a, c, b); return D(function (h) { return G('enter', 'ng-enter', f.element(g(a)), c, b, t, d, h) }) },
        leave: function (a, c) { c = I(c); a = f.element(a); q(a); R(a, !0); return D(function (b) { return G('leave', 'ng-leave', f.element(g(a)), null, null, function () { O.leave(a) }, c, b) }) },
        move: function (a, c, b, d) {
          d = I(d); a = f.element(a)
          c = c && f.element(c); b = b && f.element(b); q(a); R(a, !0); O.move(a, c, b); return D(function (h) { return G('move', 'ng-move', f.element(g(a)), c, b, t, d, h) })
        },
        addClass: function (a, c, b) { return this.setClass(a, c, [], b) },
        removeClass: function (a, c, b) { return this.setClass(a, [], c, b) },
        setClass: function (a, c, b, d) {
          d = I(d); a = f.element(a); a = f.element(g(a)); if (R(a)) return O.$$setClassImmediately(a, c, b, d); let h; let k = a.data('$$animateClasses'); const l = !!k; k || (k = { classes: {} }); h = k.classes; c = aa(c) ? c : c.split(' '); n(c, function (a) {
            a && a.length && (h[a] =
!0)
          }); b = aa(b) ? b : b.split(' '); n(b, function (a) { a && a.length && (h[a] = !1) }); if (l) return d && k.options && (k.options = f.extend(k.options || {}, d)), k.promise; a.data('$$animateClasses', k = { classes: h, options: d }); return k.promise = D(function (e) {
            const l = a.parent(); let b = g(a); var c = b.parentNode; if (!c || c.$$NG_REMOVED || b.$$NG_REMOVED)e(); else {
              b = a.data('$$animateClasses'); a.removeData('$$animateClasses'); var c = a.data('$$ngAnimateState') || {}; const d = S(a, b, c.active); return d
                ? G('setClass', d, a, l, null, function () {
                  d[0] && O.$$addClassImmediately(a,
                    d[0]); d[1] && O.$$removeClassImmediately(a, d[1])
                }, b.options, e)
                : e()
            }
          })
        },
        cancel: function (a) { a.$$cancelFn() },
        enabled: function (a, c) { switch (arguments.length) { case 2:if (a)B(c); else { const b = c.data('$$ngAnimateState') || {}; b.disabled = !0; c.data('$$ngAnimateState', b) } break; case 1:r.disabled = !a; break; default:a = !r.disabled } return !!a }
      }
    }]); C.register('', ['$window', '$sniffer', '$timeout', '$$animateReflow', function (r, C, M, Y) {
      function y () { b || (b = Y(function () { c = []; b = null; x = {} })) } function H (a, e) {
        b && b(); c.push(e); b = Y(function () {
          n(c,
            function (a) { a() }); c = []; b = null; x = {}
        })
      } function P (a, e) { let b = g(a); a = f.element(b); k.push(a); b = Date.now() + e; b <= h || (M.cancel(d), h = b, d = M(function () { X(k); k = [] }, e, !1)) } function X (a) { n(a, function (a) { (a = a.data('$$ngAnimateCSS3Data')) && n(a.closeAnimationFns, function (a) { a() }) }) } function Z (a, e) {
        let b = e ? x[e] : null; if (!b) {
          let c = 0; let d = 0; let f = 0; let g = 0; n(a, function (a) {
            if (a.nodeType == 1) {
              a = r.getComputedStyle(a) || {}; c = Math.max(Q(a[z + 'Duration']), c); d = Math.max(Q(a[z + 'Delay']), d); g = Math.max(Q(a[K + 'Delay']), g); let e = Q(a[K + 'Duration'])
              e > 0 && (e *= parseInt(a[K + 'IterationCount'], 10) || 1); f = Math.max(e, f)
            }
          }); b = { total: 0, transitionDelay: d, transitionDuration: c, animationDelay: g, animationDuration: f }; e && (x[e] = b)
        } return b
      } function Q (a) { let e = 0; a = ea(a) ? a.split(/\s*,\s*/) : []; n(a, function (a) { e = Math.max(parseFloat(a) || 0, e) }); return e } function R (b, e, c, d) {
        b = ['ng-enter', 'ng-leave', 'ng-move'].indexOf(c) >= 0; let f; var p = e.parent(); var h = p.data('$$ngAnimateKey'); h || (p.data('$$ngAnimateKey', ++a), h = a); f = h + '-' + g(e).getAttribute('class'); var p = f + ' ' + c; var h = x[p]
          ? ++x[p].total
          : 0; var m = {}; if (h > 0) { var n = c + '-stagger'; var m = f + ' ' + n; (f = !x[m]) && u.addClass(e, n); m = Z(e, m); f && u.removeClass(e, n) }u.addClass(e, c); var n = e.data('$$ngAnimateCSS3Data') || {}; let k = Z(e, p); f = k.transitionDuration; k = k.animationDuration; if (b && f === 0 && k === 0) return u.removeClass(e, c), !1; c = d || b && f > 0; b = k > 0 && m.animationDelay > 0 && m.animationDuration === 0; e.data('$$ngAnimateCSS3Data', { stagger: m, cacheKey: p, running: n.running || 0, itemIndex: h, blockTransition: c, closeAnimationFns: n.closeAnimationFns || [] }); p = g(e); c && (I(p, !0), d && e.css(d))
        b && (p.style[K + 'PlayState'] = 'paused'); return !0
      } function D (a, e, b, c, d) {
        function f () { e.off(D, h); u.removeClass(e, k); u.removeClass(e, t); z && M.cancel(z); G(e, b); const a = g(e); let c; for (c in s)a.style.removeProperty(s[c]) } function h (a) { a.stopPropagation(); let b = a.originalEvent || a; a = b.$manualTimeStamp || b.timeStamp || Date.now(); b = parseFloat(b.elapsedTime.toFixed(3)); Math.max(a - H, 0) >= C && b >= x && c() } const m = g(e); a = e.data('$$ngAnimateCSS3Data'); if (m.getAttribute('class').indexOf(b) != -1 && a) {
          var k = ''; var t = ''; n(b.split(' '), function (a,
            b) { const e = (b > 0 ? ' ' : '') + a; k += e + '-active'; t += e + '-pending' }); var s = []; var q = a.itemIndex; let v = a.stagger; let r = 0; if (q > 0) { r = 0; v.transitionDelay > 0 && v.transitionDuration === 0 && (r = v.transitionDelay * q); let y = 0; v.animationDelay > 0 && v.animationDuration === 0 && (y = v.animationDelay * q, s.push(B + 'animation-play-state')); r = Math.round(100 * Math.max(r, y)) / 100 }r || (u.addClass(e, k), a.blockTransition && I(m, !1)); const F = Z(e, a.cacheKey + ' ' + k); var x = Math.max(F.transitionDuration, F.animationDuration); if (x === 0)u.removeClass(e, k), G(e, b), c(); else {
            !r &&
d && Object.keys(d).length > 0 && (F.transitionDuration || (e.css('transition', F.animationDuration + 's linear all'), s.push('transition')), e.css(d)); var q = Math.max(F.transitionDelay, F.animationDelay); var C = 1E3 * q; s.length > 0 && (v = m.getAttribute('style') || '', v.charAt(v.length - 1) !== ';' && (v += ';'), m.setAttribute('style', v + ' ')); var H = Date.now(); var D = V + ' ' + $; var q = 1E3 * (r + 1.5 * (q + x)); var z; r > 0 && (u.addClass(e, t), z = M(function () {
              z = null; F.transitionDuration > 0 && I(m, !1); F.animationDuration > 0 && (m.style[K + 'PlayState'] = ''); u.addClass(e, k)
              u.removeClass(e, t); d && (F.transitionDuration === 0 && e.css('transition', F.animationDuration + 's linear all'), e.css(d), s.push('transition'))
            }, 1E3 * r, !1)); e.on(D, h); a.closeAnimationFns.push(function () { f(); c() }); a.running++; P(e, q); return f
          }
        } else c()
      } function I (a, b) { a.style[z + 'Property'] = b ? 'none' : '' } function S (a, b, c, d) { if (R(a, b, c, d)) return function (a) { a && G(b, c) } } function T (a, b, c, d, f) { if (b.data('$$ngAnimateCSS3Data')) return D(a, b, c, d, f); G(b, c); d() } function U (a, b, c, d, f) {
        const g = S(a, b, c, f.from); if (g) {
          let h = g; H(b,
            function () { h = T(a, b, c, d, f.to) }); return function (a) { (h || t)(a) }
        }y(); d()
      } function G (a, b) { u.removeClass(a, b); const c = a.data('$$ngAnimateCSS3Data'); c && (c.running && c.running--, c.running && c.running !== 0 || a.removeData('$$ngAnimateCSS3Data')) } function q (a, b) { let c = ''; a = aa(a) ? a : a.split(/\s+/); n(a, function (a, d) { a && a.length > 0 && (c += (d > 0 ? ' ' : '') + a + b) }); return c } var B = ''; let z; let $; let K; let V; N.ontransitionend === W && N.onwebkittransitionend !== W
        ? (B = '-webkit-', z = 'WebkitTransition', $ = 'webkitTransitionEnd transitionend')
        : (z = 'transition',
          $ = 'transitionend'); N.onanimationend === W && N.onwebkitanimationend !== W ? (B = '-webkit-', K = 'WebkitAnimation', V = 'webkitAnimationEnd animationend') : (K = 'animation', V = 'animationend'); var x = {}; var a = 0; var c = []; let b; var d = null; var h = 0; var k = []; return {
        animate: function (a, b, c, d, f, g) { g = g || {}; g.from = c; g.to = d; return U('animate', a, b, f, g) },
        enter: function (a, b, c) { c = c || {}; return U('enter', a, 'ng-enter', b, c) },
        leave: function (a, b, c) { c = c || {}; return U('leave', a, 'ng-leave', b, c) },
        move: function (a, b, c) { c = c || {}; return U('move', a, 'ng-move', b, c) },
        beforeSetClass: function (a,
          b, c, d, f) { f = f || {}; b = q(c, '-remove') + ' ' + q(b, '-add'); if (f = S('setClass', a, b, f.from)) return H(a, d), f; y(); d() },
        beforeAddClass: function (a, b, c, d) { d = d || {}; if (b = S('addClass', a, q(b, '-add'), d.from)) return H(a, c), b; y(); c() },
        beforeRemoveClass: function (a, b, c, d) { d = d || {}; if (b = S('removeClass', a, q(b, '-remove'), d.from)) return H(a, c), b; y(); c() },
        setClass: function (a, b, c, d, f) { f = f || {}; c = q(c, '-remove'); b = q(b, '-add'); return T('setClass', a, c + ' ' + b, d, f.to) },
        addClass: function (a, b, c, d) {
          d = d || {}; return T('addClass', a, q(b, '-add'),
            c, d.to)
        },
        removeClass: function (a, b, c, d) { d = d || {}; return T('removeClass', a, q(b, '-remove'), c, d.to) }
      }
    }])
  }])
})(window, window.angular);
// # sourceMappingURL=angular-animate.min.js.map

/*
 AngularJS v1.3.15
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (n, h, p) {
  'use strict'; function E (a) { const e = []; r(e, h.noop).chars(a); return e.join('') } function g (a) { const e = {}; a = a.split(','); let d; for (d = 0; d < a.length; d++)e[a[d]] = !0; return e } function F (a, e) {
    function d (a, b, d, l) { b = h.lowercase(b); if (s[b]) for (;f.last() && t[f.last()];)c('', f.last()); u[b] && f.last() == b && c('', b); (l = v[b] || !!l) || f.push(b); const m = {}; d.replace(G, function (a, b, e, c, d) { m[b] = q(e || c || d || '') }); e.start && e.start(b, m, l) } function c (a, b) {
      let c = 0; let d; if (b = h.lowercase(b)) for (c = f.length - 1; c >= 0 && f[c] != b; c--);
      if (c >= 0) { for (d = f.length - 1; d >= c; d--)e.end && e.end(f[d]); f.length = c }
    } typeof a !== 'string' && (a = a === null || typeof a === 'undefined' ? '' : '' + a); let b; let k; var f = []; let m = a; let l; for (f.last = function () { return f[f.length - 1] }; a;) {
      l = ''; k = !0; if (f.last() && w[f.last()])a = a.replace(new RegExp('([\\W\\w]*)<\\s*\\/\\s*' + f.last() + '[^>]*>', 'i'), function (a, b) { b = b.replace(H, '$1').replace(I, '$1'); e.chars && e.chars(q(b)); return '' }), c('', f.last()); else {
        if (a.indexOf('\x3c!--') === 0) {
          b = a.indexOf('--', 4), b >= 0 && a.lastIndexOf('--\x3e', b) === b && (e.comment &&
e.comment(a.substring(4, b)), a = a.substring(b + 3), k = !1)
        } else if (x.test(a)) { if (b = a.match(x))a = a.replace(b[0], ''), k = !1 } else if (J.test(a)) { if (b = a.match(y))a = a.substring(b[0].length), b[0].replace(y, c), k = !1 } else K.test(a) && ((b = a.match(z)) ? (b[4] && (a = a.substring(b[0].length), b[0].replace(z, d)), k = !1) : (l += '<', a = a.substring(1))); k && (b = a.indexOf('<'), l += b < 0 ? a : a.substring(0, b), a = b < 0 ? '' : a.substring(b), e.chars && e.chars(q(l)))
      } if (a == m) throw L('badparse', a); m = a
    }c()
  } function q (a) {
    if (!a) return ''; A.innerHTML = a.replace(/</g,
      '&lt;'); return A.textContent
  } function B (a) { return a.replace(/&/g, '&amp;').replace(M, function (a) { const d = a.charCodeAt(0); a = a.charCodeAt(1); return '&#' + (1024 * (d - 55296) + (a - 56320) + 65536) + ';' }).replace(N, function (a) { return '&#' + a.charCodeAt(0) + ';' }).replace(/</g, '&lt;').replace(/>/g, '&gt;') } function r (a, e) {
    let d = !1; const c = h.bind(a, a.push); return {
      start: function (a, k, f) {
        a = h.lowercase(a); !d && w[a] && (d = a); d || !0 !== C[a] || (c('<'), c(a), h.forEach(k, function (d, f) {
          const k = h.lowercase(f); const g = a === 'img' && k === 'src' || k ===
'background'; !0 !== O[k] || !0 === D[k] && !e(d, g) || (c(' '), c(f), c('="'), c(B(d)), c('"'))
        }), c(f ? '/>' : '>'))
      },
      end: function (a) { a = h.lowercase(a); d || !0 !== C[a] || (c('</'), c(a), c('>')); a == d && (d = !1) },
      chars: function (a) { d || c(B(a)) }
    }
  } var L = h.$$minErr('$sanitize'); var z = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/; var y = /^<\/\s*([\w:-]+)[^>]*>/; var G = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g; var K = /^</; var J = /^<\//; var H = /\x3c!--(.*?)--\x3e/g; var x = /<!DOCTYPE([^>]*?)>/i
  var I = /<!\[CDATA\[(.*?)]]\x3e/g; var M = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g; var N = /([^\#-~| |!])/g; var v = g('area,br,col,hr,img,wbr'); n = g('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'); p = g('rp,rt'); var u = h.extend({}, p, n); var s = h.extend({}, n, g('address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul')); var t = h.extend({}, p, g('a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var'))
  n = g('animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use'); var w = g('script,style'); var C = h.extend({}, v, s, t, u, n); var D = g('background,cite,href,longdesc,src,usemap,xlink:href'); n = g('abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width')
  p = g('accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan')
  var O = h.extend({}, D, p, n); var A = document.createElement('pre'); h.module('ngSanitize', []).provider('$sanitize', function () { this.$get = ['$$sanitizeUri', function (a) { return function (e) { const d = []; F(e, r(d, function (c, b) { return !/^unsafe/.test(a(c, b)) })); return d.join('') } }] }); h.module('ngSanitize').filter('linky', ['$sanitize', function (a) {
    const e = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/; const d = /^mailto:/; return function (c, b) {
      function k (a) { a && g.push(E(a)) } function f (a, c) {
        g.push('<a ')
        h.isDefined(b) && g.push('target="', b, '" '); g.push('href="', a.replace(/"/g, '&quot;'), '">'); k(c); g.push('</a>')
      } if (!c) return c; for (var m, l = c, g = [], n, p; m = l.match(e);)n = m[0], m[2] || m[4] || (n = (m[3] ? 'http://' : 'mailto:') + n), p = m.index, k(l.substr(0, p)), f(n, m[0].replace(d, '')), l = l.substring(p + m[0].length); k(l); return a(g.join(''))
    }
  }])
})(window, window.angular);
// # sourceMappingURL=angular-sanitize.min.js.map

/*
 AngularJS v1.3.15
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (q, d, C) {
  'use strict'; function v (r, k, h) {
    return {
      restrict: 'ECA',
      terminal: !0,
      priority: 400,
      transclude: 'element',
      link: function (a, f, b, c, y) {
        function z () { l && (h.cancel(l), l = null); m && (m.$destroy(), m = null); n && (l = h.leave(n), l.then(function () { l = null }), n = null) } function x () {
          var b = r.current && r.current.locals; if (d.isDefined(b && b.$template)) {
            var b = a.$new(); const c = r.current; n = y(b, function (b) { h.enter(b, null, n || f).then(function () { !d.isDefined(t) || t && !a.$eval(t) || k() }); z() }); m = c.scope = b; m.$emit('$viewContentLoaded')
            m.$eval(w)
          } else z()
        } let m; let n; let l; var t = b.autoscroll; var w = b.onload || ''; a.$on('$routeChangeSuccess', x); x()
      }
    }
  } function A (d, k, h) { return { restrict: 'ECA', priority: -400, link: function (a, f) { const b = h.current; let c = b.locals; f.html(c.$template); const y = d(f.contents()); b.controller && (c.$scope = a, c = k(b.controller, c), b.controllerAs && (a[b.controllerAs] = c), f.data('$ngControllerController', c), f.children().data('$ngControllerController', c)); y(a) } } }q = d.module('ngRoute', ['ng']).provider('$route', function () {
    function r (a, f) {
      return d.extend(Object.create(a),
        f)
    } function k (a, d) { const b = d.caseInsensitiveMatch; const c = { originalPath: a, regexp: a }; const h = c.keys = []; a = a.replace(/([().])/g, '\\$1').replace(/(\/)?:(\w+)([\?\*])?/g, function (a, d, b, c) { a = c === '?' ? c : null; c = c === '*' ? c : null; h.push({ name: b, optional: !!a }); d = d || ''; return '' + (a ? '' : d) + '(?:' + (a ? d : '') + (c && '(.+?)' || '([^/]+)') + (a || '') + ')' + (a || '') }).replace(/([\/$\*])/g, '\\$1'); c.regexp = new RegExp('^' + a + '$', b ? 'i' : ''); return c } const h = {}; this.when = function (a, f) {
      const b = d.copy(f); d.isUndefined(b.reloadOnSearch) && (b.reloadOnSearch = !0)
      d.isUndefined(b.caseInsensitiveMatch) && (b.caseInsensitiveMatch = this.caseInsensitiveMatch); h[a] = d.extend(b, a && k(a, b)); if (a) { const c = a[a.length - 1] == '/' ? a.substr(0, a.length - 1) : a + '/'; h[c] = d.extend({ redirectTo: a }, k(c, b)) } return this
    }; this.caseInsensitiveMatch = !1; this.otherwise = function (a) { typeof a === 'string' && (a = { redirectTo: a }); this.when(null, a); return this }; this.$get = ['$rootScope', '$location', '$routeParams', '$q', '$injector', '$templateRequest', '$sce', function (a, f, b, c, k, q, x) {
      function m (b) {
        const e = s.current;
        (v = (p = l()) && e && p.$$route === e.$$route && d.equals(p.pathParams, e.pathParams) && !p.reloadOnSearch && !w) || !e && !p || a.$broadcast('$routeChangeStart', p, e).defaultPrevented && b && b.preventDefault()
      } function n () {
        const u = s.current; const e = p; if (v)u.params = e.params, d.copy(u.params, b), a.$broadcast('$routeUpdate', u); else if (e || u) {
          w = !1, (s.current = e) && e.redirectTo && (d.isString(e.redirectTo) ? f.path(t(e.redirectTo, e.params)).search(e.params).replace() : f.url(e.redirectTo(e.pathParams, f.path(), f.search())).replace()), c.when(e).then(function () {
            if (e) {
              const a =
d.extend({}, e.resolve); let b; let g; d.forEach(a, function (b, e) { a[e] = d.isString(b) ? k.get(b) : k.invoke(b, null, null, e) }); d.isDefined(b = e.template) ? d.isFunction(b) && (b = b(e.params)) : d.isDefined(g = e.templateUrl) && (d.isFunction(g) && (g = g(e.params)), g = x.getTrustedResourceUrl(g), d.isDefined(g) && (e.loadedTemplateUrl = g, b = q(g))); d.isDefined(b) && (a.$template = b); return c.all(a)
            }
          }).then(function (c) { e == s.current && (e && (e.locals = c, d.copy(e.params, b)), a.$broadcast('$routeChangeSuccess', e, u)) }, function (b) {
            e == s.current && a.$broadcast('$routeChangeError',
              e, u, b)
          })
        }
      } function l () { let a, b; d.forEach(h, function (c, h) { let g; if (g = !b) { let k = f.path(); g = c.keys; const m = {}; if (c.regexp) if (k = c.regexp.exec(k)) { for (let l = 1, n = k.length; l < n; ++l) { const p = g[l - 1]; const q = k[l]; p && q && (m[p.name] = q) }g = m } else g = null; else g = null; g = a = g }g && (b = r(c, { params: d.extend({}, f.search(), a), pathParams: a }), b.$$route = c) }); return b || h.null && r(h.null, { params: {}, pathParams: {} }) } function t (a, b) {
        const c = []; d.forEach((a || '').split(':'), function (a, d) {
          if (d === 0)c.push(a); else {
            const f = a.match(/(\w+)(?:[?*])?(.*)/)
            const h = f[1]; c.push(b[h]); c.push(f[2] || ''); delete b[h]
          }
        }); return c.join('')
      } var w = !1; let p; let v; var s = { routes: h, reload: function () { w = !0; a.$evalAsync(function () { m(); n() }) }, updateParams: function (a) { if (this.current && this.current.$$route)a = d.extend({}, this.current.params, a), f.path(t(this.current.$$route.originalPath, a)), f.search(a); else throw B('norout') } }; a.$on('$locationChangeStart', m); a.$on('$locationChangeSuccess', n); return s
    }]
  }); var B = d.$$minErr('ngRoute'); q.provider('$routeParams', function () { this.$get = function () { return {} } })
  q.directive('ngView', v); q.directive('ngView', A); v.$inject = ['$route', '$anchorScroll', '$animate']; A.$inject = ['$compile', '$controller', '$route']
})(window, window.angular);
// # sourceMappingURL=angular-route.min.js.map

/*
 AngularJS v1.3.15
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (r, f, s) {
  'use strict'; f.module('ngMessages', []).directive('ngMessages', ['$compile', '$animate', '$templateRequest', function (q, k, l) {
    return {
      restrict: 'AE',
      controller: function () {
        this.$renderNgMessageClasses = f.noop; const b = []; this.registerMessage = function (d, a) { for (let c = 0; c < b.length; c++) if (b[c].type == a.type) { if (d != c) { const g = b[d]; b[d] = b[c]; d < b.length ? b[c] = g : b.splice(0, c) } return }b.splice(d, 0, a) }; this.renderMessages = function (d, a) {
          d = d || {}; let c; f.forEach(b, function (b) {
            let e; if (e = !c || a) {
              e = d[b.type], e = e !==
null && !1 !== e && e
            }e ? (b.attach(), c = !0) : b.detach()
          }); this.renderElementClasses(c)
        }
      },
      require: 'ngMessages',
      link: function (b, d, a, c) {
        c.renderElementClasses = function (b) { b ? k.setClass(d, 'ng-active', 'ng-inactive') : k.setClass(d, 'ng-inactive', 'ng-active') }; const g = f.isString(a.ngMessagesMultiple) || f.isString(a.multiple); let e; b.$watchCollection(a.ngMessages || a.for, function (b) { e = b; c.renderMessages(b, g) }); (a = a.ngMessagesInclude || a.include) && l(a).then(function (a) {
          let h; a = f.element('<div/>').html(a); f.forEach(a.children(),
            function (a) { a = f.element(a); h ? h.after(a) : d.prepend(a); h = a; q(a)(b) }); c.renderMessages(e, g)
        })
      }
    }
  }]).directive('ngMessage', ['$animate', function (f) {
    return {
      require: '^ngMessages',
      transclude: 'element',
      terminal: !0,
      restrict: 'AE',
      link: function (k, l, b, d, a) {
        for (var c, g, e = l[0], n = e.parentNode, h = 0, p = 0; h < n.childNodes.length; h++) { const m = n.childNodes[h]; if (m.nodeType == 8 && m.nodeValue.indexOf('ngMessage') >= 0) { if (m === e) { c = p; break }p++ } }d.registerMessage(c, {
          type: b.ngMessage || b.when,
          attach: function () {
            g || a(k, function (a) {
              f.enter(a,
                null, l); g = a
            })
          },
          detach: function (a) { g && (f.leave(g), g = null) }
        })
      }
    }
  }])
})(window, window.angular)
// # sourceMappingURL=angular-messages.min.js.map

/**
 * angular-ui-utils - Swiss-Army-Knife of AngularJS tools (with no external dependencies!)
 * @version v0.2.3 - 2015-03-30
 * @link http://angular-ui.github.com
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
function uiUploader (a) { 'use strict'; function b (a) { for (let b = 0; b < a.length; b++)i.files.push(a[b]) } function c () { return i.files } function d (a) { i.options = a; for (let b = 0; b < i.files.length && i.activeUploads != i.options.concurrency; b++)i.files[b].active || h(i.files[b], i.options.url) } function e (a) { i.files.splice(i.files.indexOf(a), 1) } function f () { i.files.splice(0, i.files.length) } function g (a) { const b = ['n/a', 'bytes', 'KiB', 'MiB', 'GiB', 'TB', 'PB', 'EiB', 'ZiB', 'YiB']; const c = +Math.floor(Math.log(a) / Math.log(1024)); return (a / Math.pow(1024, c)).toFixed(c ? 1 : 0) + ' ' + b[isNaN(a) ? 0 : c + 1] } function h (a, b) { let c; let e; let f; const h = ''; const j = 'file'; if (i.activeUploads += 1, a.active = !0, c = new window.XMLHttpRequest(), e = new window.FormData(), c.open('POST', b), c.upload.onloadstart = function () {}, c.upload.onprogress = function (b) { b.lengthComputable && (a.loaded = b.loaded, a.humanSize = g(b.loaded), i.options.onProgress(a)) }, c.onload = function () { i.activeUploads -= 1, d(i.options), i.options.onCompleted(a, c.responseText) }, c.onerror = function () {}, h) for (f in h)h.hasOwnProperty(f) && e.append(f, h[f]); return e.append(j, a, a.name), c.send(e), c } var i = this; return i.files = [], i.options = {}, i.activeUploads = 0, a.info('uiUploader loaded'), { addFiles: b, getFiles: c, files: i.files, startUpload: d, removeFile: e, removeAll: f } }angular.module('ui.alias', []).config(['$compileProvider', 'uiAliasConfig', function (a, b) { 'use strict'; b = b || {}, angular.forEach(b, function (b, c) { angular.isString(b) && (b = { replace: !0, template: b }), a.directive(c, function () { return b }) }) }]), angular.module('ui.event', []).directive('uiEvent', ['$parse', function (a) { 'use strict'; return function (b, c, d) { const e = b.$eval(d.uiEvent); angular.forEach(e, function (d, e) { const f = a(d); c.bind(e, function (a) { let c = Array.prototype.slice.call(arguments); c = c.splice(1), f(b, { $event: a, $params: c }), b.$$phase || b.$apply() }) }) } }]), angular.module('ui.format', []).filter('format', function () { 'use strict'; return function (a, b) { let c = a; if (angular.isString(c) && void 0 !== b) if (angular.isArray(b) || angular.isObject(b) || (b = [b]), angular.isArray(b)) { const d = b.length; const e = function (a, c) { return c = parseInt(c, 10), c >= 0 && d > c ? b[c] : a }; c = c.replace(/\$([0-9]+)/g, e) } else angular.forEach(b, function (a, b) { c = c.split(':' + b).join(a) }); return c } }), angular.module('ui.highlight', []).filter('highlight', function () { 'use strict'; return function (a, b, c) { return a && (b || angular.isNumber(b)) ? (a = a.toString(), b = b.toString(), c ? a.split(b).join('<span class="ui-match">' + b + '</span>') : a.replace(new RegExp(b, 'gi'), '<span class="ui-match">$&</span>')) : a } }), angular.module('ui.include', []).directive('uiInclude', ['$http', '$templateCache', '$anchorScroll', '$compile', function (a, b, c, d) { 'use strict'; return { restrict: 'ECA', terminal: !0, compile: function (e, f) { const g = f.uiInclude || f.src; const h = f.fragment || ''; const i = f.onload || ''; const j = f.autoscroll; return function (e, f) { function k () { const k = ++m; const o = e.$eval(g); const p = e.$eval(h); o ? a.get(o, { cache: b }).success(function (a) { if (k === m) { l && l.$destroy(), l = e.$new(); let b; b = p ? angular.element('<div/>').html(a).find(p) : angular.element('<div/>').html(a).contents(), f.html(b), d(b)(l), !angular.isDefined(j) || j && !e.$eval(j) || c(), l.$emit('$includeContentLoaded'), e.$eval(i) } }).error(function () { k === m && n() }) : n() } let l; var m = 0; var n = function () { l && (l.$destroy(), l = null), f.html('') }; e.$watch(h, k), e.$watch(g, k) } } } }]), angular.module('ui.indeterminate', []).directive('uiIndeterminate', [function () { 'use strict'; return { compile: function (a, b) { return b.type && b.type.toLowerCase() === 'checkbox' ? function (a, b, c) { a.$watch(c.uiIndeterminate, function (a) { b[0].indeterminate = !!a }) } : angular.noop } } }]), angular.module('ui.inflector', []).filter('inflector', function () { 'use strict'; function a (a) { return a = a.replace(/([A-Z])|([\-|\_])/g, function (a, b) { return ' ' + (b || '') }), a.replace(/\s\s+/g, ' ').trim().toLowerCase().split(' ') } function b (a) { const b = []; return angular.forEach(a, function (a) { b.push(a.charAt(0).toUpperCase() + a.substr(1)) }), b } const c = { humanize: function (c) { return b(a(c)).join(' ') }, underscore: function (b) { return a(b).join('_') }, variable: function (c) { return c = a(c), c = c[0] + b(c.slice(1)).join('') } }; return function (a, b) { return b !== !1 && angular.isString(a) ? (b = b || 'humanize', c[b](a)) : a } }), angular.module('ui.jq', []).value('uiJqConfig', {}).directive('uiJq', ['uiJqConfig', '$timeout', function (a, b) { 'use strict'; return { restrict: 'A', compile: function (c, d) { if (!angular.isFunction(c[d.uiJq])) throw new Error('ui-jq: The "' + d.uiJq + '" function does not exist'); const e = a && a[d.uiJq]; return function (a, c, d) { function f () { let b = []; return d.uiOptions ? (b = a.$eval('[' + d.uiOptions + ']'), angular.isObject(e) && angular.isObject(b[0]) && (b[0] = angular.extend({}, e, b[0]))) : e && (b = [e]), b } function g () { b(function () { c[d.uiJq].apply(c, f()) }, 0, !1) }d.ngModel && c.is('select,input,textarea') && c.bind('change', function () { c.trigger('input') }), d.uiRefresh && a.$watch(d.uiRefresh, function () { g() }), g() } } } }]), angular.module('ui.keypress', []).factory('keypressHelper', ['$parse', function (a) { 'use strict'; const b = { 8: 'backspace', 9: 'tab', 13: 'enter', 27: 'esc', 32: 'space', 33: 'pageup', 34: 'pagedown', 35: 'end', 36: 'home', 37: 'left', 38: 'up', 39: 'right', 40: 'down', 45: 'insert', 46: 'delete' }; const c = function (a) { return a.charAt(0).toUpperCase() + a.slice(1) }; return function (d, e, f, g) { let h; const i = []; h = e.$eval(g['ui' + c(d)]), angular.forEach(h, function (b, c) { let d, e; e = a(b), angular.forEach(c.split(' '), function (a) { d = { expression: e, keys: {} }, angular.forEach(a.split('-'), function (a) { d.keys[a] = !0 }), i.push(d) }) }), f.bind(d, function (a) { const c = !(!a.metaKey || a.ctrlKey); const f = !!a.altKey; const g = !!a.ctrlKey; const h = !!a.shiftKey; let j = a.keyCode; d === 'keypress' && !h && j >= 97 && j <= 122 && (j -= 32), angular.forEach(i, function (d) { const i = d.keys[b[j]] || d.keys[j.toString()]; const k = !!d.keys.meta; const l = !!d.keys.alt; const m = !!d.keys.ctrl; const n = !!d.keys.shift; i && k === c && l === f && m === g && n === h && e.$apply(function () { d.expression(e, { $event: a }) }) }) }) } }]), angular.module('ui.keypress').directive('uiKeydown', ['keypressHelper', function (a) { 'use strict'; return { link: function (b, c, d) { a('keydown', b, c, d) } } }]), angular.module('ui.keypress').directive('uiKeypress', ['keypressHelper', function (a) { 'use strict'; return { link: function (b, c, d) { a('keypress', b, c, d) } } }]), angular.module('ui.keypress').directive('uiKeyup', ['keypressHelper', function (a) { 'use strict'; return { link: function (b, c, d) { a('keyup', b, c, d) } } }]), angular.module('ui.mask', []).value('uiMaskConfig', { maskDefinitions: { 9: /\d/, A: /[a-zA-Z]/, '*': /[a-zA-Z0-9]/ }, clearOnBlur: !0 }).directive('uiMask', ['uiMaskConfig', '$parse', function (a, b) { 'use strict'; return { priority: 100, require: 'ngModel', restrict: 'A', compile: function () { const c = a; return function (a, d, e, f) { function g (a) { return angular.isDefined(a) ? (t(a), O ? (l(), m(), !0) : k()) : k() } function h (a) { angular.isDefined(a) && (E = a, O && x()) } function i (a) { return O ? (H = p(a || ''), J = o(H), f.$setValidity('mask', J), J && H.length ? q(H) : void 0) : a } function j (a) { return O ? (H = p(a || ''), J = o(H), f.$viewValue = H.length ? q(H) : '', f.$setValidity('mask', J), H === '' && e.required && f.$setValidity('required', !f.$error.required), J ? H : void 0) : a } function k () { return O = !1, n(), angular.isDefined(Q) ? d.attr('placeholder', Q) : d.removeAttr('placeholder'), angular.isDefined(R) ? d.attr('maxlength', R) : d.removeAttr('maxlength'), d.val(f.$modelValue), f.$viewValue = f.$modelValue, !1 } function l () { H = L = p(f.$viewValue || ''), I = K = q(H), J = o(H); const a = J && H.length ? I : ''; e.maxlength && d.attr('maxlength', 2 * C[C.length - 1]), d.attr('placeholder', E), d.val(a), f.$viewValue = a } function m () { P || (d.bind('blur', u), d.bind('mousedown mouseup', v), d.bind('input keyup click focus', x), P = !0) } function n () { P && (d.unbind('blur', u), d.unbind('mousedown', v), d.unbind('mouseup', v), d.unbind('input', x), d.unbind('keyup', x), d.unbind('click', x), d.unbind('focus', x), P = !1) } function o (a) { return a.length ? a.length >= G : !0 } function p (a) { let b = ''; const c = D.slice(); return a = a.toString(), angular.forEach(F, function (b) { a = a.replace(b, '') }), angular.forEach(a.split(''), function (a) { c.length && c[0].test(a) && (b += a, c.shift()) }), b } function q (a) { let b = ''; const c = C.slice(); return angular.forEach(E.split(''), function (d, e) { a.length && e === c[0] ? (b += a.charAt(0) || '_', a = a.substr(1), c.shift()) : b += d }), b } function r (a) { const b = e.placeholder; return typeof b !== 'undefined' && b[a] ? b[a] : '_' } function s () { return E.replace(/[_]+/g, '_').replace(/([^_]+)([a-zA-Z0-9])([^_])/g, '$1$2_$3').split('_') } function t (a) { let b = 0; if (C = [], D = [], E = '', typeof a === 'string') { G = 0; let c = !1; let d = 0; const e = a.split(''); angular.forEach(e, function (a, e) { S.maskDefinitions[a] ? (C.push(b), E += r(e - d), D.push(S.maskDefinitions[a]), b++, c || G++) : a === '?' ? (c = !0, d++) : (E += a, b++) }) }C.push(C.slice().pop() + 1), F = s(), O = C.length > 1 ? !0 : !1 } function u () { S.clearOnBlur && (M = 0, N = 0, J && H.length !== 0 || (I = '', d.val(''), a.$apply(function () { f.$setViewValue('') }))) } function v (a) { a.type === 'mousedown' ? d.bind('mouseout', w) : d.unbind('mouseout', w) } function w () { N = B(this), d.unbind('mouseout', w) } function x (b) { b = b || {}; const c = b.which; const e = b.type; if (c !== 16 && c !== 91) { let g; const h = d.val(); const i = K; let j = p(h); const k = L; let l = !1; let m = z(this) || 0; const n = M || 0; const o = m - n; const r = C[0]; const s = C[j.length] || C.slice().shift(); const t = N || 0; const u = B(this) > 0; const v = t > 0; const w = h.length > i.length || t && h.length > i.length - t; const x = h.length < i.length || t && h.length === i.length - t; const D = c >= 37 && c <= 40 && b.shiftKey; const E = c === 37; const F = c === 8 || e !== 'keyup' && x && o === -1; const G = c === 46 || e !== 'keyup' && x && o === 0 && !v; const H = (E || F || e === 'click') && m > r; if (N = B(this), !D && (!u || e !== 'click' && e !== 'keyup')) { if (e === 'input' && x && !v && j === k) { for (;F && m > r && !y(m);)m--; for (;G && s > m && C.indexOf(m) === -1;)m++; const I = C.indexOf(m); j = j.substring(0, I) + j.substring(I + 1), l = !0 } for (g = q(j), K = g, L = j, d.val(g), l && a.$apply(function () { f.$setViewValue(j) }), w && r >= m && (m = r + 1), H && m--, m = m > s ? s : r > m ? r : m; !y(m) && m > r && s > m;)m += H ? -1 : 1; (H && s > m || w && !y(n)) && m++, M = m, A(this, m) } } } function y (a) { return C.indexOf(a) > -1 } function z (a) { if (!a) return 0; if (void 0 !== a.selectionStart) return a.selectionStart; if (document.selection) { a.focus(); const b = document.selection.createRange(); return b.moveStart('character', a.value ? -a.value.length : 0), b.text.length } return 0 } function A (a, b) { if (!a) return 0; if (a.offsetWidth !== 0 && a.offsetHeight !== 0) if (a.setSelectionRange)a.focus(), a.setSelectionRange(b, b); else if (a.createTextRange) { const c = a.createTextRange(); c.collapse(!0), c.moveEnd('character', b), c.moveStart('character', b), c.select() } } function B (a) { return a ? void 0 !== a.selectionStart ? a.selectionEnd - a.selectionStart : document.selection ? document.selection.createRange().text.length : 0 : 0 } let C; let D; let E; let F; let G; let H; let I; let J; let K; let L; let M; let N; var O = !1; var P = !1; var Q = e.placeholder; var R = e.maxlength; var S = {}; e.uiOptions ? (S = a.$eval('[' + e.uiOptions + ']'), angular.isObject(S[0]) && (S = (function (a, b) { for (const c in a)Object.prototype.hasOwnProperty.call(a, c) && (void 0 === b[c] ? b[c] = angular.copy(a[c]) : angular.extend(b[c], a[c])); return b }(c, S[0])))) : S = c, e.$observe('uiMask', g), e.$observe('placeholder', h); let T = !1; e.$observe('modelViewValue', function (a) { a === 'true' && (T = !0) }), a.$watch(e.ngModel, function (c) { if (T && c) { const d = b(e.ngModel); d.assign(a, f.$viewValue) } }), f.$formatters.push(i), f.$parsers.push(j), d.bind('mousedown mouseup', v), Array.prototype.indexOf || (Array.prototype.indexOf = function (a) { if (this === null) throw new TypeError(); const b = Object(this); const c = b.length >>> 0; if (c === 0) return -1; let d = 0; if (arguments.length > 1 && (d = Number(arguments[1]), d !== d ? d = 0 : d !== 0 && d !== 1 / 0 && d !== -(1 / 0) && (d = (d > 0 || -1) * Math.floor(Math.abs(d)))), d >= c) return -1; for (let e = d >= 0 ? d : Math.max(c - Math.abs(d), 0); c > e; e++) if (e in b && b[e] === a) return e; return -1 }) } } } }]), angular.module('ui.reset', []).value('uiResetConfig', null).directive('uiReset', ['uiResetConfig', function (a) { 'use strict'; let b = null; return void 0 !== a && (b = a), { require: 'ngModel', link: function (a, c, d, e) { let f; f = angular.element('<a class="ui-reset" />'), c.wrap('<span class="ui-resetwrap" />').after(f), f.bind('click', function (c) { c.preventDefault(), a.$apply(function () { e.$setViewValue(d.uiReset ? a.$eval(d.uiReset) : b), e.$render() }) }) } } }]), angular.module('ui.route', []).directive('uiRoute', ['$location', '$parse', function (a, b) { 'use strict'; return { restrict: 'AC', scope: !0, compile: function (c, d) { let e; if (d.uiRoute)e = 'uiRoute'; else if (d.ngHref)e = 'ngHref'; else { if (!d.href) throw new Error('uiRoute missing a route or href property on ' + c[0]); e = 'href' } return function (c, d, f) { function g (b) { const d = b.indexOf('#'); d > -1 && (b = b.substr(d + 1)), (j = function () { i(c, a.path().indexOf(b) > -1) })() } function h (b) { const d = b.indexOf('#'); d > -1 && (b = b.substr(d + 1)), (j = function () { const d = new RegExp('^' + b + '$', ['i']); i(c, d.test(a.path())) })() } var i = b(f.ngModel || f.routeModel || '$uiRoute').assign; var j = angular.noop; switch (e) { case 'uiRoute':f.uiRoute ? h(f.uiRoute) : f.$observe('uiRoute', h); break; case 'ngHref':f.ngHref ? g(f.ngHref) : f.$observe('ngHref', g); break; case 'href':g(f.href) }c.$on('$routeChangeSuccess', function () { j() }), c.$on('$stateChangeSuccess', function () { j() }) } } } }]), angular.module('ui.scroll.jqlite', ['ui.scroll']).service('jqLiteExtras', ['$log', '$window', function (a, b) { 'use strict'; return { registerFor: function (a) { let c, d, e, f, g, h, i; return d = angular.element.prototype.css, a.prototype.css = function (a, b) { let c, e; return e = this, c = e[0], c && c.nodeType !== 3 && c.nodeType !== 8 && c.style ? d.call(e, a, b) : void 0 }, h = function (a) { return a && a.document && a.location && a.alert && a.setInterval }, i = function (a, b, c) { let d, e, f, g, i; return d = a[0], i = { top: ['scrollTop', 'pageYOffset', 'scrollLeft'], left: ['scrollLeft', 'pageXOffset', 'scrollTop'] }[b], e = i[0], g = i[1], f = i[2], h(d) ? angular.isDefined(c) ? d.scrollTo(a[f].call(a), c) : g in d ? d[g] : d.document.documentElement[e] : angular.isDefined(c) ? d[e] = c : d[e] }, b.getComputedStyle ? (f = function (a) { return b.getComputedStyle(a, null) }, c = function (a, b) { return parseFloat(b) }) : (f = function (a) { return a.currentStyle }, c = function (a, b) { let c, d, e, f, g, h, i; return c = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, f = new RegExp('^(' + c + ')(?!px)[a-z%]+$', 'i'), f.test(b) ? (i = a.style, d = i.left, g = a.runtimeStyle, h = g && g.left, g && (g.left = i.left), i.left = b, e = i.pixelLeft, i.left = d, h && (g.left = h), e) : parseFloat(b) }), e = function (a, b) { let d, e, g, i, j, k, l, m, n, o, p, q, r; return h(a) ? (d = document.documentElement[{ height: 'clientHeight', width: 'clientWidth' }[b]], { base: d, padding: 0, border: 0, margin: 0 }) : (r = { width: [a.offsetWidth, 'Left', 'Right'], height: [a.offsetHeight, 'Top', 'Bottom'] }[b], d = r[0], l = r[1], m = r[2], k = f(a), p = c(a, k['padding' + l]) || 0, q = c(a, k['padding' + m]) || 0, e = c(a, k['border' + l + 'Width']) || 0, g = c(a, k['border' + m + 'Width']) || 0, i = k['margin' + l], j = k['margin' + m], n = c(a, i) || 0, o = c(a, j) || 0, { base: d, padding: p + q, border: e + g, margin: n + o }) }, g = function (a, b, c) { let d, g, h; return g = e(a, b), g.base > 0 ? { base: g.base - g.padding - g.border, outer: g.base, outerfull: g.base + g.margin }[c] : (d = f(a), h = d[b], (h < 0 || h === null) && (h = a.style[b] || 0), h = parseFloat(h) || 0, { base: h - g.padding - g.border, outer: h, outerfull: h + g.padding + g.border + g.margin }[c]) }, angular.forEach({ before: function (a) { let b, c, d, e, f, g, h; if (f = this, c = f[0], e = f.parent(), b = e.contents(), b[0] === c) return e.prepend(a); for (d = g = 1, h = b.length - 1; h >= 1 ? h >= g : g >= h; d = h >= 1 ? ++g : --g) if (b[d] === c) return void angular.element(b[d - 1]).after(a); throw new Error('invalid DOM structure ' + c.outerHTML) }, height: function (a) { let b; return b = this, angular.isDefined(a) ? (angular.isNumber(a) && (a += 'px'), d.call(b, 'height', a)) : g(this[0], 'height', 'base') }, outerHeight: function (a) { return g(this[0], 'height', a ? 'outerfull' : 'outer') }, offset: function (a) { let b, c, d, e, f, g; if (f = this, arguments.length) { if (void 0 === a) return f; throw new Error('offset setter method is not implemented') } return b = { top: 0, left: 0 }, e = f[0], (c = e && e.ownerDocument) ? (d = c.documentElement, e.getBoundingClientRect != null && (b = e.getBoundingClientRect()), g = c.defaultView || c.parentWindow, { top: b.top + (g.pageYOffset || d.scrollTop) - (d.clientTop || 0), left: b.left + (g.pageXOffset || d.scrollLeft) - (d.clientLeft || 0) }) : void 0 }, scrollTop: function (a) { return i(this, 'top', a) }, scrollLeft: function (a) { return i(this, 'left', a) } }, function (b, c) { return a.prototype[c] ? void 0 : a.prototype[c] = b }) } } }]).run(['$log', '$window', 'jqLiteExtras', function (a, b, c) { 'use strict'; return b.jQuery ? void 0 : c.registerFor(angular.element) }]), angular.module('ui.scroll', []).directive('uiScrollViewport', ['$log', function () { 'use strict'; return { controller: ['$scope', '$element', function (a, b) { return this.viewport = b, this }] } }]).directive('uiScroll', ['$log', '$injector', '$rootScope', '$timeout', function (a, b, c, d) { 'use strict'; return { require: ['?^uiScrollViewport'], transclude: 'element', priority: 1e3, terminal: !0, compile: function (e, f, g) { return function (e, f, h, i) { let j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ba, ca, da; if (O = a.debug || a.log, P = h.uiScroll.match(/^\s*(\w+)\s+in\s+([\w\.]+)\s*$/), !P) throw new Error("Expected uiScroll in form of '_item_ in _datasource_' but got '" + h.uiScroll + "'"); if (M = P[1], x = P[2], I = function (a, b) { let c; if (a) return c = b.match(/^([\w]+)\.(.+)$/), c && c.length === 3 ? I(a[c[1]], c[2]) : a[b] }, X = function (a, b, c, d) { let e; if (a && b && ((e = b.match(/^([\w]+)\.(.+)$/)) || b.indexOf('.') === -1)) return e && e.length === 3 ? (angular.isObject(a[e[1]]) || d || (a[e[1]] = {}), X(a[e[1]], e[2], c, d)) : a[b] = angular.isObject(a[b]) || d ? c : c }, w = I(e, x), L = function () { return angular.isObject(w) && typeof w.get === 'function' }, !L() && (w = b.get(x), !L())) throw new Error('' + x + ' is not a valid datasource'); return s = Math.max(3, +h.bufferSize || 10), r = function () { return ba.outerHeight() * Math.max(0.1, +h.padding || 0.1) }, W = function (a) { let b; return (b = a[0].scrollHeight) != null ? b : a[0].document.documentElement.scrollHeight }, t = null, g(e.$new(), function (a) { let b, c, d, g, h, j; if (g = a[0].localName, g === 'dl') throw new Error('ui-scroll directive does not support <' + a[0].localName + '> as a repeating tag: ' + a[0].outerHTML); return g !== 'li' && g !== 'tr' && (g = 'div'), j = i[0] && i[0].viewport ? i[0].viewport : angular.element(window), j.css({ 'overflow-y': 'auto', display: 'block' }), d = function (a) { let b, c, d; switch (a) { case 'tr':return d = angular.element('<table><tr><td><div></div></td></tr></table>'), b = d.find('div'), c = d.find('tr'), c.paddingHeight = function () { return b.height.apply(b, arguments) }, c; default:return c = angular.element('<' + a + '></' + a + '>'), c.paddingHeight = c.height, c } }, c = function (a, b, c) { return b[{ top: 'before', bottom: 'after' }[c]](a), { paddingHeight: function () { return a.paddingHeight.apply(a, arguments) }, insert: function (b) { return a[{ top: 'after', bottom: 'before' }[c]](b) } } }, h = c(d(g), f, 'top'), b = c(d(g), f, 'bottom'), e.$on('$destroy', a.remove), t = { viewport: j, topPadding: h.paddingHeight, bottomPadding: b.paddingHeight, append: b.insert, prepend: h.insert, bottomDataPos: function () { return W(j) - b.paddingHeight() }, topDataPos: function () { return h.paddingHeight() } } }), ba = t.viewport, ca = ba.scope() || c, _ = function (a) { return j.topVisible = a.scope[M], j.topVisibleElement = a.element, j.topVisibleScope = a.scope, h.topVisible && X(ca, h.topVisible, j.topVisible), h.topVisibleElement && X(ca, h.topVisibleElement, j.topVisibleElement), h.topVisibleScope && X(ca, h.topVisibleScope, j.topVisibleScope), typeof w.topVisible === 'function' ? w.topVisible(a) : void 0 }, N = function (a) { return j.isLoading = a, h.isLoading && X(e, h.isLoading, a), typeof w.loading === 'function' ? w.loading(a) : void 0 }, V = 0, H = 1, Q = 1, q = [], R = [], D = !1, o = !1, T = function (a, b) { let c, d; for (c = d = a; b >= a ? b > d : d > b; c = b >= a ? ++d : --d)q[c].scope.$destroy(), q[c].element.remove(); return q.splice(a, b - a) }, S = function () { return V++, H = 1, Q = 1, T(0, q.length), t.topPadding(0), t.bottomPadding(0), R = [], D = !1, o = !1, l(V) }, p = function () { return ba.scrollTop() + ba.outerHeight() }, aa = function () { return ba.scrollTop() }, Y = function () { return !D && t.bottomDataPos() < p() + r() }, u = function () { let a, b, c, d, e, f, g, h, i, j; for (a = 0, g = 0, b = i = j = q.length - 1; j <= 0 ? i <= 0 : i >= 0; b = j <= 0 ? ++i : --i) if (c = q[b], e = c.element.offset().top, f = h !== e, h = e, f && (d = c.element.outerHeight(!0)), t.bottomDataPos() - a - d > p() + r())f && (a += d), g++, D = !1; else { if (f) break; g++ } return g > 0 ? (t.bottomPadding(t.bottomPadding() + a), T(q.length - g, q.length), Q -= g) : void 0 }, Z = function () { return !o && t.topDataPos() > aa() - r() }, v = function () { let a, b, c, d, e, f, g, h, i; for (g = 0, e = 0, h = 0, i = q.length; i > h; h++) if (a = q[h], c = a.element.offset().top, d = f !== c, f = c, d && (b = a.element.outerHeight(!0)), t.topDataPos() + g + b < aa() - r())d && (g += b), e++, o = !1; else { if (d) break; e++ } return e > 0 ? (t.topPadding(t.topPadding() + g), T(0, e), H += e) : void 0 }, C = function (a, b) { return j.isLoading || N(!0), R.push(b) === 1 ? F(a) : void 0 }, J = function (a) { return a.displayTemp = a.css('display'), a.css('display', 'none') }, $ = function (a) { return a.hasOwnProperty('displayTemp') ? a.css('display', a.displayTemp) : void 0 }, K = function (a, b) { let c, d, f; return c = e.$new(), c[M] = b, d = a > H, c.$index = a, d && c.$index--, f = { scope: c }, g(c, function (b) { return f.element = b, d ? a === Q ? (J(b), t.append(b), q.push(f)) : (q[a - H].element.after(b), q.splice(a - H + 1, 0, f)) : (J(b), t.prepend(b), q.unshift(f)) }), { appended: d, wrapper: f } }, m = function (a, b) { let c; return a ? t.bottomPadding(Math.max(0, t.bottomPadding() - b.element.outerHeight(!0))) : (c = t.topPadding() - b.element.outerHeight(!0), c >= 0 ? t.topPadding(c) : ba.scrollTop(ba.scrollTop() + b.element.outerHeight(!0))) }, y = function (a, b) { let c, d, e, f, g, h, i, j, k; if (Y() ? C(a, !0) : Z() && C(a, !1), b && b(a), R.length === 0) { for (h = 0, k = [], i = 0, j = q.length; j > i; i++) { if (c = q[i], e = c.element.offset().top, f = g !== e, g = e, f && (d = c.element.outerHeight(!0)), !(f && t.topDataPos() + h + d < aa())) { f && _(c); break }k.push(h += d) } return k } }, l = function (a, b, c) { return b && b.length ? d(function () { let d, e, f, g, h, i, j, k, l; for (h = [], i = 0, k = b.length; k > i; i++)f = b[i], d = f.wrapper.element, $(d), e = d.offset().top, g !== e && (h.push(f), g = e); for (j = 0, l = h.length; l > j; j++)f = h[j], m(f.appended, f.wrapper); return y(a, c) }) : y(a, c) }, G = function (a, b) { return l(a, b, function () { return R.shift(), R.length === 0 ? N(!1) : F(a) }) }, F = function (a) { let b; return b = R[0], b ? q.length && !Y() ? G(a) : w.get(Q, s, function (b) { let c, d, f, g; if (!(a && a !== V || e.$$destroyed)) { if (d = [], b.length < s && (D = !0, t.bottomPadding(0)), b.length > 0) for (v(), f = 0, g = b.length; g > f; f++)c = b[f], d.push(K(++Q, c)); return G(a, d) } }) : q.length && !Z() ? G(a) : w.get(H - s, s, function (b) { let c, d, f, g; if (!(a && a !== V || e.$$destroyed)) { if (d = [], b.length < s && (o = !0, t.topPadding(0)), b.length > 0) for (q.length && u(), c = f = g = b.length - 1; g <= 0 ? f <= 0 : f >= 0; c = g <= 0 ? ++f : --f)d.unshift(K(--H, b[c])); return G(a, d) } }) }, U = function () { return c.$$phase || j.isLoading ? void 0 : (l(), e.$apply()) }, da = function (a) { let b, c; return b = ba[0].scrollTop, c = ba[0].scrollHeight - ba[0].clientHeight, b === 0 && !o || b === c && !D ? a.preventDefault() : void 0 }, ba.bind('resize', U), ba.bind('scroll', U), ba.bind('mousewheel', da), e.$watch(w.revision, S), E = w.scope ? w.scope.$new() : e.$new(), e.$on('$destroy', function () { let a, b, c; for (b = 0, c = q.length; c > b; b++)a = q[b], a.scope.$destroy(), a.element.remove(); return ba.unbind('resize', U), ba.unbind('scroll', U), ba.unbind('mousewheel', da) }), j = {}, j.isLoading = !1, n = function (a, b) { let c, d, e, f, g, h, i, j, k, l, m, n; if (d = [], angular.isArray(b)) if (b.length) { if (b.length === 1 && b[0] === a.scope[M]) return d; for (f = a.scope.$index, h = f > H ? f - H : 1, c = i = 0, l = b.length; l > i; c = ++i)g = b[c], d.push(K(f + c, g)); for (T(h, h + 1), c = j = 0, m = q.length; m > j; c = ++j)e = q[c], e.scope.$index = H + c } else for (T(a.scope.$index - H, a.scope.$index - H + 1), Q--, c = k = 0, n = q.length; n > k; c = ++k)e = q[c], e.scope.$index = H + c; return d }, j.applyUpdates = function (a, b) { let c, d, e, f, g, h; if (c = [], V++, angular.isFunction(a)) for (g = q.slice(0), e = 0, f = g.length; f > e; e++)d = g[e], c.concat(c, n(d, a(d.scope[M], d.scope, d.element))); else { if (a % 1 !== 0) throw new Error('applyUpdates - ' + a + ' is not a valid index or outside of range'); (h = a - H - 1) >= 0 && h < q.length && (c = n(q[a - H], b)) } return l(V, c) }, h.adapter && (k = I(e, h.adapter), k || (X(e, h.adapter, {}), k = I(e, h.adapter)), angular.extend(k, j), j = k), B = function (a, b) { let c, d, e, f, g; if (angular.isFunction(a)) for (d = function (b) { return a(b.scope) }, e = 0, f = q.length; f > e; e++)c = q[e], d(c); else (g = a - H - 1) >= 0 && g < q.length && (q[a - H - 1].scope[M] = b); return null }, z = function (a) { let b, c, d, e, f, g, h, i, j, k, m, n; if (angular.isFunction(a)) { for (d = [], g = 0, j = q.length; j > g; g++)c = q[g], d.unshift(c); for (f = function (c) { return a(c.scope) ? (T(d.length - 1 - b, d.length - b), Q--) : void 0 }, b = h = 0, k = d.length; k > h; b = ++h)e = d[b], f(e) } else (n = a - H - 1) >= 0 && n < q.length && (T(a - H - 1, a - H), Q--); for (b = i = 0, m = q.length; m > i; b = ++i)c = q[b], c.scope.$index = H + b; return l() }, A = function (a, b) { let c, d, e, f, g; if (d = [], angular.isFunction(a)) throw new Error('not implemented - Insert with locator function'); for ((g = a - H - 1) >= 0 && g < q.length && (d.push(K(a, b)), Q++), c = e = 0, f = q.length; f > e; c = ++e)b = q[c], b.scope.$index = H + c; return l(null, d) }, E.$on('insert.item', function (a, b, c) { return A(b, c) }), E.$on('update.items', function (a, b, c) { return B(b, c) }), E.$on('delete.items', function (a, b) { return z(b) }) } } } }]), angular.module('ui.scrollfix', []).directive('uiScrollfix', ['$window', function (a) { 'use strict'; function b () { if (angular.isDefined(a.pageYOffset)) return a.pageYOffset; const b = document.compatMode && document.compatMode !== 'BackCompat' ? document.documentElement : document.body; return b.scrollTop } return { require: '^?uiScrollfixTarget', link: function (c, d, e, f) { function g () { const a = i ? e.uiScrollfix : d[0].offsetTop + j; const c = f ? k[0].scrollTop : b(); !d.hasClass('ui-scrollfix') && c > a ? (d.addClass('ui-scrollfix'), h = a) : d.hasClass('ui-scrollfix') && h > c && d.removeClass('ui-scrollfix') } let h; var i = !0; var j = 0; var k = f && f.$element || angular.element(a); e.uiScrollfix ? typeof e.uiScrollfix === 'string' && (e.uiScrollfix.charAt(0) === '-' ? (i = !1, j = -parseFloat(e.uiScrollfix.substr(1))) : e.uiScrollfix.charAt(0) === '+' && (i = !1, j = parseFloat(e.uiScrollfix.substr(1)))) : i = !1, h = i ? e.uiScrollfix : d[0].offsetTop + j, k.on('scroll', g), c.$on('$destroy', function () { k.off('scroll', g) }) } } }]).directive('uiScrollfixTarget', [function () { 'use strict'; return { controller: ['$element', function (a) { this.$element = a }] } }]), angular.module('ui.showhide', []).directive('uiShow', [function () { 'use strict'; return function (a, b, c) { a.$watch(c.uiShow, function (a) { a ? b.addClass('ui-show') : b.removeClass('ui-show') }) } }]).directive('uiHide', [function () { 'use strict'; return function (a, b, c) { a.$watch(c.uiHide, function (a) { a ? b.addClass('ui-hide') : b.removeClass('ui-hide') }) } }]).directive('uiToggle', [function () { 'use strict'; return function (a, b, c) { a.$watch(c.uiToggle, function (a) { a ? b.removeClass('ui-hide').addClass('ui-show') : b.removeClass('ui-show').addClass('ui-hide') }) } }]), angular.module('ui.unique', []).filter('unique', ['$parse', function (a) { 'use strict'; return function (b, c) { if (c === !1) return b; if ((c || angular.isUndefined(c)) && angular.isArray(b)) { const d = []; const e = angular.isString(c) ? a(c) : function (a) { return a }; const f = function (a) { return angular.isObject(a) ? e(a) : a }; angular.forEach(b, function (a) { for (var b = !1, c = 0; c < d.length; c++) if (angular.equals(f(d[c]), f(a))) { b = !0; break }b || d.push(a) }), b = d } return b } }]), angular.module('ui.uploader', []).service('uiUploader', uiUploader), uiUploader.$inject = ['$log'], angular.module('ui.validate', []).directive('uiValidate', function () { 'use strict'; return { restrict: 'A', require: 'ngModel', link: function (a, b, c, d) { function e (b) { return angular.isString(b) ? void a.$watch(b, function () { angular.forEach(g, function (a) { a(d.$modelValue) }) }) : angular.isArray(b) ? void angular.forEach(b, function (b) { a.$watch(b, function () { angular.forEach(g, function (a) { a(d.$modelValue) }) }) }) : void (angular.isObject(b) && angular.forEach(b, function (b, c) { angular.isString(b) && a.$watch(b, function () { g[c](d.$modelValue) }), angular.isArray(b) && angular.forEach(b, function (b) { a.$watch(b, function () { g[c](d.$modelValue) }) }) })) } let f; var g = {}; let h = a.$eval(c.uiValidate); h && (angular.isString(h) && (h = { validator: h }), angular.forEach(h, function (b, c) { f = function (e) { const f = a.$eval(b, { $value: e }); return angular.isObject(f) && angular.isFunction(f.then) ? (f.then(function () { d.$setValidity(c, !0) }, function () { d.$setValidity(c, !1) }), e) : f ? (d.$setValidity(c, !0), e) : (d.$setValidity(c, !1), e) }, g[c] = f, d.$formatters.push(f), d.$parsers.push(f) }), c.uiValidateWatch && e(a.$eval(c.uiValidateWatch))) } } }), angular.module('ui.utils', ['ui.event', 'ui.format', 'ui.highlight', 'ui.include', 'ui.indeterminate', 'ui.inflector', 'ui.jq', 'ui.keypress', 'ui.mask', 'ui.reset', 'ui.route', 'ui.scrollfix', 'ui.scroll', 'ui.scroll.jqlite', 'ui.showhide', 'ui.unique', 'ui.validate'])
/**
 * angular-strap
 * @version v2.2.1 - 2015-03-10
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes (olivier@mg-crea.com)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
!(function (e, t, n) {
  'use strict'; angular.module('mgcrea.ngStrap', ['mgcrea.ngStrap.modal', 'mgcrea.ngStrap.aside', 'mgcrea.ngStrap.alert', 'mgcrea.ngStrap.button', 'mgcrea.ngStrap.select', 'mgcrea.ngStrap.datepicker', 'mgcrea.ngStrap.timepicker', 'mgcrea.ngStrap.navbar', 'mgcrea.ngStrap.tooltip', 'mgcrea.ngStrap.popover', 'mgcrea.ngStrap.dropdown', 'mgcrea.ngStrap.typeahead', 'mgcrea.ngStrap.scrollspy', 'mgcrea.ngStrap.affix', 'mgcrea.ngStrap.tab', 'mgcrea.ngStrap.collapse']), angular.module('mgcrea.ngStrap.affix', ['mgcrea.ngStrap.helpers.dimensions', 'mgcrea.ngStrap.helpers.debounce']).provider('$affix', function () { const e = this.defaults = { offsetTop: 'auto', inlineStyles: !0 }; this.$get = ['$window', 'debounce', 'dimensions', function (t, n, a) { function o (o, s) { function l (e, t, n) { const a = u(); const o = c(); return v >= a ? 'top' : e !== null && a + e <= t.top ? 'middle' : y !== null && t.top + n + $ >= o - y ? 'bottom' : 'middle' } function u () { return p[0] === t ? t.pageYOffset : p[0].scrollTop } function c () { return p[0] === t ? t.document.body.scrollHeight : p[0].scrollHeight } const d = {}; const f = angular.extend({}, e, s); var p = f.target; const g = 'affix affix-top affix-bottom'; let m = !1; var $ = 0; let h = 0; var v = 0; var y = 0; let w = null; let b = null; let D = o.parent(); if (f.offsetParent) if (f.offsetParent.match(/^\d+$/)) for (let k = 0; k < 1 * f.offsetParent - 1; k++)D = D.parent(); else D = angular.element(f.offsetParent); return d.init = function () { this.$parseOffsets(), h = a.offset(o[0]).top + $, m = !o[0].style.width, p.on('scroll', this.checkPosition), p.on('click', this.checkPositionWithEventLoop), r.on('resize', this.$debouncedOnResize), this.checkPosition(), this.checkPositionWithEventLoop() }, d.destroy = function () { p.off('scroll', this.checkPosition), p.off('click', this.checkPositionWithEventLoop), r.off('resize', this.$debouncedOnResize) }, d.checkPositionWithEventLoop = function () { setTimeout(d.checkPosition, 1) }, d.checkPosition = function () { const e = u(); const t = a.offset(o[0]); const n = a.height(o[0]); const r = l(b, t, n); w !== r && (w = r, o.removeClass(g).addClass('affix' + (r !== 'middle' ? '-' + r : '')), r === 'top' ? (b = null, m && o.css('width', ''), f.inlineStyles && (o.css('position', f.offsetParent ? '' : 'relative'), o.css('top', ''))) : r === 'bottom' ? (b = f.offsetUnpin ? -(1 * f.offsetUnpin) : t.top - e, m && o.css('width', ''), f.inlineStyles && (o.css('position', f.offsetParent ? '' : 'relative'), o.css('top', f.offsetParent ? '' : i[0].offsetHeight - y - n - h + 'px'))) : (b = null, m && o.css('width', o[0].offsetWidth + 'px'), f.inlineStyles && (o.css('position', 'fixed'), o.css('top', $ + 'px')))) }, d.$onResize = function () { d.$parseOffsets(), d.checkPosition() }, d.$debouncedOnResize = n(d.$onResize, 50), d.$parseOffsets = function () { const e = o.css('position'); f.inlineStyles && o.css('position', f.offsetParent ? '' : 'relative'), f.offsetTop && (f.offsetTop === 'auto' && (f.offsetTop = '+0'), f.offsetTop.match(/^[-+]\d+$/) ? ($ = 1 * -f.offsetTop, v = f.offsetParent ? a.offset(D[0]).top + 1 * f.offsetTop : a.offset(o[0]).top - a.css(o[0], 'marginTop', !0) + 1 * f.offsetTop) : v = 1 * f.offsetTop), f.offsetBottom && (y = f.offsetParent && f.offsetBottom.match(/^[-+]\d+$/) ? c() - (a.offset(D[0]).top + a.height(D[0])) + 1 * f.offsetBottom + 1 : 1 * f.offsetBottom), f.inlineStyles && o.css('position', e) }, d.init(), d } var i = angular.element(t.document.body); var r = angular.element(t); return o }] }).directive('bsAffix', ['$affix', '$window', function (e, t) { return { restrict: 'EAC', require: '^?bsAffixTarget', link: function (n, a, o, i) { let r = { scope: n, target: i ? i.$element : angular.element(t) }; angular.forEach(['offsetTop', 'offsetBottom', 'offsetParent', 'offsetUnpin', 'inlineStyles'], function (e) { if (angular.isDefined(o[e])) { let t = o[e]; /true/i.test(t) && (t = !0), /false/i.test(t) && (t = !1), r[e] = t } }); let s = e(a, r); n.$on('$destroy', function () { s && s.destroy(), r = null, s = null }) } } }]).directive('bsAffixTarget', function () { return { controller: ['$element', function (e) { this.$element = e }] } }), angular.module('mgcrea.ngStrap.aside', ['mgcrea.ngStrap.modal']).provider('$aside', function () { const e = this.defaults = { animation: 'am-fade-and-slide-right', prefixClass: 'aside', prefixEvent: 'aside', placement: 'right', template: 'aside/aside.tpl.html', contentTemplate: !1, container: !1, element: null, backdrop: !0, keyboard: !0, html: !1, show: !0 }; this.$get = ['$modal', function (t) { function n (n) { let a = {}; const o = angular.extend({}, e, n); return a = t(o) } return n }] }).directive('bsAside', ['$window', '$sce', '$aside', function (e, t, n) { e.requestAnimationFrame || e.setTimeout; return { restrict: 'EAC', scope: !0, link: function (e, a, o) { let i = { scope: e, element: a, show: !1 }; angular.forEach(['template', 'contentTemplate', 'placement', 'backdrop', 'keyboard', 'html', 'container', 'animation'], function (e) { angular.isDefined(o[e]) && (i[e] = o[e]) }), angular.forEach(['title', 'content'], function (n) { o[n] && o.$observe(n, function (a) { e[n] = t.trustAsHtml(a) }) }), o.bsAside && e.$watch(o.bsAside, function (t) { angular.isObject(t) ? angular.extend(e, t) : e.content = t }, !0); let r = n(i); a.on(o.trigger || 'click', r.toggle), e.$on('$destroy', function () { r && r.destroy(), i = null, r = null }) } } }]), angular.module('mgcrea.ngStrap.alert', ['mgcrea.ngStrap.modal']).provider('$alert', function () { const e = this.defaults = { animation: 'am-fade', prefixClass: 'alert', prefixEvent: 'alert', placement: null, template: 'alert/alert.tpl.html', container: !1, element: null, backdrop: !1, keyboard: !0, show: !0, duration: !1, type: !1, dismissable: !0 }; this.$get = ['$modal', '$timeout', function (t, n) { function a (a) { let o = {}; const i = angular.extend({}, e, a); o = t(i), o.$scope.dismissable = !!i.dismissable, i.type && (o.$scope.type = i.type); const r = o.show; return i.duration && (o.show = function () { r(), n(function () { o.hide() }, 1e3 * i.duration) }), o } return a }] }).directive('bsAlert', ['$window', '$sce', '$alert', function (e, t, n) { e.requestAnimationFrame || e.setTimeout; return { restrict: 'EAC', scope: !0, link: function (e, a, o) { let i = { scope: e, element: a, show: !1 }; angular.forEach(['template', 'placement', 'keyboard', 'html', 'container', 'animation', 'duration', 'dismissable'], function (e) { angular.isDefined(o[e]) && (i[e] = o[e]) }), e.hasOwnProperty('title') || (e.title = ''), angular.forEach(['title', 'content', 'type'], function (n) { o[n] && o.$observe(n, function (a) { e[n] = t.trustAsHtml(a) }) }), o.bsAlert && e.$watch(o.bsAlert, function (t) { angular.isObject(t) ? angular.extend(e, t) : e.content = t }, !0); let r = n(i); a.on(o.trigger || 'click', r.toggle), e.$on('$destroy', function () { r && r.destroy(), i = null, r = null }) } } }]), angular.module('mgcrea.ngStrap.button', []).provider('$button', function () { const e = this.defaults = { activeClass: 'active', toggleEvent: 'click' }; this.$get = function () { return { defaults: e } } }).directive('bsCheckboxGroup', function () { return { restrict: 'A', require: 'ngModel', compile: function (e, t) { e.attr('data-toggle', 'buttons'), e.removeAttr('ng-model'); const n = e[0].querySelectorAll('input[type="checkbox"]'); angular.forEach(n, function (e) { const n = angular.element(e); n.attr('bs-checkbox', ''), n.attr('ng-model', t.ngModel + '.' + n.attr('value')) }) } } }).directive('bsCheckbox', ['$button', '$$rAF', function (e, t) { const n = e.defaults; const a = /^(true|false|\d+)$/; return { restrict: 'A', require: 'ngModel', link: function (e, o, i, r) { const s = n; const l = o[0].nodeName === 'INPUT'; const u = l ? o.parent() : o; let c = angular.isDefined(i.trueValue) ? i.trueValue : !0; a.test(i.trueValue) && (c = e.$eval(i.trueValue)); let d = angular.isDefined(i.falseValue) ? i.falseValue : !1; a.test(i.falseValue) && (d = e.$eval(i.falseValue)); const f = typeof c !== 'boolean' || typeof d !== 'boolean'; f && (r.$parsers.push(function (e) { return e ? c : d }), r.$formatters.push(function (e) { return angular.equals(e, c) }), e.$watch(i.ngModel, function () { r.$render() })), r.$render = function () { const e = angular.equals(r.$modelValue, c); t(function () { l && (o[0].checked = e), u.toggleClass(s.activeClass, e) }) }, o.bind(s.toggleEvent, function () { e.$apply(function () { l || r.$setViewValue(!u.hasClass('active')), f || r.$render() }) }) } } }]).directive('bsRadioGroup', function () { return { restrict: 'A', require: 'ngModel', compile: function (e, t) { e.attr('data-toggle', 'buttons'), e.removeAttr('ng-model'); const n = e[0].querySelectorAll('input[type="radio"]'); angular.forEach(n, function (e) { angular.element(e).attr('bs-radio', ''), angular.element(e).attr('ng-model', t.ngModel) }) } } }).directive('bsRadio', ['$button', '$$rAF', function (e, t) { const n = e.defaults; const a = /^(true|false|\d+)$/; return { restrict: 'A', require: 'ngModel', link: function (e, o, i, r) { let s; const l = n; const u = o[0].nodeName === 'INPUT'; const c = u ? o.parent() : o; i.$observe('value', function (t) { s = a.test(t) ? e.$eval(t) : t, r.$render() }), r.$render = function () { const e = angular.equals(r.$modelValue, s); t(function () { u && (o[0].checked = e), c.toggleClass(l.activeClass, e) }) }, o.bind(l.toggleEvent, function () { e.$apply(function () { r.$setViewValue(s), r.$render() }) }) } } }]), angular.module('mgcrea.ngStrap.collapse', []).provider('$collapse', function () { const e = this.defaults = { animation: 'am-collapse', disallowToggle: !1, activeClass: 'in', startCollapsed: !1, allowMultiple: !1 }; const t = this.controller = function (t, n, a) { function o (e) { for (let t = l.$targets.$active, n = 0; n < t.length; n++)e < t[n] && (t[n] = t[n] - 1), t[n] === l.$targets.length && (t[n] = l.$targets.length - 1) } function i (e) { const t = l.$targets.$active; return t.indexOf(e) === -1 ? !1 : !0 } function r (e) { const t = l.$targets.$active.indexOf(e); t !== -1 && l.$targets.$active.splice(t, 1) } function s (e) { l.$options.allowMultiple || l.$targets.$active.splice(0, 1), l.$targets.$active.indexOf(e) === -1 && l.$targets.$active.push(e) } var l = this; l.$options = angular.copy(e), angular.forEach(['animation', 'disallowToggle', 'activeClass', 'startCollapsed', 'allowMultiple'], function (e) { angular.isDefined(a[e]) && (l.$options[e] = a[e]) }), l.$toggles = [], l.$targets = [], l.$viewChangeListeners = [], l.$registerToggle = function (e) { l.$toggles.push(e) }, l.$registerTarget = function (e) { l.$targets.push(e) }, l.$unregisterToggle = function (e) { const t = l.$toggles.indexOf(e); l.$toggles.splice(t, 1) }, l.$unregisterTarget = function (e) { const t = l.$targets.indexOf(e); l.$targets.splice(t, 1), l.$options.allowMultiple && r(e), o(t), l.$viewChangeListeners.forEach(function (e) { e() }) }, l.$targets.$active = l.$options.startCollapsed ? [] : [0], l.$setActive = t.$setActive = function (e) { angular.isArray(e) ? l.$targets.$active = angular.copy(e) : l.$options.disallowToggle ? s(e) : i(e) ? r(e) : s(e), l.$viewChangeListeners.forEach(function (e) { e() }) }, l.$activeIndexes = function () { return l.$options.allowMultiple ? l.$targets.$active : l.$targets.$active.length === 1 ? l.$targets.$active[0] : -1 } }; this.$get = function () { const n = {}; return n.defaults = e, n.controller = t, n } }).directive('bsCollapse', ['$window', '$animate', '$collapse', function (e, t, n) { n.defaults; return { require: ['?ngModel', 'bsCollapse'], controller: ['$scope', '$element', '$attrs', n.controller], link: function (e, t, n, a) { const o = a[0]; const i = a[1]; o && (i.$viewChangeListeners.push(function () { o.$setViewValue(i.$activeIndexes()) }), o.$formatters.push(function (e) { if (angular.isArray(e))i.$setActive(e); else { const t = i.$activeIndexes(); angular.isArray(t) ? t.indexOf(1 * e) === -1 && i.$setActive(1 * e) : t !== 1 * e && i.$setActive(1 * e) } return e })) } } }]).directive('bsCollapseToggle', function () { return { require: ['^?ngModel', '^bsCollapse'], link: function (e, t, n, a) { const o = (a[0], a[1]); t.attr('data-toggle', 'collapse'), o.$registerToggle(t), e.$on('$destroy', function () { o.$unregisterToggle(t) }), t.on('click', function () { const a = n.bsCollapseToggle || o.$toggles.indexOf(t); o.$setActive(1 * a), e.$apply() }) } } }).directive('bsCollapseTarget', ['$animate', function (e) { return { require: ['^?ngModel', '^bsCollapse'], link: function (t, n, a, o) { function i () { const t = r.$targets.indexOf(n); const a = r.$activeIndexes(); let o = 'removeClass'; angular.isArray(a) ? a.indexOf(t) !== -1 && (o = 'addClass') : t === a && (o = 'addClass'), e[o](n, r.$options.activeClass) } var r = (o[0], o[1]); n.addClass('collapse'), r.$options.animation && n.addClass(r.$options.animation), r.$registerTarget(n), t.$on('$destroy', function () { r.$unregisterTarget(n) }), r.$viewChangeListeners.push(function () { i() }), i() } } }]), angular.module('mgcrea.ngStrap.datepicker', ['mgcrea.ngStrap.helpers.dateParser', 'mgcrea.ngStrap.helpers.dateFormatter', 'mgcrea.ngStrap.tooltip']).provider('$datepicker', function () { const e = this.defaults = { animation: 'am-fade', prefixClass: 'datepicker', placement: 'bottom-left', template: 'datepicker/datepicker.tpl.html', trigger: 'focus', container: !1, keyboard: !0, html: !1, delay: 0, useNative: !1, dateType: 'date', dateFormat: 'shortDate', timezone: null, modelDateFormat: null, dayFormat: 'dd', monthFormat: 'MMM', yearFormat: 'yyyy', monthTitleFormat: 'MMMM yyyy', yearTitleFormat: 'yyyy', strictFormat: !1, autoclose: !1, minDate: -1 / 0, maxDate: +1 / 0, startView: 0, minView: 0, startWeek: 0, daysOfWeekDisabled: '', iconLeft: '&laquo;', iconRight: '&raquo;' }; this.$get = ['$window', '$document', '$rootScope', '$sce', '$dateFormatter', 'datepickerViews', '$tooltip', '$timeout', function (t, n, a, o, i, r, s, l) { function u (t, n, a) { function o (e) { e.selected = u.$isSelected(e.date) } function i () { t[0].focus() } var u = s(t, angular.extend({}, e, a)); const f = a.scope; const p = u.$options; const g = u.$scope; p.startView && (p.startView -= p.minView); const m = r(u); u.$views = m.views; const $ = m.viewDate; g.$mode = p.startView, g.$iconLeft = p.iconLeft, g.$iconRight = p.iconRight; let h = u.$views[g.$mode]; g.$select = function (e) { u.select(e) }, g.$selectPane = function (e) { u.$selectPane(e) }, g.$toggleMode = function () { u.setMode((g.$mode + 1) % u.$views.length) }, u.update = function (e) { angular.isDate(e) && !isNaN(e.getTime()) && (u.$date = e, h.update.call(h, e)), u.$build(!0) }, u.updateDisabledDates = function (e) { p.disabledDateRanges = e; for (let t = 0, n = g.rows.length; n > t; t++)angular.forEach(g.rows[t], u.$setDisabledEl) }, u.select = function (e, t) { angular.isDate(n.$dateValue) || (n.$dateValue = new Date(e)), !g.$mode || t ? (n.$setViewValue(angular.copy(e)), n.$render(), p.autoclose && !t && l(function () { u.hide(!0) })) : (angular.extend($, { year: e.getFullYear(), month: e.getMonth(), date: e.getDate() }), u.setMode(g.$mode - 1), u.$build()) }, u.setMode = function (e) { g.$mode = e, h = u.$views[g.$mode], u.$build() }, u.$build = function (e) { e === !0 && h.built || (e !== !1 || h.built) && h.build.call(h) }, u.$updateSelected = function () { for (let e = 0, t = g.rows.length; t > e; e++)angular.forEach(g.rows[e], o) }, u.$isSelected = function (e) { return h.isSelected(e) }, u.$setDisabledEl = function (e) { e.disabled = h.isDisabled(e.date) }, u.$selectPane = function (e) { const t = h.steps; const n = new Date(Date.UTC($.year + (t.year || 0) * e, $.month + (t.month || 0) * e, 1)); angular.extend($, { year: n.getUTCFullYear(), month: n.getUTCMonth(), date: n.getUTCDate() }), u.$build() }, u.$onMouseDown = function (e) { if (e.preventDefault(), e.stopPropagation(), d) { let t = angular.element(e.target); t[0].nodeName.toLowerCase() !== 'button' && (t = t.parent()), t.triggerHandler('click') } }, u.$onKeyDown = function (e) { if (/(38|37|39|40|13)/.test(e.keyCode) && !e.shiftKey && !e.altKey) { if (e.preventDefault(), e.stopPropagation(), e.keyCode === 13) return g.$mode ? g.$apply(function () { u.setMode(g.$mode - 1) }) : u.hide(!0); h.onKeyDown(e), f.$digest() } }; const v = u.init; u.init = function () { return c && p.useNative ? (t.prop('type', 'date'), void t.css('-webkit-appearance', 'textfield')) : (d && (t.prop('type', 'text'), t.attr('readonly', 'true'), t.on('click', i)), void v()) }; const y = u.destroy; u.destroy = function () { c && p.useNative && t.off('click', i), y() }; const w = u.show; u.show = function () { w(), l(function () { u.$isShown && (u.$element.on(d ? 'touchstart' : 'mousedown', u.$onMouseDown), p.keyboard && t.on('keydown', u.$onKeyDown)) }, 0, !1) }; const b = u.hide; return u.hide = function (e) { u.$isShown && (u.$element.off(d ? 'touchstart' : 'mousedown', u.$onMouseDown), p.keyboard && t.off('keydown', u.$onKeyDown), b(e)) }, u } var c = (angular.element(t.document.body), /(ip(a|o)d|iphone|android)/gi.test(t.navigator.userAgent)); var d = 'createTouch' in t.document && c; return e.lang || (e.lang = i.getDefaultLocale()), u.defaults = e, u }] }).directive('bsDatepicker', ['$window', '$parse', '$q', '$dateFormatter', '$dateParser', '$datepicker', function (e, t, n, a, o, i) { const r = (i.defaults, /(ip(a|o)d|iphone|android)/gi.test(e.navigator.userAgent)); return { restrict: 'EAC', require: 'ngModel', link: function (e, t, n, s) { function l (e) { return e && e.length ? e : null } function u (e) { if (angular.isDate(e)) { const t = isNaN(f.$options.minDate) || e.getTime() >= f.$options.minDate; const n = isNaN(f.$options.maxDate) || e.getTime() <= f.$options.maxDate; const a = t && n; s.$setValidity('date', a), s.$setValidity('min', t), s.$setValidity('max', n), a && (s.$dateValue = e) } } function c () { return !s.$dateValue || isNaN(s.$dateValue.getTime()) ? '' : g(s.$dateValue, d.dateFormat) } var d = { scope: e, controller: s }; angular.forEach(['placement', 'container', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'template', 'autoclose', 'dateType', 'dateFormat', 'timezone', 'modelDateFormat', 'dayFormat', 'strictFormat', 'startWeek', 'startDate', 'useNative', 'lang', 'startView', 'minView', 'iconLeft', 'iconRight', 'daysOfWeekDisabled', 'id'], function (e) { angular.isDefined(n[e]) && (d[e] = n[e]) }), n.bsShow && e.$watch(n.bsShow, function (e) { f && angular.isDefined(e) && (angular.isString(e) && (e = !!e.match(/true|,?(datepicker),?/i)), e === !0 ? f.show() : f.hide()) }); var f = i(t, s, d); d = f.$options, r && d.useNative && (d.dateFormat = 'yyyy-MM-dd'); const p = d.lang; var g = function (e, t) { return a.formatDate(e, t, p) }; const m = o({ format: d.dateFormat, lang: p, strict: d.strictFormat }); angular.forEach(['minDate', 'maxDate'], function (e) { angular.isDefined(n[e]) && n.$observe(e, function (t) { f.$options[e] = m.getDateForAttribute(e, t), !isNaN(f.$options[e]) && f.$build(!1), u(s.$dateValue) }) }), e.$watch(n.ngModel, function () { f.update(s.$dateValue) }, !0), angular.isDefined(n.disabledDates) && e.$watch(n.disabledDates, function (e, t) { e = l(e), t = l(t), e && f.updateDisabledDates(e) }), s.$parsers.unshift(function (e) { let t; if (!e) return s.$setValidity('date', !0), null; const n = m.parse(e, s.$dateValue); return !n || isNaN(n.getTime()) ? void s.$setValidity('date', !1) : (u(n), d.dateType === 'string' ? (t = m.timezoneOffsetAdjust(n, d.timezone, !0), g(t, d.modelDateFormat || d.dateFormat)) : (t = m.timezoneOffsetAdjust(s.$dateValue, d.timezone, !0), d.dateType === 'number' ? t.getTime() : d.dateType === 'unix' ? t.getTime() / 1e3 : d.dateType === 'iso' ? t.toISOString() : new Date(t))) }), s.$formatters.push(function (e) { let t; return t = angular.isUndefined(e) || e === null ? 0 / 0 : angular.isDate(e) ? e : d.dateType === 'string' ? m.parse(e, null, d.modelDateFormat) : new Date(d.dateType === 'unix' ? 1e3 * e : e), s.$dateValue = m.timezoneOffsetAdjust(t, d.timezone), c() }), s.$render = function () { t.val(c()) }, e.$on('$destroy', function () { f && f.destroy(), d = null, f = null }) } } }]).provider('datepickerViews', function () { function e (e, t) { for (var n = []; e.length > 0;)n.push(e.splice(0, t)); return n } function t (e, t) { return (e % t + t) % t } this.defaults = { dayFormat: 'dd', daySplit: 7 }; this.$get = ['$dateFormatter', '$dateParser', '$sce', function (n, a, o) { return function (i) { const r = i.$scope; const s = i.$options; const l = s.lang; const u = function (e, t) { return n.formatDate(e, t, l) }; const c = a({ format: s.dateFormat, lang: l, strict: s.strictFormat }); const d = n.weekdaysShort(l); const f = d.slice(s.startWeek).concat(d.slice(0, s.startWeek)); const p = o.trustAsHtml('<th class="dow text-center">' + f.join('</th><th class="dow text-center">') + '</th>'); const g = i.$date || (s.startDate ? c.getDateForAttribute('startDate', s.startDate) : new Date()); const m = { year: g.getFullYear(), month: g.getMonth(), date: g.getDate() }; const $ = [{ format: s.dayFormat, split: 7, steps: { month: 1 }, update: function (e, t) { !this.built || t || e.getFullYear() !== m.year || e.getMonth() !== m.month ? (angular.extend(m, { year: i.$date.getFullYear(), month: i.$date.getMonth(), date: i.$date.getDate() }), i.$build()) : e.getDate() !== m.date && (m.date = i.$date.getDate(), i.$updateSelected()) }, build: function () { const n = new Date(m.year, m.month, 1); const a = n.getTimezoneOffset(); let o = new Date(+n - 864e5 * t(n.getDay() - s.startWeek, 7)); const l = o.getTimezoneOffset(); const d = c.timezoneOffsetAdjust(new Date(), s.timezone).toDateString(); l !== a && (o = new Date(+o + 6e4 * (l - a))); for (var f, g = [], $ = 0; $ < 42; $++)f = c.daylightSavingAdjust(new Date(o.getFullYear(), o.getMonth(), o.getDate() + $)), g.push({ date: f, isToday: f.toDateString() === d, label: u(f, this.format), selected: i.$date && this.isSelected(f), muted: f.getMonth() !== m.month, disabled: this.isDisabled(f) }); r.title = u(n, s.monthTitleFormat), r.showLabels = !0, r.labels = p, r.rows = e(g, this.split), this.built = !0 }, isSelected: function (e) { return i.$date && e.getFullYear() === i.$date.getFullYear() && e.getMonth() === i.$date.getMonth() && e.getDate() === i.$date.getDate() }, isDisabled: function (e) { const t = e.getTime(); if (t < s.minDate || t > s.maxDate) return !0; if (s.daysOfWeekDisabled.indexOf(e.getDay()) !== -1) return !0; if (s.disabledDateRanges) for (let n = 0; n < s.disabledDateRanges.length; n++) if (t >= s.disabledDateRanges[n].start && t <= s.disabledDateRanges[n].end) return !0; return !1 }, onKeyDown: function (e) { if (i.$date) { let t; const n = i.$date.getTime(); e.keyCode === 37 ? t = new Date(n - 864e5) : e.keyCode === 38 ? t = new Date(n - 6048e5) : e.keyCode === 39 ? t = new Date(n + 864e5) : e.keyCode === 40 && (t = new Date(n + 6048e5)), this.isDisabled(t) || i.select(t, !0) } } }, { name: 'month', format: s.monthFormat, split: 4, steps: { year: 1 }, update: function (e) { this.built && e.getFullYear() === m.year ? e.getMonth() !== m.month && (angular.extend(m, { month: i.$date.getMonth(), date: i.$date.getDate() }), i.$updateSelected()) : (angular.extend(m, { year: i.$date.getFullYear(), month: i.$date.getMonth(), date: i.$date.getDate() }), i.$build()) }, build: function () { for (var t, n = (new Date(m.year, 0, 1), []), a = 0; a < 12; a++)t = new Date(m.year, a, 1), n.push({ date: t, label: u(t, this.format), selected: i.$isSelected(t), disabled: this.isDisabled(t) }); r.title = u(t, s.yearTitleFormat), r.showLabels = !1, r.rows = e(n, this.split), this.built = !0 }, isSelected: function (e) { return i.$date && e.getFullYear() === i.$date.getFullYear() && e.getMonth() === i.$date.getMonth() }, isDisabled: function (e) { const t = +new Date(e.getFullYear(), e.getMonth() + 1, 0); return t < s.minDate || e.getTime() > s.maxDate }, onKeyDown: function (e) { if (i.$date) { const t = i.$date.getMonth(); const n = new Date(i.$date); e.keyCode === 37 ? n.setMonth(t - 1) : e.keyCode === 38 ? n.setMonth(t - 4) : e.keyCode === 39 ? n.setMonth(t + 1) : e.keyCode === 40 && n.setMonth(t + 4), this.isDisabled(n) || i.select(n, !0) } } }, { name: 'year', format: s.yearFormat, split: 4, steps: { year: 12 }, update: function (e, t) { !this.built || t || parseInt(e.getFullYear() / 20, 10) !== parseInt(m.year / 20, 10) ? (angular.extend(m, { year: i.$date.getFullYear(), month: i.$date.getMonth(), date: i.$date.getDate() }), i.$build()) : e.getFullYear() !== m.year && (angular.extend(m, { year: i.$date.getFullYear(), month: i.$date.getMonth(), date: i.$date.getDate() }), i.$updateSelected()) }, build: function () { for (var t, n = m.year - m.year % (3 * this.split), a = [], o = 0; o < 12; o++)t = new Date(n + o, 0, 1), a.push({ date: t, label: u(t, this.format), selected: i.$isSelected(t), disabled: this.isDisabled(t) }); r.title = a[0].label + '-' + a[a.length - 1].label, r.showLabels = !1, r.rows = e(a, this.split), this.built = !0 }, isSelected: function (e) { return i.$date && e.getFullYear() === i.$date.getFullYear() }, isDisabled: function (e) { const t = +new Date(e.getFullYear() + 1, 0, 0); return t < s.minDate || e.getTime() > s.maxDate }, onKeyDown: function (e) { if (i.$date) { const t = i.$date.getFullYear(); const n = new Date(i.$date); e.keyCode === 37 ? n.setYear(t - 1) : e.keyCode === 38 ? n.setYear(t - 4) : e.keyCode === 39 ? n.setYear(t + 1) : e.keyCode === 40 && n.setYear(t + 4), this.isDisabled(n) || i.select(n, !0) } } }]; return { views: s.minView ? Array.prototype.slice.call($, s.minView) : $, viewDate: m } } }] }), angular.module('mgcrea.ngStrap.dropdown', ['mgcrea.ngStrap.tooltip']).provider('$dropdown', function () { const e = this.defaults = { animation: 'am-fade', prefixClass: 'dropdown', prefixEvent: 'dropdown', placement: 'bottom-left', template: 'dropdown/dropdown.tpl.html', trigger: 'click', container: !1, keyboard: !0, html: !1, delay: 0 }; this.$get = ['$window', '$rootScope', '$tooltip', '$timeout', function (t, n, a, o) { function i (t, i) { function l (e) { return e.target !== t[0] ? e.target !== t[0] && u.hide() : void 0 } { var u = {}; var c = angular.extend({}, e, i); u.$scope = c.scope && c.scope.$new() || n.$new() }u = a(t, c); const d = t.parent(); u.$onKeyDown = function (e) { if (/(38|40)/.test(e.keyCode)) { e.preventDefault(), e.stopPropagation(); const t = angular.element(u.$element[0].querySelectorAll('li:not(.divider) a')); if (t.length) { let n; angular.forEach(t, function (e, t) { s && s.call(e, ':focus') && (n = t) }), e.keyCode === 38 && n > 0 ? n-- : e.keyCode === 40 && n < t.length - 1 ? n++ : angular.isUndefined(n) && (n = 0), t.eq(n)[0].focus() } } }; const f = u.show; u.show = function () { f(), o(function () { c.keyboard && u.$element.on('keydown', u.$onKeyDown), r.on('click', l) }, 0, !1), d.hasClass('dropdown') && d.addClass('open') }; const p = u.hide; u.hide = function () { u.$isShown && (c.keyboard && u.$element.off('keydown', u.$onKeyDown), r.off('click', l), d.hasClass('dropdown') && d.removeClass('open'), p()) }; const g = u.destroy; return u.destroy = function () { r.off('click', l), g() }, u } var r = angular.element(t.document.body); var s = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector; return i }] }).directive('bsDropdown', ['$window', '$sce', '$dropdown', function (e, t, n) { return { restrict: 'EAC', scope: !0, link: function (e, t, a) { let o = { scope: e }; angular.forEach(['placement', 'container', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'template', 'id'], function (e) { angular.isDefined(a[e]) && (o[e] = a[e]) }), a.bsDropdown && e.$watch(a.bsDropdown, function (t) { e.content = t }, !0), a.bsShow && e.$watch(a.bsShow, function (e) { i && angular.isDefined(e) && (angular.isString(e) && (e = !!e.match(/true|,?(dropdown),?/i)), e === !0 ? i.show() : i.hide()) }); var i = n(t, o); e.$on('$destroy', function () { i && i.destroy(), o = null, i = null }) } } }]), angular.module('mgcrea.ngStrap.helpers.dateFormatter', []).service('$dateFormatter', ['$locale', 'dateFilter', function (e, t) { function n (e) { return /(h+)([:\.])?(m+)[ ]?(a?)/i.exec(e).slice(1) } this.getDefaultLocale = function () { return e.id }, this.getDatetimeFormat = function (t) { return e.DATETIME_FORMATS[t] || t }, this.weekdaysShort = function () { return e.DATETIME_FORMATS.SHORTDAY }, this.hoursFormat = function (e) { return n(e)[0] }, this.minutesFormat = function (e) { return n(e)[2] }, this.timeSeparator = function (e) { return n(e)[1] }, this.showAM = function (e) { return !!n(e)[3] }, this.formatDate = function (e, n, a, o) { return t(e, n, o) } }]), angular.module('mgcrea.ngStrap.helpers.dateParser', []).provider('$dateParser', ['$localeProvider', function () { function e () { this.year = 1970, this.month = 0, this.day = 1, this.hours = 0, this.minutes = 0, this.seconds = 0, this.milliseconds = 0 } function t () {} function n (e) { return !isNaN(parseFloat(e)) && isFinite(e) } function a (e, t) { for (let n = e.length, a = t.toString().toLowerCase(), o = 0; n > o; o++) if (e[o].toLowerCase() === a) return o; return -1 }e.prototype.setMilliseconds = function (e) { this.milliseconds = e }, e.prototype.setSeconds = function (e) { this.seconds = e }, e.prototype.setMinutes = function (e) { this.minutes = e }, e.prototype.setHours = function (e) { this.hours = e }, e.prototype.getHours = function () { return this.hours }, e.prototype.setDate = function (e) { this.day = e }, e.prototype.setMonth = function (e) { this.month = e }, e.prototype.setFullYear = function (e) { this.year = e }, e.prototype.fromDate = function (e) { return this.year = e.getFullYear(), this.month = e.getMonth(), this.day = e.getDate(), this.hours = e.getHours(), this.minutes = e.getMinutes(), this.seconds = e.getSeconds(), this.milliseconds = e.getMilliseconds(), this }, e.prototype.toDate = function () { return new Date(this.year, this.month, this.day, this.hours, this.minutes, this.seconds, this.milliseconds) }; const o = e.prototype; const i = this.defaults = { format: 'shortDate', strict: !1 }; this.$get = ['$locale', 'dateFilter', function (r, s) { const l = function (l) { function u (e) { let t; const n = Object.keys(h); const a = []; const o = []; const i = e; for (t = 0; t < n.length; t++) if (e.split(n[t]).length > 1) { const r = i.search(n[t]); e = e.split(n[t]).join(''), h[n[t]] && (a[r] = h[n[t]]) } return angular.forEach(a, function (e) { e && o.push(e) }), o } function c (e) { return e.replace(/\//g, '[\\/]').replace('/-/g', '[-]').replace(/\./g, '[.]').replace(/\\s/g, '[\\s]') } function d (e) { let t; const n = Object.keys($); let a = e; for (t = 0; t < n.length; t++)a = a.split(n[t]).join('${' + t + '}'); for (t = 0; t < n.length; t++)a = a.split('${' + t + '}').join('(' + $[n[t]] + ')'); return e = c(e), new RegExp('^' + a + '$', ['i']) } let f; let p; const g = angular.extend({}, i, l); const m = {}; var $ = { sss: '[0-9]{3}', ss: '[0-5][0-9]', s: g.strict ? '[1-5]?[0-9]' : '[0-9]|[0-5][0-9]', mm: '[0-5][0-9]', m: g.strict ? '[1-5]?[0-9]' : '[0-9]|[0-5][0-9]', HH: '[01][0-9]|2[0-3]', H: g.strict ? '1?[0-9]|2[0-3]' : '[01]?[0-9]|2[0-3]', hh: '[0][1-9]|[1][012]', h: g.strict ? '[1-9]|1[012]' : '0?[1-9]|1[012]', a: 'AM|PM', EEEE: r.DATETIME_FORMATS.DAY.join('|'), EEE: r.DATETIME_FORMATS.SHORTDAY.join('|'), dd: '0[1-9]|[12][0-9]|3[01]', d: g.strict ? '[1-9]|[1-2][0-9]|3[01]' : '0?[1-9]|[1-2][0-9]|3[01]', MMMM: r.DATETIME_FORMATS.MONTH.join('|'), MMM: r.DATETIME_FORMATS.SHORTMONTH.join('|'), MM: '0[1-9]|1[012]', M: g.strict ? '[1-9]|1[012]' : '0?[1-9]|1[012]', yyyy: '[1]{1}[0-9]{3}|[2]{1}[0-9]{3}', yy: '[0-9]{2}', y: g.strict ? '-?(0|[1-9][0-9]{0,3})' : '-?0*[0-9]{1,4}' }; var h = { sss: o.setMilliseconds, ss: o.setSeconds, s: o.setSeconds, mm: o.setMinutes, m: o.setMinutes, HH: o.setHours, H: o.setHours, hh: o.setHours, h: o.setHours, EEEE: t, EEE: t, dd: o.setDate, d: o.setDate, a: function (e) { const t = this.getHours() % 12; return this.setHours(e.match(/pm/i) ? t + 12 : t) }, MMMM: function (e) { return this.setMonth(a(r.DATETIME_FORMATS.MONTH, e)) }, MMM: function (e) { return this.setMonth(a(r.DATETIME_FORMATS.SHORTMONTH, e)) }, MM: function (e) { return this.setMonth(1 * e - 1) }, M: function (e) { return this.setMonth(1 * e - 1) }, yyyy: o.setFullYear, yy: function (e) { return this.setFullYear(2e3 + 1 * e) }, y: o.setFullYear }; return m.init = function () { m.$format = r.DATETIME_FORMATS[g.format] || g.format, f = d(m.$format), p = u(m.$format) }, m.isValid = function (e) { return angular.isDate(e) ? !isNaN(e.getTime()) : f.test(e) }, m.parse = function (t, n, a, o) { a && (a = r.DATETIME_FORMATS[a] || a), angular.isDate(t) && (t = s(t, a || m.$format, o)); const i = a ? d(a) : f; const l = a ? u(a) : p; const c = i.exec(t); if (!c) return !1; for (var g = (new e()).fromDate(n && !isNaN(n.getTime()) ? n : new Date(1970, 0, 1, 0)), $ = 0; $ < c.length - 1; $++)l[$] && l[$].call(g, c[$ + 1]); const h = g.toDate(); return parseInt(g.day, 10) !== h.getDate() ? !1 : h }, m.getDateForAttribute = function (e, t) { let a; if (t === 'today') { const o = new Date(); a = new Date(o.getFullYear(), o.getMonth(), o.getDate() + (e === 'maxDate' ? 1 : 0), 0, 0, 0, e === 'minDate' ? 0 : -1) } else a = angular.isString(t) && t.match(/^".+"$/) ? new Date(t.substr(1, t.length - 2)) : n(t) ? new Date(parseInt(t, 10)) : angular.isString(t) && t.length === 0 ? e === 'minDate' ? -1 / 0 : +1 / 0 : new Date(t); return a }, m.getTimeForAttribute = function (e, t) { let a; return a = t === 'now' ? (new Date()).setFullYear(1970, 0, 1) : angular.isString(t) && t.match(/^".+"$/) ? new Date(t.substr(1, t.length - 2)).setFullYear(1970, 0, 1) : n(t) ? new Date(parseInt(t, 10)).setFullYear(1970, 0, 1) : angular.isString(t) && t.length === 0 ? e === 'minTime' ? -1 / 0 : +1 / 0 : m.parse(t, new Date(1970, 0, 1, 0)) }, m.daylightSavingAdjust = function (e) { return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null }, m.timezoneOffsetAdjust = function (e, t, n) { return e ? (t && t === 'UTC' && (e = new Date(e.getTime()), e.setMinutes(e.getMinutes() + (n ? -1 : 1) * e.getTimezoneOffset())), e) : null }, m.init(), m }; return l }] }]), angular.module('mgcrea.ngStrap.helpers.debounce', []).factory('debounce', ['$timeout', function (e) { return function (t, n, a) { let o = null; return function () { const i = this; const r = arguments; const s = a && !o; return o && e.cancel(o), o = e(function () { o = null, a || t.apply(i, r) }, n, !1), s && t.apply(i, r), o } } }]).factory('throttle', ['$timeout', function (e) { return function (t, n, a) { let o = null; return a || (a = {}), function () { const i = this; const r = arguments; o || (a.leading !== !1 && t.apply(i, r), o = e(function () { o = null, a.trailing !== !1 && t.apply(i, r) }, n, !1)) } } }]), angular.module('mgcrea.ngStrap.helpers.dimensions', []).factory('dimensions', ['$document', '$window', function () {
    const t = (angular.element, {}); const n = t.nodeName = function (e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }; t.css = function (t, n, a) { let o; return o = t.currentStyle ? t.currentStyle[n] : e.getComputedStyle ? e.getComputedStyle(t)[n] : t.style[n], a === !0 ? parseFloat(o) || 0 : o }, t.offset = function (t) { const n = t.getBoundingClientRect(); const a = t.ownerDocument; return { width: n.width || t.offsetWidth, height: n.height || t.offsetHeight, top: n.top + (e.pageYOffset || a.documentElement.scrollTop) - (a.documentElement.clientTop || 0), left: n.left + (e.pageXOffset || a.documentElement.scrollLeft) - (a.documentElement.clientLeft || 0) } }, t.setOffset = function (e, n, a) { let o; let i; let r; let s; let l; let u; let c; const d = t.css(e, 'position'); const f = angular.element(e); const p = {}; d === 'static' && (e.style.position = 'relative'), l = t.offset(e), r = t.css(e, 'top'), u = t.css(e, 'left'), c = (d === 'absolute' || d === 'fixed') && (r + u).indexOf('auto') > -1, c ? (o = t.position(e), s = o.top, i = o.left) : (s = parseFloat(r) || 0, i = parseFloat(u) || 0), angular.isFunction(n) && (n = n.call(e, a, l)), n.top !== null && (p.top = n.top - l.top + s), n.left !== null && (p.left = n.left - l.left + i), 'using' in n ? n.using.call(f, p) : f.css({ top: p.top + 'px', left: p.left + 'px' }) }, t.position = function (e) { let o; let i; let r = { top: 0, left: 0 }; return t.css(e, 'position') === 'fixed' ? i = e.getBoundingClientRect() : (o = a(e), i = t.offset(e), n(o, 'html') || (r = t.offset(o)), r.top += t.css(o, 'borderTopWidth', !0), r.left += t.css(o, 'borderLeftWidth', !0)), { width: e.offsetWidth, height: e.offsetHeight, top: i.top - r.top - t.css(e, 'marginTop', !0), left: i.left - r.left - t.css(e, 'marginLeft', !0) } }; var a = function (e) { const a = e.ownerDocument; let o = e.offsetParent || a; if (n(o, '#document')) return a.documentElement; for (;o && !n(o, 'html') && t.css(o, 'position') === 'static';)o = o.offsetParent; return o || a.documentElement }; return t.height = function (e, n) {
      let a = e.offsetHeight; return n ? a += t.css(e, 'marginTop', !0) + t.css(e, 'marginBottom', !0) : a -= t.css(e, 'paddingTop', !0) + t.css(e, 'paddingBottom', !0) + t.css(e, 'borderTopWidth', !0) + t.css(e, 'borderBottomWidth', !0), a
    }, t.width = function (e, n) { let a = e.offsetWidth; return n ? a += t.css(e, 'marginLeft', !0) + t.css(e, 'marginRight', !0) : a -= t.css(e, 'paddingLeft', !0) + t.css(e, 'paddingRight', !0) + t.css(e, 'borderLeftWidth', !0) + t.css(e, 'borderRightWidth', !0), a }, t
  }]), angular.module('mgcrea.ngStrap.helpers.parseOptions', []).provider('$parseOptions', function () { const e = this.defaults = { regexp: /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/ }; this.$get = ['$parse', '$q', function (t, n) { function a (a, o) { function i (e, t) { return e.map(function (e, n) { let a; let o; const i = {}; return i[c] = e, a = u(t, i), o = p(t, i), { label: a, value: o, index: n } }) } const r = {}; const s = angular.extend({}, e, o); r.$values = []; let l, u, c, d, f, p, g; return r.init = function () { r.$match = l = a.match(s.regexp), u = t(l[2] || l[1]), c = l[4] || l[6], d = l[5], f = t(l[3] || ''), p = t(l[2] ? l[1] : c), g = t(l[7]) }, r.valuesFn = function (e, t) { return n.when(g(e, t)).then(function (t) { return r.$values = t ? i(t, e) : {}, r.$values }) }, r.displayValue = function (e) { const t = {}; return t[c] = e, u(t) }, r.init(), r } return a }] }), angular.version.minor < 3 && angular.version.dot < 14 && angular.module('ng').factory('$$rAF', ['$window', '$timeout', function (e, t) { const n = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame; const a = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.webkitCancelRequestAnimationFrame; const o = !!n; const i = o ? function (e) { const t = n(e); return function () { a(t) } } : function (e) { const n = t(e, 16.66, !1); return function () { t.cancel(n) } }; return i.supported = o, i }]), angular.module('mgcrea.ngStrap.modal', ['mgcrea.ngStrap.helpers.dimensions']).provider('$modal', function () { const e = this.defaults = { animation: 'am-fade', backdropAnimation: 'am-fade', prefixClass: 'modal', prefixEvent: 'modal', placement: 'top', template: 'modal/modal.tpl.html', contentTemplate: !1, container: !1, element: null, backdrop: !0, keyboard: !0, html: !1, show: !0 }; this.$get = ['$window', '$rootScope', '$compile', '$q', '$templateCache', '$http', '$animate', '$timeout', '$sce', 'dimensions', function (n, a, o, i, r, s, l, u, c) { function d (t) { function n () { w.$emit(d.prefixEvent + '.show', u) } function i () { w.$emit(d.prefixEvent + '.hide', u), v.removeClass(d.prefixClass + '-open'), d.animation && v.removeClass(d.prefixClass + '-with-' + d.animation) } function r (e) { e.target === e.currentTarget && (d.backdrop === 'static' ? u.focus() : u.hide()) } function s (e) { e.preventDefault() } var u = {}; var d = u.$options = angular.extend({}, e, t); u.$promise = g(d.template); var w = u.$scope = d.scope && d.scope.$new() || a.$new(); d.element || d.container || (d.container = 'body'), u.$id = d.id || d.element && d.element.attr('id') || '', m(['title', 'content'], function (e) { d[e] && (w[e] = c.trustAsHtml(d[e])) }), w.$hide = function () { w.$$postDigest(function () { u.hide() }) }, w.$show = function () { w.$$postDigest(function () { u.show() }) }, w.$toggle = function () { w.$$postDigest(function () { u.toggle() }) }, u.$isShown = w.$isShown = !1, d.contentTemplate && (u.$promise = u.$promise.then(function (e) { const n = angular.element(e); return g(d.contentTemplate).then(function (e) { const a = p('[ng-bind="content"]', n[0]).removeAttr('ng-bind').html(e); return t.template || a.next().remove(), n[0].outerHTML }) })); let b; let D; let k = angular.element('<div class="' + d.prefixClass + '-backdrop"/>'); return k.css({ position: 'fixed', top: '0px', left: '0px', bottom: '0px', right: '0px', 'z-index': 1038 }), u.$promise.then(function (e) { angular.isObject(e) && (e = e.data), d.html && (e = e.replace(y, 'ng-bind-html="')), e = $.apply(e), b = o(e), u.init() }), u.init = function () { d.show && w.$$postDigest(function () { u.show() }) }, u.destroy = function () { D && (D.remove(), D = null), k && (k.remove(), k = null), w.$destroy() }, u.show = function () { if (!u.$isShown) { let e, t; if (angular.isElement(d.container) ? (e = d.container, t = d.container[0].lastChild ? angular.element(d.container[0].lastChild) : null) : d.container ? (e = p(d.container), t = e[0].lastChild ? angular.element(e[0].lastChild) : null) : (e = null, t = d.element), D = u.$element = b(w, function () {}), !w.$emit(d.prefixEvent + '.show.before', u).defaultPrevented) { D.css({ display: 'block' }).addClass(d.placement), d.animation && (d.backdrop && k.addClass(d.backdropAnimation), D.addClass(d.animation)), d.backdrop && l.enter(k, v, null); const a = l.enter(D, e, t, n); a && a.then && a.then(n), u.$isShown = w.$isShown = !0, f(w); const o = D[0]; h(function () { o.focus() }), v.addClass(d.prefixClass + '-open'), d.animation && v.addClass(d.prefixClass + '-with-' + d.animation), d.backdrop && (D.on('click', r), k.on('click', r), k.on('wheel', s)), d.keyboard && D.on('keyup', u.$onKeyUp) } } }, u.hide = function () { if (u.$isShown && !w.$emit(d.prefixEvent + '.hide.before', u).defaultPrevented) { const e = l.leave(D, i); e && e.then && e.then(i), d.backdrop && l.leave(k), u.$isShown = w.$isShown = !1, f(w), d.backdrop && (D.off('click', r), k.off('click', r), k.off('wheel', s)), d.keyboard && D.off('keyup', u.$onKeyUp) } }, u.toggle = function () { u.$isShown ? u.hide() : u.show() }, u.focus = function () { D[0].focus() }, u.$onKeyUp = function (e) { e.which === 27 && u.$isShown && (u.hide(), e.stopPropagation()) }, u } function f (e) { e.$$phase || e.$root && e.$root.$$phase || e.$digest() } function p (e, n) { return angular.element((n || t).querySelectorAll(e)) } function g (e) { return w[e] ? w[e] : w[e] = s.get(e, { cache: r }).then(function (e) { return e.data }) } var m = angular.forEach; var $ = String.prototype.trim; var h = n.requestAnimationFrame || n.setTimeout; var v = angular.element(n.document.body); var y = /ng-bind="/gi; var w = {}; return d }] }).directive('bsModal', ['$window', '$sce', '$modal', function (e, t, n) { return { restrict: 'EAC', scope: !0, link: function (e, a, o) { let i = { scope: e, element: a, show: !1 }; angular.forEach(['template', 'contentTemplate', 'placement', 'container', 'animation', 'id'], function (e) { angular.isDefined(o[e]) && (i[e] = o[e]) }); const r = /^(false|0|)$/; angular.forEach(['keyboard', 'html'], function (e) { angular.isDefined(o[e]) && (i[e] = !r.test(o[e])) }), angular.isDefined(o.backdrop) && (i.backdrop = r.test(o.backdrop) ? !1 : o.backdrop), angular.forEach(['title', 'content'], function (n) { o[n] && o.$observe(n, function (a) { e[n] = t.trustAsHtml(a) }) }), o.bsModal && e.$watch(o.bsModal, function (t) { angular.isObject(t) ? angular.extend(e, t) : e.content = t }, !0); let s = n(i); a.on(o.trigger || 'click', s.toggle), e.$on('$destroy', function () { s && s.destroy(), i = null, s = null }) } } }]), angular.module('mgcrea.ngStrap.navbar', []).provider('$navbar', function () { const e = this.defaults = { activeClass: 'active', routeAttr: 'data-match-route', strict: !1 }; this.$get = function () { return { defaults: e } } }).directive('bsNavbar', ['$window', '$location', '$navbar', function (e, t, n) { const a = n.defaults; return { restrict: 'A', link: function (e, n, o) { const i = angular.copy(a); angular.forEach(Object.keys(a), function (e) { angular.isDefined(o[e]) && (i[e] = o[e]) }), e.$watch(function () { return t.path() }, function (e) { const t = n[0].querySelectorAll('li[' + i.routeAttr + ']'); angular.forEach(t, function (t) { const n = angular.element(t); let a = n.attr(i.routeAttr).replace('/', '\\/'); i.strict && (a = '^' + a + '$'); const o = new RegExp(a, 'i'); o.test(e) ? n.addClass(i.activeClass) : n.removeClass(i.activeClass) }) }) } } }]), angular.module('mgcrea.ngStrap.popover', ['mgcrea.ngStrap.tooltip']).provider('$popover', function () { const e = this.defaults = { animation: 'am-fade', customClass: '', container: !1, target: !1, placement: 'right', template: 'popover/popover.tpl.html', contentTemplate: !1, trigger: 'click', keyboard: !0, html: !1, title: '', content: '', delay: 0, autoClose: !1 }; this.$get = ['$tooltip', function (t) { function n (n, a) { const o = angular.extend({}, e, a); const i = t(n, o); return o.content && (i.$scope.content = o.content), i } return n }] }).directive('bsPopover', ['$window', '$sce', '$popover', function (e, t, n) { const a = e.requestAnimationFrame || e.setTimeout; return { restrict: 'EAC', scope: !0, link: function (e, o, i) { let r = { scope: e }; angular.forEach(['template', 'contentTemplate', 'placement', 'container', 'target', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'customClass', 'autoClose', 'id'], function (e) { angular.isDefined(i[e]) && (r[e] = i[e]) }), angular.forEach(['title', 'content'], function (n) { i[n] && i.$observe(n, function (o, i) { e[n] = t.trustAsHtml(o), angular.isDefined(i) && a(function () { s && s.$applyPlacement() }) }) }), i.bsPopover && e.$watch(i.bsPopover, function (t, n) { angular.isObject(t) ? angular.extend(e, t) : e.content = t, angular.isDefined(n) && a(function () { s && s.$applyPlacement() }) }, !0), i.bsShow && e.$watch(i.bsShow, function (e) { s && angular.isDefined(e) && (angular.isString(e) && (e = !!e.match(/true|,?(popover),?/i)), e === !0 ? s.show() : s.hide()) }), i.viewport && e.$watch(i.viewport, function (e) { s && angular.isDefined(e) && s.setViewport(e) }); var s = n(o, r); e.$on('$destroy', function () { s && s.destroy(), r = null, s = null }) } } }]), angular.module('mgcrea.ngStrap.scrollspy', ['mgcrea.ngStrap.helpers.debounce', 'mgcrea.ngStrap.helpers.dimensions']).provider('$scrollspy', function () { const e = this.$$spies = {}; const n = this.defaults = { debounce: 150, throttle: 100, offset: 100 }; this.$get = ['$window', '$document', '$rootScope', 'dimensions', 'debounce', 'throttle', function (a, o, i, r, s, l) { function u (e, t) { return e[0].nodeName && e[0].nodeName.toLowerCase() === t.toLowerCase() } function c (o) { const c = angular.extend({}, n, o); c.element || (c.element = p); const g = u(c.element, 'body'); const m = g ? d : c.element; const $ = g ? 'window' : c.id; if (e[$]) return e[$].$$count++, e[$]; let h; let v; let y; let w; let b; let D; let k; let S; const x = {}; let T = x.$trackedElements = []; let C = []; return x.init = function () { this.$$count = 1, w = s(this.checkPosition, c.debounce), b = l(this.checkPosition, c.throttle), m.on('click', this.checkPositionWithEventLoop), d.on('resize', w), m.on('scroll', b), D = s(this.checkOffsets, c.debounce), h = i.$on('$viewContentLoaded', D), v = i.$on('$includeContentLoaded', D), D(), $ && (e[$] = x) }, x.destroy = function () { this.$$count--, this.$$count > 0 || (m.off('click', this.checkPositionWithEventLoop), d.off('resize', w), m.off('scroll', b), h(), v(), $ && delete e[$]) }, x.checkPosition = function () { if (C.length) { if (S = (g ? a.pageYOffset : m.prop('scrollTop')) || 0, k = Math.max(a.innerHeight, f.prop('clientHeight')), S < C[0].offsetTop && y !== C[0].target) return x.$activateElement(C[0]); for (let e = C.length; e--;) if (!angular.isUndefined(C[e].offsetTop) && C[e].offsetTop !== null && y !== C[e].target && !(S < C[e].offsetTop || C[e + 1] && S > C[e + 1].offsetTop)) return x.$activateElement(C[e]) } }, x.checkPositionWithEventLoop = function () { setTimeout(x.checkPosition, 1) }, x.$activateElement = function (e) { if (y) { const t = x.$getTrackedElement(y); t && (t.source.removeClass('active'), u(t.source, 'li') && u(t.source.parent().parent(), 'li') && t.source.parent().parent().removeClass('active')) }y = e.target, e.source.addClass('active'), u(e.source, 'li') && u(e.source.parent().parent(), 'li') && e.source.parent().parent().addClass('active') }, x.$getTrackedElement = function (e) { return T.filter(function (t) { return t.target === e })[0] }, x.checkOffsets = function () { angular.forEach(T, function (e) { const n = t.querySelector(e.target); e.offsetTop = n ? r.offset(n).top : null, c.offset && e.offsetTop !== null && (e.offsetTop -= 1 * c.offset) }), C = T.filter(function (e) { return e.offsetTop !== null }).sort(function (e, t) { return e.offsetTop - t.offsetTop }), w() }, x.trackElement = function (e, t) { T.push({ target: e, source: t }) }, x.untrackElement = function (e, t) { for (var n, a = T.length; a--;) if (T[a].target === e && T[a].source === t) { n = a; break }T = T.splice(n, 1) }, x.activate = function (e) { T[e].addClass('active') }, x.init(), x } var d = angular.element(a); var f = angular.element(o.prop('documentElement')); var p = angular.element(a.document.body); return c }] }).directive('bsScrollspy', ['$rootScope', 'debounce', 'dimensions', '$scrollspy', function (e, t, n, a) { return { restrict: 'EAC', link: function (e, t, n) { let o = { scope: e }; angular.forEach(['offset', 'target'], function (e) { angular.isDefined(n[e]) && (o[e] = n[e]) }); let i = a(o); i.trackElement(o.target, t), e.$on('$destroy', function () { i && (i.untrackElement(o.target, t), i.destroy()), o = null, i = null }) } } }]).directive('bsScrollspyList', ['$rootScope', 'debounce', 'dimensions', '$scrollspy', function () { return { restrict: 'A', compile: function (e) { const t = e[0].querySelectorAll('li > a[href]'); angular.forEach(t, function (e) { const t = angular.element(e); t.parent().attr('bs-scrollspy', '').attr('data-target', t.attr('href')) }) } } }]), angular.module('mgcrea.ngStrap.select', ['mgcrea.ngStrap.tooltip', 'mgcrea.ngStrap.helpers.parseOptions']).provider('$select', function () { const e = this.defaults = { animation: 'am-fade', prefixClass: 'select', prefixEvent: '$select', placement: 'bottom-left', template: 'select/select.tpl.html', trigger: 'focus', container: !1, keyboard: !0, html: !1, delay: 0, multiple: !1, allNoneButtons: !1, sort: !0, caretHtml: '&nbsp;<span class="caret"></span>', placeholder: 'Choose among the following...', allText: 'All', noneText: 'None', maxLength: 3, maxLengthHtml: 'selected', iconCheckmark: 'glyphicon glyphicon-ok' }; this.$get = ['$window', '$document', '$rootScope', '$tooltip', '$timeout', function (t, n, a, o, i) { function r (t, n, a) { let r = {}; const s = angular.extend({}, e, a); s.sort = s.sort.toString().match(/true|1/i), r = o(t, s); const u = r.$scope; u.$matches = [], u.$activeIndex = -1, u.$isMultiple = s.multiple, u.$showAllNoneButtons = s.allNoneButtons && s.multiple, u.$iconCheckmark = s.iconCheckmark, u.$allText = s.allText, u.$noneText = s.noneText, u.$activate = function (e) { u.$$postDigest(function () { r.activate(e) }) }, u.$select = function (e) { u.$$postDigest(function () { r.select(e) }) }, u.$isVisible = function () { return r.$isVisible() }, u.$isActive = function (e) { return r.$isActive(e) }, u.$selectAll = function () { for (let e = 0; e < u.$matches.length; e++)u.$isActive(e) || u.$select(e) }, u.$selectNone = function () { for (let e = 0; e < u.$matches.length; e++)u.$isActive(e) && u.$select(e) }, r.update = function (e) { u.$matches = e, r.$updateActiveIndex() }, r.activate = function (e) { return s.multiple ? (r.$isActive(e) ? u.$activeIndex.splice(u.$activeIndex.indexOf(e), 1) : u.$activeIndex.push(e), s.sort && u.$activeIndex.sort()) : u.$activeIndex = e, u.$activeIndex }, r.select = function (e) { const t = u.$matches[e].value; u.$apply(function () { r.activate(e), s.multiple ? n.$setViewValue(u.$activeIndex.map(function (e) { return u.$matches[e].value })) : (n.$setViewValue(t), r.hide()) }), u.$emit(s.prefixEvent + '.select', t, e, r) }, r.$updateActiveIndex = function () { n.$modelValue && u.$matches.length ? u.$activeIndex = s.multiple && angular.isArray(n.$modelValue) ? n.$modelValue.map(function (e) { return r.$getIndex(e) }) : r.$getIndex(n.$modelValue) : u.$activeIndex >= u.$matches.length && (u.$activeIndex = s.multiple ? [] : 0) }, r.$isVisible = function () { return s.minLength && n ? u.$matches.length && n.$viewValue.length >= s.minLength : u.$matches.length }, r.$isActive = function (e) { return s.multiple ? u.$activeIndex.indexOf(e) !== -1 : u.$activeIndex === e }, r.$getIndex = function (e) { const t = u.$matches.length; let n = t; if (t) { for (n = t; n-- && u.$matches[n].value !== e;);if (!(n < 0)) return n } }, r.$onMouseDown = function (e) { if (e.preventDefault(), e.stopPropagation(), l) { const t = angular.element(e.target); t.triggerHandler('click') } }, r.$onKeyDown = function (e) { return /(9|13|38|40)/.test(e.keyCode) ? (e.preventDefault(), e.stopPropagation(), s.multiple && e.keyCode === 9 ? r.hide() : s.multiple || e.keyCode !== 13 && e.keyCode !== 9 ? void (s.multiple || (e.keyCode === 38 && u.$activeIndex > 0 ? u.$activeIndex-- : e.keyCode === 38 && u.$activeIndex < 0 ? u.$activeIndex = u.$matches.length - 1 : e.keyCode === 40 && u.$activeIndex < u.$matches.length - 1 ? u.$activeIndex++ : angular.isUndefined(u.$activeIndex) && (u.$activeIndex = 0), u.$digest())) : r.select(u.$activeIndex)) : void 0 }; const c = r.show; r.show = function () { c(), s.multiple && r.$element.addClass('select-multiple'), i(function () { r.$element.on(l ? 'touchstart' : 'mousedown', r.$onMouseDown), s.keyboard && t.on('keydown', r.$onKeyDown) }, 0, !1) }; const d = r.hide; return r.hide = function () { s.multiple || n.$modelValue || (u.$activeIndex = -1), r.$element.off(l ? 'touchstart' : 'mousedown', r.$onMouseDown), s.keyboard && t.off('keydown', r.$onKeyDown), d(!0) }, r } const s = (angular.element(t.document.body), /(ip(a|o)d|iphone|android)/gi.test(t.navigator.userAgent)); var l = 'createTouch' in t.document && s; return r.defaults = e, r }] }).directive('bsSelect', ['$window', '$parse', '$q', '$select', '$parseOptions', function (e, t, n, a, o) { const i = a.defaults; return { restrict: 'EAC', require: 'ngModel', link: function (e, t, n, r) { let s = { scope: e, placeholder: i.placeholder }; if (angular.forEach(['placement', 'container', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'template', 'placeholder', 'multiple', 'allNoneButtons', 'maxLength', 'maxLengthHtml', 'allText', 'noneText', 'iconCheckmark', 'autoClose', 'id', 'sort', 'caretHtml'], function (e) { angular.isDefined(n[e]) && (s[e] = n[e]) }), t[0].nodeName.toLowerCase() === 'select') { const l = t; l.css('display', 'none'), t = angular.element('<button type="button" class="btn btn-default"></button>'), l.after(t) } const u = o(n.bsOptions); let c = a(t, r, s); const d = u.$match[7].replace(/\|.+/, '').trim(); e.$watch(d, function () { u.valuesFn(e, r).then(function (e) { c.update(e), r.$render() }) }, !0), e.$watch(n.ngModel, function () { c.$updateActiveIndex(), r.$render() }, !0), r.$render = function () { let e, n; s.multiple && angular.isArray(r.$modelValue) ? (e = r.$modelValue.map(function (e) { return n = c.$getIndex(e), angular.isDefined(n) ? c.$scope.$matches[n].label : !1 }).filter(angular.isDefined), e = e.length > (s.maxLength || i.maxLength) ? e.length + ' ' + (s.maxLengthHtml || i.maxLengthHtml) : e.join(', ')) : (n = c.$getIndex(r.$modelValue), e = angular.isDefined(n) ? c.$scope.$matches[n].label : !1), t.html((e || s.placeholder) + (s.caretHtml ? s.caretHtml : i.caretHtml)) }, s.multiple && (r.$isEmpty = function (e) { return !e || e.length === 0 }), e.$on('$destroy', function () { c && c.destroy(), s = null, c = null }) } } }]), angular.module('mgcrea.ngStrap.tab', []).provider('$tab', function () { const e = this.defaults = { animation: 'am-fade', template: 'tab/tab.tpl.html', navClass: 'nav-tabs', activeClass: 'active' }; const t = this.controller = function (t, n, a) { const o = this; o.$options = angular.copy(e), angular.forEach(['animation', 'navClass', 'activeClass'], function (e) { angular.isDefined(a[e]) && (o.$options[e] = a[e]) }), t.$navClass = o.$options.navClass, t.$activeClass = o.$options.activeClass, o.$panes = t.$panes = [], o.$activePaneChangeListeners = o.$viewChangeListeners = [], o.$push = function (e) { o.$panes.push(e) }, o.$remove = function (e) { const t = o.$panes.indexOf(e); let n = o.$panes.$active; o.$panes.splice(t, 1), n > t ? n-- : t === n && n === o.$panes.length && n--, o.$setActive(n) }, o.$panes.$active = 0, o.$setActive = t.$setActive = function (e) { o.$panes.$active = e, o.$activePaneChangeListeners.forEach(function (e) { e() }) } }; this.$get = function () { const n = {}; return n.defaults = e, n.controller = t, n } }).directive('bsTabs', ['$window', '$animate', '$tab', '$parse', function (e, t, n, a) { const o = n.defaults; return { require: ['?ngModel', 'bsTabs'], transclude: !0, scope: !0, controller: ['$scope', '$element', '$attrs', n.controller], templateUrl: function (e, t) { return t.template || o.template }, link: function (e, t, n, o) { const i = o[0]; const r = o[1]; if (i && (console.warn('Usage of ngModel is deprecated, please use bsActivePane instead!'), r.$activePaneChangeListeners.push(function () { i.$setViewValue(r.$panes.$active) }), i.$formatters.push(function (e) { return r.$setActive(1 * e), e })), n.bsActivePane) { const s = a(n.bsActivePane); r.$activePaneChangeListeners.push(function () { s.assign(e, r.$panes.$active) }), e.$watch(n.bsActivePane, function (e) { r.$setActive(1 * e) }, !0) } } } }]).directive('bsPane', ['$window', '$animate', '$sce', function (e, t, n) { return { require: ['^?ngModel', '^bsTabs'], scope: !0, link: function (e, a, o, i) { function r () { const n = s.$panes.indexOf(e); const o = s.$panes.$active; t[n === o ? 'addClass' : 'removeClass'](a, s.$options.activeClass) } var s = (i[0], i[1]); a.addClass('tab-pane'), o.$observe('title', function (t) { e.title = n.trustAsHtml(t) }), s.$options.animation && a.addClass(s.$options.animation), o.$observe('disabled', function (t) { e.disabled = e.$eval(t) }), s.$push(e), e.$on('$destroy', function () { s.$remove(e) }), s.$activePaneChangeListeners.push(function () { r() }), r() } } }]), angular.module('mgcrea.ngStrap.timepicker', ['mgcrea.ngStrap.helpers.dateParser', 'mgcrea.ngStrap.helpers.dateFormatter', 'mgcrea.ngStrap.tooltip']).provider('$timepicker', function () { const e = this.defaults = { animation: 'am-fade', prefixClass: 'timepicker', placement: 'bottom-left', template: 'timepicker/timepicker.tpl.html', trigger: 'focus', container: !1, keyboard: !0, html: !1, delay: 0, useNative: !0, timeType: 'date', timeFormat: 'shortTime', timezone: null, modelTimeFormat: null, autoclose: !1, minTime: -1 / 0, maxTime: +1 / 0, length: 5, hourStep: 1, minuteStep: 5, roundDisplay: !1, iconUp: "<span class='icon'>" + mn.icons['up-dir'] + '</span>', iconDown: "<span class='icon'>" + mn.icons['down-dir'] + '</span>', arrowBehavior: 'pager' }; this.$get = ['$window', '$document', '$rootScope', '$sce', '$dateFormatter', '$tooltip', '$timeout', function (t, n, a, o, i, r, s) { function l (t, n, a) { function o (e) { const t = 6e4 * g.minuteStep; return new Date(Math.floor(e.getTime() / t) * t) } function l (e, n) { if (t[0].createTextRange) { const a = t[0].createTextRange(); a.collapse(!0), a.moveStart('character', e), a.moveEnd('character', n), a.select() } else t[0].setSelectionRange ? t[0].setSelectionRange(e, n) : angular.isUndefined(t[0].selectionStart) && (t[0].selectionStart = e, t[0].selectionEnd = n) } function d () { t[0].focus() } const f = r(t, angular.extend({}, e, a)); const p = a.scope; var g = f.$options; const m = f.$scope; const $ = g.lang; const h = function (e, t, n) { return i.formatDate(e, t, $, n) }; let v = 0; const y = g.roundDisplay ? o(new Date()) : new Date(); const w = n.$dateValue || y; const b = { hour: w.getHours(), meridian: w.getHours() < 12, minute: w.getMinutes(), second: w.getSeconds(), millisecond: w.getMilliseconds() }; const D = i.getDatetimeFormat(g.timeFormat, $); const k = i.hoursFormat(D); const S = i.timeSeparator(D); const x = i.minutesFormat(D); const T = i.showAM(D); m.$iconUp = g.iconUp, m.$iconDown = g.iconDown, m.$select = function (e, t) { f.select(e, t) }, m.$moveIndex = function (e, t) { f.$moveIndex(e, t) }, m.$switchMeridian = function (e) { f.switchMeridian(e) }, f.update = function (e) { angular.isDate(e) && !isNaN(e.getTime()) ? (f.$date = e, angular.extend(b, { hour: e.getHours(), minute: e.getMinutes(), second: e.getSeconds(), millisecond: e.getMilliseconds() }), f.$build()) : f.$isBuilt || f.$build() }, f.select = function (e, t, a) { (!n.$dateValue || isNaN(n.$dateValue.getTime())) && (n.$dateValue = new Date(1970, 0, 1)), angular.isDate(e) || (e = new Date(e)), t === 0 ? n.$dateValue.setHours(e.getHours()) : t === 1 && n.$dateValue.setMinutes(e.getMinutes()), n.$setViewValue(angular.copy(n.$dateValue)), n.$render(), g.autoclose && !a && s(function () { f.hide(!0) }) }, f.switchMeridian = function (e) { if (n.$dateValue && !isNaN(n.$dateValue.getTime())) { const t = (e || n.$dateValue).getHours(); n.$dateValue.setHours(t < 12 ? t + 12 : t - 12), n.$setViewValue(angular.copy(n.$dateValue)), n.$render() } }, f.$build = function () { let e; let t; const n = m.midIndex = parseInt(g.length / 2, 10); const a = []; for (e = 0; e < g.length; e++)t = new Date(1970, 0, 1, b.hour - (n - e) * g.hourStep), a.push({ date: t, label: h(t, k), selected: f.$date && f.$isSelected(t, 0), disabled: f.$isDisabled(t, 0) }); let o; const i = []; for (e = 0; e < g.length; e++)o = new Date(1970, 0, 1, 0, b.minute - (n - e) * g.minuteStep), i.push({ date: o, label: h(o, x), selected: f.$date && f.$isSelected(o, 1), disabled: f.$isDisabled(o, 1) }); const r = []; for (e = 0; e < g.length; e++)r.push([a[e], i[e]]); m.rows = r, m.showAM = T, m.isAM = (f.$date || a[n].date).getHours() < 12, m.timeSeparator = S, f.$isBuilt = !0 }, f.$isSelected = function (e, t) { return f.$date ? t === 0 ? e.getHours() === f.$date.getHours() : t === 1 ? e.getMinutes() === f.$date.getMinutes() : void 0 : !1 }, f.$isDisabled = function (e, t) { let n; return t === 0 ? n = e.getTime() + 6e4 * b.minute : t === 1 && (n = e.getTime() + 36e5 * b.hour), n < 1 * g.minTime || n > 1 * g.maxTime }, m.$arrowAction = function (e, t) { g.arrowBehavior === 'picker' ? f.$setTimeByStep(e, t) : f.$moveIndex(e, t) }, f.$setTimeByStep = function (e, t) { { var n = new Date(f.$date); var a = n.getHours(); var o = (h(n, k).length, n.getMinutes()); h(n, x).length }t === 0 ? n.setHours(a - parseInt(g.hourStep, 10) * e) : n.setMinutes(o - parseInt(g.minuteStep, 10) * e), f.select(n, t, !0) }, f.$moveIndex = function (e, t) { let n; t === 0 ? (n = new Date(1970, 0, 1, b.hour + e * g.length, b.minute), angular.extend(b, { hour: n.getHours() })) : t === 1 && (n = new Date(1970, 0, 1, b.hour, b.minute + e * g.length * g.minuteStep), angular.extend(b, { minute: n.getMinutes() })), f.$build() }, f.$onMouseDown = function (e) { if (e.target.nodeName.toLowerCase() !== 'input' && e.preventDefault(), e.stopPropagation(), c) { let t = angular.element(e.target); t[0].nodeName.toLowerCase() !== 'button' && (t = t.parent()), t.triggerHandler('click') } }, f.$onKeyDown = function (e) { if (/(38|37|39|40|13)/.test(e.keyCode) && !e.shiftKey && !e.altKey) { if (e.preventDefault(), e.stopPropagation(), e.keyCode === 13) return f.hide(!0); const t = new Date(f.$date); const n = t.getHours(); let a = h(t, k).length; const o = t.getMinutes(); let i = h(t, x).length; const r = /(37|39)/.test(e.keyCode); const s = 2 + 1 * T; r && (e.keyCode === 37 ? v = v < 1 ? s - 1 : v - 1 : e.keyCode === 39 && (v = s - 1 > v ? v + 1 : 0)); let u = [0, a]; v === 0 ? (e.keyCode === 38 ? t.setHours(n - parseInt(g.hourStep, 10)) : e.keyCode === 40 && t.setHours(n + parseInt(g.hourStep, 10)), a = h(t, k).length, u = [0, a]) : v === 1 ? (e.keyCode === 38 ? t.setMinutes(o - parseInt(g.minuteStep, 10)) : e.keyCode === 40 && t.setMinutes(o + parseInt(g.minuteStep, 10)), i = h(t, x).length, u = [a + 1, a + 1 + i]) : v === 2 && (r || f.switchMeridian(), u = [a + 1 + i + 1, a + 1 + i + 3]), f.select(t, v, !0), l(u[0], u[1]), p.$digest() } }; const C = f.init; f.init = function () { return u && g.useNative ? (t.prop('type', 'time'), void t.css('-webkit-appearance', 'textfield')) : (c && (t.prop('type', 'text'), t.attr('readonly', 'true'), t.on('click', d)), void C()) }; const M = f.destroy; f.destroy = function () { u && g.useNative && t.off('click', d), M() }; const E = f.show; f.show = function () { E(), s(function () { f.$element.on(c ? 'touchstart' : 'mousedown', f.$onMouseDown), g.keyboard && t.on('keydown', f.$onKeyDown) }, 0, !1) }; const A = f.hide; return f.hide = function (e) { f.$isShown && (f.$element.off(c ? 'touchstart' : 'mousedown', f.$onMouseDown), g.keyboard && t.off('keydown', f.$onKeyDown), A(e)) }, f } var u = (angular.element(t.document.body), /(ip(a|o)d|iphone|android)/gi.test(t.navigator.userAgent)); var c = 'createTouch' in t.document && u; return e.lang || (e.lang = i.getDefaultLocale()), l.defaults = e, l }] }).directive('bsTimepicker', ['$window', '$parse', '$q', '$dateFormatter', '$dateParser', '$timepicker', function (e, t, n, a, o, i) { { var r = i.defaults; var s = /(ip(a|o)d|iphone|android)/gi.test(e.navigator.userAgent); e.requestAnimationFrame || e.setTimeout } return { restrict: 'EAC', require: 'ngModel', link: function (e, t, n, l) { function u (e) { if (angular.isDate(e)) { const t = isNaN(d.minTime) || new Date(e.getTime()).setFullYear(1970, 0, 1) >= d.minTime; const n = isNaN(d.maxTime) || new Date(e.getTime()).setFullYear(1970, 0, 1) <= d.maxTime; const a = t && n; l.$setValidity('date', a), l.$setValidity('min', t), l.$setValidity('max', n), a && (l.$dateValue = e) } } function c () { return !l.$dateValue || isNaN(l.$dateValue.getTime()) ? '' : m(l.$dateValue, d.timeFormat) } var d = { scope: e, controller: l }; angular.forEach(['placement', 'container', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'template', 'autoclose', 'timeType', 'timeFormat', 'timezone', 'modelTimeFormat', 'useNative', 'hourStep', 'minuteStep', 'length', 'arrowBehavior', 'iconUp', 'iconDown', 'id'], function (e) { angular.isDefined(n[e]) && (d[e] = n[e]) }); const f = /^(false|0|)$/; angular.forEach(['roundDisplay'], function (e) { angular.isDefined(n[e]) && (d[e] = !f.test(n[e])) }), n.bsShow && e.$watch(n.bsShow, function (e) { p && angular.isDefined(e) && (angular.isString(e) && (e = !!e.match(/true|,?(timepicker),?/i)), e === !0 ? p.show() : p.hide()) }), s && (d.useNative || r.useNative) && (d.timeFormat = 'HH:mm'); var p = i(t, l, d); d = p.$options; const g = d.lang; var m = function (e, t, n) { return a.formatDate(e, t, g, n) }; const $ = o({ format: d.timeFormat, lang: g }); angular.forEach(['minTime', 'maxTime'], function (e) { angular.isDefined(n[e]) && n.$observe(e, function (t) { p.$options[e] = $.getTimeForAttribute(e, t), !isNaN(p.$options[e]) && p.$build(), u(l.$dateValue) }) }), e.$watch(n.ngModel, function () { p.update(l.$dateValue) }, !0), l.$parsers.unshift(function (e) { let t; if (!e) return l.$setValidity('date', !0), null; const n = angular.isDate(e) ? e : $.parse(e, l.$dateValue); return !n || isNaN(n.getTime()) ? void l.$setValidity('date', !1) : (u(n), d.timeType === 'string' ? (t = $.timezoneOffsetAdjust(n, d.timezone, !0), m(t, d.modelTimeFormat || d.timeFormat)) : (t = $.timezoneOffsetAdjust(l.$dateValue, d.timezone, !0), d.timeType === 'number' ? t.getTime() : d.timeType === 'unix' ? t.getTime() / 1e3 : d.timeType === 'iso' ? t.toISOString() : new Date(t))) }), l.$formatters.push(function (e) { let t; return t = angular.isUndefined(e) || e === null ? 0 / 0 : angular.isDate(e) ? e : d.timeType === 'string' ? $.parse(e, null, d.modelTimeFormat) : new Date(d.timeType === 'unix' ? 1e3 * e : e), l.$dateValue = $.timezoneOffsetAdjust(t, d.timezone), c() }), l.$render = function () { t.val(c()) }, e.$on('$destroy', function () { p && p.destroy(), d = null, p = null }) } } }]), angular.module('mgcrea.ngStrap.typeahead', ['mgcrea.ngStrap.tooltip', 'mgcrea.ngStrap.helpers.parseOptions']).provider('$typeahead', function () { const e = this.defaults = { animation: 'am-fade', prefixClass: 'typeahead', prefixEvent: '$typeahead', placement: 'bottom-left', template: 'typeahead/typeahead.tpl.html', trigger: 'focus', container: !1, keyboard: !0, html: !1, delay: 0, minLength: 1, filter: 'filter', limit: 6, autoSelect: !1, comparator: '' }; this.$get = ['$window', '$rootScope', '$tooltip', '$timeout', function (t, n, a, o) { function i (t, n, i) { let r = {}; const s = angular.extend({}, e, i); r = a(t, s); const l = i.scope; const u = r.$scope; u.$resetMatches = function () { u.$matches = [], u.$activeIndex = s.autoSelect ? 0 : -1 }, u.$resetMatches(), u.$activate = function (e) { u.$$postDigest(function () { r.activate(e) }) }, u.$select = function (e) { u.$$postDigest(function () { r.select(e) }) }, u.$isVisible = function () { return r.$isVisible() }, r.update = function (e) { u.$matches = e, u.$activeIndex >= e.length && (u.$activeIndex = s.autoSelect ? 0 : -1), /^(bottom|bottom-left|bottom-right)$/.test(s.placement) || o(r.$applyPlacement) }, r.activate = function (e) { u.$activeIndex = e }, r.select = function (e) { const t = u.$matches[e].value; n.$setViewValue(t), n.$render(), u.$resetMatches(), l && l.$digest(), u.$emit(s.prefixEvent + '.select', t, e, r) }, r.$isVisible = function () { return s.minLength && n ? u.$matches.length && angular.isString(n.$viewValue) && n.$viewValue.length >= s.minLength : !!u.$matches.length }, r.$getIndex = function (e) { const t = u.$matches.length; let n = t; if (t) { for (n = t; n-- && u.$matches[n].value !== e;);if (!(n < 0)) return n } }, r.$onMouseDown = function (e) { e.preventDefault(), e.stopPropagation() }, r.$onKeyDown = function (e) { /(38|40|13)/.test(e.keyCode) && (r.$isVisible() && (e.preventDefault(), e.stopPropagation()), e.keyCode === 13 && u.$matches.length ? r.select(u.$activeIndex) : e.keyCode === 38 && u.$activeIndex > 0 ? u.$activeIndex-- : e.keyCode === 40 && u.$activeIndex < u.$matches.length - 1 ? u.$activeIndex++ : angular.isUndefined(u.$activeIndex) && (u.$activeIndex = 0), u.$digest()) }; const c = r.show; r.show = function () { c(), o(function () { r.$element.on('mousedown', r.$onMouseDown), s.keyboard && t.on('keydown', r.$onKeyDown) }, 0, !1) }; const d = r.hide; return r.hide = function () { r.$element.off('mousedown', r.$onMouseDown), s.keyboard && t.off('keydown', r.$onKeyDown), s.autoSelect || r.activate(-1), d() }, r }angular.element(t.document.body); return i.defaults = e, i }] }).directive('bsTypeahead', ['$window', '$parse', '$q', '$typeahead', '$parseOptions', function (e, t, a, o, i) { const r = o.defaults; return { restrict: 'EAC', require: 'ngModel', link: function (e, t, a, s) { let l = { scope: e }; angular.forEach(['placement', 'container', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'template', 'filter', 'limit', 'minLength', 'watchOptions', 'selectMode', 'autoSelect', 'comparator', 'id'], function (e) { angular.isDefined(a[e]) && (l[e] = a[e]) }), t.attr('autocomplete', 'off'); const u = l.filter || r.filter; const c = l.limit || r.limit; const d = l.comparator || r.comparator; let f = a.bsOptions; u && (f += ' | ' + u + ':$viewValue'), d && (f += ':' + d), c && (f += ' | limitTo:' + c); const p = i(f); let g = o(t, s, l); if (l.watchOptions) { const m = p.$match[7].replace(/\|.+/, '').replace(/\(.*\)/g, '').trim(); e.$watch(m, function () { p.valuesFn(e, s).then(function (e) { g.update(e), s.$render() }) }, !0) }e.$watch(a.ngModel, function (t) { e.$modelValue = t, p.valuesFn(e, s).then(function (e) { if (l.selectMode && !e.length && t.length > 0) return void s.$setViewValue(s.$viewValue.substring(0, s.$viewValue.length - 1)); e.length > c && (e = e.slice(0, c)); const n = g.$isVisible(); n && g.update(e), (e.length !== 1 || e[0].value !== t) && (!n && g.update(e), s.$render()) }) }), s.$formatters.push(function (e) { const t = p.displayValue(e); return t === n ? '' : t }), s.$render = function () { if (s.$isEmpty(s.$viewValue)) return t.val(''); const e = g.$getIndex(s.$modelValue); let n = angular.isDefined(e) ? g.$scope.$matches[e].label : s.$viewValue; n = angular.isObject(n) ? p.displayValue(n) : n, t.val(n ? n.toString().replace(/<(?:.|\n)*?>/gm, '').trim() : '') }, e.$on('$destroy', function () { g && g.destroy(), l = null, g = null }) } } }]), angular.module('mgcrea.ngStrap.tooltip', ['mgcrea.ngStrap.helpers.dimensions']).provider('$tooltip', function () {
    const e = this.defaults = { animation: 'am-fade', customClass: '', prefixClass: 'tooltip', prefixEvent: 'tooltip', container: !1, target: !1, placement: 'top', template: 'tooltip/tooltip.tpl.html', contentTemplate: !1, trigger: 'hover focus', keyboard: !1, html: !1, show: !1, title: '', type: '', delay: 0, autoClose: !1, bsEnabled: !0, viewport: { selector: 'body', padding: 0 } }; this.$get = ['$window', '$rootScope', '$compile', '$q', '$templateCache', '$http', '$animate', '$sce', 'dimensions', '$$rAF', '$timeout', function (n, a, o, i, r, s, l, u, c, d, f) {
      function p (i, r) {
        function s () { N.$emit(H.prefixEvent + '.show', P) } function p () { if (N.$emit(H.prefixEvent + '.hide', P), z === B) { if (W && H.trigger === 'focus') return i[0].blur(); O() } } function b () {
          const e = H.trigger.split(' '); angular.forEach(e, function (e) {
            e === 'click' ? i.on('click', P.toggle) : e !== 'manual' && (i.on(e === 'hover' ? 'mouseenter' : 'focus', P.enter), i.on(e === 'hover' ? 'mouseleave' : 'blur', P.leave), I === 'button' && e !== 'hover' && i.on(v ? 'touchstart' : 'mousedown', P.$onFocusElementMouseDown))
          })
        } function D () { for (let e = H.trigger.split(' '), t = e.length; t--;) { const n = e[t]; n === 'click' ? i.off('click', P.toggle) : n !== 'manual' && (i.off(n === 'hover' ? 'mouseenter' : 'focus', P.enter), i.off(n === 'hover' ? 'mouseleave' : 'blur', P.leave), I === 'button' && n !== 'hover' && i.off(v ? 'touchstart' : 'mousedown', P.$onFocusElementMouseDown)) } } function k () { H.trigger !== 'focus' ? z.on('keyup', P.$onKeyUp) : i.on('keyup', P.$onFocusKeyUp) } function S () { H.trigger !== 'focus' ? z.off('keyup', P.$onKeyUp) : i.off('keyup', P.$onFocusKeyUp) } function x () { f(function () { z.on('click', C), w.on('click', P.hide), _ = !0 }, 0, !1) } function T () { _ && (z.off('click', C), w.off('click', P.hide), _ = !1) } function C (e) { e.stopPropagation() } function M (e) { e = e || H.target || i; const a = e[0]; const o = a.tagName === 'BODY'; const r = a.getBoundingClientRect(); let s = {}; for (const l in r)s[l] = r[l]; s.width === null && (s = angular.extend({}, s, { width: r.right - r.left, height: r.bottom - r.top })); const u = o ? { top: 0, left: 0 } : c.offset(a); const d = { scroll: o ? t.documentElement.scrollTop || t.body.scrollTop : e.prop('scrollTop') || 0 }; const f = o ? { width: t.documentElement.clientWidth, height: n.innerHeight } : null; return angular.extend({}, s, d, f, u) } function E (e, t, n, a) { let o; const i = e.split('-'); switch (i[0]) { case 'right':o = { top: t.top + t.height / 2 - a / 2, left: t.left + t.width }; break; case 'bottom':o = { top: t.top + t.height, left: t.left + t.width / 2 - n / 2 }; break; case 'left':o = { top: t.top + t.height / 2 - a / 2, left: t.left - n }; break; default:o = { top: t.top - a, left: t.left + t.width / 2 - n / 2 } } if (!i[1]) return o; if (i[0] === 'top' || i[0] === 'bottom') switch (i[1]) { case 'left':o.left = t.left; break; case 'right':o.left = t.left + t.width - n } else if (i[0] === 'left' || i[0] === 'right') switch (i[1]) { case 'top':o.top = t.top - a; break; case 'bottom':o.top = t.top + t.height } return o } function A (e, t) { const n = z[0]; const a = n.offsetWidth; const o = n.offsetHeight; let i = parseInt(c.css(n, 'margin-top'), 10); let r = parseInt(c.css(n, 'margin-left'), 10); isNaN(i) && (i = 0), isNaN(r) && (r = 0), e.top = e.top + i, e.left = e.left + r, c.setOffset(n, angular.extend({ using: function (e) { z.css({ top: Math.round(e.top) + 'px', left: Math.round(e.left) + 'px' }) } }, e), 0); const s = n.offsetWidth; const l = n.offsetHeight; if (t === 'top' && l !== o && (e.top = e.top + o - l), !/top-left|top-right|bottom-left|bottom-right/.test(t)) { const u = F(t, e, s, l); if (u.left ? e.left += u.left : e.top += u.top, c.setOffset(n, e), /top|right|bottom|left/.test(t)) { const d = /top|bottom/.test(t); const f = d ? 2 * u.left - a + s : 2 * u.top - o + l; const p = d ? 'offsetWidth' : 'offsetHeight'; V(f, n[p], d) } } } function F (e, t, n, a) { const o = { top: 0, left: 0 }; const i = H.viewport && m(H.viewport.selector || H.viewport); if (!i) return o; const r = H.viewport && H.viewport.padding || 0; const s = M(i); if (/right|left/.test(e)) { const l = t.top - r - s.scroll; const u = t.top + r - s.scroll + a; l < s.top ? o.top = s.top - l : u > s.top + s.height && (o.top = s.top + s.height - u) } else { const c = t.left - r; const d = t.left + r + n; c < s.left ? o.left = s.left - c : d > s.width && (o.left = s.left + s.width - d) } return o } function V (e, t, n) { const a = m('.tooltip-arrow, .arrow', z[0]); a.css(n ? 'left' : 'top', 50 * (1 - e / t) + '%').css(n ? 'top' : 'left', '') } function O () { clearTimeout(R), P.$isShown && z !== null && (H.autoClose && T(), H.keyboard && S()), j && (j.$destroy(), j = null), z && (z.remove(), z = P.$element = null) } var P = {}; var I = i[0].nodeName.toLowerCase(); var H = P.$options = angular.extend({}, e, r); P.$promise = $(H.template); var N = P.$scope = H.scope && H.scope.$new() || a.$new(); if (H.delay && angular.isString(H.delay)) { const L = H.delay.split(',').map(parseFloat); H.delay = L.length > 1 ? { show: L[0], hide: L[1] } : L[0] }P.$id = H.id || i.attr('id') || '', H.title && (N.title = u.trustAsHtml(H.title)), N.$setEnabled = function (e) { N.$$postDigest(function () { P.setEnabled(e) }) }, N.$hide = function () { N.$$postDigest(function () { P.hide() }) }, N.$show = function () { N.$$postDigest(function () { P.show() }) }, N.$toggle = function () { N.$$postDigest(function () { P.toggle() }) }, P.$isShown = N.$isShown = !1; let R, Y; H.contentTemplate && (P.$promise = P.$promise.then(function (e) { const t = angular.element(e); return $(H.contentTemplate).then(function (e) { let n = m('[ng-bind="content"]', t[0]); return n.length || (n = m('[ng-bind="title"]', t[0])), n.removeAttr('ng-bind').html(e), t[0].outerHTML }) })); let q, z, K, U, j; P.$promise.then(function (e) { angular.isObject(e) && (e = e.data), H.html && (e = e.replace(y, 'ng-bind-html="')), e = h.apply(e), K = e, q = o(e), P.init() }), P.init = function () { H.delay && angular.isNumber(H.delay) && (H.delay = { show: H.delay, hide: H.delay }), H.container === 'self' ? U = i : angular.isElement(H.container) ? U = H.container : H.container && (U = m(H.container)), b(), H.target && (H.target = angular.isElement(H.target) ? H.target : m(H.target)), H.show && N.$$postDigest(function () { H.trigger === 'focus' ? i[0].focus() : P.show() }) }, P.destroy = function () { D(), O(), N.$destroy() }, P.enter = function () { return clearTimeout(R), Y = 'in', H.delay && H.delay.show ? void (R = setTimeout(function () { Y === 'in' && P.show() }, H.delay.show)) : P.show() }, P.show = function () { if (H.bsEnabled && !P.$isShown) { N.$emit(H.prefixEvent + '.show.before', P); let e, t; H.container ? (e = U, t = U[0].lastChild ? angular.element(U[0].lastChild) : null) : (e = null, t = i), z && O(), j = P.$scope.$new(), z = P.$element = q(j, function () {}), z.css({ top: '-9999px', left: '-9999px', display: 'block', visibility: 'hidden' }), H.animation && z.addClass(H.animation), H.type && z.addClass(H.prefixClass + '-' + H.type), H.customClass && z.addClass(H.customClass), t ? t.after(z) : e.prepend(z), P.$isShown = N.$isShown = !0, g(N), P.$applyPlacement(); const n = l.enter(z, e, t, s); n && n.then && n.then(s), g(N), d(function () { z && z.css({ visibility: 'visible' }) }), H.keyboard && (H.trigger !== 'focus' && P.focus(), k()), H.autoClose && x() } }, P.leave = function () { return clearTimeout(R), Y = 'out', H.delay && H.delay.hide ? void (R = setTimeout(function () { Y === 'out' && P.hide() }, H.delay.hide)) : P.hide() }; let W, B; P.hide = function (e) { if (P.$isShown) { N.$emit(H.prefixEvent + '.hide.before', P), W = e, B = z; const t = l.leave(z, p); t && t.then && t.then(p), P.$isShown = N.$isShown = !1, g(N), H.keyboard && z !== null && S(), H.autoClose && z !== null && T() } }, P.toggle = function () { P.$isShown ? P.leave() : P.enter() }, P.focus = function () { z[0].focus() }, P.setEnabled = function (e) { H.bsEnabled = e }, P.setViewport = function (e) { H.viewport = e }, P.$applyPlacement = function () { if (z) { let t = H.placement; const n = /\s?auto?\s?/i; const a = n.test(t); a && (t = t.replace(n, '') || e.placement), z.addClass(H.placement); const o = M(); const r = z.prop('offsetWidth'); const s = z.prop('offsetHeight'); if (a) { const l = t; const u = H.container ? m(H.container) : i.parent(); const c = M(u); l.indexOf('bottom') >= 0 && o.bottom + s > c.bottom ? t = l.replace('bottom', 'top') : l.indexOf('top') >= 0 && o.top - s < c.top && (t = l.replace('top', 'bottom')), (l === 'right' || l === 'bottom-left' || l === 'top-left') && o.right + r > c.width ? t = l === 'right' ? 'left' : t.replace('left', 'right') : (l === 'left' || l === 'bottom-right' || l === 'top-right') && o.left - r < c.left && (t = l === 'left' ? 'right' : t.replace('right', 'left')), z.removeClass(l).addClass(t) } const d = E(t, o, r, s); A(d, t) } }, P.$onKeyUp = function (e) { e.which === 27 && P.$isShown && (P.hide(), e.stopPropagation()) }, P.$onFocusKeyUp = function (e) { e.which === 27 && (i[0].blur(), e.stopPropagation()) }, P.$onFocusElementMouseDown = function (e) { e.preventDefault(), e.stopPropagation(), P.$isShown ? i[0].blur() : i[0].focus() }; var _ = !1; return P
      } function g (e) { e.$$phase || e.$root && e.$root.$$phase || e.$digest() } function m (e, n) { return angular.element((n || t).querySelectorAll(e)) } function $ (e) { return b[e] ? b[e] : b[e] = s.get(e, { cache: r }).then(function (e) { return e.data }) } var h = String.prototype.trim; var v = 'createTouch' in n.document; var y = /ng-bind="/gi; var w = angular.element(n.document); var b = {}; return p
    }]
  }).directive('bsTooltip', ['$window', '$location', '$sce', '$tooltip', '$$rAF', function (e, t, n, a, o) { return { restrict: 'EAC', scope: !0, link: function (e, t, i) { let r = { scope: e }; angular.forEach(['template', 'contentTemplate', 'placement', 'container', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'backdropAnimation', 'type', 'customClass', 'id'], function (e) { angular.isDefined(i[e]) && (r[e] = i[e]) }), t.attr('data-target') && (r.target = t.attr('data-target')), e.hasOwnProperty('title') || (e.title = ''), i.$observe('title', function (t) { if (angular.isDefined(t) || !e.hasOwnProperty('title')) { const a = e.title; e.title = n.trustAsHtml(t), angular.isDefined(a) && o(function () { s && s.$applyPlacement() }) } }), i.bsTooltip && e.$watch(i.bsTooltip, function (t, n) { angular.isObject(t) ? angular.extend(e, t) : e.title = t, angular.isDefined(n) && o(function () { s && s.$applyPlacement() }) }, !0), i.bsShow && e.$watch(i.bsShow, function (e) { s && angular.isDefined(e) && (angular.isString(e) && (e = !!e.match(/true|,?(tooltip),?/i)), e === !0 ? s.show() : s.hide()) }), i.bsEnabled && e.$watch(i.bsEnabled, function (e) { s && angular.isDefined(e) && (angular.isString(e) && (e = !!e.match(/true|1|,?(tooltip),?/i)), s.setEnabled(e === !1 ? !1 : !0)) }), i.viewport && e.$watch(i.viewport, function (e) { s && angular.isDefined(e) && s.setViewport(e) }); var s = a(t, r); e.$on('$destroy', function () { s && s.destroy(), r = null, s = null }) } } }])
}(window, document))
/**
 * angular-strap
 * @version v2.2.1 - 2015-03-10
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes (olivier@mg-crea.com)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
!(function () { 'use strict'; angular.module('mgcrea.ngStrap.aside').run(['$templateCache', function (t) { t.put('aside/aside.tpl.html', '<div class="aside" tabindex="-1" role="dialog"><div class="aside-dialog"><div class="aside-content"><div class="aside-header" ng-show="title"><button type="button" class="close" ng-click="$hide()">&times;</button><h4 class="aside-title" ng-bind="title"></h4></div><div class="aside-body" ng-bind="content"></div><div class="aside-footer"><button type="button" class="btn btn-default" ng-click="$hide()">Close</button></div></div></div></div>') }]), angular.module('mgcrea.ngStrap.alert').run(['$templateCache', function (t) { t.put('alert/alert.tpl.html', '<div class="alert" ng-class="[type ? \'alert-\' + type : null]"><button type="button" class="close" ng-if="dismissable" ng-click="$hide()">&times;</button> <strong ng-bind="title"></strong>&nbsp;<span ng-bind-html="content"></span></div>') }]), angular.module('mgcrea.ngStrap.datepicker').run(['$templateCache', function (t) { t.put('datepicker/datepicker.tpl.html', '<div class="dropdown-menu datepicker" ng-class="\'datepicker-mode-\' + $mode" style="max-width: 320px"><table style="table-layout: fixed; height: 100%; width: 100%"><thead><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$selectPane(-1)" ng-bind-html="$iconLeft"></button></th><th colspan="{{ rows[0].length - 2 }}"><button tabindex="-1" type="button" class="btn btn-default btn-block text-strong" ng-click="$toggleMode()"><strong style="text-transform: capitalize" ng-bind="title"></strong></button></th><th><button tabindex="-1" type="button" class="btn btn-default pull-right" ng-click="$selectPane(+1)" ng-bind-html="$iconRight"></button></th></tr><tr ng-show="showLabels" ng-bind-html="labels"></tr></thead><tbody><tr ng-repeat="(i, row) in rows" height="{{ 100 / rows.length }}%"><td class="text-center" ng-repeat="(j, el) in row"><button tabindex="-1" type="button" class="btn btn-default" style="width: 100%" ng-class="{\'btn-primary\': el.selected, \'btn-info btn-today\': el.isToday && !el.selected}" ng-click="$select(el.date)" ng-disabled="el.disabled"><span ng-class="{\'text-muted\': el.muted}" ng-bind="el.label"></span></button></td></tr></tbody></table></div>') }]), angular.module('mgcrea.ngStrap.dropdown').run(['$templateCache', function (t) { t.put('dropdown/dropdown.tpl.html', '<ul tabindex="-1" class="dropdown-menu" role="menu"><li role="presentation" ng-class="{divider: item.divider}" ng-repeat="item in content"><a role="menuitem" tabindex="-1" ng-href="{{item.href}}" ng-if="!item.divider && item.href" target="{{item.target || \'\'}}" ng-bind="item.text"></a> <a role="menuitem" tabindex="-1" href="javascript:void(0)" ng-if="!item.divider && item.click" ng-click="$eval(item.click);$hide()" ng-bind="item.text"></a></li></ul>') }]), angular.module('mgcrea.ngStrap.modal').run(['$templateCache', function (t) { t.put('modal/modal.tpl.html', '<div class="modal" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header" ng-show="title"><button type="button" class="close" aria-label="Close" ng-click="$hide()"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" ng-bind="title"></h4></div><div class="modal-body" ng-bind="content"></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="$hide()">Close</button></div></div></div></div>') }]), angular.module('mgcrea.ngStrap.popover').run(['$templateCache', function (t) { t.put('popover/popover.tpl.html', '<div class="popover"><div class="arrow"></div><h3 class="popover-title" ng-bind="title" ng-show="title"></h3><div class="popover-content" ng-bind="content"></div></div>') }]), angular.module('mgcrea.ngStrap.select').run(['$templateCache', function (t) { t.put('select/select.tpl.html', '<ul tabindex="-1" class="select dropdown-menu" ng-show="$isVisible()" role="select"><li ng-if="$showAllNoneButtons"><div class="btn-group" style="margin-bottom: 5px; margin-left: 5px"><button type="button" class="btn btn-default btn-xs" ng-click="$selectAll()">{{$allText}}</button> <button type="button" class="btn btn-default btn-xs" ng-click="$selectNone()">{{$noneText}}</button></div></li><li role="presentation" ng-repeat="match in $matches" ng-class="{active: $isActive($index)}"><a style="cursor: default" role="menuitem" tabindex="-1" ng-click="$select($index, $event)"><i class="{{$iconCheckmark}} pull-right" ng-if="$isMultiple && $isActive($index)"></i> <span ng-bind="match.label"></span></a></li></ul>') }]), angular.module('mgcrea.ngStrap.tab').run(['$templateCache', function (t) { t.put('tab/tab.tpl.html', '<ul class="nav" ng-class="$navClass" role="tablist"><li role="presentation" ng-repeat="$pane in $panes track by $index" ng-class="[ $index == $panes.$active ? $activeClass : \'\', $pane.disabled ? \'disabled\' : \'\' ]"><a role="tab" data-toggle="tab" ng-click="!$pane.disabled && $setActive($index)" data-index="{{ $index }}" ng-bind-html="$pane.title" aria-controls="$pane.title"></a></li></ul><div ng-transclude class="tab-content"></div>') }]), angular.module('mgcrea.ngStrap.timepicker').run(['$templateCache', function (t) { t.put('timepicker/timepicker.tpl.html', '<div class="dropdown-menu timepicker" style="min-width: 0px;width: auto"><table height="100%"><thead><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 0)" ng-bind-html="$iconUp"></button></th><th>&nbsp;</th><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 1)" ng-bind-html="$iconUp"></button></th></tr></thead><tbody><tr ng-repeat="(i, row) in rows"><td class="text-center"><button tabindex="-1" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[0].selected}" ng-click="$select(row[0].date, 0)" ng-disabled="row[0].disabled"><span ng-class="{\'text-muted\': row[0].muted}" ng-bind="row[0].label"></span></button></td><td><span ng-bind="i == midIndex ? timeSeparator : \' \'"></span></td><td class="text-center"><button tabindex="-1" ng-if="row[1].date" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[1].selected}" ng-click="$select(row[1].date, 1)" ng-disabled="row[1].disabled"><span ng-class="{\'text-muted\': row[1].muted}" ng-bind="row[1].label"></span></button></td><td ng-if="showAM">&nbsp;</td><td ng-if="showAM"><button tabindex="-1" ng-show="i == midIndex - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary\': !!isAM}" class="btn btn-default" ng-click="$switchMeridian()" ng-disabled="el.disabled">AM</button> <button tabindex="-1" ng-show="i == midIndex + 1 - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary\': !isAM}" class="btn btn-default" ng-click="$switchMeridian()" ng-disabled="el.disabled">PM</button></td></tr></tbody><tfoot><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 0)" ng-bind-html="$iconDown"></button></th><th>&nbsp;</th><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 1)"  ng-bind-html="$iconDown"></button></th></tr></tfoot></table></div>') }]), angular.module('mgcrea.ngStrap.typeahead').run(['$templateCache', function (t) { t.put('typeahead/typeahead.tpl.html', '<ul tabindex="-1" class="typeahead dropdown-menu" ng-show="$isVisible()" role="select"><li role="presentation" ng-repeat="match in $matches" ng-class="{active: $index == $activeIndex}"><a role="menuitem" tabindex="-1" ng-click="$select($index, $event)" ng-bind="match.label"></a></li></ul>') }]), angular.module('mgcrea.ngStrap.tooltip').run(['$templateCache', function (t) { t.put('tooltip/tooltip.tpl.html', '<div class="tooltip in" ng-show="title"><div class="tooltip-arrow"></div><div class="tooltip-inner" ng-bind="title"></div></div>') }]) }(window, document))
/**
 * angular-pagenav
 * @version v0.0.2 - 2015-04-13
 * @link http://html5beta.com/apps/angular-pagenav.html
 * @author ZHAO Xudong (zxdong@gmail.com)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
!(function () { angular.module('zPagenav', []).directive('pagenav', ['$compile', function (a) { return { restrict: 'A', scope: { page: '=', pageSize: '=', total: '=', options: '=' }, link: function (e, n) { function t (a) { let e; let n; const t = { pageSize: a.pageSize || 10, maxLinkShow: a.maxLinkShow || 5, itemTotal: a.itemTotal || 0, page: a.page || 1, lang: a.lang || { page: 'page', afterCurrentPage: ', ', intotal: 'in total', Prev: 'Prev', Next: 'Next', more: '...' }, url: a.url || 'javascript:;', pageParam: a.pageParam || 'p', noFirstPageParam: a.noFirstPageParam || !1, ngClick: !0 }; let r = ''; const i = []; const p = t.pageSize; let s = t.page; const l = t.itemTotal; const g = t.maxLinkShow; const c = l % p; const u = Math.floor(l / p); const o = c ? u + 1 : u; if (s = s > o ? o : s, n = l <= 0 ? 0 : o > s ? p : c || p, o > 0) { if (r = '<span class="pagenav-wrapper' + (o === 1 ? 'only-one-page' : '') + '"><span class="pagenav-desc">' + t.lang.page + '<span class="pagenav-current">' + s + '</span><span class="pagenav-acp">' + t.lang.afterCurrentPage + '</span><span class="pagenav-total">' + o + '</span> ' + t.lang.intotal + '</span><span class="pagenav-units">', g >= o) for (e = 1; o >= e; e++) { var v, x, k; s == e ? (v = 'pagenav-current-link pagenav-link', x = !0) : (v = 'pagenav-link', x = !1), k = { text: e, index: e, isCurrent: x, cls: v }, i.push(k) } else if (o > g) { let d = g - 3; (s >= o - 1 || s <= 2) && d++; let m; const f = Math.floor(d / 2); const h = d - f; const C = s - 1; const P = o - s; s - 1 > f && i.push({ text: t.lang.Prev, index: s - 1, isCurrent: !1, cls: 'pagenav-link pagenav-link-prev' }), h >= P ? (m = d - P, i.push({ text: 1, index: 1, isCurrent: !1, cls: 'pagenav-link' })) : C > f ? (m = f, i.push({ text: 1, index: 1, isCurrent: !1, cls: 'pagenav-link' })) : m = C; const S = d - m; for (e = 0; m > e; e++) { var k = { text: s - m + e, index: s - m + e, isCurrent: !1, cls: 'pagenav-link' }; i.push(k) } for (i.push({ text: s, index: s, isCurrent: !0, cls: 'pagenav-link pagenav-current-link' }), e = 1; S >= e; e++) { var k = { text: s + e, index: s + e, isCurrent: !1, cls: 'pagenav-link' }; i.push(k) }P > S && i.push({ text: o, index: o, isCurrent: s == o ? !0 : !1, cls: s == o ? 'pagenav-link pagenav-current-link' : 'pagenav-link' }), P > h && i.push({ text: t.lang.Next, index: s + 1, isCurrent: !1, cls: 'pagenav-link pagenav-link-next' }) } } else r = ''; for (var w, z = i.length, T = 0, F = '', L = !1, N = /javascript\:/.test(t.url), $ = /\?|#/.test(t.url), j = ''; z > T; T++)w = i[T], j = N ? t.url : t.url + (t.noFirstPageParam && w.index === 1 ? '' : ($ ? '&' : '?') + t.pageParam + '=' + w.index), T > 0 && (L = i[T - 1]), F = (w.isCurrent ? '<span ' : '<a href="' + j + '" ') + 'data-page="' + w.index + '" ' + (!w.isCurrent && t.ngClick ? 'ng-click="click(' + w.index + ')" ' : '') + 'class="page-' + w.index + ' ' + w.cls + '">' + w.text + '</' + (w.isCurrent ? 'span>' : 'a>'), L && L.index < w.index - 1 && (r += '<span class="pagenav-more">' + t.lang.more + '</span>'), r += F; return r += r ? '</span></span>' : '' }e.$watch(function () { return { page: e.page, pageSize: e.pageSize, itemTotal: e.total } }, function (r) { n.html(t(angular.extend({}, e.options, r))), a(n.contents())(e.$new()) }, !0), e.click = function (a) { e.page = a } } } }]) }(window, document))
'use strict'
angular.module('ngLocale', [], ['$provide', function ($provide) {
  const PLURAL_CATEGORY = { ZERO: 'zero', ONE: 'one', TWO: 'two', FEW: 'few', MANY: 'many', OTHER: 'other' }
  $provide.value('$locale', {
    DATETIME_FORMATS: {
      AMPMS: [
        '\u4e0a\u5348',
        '\u4e0b\u5348'
      ],
      DAY: [
        '\u661f\u671f\u65e5',
        '\u661f\u671f\u4e00',
        '\u661f\u671f\u4e8c',
        '\u661f\u671f\u4e09',
        '\u661f\u671f\u56db',
        '\u661f\u671f\u4e94',
        '\u661f\u671f\u516d'
      ],
      ERANAMES: [
        '\u516c\u5143\u524d',
        '\u516c\u5143'
      ],
      ERAS: [
        '\u516c\u5143\u524d',
        '\u516c\u5143'
      ],
      MONTH: [
        '\u4e00\u6708',
        '\u4e8c\u6708',
        '\u4e09\u6708',
        '\u56db\u6708',
        '\u4e94\u6708',
        '\u516d\u6708',
        '\u4e03\u6708',
        '\u516b\u6708',
        '\u4e5d\u6708',
        '\u5341\u6708',
        '\u5341\u4e00\u6708',
        '\u5341\u4e8c\u6708'
      ],
      SHORTDAY: [
        '\u5468\u65e5',
        '\u5468\u4e00',
        '\u5468\u4e8c',
        '\u5468\u4e09',
        '\u5468\u56db',
        '\u5468\u4e94',
        '\u5468\u516d'
      ],
      SHORTMONTH: [
        '1\u6708',
        '2\u6708',
        '3\u6708',
        '4\u6708',
        '5\u6708',
        '6\u6708',
        '7\u6708',
        '8\u6708',
        '9\u6708',
        '10\u6708',
        '11\u6708',
        '12\u6708'
      ],
      fullDate: 'y\u5e74M\u6708d\u65e5EEEE',
      longDate: 'y\u5e74M\u6708d\u65e5',
      medium: 'y\u5e74M\u6708d\u65e5 ah:mm:ss',
      mediumDate: 'y\u5e74M\u6708d\u65e5',
      mediumTime: 'ah:mm:ss',
      short: 'yy/M/d ah:mm',
      shortDate: 'yy/M/d',
      shortTime: 'ah:mm'
    },
    NUMBER_FORMATS: {
      CURRENCY_SYM: '\u00a5',
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PATTERNS: [
        {
          gSize: 3,
          lgSize: 3,
          maxFrac: 3,
          minFrac: 0,
          minInt: 1,
          negPre: '-',
          negSuf: '',
          posPre: '',
          posSuf: ''
        },
        {
          gSize: 3,
          lgSize: 3,
          maxFrac: 2,
          minFrac: 2,
          minInt: 1,
          negPre: '\u00a4\u00a0-',
          negSuf: '',
          posPre: '\u00a4\u00a0',
          posSuf: ''
        }
      ]
    },
    id: 'zh-cn',
    pluralCat: function (n, opt_precision) { return PLURAL_CATEGORY.OTHER }
  })
}])
