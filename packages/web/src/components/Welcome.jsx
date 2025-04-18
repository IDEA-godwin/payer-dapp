import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

export function WelcomeScreen() {
  const navigate = useNavigate();
  const { isDarkMode } = useGlobalContext();
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between px-6 py-12"
      style={{
        backgroundImage: isDarkMode
          ? "var(--background-color)"
          : "var(--linear-light-bg)",
        color: "var(--text-color)",
      }}
    >
      <div />
      <img src="/robot.png" alt="robot" className="w-40 h-40 object-contain" />
      <div className="text-center space-y-4">
        <h1 className="text-lg font-medium leading-6">
          Welcome to{" "}
          <span
            style={{ color: "var(--link-color)" }}
            className="font-semibold"
          >
            M3tering Payer
          </span>
        </h1>
        <p className="text-sm" style={{ color: "var(--text-color)" }}>
          Get started with managing your meter on the go.
        </p>
      </div>
      <button
        onClick={() => navigate("/link-meter")}
        className="secondary font-semibold py-3 px-6 rounded-xl w-full max-w-xs shadow-md cursor-pointer"
        // style={{
        //   backgroundColor: "var(--dark-button-color)",
        //   color: "var(--text-color-light)",
        // }}
      >
        Get started
      </button>
    </div>
  );
}
