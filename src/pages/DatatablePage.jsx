import DataTable from '../components/Datatable/DataTable';

function DatatablePage() {
  const data = [
    { name: 'Orange', color: 'bg-orange-200', score: 5 },
    { name: 'Apple', color: 'bg-red-200', score: 3 },
    { name: 'Banana', color: 'bg-yellow-200', score: 5 },
  ];

  const config = [
    { label: 'Name', render: (d) => d.name },
    {
      label: 'Color',
      render: (d) => <div className={`p-3 m-2 ${d.color}`}></div>,
    },
    { label: 'Score', render: (d) => d.score },
  ];

  return (
    <div>
      <DataTable data={data} config={config} />
    </div>
  );
}

export default DatatablePage;
