import DataTable from '../components/Datatable/DataTable';

function DatatablePage() {
  const data = [
    { name: 'Orange', color: 'bg-orange-200', score: 5 },
    { name: 'Apple', color: 'bg-red-200', score: 3 },
    { name: 'Banana', color: 'bg-yellow-200', score: 5 },
  ];

  const config = [
    { label: 'Name', render: (h) => <th key={h.label}>{h.label}</th> },
    { label: 'Color', render: (h) => <th key={h.label}>{h.label}</th> },
    { label: 'Score', render: (h) => <th key={h.label}>{h.label}</th> },
  ];

  return (
    <div>
      <DataTable data={data} config={config} />
    </div>
  );
}

export default DatatablePage;
