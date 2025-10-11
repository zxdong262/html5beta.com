/*
 * canvas shapes lib by ZHAO Xudong, zxdong@gmail.com
 */
;(function (window) {
  const Shape = function (id, opts) {
    const defaults = {
      shapeCount: 20,
      timer: 100,
      step: 3,
      minSize: 50,
      maxSize: 150,
      maxFrame: 230
    }
    const th = this
    const wrap = $(id)

    $.extend(th, {
      wrap,
      ctx: wrap[0].getContext('2d'),
      width: wrap.width(),
      height: wrap.height(),
      timerHandle: false,
      shapes: [],
      methodsPool: ['star'],
      opts: $.extend(defaults, opts),
      actionCount: 0
    })
  }

  Shape.prototype.start = function (count) {
    this.buildShapes(count)
    this.animate()
  }

  Shape.prototype.animate = function () {
    this.loop()
  }

  Shape.prototype.renderShapes = function () {
    const th = this
    const shapes = th.shapes

    th.clearShapes()

    for (let i = 0, len = shapes.length; i < len; i++) {
      const obj = shapes[i]
      const type = obj.type
      th['draw_' + type](obj)
    }
  }

  Shape.prototype.loop = function () {
    const th = this
    this.renderShapes()
    this.move()
    this.timerHandle = setTimeout(function () {
      th.loop()
    }, this.opts.timer)
  }

  Shape.prototype.move = function () {
    const th = this
    const shapes = th.shapes
    var step = th.opts.step
    const res = []

    for (let i = 0, len = shapes.length; i < len; i++) {
      const pos = shapes[i]
      const ratio = pos.directionY / pos.directionX
      var step = th.opts.step
      const r = pos.r

      let tx = pos.x + pos.directionX * step
      let ty = pos.y + pos.directionY * step
      const ex = tx > pos.r ? tx - (th.width - pos.r) : pos.r - tx
      const ey = ty > pos.r ? ty - (th.height - pos.r) : pos.r - ty
      let disx = 0
      let disy = 0

      if (ex > 0 && ey > 0) {
        if (ex > ey) {
          ty = ty > pos.r ? th.height - pos.r : r
          disy = ty - pos.y
          disx = disy / pos.directionY * pos.directionX
          tx = pos.x + disx
          pos.directionY = -pos.directionY
        } else {
          tx = tx > pos.r ? th.width - pos.r : r
          disx = tx - pos.x
          disy = disx / pos.directionX * pos.directionY
          ty = pos.y + disy
          pos.directionX = -pos.directionX
        }
      } else if (ex > 0) {
        tx = tx > pos.r ? th.width - pos.r : r
        disx = tx - pos.x
        disy = disx / pos.directionX * pos.directionY
        ty = pos.y + disy
        pos.directionX = -pos.directionX
      } else if (ey > 0) {
        ty = ty > pos.r ? th.height - pos.r : r
        disy = ty - pos.y
        disx = disy / pos.directionY * pos.directionX
        tx = pos.x + disx
        pos.directionY = -pos.directionY
      }

      pos.x = tx
      pos.y = ty

      res.push(pos)
    }

    th.shapes = res
  }

  Shape.prototype.buildShapes = function (count, typesPool) {
    const th = this
    const _count = count || th.opts.shapeCount
    const methodsPool = typesPool || th.methodsPool
    const len = methodsPool.length
    let r

    for (let i = 0; i < _count; i++) {
      r = Math.floor(Math.random() * len)
      th.shapes.push(th.buildShape(methodsPool[r]))
    }
  }

  Shape.prototype.buildShape = function (type) {
    return this['build_shape_' + type]()
  }

  Shape.prototype.build_shape_bubble = function () {
    const th = this
    const opts = th.opts
    const size = Math.floor(Math.random() * (opts.maxSize - opts.minSize)) + opts.minSize
    const s2 = size * 2
    const xx = th.width > s2 ? th.width : s2 + 1
    const yy = th.height > s2 ? th.height : s2 + 1
    const x = size + Math.floor(Math.random() * (xx - s2))
    const y = size + Math.floor(Math.random() * (yy - s2))
    const directionX = (Math.floor(Math.random() * 7) - 3) / 3
    const directionY = (Math.floor(Math.random() * 7) - 3) / 3
    const colorPool = [
      'rgba(156,183,52,.25)',
      'rgba(227,163,26,.25)',
      'rgba(217,84,56,.25)',
      'rgba(4,80,150,.25)',
      'rgba(122,24,105,.25)'
    ]
    const clen = colorPool.length
    const cr = Math.floor(Math.random() * clen)

    const obj = {
      x,
      y,
      r: size,
      directionX,
      directionY,
      type: 'bubble',
      fillStyle: colorPool[cr]
    }

    return obj
  }

  Shape.prototype.build_shape_heart = function () {
    const th = this
    const opts = th.opts
    const size = Math.floor(Math.random() * (opts.maxSize - opts.minSize)) + opts.minSize
    const s2 = size * 2
    const xx = th.width > s2 ? th.width : s2 + 1
    const yy = th.height > s2 ? th.height : s2 + 1
    const x = size + Math.floor(Math.random() * (xx - s2))
    const y = size + Math.floor(Math.random() * (yy - s2))
    const directionX = Math.random() * 2 - 1
    const directionY = Math.random() * 2 - 1

    const obj = {
      x,
      y,
      r: size,
      directionX,
      directionY,
      type: 'heart',
      fillStyle: 'rgba(207,13,31,.25)'
    }

    return obj
  }

  Shape.prototype.build_shape_star = function () {
    const th = this
    const opts = th.opts
    const size = Math.floor(Math.random() * (opts.maxSize - opts.minSize)) + opts.minSize
    const s2 = size * 2
    const xx = th.width > s2 ? th.width : s2 + 1
    const yy = th.height > s2 ? th.height : s2 + 1
    const x = size + Math.floor(Math.random() * (xx - s2))
    const y = size + Math.floor(Math.random() * (yy - s2))
    const directionX = Math.random() * 2 - 1
    const directionY = Math.random() * 2 - 1
    //, fill = Math.random() > .5 ? true : false
    const spike = 5 + Math.floor(Math.random() * 5)
    const colorPool = [
      'rgba(156,183,52,.25)',
      'rgba(227,163,26,.25)',
      'rgba(217,84,56,.25)',
      'rgba(4,80,150,.25)',
      'rgba(122,24,105,.25)'
    ]
    const clen = colorPool.length
    const cr = Math.floor(Math.random() * clen)

    const obj = {
      x,
      y,
      r: size,
      outerR: size,
      innerR: size / 2,
      spike,
      directionX,
      directionY,
      type: 'star'
    }

    if (spike === 5) obj.fillStyle = 'rgba(207,13,31,.25)'
    else obj.strokeStyle = colorPool[cr]

    return obj
  }

  Shape.prototype.popShape = function (count) {
    const len = this.shapes.length
    let _count = len < count ? len : count
    _count = len - _count
    this.shapes = this.shapes.slice(0, _count)
  }

  Shape.prototype.pushShape = function (obj, typesPool) {
    const th = this
    const methodsPool = typesPool || th.methodsPool
    const len = methodsPool.length
    const r = Math.floor(Math.random() * len)

    th.shapes.push(
      $.extend(
        th.buildShape(methodsPool[r])
        , obj
      )
    )
  }

  Shape.prototype.stop = function () {
    clearTimeout(this.timerHandle)
    this.clearShapes()
  }

  Shape.prototype.clearShapes = function () {
    this.ctx.clearRect(0, 0, this.width, this.height)
  }

  Shape.prototype.draw_bubble = function (pos) {
    const ctx = this.ctx
    ctx.beginPath()
    ctx.fillStyle = pos.fillStyle
    ctx.arc(pos.x, pos.y, pos.r, 0, Math.PI * 2, true)
    ctx.fill()
    ctx.closePath()
  }

  Shape.prototype.draw_heart = function (pos) {
    const th = this
    const ctx = th.ctx
    const ratio = pos.r / 75
    const x = pos.x
    const y = pos.y
    const bx = x - pos.r
    const by = y - pos.r

    ctx.beginPath()
    ctx.fillStyle = pos.fillStyle
    ctx.moveTo(bx + 75 * ratio, by + 40 * ratio)
    ctx.bezierCurveTo(bx + 75 * ratio, by + 37 * ratio, bx + 70 * ratio, by + 25 * ratio, bx + 50 * ratio, by + 25 * ratio)
    ctx.bezierCurveTo(bx + 20 * ratio, by + 25 * ratio, bx + 20 * ratio, by + 62.5 * ratio, bx + 20 * ratio, by + 62.5 * ratio)
    ctx.bezierCurveTo(bx + 20 * ratio, by + 80 * ratio, bx + 40 * ratio, by + 102 * ratio, bx + 75 * ratio, by + 120 * ratio)
    ctx.bezierCurveTo(bx + 110 * ratio, by + 102 * ratio, bx + 130 * ratio, by + 80 * ratio, bx + 130 * ratio, by + 62.5 * ratio)
    ctx.bezierCurveTo(bx + 130 * ratio, by + 62.5 * ratio, bx + 130 * ratio, by + 25 * ratio, bx + 100 * ratio, by + 25 * ratio)
    ctx.bezierCurveTo(bx + 85 * ratio, by + 25 * ratio, bx + 75 * ratio, by + 37 * ratio, bx + 75 * ratio, by + 40 * ratio)
    ctx.fill()
    ctx.closePath()
  }

  Shape.prototype.draw_star = function (pos) {
    let rot = Math.PI / 2 * 3
    const cx = pos.x
    const cy = pos.y
    const spike = pos.spike
    const step = Math.PI / spike
    const th = this
    const ctx = th.ctx
    const outerRadius = pos.outerR
    const innerRadius = pos.innerR
    let x
    let y

    if (pos.strokeStyle) ctx.strokeStyle = pos.strokeStyle
    else ctx.fillStyle = pos.fillStyle
    ctx.beginPath()
    ctx.moveTo(cx, cy - outerRadius)
    for (i = 0; i < spike; i++) {
      x = cx + Math.cos(rot) * outerRadius
      y = cy + Math.sin(rot) * outerRadius
      ctx.lineTo(x, y)
      rot += step

      x = cx + Math.cos(rot) * innerRadius
      y = cy + Math.sin(rot) * innerRadius
      ctx.lineTo(x, y)
      rot += step
    }
    ctx.lineTo(cx, cy - outerRadius)

    if (pos.strokeStyle) ctx.stroke()
    else ctx.fill()
    ctx.closePath()
  }

  window.Shape = Shape

  // end
})(window)
