import "./App.css";
import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  //const [validPassword, setValidPassword] = useState("");
  //const handlePasswordChange = (event) => {
  //setPassword(event.target.value);

  return (
    <div className="App">
      <header>Create account</header>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          //Si password est différent de confirm alors je crée une alerte
          if (password !== confirm) {
            setErrorMessage("");
            alert("Vos deux mots de passe ne sont pas identiques");
          }
        }}
      >
        <h2> Name</h2>
        <input
          value={name}
          type="text"
          placeholder="name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <h2>Email</h2>
        <input
          value={email}
          type="email"
          placeholder="email@gmail.com"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        ></input>
        <h2>Password</h2>
        <input
          value={password}
          type="password"
          placeholder="azerty1234"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></input>
        <h2>Confirm your password</h2>
        <input
          value={confirm}
          type="password"
          placeholder="azerty1234"
          onChange={(event) => {
            setConfirm(event.target.value);
          }}
        ></input>
        <button
          type="submit"
          onClick={() => {
            console.log("le formulaire est soumis");
          }}
        >
          Register
        </button>
      </form>
      <footer>Made with React at Le Reacteur by Mel </footer>
    </div>
  );
}

export default App;
