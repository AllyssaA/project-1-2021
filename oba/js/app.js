import { router } from "./modules/router.js";

(async function compile() {
  router();
  console.log("compiling...")
})();
