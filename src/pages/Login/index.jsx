import Footer from "../../components/Footer/Footer";
import { FormAcessarConta } from "../../components/FormAcesseSuaConta/FormAcessarConta";
import LayoutPadrao from "../../components/LayoutPadrao/LayoutPadrao";
import { SimpleHeader } from "../../components/SimpleHeader/SimpleHeader";
import { SneakersLoginPage } from "../../components/SneakersLoginPage/SneakersLoginPage";

function Login() {
  return (
    <>
      <SimpleHeader />
      <LayoutPadrao layoutType='login-page'>
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
            <FormAcessarConta />
          </div>
          <SneakersLoginPage />
        </div>
      </LayoutPadrao>
      <Footer />
    </>
  );
}

export default Login;
