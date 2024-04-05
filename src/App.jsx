import { Container } from "./Container";
import { Welcome } from "./welcome";
import { Clock } from "./clock";
import { useState } from "react";
import { LanguageContext } from "./LanguageContext";

export function App() {
  const [language, setLanguage] = useState("en");

  function handleSetLanguage(language) {
    setLanguage(language);
  }
  return (
    <div>
      <button onClick={() => handleSetLanguage("it")}>IT</button>
      <button onClick={() => handleSetLanguage("en")}>EN</button>
      <Container title={<Welcome />}>
      <LanguageContext.Provider value={language}>
       
          <h3>The exercise has be done by Lucy Lainez and Fabian Mardale</h3>

          <Clock />
      </LanguageContext.Provider>
      </Container>
      
    </div>
  );
}
