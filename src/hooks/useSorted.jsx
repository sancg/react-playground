import { useState } from 'react';

function useSorted(data) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const sortingStatus = (label) => {
    if (sortBy && sortBy !== label) {
      setSortOrder('asc');
      setSortBy(label);
      return;
    }
    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const columnSort = (options) => {
    const column = options.find((c) => c.label === sortBy);

    let sortedData = data;
    if (column) {
      const order = sortOrder === 'asc' ? 1 : -1;

      sortedData = data.toSorted((a, b) => {
        const valueA = column.sortValue(a);
        const valueB = column.sortValue(b);

        if (typeof valueA === 'string') {
          return valueA.localeCompare(valueB) * order;
        }

        return (valueA - valueB) * order;
      });
    }
    return sortedData;
  };

  return {
    sortBy,
    sortOrder,
    columnSort,
    sortingStatus,
  };
}
export default useSorted;
