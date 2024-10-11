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
          <FormAcessarConta />
          <SneakersLoginPage />
      </LayoutPadrao>
      <Footer />
    </>
  );
}

export default Login;
