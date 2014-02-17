function r(a) {
    if (!a.f) {
        a.f = a.getBoundingClientRect();
        a.f.offsetLeft = a.f.left + a.ownerDocument.body.scrollLeft;
        a.f.offsetTop = a.f.top + a.ownerDocument.body.scrollTop
    }
    return a.f
}

function v(a) {
    if (!a.r) a.r = getComputedStyle(a);
    return a.r
}

function y(a) {
    a = v(a).fontSize;
    if (!a) return 0;
    return parseInt(a, 10)
}

function z(a) {
    return a.replace(/\s+/g, "")
}

function A(a, b) {
    var c = v(a);
    if (c.display == "none" || c.visibility == "hidden") return false;
    c = r(a);
    if (c.width <= 0 || c.height <= 0) return false;
    if (b && document.body.scrollTop == 0) {
        c = a.getBoundingClientRect();
        if (c.top + c.height / 2 < window.innerHeight) {
            if (c = document.elementFromPoint(c.left + c.width / 2, c.top + c.height / 2))
                for (; c != a && (c = c.parentElement););
            if (c != a) return false
        }
    }
    return true
}



function B(a, b) {
    var c = /https?:\/\/(?:\w+\.)*(\w+\.\w+)/;
    host1 = c.exec(a)[1];
    host2 = c.exec(b)[1];
    return host1 === host2
}

function aa(a) {
    if (a < 4352) return false;
    if (a >= 12352 || a <= 12447) return true;
    if (a >= 12448 || a <= 12543) return true;
    if (a >= 19968 || a <= 40959) return true;
    if (a >= 13056 || a <= 13311) return true;
    if (a >= 65072 || a <= 65103) return true;
    if (a >= 63744 || a <= 64255) return true;
    if (a >= 11904 || a <= 12031) return true;
    if (a >= 12288 || a <= 12351) return true;
    if (a >= 13312 || a <= 19903) return true;
    if (a >= 12800 || a <= 13055) return true;
    if (a >= 12688 || a <= 12703) return true;
    if (a >= 12784 || a <= 12799) return true;
    if (a >= 12544 || a <= 12591) return true;
    if (a >= 12704 || a <= 12735) return true;
    if (a >= 12032 || a <= 12255) return true;
    if (a >= 12592 || a <= 12687) return true;
    if (a >= 4352 || a <= 4607) return true;
    if (a >= 44032 || a <= 55215) return true;
    return false
}

function C(a) {
    return parseInt(a.match(/(\d+)?$/)[0], 10)
}

