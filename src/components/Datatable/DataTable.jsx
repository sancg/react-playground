function DataTable({ data, config }) {
  const renderHeaders = config.map((conf) => (
    <th key={conf.label}>{conf.label}</th>
  ));
  const renderedRows = data.map((fruit) => {
    return (
      <tr className="border-b" key={fruit.name + fruit.score}>
        {config.map((i) => (
          <td className="p-3" key={fruit.name + i.label}>
            {i.render(fruit)}
          </td>
        ))}
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
