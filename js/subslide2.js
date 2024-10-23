let slide2 = document.querySelectorAll('.slider .card_news'); // 모든 슬라이드 
let currentSlideIndex2 = 0; // 현재 슬라이드 인덱스
let totalSlides2 = slide2.length; // 총 슬라이드 수
let autoSlideInterval2; // 자동 슬라이드 타이머
let isPaused2 = false; // 자동 슬라이드가 일시 정지 상태인지 여부

// 슬라이드 숫자 업데이트 함수
function updateSlideCounter() {
    document.getElementById('currentSlide2').textContent = currentSlideIndex2 + 1; 
}

// 슬라이드 전환 함수
function changeSlide() {
    slide2[currentSlideIndex2].classList.remove('active'); // 현재 슬라이드 숨기기
    currentSlideIndex2 = (currentSlideIndex2 + 1) % totalSlides2; // 인덱스 증가 (순환)
    slide2[currentSlideIndex2].classList.add('active'); // 다음 슬라이드 보이기
    updateSlideCounter(); // 슬라이드 숫자 업데이트
}

// 자동 슬라이드 시작
function startAutoSlide() {
    if (!isPaused2) {
        autoSlideInterval2 = setInterval(changeSlide, 2500); // 5초마다 changeSlide 호출
    }
}

// 자동 슬라이드 중지
function stopAutoSlide() {
    clearInterval(autoSlideInterval2);
}

// 다음 버튼 클릭 이벤트
document.getElementById('nextBtn2').addEventListener('click', function() {
    stopAutoSlide(); // 자동 슬라이드 중지
    changeSlide(); // 다음 슬라이드로 이동
    startAutoSlide(); // 다시 자동 슬라이드 시작
});

// 이전 버튼 클릭 이벤트
document.getElementById('prevBtn2').addEventListener('click', function() {
    stopAutoSlide(); // 자동 슬라이드 중지
    slide2[currentSlideIndex2].classList.remove('active'); // 현재 슬라이드 숨기기
    currentSlideIndex2 = (currentSlideIndex2 - 1 + totalSlides2) % totalSlides2; // 인덱스 감소 (순환)
    slide2[currentSlideIndex2].classList.add('active'); // 이전 슬라이드 보이기
    updateSlideCounter(); // 슬라이드 숫자 업데이트
    startAutoSlide(); // 다시 자동 슬라이드 시작
});

// pause 버튼 클릭 이벤트
document.getElementById('pauseBtn2').addEventListener('click', function() {
    if (isPaused2) {
        startAutoSlide(); // 자동 슬라이드 시작
        this.innerHTML = '<img src="images/Type=stop.svg" alt="Pause">'; // 버튼 텍스트 변경
    } else {
        stopAutoSlide(); // 자동 슬라이드 중지
        this.innerHTML = '<img src="images/Type=play.svg" alt="Play">'; // 버튼 텍스트 변경
    }
    isPaused2 = !isPaused2; // 상태 반전
});

// 초기 슬라이드 숫자 업데이트 및 자동 슬라이드 시작
updateSlideCounter();
startAutoSlide();