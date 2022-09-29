/* eslint-disable indent */
;(window._iconfont_svg_string_3670618 =
  '<svg><symbol id="icon-nan" viewBox="0 0 1024 1024"><path d="M828.875 765.657c-191.159-16.86-202.516-102.922-202.516-102.922v-85.997c111.656-43.063 145.76-207.699 145.76-207.699 0-65.457-32.153-67.281-32.153-67.281V195.093c7.486-177.753-100.33-136.61-102.25-136.61-1.791 0-60.466-46.774-60.466-46.774-41.751-31.8-134.499 11.262-134.499 11.262l-3.839 0.064c-104.937 2.751-132.387 78.479-132.387 78.479l1.92 196.437c-54.804 0-47.35 76.719-47.35 76.719 0 84.142 147.616 200.148 147.616 200.148 9.47 110.472-49.174 166.46-49.174 166.46s-100.266 3.711-213.84 37.432c-2.72 0.863-5.344 1.6-7.967 2.463C30.617 817.421 0 920.855 0 920.855v101.033l463.579 1.888 68.465-1.92h491.732V943.25c1.92-115.815-194.901-177.593-194.901-177.593z m-244.65 129.22l-71.25 128.675-69.616-128.676-16.124-64.05 30.68-136.354h111.656l29.178 136.354-14.525 64.05z"  ></path></symbol><symbol id="icon-hu" viewBox="0 0 1024 1024"><path d="M785.384 663.557c-7.651-2.87-44.112-41.162-23.708-95.476 52.33-54.35 93.09-142.291 93.09-228.827 0-132.55-87.54-202.048-188.447-202.048-100.881 0-192.46 69.498-192.46 202.048 0 86.217 44.537 173.793 96.536 228.212h-0.234c19.931 61.624-11.996 94.388-17.074 96.09-110.825 37.24-235.321 107.422-235.321 179.353v26.143c0 95.144 179.283 118.806 347.538 118.806 168.066 0 349.617-23.662 349.617-118.806v-26.143c0-69.828-123.93-140.58-229.537-179.352z m-389.17-324.303c0-98.155 38.987-171.018 95.615-217.847-27.014-68.34-87.115-104.01-156.92-104.01-94.836 0-172.835 65.341-172.835 189.969 0 81.045 33.745 163.414 82.675 214.587h-0.237c18.727 57.904-11.287 65.272-16.056 66.877C124.266 523.826 7.184 589.807 7.184 657.438v24.584c0 73.725 114.507 100.458 243.327 107.612C287.067 694.48 414.822 632.218 496.6 601.282c-51.316-61.704-100.387-157.308-100.387-262.028z"  ></path></symbol><symbol id="icon-nv" viewBox="0 0 1025 1024"><path d="M613.312 626.496v-11.2h151.296V318.08c0-124.736-113.152-225.856-252.608-225.856S259.392 193.344 259.392 318.08v297.216h151.36v11.072h-0.256L115.648 820.16v107.136H908.48v-105.92l-295.168-194.88z m7.68 186.752c-72.192 69.824-109.504-36.416-109.504-36.416s-37.312 106.24-109.568 36.416c0 0-31.744-20.544-35.136-158.208l144.704 121.728L656.192 655.04c-3.392 137.6-35.2 158.208-35.2 158.208z"  ></path></symbol></svg>'),
  (function (n) {
    var t = (t = document.getElementsByTagName('script'))[t.length - 1],
      e = t.getAttribute('data-injectcss'),
      t = t.getAttribute('data-disable-injectsvg')
    if (!t) {
      var o,
        c,
        i,
        d,
        s,
        l = function (t, e) {
          e.parentNode.insertBefore(t, e)
        }
      if (e && !n.__iconfont__svg__cssinject__) {
        n.__iconfont__svg__cssinject__ = !0
        try {
          document.write(
            '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>',
          )
        } catch (t) {
          console && console.log(t)
        }
      }
      ;(o = function () {
        var t,
          e = document.createElement('div')
        ;(e.innerHTML = n._iconfont_svg_string_3670618),
          (e = e.getElementsByTagName('svg')[0]) &&
            (e.setAttribute('aria-hidden', 'true'),
            (e.style.position = 'absolute'),
            (e.style.width = 0),
            (e.style.height = 0),
            (e.style.overflow = 'hidden'),
            (e = e),
            (t = document.body).firstChild
              ? l(e, t.firstChild)
              : t.appendChild(e))
      }),
        document.addEventListener
          ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
            ? setTimeout(o, 0)
            : ((c = function () {
                document.removeEventListener('DOMContentLoaded', c, !1), o()
              }),
              document.addEventListener('DOMContentLoaded', c, !1))
          : document.attachEvent &&
            ((i = o),
            (d = n.document),
            (s = !1),
            r(),
            (d.onreadystatechange = function () {
              'complete' == d.readyState && ((d.onreadystatechange = null), a())
            }))
    }
    function a() {
      s || ((s = !0), i())
    }
    function r() {
      try {
        d.documentElement.doScroll('left')
      } catch (t) {
        return void setTimeout(r, 50)
      }
      a()
    }
  })(window)
