import React from 'react';

function Sheet({ items, onSort, sortKey }) {
  const sort = () => {
    if (sortKey === 'asc') {
      sortKey = 'desc';
    } else {
      sortKey = 'asc';
    }

    onSort(sortKey);
  };

  return (
    <table className="sheet" border="1">
      <thead onClick={sort}>
        <tr className="sheet-title">
          <th className="number">№</th>
          <th className="value">Content</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id} className="sheet-item">
            <td className="number">{item.id}</td>
            <td className="value">{item.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Sheet;
