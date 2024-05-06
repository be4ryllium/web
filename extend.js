const $ = (e) => document.getElementById(e)

const extender = $('extender');
const content = $('content')

function u() {
    requestAnimationFrame(u)
    extender.style.top = content.offsetTop + content.offsetHeight + 50 + 'px';
}
u()