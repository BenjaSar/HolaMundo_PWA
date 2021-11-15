window.onload = () => {
  "user strict";
  if ("serviceworker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
  }
};
