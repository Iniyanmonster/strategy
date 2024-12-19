import { useEffect, useState } from "react";
import { getProducts } from "../../services/shopify.services";

export default function Product() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await getProducts();
        setData(productData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const { data: { products: { edges } = {} } = {} } = data;

  return (
    <div className="flex gap-10 mt-48">
      {edges?.map?.((data) => {
        const { node = {} } = data;
        const { title, media, priceRange } = node;
        const { url } = media?.edges?.[0]?.node?.previewImage || {};
        const { amount } = priceRange?.maxVariantPrice || {};
        return (
          <div className="gap-5">
            <img className="h-64 w-60 object-fill" src={url} alt={title} />
            <div className="flex justify-between items-center text-white gap-10">
              <p>{title}</p>
              <p>Price: ${amount}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
