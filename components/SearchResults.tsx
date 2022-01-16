import { List, ListRowRenderer } from 'react-virtualized';

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
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishlist={onAddToWishlist}
        ></ProductItem>
      </div>
    );
  };

  return (
    <div>
      {totalPrice}
      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
      {/* {results.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            onAddToWishlist={onAddToWishlist}
          ></ProductItem>
        );
      })} */}
    </div>
  );
};

export default SearchResultsReact;
