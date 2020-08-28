import { handleMobileBtnClick } from "./handlers.js";
import { mobileBtn, mobileNav } from "./elements.js";

console.log(mobileBtn);
console.dir(mobileNav);
// Adding event
mobileBtn.addEventListener("click", handleMobileBtnClick);