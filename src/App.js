import './App.css';

import React, { useState } from 'react';
import axios from 'axios';

import { Sheet, Filter, Pagination } from './components';

function App() {
  const [items, setItems] = useState([]);
  const [substring, setSubstring] = useState('');
  const [sortKey, setSortKey] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(50);

  React.useEffect(() => {
    const fetchPosts = async () => {
      axios.get('https://jsonplaceholder.typicode.com/posts').then(({ data }) => {
        setItems(data);
      });
    };

    fetchPosts();
  }, []);

  const onUpdateSearch = (substring) => {
    setSubstring(substring);
  };

  const onSort = (sortKey) => {
    setSortKey(sortKey);
    setItems(items.reverse());
  };

  const searchedContent = (items, substring) => {
    if (substring.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.body.toLowerCase().includes(substring.toLowerCase());
    });
  };

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;

  const visiblePosts = searchedContent(items, substring).slice(firstItemIndex, lastItemIndex);

  return (
    <div className="wrapper">
      <Filter onUpdateSearch={onUpdateSearch} />
      <Sheet items={visiblePosts} onSort={onSort} sortKey={sortKey} />
      <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate} />
    </div>
  );
}

export default App;
