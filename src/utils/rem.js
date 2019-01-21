(function(doc, win) {
  const docEl = doc.documentElement
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  const recalc = function() {
    const clientWidth = docEl.clientWidth
    if (!clientWidth) return
    if (clientWidth >= 375) { // 640是以phone5s的分辨率,可以自行修改
      docEl.style.fontSize = '50px'
    } else {
      docEl.style.fontSize = 50 * (clientWidth / 375) + 'px'// 同上
    }
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)

