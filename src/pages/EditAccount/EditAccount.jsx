import Footer from "../../components/Footer/Footer";
import { FormEditAccount } from "../../components/FormEditAccount/FormEditAccount";
import LayoutPadrao from "../../components/LayoutPadrao/LayoutPadrao";
import { SimpleHeader } from "../../components/SimpleHeader/SimpleHeader";

function EditAccount() {
  return (
    <main>
      <SimpleHeader />
      <LayoutPadrao layoutType="home-page">
        <FormEditAccount /> 
      </LayoutPadrao>
      <Footer />
    </main>
  );
}

export default EditAccount;
