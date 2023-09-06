import Image from "next/image";
import ProductCard from "../components/ProductCard";
import { Products } from "@/constants";
export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="w-1/2 bg-orange-500 h-80 font">
          <h1 className="pl-[104px] pr-[197px] py-[96px] text-[48px] font-semibold text-white font-poppins">
            Estilo e conforto para os seus pés
          </h1>
        </div>
        <div className="relative w-1/2 overflow-hidden h-80">
          <Image
            src="https://s3-alpha-sig.figma.com/img/006a/8653/3fd45771ef0ab8e8b4230c22de407513?Expires=1694390400&Signature=RTRQ2ntJfVI1RSFscLbJjgOqmt661h0EvJ4PymBCjS53w-fBvKJMX0rgpIevGZWSq~NQmNd1r09kN5gfXpZgGJDCwFpgQtdzg9iiZWxUw-mhVxcjg0oXNqP4JivoXPyGQAR0HpoEK75pSRPEl1K6qI3UFiqjIRiUuFK3o8tfo2pUZDHaRSNcgvK43t1b1mhsdyw0Up885~H4vYzUwqnB5u9vEgFXVF7CT9qq5Z92Fh7a-KHu7hRxXdE9rJp18SJwuCONBMhMTgNATiLpYceZaDn4nASZsbO3NPBJ-vf50EDgtZywl0KZ7WV1qcv3g102yAtBaNG8kWfIOLGqWlObog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="Sapato marrom"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="flex gap-[48px] justify-center mt-[48px]">
        {Products.map((el) => (
          <ProductCard
            name={el.name}
            id={el.id}
            key={el.id}
            image={el.image}
            price={el.price}
          />
        ))}
      </div>
    </main>
  );
}
