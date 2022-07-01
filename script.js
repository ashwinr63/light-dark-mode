const toggleSwitch = document.querySelector('input[type="checkbox"]')

// Switch theme dynimically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
    }
}


// on change event listener
toggleSwitch.addEventListener('change', switchTheme)