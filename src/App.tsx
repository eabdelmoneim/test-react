import { ConnectWallet, useOwnedNFTs } from "@thirdweb-dev/react";
import "./styles/Home.css";
import { useContract, useNFT, ThirdwebNftMedia } from "@thirdweb-dev/react";

export default function Home() {
  const { contract } = useContract(
    "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
  );
  const { data: nft, isLoading, error } = useNFT(contract, 0);

  if (isLoading) return <div>Loading...</div>;
  if (error || !nft) {
    return <div>NFT not found</div>;
  } else {
    console.log(nft);
  }

  return (
    <>
      <div style={{ width: 200 }}>
        <ConnectWallet></ConnectWallet>
      </div>
      <ThirdwebNftMedia metadata={nft.metadata} />
    </>
  );
}
