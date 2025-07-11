function DataTable({ data, config, keyFn }) {
  const renderHeaders = config.map((conf) => (
    <th key={conf.label}>{conf.label}</th>
  ));

  const renderedRows = data.map((fruit) => {
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
