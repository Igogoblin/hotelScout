import "./index.pug";
// import "./components/main/main.pug";
import "./styles/_const.scss";
import "./styles/styles.scss";
import "./components/mixins/mixins.scss";
import "./components/main/main.scss";
import "./components/header/header.pug";
import "./components/footer/footer.pug";
import "./components/footer/footer.scss";
import "./routing/router.js";
import "./components/main/forMain.js";
import "./components/mixins/roomCard/roomCard.pug";
import "./components/mixins/roomCard/roomCard.scss";
import "./components/mixins/roomCard/roomCard.js";
import "./components/mixins/slider/slider.scss";
import "./components/mixins/slider/slider.js";
import "./components/mixins/mburger/mburger.pug";
import "./components/mixins/mburger/mburger.scss";
import "./components/mixins/mburger/mburger.js";
import "air-datepicker/air-datepicker.css";
import "./components/mixins/finishCardRoom/finishCardRoom.pug";
import "./components/mixins/finishCardRoom/finishCardRoom.scss";
import "./components/mixins/findYourRoom/findYourRoom.pug";
import "./components/mixins/findYourRoom/findYourRoom.scss";
import "./data/rooms.json";

console.log("hotelScout is running!");
if (module.hot) {
  module.hot.accept();
}
