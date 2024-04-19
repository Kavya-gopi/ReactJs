import { useState } from "react";
import "./Passwordgen.css";
export const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSymbol, setIncludeSymbol] = useState(true);
  const [password, setPassword] = useState("");
  const generatePassword = () => {
    let charset = "";
    if (includeUpperCase) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeLowerCase) {
      charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeNumber) {
      charset += "0123456789";
    }
    if (includeSymbol) {
      charset += "!@#$%^&*()_+=-";
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      let randIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randIndex];
    }
    setPassword(generatedPassword);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("Password Copied Successfully");
  };
  return (
    <>
      <div className="pass-word-div">
        <h1>Password Generator App</h1>
        <div className="input-group">
          <label htmlFor="lengthId">Password Length:</label>
          <input
            type="number"
            id="lengthId"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div className="input-group-check">
          <input
            type="checkbox"
            id="upper"
            checked={includeUpperCase}
            onChange={(e) => setIncludeUpperCase(e.target.checked)}
          ></input>
          <label htmlFor="upper">Include UpperCase</label>
        </div>
        <div className="input-group-check">
          <input
            type="checkbox"
            id="lower"
            checked={includeLowerCase}
            onChange={(e) => setIncludeLowerCase(e.target.checked)}
          ></input>
          <label htmlFor="lower">Include LowerCase</label>
        </div>
        <div className="input-group-check">
          <input
            type="checkbox"
            id="number"
            checked={includeNumber}
            onChange={(e) => setIncludeNumber(e.target.checked)}
          ></input>
          <label htmlFor="number">Include Numbers</label>
        </div>
        <div className="input-group-check">
          <input
            type="checkbox"
            id="symbols"
            checked={includeSymbol}
            onChange={(e) => setIncludeSymbol(e.target.checked)}
          ></input>
          <label htmlFor="symbols">Include Symbols</label>
        </div>

        <button className="gen-pass" onClick={generatePassword}>
          Generate Password
        </button>
        <div className="password-generated">
          <input type="text" readOnly value={password}></input>
          <button className="copy-btn" onClick={copyPassword}>
            Copy
          </button>
        </div>
      </div>
    </>
  );
};
