import Image from "next/image";

export default function KubernetesLogo() {
  return (
    <div className="relative w-12 h-12">
      <Image
        src="/logos/kubernetes.svg"
        alt="Kubernetes Logo"
        fill
        style={{
          objectFit: "contain",
        }}
        className="size-10"
      />
    </div>
  );
}
