import Footer from "../../components/Footer/Footer";
import { FormCrieSuaConta } from "../../components/FormCrieSuaConta/FormCrieSuaConta";
import LayoutPadrao from "../../components/LayoutPadrao/LayoutPadrao";
import { SimpleHeader } from "../../components/SimpleHeader/SimpleHeader";
import SenakersLoginBody1 from "../../assets/SneakersLoginBody1.png";
import SenakersLoginBody2 from "../../assets/SneakersLoginBody2.png";

function Register() {
  return (
    <>
      <SimpleHeader />
      <LayoutPadrao>
        <div
          style={{
            height: "90vh",
            background: "linear-gradient(180deg, #bbbcf3, #e0e1fa)",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <div>
            {" "}
            <FormCrieSuaConta />
          </div>
          <div>
            {" "}
            <img
              src={SenakersLoginBody1}
              alt="Sneaker 1"
              style={{ maxWidth: "500px", maxHeight: "500px" }}
            />
            <img
              src={SenakersLoginBody2}
              alt="Sneaker 2"
              style={{ maxWidth: "500px", maxHeight: "500px" }}
            />
          </div>
        </div>
      </LayoutPadrao>
      <Footer />
    </>
  );
}

export default Register;
