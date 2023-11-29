// expanding-pannel
(function () {
  const empties = document.querySelectorAll(".drop_drag .empty");
  const fill = document.querySelector(".drop_drag .fill");

  fill.addEventListener("dragstart", function () {
    this.classList.add("hold");
  });
  fill.addEventListener("dragend", function () {
    this.classList.remove("hold");
  });

  empties.forEach((e) => {
    // e.addEventListener('drag', (e) => {
    //   console.log('drag', e);
    // });
    // e.addEventListener('dragend', function() {
    // });
    e.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    e.addEventListener("dragenter", function (e) {
      e.preventDefault();
      this.classList.add("hovered");
    });
    e.addEventListener("drop", function (e) {
      this.appendChild(fill);
      this.classList.remove("hovered");
    });
    e.addEventListener("dragleave", function (e) {
      this.classList.remove("hovered");
    });
    // e.addEventListener('dragstart', (e) => {
    //   console.log('dragstart', e);
    // });
  });
})();
let newLinePreventPrettier;
(function () {
  const panelContainer = document.querySelector(
    ".expanding-pannel .panel-container"
  );
  const panels = document.querySelectorAll(".expanding-pannel .panel");

  panelContainer.addEventListener("click", function (e) {
    if (!e.target.classList.contains("panel")) return;
    removeAllActice();
    e.target.classList.toggle("active");
  });

  const removeAllActice = function () {
    panels.forEach((panel) => panel.classList.remove("active"));
  };
})();

let newLinePreventPrettier2 = "";
//draw-app
(function () {
  const canvas = document.querySelector(".draw_app .draw");
  const width = canvas.offsetWidth;
  const height = canvas.offsetHeight;
  canvas.width = width;
  canvas.height = height;
  const sizeInput = document.querySelector(".draw_app .num");
  const crt = canvas.getContext("2d");
  const colorInput = document.querySelector(".draw_app .color");
  let fillColor = colorInput.value;
  let radius = sizeInput.value;
  const clearButton = document.querySelector(".draw_app .clear");
  let xAxis;
  let yAxis;
  let x2;
  let y2;
  let isPressed = false;

  const setRadius = function () {
    radius = sizeInput.value;
    // console.log('radius', radius);
  };

  const setColor = function () {
    fillColor = colorInput.value;
    // console.log('fillColor', fillColor);
  };

  colorInput.addEventListener("change", setColor);
  sizeInput.addEventListener("change", setRadius);

  const drawCircle = function () {
    // console.log(radius);
    crt.fillStyle = fillColor;
    crt.beginPath();
    crt.moveTo(xAxis, yAxis);
    crt.arc(xAxis, yAxis, radius, 0, Math.PI * 2, true);
    crt.fill();
  };

  const drawLine = function (x, y, x2, y2) {
    crt.beginPath();
    crt.moveTo(x, y);
    crt.lineTo(x2, y2);
    crt.lineWidth = radius * 2;
    // crt.fillStyle = fillColor;
    crt.strokeStyle = fillColor;
    crt.stroke();
    // console.log(fillColor);
  };

  clearButton.addEventListener("click", (e) => {
    e.preventDefault();
    crt.clearRect(0, 0, canvas.width, canvas.height);
  });

  canvas.addEventListener("mousedown", (e) => {
    isPressed = true;
    xAxis = e.offsetX;
    yAxis = e.offsetY;
  });

  canvas.addEventListener("mouseup", (e) => {
    isPressed = false;
    xAxis = e.offsetX;
    yAxis = e.offsetY;
  });

  canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
      x2 = e.offsetX;
      y2 = e.offsetY;
      drawLine(xAxis, yAxis, x2, y2);
      drawCircle();
      xAxis = e.offsetX;
      yAxis = e.offsetY;
      //console.log(e); console.log(e.offsetX, e.offsetY); console.log(xAxis, yAxis);
      // if (e.movementX || e.movementY) {
      // x2 = xAxis + e.movementX;
      // y2 = yAxis + e.movementY;
      // }
    }
  });
})();
//dadJoke

//dadJoke

let newLinePreventPrettier1 = "";
(function () {
  const btn = document.querySelector(".dadjoke .btn");
  const joke = document.querySelector(".dadjoke .joke");
  const storekJoke = async function (url) {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    });
    // const json =  await response.json();
    joke.innerText = (await response.json()).joke;
  };

  btn.addEventListener("click", () => {
    storekJoke("https://icanhazdadjoke.com/");
  });

  // Api: get https://icanhazdadjoke.com/

  // const httpreq = new XMLHttpRequest();
  // httpreq.responseType = 'json';
  // httpreq.onreadystatechange = () => {
  //   if (httpreq.readyState === XMLHttpRequest.DONE) {
  //     if (httpreq.status === 200) {
  //       // console.log(httpreq);
  //       // console.log(httpreq.response);
  //       // console.log(typeof httpreq.response);
  //       joke.innerText = httpreq.response.joke;
  //     }
  //   }
  // };

  // const getJoke = () => {
  //   try {
  //     httpreq.open("GET", "https://icanhazdadjoke.com/", true);
  //     httpreq.setRequestHeader("Accept", "application/json");
  //     httpreq.send();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // btn.addEventListener("click", getJoke);
})();
// let newLinePreventPrettier1 = "";

// click_button
(function () {
  const btn = document.querySelector(".button--click");

  btn.addEventListener("click", (e) => {
    const clickEl = document.createElement("div");
    const xAxis = e.offsetX;
    const yAxis = e.offsetY;
    console.log(xAxis);
    console.log(yAxis);
    clickEl.style.cssText = `
    
    left: ${xAxis}px;
    top: ${yAxis}px;
    `;
    clickEl.classList.add("cirlce");
    e.target.appendChild(clickEl);

    setTimeout(() => {
      clickEl.remove();
    }, 500);
  });
})();
// let newLinePreventPrettier = "";

//
(function () {
  const heading = document.querySelector(".heading--loading");
  const bg = document.querySelector(".bg");

  let loading = 0;

  let intval = setInterval(increaseLoading, 30);

  function increaseLoading() {
    loading++;

    if (loading > 99) {
      clearInterval(intval);
    }

    renderBlur(loading);
  }
  const renderBlur = function (loading) {
    bg.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`;
    heading.style.opacity = scale(loading, 0, 100, 1, 0);
    heading.innerText = `${loading}%`;
  };

  const scale = function (num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };
})();

// animation-nav
const animation_nav_btnEl = document.querySelector(".animation-nav .btn");
const animation_nav_navEl = document.querySelector(".animation-nav .nav");
animation_nav_btnEl.addEventListener("click", () => {
  animation_nav_navEl.classList.toggle("active");
});

// audio-button
const audio_button_btnContainer = document.querySelector(".buttons");
const audio_button_audios = document.querySelectorAll("audio");
const playSelectAudio = (el) => {
  const selectAudioEl = document.querySelector(`.${el.innerText}`);
  audio_button_audios.forEach((audio) => {
    audio.pause();
  });
  selectAudioEl.play();
};

audio_button_btnContainer.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) return;
  playSelectAudio(e.target);
});
