(function wave_form() {
  const labelEmail = document.querySelector(".wave_form .email");
  const labelPassword = document.querySelector(".wave_form .password");
  const spansEmail = labelEmail.querySelectorAll(".wave_form span");
  const spansPassword = labelPassword.querySelectorAll(".wave_form span");
  const inputEmail = document.querySelector(".wave_form #email");
  const inputPassword = document.querySelector(".wave_form #password");

  const addDelayStyle = (els) => {
    els.forEach((el, idx) => {
      el.style.transitionDelay = `${idx * 50}ms`;
    });
  };
  addDelayStyle(spansEmail);
  addDelayStyle(spansPassword);

  inputEmail.addEventListener("focus", () => {
    labelEmail.classList.add("focus-animation");
  });

  inputEmail.addEventListener("blur", (e) => {
    if (!e.target.value) labelEmail.classList.remove("focus-animation");
  });

  inputPassword.addEventListener("focus", () => {
    labelPassword.classList.add("focus-animation");
  });

  inputPassword.addEventListener("blur", (e) => {
    if (!e.target.value) labelPassword.classList.remove("focus-animation");
  });
})();

(function theme_clock() {
  const secondEl = document.querySelector(".theme_clock .s");
  const minuteEl = document.querySelector(".theme_clock .m");
  const hourEl = document.querySelector(".theme_clock .h");
  // const btn = document.querySelector(".theme_clock .theme");
  const dateEl = document.querySelector(".theme_clock .date");
  const timeEl = document.querySelector(".theme_clock .time");

  // 60 - 360
  const timeToDeg = function (x) {
    return (x / 60) * 360;
  };

  const monthEn = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const weekEn = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let now = new Date();
  let month = +now.getMonth(); //0 - 11
  let date = +now.getDate(); //1-30,31
  let day = +now.getDay(); //0 - 6
  let hour = +now.getHours();
  let minute = +now.getMinutes();
  let second = +now.getSeconds();

  const getTime = function () {
    now = new Date();
    month = +now.getMonth(); //0 - 11
    date = +now.getDate(); //1-30,31
    day = +now.getDay(); //0 - 6
    hour = +now.getHours();
    minute = +now.getMinutes();
    second = +now.getSeconds();
  };

  const updateClock = function () {
    //⏰
    secondEl.style.transform = `translate(-50%, -100%) rotate(${timeToDeg(
      second
    )}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${timeToDeg(
      minute
    )}deg)`;
    hourEl.style.transform = `translate(-50%, -100%) rotate(${timeToDeg(
      hour
    )}deg)`;
    // 21:21
    timeEl.innerText =
      hour > 12 ? `${hour - 12}:${minute} PM` : `${hour}:${minute} AM`;
    // date
    dateEl.querySelector(
      ".text"
    ).innerHTML = `${weekEn[day]},&nbsp; ${monthEn[month]}`;
    // cirlr
    dateEl.querySelector(".circle").innerText = `${date}`;
  };
  updateClock();

  const secTimmer = setInterval(() => {
    if (second >= 60) {
      getTime();
      updateClock();
    } else {
      second++;
      secondEl.style.transform = `translate(-50%, -100%) rotate(${timeToDeg(
        second
      )}deg)`;
    }
  }, 1000);

  // const minuteTimmer = setInterval(() => {
  //   if (minute >= 60) {
  //     minute = 0;
  //   } else {
  //     minute++;
  //   }
  //   minuteEl.style.transform = `translate(-50%, -100%) rotate(${timeToDeg(
  //     minute
  //   )}deg)`;
  // }, 1000 * 60);

  // const hourTimmer = setInterval((hour) => {
  //   if (hour >= 24) {
  //     hour = 0;
  //   } else {
  //     hour++;
  //   }
  //   hourEl.style.transform = `translate(-50%, -100%) rotate(${timeToDeg(
  //     hour
  //   )}deg)`;
  // }, 1000 * 60 * 60);
})();

(function scroll_animation() {
  const boxes = document.querySelectorAll(".scroll-animation .content");
  console.log(boxes);
  /*
IntersectionObserver API
 */
  const obs = new IntersectionObserver(
    (entries) => {
      console.log(entries);
      if (entries.length >= 1) {
        entries.forEach((entry) => {
          console.log(entry.isIntersecting);
          if (entry.isIntersecting) entry.target.classList.add("show");
          else entry.target.classList.remove("show");
        });
      }
      if (entries[0].isIntersecting) entries[0].target.classList.add("show");
      else entries[0].target.classList.remove("show");
    },
    {
      root: null,
      threshold: 1,
      rootMargin: "0px 400% 0px 400%",
      // rootMargin: "0px 0px 5px 0px ",
      // rootMargin: "0px"
    }
  );

  boxes.forEach((box) => {
    // box.classList.add("show");
    obs.observe(box);
  });
  // const container = document.querySelector(".container");
  /**
   * old way
   */
  // window.addEventListener('scroll', checkBoxes);

  // function checkBoxes() {
  //   const triggerBottom = window.innerHeight * 6 / 7 + 50;

  //   boxes.forEach(box => {
  //       const boxTop = box.getBoundingClientRect().top

  //       if(boxTop < triggerBottom) {
  //           box.classList.add('show')
  //       } else {
  //           box.classList.remove('show')
  //       }
  //   });
  // }
})();

(function rotating_Navigation() {
  const btnOpen = document.querySelector(".rotating-Navigation .open");
  const btnClose = document.querySelector(".rotating-Navigation .close");
  const nav = document.querySelector(".rotating-Navigation nav");
  const container = document.querySelector(".rotating-Navigation .container");

  btnOpen.addEventListener("click", function () {
    nav.classList.add("active");
    container.classList.add("active");
  });

  btnClose.addEventListener("click", function () {
    nav.classList.remove("active");
    container.classList.remove("active");
  });
})();

