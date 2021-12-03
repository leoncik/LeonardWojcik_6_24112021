(() => {
    'use strict';
    function e(e) {
        var t = e.name,
            n = e.city,
            r = e.tagline,
            a = e.price,
            o = e.portrait,
            c = 'assets/photographers/'.concat(o);
        return {
            name: t,
            picture: c,
            city: n,
            tagline: r,
            price: a,
            getUserCardDOM: function () {
                var e = document.createElement('article'),
                    o = document.createElement('img');
                o.setAttribute('src', c);
                var u = document.createElement('h2');
                u.textContent = t;
                var i = document.createElement('p');
                i.textContent = n;
                var p = document.createElement('p');
                p.textContent = r;
                var s = document.createElement('p');
                return (
                    (s.textContent = a),
                    e.appendChild(o),
                    e.appendChild(u),
                    e.appendChild(i),
                    e.appendChild(p),
                    e.appendChild(s),
                    e
                );
            },
        };
    }
    function t(e, t, n, r, a, o, c) {
        try {
            var u = e[o](c),
                i = u.value;
        } catch (e) {
            return void n(e);
        }
        u.done ? t(i) : Promise.resolve(i).then(r, a);
    }
    function n(e) {
        return function () {
            var n = this,
                r = arguments;
            return new Promise(function (a, o) {
                var c = e.apply(n, r);
                function u(e) {
                    t(c, a, o, u, i, 'next', e);
                }
                function i(e) {
                    t(c, a, o, u, i, 'throw', e);
                }
                u(void 0);
            });
        };
    }
    function r() {
        return a.apply(this, arguments);
    }
    function a() {
        return (a = n(
            regeneratorRuntime.mark(function e() {
                var t, n, r;
                return regeneratorRuntime.wrap(
                    function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (
                                        (e.next = 2),
                                        fetch('./src/data/photographers.json')
                                    );
                                case 2:
                                    return (
                                        (t = e.sent),
                                        (e.prev = 3),
                                        (e.next = 6),
                                        t.json()
                                    );
                                case 6:
                                    return (
                                        (n = e.sent),
                                        (r = n.photographers),
                                        console.log(r),
                                        console.log({ photographers: r }),
                                        e.abrupt('return', { photographers: r })
                                    );
                                case 13:
                                    (e.prev = 13),
                                        (e.t0 = e.catch(3)),
                                        console.log(
                                            "ERROR, can't fetch the data file"
                                        );
                                case 16:
                                case 'end':
                                    return e.stop();
                            }
                    },
                    e,
                    null,
                    [[3, 13]]
                );
            })
        )).apply(this, arguments);
    }
    function o(e) {
        return c.apply(this, arguments);
    }
    function c() {
        return (c = n(
            regeneratorRuntime.mark(function t(n) {
                var r;
                return regeneratorRuntime.wrap(function (t) {
                    for (;;)
                        switch ((t.prev = t.next)) {
                            case 0:
                                (r = document.querySelector(
                                    '.photographer_section'
                                )),
                                    n.forEach(function (t) {
                                        var n = e(t).getUserCardDOM();
                                        r.appendChild(n);
                                    });
                            case 2:
                            case 'end':
                                return t.stop();
                        }
                }, t);
            })
        )).apply(this, arguments);
    }
    function u() {
        return (u = n(
            regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                return (e.next = 2), r();
                            case 2:
                                o(e.sent.photographers);
                            case 5:
                            case 'end':
                                return e.stop();
                        }
                }, e);
            })
        )).apply(this, arguments);
    }
    !(function () {
        u.apply(this, arguments);
    })();
})();
