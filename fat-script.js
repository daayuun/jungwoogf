document
  .getElementById("fatPercentageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const age = parseFloat(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const height = parseFloat(document.getElementById("height").value) / 100;
    const weight = parseFloat(document.getElementById("weight").value);

    if (age > 0 && height > 0 && weight > 0) {
      // BMI 계산
      const bmi = weight / (height * height);

      // 비만율 계산 (이 공식은 단순 예제임)
      let fatPercentage;
      if (gender === "male") {
        fatPercentage = 1.2 * bmi + 0.23 * age - 16.2;
      } else {
        fatPercentage = 1.2 * bmi + 0.23 * age - 5.4;
      }

      document.getElementById(
        "result"
      ).textContent = `당신의 비만율은 ${fatPercentage.toFixed(2)}%입니다.`;
    } else {
      document.getElementById("result").textContent = "유효한 값을 입력하세요.";
    }
  });
