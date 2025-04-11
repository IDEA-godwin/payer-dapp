"use client";

import Link from "next/link";

const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between px-6 py-12"
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
      <Link href={"/link-meter"}
        className="secondary font-semibold py-3 px-6 rounded-xl w-full max-w-xs shadow-md cursor-pointer"
      // style={{
      //   backgroundColor: "var(--dark-button-color)",
      //   color: "var(--text-color-light)",
      // }}
      >
        Get started
      </Link>
    </div>
  );
}
