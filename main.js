// document.querySelectorAll('.image img').forEach((el, index) => {
//     el.addEventListener('click', () => {
//         if (index === 2) {
//             el.parentNode.classList.add('image__success')
//         } else {
//             el.parentNode.classList.add('image__failure')
//             document.querySelectorAll('.image')[2].classList.add('image__success')
//         }
//         document.querySelectorAll('.image').forEach((e) => {
//             e.style.pointerEvents = 'none'
//         })
//         document.querySelector('.button').classList.add('button__active')
//         document.querySelector('.text div').textContent = 'New text'
//     })
// })
//
// document.querySelector('.button').addEventListener('click', () => {
//     document.querySelector('.button').classList.remove('button__active')
//     document.querySelectorAll('.image').forEach((el, index) => {
//         el.style.pointerEvents = ''
//         el.classList.remove('image__success')
//         el.classList.remove('image__failure')
//         el.querySelector('img').src = '/imgs/var_1_' + (4 - index) + '.jpg'
//     })
//     document.querySelector('.text div').textContent = 'Other New text'
// })