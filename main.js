const introText = document.querySelectorAll(".text h1 span");

window.onload = () => {
  let timer = 0; // 각 span 요소의 애니메이션 시작 시간
  introText.forEach((item, index) => {
    item.style.opacity = "1"; // 초기에 투명하게 설정
    item.style.animation = `fade-out 500ms ease ${(timer += 100)}ms forwards`; // 각 span 요소에 애니메이션 적용
  });
};
