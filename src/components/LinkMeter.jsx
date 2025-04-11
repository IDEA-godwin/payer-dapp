import { useState } from "react";
import { Loader2, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

export function LinkMeterScreen({ connectScreen, setConnectScreen }) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { meterId, isDarkMode } = useGlobalContext();

  const isButtonDisabled = connectScreen
    ? inputValue.length < 5 || inputValue.length > 10
    : false;

  const handleSubmit = () => {
    if (connectScreen) {
      setIsLoading(true);
      setError("");

      // Simulate API call
      new Promise((resolve) => setTimeout(resolve, 1500))
        .then(() => {
          if (inputValue !== meterId) {
            setError("Incorrect meter ID");
          } else {
            // setConnectScreen(false);
            navigate("/home");
          }
        })
        .catch(() => {
          setError("Failed to verify meter ID");
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setConnectScreen(true);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between px-6 py-12"
      style={{
        backgroundColor:
          error && !isDarkMode ? "#E8CE88" : "var(--background-color)",
        color: "var(--text-color)",
      }}
    >
      <div className="text-left w-full">
        <h2 className="text-xl font-bold">
          Get <span style={{ color: "var(--link-color)" }}>started</span>
        </h2>
        <p className="text-sm mt-2" style={{ color: "var(--text-color)" }}>
          {connectScreen
            ? "Link your meter by entering meter id and start managing your energy usage"
            : "Link your meter and start managing your energy usage"}
        </p>

        {connectScreen && (
          <>
            <input
              type="text"
              value={inputValue}
              placeholder="Enter meter ID"
              maxLength={10}
              pattern="[0-9]*"
              inputMode="numeric"
              onChange={(e) => {
                setInputValue(e.target.value);
                setError("");
              }}
              className="w-full p-2 mt-4 border-none outline-none text-center rounded-xl"
              style={{
                backgroundColor: isDarkMode ? "#373737" : "#CACACA",
                border: error ? "#DB8F87 solid 1px" : "none",
                color: "var(--text-color)",
              }}
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">
                <Info className="inline mr-1" />
                {error}
              </p>
            )}
          </>
        )}
      </div>
      <div />
      <button
        className={`font-semibold py-3 px-6 rounded-xl w-full max-w-xs shadow-md flex items-center justify-center ${
          isButtonDisabled
            ? "bg-gray-500 opacity-50 cursor-not-allowed"
            : "secondary opacity-100 cursor-pointer"
        }`}
        disabled={isButtonDisabled || isLoading}
        onClick={handleSubmit}
      >
        {isLoading ? (
          <>
            <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#f85a16]" />
            {connectScreen ? "Verifying..." : "Link meter"}
          </>
        ) : connectScreen ? (
          "Link"
        ) : (
          "Link meter"
        )}
      </button>
    </div>
  );
}
