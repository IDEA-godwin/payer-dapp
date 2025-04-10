const ConnectWallet = ({ toggleModal }) => {
  return (
    <div
      className="fixed inset-0 bg-[rgba(2,13,30,0.5)] bg-opacity-50 flex items-center justify-center z-50"
      id="modal-overlay"
      onClick={toggleModal}
    >
      <div
        className="bg-[#1B2546] p-7 px-9 rounded-xl w-80"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="font-extrabold  mb-10">
          Connect your wallet to make payments
        </p>

        {/* Buttons */}
        <div className="grid gap-4">
          <WalletButton
            icon="/metamask.png"
            label="Connect to your MetaMask Wallet"
            borderColor="#F5841F"
          />
          <WalletButton
            icon="/coinbase.png"
            label="Connect to your Coinbase Wallet"
            borderColor="#0E5BFF"
          />
          <WalletButton
            icon="/rainbow.png"
            label="Connect to your Rainbow Wallet"
            borderColor="#DE4537"
          />
          <WalletButton
            icon="/phantom.png"
            label="Connect to your Phantom Wallet"
            borderColor="#AB9FF2"
          />
        </div>
      </div>
    </div>
  );
};

const WalletButton = ({ icon, label, borderColor }) => (
  <button
    className={`flex items-center justify-between border-2 rounded-xl py-2 pl-3 pr-5  w-full`}
    style={{ borderColor: borderColor }}
  >
    <span>
      <img src={icon} alt={label} className="w-8 h-8 mr-2" />
    </span>
    <p className="text-left">{label}</p>
  </button>
);

export default ConnectWallet;
