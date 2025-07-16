import { useState } from 'react';
import Table from './Table';
import {
  ArrowsUpDownIcon,
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from '@heroicons/react/20/solid';

export default function SortableTable(props) {
  const { data, config } = props;

  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const handleClick = (label) => {
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

  const sortableConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: (
        <th
          key={column.label}
          className="max-w-3xl min-w-28 cursor-pointer select-none"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center justify-around">
            {getIcons(sortOrder, sortBy, column.label)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  const columnSort = config.find((c) => c.label === sortBy);

  let sortedData = [...data];
  if (columnSort) {
    const order = sortOrder === 'asc' ? 1 : -1;

    sortedData = data.toSorted((a, b) => {
      const valueA = columnSort.sortValue(a);
      const valueB = columnSort.sortValue(b);

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * order;
      }

      return (valueA - valueB) * order;
    });
  }

  return (
    <div>
      {sortBy} - {sortOrder}
      <Table {...props} config={sortableConfig} data={sortedData} />
    </div>
  );
}

function getIcons(order, sortElement, current) {
  let icon = {
    asc: <ChevronDoubleUpIcon width={20} />,
    desc: <ChevronDoubleDownIcon width={20} />,
    none: <ArrowsUpDownIcon width={20} />,
  };
  if (sortElement !== current) {
    return icon.none;
  }

  if (order === null) {
    return icon.none;
  }
  return icon[order];
}
