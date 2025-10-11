/**
 * vue-pagenav
 * @version v1.0.0 - 2016-03-24
 * @link http://html5beta.com/apps/vue-pagenav.html
 * @author ZHAO Xudong (zxdong@gmail.com)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function (window, document, undefined) {
  const zPagenav = {

    default: {
      page: 1,
      pageSize: 10,
      total: 0,
      prevHtml: '«',
      nextHtml: '»',
      prevSrHtml: 'Previous',
      nextSrHtml: 'Next',
      dotsHtml: '...',
      template:
			'<nav class="zpagenav" >' +
				'<span class="pagination page-link m-r-1">total:{{total}}</span>' +
				'<ul class="pagination">' +
					'<li  @click="setPage(unit.page)" track-by="$index" v-for="unit in units" class="page-item {{unit.class}}" :disabled="unit.disabled">' +
						'<a class="page-link" href="#p={{unit.page}}" aria-label="{{unit.ariaLabel}}">' +
							'<span v-if="unit.isPager" aria-hidden="true">{{{unit.html}}}</span>' +
							'<span v-else>{{{unit.html}}}</span>' +
							'<span v-if="unit.isPager" class="sr-only">{{{unit.srHtml}}}</span>' +
						'</a>' +
					'</li>' +
				'</ul>' +
			'</nav>'
    }

  }

  zPagenav.install = function () {
    // define & register
    Vue.component('zpagenav', {
      template: zPagenav.default.template,
      props: {
        page: Number,
        total: Number,
        pageSize: Number,
        maxLink: Number
      },
      methods: {
        setPage: function (page) {
          if (page === this.page) return false
          this.page = page
        }
      },
      computed: {
        units: function () {
          const option = zPagenav.default
          const th = this
          let page = th.page || option.page
          const pageSize = th.pageSize || option.pageSize
          const total = th.total || option.total
          const maxLink = th.maxLink > 5 ? th.maxLink : 5

          const linksCount = Math.ceil(total / pageSize)

          if (page > linksCount) page = linksCount + 0

          const hasPrev = page > 1
          const hasNext = page < linksCount
          const realMaxLink = maxLink > linksCount ? linksCount : maxLink
          let len1, len2, len3, shouldInsertDots12, shouldInsertDots23
          let len2Start, len3Start

          const units = []
          const arr = computeLens()

          units.push({
            class: hasPrev ? '' : 'disabled',
            page: hasPrev ? page - 1 : page,
            isPager: true,
            isPrev: true,
            isNext: false,
            html: option.prevHtml,
            srHtml: option.prevSrHtml,
            ariaLabel: option.prevSrHtml
          })

          const dotUnit = {
            class: 'disabled',
            page,
            isPager: true,
            isPrev: false,
            isNext: true,
            html: option.dotsHtml
          }

          for (let i = 0, len = arr.length; i < len; i++) {
            pushUnit(arr[i])
          }

          units.push({
            class: hasNext ? '' : 'disabled',
            page: hasNext ? page + 1 : page,
            isPager: true,
            isPrev: false,
            isNext: true,
            html: option.nextHtml,
            srHtml: option.nextSrHtml,
            ariaLabel: option.nextSrHtml
          })

          function pushUnit (i) {
            if (typeof i === 'number') {
              units.push({
                page: i,
                isPrev: false,
                isPager: false,
                disabled: false,
                class: i === page ? 'active' : '',
                isNext: false,
                html: i
              })
            } else units.push(dotUnit)
          }

          function computeLens () {
            const a4 = Math.floor((realMaxLink - 2) / 2)
            const a5 = realMaxLink - 3 - a4
            let s2 = page - a4
            const s3 = page + a5
            if (s2 < 2) {
              s2 = 2
            } else if (s3 > linksCount) {
              s2 = linksCount - (realMaxLink - 2)
            }
            const arr = [1]
            if (s2 > 2) arr.push('dot')
            let it
            for (let i = 0, len = realMaxLink - 2; i < len; i++) {
              it = i + s2
              arr.push(it)
            }
            if (it < linksCount - 1) arr.push('dot')
            if (it < linksCount) arr.push(linksCount)
            return arr
          }

          return units
          // end unit
        }
      }
    })
  }

  if (typeof exports === 'object') {
    module.exports = zPagenav
  } else if (typeof define === 'function' && define.amd) {
    define([], function () { return zPagenav })
  } else if (window.Vue) {
    window.zPagenav = zPagenav
  }
})(window, document)
