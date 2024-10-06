import Footer from "../../components/Footer/Footer";
import { Header } from "/src/components/Header/Header.jsx";

function Success() {
  return (
    <>
      <Header />
      <div
        style={{
          backgroundColor: "#f9f8fe",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 80px)",
          padding: "60px",
        }}
      >
        <div
          style={{
            width: "800px",
            padding: "30px",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "35px", marginBottom: "20px" }}>
            🎉 <br /> Compra Realizada com sucesso!
          </div>
          <hr />
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <p style={{ marginBottom: "4px" }}>Informações Pessoais</p>
            <p style={{ marginBottom: "4px" }}>
              <span style={{ color: "rgba(143, 143, 143, 1)" }}>CPF:</span>{" "}
              123485913-35
            </p>
            <p style={{ marginBottom: "4px" }}>
              <span style={{ color: "rgba(143, 143, 143, 1)" }}>Email:</span>{" "}
              francisco@gmail.com
            </p>
            <p style={{ marginBottom: "4px" }}>
              <span style={{ color: "rgba(143, 143, 143, 1)" }}>Nome:</span>{" "}
              Francisco Antonio Pereira
            </p>
            <p style={{ marginBottom: "4px" }}>
              <span style={{ color: "rgba(143, 143, 143, 1)" }}>Celular:</span>{" "}
              (85) 5555-5555
            </p>
          </div>
          <hr />
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <p style={{ marginBottom: "4px" }}>Informações de Entrega</p>
            <p style={{ marginBottom: "4px" }}>
              <span style={{ color: "rgba(143, 143, 143, 1)" }}>Celular:</span>{" "}
              Endereço: Rua João Pessoa, 333
            </p>
            <p style={{ marginBottom: "4px" }}>
              <span style={{ color: "rgba(143, 143, 143, 1)" }}>Bairro:</span>{" "}
              Centro
            </p>
            <p style={{ marginBottom: "4px" }}>
              <span style={{ color: "rgba(143, 143, 143, 1)" }}>Cidade:</span>{" "}
              Fortaleza, Ceará
            </p>
            <p style={{ marginBottom: "4px" }}>
              <span style={{ color: "rgba(143, 143, 143, 1)" }}>CEP:</span>{" "}
              433-8800
            </p>
          </div>
          <hr />
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <p style={{ marginBottom: "4px" }}>Informações de Pagamento</p>
            <p style={{ marginBottom: "4px" }}>
              <span style={{ color: "rgba(143, 143, 143, 1)" }}>
                Titular do Cartão:
              </span>{" "}
              FRANCISCO A P
            </p>
            <p style={{ marginBottom: "4px" }}>
              <span style={{ color: "rgba(143, 143, 143, 1)" }}>Final:</span>{" "}
              ************2020
            </p>
          </div>
          <hr />
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <p style={{ marginBottom: "4px" }}>Resumo da compra</p>
            <p style={{ marginBottom: "4px" }}>
              Tênis Nike Revolution 6 Next Nature Masculino
            </p>
            <div
              style={{
                backgroundColor: "rgba(246, 170, 28, 0.05)",
                borderColor: "rgba(246, 170, 28, 0.15)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100px",
              }}
            >
              <p style={{ fontSize: "27px", fontWeight: "bold" }}>Total</p>
              <div
                style={{
                  textAlign: "rigth",
                  display: "block",
                  justifyContent: "right",
                }}
              >
                <p style={{ fontSize: "27px", fontWeight: "bold" }}>
                  R$ 219,00
                </p>
                <p style={{ color: "rgba(143, 143, 143, 1)" }}>
                  ou 10x de R$ 21,00 sem juros
                </p>
              </div>
            </div>
            <div
              style={{
                alignItems: "center",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              <a style={{ color: "rgba(71, 71, 71, 1)" }} href="">
                Imprimir Recibo
              </a>
            </div>
          </div>
        </div>
        <button
          style={{
            width: "800px",
            backgroundColor: "rgba(246, 170, 28, 1)",
            color: "white",
            borderRadius: "8px",
            padding: "10px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            marginTop: "20px",
          }}
          onClick={() => (window.location.href = "/")}
        >
          Voltar para Home
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Success;
