import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { WelcomeScreen } from "./components/Welcome";
import { LinkMeterScreen } from "./components/LinkMeter";
import HomePage from "./components/HomePage";
import { useState } from "react";

const App = () => {
  const [connectScreen, setConnectScreen] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route
          path="/link-meter"
          element={
            <LinkMeterScreen
              setConnectScreen={setConnectScreen}
              connectScreen={connectScreen}
            />
          }
        />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
