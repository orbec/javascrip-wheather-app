import "./style.css";
import { initView, setForecastInfo, displayLoading } from "./views/MainView";
import { getWeather } from "./controllers/APIController";

const main = () => {
  const body = document.querySelector("body");
  body.innerHTML = initView();
  const searchBtn = body.querySelector("button");
  const searchTerm = body.querySelector("#city");
  searchBtn.addEventListener("click", () => {
    body.innerHTML = displayLoading();
    getWeather(searchTerm.value).then((response) => {
      body.innerHTML = setForecastInfo(response);
      const coll = Array.from(body.getElementsByClassName("collapsible"));
      coll.forEach((btn) => {
        btn.addEventListener("click", () => {
          btn.classList.toggle("active");
          const content = btn.nextElementSibling;
          content.style.maxHeight = content.style.maxHeight
            ? null
            : content.scrollHeight + "px";
        });
      });
      const newQueryBtn = body.querySelector("#new-query");
      newQueryBtn.addEventListener("click", () => main());
    });
  });
};

main();
