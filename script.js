const firstBucket = document.getElementById("mainBucket");
const buckets = document.querySelectorAll(".bucket");
const itemsBucket = document.querySelector("item-bucket");
const balls = document.querySelectorAll(".ball");
const selectedBalls = document.getElementsByClassName("selected");
let currentBall;
let value = "";
let allow = false;

balls.forEach((ball) => {
  ball.addEventListener("click", () => {
    ball.classList.add("selected");
    firstBucket.innerHTML += ball.outerHTML;
    buckets.forEach((bucket) => {
      bucket.style.boxShadow = `var(--unselected)`;
    });
    firstBucket.style.boxShadow = `var(--selected)`;
    ball.remove();
  });
});

buckets.forEach((bucket) => {
  bucket.addEventListener("click", () => {
    buckets.forEach((bucket) => {
      bucket.style.boxShadow = `var(--unselected)`;
    });
    bucket.style.boxShadow = `var(--selected)`;
    if (value === "") {
      if (bucket.innerHTML.trim() !== "") {
        value = bucket.lastChild;
        bucket.lastChild.style.opacity = '0.6';
        bucket.lastChild.classList.add('currentball');
        currentBall = document.querySelector('.currentball');      
      }
      else{}
    } else {
      bucket.innerHTML += value.outerHTML;
      bucket.lastChild.style.opacity = '1';
      bucket.lastChild.classList.remove('currentball');
      currentBall.remove();
      value = "";
    }
  });
});

