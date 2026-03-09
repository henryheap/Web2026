clickBox = document.querySelector('body')

colors = ['blue', 'teal', 'white', 'red']
index = 0

clickBox.addEventListener('click', () => {
    clickBox.style.background = colors[index]
    index = index + 1
    if (index == colors.length) {
        index = 0
    }
    clickBox.style.color = 'black'
})


