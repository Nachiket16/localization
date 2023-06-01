import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const languages = [
  {
    code: "en",
    name: "English",
    state: "us",
  },
  {
    code: "hi",
    name: "Hindi",
    state: "north",
  },
  {
    code: "ta",
    name: "Tamil",
    state: "tam",
  },
  {
    code: "te",
    name: "Telagu",
    state: "ap",
  },
];

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  const lng = navigator.language;

  var amount = 938475;
  return (
    <div className="container">
      <div className="d-flex justify-content-end">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            lang
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {languages.map(({ code, name, state }) => (
              <li key={state}>
                <button
                  className="dropdown-item"
                  onClick={() => i18next.changeLanguage(code)}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="d-flex flex-column align-items-start">
        <h1>{t("welcome_message")}</h1>
        <p>{t("amount", { amount })} </p>
      </div>
    </div>
  );
}

export default App;
