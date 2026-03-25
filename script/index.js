container = document.querySelctor('.container')


int = setInterval(blurring, 30)

function blurring() {

 const backgroundElement = document.getElementById('.container');
    if (backgroundElement) {
        backgroundElement.classList.remove('blurred-background');
        backgroundElement.classList.add('unblurred-background');
    }

}
