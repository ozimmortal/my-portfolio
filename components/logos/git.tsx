import Image from "next/image";

export default function GitLogo() {
  return (
    <div className="relative w-12 h-12">
      <Image
        src="/logos/git.svg"
        alt="Git Logo"
        fill
        style={{
          objectFit: "contain",
        }}
        className="size-10"
      />
    </div>
  );
}
