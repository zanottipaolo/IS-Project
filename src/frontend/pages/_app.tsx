import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment, useEffect } from "react";
import axios from "axios";

export default function App({ Component, pageProps }: AppProps) {
  const getToken = async () => {
    try {
      const res = await fetch("http://localhost:8000/token/", {
        method: "POST",
        body: JSON.stringify({
          username: "admin",
          password: "admin",
        }),
        mode: "cors",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRFToken":
            "5muP95NwT2Cj2oZGVXMC7xA2KOKD4uYZt61oDNUJD0c1E4nz8XnQIPnqmlyuE8mu",
        },
      });

      const data = await res.json();
      localStorage.setItem("refreshToken", data.refresh);
      localStorage.setItem("accessToken", data.access);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getToken();
  });

  return (
    <>
      <Head>
        <link rel="icon" href="/images/website_icon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
