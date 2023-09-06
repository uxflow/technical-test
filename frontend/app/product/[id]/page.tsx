"use client";
import { Products } from "@/constants";
import Image from "next/image";
import pix from "@/public/icons/pix.svg";
import card from "@/public/icons/credit-card.svg";
import SecundaryImage from "../components/SecundaryImage";
import PaymentMethod from "../components/PaymentMethod";
import CustomButton from "@/components/CustomButton";

export default function ProductPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const product = Products[id];
  function buttonClick() {
    console.log(product.price);
  }
  return (
    <div className="container">
      <div className="w-[1232px] h-[471px]">
        {/* left side */}
        <div className="flex gap-[24px]">
          <div>
            <div className="flex flex-col gap-[24px]">
              {product.secundary_images.map((el, i) => (
                <SecundaryImage
                  key={product.secundary_images[i]}
                  image={product.secundary_images[i]}
                />
              ))}
            </div>
          </div>
          <div className="w-[467px] h-[471px] relative">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="100vw"
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
          {/* right side */}
          <div className="flex py-[40px] w-[596px] ml-[16px] align-baseline">
            <div className="flex flex-col justify-between ">
              <h1 className=" font-poppins font-medium text-[28px]">
                {product.description}
              </h1>
              <div className="bg-gray-50 h-[176px] px-[48px] py-[20px] flex justify-between items-center">
                <PaymentMethod
                  image={pix}
                  price={product.price}
                  discount={true}
                />
                <div className="border h-[80px] "></div>
                <PaymentMethod
                  image={card}
                  price={product.price}
                  discount={false}
                />
              </div>
              <CustomButton
                title="Adicionar ao carrinho"
                containerStyles="p-[12px] h-[48px] bg-primary_color rounded-lg"
                textStyles="text-white"
                handleClick={buttonClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
