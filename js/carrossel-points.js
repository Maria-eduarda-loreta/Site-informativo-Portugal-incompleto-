// const controls = document.querySelectorAll(".control");

// let currentItem = 0;
// const items = document.querySelectorAll(".item");
// const maxItems = items.length;

// controls.forEach((control) => {
//     control.addEventListener("click", (e) => {
//         isLeft = e.target.classList.contains("seta-esquerda");

//         if (isLeft) {
//             currentItem -= 1;
//         } else {
//             currentItem += 1;
//         }

//         if (currentItem >= maxItems) {
//             currentItem = 0;
//         }

//         if (currentItem >= maxItems) {
//             currentItem = maxItems - 1;
//         }

//         items.forEach((item) => item.classList.remove("current-item"));

//     items[currentItem].scrollIntoView({
//       behavior: "smooth",
//       inline: "center"
//     });

//     items[currentItem].classList.add("current-item");
//   });
// });

