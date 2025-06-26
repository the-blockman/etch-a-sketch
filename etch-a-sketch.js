const container = document.querySelector(".container");
document.documentElement.style.setProperty("--box-size", "58px");

for (let i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.classList.add("grid-box");
  container.appendChild(square);
  square.dataset.darkness = 0;
  square.addEventListener("mouseover", () => {
    if (!square.dataset.color) {
      let x = Math.floor(Math.random() * 256);
      let y = Math.floor(Math.random() * 256);
      let z = Math.floor(Math.random() * 256);
      square.dataset.color = `${x}, ${y}, ${z}`;
    }

    let opacity = parseFloat(square.dataset.darkness);
    if (opacity < 1) {
      opacity += 0.1;
      square.dataset.darkness = opacity.toFixed(1);
    }

    const [x, y, z] = square.dataset.color.split(",");

    square.style.backgroundColor = `rgba(${x}, ${y}, ${z}, ${opacity})`;
  });
  // square.addEventListener("mouseleave", (event) => {
  //   //event.target.style.backgroundColor = "lightGreen";
  // });
}

const button = document.querySelector("button");

button.addEventListener("click", () => {
  let squaresPerSide = prompt("How many squares per side? (max 100)");
  if (squaresPerSide === null) return; // user clicked "Cancel"
  squaresPerSide = parseInt(squaresPerSide);

  if (squaresPerSide < 1 || squaresPerSide > 100) {
    alert("please enter a number between 1 and 100");
    return;
  }

  container.innerHTML = "";
  const totalSquares = squaresPerSide * squaresPerSide;
  const size = 960 / squaresPerSide - 2;

  document.documentElement.style.setProperty("--box-size", `${size}px`);
  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-box");
    container.appendChild(square);
    square.dataset.darkness = 0;
    square.addEventListener("mouseover", () => {
      if (!square.dataset.color) {
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        square.dataset.color = `${x}, ${y}, ${z}`;
      }

      let opacity = parseFloat(square.dataset.darkness);
      if (opacity < 1) {
        opacity += 0.1;
        square.dataset.darkness = opacity.toFixed(1);
      }

      const [x, y, z] = square.dataset.color.split(",");

      square.style.backgroundColor = `rgba(${x}, ${y}, ${z}, ${opacity})`;
    });
  }
});
