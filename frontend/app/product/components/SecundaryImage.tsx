import { SecundaryImageProps } from "@/types";
import Image from "next/image";
import React from "react";

export default function SecundaryImage(props: SecundaryImageProps) {
  return (
    <div className="sm:w-[105px] w-16 h-16 sm:h-[99.75px] relative">
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
