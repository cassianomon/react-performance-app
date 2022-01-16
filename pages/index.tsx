import { FormEvent, useCallback, useState } from 'react';
import type { NextPage } from 'next';

import SearchResults from '../components/SearchResults';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q${search}`);
    const data = await response.json();

    setResults(data);
  }

  const addToWishlist = useCallback(async (id: number) => {
    console.log(id);
  }, []);

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
            results={results}
            onAddToWishlist={addToWishlist}
          ></SearchResults>
        </div>
      </main>
    </div>
  );
};

export default Home;
