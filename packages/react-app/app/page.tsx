"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between px-5 py-12"
    >
      <div />
      <img src="/images/robot.png" alt="robot" className="w-40 h-40 object-contain" />
      <div className="text-center space-y-4">
        <h1 className="text-lg font-semibold leading-6">
          Welcome to{" "}
          <span
            style={{ color: "#f85a16" }}
            className=""
          >
            M3tering Payer
          </span>
        </h1>
        <p className="text-md font-medium" style={{ color: "var(--text-color)" }}>
          Get started with managing your meter on the go.
        </p>
      </div>
      <Link href={"/link-meter"} className="bg-[#221F1F] text-white font-semibold py-3 px-6 rounded-xl w-full text-center shadow-md cursor-pointer">
        Get started
      </Link>
    </div>
  );
}
