import Footer from "../../components/Footer/Footer";
import { FormCrieSuaConta } from "../../components/FormCrieSuaConta/FormCrieSuaConta";
import LayoutPadrao from "../../components/LayoutPadrao/LayoutPadrao";
import { SimpleHeader } from "../../components/SimpleHeader/SimpleHeader";
import { SneakersLoginPage } from "../../components/SneakersLoginPage/SneakersLoginPage";

function Register() {
  return (
    <>
      <SimpleHeader />
      <LayoutPadrao layoutType="register-page">
            <FormCrieSuaConta />
            <SneakersLoginPage />
      </LayoutPadrao>
      <Footer />
    </>
  );
}

export default Register;
