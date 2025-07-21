
// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/layout/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="p-4">
        <Component {...pageProps} />
      </main>
    </>
  );
}
