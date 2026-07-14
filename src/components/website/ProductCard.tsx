import Image from "next/image";
import type { Product } from "@/lib/site-data";
import { PRODUCT_IMAGES } from "@/lib/images";

export function ProductCardItem({ product }: { product: Product }) {
  const image = PRODUCT_IMAGES[product.id] ?? PRODUCT_IMAGES["se-city"];

  return (
    <article className="product-card">
      <div className="product-card__visual">
        <Image
          src={image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="product-card__img"
        />
      </div>
      <div className="product-card__body">
        <span className="product-card__category">{product.category}</span>
        <h3>{product.name}</h3>
        {product.specs && (
          <div className="product-card__specs">
            <span>
              <strong>{product.specs}</strong>
            </span>
          </div>
        )}
        <p>{product.description}</p>
        <ul className="product-card__features">
          {product.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
