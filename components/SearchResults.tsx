import Product from '../interfaces/Product';
import ProductItem from './ProductItem';

interface SearchResultsProps {
  results: Array<Product>;
}

export function SearchResults({ results }: SearchResultsProps) {
  return (
    <div>
      {results.map((product) => {
        return <ProductItem key={product.id} product={product}></ProductItem>;
      })}
    </div>
  );
}
