import { PaymentMethodProps } from "@/types";
import Image from "next/image";
import React from "react";

export default function PaymentMethod(props: PaymentMethodProps) {
  let fixedPrice = "";
  if (props.discount) {
    fixedPrice = (props.price / 100 - props.price / 10 / 100)
      .toFixed(2)
      .replace(".", ",");
  } else {
    fixedPrice = (props.price / 100).toFixed(2).replace(".", ",");
  }

  return (
    <div className=" sm:w-[158px] px-4 sm:px-0 h-[136px] flex flex-col justify-between">
      <Image src={props.image} alt="pix logo" />
      <span className=" mt-[16px] text-gray-400 text-[14px]">
        {props.discount ? (
          <span className="line-through">
            De R$ {(props.price / 100).toFixed(2).replace(".", ",")}
          </span>
        ) : (
          <div>Ou em</div>
        )}
      </span>
      <div className="text-black font-semibold text-xl sm:text-[32px] flex-nowrap font-poppins">
        R$ {fixedPrice}
      </div>
      <span className="text-gray-400 text-[12px]  sm:text-[14px] ">
        {props.discount ? (
          <>
            no pix <span className="text-primary_color">10%</span> de desconto
          </>
        ) : (
          <>
            em <span className="text-primary_color">06x</span> sem juros
          </>
        )}
      </span>
    </div>
  );
}
