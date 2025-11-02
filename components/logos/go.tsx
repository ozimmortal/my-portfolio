import Image from "next/image";

const GoLogo = () => (
  <div className="relative w-20 h-20">
    <Image
      src="/logos/go.svg"
      alt="Go Logo"
      fill
      style={{
        objectFit: "contain",
      }}
      className=" size-10"
    />
  </div>
);

export default GoLogo;
