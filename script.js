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
            if (event.target.classList.contains('details__image_01')) {
                event.target.textContent = '- Строение 1'
            }
            if (event.target.classList.contains('details__image_02')) {
                event.target.textContent = '- Строение 2'
            }
            if (event.target.classList.contains('details__image_03')) {
                event.target.textContent = '- Строение 3'
            }
            if (event.target.classList.contains('details__image_04')) {
                event.target.textContent = '- Строение 4'
            }
            if (event.target.classList.contains('details__image_05')) {
                event.target.textContent = '- Строение 5'
            }
            if (event.target.classList.contains('details__image_06')) {
                event.target.textContent = '- Строение 6'
            }
            if (event.target.classList.contains('details__image_07')) {
                event.target.textContent = '- Строение 7'
            }
            if (event.target.classList.contains('details__image_08')) {
                event.target.textContent = '- Строение 8'
            }
            if (event.target.classList.contains('details__image_09')) {
                event.target.textContent = '- Строение 9'
            }
            if (event.target.classList.contains('details__image_10')) {
                event.target.textContent = '- Строение 10'
            }
            event.target.classList.add('close');
            event.target.classList.add('details__image_btn');
            elemClick = event.target;
            elem.classList.add('close');
        }

    }

});
