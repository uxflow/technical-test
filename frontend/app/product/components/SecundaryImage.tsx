import { SecundaryImageProps } from "@/types";
import Image from "next/image";
import React from "react";

export default function SecundaryImage(props: SecundaryImageProps) {
  return (
    <div className="w-[105px] h-[99.75px] relative">
      <Image
        src={props.image}
        alt="Imagem de tênis"
        fill
        sizes="100vw"
        style={{ objectFit: "cover", borderRadius: "8px" }}
      />
    </div>
  );
}
