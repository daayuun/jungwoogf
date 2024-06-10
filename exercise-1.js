document.addEventListener("DOMContentLoaded", function () {
  const img = document.getElementById("movingImage");
  const container = document.querySelector(".e-container");

  let direction = 0;
  let speed = 8; // Speed of movement
  let posX = 0;
  let posY = 0;
  let rotation = 180; // Initial rotation angle

  function moveImage() {
    switch (direction) {
      case 0: // Move right
        posX += speed;
        if (posX + img.width >= container.clientWidth) {
          posX = container.clientWidth - img.width;
          direction = 1;
          rotation -= 90; // Reset rotation angle
          img.style.transform = `scaleX(-1) rotate(${rotation}deg)`;
        }
        break;
      case 1: // Move down
        posY += speed;
        if (posY + img.height >= container.clientHeight) {
          posY = container.clientHeight - img.height;
          direction = 2;
          rotation -= 90; // Rotate clockwise
          img.style.transform = `scaleX(-1) rotate(${rotation}deg)`;
        }
        break;
      case 2: // Move left
        posX -= speed;
        if (posX <= 0) {
          posX = 0;
          direction = 3;
          rotation -= 90; // Rotate clockwise
          img.style.transform = `scaleX(-1) rotate(${rotation}deg)`;
        }
        break;
      case 3: // Move up
        posY -= speed;
        if (posY <= 0) {
          posY = 0;
          direction = 0;
          rotation -= 90; // Rotate clockwise
          img.style.transform = `scaleX(-1) rotate(${rotation}deg)`;
        }
        break;
    }

    img.style.left = posX + "px";
    img.style.top = posY + "px";
  }

  setInterval(moveImage, 20); // 이 부분을 추가해야 합니다.
});
