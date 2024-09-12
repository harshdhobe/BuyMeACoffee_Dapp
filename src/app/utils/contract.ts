import { getContract } from "thirdweb";
import { client } from "@/app/client";
import { chain } from "@/chain";
import { contractABI } from "./contractABI";

const contractAddress = "0xAfAE8b0837F87464760b2944672c0E70501e9610";

export const contract = getContract({
    client: client,
    chain: chain,
    address: contractAddress,
    abi: contractABI,
    
    
    
});