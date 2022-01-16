import { memo } from 'react';
import Product from '../interfaces/Product';

interface ProductItemProps {
  product: Product;
  onAddToWishlist: (id: number) => void;
}

const ProductItemComponent: React.FC<ProductItemProps> = ({
  product,
  onAddToWishlist,
}: ProductItemProps) => {
  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => onAddToWishlist(product.id)}>{'<3'}</button>
    </div>
  );
};

const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product);
});

export default ProductItem;
