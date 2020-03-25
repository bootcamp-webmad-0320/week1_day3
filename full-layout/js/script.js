new Vivus('anchor', { duration: 200 });
new Vivus('clock', { duration: 200 });

window.onscroll = () => {

    if (window.scrollY > 100) {
        document.querySelector('#navigation').classList.add('filled')
    }

    else {
        document.querySelector('#navigation').classList.remove('filled')
    }
}