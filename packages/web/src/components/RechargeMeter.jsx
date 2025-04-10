import { ChevronLeft, Wallet } from "lucide-react";
import { useState } from "react";
import ConnectWallet from "./modals/ConnectWallet";

const RechargeMeter = ({ toggleRechargeMeter }) => {
  const prices = [20, 50, 100, 200, 500, 1000];
  const [priceValue, setPriceValue] = useState("");
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="px-4">
      {/* Back button */}
      <button
        onClick={toggleRechargeMeter}
        className="text-gray-500 flex pt-4 cursor-pointer items-center"
      >
        <ChevronLeft /> <span>Back</span>
      </button>

      {/* Headers */}
      <div className=" pt-2">
        <h1 className="text-2xl font-extrabold">
          Recharge <span className="text-[var(--link-color)]">Meter</span>
        </h1>
        <h2 className="font-light">Top up your meter</h2>
        {/* Add your recharge options here */}
      </div>

      {/* Fixed Price */}
      <section className="grid grid-cols-3 gap-4 mt-5">
        {prices.map((price) => {
          return (
            <div
              className="bg-[#283E87] cursor-pointer p-4 py-2 rounded-xl flex items-center justify-center"
              key={price}
              onClick={() => setPriceValue(price)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setPriceValue(price);
                }
              }}
              role="button"
            >
              <button className="bg-[var(--dark-background-color)] cursor-pointer text-[var(--link-color)] font-light text-lg py-2 px-7 rounded-xl">
                ${price}
              </button>
            </div>
          );
        })}
      </section>

      {/* Input */}
      <div className="mt-5 w-full flex items-center justify-between text-[var(--link-color)]">
        <span className="text-xl font-light">$</span>
        <input
          type="text"
          pattern="[0-9]*"
          inputMode="numeric"
          value={priceValue}
          onChange={(e) => setPriceValue(e.target.value)}
          className="p-2 text-[var(--link-color)] w-[95%] border-b outline-none border-gray-500"
        />
      </div>

      {/* Connect Wallet */}
      <div className="fixed bottom-0 left-0 right-0  p-4">
        <div className="w-full gap-4 grid place-items-center mb-4">
          <div
            className="border grid place-items-center border-[var(--link-color)] w-[5rem] h-[5rem] rounded-full cursor-pointer "
            role="button"
            onClick={toggleModal}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                toggleModal();
              }
            }}
          >
            <Wallet className="text-[var(--link-color)]" />
          </div>

          <p className="font-light">Connect to wallet and make payments</p>
        </div>
        <button
          className="secondary font-light text-lg py-2 px-7 rounded-xl w-full mt-5 cursor-pointer"
          onClick={toggleModal}
        >
          Connect Wallet
        </button>
      </div>

      {modal && <ConnectWallet toggleModal={toggleModal} />}
    </div>
  );
};

export default RechargeMeter;
