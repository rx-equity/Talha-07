const _0x293336 = _0x5812;
(function(_0x5e40fd, _0x3f8e2c) {
    const _0xe09187 = _0x5812,
        _0x3b206b = _0x5e40fd();
    while (!![]) {
        try {
            const _0x115b21 = -parseInt(_0xe09187(0x195)) / 0x1 * (parseInt(_0xe09187(0x191)) / 0x2) + parseInt(_0xe09187(0x1af)) / 0x3 + parseInt(_0xe09187(0x18f)) / 0x4 * (-parseInt(_0xe09187(0x15f)) / 0x5) + parseInt(_0xe09187(0x183)) / 0x6 * (parseInt(_0xe09187(0x185)) / 0x7) + parseInt(_0xe09187(0x186)) / 0x8 + parseInt(_0xe09187(0x16f)) / 0x9 + parseInt(_0xe09187(0x168)) / 0xa;
            if (_0x115b21 === _0x3f8e2c) break;
            else _0x3b206b['push'](_0x3b206b['shift']());
        } catch (_0x4f18df) {
            _0x3b206b['push'](_0x3b206b['shift']());
        }
    }
}(_0x7460, 0x56257));
let hamburgerwrapper = document['querySelector'](_0x293336(0x198)),
    navbar = document[_0x293336(0x19c)](_0x293336(0x179));
hamburgerwrapper[_0x293336(0x1ac)] = () => {
    const _0x398d28 = _0x293336;
    hamburgerwrapper[_0x398d28(0x170)][_0x398d28(0x19a)](_0x398d28(0x18e)), navbar[_0x398d28(0x170)][_0x398d28(0x19a)]('active');
};
let sections = document['querySelectorAll']('section'),
    navLinks = document[_0x293336(0x184)]('header\x20nav\x20a');
window[_0x293336(0x187)] = () => {
    const _0x18228b = _0x293336;
    sections[_0x18228b(0x163)](_0x25db2b => {
        const _0x5ce6b7 = _0x18228b;
        let _0x39833a = window[_0x5ce6b7(0x19f)],
            _0x60e28f = _0x25db2b[_0x5ce6b7(0x1aa)] - 0x96,
            _0x3dcf7a = _0x25db2b['offsetHeight'],
            _0x386652 = _0x25db2b[_0x5ce6b7(0x19d)]('id');
        _0x39833a >= _0x60e28f && _0x39833a < _0x60e28f + _0x3dcf7a && navLinks[_0x5ce6b7(0x163)](_0x525bc8 => {
            const _0x19a0ef = _0x5ce6b7;
            _0x525bc8[_0x19a0ef(0x170)][_0x19a0ef(0x199)]('active'), document['querySelector']('header\x20nav\x20a[href*=' + _0x386652 + ']')[_0x19a0ef(0x170)][_0x19a0ef(0x167)](_0x19a0ef(0x18e));
        });;
    });
    let _0x358149 = document[_0x18228b(0x19c)]('header');
    _0x358149[_0x18228b(0x170)][_0x18228b(0x19a)]('sticky', window[_0x18228b(0x19f)] > 0x64), hamburgerwrapper['classList'][_0x18228b(0x199)](_0x18228b(0x18e)), navbar[_0x18228b(0x170)][_0x18228b(0x199)](_0x18228b(0x18e));
}, ScrollReveal({
    'distance': _0x293336(0x166),
    'duration': 0x7d0,
    'delay': 0xc8
}), ScrollReveal()[_0x293336(0x17f)](_0x293336(0x175), {
    'origin': _0x293336(0x17b)
}), ScrollReveal()['reveal'](_0x293336(0x1a3), {
    'origin': _0x293336(0x16d)
}), ScrollReveal()[_0x293336(0x17f)](_0x293336(0x178), {
    'origin': _0x293336(0x16a)
}), ScrollReveal()['reveal'](_0x293336(0x1a8), {
    'origin': _0x293336(0x190)
}), ScrollReveal()['reveal']('.scaleUp', {
    'scale': 0.85
});
const typed = new Typed('.multiple-skills', {
        'strings': [_0x293336(0x194), _0x293336(0x1ab), _0x293336(0x16b)],
        'typeSpeed': 0x12,
        'backSpeed': 0x12,
        'backDelay': 0x5dc,
        'loop': !![]
    }),
    full_name = document['getElementById']('full-name'),
    email_address = document['getElementById'](_0x293336(0x15e)),
    mobile_number = document['getElementById'](_0x293336(0x16c)),
    email_subject = document[_0x293336(0x162)](_0x293336(0x193)),
    message = document['getElementById'](_0x293336(0x16e)),
    submit = document[_0x293336(0x165)](_0x293336(0x196))[0x0];
