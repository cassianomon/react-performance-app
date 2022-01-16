import { FormEvent, useCallback, useMemo, useState } from 'react';
import type { NextPage } from 'next';

import SearchResults from '../components/SearchResults';
import styles from '../styles/Home.module.css';
import Product from '../interfaces/Product';

type Results = {
  totalPrice: number;
  data: Product[];
};

const Home: NextPage = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<Results>({
    totalPrice: 0,
    data: [],
  });

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q${search}`);
    const data = await response.json();

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    const products = data.map((product: Product) => {
      const { id, title, price } = product;
      return {
        id,
        title,
        price,
        priceFormatted: formatter.format(price),
      };
    });

    const totalPrice = data.reduce(
      (total: number, product: Product) => total + product.price,
      0
    );

    setResults({ totalPrice, data: products });
  }

  const addToWishlist = useCallback(async (id: number) => {
    console.log(id);
  }, []);

  const { totalPrice, data } = results;

  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>Search</h1>

        <form onSubmit={handleSearch}>
          <input
            name="search"
            placeholder="Buscar"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button type="submit">Buscar</button>
        </form>

        <div>
          <SearchResults
            results={results.data}
            totalPrice={results.totalPrice}
            onAddToWishlist={addToWishlist}
          ></SearchResults>
        </div>
      </main>
    </div>
  );
};

export default Home;
