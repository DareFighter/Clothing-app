import SHOP_DATA from "../../../shop-data.json";
import { useContext } from "react";
import { ProductsContext } from "../../../context/products.context";
import ProductsCard from "../../product-card/product-card.component";
import "./shop.styles.scss";
const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {SHOP_DATA.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
