// for (let i = 0; i < 10000000000; i++) { let c = 1;
// }

const img = document.querySelector('.content__img');
const avatar = document.querySelector('.avatar__img');
const figure = document.querySelector('figure');

const avatarPromise = new Promise(function(reslove, reject) {
  try {
    if (avatar.complete) {
      // console.log('avatar loded compelete');
      reslove("load complete");
    }
    else {
      avatar.addEventListener("load", () => {
        // console.log("avatar load");
        reslove("load complete");
      });
    }
  } catch(e) {
    reject(e);
  }
});

const imgPromise = new Promise(function(reslove, reject) {
  try {
    if (img.complete) {
      // console.log('img loded compelete');
      reslove("img load complete");
    }
    else {
      img.addEventListener("load", () => {
        // console.log("load1");
        reslove("img load complete");
      });
    }
  } catch(e) {
    reject(e);
  }
});

// imgPromise.then(() => {
//   figure.classList.remove('animation-blur');
// })


Promise.all([imgPromise, avatarPromise]).then((result) => { 
    console.log(result);
  figure.classList.remove('animation-blur');
});