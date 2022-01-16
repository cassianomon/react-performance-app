import { useMemo } from 'react';

import Product from '../interfaces/Product';
import ProductItem from './ProductItem';

interface SearchResultsProps {
  totalPrice: number;
  results: Array<Product>;
  onAddToWishlist: (id: number) => void;
}

const SearchResultsReact: React.FC<SearchResultsProps> = ({
  totalPrice,
  results,
  onAddToWishlist,
}: SearchResultsProps) => {
  return (
    <div>
      {totalPrice}
      {results.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            onAddToWishlist={onAddToWishlist}
          ></ProductItem>
        );
      })}
    </div>
  );
};

export default SearchResultsReact;
