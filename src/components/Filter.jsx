import React from 'react';

function Filter(props) {
  const onUpdateSearch = (event) => {
    const substring = event.target.value;
    props.onUpdateSearch(substring);
  };

  return (
    <input className="filter" type="text" placeholder="Фильтрация" onChange={onUpdateSearch} />
  );
}

export default Filter;
