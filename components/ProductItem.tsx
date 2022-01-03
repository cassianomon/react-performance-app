import { memo } from 'react';
import Product from '../interfaces/Product';

interface ProductItemProps {
  product: Product;
}

const ProductItemComponent: React.FC<ProductItemProps> = ({
  product,
}: ProductItemProps) => {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
};

const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product);
});

export default ProductItem;
