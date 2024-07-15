import { useEffect, useState } from "react";

export const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<String[]>([]);

  useEffect(() => {
    console.log(`Fetching products in ${category}`)
    setProducts(["Clothing", "Household"])
  }, [ category ])

  return (
    <div></div>
  )
}
