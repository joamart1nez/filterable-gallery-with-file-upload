let images = document.querySelectorAll('.itemBox');
let dom = document.querySelector('body');
let modal = null;
let image = null;

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', (e) => {
        ligthbox(e.target);
    })
}

function ligthbox(img) {
    dom.appendChild(document.createElement('div')).setAttribute('id', 'modal');
    modal = document.querySelector('#modal');

    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.position = "fixed";
    modal.style.zIndex = "1000";
    modal.style.background = "rgba(0,0,0,.9)"
    modal.style.top = 0;
    modal.style.left = 0;

    modal.appendChild(document.createElement("DIV")).setAttribute("id", "image");
    image = document.querySelector("#image");
    image.innerHTML = img.outerHTML;
    image.style.display = "block";
    image.style.position = "relative";

    if (window.matchMedia("(max-width:1000px)").matches) {
        image.childNodes[0].style.width = "80%";
        animationGalery('sm');
    } else {
        image.childNodes[0].style.width = "50%";
        animationGalery('bg');
    }

    image.addEventListener('click', () => {
        modalOut()
    });

}

function animationGalery(param) {
    image.style.top = "55%";
    image.style.left = "-50%";
    image.style.opacity = 0;

    setTimeout(function () {
        image.style.transition = ".3s left ease";
        image.style.opacity = 1;
        if (param == 'bg') {
            image.style.left = image.childNodes[0].width / 1.45 + "px";
            image.style.marginLeft = -image.childNodes[0].width / 4 + "px";
            image.style.marginTop = -image.childNodes[0].width / 2.5 + "px";
        } else {
            image.style.left = image.childNodes[0].width / 3.6 + "px";
            image.style.marginLeft = -image.childNodes[0].width / 4 + "px";
            image.style.marginTop = -image.childNodes[0].width / 2.5 + "px";
        }
    }, 10);

}

function modalOut() {
    image.style.transition = ".5s left ease";
    image.style.left = "-100%";

    setTimeout(() => {
        modal.parentNode.removeChild(modal);
    }, 300)
}

$(document).ready(function () {
    $('.list').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.itemBox').show('1000');
        } else {
            $('.itemBox').not('.' + value).hide('1000');
            $('.itemBox').filter('.' + value).show('1000');
        }
    })
});

$('.list').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
});


let product = document.querySelector('.product');

function previeImage() {
    let file = document.querySelector('#file').files;
    if (file.length > 0) {
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            product.appendChild(document.createElement('img')).setAttribute('src', `${e.target.result}`);
            product.lastChild.setAttribute('class','itemBox news');
        };
        fileReader.readAsDataURL(file[0]);
    }
} 