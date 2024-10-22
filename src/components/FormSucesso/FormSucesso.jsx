import "./FormSucesso.css";
import WhiteSneakers from "../../assets/White-Sneakers.png";

export const FormSucesso = () => {
  return (
    <>
      <div className="form-sucesso-body">
        <div className="form-sucesso-container">
          <div className="form-sucesso-header">
            <div>🎉</div>
            <div>Compra Realizada com sucesso!</div>
          </div>

          <div className="form-sucesso-infoPessoal">
            <p style={{ marginBottom: "4px" }}>
              <strong>Informações Pessoais</strong>
            </p>
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

          <div className="form-sucesso-infoEntrega">
            <p style={{ marginBottom: "4px" }}>
              <strong> Informações de Entrega</strong>
            </p>
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

          <div className="form-sucesso-infoPagamento">
            <p style={{ marginBottom: "4px" }}>
              <strong>Informações de Pagamento</strong>
            </p>
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

          <div
            className="form-sucesso-infoResumoCompra"
            style={{ textAlign: "left", marginBottom: "20px" }}
          >
            <p style={{ marginBottom: "4px" }}>
              <strong>Resumo da compra</strong>
            </p>
            <div className="form-sucesso-resumoProduto">
              <div className="form-sucesso-fundo-produto">
                <img
                  className="form-sucesso-produto"
                  src={WhiteSneakers}
                  alt=""
                />
              </div>
              <div className="form-sucesso-nomeProduto">
                <p style={{ marginBottom: "4px" }}>
                  Tênis Nike Revolution 6 Next Nature Masculino
                </p>
              </div>
            </div>
            <div
              className="form-sucesso-infoTotal"
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
            className="form-sucesso-link-recibo"
            >
              <a style={{ color: "rgba(71, 71, 71, 1)" }} href="">
                Imprimir Recibo
              </a>
            </div>
          </div>
        </div>
        <button
        className="form-sucesso-btn"
          onClick={() => (window.location.href = "/")}
        >
          Voltar para Home
        </button>
      </div>
    </>
  );
};
