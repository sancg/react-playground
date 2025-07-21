import useSorted from '../../hooks/useSorted';
import Table from './Table';
import {
  ArrowsUpDownIcon,
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from '@heroicons/react/20/solid';

export default function SortableTable(props) {
  const { data, config } = props;
  const { sortBy, sortOrder, sortingStatus, columnSort } = useSorted(data);

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
          onClick={() => sortingStatus(column.label)}
        >
          <div className="flex items-center justify-around">
            {getIcons(sortOrder, sortBy, column.label)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  let sortedData = columnSort(sortableConfig);
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