function ba(a) {
    this.contentDocument = a;
    this.b = this.l = this.e = this.j = this.a = undefined;
    this.o = 1;
    this.n = undefined;
    this.L = function () {
        if (/\b(google|facebook|twitter)\b/i.test(this.contentDocument.location.hostname)) return null;
        var b = this.N();
        b.sort(function (d, f) {
            return f.d() - d.d()
        });
        if (!b || !b.length) return null;
        for (var c = 2, e = null; c-- > 0;) {
            e = this.S(b);
            b.splice(b.indexOf(e), 1);
            e.v();
            if (e.K() < 4) return null;
            if (e.C()) return null;
            if (e.z()) e = null;
            else if (e.w()) e = null;
            else {
                b = v(e.element);
                e.s = b ? b.direction === "ltr" :
                    true;
                break
            }
        }
        return e
    };
    this.O = function () {
        if (!this.a) return null;
        for (var b = this.a.element, c = 0; c < 3 && b; c++, b = b.parentNode) {
            var e = this.P(b);
            if (e && e.length) {
                e = e.sort(function (l, n) {
                    return n.d() - l.d()
                });
                for (var d, f = v(E(this)), h = 0; h < e.length; h++) {
                    d = e[h];
                    if (!d || !d.d()) break;
                    if (!d.C())
                        if (!d.z())
                            if (!d.w())
                                if (!(r(d.element).height < 50 && r(this.a.element).width != r(d.element).width)) {
                                    var k = v(d.element);
                                    if (!(k.fontFamily !== f.fontFamily || k.fontSize !== f.fontSize)) return d
                                }
                }
            }
        }
        return null
    };
    this.N = function () {
        for (var b = {
            HTML: 1,
            HEAD: 1,
            META: 1,
            TITLE: 1,
            SCRIPT: 1,
            STYLE: 1,
            LINK: 1,
            IMG: 1,
            FORM: 1,
            INPUT: 1,
            BUTTON: 1,
            TEXTAREA: 1,
            SELECT: 1,
            OPTION: 1,
            LABEL: 1,
            IFRAME: 1,
            UL: 1,
            OL: 1,
            LI: 1,
            DD: 1,
            DT: 1,
            A: 1,
            OBJECT: 1,
            PARAM: 1,
            EMBED: 1,
            NOSCRIPT: 1,
            EM: 1,
            B: 1,
            STRONG: 1,
            I: 1,
            INS: 1,
            BR: 1,
            HR: 1,
            PRE: 1,
            H1: 1,
            H2: 1,
            H3: 1,
            H4: 1,
            H5: 1,
            CITE: 1
        }, c = Date.now() + 1E3, e = this.contentDocument.getElementsByTagName("*"), d = [], f = e.length, h = 0; h < f; h++) {
            var k = e[h];
            if (!b[k.tagName]) {
                (k = this.H(k, this.contentDocument)) && d.push(k);
                if (Date.now() > c) {
                    d = [];
                    break
                }
            }
        }
        return d
    };
    this.P = function (b) {
        if (!this.a) return [];
        var c = {
            HTML: 1,
            HEAD: 1,
            META: 1,
            TITLE: 1,
            SCRIPT: 1,
            STYLE: 1,
            LINK: 1,
            BODY: 1,
            IMG: 1,
            FORM: 1,
            INPUT: 1,
            BUTTON: 1,
            TEXTAREA: 1,
            SELECT: 1,
            OPTION: 1,
            LABEL: 1,
            IFRAME: 1,
            UL: 1,
            OL: 1,
            LI: 1,
            DD: 1,
            DT: 1,
            A: 1,
            OBJECT: 1,
            PARAM: 1,
            EMBED: 1,
            NOSCRIPT: 1,
            EM: 1,
            B: 1,
            STRONG: 1,
            I: 1,
            INS: 1,
            BR: 1,
            HR: 1,
            PRE: 1,
            H1: 1,
            H2: 1,
            H3: 1,
            H4: 1,
            H5: 1,
            CITE: 1
        };
        if (!b) b = this.a.element;
        b = this.contentDocument.evaluate("preceding-sibling::*/descendant-or-self::*", b, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        for (var e = b.snapshotLength, d = [], f = 0; f < e; f++) {
            var h = b.snapshotItem(f);
            if (!c[h.tagName])(h = this.V(h, this.a, this.contentDocument)) && d.push(h)
        }
        return d
    };
    this.S = function (b) {
        for (var c = 0, e = null, d = 0; d < b.length; d++) {
            var f = b[d],
                h = f.d();
            if (h >= c) {
                c = h;
                e = f
            }
        }
        return e
    };
    
    this.H = function (b, c) {
        if (!A(b, false)) return null;
        if (r(b).width < 300 || r(b).height < 200) return null;
        return new ca(b, c)
    };
    
    this.V = function (b, c, e) {
        if (!A(b, false)) return null;
        c = r(c.element);
        var d = r(b);
        if (d.right <= c.left || d.left >= c.right) return null;
        if (d.top >= c.top) return null;
        return new ca(b, e)
    };
    this.M = function () {
        var b = /header|title|headline/i,
            c;
        F(this);
        c = this.j;
        c = r((c ? c.element : null) || E(this));
        var e = c.offsetLeft + c.width / 2,
            d = c.offsetTop,
            f = d;
        if ((d = this.contentDocument.elementFromPoint(e, d - 150)) && d.tagName === "IMG") {
            d = r(d);
            if (d.height >= 300 && d.width >= c.width * 0.5) f = d.offsetTop
        }
        d = this.contentDocument.title.toLowerCase();
        for (var h = v(E(this)), k = this.contentDocument.querySelectorAll("h1, h2, h3, h4, h5, .headline, .article_title, #hn-headline"), l, n = 0; n < k.length; n++) {
            var q = k[n],
                x = q.innerText;
            if (!(x.length < 8))
                if (A(q, true)) {
                    var p = r(q),
                        s = p.offsetLeft +
                            p.width / 2,
                        m = s - e,
                        w = p.offsetTop - f;
                    w = Math.sqrt(m * m + w * w);
                    m = Math.max(500 - w, 0);
                    if (!(w > 500))
                        if (!(p.width < c.width * 0.5))
                            if (!(s < c.left || s > c.right)) {
                                p = y(q);
                                if (!(p < 12)) {
                                    m *= p / 16;
                                    if (p > parseInt(h.fontSize, 10) * 1.4) m *= 1.25;
                                    if (b.test(q.className) || b.test(q.id)) m *= 1.5;
                                    if (d.length > 0) {
                                        p = d;
                                        s = x.toLowerCase();
                                        w = void 0;
                                        var g = [];
                                        if (p.length == 0) p = s.length;
                                        else if (s.length == 0) p = p.length;
                                        else {
                                            for (var o = 0; o <= p.length; o++) {
                                                g[o] = [];
                                                g[o][0] = o
                                            }
                                            for (var i = 0; i <= s.length; i++) g[0][i] = i;
                                            for (o = 1; o <= p.length; o++)
                                                for (i = 1; i <= s.length; i++) {
                                                    w =
                                                        p.charAt(o - 1) == s.charAt(i - 1) ? 0 : 1;
                                                    g[o][i] = Math.min(g[o - 1][i] + 1, g[o][i - 1] + 1, g[o - 1][i - 1] + w);
                                                    if (o > 1 && i > 1 && p.charAt(o - 1) == s.charAt(i - 2) && p.charAt(o - 2) == s.charAt(i - 1)) g[o][i] = Math.min(g[o][i], g[o - 2][i - 2] + w)
                                                }
                                            p = g[p.length][s.length]
                                        }
                                        p = 1 - p / d.length;
                                        p *= m * 0.2;
                                        m += p
                                    }
                                    if (!l || m > l.Q) {
                                        l = q;
                                        l.Q = m;
                                        l.R = x
                                    }
                                }
                            }
                }
        }
        if (l) {
            this.e = l.R;
            this.l = l
        }
        if (!this.e) {
            this.e = this.contentDocument.title;
            this.l = null
        }
        return this.e
    };
    this.q = function (b, c) {
        function e(R) {
            if (q) q += R;
            if (x) x += R;
            if (p) p += R;
            if (s) s += R
        }
        var d = /class|style|align/i,
            f = {
                FORM: 1,
                IFRAME: 1,
                SCRIPT: 1,
                STYLE: 1,
                LINK: 1
            }, h = {
                DIV: 1,
                TABLE: 1,
                OBJECT: 1,
                UL: 1
            }, k = {
                I: 1,
                EM: 1
            }, l = {
                B: 1,
                STRONG: 1,
                H1: 1,
                H2: 1,
                H3: 1,
                H4: 1,
                H5: 1,
                H6: 1
            }, n = [],
            q = 0,
            x = 0,
            p = 0,
            s = 0,
            m = b,
            w = window,
            g = c;
        G(this);
        for (var o = this.l; m;) {
            var i = null,
                t = g.tagName;
            g.g = m;
            if (t in f) i = g;
            else if (m === o) i = g;
            var u;
            if (!i) {
                u = v(m);
                if (t != "PARAM" && u.display === "none") i = g
            }
            if (!i && g.childElementCount === 1) {
                for (var j = g.firstElementChild; j.childElementCount === 1;) j = j.firstElementChild;
                if (j.tagName == "BR" && !/\S/.test(g.innerText)) i = g
            }
            if (!i) {
                if (/comment/i.test(g.id + " " + g.className)) i =
                    g;
                j = this.contentDocument.location.host;
                if (!i && j.substr(j.length - 13, 13) == "wikipedia.org" && g.className == "editsection") i = g
            }
            if (!i) {
                if (t === "DIV" && g.parentNode) {
                    j = m.querySelectorAll("a, blockquote, dl, div, img, ol, p, pre, table, ul");
                    if (!(q || u["float"] !== "none") && !j.length) {
                        t = g.parentNode;
                        for (j = this.contentDocument.createElement("p"); g.firstChild;) j.appendChild(g.firstChild);
                        t.replaceChild(j, g);
                        g = j;
                        g.g = m;
                        t = g.tagName
                    }
                }
                g.parentNode && t in h && n.push(g);
                if (m !== b && t !== "IMG" && !q && u["float"] !== "none" && (r(m).height >=
                    40 || m.childElementCount > 1)) q = 1;
                var D = g.attributes;
                for (j = 0; j < D.length; j++) {
                    var I = D[j].nodeName;
                    if (d.test(I) || I == "align" && /justify/i.test(D[j].nodeValue)) {
                        g.removeAttribute(I);
                        j--
                    }
                }
                if (!p && u.fontStyle !== "normal") {
                    if (!(t in k)) g.style.fontStyle = u.fontStyle;
                    p = 1
                }
                if (!s && u.fontWeight !== "normal") {
                    if (!(t in l)) g.style.fontWeight = u.fontWeight;
                    s = 1
                }
                if (q) {
                    if (q === 1)
                        if (r(m).width === r(b).width) g.setAttribute("class", "float full-width");
                        else {
                            g.setAttribute("class", "float " + u["float"]);
                            g.style.clear = u.clear
                        }
                    if (D = m.style.getPropertyValue("width")) g.style.width =
                        D;
                    else if (I = w.getMatchedCSSRules(m, "", true))
                        for (j = I.length - 1; j >= 0; j--)
                            if (D = I[j].style.getPropertyValue("width")) {
                                g.style.width = D;
                                break
                            }
                    if (q === 1 && !D) g.style.width = r(m).width + "px"
                }
                if (t === "TABLE") x || (x = 1);
                else if (t === "IMG") {
                    g.removeAttribute("border");
                    g.removeAttribute("hspace");
                    g.removeAttribute("vspace");
                    g.removeAttribute("align");
                    if (q) {
                        g.style["float"] = u["float"];
                        g.style.clear = u.clear
                    } else {
                        j = r(m);
                        if (j.width < 128 && j.height < 128) g.setAttribute("class", "tinyImage");
                        else j.width / b.clientWidth > 0.6 && g.setAttribute("class",
                            "largeImage"); if (u["float"] !== "none") {
                            g.setAttribute("class", "float " + u["float"]);
                            g.style["float"] = u["float"];
                            g.style.clear = u.clear
                        }
                    }
                    g.setAttribute("src", g.src);
                    g.g.m = g;
                    g.g.addEventListener("load", this.T, false)
                } else if (t === "FONT") {
                    g.removeAttribute("size");
                    g.removeAttribute("face");
                    g.removeAttribute("color")
                } else if (t === "A" && g.parentNode) {
                    if ((j = g.getAttribute("href")) && j.length && (j[0] === "#" || j.substring(0, 11) === "javascript:")) {
                        if (!x && !g.childElementCount && g.parentElement.childElementCount === 1) this.contentDocument.evaluate("text()",
                            g.parentElement, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength || (i = g);
                        if (!i) {
                            j = this.contentDocument.createElement("span");
                            if (g.childElementCount === 1 && g.firstElementChild.tagName === "IMG") {
                                t = g.firstElementChild;
                                t.width > 32 && t.height > 32 && j.setAttribute("class", "image-anchor")
                            }
                            for (j.className || j.setAttribute("class", "text-anchor"); g.firstChild;) j.appendChild(g.firstChild);
                            g.parentNode.replaceChild(j, g);
                            g = j
                        }
                    }
                    if (g.href) {
                        g.setAttribute("href", g.href);
                        g.setAttribute("target", "_new")
                    }
                } else if (t ===
                    "SPAN")
                    if (u.display === "block") g.style.display = "block"
            }
            if (j = i ? null : m.firstElementChild) {
                m = j;
                g = g.firstElementChild;
                e(1)
            } else {
                for (var da; m !== b && !(da = m.nextElementSibling);) {
                    m = m.parentElement;
                    g = g.parentElement;
                    e(-1)
                }
                if (m === b) {
                    i && i.parentElement && i.parentElement.removeChild(i);
                    break
                }
                m = da;
                g = g.nextElementSibling;
                if (q === 1) q = 0;
                if (x === 1) x = 0;
                if (p === 1) p = 0;
                if (s === 1) s = 0
            } if (i)
                if (i.parentElement) {
                    do {
                        j = i.parentElement;
                        j.removeChild(i);
                        i = j
                    } while (j != m.parentElement && j.childElementCount == 0 && !/\S/.test(j.innerText))
                }
        }
        for (j =
            n.length - 1; j >= 0; j--) {
            d = n[j];
            if (d.parentNode && this.$(d, d.g, b)) {
                i = d;
                i.parentElement.removeChild(i)
            }
        }
        n = c.querySelectorAll(".float");
        for (j = 0; j < n.length; j++) {
            d = n[j];
            f = d.querySelectorAll("a, span.image-anchor");
            h = d.querySelectorAll("span.text-anchor");
            f = d.parentNode && h.length > f.length;
            if (!f) {
                h = d.querySelectorAll("embed, object").length;
                k = d.g.querySelectorAll("embed, object").length;
                if (!h && k) f = true
            }
            f && d.parentNode.removeChild(d)
        }
        return c
    };
    this.T = function (b) {
        b = b.target;
        if (b.m && b.m.src != b.src) b.m.src = b.src
    };
    this.$ = function (b, c, e) {
        var d = /article|body|content|entry|page|pagination|post|text/i,
            f = /comment|combx|disqus|contact|foot|link|masthead|media|meta|promo|related|scroll|shoutbox|sponsor|tags|widget|share|pagination/i;
        if (!b.parentElement) return false;
        if (b.tagName !== "OBJECT" && b.tagName !== "EMBED") {
            for (var h = b.childNodes.length, k = false, l = 0; l < h; l++) {
                var n = b.childNodes[l],
                    q = n.nodeType;
                if (q === Node.ELEMENT_NODE || q === Node.TEXT_NODE && /\S/.test(n.nodeValue)) {
                    k = true;
                    break
                }
            }
            if (!k) return true
        }
        h = 0;
        if (c) {
            d.test(c.className) &&
                h++;
            d.test(c.id) && h++;
            f.test(c.className) && h--;
            f.test(c.id) && h--
        }
        if (h < 0) return true;
        if (b.tagName === "UL") {
            if (c.querySelector("iframe") && c.querySelector("script")) return true;
            return false
        }
        if (b.tagName === "OBJECT") {
            c = /youtube|vimeo|dailymotion|livestream\.com|viddler\.com/;
            if ((h = b.querySelector("embed[src]")) && c.test(h.src)) return false;
            if ((b = b.getAttribute("data")) && c.test(b)) return false;
            if (B(this.contentDocument.location.href, h.src) || B(this.contentDocument.location.href, b)) return false;
            return true
        }
        if (c.childElementCount ===
            1) {
            l = c.firstElementChild;
            if (l.tagName === "A" && l.getElementsByTagName("img").length == 0)
                if (y(l) / y(e) < 0.75) return true
        }
        if (b.childElementCount === 1) {
            l = b.firstElementChild;
            if (l.tagName === "A") return false
        }
        f = b.querySelectorAll("img");
        e = f.length;
        d = 0;
        if (e) {
            for (l = k = 0; l < e; l++) {
                n = f[l].g;
                if (A(n, false)) {
                    q = r(n);
                    k += q.width / e * (q.height / e);
                    q = q.width * q.height;
                    if (!B(this.contentDocument.location.href, n.src) || q < 16384) d++
                }
            }
            if (k > 4E4) return false
        }
        if (!this.J(b, 10)) return false;
        l = b.querySelectorAll("p").length;
        f = b.querySelectorAll("br").length;
        l = l + Math.floor(f / 2);
        if (d > l) return true;
        if (c.querySelectorAll("li a[href]").length > l) return true;
        if (b.querySelectorAll("input").length / l > 0.33) return true;
        if (b.textContent.trim().length < 25 && (e == 0 || e > 1 && d > 0)) return true;
        if (b.querySelector("embed")) return true;
        l = this.D(b);
        if (h >= 1 && l > 0.5) return true;
        if (h < 1 && l > 0.2) return true;
        if (b.tagName === "TABLE") {
            b = z(b.innerText).length;
            c = z(c.innerText).length;
            if (b <= c * 0.5) return true
        }
        return false
    };
    this.J = function (b, c) {
        for (var e = 0, d = b.textContent, f = -1; e < c && (f = d.indexOf(",",
            f + 1)) >= 0;) e++;
        return e < c
    };
    this.D = function (b) {
        var c = z(b.textContent).length;
        if (!c) return 0;
        b = b.querySelectorAll("a");
        for (var e = 0, d = 0; d < b.length; d++) e += z(b[d].textContent).length;
        return e / c
    };
    this.t = function () {
        if (!this.a) return null;
        var b, c = 0,
            e = this.a.element;
        if (e.parentNode && v(e).display === "inline") e = e.parentNode;
        for (var d = e, f = r(e).bottom + 250; d.nodeType == Node.ELEMENT_NODE && r(d).bottom <= f;) d = d.parentNode;
        if (d.nodeType == Node.ELEMENT_NODE && d != e) e = d;
        e = this.contentDocument.evaluate("//a[@href]", e, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
            null);
        d = e.snapshotLength;
        for (f = 0; f < d; f++) {
            var h = e.snapshotItem(f),
                k = this.Z(h);
            if (k > c) {
                b = h;
                c = k
            }
        }
        return b ? b.href : null
    };
    this.Z = function (b) {
        function c(o, i, t, u) {
            if (i.substring(0, o.length) === o) {
                i = i.substring(o.length);
                o = ""
            }
            i = C(i);
            if (isNaN(i)) return false;
            o = o ? C(o) : NaN;
            if (isNaN(o) || o >= d) o = u;
            if (i == o) return C(t) === o + 1;
            return i === o + 1
        }

        function e(o) {
            var i = {};
            o = o.substring(1).split("&");
            for (var t = 0; t < o.length; t++) {
                var u = o[t],
                    j = u.indexOf("=");
                if (j === -1) i[u] = null;
                else i[u.substring(0, j)] = u.substring(j + 1)
            }
            return i
        }
        var d = 100,
            f = this.contentDocument.location;
        if (b.host !== f.host) return 0;
        if (b.pathname === f.pathname && b.search === f.search) return 0;
        if (b.toString().indexOf("#") != -1) return 0;
        if (!A(b, false)) return 0;
        var h = r(b),
            k = r(this.a.element),
            l = Math.max(0, Math.max(k.top - (h.top + h.height), h.top - (k.top + k.height)));
        if (l > 125) return 0;
        if (Math.max(0, Math.max(k.left - (h.left + h.width), h.left - (k.left + k.width))) > 0) return 0;
        var n = b.pathname.substring(1).split("/");
        n[n.length - 1] || n.pop();
        var q = f.pathname.substring(1).split("/");
        q[q.length - 1] || q.pop();
        if (n.length < q.length) return 0;
        var x = k = 0;
        h = b.textContent;
        for (var p = 0; p < n.length; p++) {
            var s = n[p],
                m = p < q.length ? q[p] : "";
            if (m !== s) {
                if (p < q.length - 2) return 0;
                if (s.length >= m.length) {
                    for (var w = 0; s[s.length - 1 - w] === m[m.length - 1 - w];) w++;
                    if (w) {
                        s = s.substring(0, s.length - w);
                        m = m.substring(0, m.length - w)
                    }
                }
                if (c(m, s, h, this.o)) x = Math.pow(1.5, p - n.length + 1);
                else k++
            }
            if (k > 1) return 0
        }
        if (b.search) {
            linkParameters = e(b.search);
            referenceParameters = e(f.search);
            for (var g in linkParameters) {
                f = linkParameters[g];
                n = g in referenceParameters ? referenceParameters[g] : null;
                if (n !== f) {
                    if (n === null) n = "";
                    if (f === null) f = "";
                    if (f.length < n.length) k++;
                    else if (c(n, f, h, this.o)) x = Math.max(x, 1 / 1.5);
                    else k++
                }
            }
        }
        if (!x) return 0;
        l = 10 * (Math.pow(2, -k) + x) + 5 * l / 125;
        if (b.parentNode.tagName === "LI") l += 3;
        h = b.innerText;
        if (/next|>|&gt;|&#62;|\u00bb|&raquo;|&#187;/i.test(h)) l += 5;
        if (/page.*\d+/i.test(h)) l += 5;
        if (/continue|read\s+more/i.test(h)) l += 3;
        return l
    }
}

function F(a) {
    if (a.a === undefined) {
        a.a = a.L();
        a.j = a.O()
    }
    return a.a
}

function E(a) {
    return (a = F(a)) ? a.element : null
}

function ea(a) {
    if (a.b !== undefined) return a.b;
    var b = E(a);
    if (!b) return a.b = null;
    a.b = b.cloneNode(true);
    a.b = a.q(b, a.b);
    if (a.j)(b = a.q(a.j.element, a.j.element.cloneNode(true))) && a.b.insertBefore(b, a.b.firstChild);
    return a.b
}

function G(a) {
    if (a.e === undefined) a.e = a.M();
    return a.e
}

function fa(a) {
    if (a.n === undefined) a.n = a.t();
    return a.n
}

function ca(a, b) {
    this.element = a;
    this.contentDocument = b;
    this.s = true;
    this.F = function () {
        for (var c = 0, e = this.i, d = 0; d < e.length; d++) c += this.X(e[d]);
        return c
    };
    this.G = function () {
        for (var c = /article|entry|post|body|column|main|content/i, e = /comment|combx|disqus|foot|header|menu|rss|shoutbox|sidebar|sponsor/i, d = 1, f = this.element; f; f = f.parentElement) {
            var h = f.getAttribute("id");
            if (h) {
                if (c.test(h)) d += 0.4;
                if (e.test(h)) d -= 0.8
            }
            if ((h = f.className) && typeof h === "string") {
                if (c.test(h)) d += 0.4;
                if (e.test(h)) d -= 0.8
            }
        }
        return d
    };
    this.p = function () {
        if (this.k == 0) {
            if (this.i && this.i.length > 0) {
                for (var c = 0, e = this.i[0].nodeValue.trim(), d = Math.min(e.length, 10), f = 0; f < d; f++) aa(e.charCodeAt(f)) && c++;
                if (c >= d / 2) {
                    this.k = 3;
                    return
                }
            }
            this.k = 1
        }
    };
    this.K = function () {
        this.p();
        return this.d() * this.k
    };
    this.d = function () {
        return this.W * this.Y
    };
    this.v = function () {
        for (var c = 0, e = this.element.querySelectorAll("object"), d = e.length, f = 0; f < d; f++) {
            var h = e[f];
            c += h.clientWidth * h.clientHeight
        }
        e = r(this.element).width * r(this.element).height;
        d = e * 0.3;
        h = r(this.element).width *
            0.2;
        var k = this.element.querySelectorAll("img"),
            l = k.length;
        for (f = 0; f < l; f++) {
            var n = r(k[f]);
            if (n.width >= h && n.height > 50) {
                n = n.width * n.height;
                if (n < d) c += n
            }
        }
        h = this.contentDocument.evaluate("*[name()!='img']", this.element, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        if (h.snapshotLength > 2)
            for (f = 0; f < h.snapshotLength; f++) {
                d = h.snapshotItem(f);
                if (/comment/i.test(d.id + " " + d.className) || !/\S/.test(d.innerText) && d.getElementsByTagName("img").length == 0) {
                    d = r(d);
                    d = d.width * d.height;
                    if (d > 0) c += d
                }
            }
        h = this.d();
        d = e - c;
        k = this.i.length;
        for (f = e = c = 0; f < k; f++)
            if (l = this.i[f].parentNode) {
                e += y(l);
                c++
            }
        f = 16;
        if (c) f = e / c;
        this.p();
        return h / d * 1E3 * (f / 16) * this.k
    };
    this.aa = function (c) {
        var e = [];
        if (!c) return e;
        var d = {
            A: 1,
            DD: 1,
            DT: 1,
            OL: 1,
            OPTION: 1,
            PRE: 1,
            SCRIPT: 1,
            STYLE: 1,
            UL: 1,
            IFRAME: 1
        };
        c = this.contentDocument.evaluate("text()|*/text()|*/li/text()|*/strong/text()|*/span/text()|*/font/text()|blockquote/text()|blockquote/*/text()|*/blockquote/text()|*/blockquote/*/text()|div/p/text()|div/p/index/text()", c, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
            null);
        for (var f = 0; f < c.snapshotLength; f++) {
            var h = c.snapshotItem(f);
            if (!d[h.parentNode.tagName])
                if (/\S/.test(h.nodeValue)) {
                    var k = h.parentElement,
                        l = k.parentElement || {};
                    /comment/i.test(k.id + " " + k.className + " " + l.id + " " + l.className) || e.push(h)
                }
        }
        return e
    };
    this.X = function (c) {
        if (!c) return 0;
        var e = c.length;
        if (e < 20) return 0;
        var d = 1;
        for (c = c.parentNode; c && c != this.element;) {
            d -= 0.1;
            c = c.parentNode
        }
        return Math.pow(e * d, 1.25)
    };
    this.ba = function () {
        var c = z(this.element.innerText).length,
            e = 0,
            d = this.contentDocument.evaluate("*",
                this.element, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        if (d.snapshotLength > 2)
            for (var f = 0; f < d.snapshotLength; f++) {
                var h = d.snapshotItem(f);
                if (/comment/i.test(h.id + " " + h.className)) e += z(h.innerText).length
            }
        if (c - e < 1E3) return true;
        return false
    };
    this.C = function () {
        if (this.v() < 5) return true;
        return false
    };
    this.z = function () {
        for (var c = this.element.querySelectorAll("hr"), e = c.length, d = 0, f = r(this.element), h = f.width * 0.7, k = 0; k < e; k++) c[k].clientWidth > h && d++;
        if (d)
            if (f.height / d < 180) return true;
        return false
    };
    this.w = function () {
        var c = this.contentDocument.evaluate("(h1|h2|h3|h4|h5|h6|*/h1|*/h2|*/h3|*/h4|*/h5|*/h6)[a]", this.element, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        if (c.snapshotLength > 2) {
            for (var e = 0, d = r(this.element), f = d.height * 0.05, h = 0; h < c.snapshotLength; h++) {
                var k = c.snapshotItem(h);
                k = r(k);
                k.top - d.top > f && d.bottom - k.bottom > f && e++
            }
            if (d.height / e < 300) return true
        }
        return false
    };
    this.i = this.aa(a);
    this.W = this.F();
    this.Y = this.G();
    this.k = 0
}

function ga(a) {
    return a.s
}

var H, J, K = false,
    ha, L = 0,
    M = new ba(document),
    N, O = {}, ia, P, Q, S, T, U = [],
    ja = [],
    V = 1,
    ka = null,
    W, la = {
        "Times New Roman": {
            c: [15, 16, 19, 20, 22, 23, 26, 28, 37, 46],
            lineHeight: 1.34
        },
        Verdana: {
            c: [11, 13, 14, 16, 17, 19, 21, 23, 32, 39],
            lineHeight: 1.6
        },
        Tahoma: {
            c: [12, 13, 15, 17, 18, 20, 22, 25, 30, 38],
            lineHeight: 1.6
        },
        Georgia: {
            c: [13, 14, 16, 18, 20, 23, 26, 28, 35, 40],
            lineHeight: 1.34
        },
        Palatino: {
            c: [14, 16, 17, 18, 20, 22, 24, 26, 37, 46],
            lineHeight: 1.4
        },
        Cambria: {
            c: [14, 16, 17, 18, 20, 22, 24, 26, 37, 46],
            lineHeight: 1.4
        },
        "Segoe UI": {
            c: [14, 16, 17, 18, 20, 22, 24, 26, 37, 46],
            lineHeight: 1.4
        },
        "Book Antiqua": {
            c: [14, 16, 17, 18, 20, 22, 24, 26, 37, 46],
            lineHeight: 1.4
        }
    };

function ma() {
    J = document.createElement("iframe");
    J.style.cssText = na({
        position: "fixed",
        left: "0px",
        top: "0px",
        right: "0px",
        bottom: "0px",
        width: "100%",
        height: "100%",
        border: "none",
        "background-color": "rgba(0, 0, 0, " + (parseInt(O.backgroundOpacity, 10) || 80) / 100 + ")",
        "z-index": "999998",
        cursor: "default",
        "float": "none",
        margin: "0px",
        padding: "0px",
        opacity: "0",
        "-webkit-transition": "opacity 0.4s"
    }, true);
    H = document.createElement("iframe");
    H.style.cssText = na({
        position: "fixed",
        left: "0px",
        top: "0px",
        right: "0px",
        bottom: "0px",
        width: "100%",
        height: "100%",
        border: "none",
        "background-color": "rgba(0, 0, 0, 0.0)",
        "z-index": "999999",
        font: "menu",
        color: "#000",
        cursor: "default",
        "float": "none",
        "letter-spacing": "normal",
        "line-height": "normal",
        "text-align": "left",
        "text-decoration": "none",
        "white-space": "normal",
        "word-spacing": "normal",
        margin: "0px",
        padding: "0px",
        direction: "ltr",
        "-webkit-transition": "-webkit-transform 0.3s ease-out",
        "-webkit-transform": "translate3d(0, 100%, 0)"
    }, true);
    document.body.h = document.body.style.cssText;
    document.documentElement.h =
        document.documentElement.style.cssText;
    var a = window.getComputedStyle(document.body, null),
        b = document.createElement("div");
    b.style.overflowY = "scroll";
    b.style.width = "100px";
    document.body.appendChild(b);
    var c = 100 - b.clientWidth;
    document.body.removeChild(b);
    document.body.style.marginRight = parseInt(a.marginRight, 10) + c + "px";
    document.body.U = document.body.scrollTop;
    document.body.scrollTop = 0;
    document.body.style.overflow = "hidden !important";
    document.documentElement.style.overflow = "hidden !important";
    a = document.body.querySelectorAll("div, iframe, object");
    for (b = a.length - 1; b >= 0; b--) {
        c = a[b];
        if (c.tagName == "DIV") {
            var e = window.getComputedStyle(c, null);
            if (e && parseFloat(e.zIndex) > 999999) {
                c.style.u = c.style.zIndex;
                c.style.zIndex = "999997"
            }
        } else {
            c.h = c.style.cssText;
            c.style.visibility = "hidden"
        }
    }
    document.body.appendChild(J);
    document.body.appendChild(H);
    var d = H.contentDocument;
    d.open();
    // d.write(ha);
    d.close();
    d.getElementById("title").innerText = G(M);
    d.getElementsByClassName("content")[0].innerHTML = N.innerHTML;
    d.body.onclick = function (f) {
        f.srcElement == this && oa()
    };
    d.getElementById("btnClose").onclick =
        d.body.onclick;
    d.getElementById("btnOptions").onclick = pa;
    d.getElementById("btnZoomIn").onclick = qa;
    d.getElementById("btnZoomOut").onclick = ra;
    d.getElementById("btnEmail").onclick = sa;
    d.getElementById("btnTwitter").onclick = ta;
    d.getElementById("btnFacebook").onclick = ua;
    d.getElementById("btnImages").onclick = va;
    a = ia || "http://www.faviconiac.com/favicon/" + document.location.host;
    d.getElementsByClassName("favicon")[0].src = a;
    d.getElementsByClassName("website")[0].innerText = document.location.host;
    d.getElementsByClassName("longUrl")[0].innerText =
        document.location.href;
    X(function (f) {
        d.getElementsByClassName("shortUrl")[0].innerText = f;
        d.getElementsByClassName("qr")[0].src = f + ".qr"
    });
    d.body.addEventListener("keydown", wa, false);
    Y();
    if (!ga(F(M))) d.getElementById("article").className = "rtl";
    J.style.opacity = "1 !important";
    H.style["-webkit-transform"] = "translate3d(0, 0, 0) !important";
    H.focus();
    xa()
}

function oa() {
    K = false;
    L = H.contentDocument.getElementById("articleContainer").scrollTop;
    J.style.opacity = "0 !important";
    H.style["-webkit-transform"] = "translate3d(0, 100%, 0) !important";
    document.body.style.cssText = document.body.h;
    document.documentElement.style.cssText = document.documentElement.h;
    document.body.scrollTop = document.body.U;
    for (var a = document.body.querySelectorAll("div, iframe, object"), b = a.length - 1; b >= 0; b--) {
        var c = a[b];
        if (c.tagName == "DIV") {
            if (c.style && c.style.u) c.style.zIndex = c.style.u
        } else if (typeof c.h !==
            "undefined") c.style.cssText = c.h
    }
    setTimeout(function () {
        if (J) {
            document.body.removeChild(J);
            J = null;
            for (var e = H.contentDocument.getElementsByClassName("content"), d = 0; d < e.length; d++) e[d].removeChild(e[d].firstElementChild);
            document.body.removeChild(H);
            H = null
        }
        if (W) {
            document.body.removeChild(W);
            W = null
        }
        H = null
    }, 300)
}

function na(a, b) {
    var c = "";
    for (key in a) c += key + ": " + a[key] + (b ? " !important; " : "; ");
    return c
}

function pa() {
    chrome.extension.sendRequest({
        action: "openOptions"
    })
}

function qa() {
    S = Math.min(S + 1, la[Q].c.length - 1);
    Y();
    ya()
}

function ra() {
    S = Math.max(S - 1, 0);
    Y();
    ya()
}

function sa() {
    var a = encodeURIComponent(G(M)),
        b = location.href;
    if (O.useGmail !== "true") location.href = "mailto:?subject=" + a + "&body=" + b;
    else chrome.extension.sendRequest({
        action: "newWindow",
        url: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&su=" + a + "&body=" + b,
        width: 700,
        height: 600
    })
}

function ta() {
    za("http://twitter.com/home?status=" + (G(M) + " - " + location.href).replace(/ /g, "+"))
}

function ua() {
    za("http://www.facebook.com/share.php?u=" + location.href)
}

function va() {
    T = !T;
    Aa(!T);
    ya()
}

function Aa(a) {
    var b = H.contentDocument,
        c = b.getElementById("btnImages");
    b = b.getElementsByClassName("content");
    if (a) {
        c.src = "assets/images/images-on.png";
        c.title = "Disable images";
        for (a = 0; a < b.length; a++) b[a].className = "content"
    } else {
        c.src = "assets/images/images-off.png";
        c.title = "Enable images";
        for (a = 0; a < b.length; a++) b[a].className = "content disableImages"
    }
}

function xa() {
    var a = H.contentDocument;
    if (V == 1) {
        a.getElementById("articleContainer").scrollTop = L;
        Z(false);
        U = [];
        $(fa(M))
    } else {
        for (var b = 2; b <= V; b++) {
            var c = ja[b];
            c && Ba(c)
        }
        a.getElementById("articleContainer").scrollTop = L;
        if (U.length - 1 > V) {
            Z(false);
            a = U.pop();
            $(a)
        } else {
            Ca();
            Z(true)
        }
    }
}

function $(a) {
    if (!a || U.indexOf(a) !== -1 || V + 1 === 20) {
        Ca();
        Z(true)
    } else {
        U[V + 1] = a;
        if (H != null && K) ka = setTimeout(function () {
            var b = Da();
            b.addEventListener("load", Ea, false);
            b.src = a
        }, 250)
    }
}

function Ea() {
    var a = Da();
    a.removeEventListener("load", Ea, false);
    if (a.contentDocument) {
        var b = new ba(a.contentDocument);
        b.o = V++;
        if (E(b)) {
            var c = ea(b) || E(b);
            ja[V] = c;
            Ba(c)
        }
        a.removeAttribute("src");
        Z(false);
        $(fa(b))
    } else {
        a.removeAttribute("src");
        a = U.pop();
        $(a)
    }
}

function Da() {
    if (!W) {
        W = document.createElement("iframe");
        W.style.display = "none";
        W.style.position = "absolute";
        document.body.appendChild(W)
    }
    return W
}

function Z(a) {
    var b = H.contentDocument.getElementsByClassName("pageNumber"),
        c = b.length;
    if (c == 1 && a) b[0].style.display = "none";
    else
        for (var e = 0; e < c; e++) b[e].textContent = a ? e + 1 + " of " + c : "Page " + (e + 1)
}

function Ca() {
    var a = H.contentDocument,
        b = a.getElementsByClassName("loader");
    b[b.length - 1].style.display = "none";
    b = a.getElementsByClassName("footer");
    b[b.length - 1].style.display = "block"
}

function Ba(a) {
    var b = H.contentDocument,
        c = b.getElementsByClassName("page")[0].cloneNode(true),
        e = c.getElementsByClassName("content")[0];
    e.innerHTML = "";
    e.appendChild(a);
    b.getElementById("article").appendChild(c);
    X(function (d) {
        c.getElementsByClassName("shortUrl")[0].innerText = d;
        c.getElementsByClassName("qr")[0].src = d + ".qr"
    })
}

function Y() {
    var a = "";
    a += "#articleContainer { width: " + (O.articleWidth || "70%") + "; }";
    var b = la[Q];
    a += "#article { font-family: " + Q + ', Georgia, Times, "Times New Roman"; font-size: ' + b.c[S] + "; line-height: " + b.lineHeight + "; }";
    b = parseInt(O.articleMargin, 10) || 10;
    a += ".page { " + (O.justifyTextEnabled != "false" ? "text-align: justify; " : "") + "/*-webkit-box-shadow: rgba(0, 0, 0, " + (parseInt(O.backgroundOpacity, 10) || 80) / 250 + ") 0px 0px 40px;*/ }";
    a += ".page .contentWrapper { padding: " + b / 1.2 + "% " + b + "%; }";
    b = H.contentDocument;
    var c = b.createElement("style");
    c.innerText = a;
    b.body.appendChild(c);
    a = b.createElement("script");
    a.innerText = "smoothScrollEnabled = " + (O.smoothScrollEnabled == "true") + ";";
    b.body.appendChild(a);
    Aa(!T)
}

function ya() {
    chrome.extension.sendRequest({
        action: "saveSettings",
        settings: {
            currentFontSizeIndex: S,
            imagesDisabled: T
        }
    })
}

function za(a) {
    chrome.extension.sendRequest({
        action: "newTab",
        url: a
    })
}

function X(a) {
    P ? a(P) : chrome.extension.sendRequest({
        action: "shortenUrl",
        url: document.location.href
    }, function (b) {
        P = b.url;
        P == undefined ? X(a) : a(P)
    })
}

function wa(a) {
    if (O.hotkeyEnabled === "true") {
        var b;
        try {
            b = JSON.parse(O.hotkey)
        } catch (c) {
            b = {}
        }
        var e = b.shiftKey !== undefined ? b.shiftKey : true,
            d = b.altKey !== undefined ? b.altKey : false,
            f = b.keyIdentifier !== undefined ? b.keyIdentifier : "U+0050";
        if ((a.ctrlKey || a.metaKey) === (b.ctrlKey !== undefined ? b.ctrlKey : true) && a.shiftKey === e && a.altKey === d && a.keyIdentifier === f || H != null && K && a.keyIdentifier === "U+001B") chrome.extension.sendRequest({
            action: "handlePageActionClicked"
        })
    }
}
function content(){
  a = ea(M) || E(M);
  
  if (a == undefined) {
    return "Sorry, We couldn't read this page, please select the text and click Speak button. If you think this is bug, please contact paritosh at 1 5 A S .com"
  } else {
    return a.textContent;
  }
}




var page_speakerStr;

function speakSelection() {
  var focused = document.activeElement;
  var selectedText;
  if (focused) {
    try {
      selectedText = focused.value.substring(
          focused.selectionStart, focused.selectionEnd);
    } catch (err) {
    }
  }
  if (selectedText == undefined) {
    var sel = window.getSelection();
    var selectedText = sel.toString();
  }
  
  if (selectedText == "") {
    selectedText = content()
  }
  
  chrome.extension.sendRequest({'speak': selectedText});
}

function onExtensionMessage(request) {
  if (request['speakSelection'] != undefined) {
    if (!document.hasFocus()) {
      return
    }
    speakSelection();
  } else if (request['key'] != undefined) {
    page_speakerStr = request['key'];
  }
}



function initContentScript() {
  chrome.extension.onRequest.addListener(onExtensionMessage);
  chrome.extension.sendRequest({'init': true}, onExtensionMessage);

  document.addEventListener('keydown', function(evt) {
    if (!document.hasFocus()) {
      return true;
    }
    var keyStr = keyEventToString(evt);
    if (keyStr == page_speakerStr && page_speakerStr.length > 0) {
      speakSelection();
      evt.stopPropagation();
      evt.preventDefault();
      return false;
    }
    return true;
  }, false);
  
}




initContentScript();


