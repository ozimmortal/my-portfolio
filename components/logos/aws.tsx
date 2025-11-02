import Image from "next/image";

export default function AwsLogo() {
  return (
    <div className="relative w-12 h-12">
      <Image
        src="/logos/aws.svg"
        alt="AWS Logo"
        fill
        style={{
          objectFit: "contain",
        }}
        className="size-10"
      />
    </div>
  );
}
