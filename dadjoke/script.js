const btn = document.querySelector(".btn");
const joke = document.querySelector(".joke");

// Api: get https://icanhazdadjoke.com/

const httpreq = new XMLHttpRequest();
httpreq.responseType = 'json';
httpreq.onreadystatechange = () => {
  if (httpreq.readyState === XMLHttpRequest.DONE) {
    if (httpreq.status === 200) {
      // console.log(httpreq);
      // console.log(httpreq.response);
      // console.log(typeof httpreq.response);
      joke.innerText = httpreq.response.joke;
    }
  }
};

const getJoke = () => {
  try {
    httpreq.open("GET", "https://icanhazdadjoke.com/", true);
    httpreq.setRequestHeader("Accept", "application/json");
    httpreq.send();
  } catch (e) {
    console.log(e);
  }
};
btn.addEventListener("click", getJoke);