submit['addEventListener'](_0x293336(0x1b3), _0x45fe95 => {
    const _0x430bc1 = _0x293336;
    _0x45fe95['preventDefault']();
    let _0x2e1b89 = _0x430bc1(0x180) + full_name[_0x430bc1(0x164)] + '\x0a\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20<b>Email\x20Id:\x20</b>' + email_address[_0x430bc1(0x164)] + _0x430bc1(0x17c) + mobile_number[_0x430bc1(0x164)] + _0x430bc1(0x17d) + email_subject[_0x430bc1(0x164)] + _0x430bc1(0x176) + message[_0x430bc1(0x164)] + _0x430bc1(0x18d);
    Email[_0x430bc1(0x173)]({
        'SecureToken': _0x430bc1(0x169),
        'To': _0x430bc1(0x18c),
        'From': _0x430bc1(0x18c),
        'Subject': _0x430bc1(0x17a) + full_name[_0x430bc1(0x164)],
        'Body': _0x2e1b89
    })['then'](_0x4338d9 => alert(_0x430bc1(0x18a)));
});
let clear = document[_0x293336(0x162)](_0x293336(0x1b3)),
    value = document[_0x293336(0x184)](_0x293336(0x181));
clear[_0x293336(0x160)](_0x293336(0x1ae), () => {
    value != '' && setTimeout(() => {
        value['forEach'](_0x19e96d => _0x19e96d['value'] = '');
    }, 0x3e8);
});

function showImage(_0x2a0b56) {
    const _0x1cd283 = _0x293336;
    document[_0x1cd283(0x162)](_0x1cd283(0x1a5))[_0x1cd283(0x15d)] = _0x2a0b56['nextElementSibling']['src'];
};
let theme = document[_0x293336(0x162)](_0x293336(0x1a9)),
    icon = document[_0x293336(0x162)](_0x293336(0x182)),
    homeImg = document['getElementById']('home-img'),
    aboutImg = document[_0x293336(0x162)]('about-img'),
    certificateImg = document[_0x293336(0x162)](_0x293336(0x197));
theme[_0x293336(0x1ac)] = function() {
    const _0x3b7d0d = _0x293336;
    document[_0x3b7d0d(0x161)][_0x3b7d0d(0x170)]['toggle'](_0x3b7d0d(0x192)), icon['classList']['toggle'](_0x3b7d0d(0x1a2)), icon[_0x3b7d0d(0x170)]['toggle'](_0x3b7d0d(0x1a7));
    let _0x1a0b8a;
    document[_0x3b7d0d(0x161)]['classList'][_0x3b7d0d(0x1b0)](_0x3b7d0d(0x192)) ? _0x1a0b8a = _0x3b7d0d(0x1a0) : _0x1a0b8a = 'DARKMOOD', localStorage[_0x3b7d0d(0x189)](_0x3b7d0d(0x188), JSON[_0x3b7d0d(0x1ad)](_0x1a0b8a));
};
let GetTheme = JSON['parse'](localStorage[_0x293336(0x1a1)](_0x293336(0x188)));
console[_0x293336(0x19b)](GetTheme);
GetTheme === _0x293336(0x1a0) && (document[_0x293336(0x161)]['classList'] = _0x293336(0x192), icon['classList'][_0x293336(0x19a)]('bxs-sun'), icon[_0x293336(0x170)][_0x293336(0x19a)](_0x293336(0x1a7)));
let theme2 = document[_0x293336(0x162)](_0x293336(0x171)),
    icon2 = document[_0x293336(0x162)](_0x293336(0x1b1));
theme2[_0x293336(0x1ac)] = function() {
    const _0x527354 = _0x293336;
    document['body'][_0x527354(0x170)][_0x527354(0x19a)](_0x527354(0x192)), icon2['classList'][_0x527354(0x19a)](_0x527354(0x1a2)), icon2[_0x527354(0x170)][_0x527354(0x19a)](_0x527354(0x1a7));
    let _0xc43dba;
    document['body'][_0x527354(0x170)]['contains'](_0x527354(0x192)) ? _0xc43dba = _0x527354(0x1a6) : _0xc43dba = 'DARKMOOD2', localStorage[_0x527354(0x189)](_0x527354(0x188), JSON[_0x527354(0x1ad)](_0xc43dba));
};
let GetTheme2 = JSON[_0x293336(0x174)](localStorage[_0x293336(0x1a1)](_0x293336(0x188)));

function _0x5812(_0x20266b, _0x3c62a1) {
    const _0x7460f6 = _0x7460();
    return _0x5812 = function(_0x5812e6, _0x73e217) {
        _0x5812e6 = _0x5812e6 - 0x15d;
        let _0x3e72b1 = _0x7460f6[_0x5812e6];
        return _0x3e72b1;
    }, _0x5812(_0x20266b, _0x3c62a1);
}
console[_0x293336(0x19b)](GetTheme2);
GetTheme2 === _0x293336(0x1a6) && (document[_0x293336(0x161)][_0x293336(0x170)] = 'light-theme', icon2['classList'][_0x293336(0x19a)]('bxs-sun'), icon2[_0x293336(0x170)][_0x293336(0x19a)](_0x293336(0x1a7)));

