const toggle = document.querySelectorAll('.a-table-content')

toggle.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})


