import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelector('.slides');

let slideIndex = 0;

// Функция для переключения на предыдущий слайд
function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.children.length - 1;
    }
    updateSlide();
}

// Функция для переключения на следующий слайд
function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.children.length) {
        slideIndex = 0;
    }
    updateSlide();
}

// Функция для обновления текущего слайда
function updateSlide() {
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Обработчики событий для кнопок управления слайдером
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);