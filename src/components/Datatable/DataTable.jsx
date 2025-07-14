import { ArrowsUpDownIcon } from '@heroicons/react/20/solid';
import { useState, useEffect } from 'react';

function DataTable({ data, config, keyFn }) {
  const [dataTable, setDataTable] = useState(data);
  const [sortAsc, setSortAsc] = useState(true);

  const sortHeader = (header) => {
    const sortBy = Object.keys(dataTable?.[0])?.find((a) => {
      let reg = new RegExp(header.label, 'i');
      return reg.test(a);
    });

    const isAsc = sortAsc ? 1 : -1;
    if (!sortBy) {
      console.log('No sorting method');
      return;
    }
    const sortedData = dataTable.toSorted((a, b) => {
      const valueA = a[sortBy];
      const valueB = b[sortBy];

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * isAsc;
      }

      return (valueA - valueB) * isAsc;
    });
    // console.log({ sortBy, sortedData, isAsc });
    setDataTable(sortedData);
    setSortAsc((prev) => !prev);
  };
  const handleSort = (header, event) => {
    sortHeader(header);
  };

  useEffect(() => {
    return () => {};
  }, [dataTable]);

  const renderHeaders = config.map((conf) => {
    const isSortable = conf.header ? (
      <div
        className="flex items-center justify-around cursor-pointer select-none w-20"
        onClick={(e) => handleSort(conf, e)}
      >
        <ArrowsUpDownIcon width={24} />
        {conf.label}
      </div>
    ) : (
      <>{conf.label}</>
    );

    return (
      <th key={conf.label} className="w-full">
        {isSortable}
      </th>
    );
  });

  const renderedRows = dataTable.map((fruit) => {
    const renderedCells = config.map((column) => (
      <td className="p-2" key={column.label}>
        {column.render(fruit)}
      </td>
    ));

    return (
      <tr className="border-b" key={keyFn(fruit)}>
        {renderedCells}
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default DataTable;
