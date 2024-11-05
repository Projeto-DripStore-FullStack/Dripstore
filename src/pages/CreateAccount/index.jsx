import Footer from "../../components/Footer/Footer";
import { FormCreateAccount } from "../../components/FormCreateAccount/FormCreateAccount";
import LayoutPadrao from "../../components/LayoutPadrao/LayoutPadrao";
import { SimpleHeader } from "../../components/SimpleHeader/SimpleHeader";

function CreateAccount() {
  return (
    <main>
      <SimpleHeader />
      <LayoutPadrao layoutType="home-page">
        <FormCreateAccount /> 
      </LayoutPadrao>
      <Footer />
    </main>
  );
}

export default CreateAccount;
