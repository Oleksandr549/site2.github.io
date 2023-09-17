const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
if (screenWidth > 768 && screenHeight > 700) {
  new fullpage("#fullpage", {
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
  });
}
if (document.querySelector(".element-animation") !== null) {
  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add("_active");
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll(".element-animation");
  for (let elm of elements) {
    observer.observe(elm);
  }
}
