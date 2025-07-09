function DataTable({ data, config }) {
  const renderHeaders = config.map((head) => {
    if (head.render) {
      return head.render(head);
    }
  });
  const renderedRows = data.map((fruit) => {
    return (
      <tr className="border-b" key={fruit.name + fruit.score}>
        <td className="p-3">{fruit.name}</td>
        <td className="p-3">
          <div className={`p-3 m-2 ${fruit.color}`}></div>
        </td>
        <td className="p-3">{fruit.score}</td>
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
