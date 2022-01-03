import Product from '../interfaces/Product';
import ProductItem from './ProductItem';

interface SearchResultsProps {
  results: Array<Product>;
}

const SearchResultsReact: React.FC<SearchResultsProps> = ({
  results,
}: SearchResultsProps) => {
  return (
    <div>
      {results.map((product) => {
        return <ProductItem key={product.id} product={product}></ProductItem>;
      })}
    </div>
  );
};

export default SearchResultsReact;
