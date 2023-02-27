import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import { useContract, useNFT, ThirdwebNftMedia } from "@thirdweb-dev/react";

export default function Home() {
  const { contract } = useContract(
    "0x23581767a106ae21c074b2276d25e5c3e136a68b"
  );
  const { data: nft, isLoading, error } = useNFT(contract, "0");

  if (isLoading) return <div>Loading...</div>;
  if (error || !nft) return <div>NFT not found</div>;

  return <ThirdwebNftMedia metadata={nft.metadata} />;
}
