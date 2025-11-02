import Image from "next/image";

export default function PythonLogo() {
  return (
    <div className="relative w-12 h-12">
      <Image
        src="/logos/python.svg"
        alt="Python Logo"
        fill
        style={{
          objectFit: "contain",
        }}
        className=" size-10"
      />
    </div>
  );
}