(function random_choice_picker() {
  const textarea = document.querySelector(".textarea");
  const tags = document.querySelector(".tags");
  let tagNum = null;

  // textarea.focus();

  textarea.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
      setTimeout(() => {
        textarea.value = "";
      }, 100);
      tagNum = document.querySelectorAll(".tag");
      randomTags();
    } else {
      setTimeout(createTags, 50);
    }
  });

  const getRandomTag = (tagLength) => {
    const getRandomInt = (max) => Math.floor(Math.random() * max);
    return tagNum[getRandomInt(tagLength)];
  };

  const unHighLightTags = () => {
    tagNum.forEach((tag) => {
      tag.classList.remove("highlight");
    });
  };

  const highLightTag = (tag) => {
    tag.classList.add("highlight");
  };

  const randomTags = () => {
    const myPromise = new Promise((reslove, reject) => {
      let times = 30;
      let interval = setInterval(() => {
        times--;
        if (times < 0) {
          reslove(interval);
        }
        const tag = getRandomTag(tagNum.length);
        unHighLightTags();
        highLightTag(tag);
      }, 100);
    })
      .then((res) => clearInterval(res))
      .then(
        () =>
          setTimeout(() => {
            const tag = getRandomTag(tagNum.length);
            unHighLightTags();
            highLightTag(tag);
          }),
        1000
      )
      .catch((reson) => console.error(reson));
  };

  const createTags = () => {
    const tagHtml = textarea.value
      .split(",")
      .filter((tag) => tag.trim() !== "")
      .map(
        (tag) => `
    <div class="tag" >${tag.trim()}</div>
  `
      )
      .join("");
    tags.innerHTML = "";
    tags.insertAdjacentHTML("afterbegin", tagHtml);
  };
})();

(function progress_step() {
  const btnNext = document.querySelector(".progress-step .btn--next");
  const btnPrev = document.querySelector(".progress-step .btn--prev");
  const circle = document.querySelectorAll(".progress-step .circle");
  const progress = document.querySelector(".progress-step .progress--line");

  let currentCircle = 1;

  btnNext.addEventListener("click", function () {
    if (currentCircle >= circle.length) return;

    currentCircle++;

    updateBtn();
    updateCircle();
    updateProgress();
  });

  btnPrev.addEventListener("click", function () {
    if (currentCircle <= 1) return;

    currentCircle--;

    updateBtn();
    updateCircle();
    updateProgress();
  });

  const updateCircle = function () {
    circle.forEach(function (circle, idx) {
      if (idx < currentCircle) circle.classList.add("active");
      else circle.classList.remove("active");
    });
  };

  const updateBtn = function () {
    switch (currentCircle) {
      case 1:
        btnPrev.classList.remove("active");
        btnPrev.setAttribute("disabled", "");
        break;
      case 4:
        btnNext.classList.remove("active");
        btnNext.setAttribute("disabled", "");
        break;
      default:
        btnNext.classList.add("active");
        btnNext.removeAttribute("disabled");
        btnPrev.classList.add("active");
        btnPrev.removeAttribute("disabled");
    }
  };

  const updateProgress = function () {
    const widthPercent = `${
      ((currentCircle - 1) / (circle.length - 1)) * 100
    }%`;
    progress.style.width = widthPercent;
  };
})();

(function increament_conter() {
  var counters = document.querySelectorAll(".increament_conter .counter");
  var obs = new IntersectionObserver(function increment(entries) {
    entries.forEach((entry) => {
      let counter = entry.target;
      counter.innerText = 0;
      let counterTarget = +counter.dataset.target;
      let increament = Math.ceil(counterTarget / 200);
      let current = +counter.innerText;
      let increamentNumber = new Promise((resolve, reject) => {
        let interval = setInterval(() => {
          if (current >= counterTarget) {
            counter.innerText = counterTarget;
            clearInterval(interval);
            resolve(counter);
          } else {
            current += increament;
            counter.innerText = current;
          }
        }, 2);
      }).catch((reson) => console.error(reson));
    });
  });
  counters.forEach(function bindObs(counter) {
    obs.observe(counter);
  });
})();

(function hidden_search() {
  const containerSearch = document.querySelector(
    ".hidden_search .container--search"
  );
  const btnSearch = document.querySelector(".hidden_search .btn--search");
  const input = document.querySelector(".hidden_search .input--search");

  btnSearch.addEventListener("click", function () {
    containerSearch.classList.toggle("active");
    input.focus();
  });
})();

(function drag_drop() {
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

(function expanding_pannel() {
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

(function draw_app() {
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

(function dad_joke() {
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

(function click_button() {
  const btn = document.querySelector(".button--click");

  btn.addEventListener("click", (e) => {
    const clickEl = document.createElement("div");
    const xAxis = e.offsetX;
    const yAxis = e.offsetY;
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

(function blurry_loading() {
  var containerEl = document.querySelector(".blurry-loading");
  var obs = new IntersectionObserver(function loading() {
    var heading = document.querySelector(".heading--loading");
    var bg = document.querySelector(".bg");
    var loading = 0;

    var intval = setInterval(increaseLoading, 30);

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
      return (
        ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
      );
    };
  });
  obs.observe(containerEl);
})();

(function animation_nav() {
  const animation_nav_btnEl = document.querySelector(".animation-nav .btn");
  const animation_nav_navEl = document.querySelector(".animation-nav .nav");
  animation_nav_btnEl.addEventListener("click", () => {
    animation_nav_navEl.classList.toggle("active");
  });
})();

(function audio_button() {
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
})();
