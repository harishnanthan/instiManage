/* eslint-disable react/prop-types */
import { isObjectNull } from "../../helpers/index";

const TableHeader = ({
  columns,
  tableHeaderClassName,
  tableHeaderRowsClassName,
}) => {
  const headers = columns?.map((column) => (
    <th
      key={column}
      className={tableHeaderRowsClassName}
      style={{ width: `${column.width}px` }}
    >
      {column.header}
    </th>
  ));
  return (
    <thead className={tableHeaderClassName}>
      <tr>{headers}</tr>
    </thead>
  );
};

const TableRows = ({ data, columns, additionalRow = {}, actions }) => {
  const rows = (
    !isObjectNull(additionalRow) ? [additionalRow, ...data] : data
  )?.map((row) => (
    <tr key={row}>
      {columns?.map((column) => (
        <td key={column} style={{ width: `${column.width}px` }}>
          {column?.cell(row, actions)}
        </td>
      ))}
    </tr>
  ));

  return <tbody>{rows}</tbody>;
};

export default function CustomTable({
  className,
  columns,
  data,
  additionalRow,
  actions,
  tableHeaderClassName,
  tableHeaderRowsClassName,
}) {
  return (
    <table className={`${className} full-width`}>
      <TableHeader
        columns={columns}
        tableHeaderClassName={tableHeaderClassName}
        tableHeaderRowsClassName={tableHeaderRowsClassName}
      />
      <TableRows
        actions={actions}
        additionalRow={additionalRow}
        columns={columns}
        data={data}
      />
    </table>
  );
}
