"use client";
import {
  TransactionButton,
  useActiveAccount,
  useContractEvents,
  useReadContract,
} from "thirdweb/react";
import { useState } from "react";
import { client } from "@/app/client";
import { chain } from "@/chain";

import { ConnectButton } from "thirdweb/react";
import { prepareContractCall, toWei } from "thirdweb";
import { contract } from "@/app/utils/contract";

export const Buymecoffee = () => {
  const account = useActiveAccount();

  const [buyAmount, setbuyAmount] = useState(0);
  const [message, setMessage] = useState("");

  const { data: contractEvents, refetch: refetchContractEvents } =
    useContractEvents({
      contract: contract,
    });

  if (account) {
    return (
      <div
        style={{
          border: "1px solid white",
          width: "500px",

          padding: "20 rem ",
          borderRadius: "6px",
          paddingTop: "2rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ConnectButton chain={chain} client={client} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            paddingTop: "2rem",
          }}
        >
          <label style={{ fontSize: "1.15rem" }}>Tip Amount</label>

          <input
            type="number"
            value={buyAmount}
            onChange={(e) => setbuyAmount(Number(e.target.value))}
            step={0.1}
            style={{
              padding: "0.5rem",
              border: "none",
              marginBottom: "1rem",
            }}
          ></input>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            paddingTop: "2rem",
          }}
        >
          <label style={{ fontSize: "1.15rem" }}>Message</label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter a message..."
            style={{
              padding: "0.5rem",
              border: "none",
              marginBottom: "1rem",
            }}
          ></input>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <TransactionButton
            transaction={() =>
              prepareContractCall({
                contract: contract,
                method: "buyMecoffee",
                params: [buyAmount.toString(), message],
                value: BigInt(toWei(buyAmount.toString())),
              })
            }
            onTransactionConfirmed={() => {
              alert("Thank you for the coffee!");
              setbuyAmount(0); // Reset buyAmount
              setMessage(""); // Reset message
            }}
          >
            Buy Coffee
          </TransactionButton>
        </div>
      </div>
    );
  }
};
