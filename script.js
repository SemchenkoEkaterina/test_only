let elemClick
document.addEventListener('click', function (event) {
    let elem = document.getElementsByClassName('intro__image')[0];
    if (event.target.classList.contains('close')) {
        if (event.target.classList.contains('intro__image')) {
            
            event.target.classList.remove('close');
            elemClick.textContent = '+'
            elemClick.classList.remove('close');
            elemClick.classList.remove('details__image_btn');
        } else {
            elem.classList.remove('close');
            event.target.textContent = '+'

            event.target.classList.remove('close');
            event.target.classList.remove('details__image_btn');
        }

    }
    else {
        if (!event.target.classList.contains('intro__image') && !elem.classList.contains('close')) {
            event.target.textContent = event.target.dataset.imageText;
           
            event.target.classList.add('close');
            event.target.classList.add('details__image_btn');
            elemClick = event.target;
            elem.classList.add('close');
        }

    }

});
