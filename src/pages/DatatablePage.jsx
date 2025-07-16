import SortableTable from '../components/Datatable/SortableTable';
import Table from '../components/Datatable/Table';

function DatatablePage() {
  const data = [
    { name: 'Orange', color: 'bg-orange-200', score: 5 },
    { name: 'Apple', color: 'bg-red-200', score: 3 },
    { name: 'Banana', color: 'bg-yellow-200', score: 1 },
    { name: 'Tropical', color: 'bg-cyan-200', score: 20 },
    { name: 'Sky', color: 'bg-blue-200', score: 10 },
  ];

  const config = [
    { label: 'Name', render: (d) => d.name, sortValue: (d) => d.name },
    {
      label: 'Color',
      render: (d) => <div className={`p-3 m-2 ${d.color}`}></div>,
    },
    { label: 'Score', render: (d) => d.score, sortValue: (d) => d.score },
  ];
  const keyFn = (fruit) => fruit.name;
  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default DatatablePage;
