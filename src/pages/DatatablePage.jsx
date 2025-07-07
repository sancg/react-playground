import DataTable from '../components/Datatable/DataTable';

function DatatablePage() {
  const data = [
    { name: 'Orange', color: '#FFA500', score: 5 },
    { name: 'Apple', color: '#AA4A44', score: 3 },
    { name: 'Banana', color: '#FFE135', score: 5 },
  ];

  return (
    <div>
      <DataTable data={data} />
    </div>
  );
}

export default DatatablePage;
