import "toolcool-range-slider";
import "./index.pug";
// import "./components/main/main.pug";
import "./styles/_const.scss";
import "./styles/styles.scss";
import "./components/mixins/mixins.scss";
import "./components/main/main.scss";
import "./components/header/header.pug";
import "./components/header/header.scss";
import "./components/footer/footer.pug";
import "./components/footer/footer.scss";
import "./routing/router.js";
import "./components/main/forMain.js";
import "./pages/cards/cards.js";
import "./pages/search/search.js";
import "./pages/search/search.scss";

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
import "./components/mixins/input/inputForm.scss";
import "./components/mixins/checkbox/checkbox.scss";
import "./components/mixins/buttons/buttons.scss";
import "./pages/forms/forms.scss";
import "./components/mixins/rangeSlider/rangeSlider.scss";
import "./components/mixins/rangeSlider/rangeSlider.js";
import "./components/mixins/pagination/pagination.scss";
import "./components/mixins/dropdown/dropdownRoom.scss";
import "./components/mixins/bulletList/bulletList.scss";
import "./components/mixins/userAcc/userAcc.scss";
import "./data/rooms.json";

console.log("hotelScout is running!");
if (module.hot) {
  module.hot.accept();
}
