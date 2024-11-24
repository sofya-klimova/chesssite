let sliders = document.querySelectorAll('._swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');
        }
        if (slider.classList.contains('_gallery')) {
            //slider.data('LightGallery').destroy(true);
        }
    }
    sliders_bild_callback();
}

function sliders_bild_callback(params) { }

if (document.querySelector('.mainslider')) {
let mainslider = new Swiper('.mainslider__body', {
    slidesPerView: 1,   
    observer: true,
    observeParents: true,
    spaceBetween: 0,
    autoHeight: true,
    speed: 800,
    loop: true,
    //Dotts
    pagination: {
    el: '.mainslider__dotts',
    clickable: true
    },
    //Arrows
    navigation: {
        nextEl: '.mainslider__swiper-button-next',
        prevEl: '.mainslider__swiper-button-prev',        
    },
    on: { 
        lazyImageReady: function () {
            ibg();
        }
    }
});
let mainsliderImages = document.querySelectorAll('.mainslider__image');
let mainsliderDotts = document.querySelectorAll('.mainslider__dotts .swiper-pagination-bullet');

    for (let index = 0; index < mainsliderImages.length; index++) {
        const mainsliderImage = mainsliderImages[index].querySelector('img').getAttribute('src');
        mainsliderDotts[index].style.backgroundImage = "url('" + mainsliderImage + "')";
    }
}
if (document.querySelector('.participant-slider')) {
    let brandsSlider = new Swiper('.participant-slider__body', {
        breakpoints: {
        320: {
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
        },
        720: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        1100: {
        slidesPerView: 3,
        spaceBetween: 20,
        },
    },   
        observer: true,
        observeParents: true,
        slidesOffsetBefore: 10,
        spaceBetween: 80,
        speed: 800,
        loop: true,
        //Dotts
        pagination: {
            el: '.participant-slider__dotts',
            type: 'fraction',
            renderFraction: (currentClass, totalClass) => {
                return '<span class="' + currentClass + '"></span>' +                                  
                                 '<span> / </span>' +                                
                                 '<span class="' + totalClass + '"></span>'
                }
            },

        //Arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',        
        },
        on: { 
            lazyImageReady: function () {
                ibg();
            }
        }
    });
}

if (document.querySelector('.images-product')) {
    let imageSubSlider = new Swiper('.images-product__subslider', {
        slidesPerView: 4,   
        observer: true,
        observeParents: true,
        spaceBetween: 0,
        autoHeight: true,
        speed: 800,
        });
    let imagesmainslider = new Swiper('.images-product__mainslider', {
        slidesPerView: 1,   
        observer: true,
        observeParents: true,
        spaceBetween: 0,
        autoHeight: true,
        thumbs: {
            swiper: imageSubSlider
        },
        speed: 800,
        on: { 
            lazyImageReady: function () {
                ibg();
            }
        }
    });

    }