function popupFunction1() {
    const _0x352093 = _0x293336;
    var _0x51e8a7 = document[_0x352093(0x162)](_0x352093(0x1a4));
    _0x51e8a7[_0x352093(0x170)][_0x352093(0x19a)](_0x352093(0x18b));
}

function popupFunction2() {
    const _0x2715cf = _0x293336;
    var _0x64db8 = document[_0x2715cf(0x162)](_0x2715cf(0x177));
    _0x64db8[_0x2715cf(0x170)][_0x2715cf(0x19a)](_0x2715cf(0x18b));
}

function popupFunction3() {
    const _0x322760 = _0x293336;
    var _0x3b9f9d = document['getElementById'](_0x322760(0x17e));
    _0x3b9f9d['classList'][_0x322760(0x19a)](_0x322760(0x18b));
}

function popupFunction4() {
    const _0x5ade12 = _0x293336;
    var _0x2ad95c = document[_0x5ade12(0x162)]('myPopup4');
    _0x2ad95c[_0x5ade12(0x170)][_0x5ade12(0x19a)](_0x5ade12(0x18b));
}

function popupFunction5() {
    const _0x4c0789 = _0x293336;
    var _0x9ad9ba = document[_0x4c0789(0x162)](_0x4c0789(0x19e));
    _0x9ad9ba[_0x4c0789(0x170)]['toggle'](_0x4c0789(0x18b));
}

function _0x7460() {
    const _0x4ff2fc = ['You\x20have\x20new\x20message\x20from:\x20', 'top', '\x0a\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20<b>Mobile\x20Number:\x20</b>', '\x0a\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20<b>Email\x20Subject:\x20</b>', 'myPopup3', 'reveal', '\x20\x20\x20<b>Name:\x20</b>', '.clearForm', 'theme-icon', '1044IJoCPD', 'querySelectorAll', '1253ZTmsmY', '2496720CBloWI', 'onscroll', 'PageTheme', 'setItem', 'Message\x20Sent!', 'show', 'muhammadshaheryar408@gmail.com', '\x0a\x20\x20\x20\x20', 'active', '16PRduUH', 'right', '123154zbGtkH', 'light-theme', 'email-subject', 'Front-end\x20Developer', '8sGycKw', 'form-control', 'display-frame', '#hamburger-wrapper', 'remove', 'toggle', 'log', 'querySelector', 'getAttribute', 'myPopup5', 'scrollY', 'LIGHTMOOD', 'getItem', 'bxs-sun', '.home-img,\x20.services-container,\x20.contact\x20form,\x20.about-btn', 'myPopup1', 'displayframe', 'LIGHTMOOD2', 'bxs-moon', '.home-content\x20.p,\x20.about-content,\x20.portfolio-2,\x20.display-frame,\x20.skills-a', 'theme', 'offsetTop', 'Back-end\x20Developer', 'onclick', 'stringify', 'click', '261618FgVXDm', 'contains', 'theme-icon2', 'myPopup7', 'submit', 'src', 'email-address', '802050Mhdjfj', 'addEventListener', 'body', 'getElementById', 'forEach', 'value', 'getElementsByClassName', '80px', 'add', '3552510ULvTkQ', '910044e4-1bee-422d-a2d2-ba15d28e5951', 'left', 'DataBase\x20Management ', 'mobile-number', 'bottom', 'message', '6312762ftUUeQ', 'classList', 'theme2', 'myPopup6', 'send', 'parse', '.home-content,\x20.heading\x20', '\x0a\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20<b>Message:\x20</b>', 'myPopup2', '.home-content\x20h1,\x20.about-img,\x20.portfolio-1,\x20.certificate-content', '.navbar'];
    _0x7460 = function() {
        return _0x4ff2fc;
    };
    return _0x7460();
}

function popupFunction6() {
    const _0x53b906 = _0x293336;
    var _0x2d9f81 = document[_0x53b906(0x162)](_0x53b906(0x172));
    _0x2d9f81[_0x53b906(0x170)][_0x53b906(0x19a)](_0x53b906(0x18b));
}

function popupFunction7() {
    const _0x1a2bc9 = _0x293336;
    var _0x441293 = document[_0x1a2bc9(0x162)](_0x1a2bc9(0x1b2));
    _0x441293[_0x1a2bc9(0x170)][_0x1a2bc9(0x19a)](_0x1a2bc9(0x18b));
}