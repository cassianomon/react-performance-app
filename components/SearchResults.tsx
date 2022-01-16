import { useMemo } from 'react';

import Product from '../interfaces/Product';
import ProductItem from './ProductItem';

interface SearchResultsProps {
  results: Array<Product>;
  onAddToWishlist: (id: number) => void;
}

const SearchResultsReact: React.FC<SearchResultsProps> = ({
  results,
  onAddToWishlist,
}: SearchResultsProps) => {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => total + product.price, 0);
  }, [results]);

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
