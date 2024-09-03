const firstBucket = document.getElementById("mainBucket");
const buckets = document.querySelectorAll(".bucket");
const itemsBucket = document.querySelector("item-bucket");
const balls = document.querySelectorAll(".ball");
const selectedBalls = document.getElementsByClassName("selected");
let currentBall;
let value = "";
value.innerHTML = "a";
let allow = false;

balls.forEach((ball) => {
  ball.addEventListener("click", () => {
    ball.classList.add("selected");
    firstBucket.innerHTML += ball.outerHTML;
    buckets.forEach((bucket) => {
      bucket.style.boxShadow = `var(--unselected)`;
    });
    ball.remove();
  });
});

buckets.forEach((bucket) => {
  bucket.addEventListener("click", () => {
    buckets.forEach((bucket) => {
      bucket.style.boxShadow = `var(--unselected)`;
    });

    if (value === "") {
      if (bucket.innerHTML.trim() !== "") {
        bucket.style.boxShadow = `var(--selected)`;
        value = bucket.lastChild;
        bucket.lastChild.classList.add("currentball");
        currentBall = document.querySelector(".currentball");
      }
    } else {
      if (bucket.lastChild) {
        if (bucket.lastChild.innerHTML === value.innerHTML) {
          bucket.style.boxShadow = `var(--unselected)`;
          value = "";
          bucket.lastChild.classList.remove("currentball");
        } else {
          bucket.style.boxShadow = `var(--unselected)`;
          bucket.innerHTML += value.outerHTML;
          value = "";
          bucket.lastChild.classList.remove("currentball");
          currentBall.remove();
        }
      } else {
        bucket.style.boxShadow = `var(--unselected)`;
        bucket.innerHTML += value.outerHTML;
        value = "";
        bucket.lastChild.classList.remove("currentball");
        currentBall.remove();
      }
    }
  });
});
