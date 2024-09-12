import Image from "next/image";
import styles from "./page.module.css";
import { ConnectButton, ConnectEmbed } from "thirdweb/react";
import { client } from "./client";
import { Buymecoffee } from "../../components/Buymecoffee";
import { useState } from "react";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
        marginTop: "5rem",
        flexDirection: "column",
        marginBottom: "2rem",
      }}
    >
      <div style={{ marginTop: "2rem" }}>
        <h1>Buy Harsh A Coffee</h1>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <ConnectEmbed client={client} />
      </div>

      <Buymecoffee></Buymecoffee>
    </div>
  );
}

//<ConnectEmbed client={client} />;
