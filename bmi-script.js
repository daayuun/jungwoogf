document.getElementById("bmiForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const height = parseFloat(document.getElementById("height").value) / 100;
  const weight = parseFloat(document.getElementById("weight").value);
  const bmi = (weight / (height * height)).toFixed(2);

  document.getElementById("result").textContent = `당신의 BMI는 ${bmi}입니다`;

  const marker = document.getElementById("bmi-marker");
  marker.style.visibility = "visible";
  // 그래프 상의 위치 계산
  const graphWidth = document.querySelector(".bmi-graph").offsetWidth;
  const minBMI = 8.5;
  const maxBMI = 45;
  const position = ((bmi - minBMI) / (maxBMI - minBMI)) * graphWidth;

  // 범위 제한
  if (position < 0) {
    marker.style.left = "0%";
  } else if (position > graphWidth) {
    marker.style.left = "100%";
  } else {
    marker.style.left = `${position}px`;
  }
});
