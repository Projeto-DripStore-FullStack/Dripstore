import "./SneakersLoginPage.css";
import SenakersLoginBody1 from "../../assets/SneakersLoginBody1.png";
import SenakersLoginBody2 from "../../assets/SneakersLoginBody2.png";

export const SneakersLoginPage = () => {
  return (
    <div className="sneakers">
      {" "}
      <img
        className="sneaker-left"
        src={SenakersLoginBody1}
        alt="Sneaker 1"
        style={{ maxWidth: "500px", maxHeight: "500px" }}
      />
      <img
        className="sneaker-right"
        src={SenakersLoginBody2}
        alt="Sneaker 2"
        style={{ maxWidth: "500px", maxHeight: "500px" }}
      />
    </div>
  );
};
