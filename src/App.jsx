import "./App.css";

import emailjs from "@emailjs/browser";

function App() {
  const SendEmail = (e) => {
    e.preventDefault();
    alert("Hola" + e.target.name.value + "! Enviaste un mail con el mensaje : " + e.target.message.value);
    if (window.Email) {
      window.Email.send({
        SecureToken: "0d4e8396-1773-4ba9-8271-cfbbfbabdfb9",
        To: "dgkbsas@gmail.com",
        From: "dgkbsas@gmail.com",
        Subject: "email desde web",
        Body:
          "Nombre: " +
          e.target.name.value +
          "<br> Email: " +
          e.target.email.value +
          "<br> Teléfono: " +
          e.target.phone.value +
          "<br> Mensaje: " +
          e.target.message.value,
      })
        .then((message) => {
          alert(message);
          document.getElementById("formSMTPJS").reset();
        })
        .catch((err) => alert("error"));
    }
  };

  const SendEmail02 = (e) => {
    e.preventDefault();
    alert("Hola" + e.target.name.value + "! Enviaste un mail con el mensaje : " + e.target.message.value);
    document.getElementById("formEMAILJS").reset();

    // var templateParams = {
    //   name: e.target.name.value,
    //   notes: e.target.message.value,
    // };

    // emailjs.send("service_8vmruzn", "template_7vr1ubi", templateParams, "q4PNXwV_LjftnyAUs").then(
    //   (response) => {
    //     alert("SUCCESS!", response.status, response.text);
    //     document.getElementById("formEMAILJS").reset();
    //   },
    //   (err) => {
    //     alert("FAILED...", err);
    //   }
    // );
  };

  return (
    <div className="containerPrincipal">
      <div style={{ display: "flex", flexDirection: "column", width: "400px" }}>
        <h2>
          CONTACT FORM WITH{" "}
          <a href="https://smtpjs.com/" style={{ color: "#CE86B0" }} target="_blank" rel="noreferrer">
            SMTPJS
          </a>
        </h2>
        <br />
        <form onSubmit={SendEmail} method="post" action="" style={{ display: "flex", flexDirection: "column", gap: "8px" }} id="formSMTPJS">
          <label htmlFor="name" style={{ marginRight: "16px", fontSize: "10px" }}>
            Nombre
          </label>
          <input type="text" id="name" required />
          <label htmlFor="phone" style={{ marginRight: "16px", fontSize: "10px" }}>
            Teléfono
          </label>
          <input type="text" id="phone" required />
          <label htmlFor="email" style={{ marginRight: "16px", fontSize: "10px" }}>
            E-mail
          </label>
          <input type="email" id="email" required />
          <label htmlFor="message" style={{ marginRight: "16px", fontSize: "10px" }}>
            Mensaje
          </label>
          <textarea type="text" id="message" required style={{ resize: "none" }} />
          <button id="btnEnviar" type="submit">
            ENVIAR
          </button>
        </form>
      </div>
      <div style={{ display: "flex", flexDirection: "column", width: "400px" }}>
        <h2>
          CONTACT FORM WITH{" "}
          <a href="https://www.emailjs.com/" style={{ color: "#CE86B0" }} target="_blank" rel="noreferrer">
            EMAILJS
          </a>
        </h2>
        <br />
        <form onSubmit={SendEmail02} method="post" action="" style={{ display: "flex", flexDirection: "column", gap: "8px" }} id="formEMAILJS">
          <label htmlFor="name" style={{ marginRight: "16px", fontSize: "10px" }}>
            Nombre
          </label>
          <input type="text" id="name" required />
          <label htmlFor="phone" style={{ marginRight: "16px", fontSize: "10px" }}>
            Teléfono
          </label>
          <input type="text" id="phone" required />{" "}
          <label htmlFor="email" style={{ marginRight: "16px", fontSize: "10px" }}>
            E-mail
          </label>
          <input type="email" id="email" required />{" "}
          <label htmlFor="message" style={{ marginRight: "16px", fontSize: "10px" }}>
            Mensaje
          </label>
          <textarea type="text" id="message" required style={{ resize: "none" }} />
          <button id="btnEnviar" type="submit">
            ENVIAR
          </button>
        </form>
      </div>
      <div style={{ display: "flex", flexDirection: "column", width: "400px" }}>
        <h2>
          CONTACT FORM WITH{" "}
          <a href="https://www.mailgun.com/es/" style={{ color: "#CE86B0" }} target="_blank" rel="noreferrer">
            MAILGUN
          </a>
        </h2>
        <br />
        <form
          onSubmit={SendEmail02}
          method="post"
          action=""
          style={{ display: "flex", flexDirection: "column", gap: "8px", pointerEvents: "none", opacity: ".2" }}
          id="formEMAILJS"
        >
          <label htmlFor="name" style={{ marginRight: "16px", fontSize: "10px" }}>
            Nombre
          </label>
          <input type="text" id="name" required />
          <label htmlFor="phone" style={{ marginRight: "16px", fontSize: "10px" }}>
            Teléfono
          </label>
          <input type="text" id="phone" required />{" "}
          <label htmlFor="email" style={{ marginRight: "16px", fontSize: "10px" }}>
            E-mail
          </label>
          <input type="email" id="email" required />{" "}
          <label htmlFor="message" style={{ marginRight: "16px", fontSize: "10px" }}>
            Mensaje
          </label>
          <textarea type="text" id="message" required style={{ resize: "none" }} />
          <button id="btnEnviar" type="submit">
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
