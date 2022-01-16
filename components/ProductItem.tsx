import { memo, useState } from 'react';
import dynamic from 'next/dynamic';

import Product from '../interfaces/Product';
import { AddToWishlistProps } from './AddToWishlist';

const AddToWishlist = dynamic<AddToWishlistProps>(async () => {
  return import('./AddToWishlist').then((mod) => mod.AddToWishlist);
});

interface ProductItemProps {
  product: Product;
  onAddToWishlist: (id: number) => void;
}

const ProductItemComponent: React.FC<ProductItemProps> = ({
  product,
  onAddToWishlist,
}: ProductItemProps) => {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);
  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>{'<3'}</button>
      {isAddingToWishlist && (
        <AddToWishlist
          onAddToWishlist={() => onAddToWishlist(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        ></AddToWishlist>
      )}
    </div>
  );
};

const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product);
});

export default ProductItem;
