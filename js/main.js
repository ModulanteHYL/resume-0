setTimeout(function () {
    waitWrapper.classList.remove('active');
}, 1000);
window.onscroll = function () {
    if (window.scrollY > 0) {
        document.getElementById('topBar').classList.add('bg');
    } else {
        document.getElementById('topBar').classList.remove('bg');
    }
}
// let liTags = navMenu.getElementsByTagName('li');
// for (let i = 0; i < liTags.length; i++) {
//     liTags[i].onmouseenter = function (e) {
//         let ul = e.target.firstElementChild;
//         while (ul && ul.localName !== 'ul') {
//             ul = ul.nextElementSibling;
//         }
//         if (ul) {
//             ul.classList.add('active');
//         } else { }
//     }
//     liTags[i].onmouseleave = function (e) {
//         let ul = e.target.firstElementChild;
//         while (ul && ul.localName !== 'ul') {
//             ul = ul.nextElementSibling;
//         }
//         if (ul) {
//             ul.classList.remove('active');
//         } else { }
//     }
// }
