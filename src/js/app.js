const testimonials = [
    {
        name: "Aman",
        location: "Ethiopia, AA",
        rating: 4.5,
        comment: "Wow... I am very happy to use your product ",
         image: "./images/userr.jpg"
    },
    {
        name: "Abel",
        location: "Ethiopia,Adama",
        rating: 4.5,
        comment: "I like it because I get my package on time.",
        image: "./images/userr.jpg"
    },
    {
        name: "Rahel",
        location: "Ethiopia, Hawassa",
        rating: 4.5,
        comment: "I get latest product from you thank a lot .",
        image: "./images/userr.jpg"
    },
    {
        name: "Michael Chen",
        location: "keniya",
        rating: 5.0,
        comment: "This was very nice place in Ethiopia to get such kind of product!",
       image: "./images/userr.jpg"
    },
    {
        name: "Sarah Williams",
        location: "London, UK",
        rating: 4.8,
        comment: "Excellent service with great speeds. I use it daily for both work and streaming. The customer support is outstanding.",
      image: "./images/userr.jpg"
    },
    {
        name: "Sarah Williams",
        location: "London, UK",
        rating: 4.8,
        comment: "Excellent service with great speeds. I use it daily for both work and streaming. The customer support is outstanding.",
        image: "./images/userr.jpg"
    },
    {
        name: "Michael Chen",
        location: "keniya",
        rating: 5.0,
        comment: "This was very nice place in Ethiopia to get such kind of product!",
        image: "./images/userr.jpg"
    }
    // Add more testimonials if needed
];

// Initialize Swiper
const swiper = new Swiper('.testimonialSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Make pagination clickable
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});

// Generate testimonial slides
function generateTestimonials() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    
    testimonials.forEach(testimonial => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        
        slide.innerHTML = `
            <div class="p-8 border-2 border-gray-200 rounded-2xl hover:border-red-500 transition-all">
                <div class="flex items-center justify-between mb-8">
                    <div class="flex items-center gap-4">
                        <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full">
                        <div>
                            <h4 class="font-medium text-lg">${testimonial.name}</h4>
                            <p class="text-gray-400">${testimonial.location}</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="font-medium">${testimonial.rating}</span>
                        <img src="./images/star.png" alt="star" class="w-4 h-4">
                    </div>
                </div>
                <p class="text-gray-600">"${testimonial.comment}"</p>
            </div>
        `;
        
        swiperWrapper.appendChild(slide);
    });
}

// Call the function when the document is loaded
document.addEventListener('DOMContentLoaded', generateTestimonials);