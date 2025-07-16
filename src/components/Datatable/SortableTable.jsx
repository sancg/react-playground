import React from 'react';
import { useState } from 'react';
import Table from './Table';
import {
  ArrowsUpDownIcon,
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
  FunnelIcon,
} from '@heroicons/react/20/solid';

export default function SortableTable(props) {
  const { data, config } = props;

  const [dataTable, setDataTable] = useState(data);
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const headerConfig = config.map((obj) => {
    if (obj.sortValue) {
      return {
        ...obj,
        header: (
          <th
            key={obj.label}
            className="max-w-3xl min-w-28 cursor-pointer select-none"
            onClick={() => handleClick(obj)}
          >
            <div className="flex items-center justify-around">
              {getIcons(sortOrder)}
              {obj.label}
            </div>
          </th>
        ),
      };
    }

    return obj;
  });

  const handleClick = (obj) => {
    if (sortBy && sortBy !== obj.label) {
      setSortOrder('asc');
      setSortBy(obj.label);
      return;
    }
    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(obj.label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(obj.label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }

    sortHeader();
  };

  const sortHeader = () => {
    const order = sortOrder ? 1 : -1;

    const sortedData = dataTable.toSorted((a, b) => {
      const valueA = headerConfig.sortValue(a);
      const valueB = headerConfig.sortValue(b);

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * order;
      }

      return (valueA - valueB) * order;
    });
    // console.log({ sortBy, sortedData, isAsc });
    setDataTable(sortedData);
  };

  return (
    <div>
      {sortBy} - {sortOrder}
      <Table {...props} config={headerConfig} data={dataTable} />
    </div>
  );
}

function getIcons(order) {
  let icon = {
    asc: <ChevronDoubleUpIcon width={20} />,
    desc: <ChevronDoubleDownIcon width={20} />,
    none: <ArrowsUpDownIcon width={20} />,
  };
  if (order === null) {
    return icon.none;
  }
  return icon[order];
}
