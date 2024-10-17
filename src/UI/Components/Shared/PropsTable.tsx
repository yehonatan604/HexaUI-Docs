export type TTableProps = {
  prop: string;
  type: string;
  description: string;
  required: boolean;
  defaultValue?: string;
};

type PropsTableProps = {
  tableProps: TTableProps[];
};

const PropsTable = ({ tableProps }: PropsTableProps) => {
  return (
    <table className=" max-w-5xl">
      <thead className="bg-zinc-700">
        <tr>
          <th className="py-2 px-4 text-left font-semibold border-b">Prop</th>
          <th className="py-2 px-4 text-left font-semibold  border-b">Type</th>
          <th className="py-2 px-4 text-left font-semibold border-b">Description</th>
          <th className="py-2 px-4 text-left font-semibold border-b">Required</th>
          <th className="py-2 px-4 text-left font-semibold border-b">Default</th>
        </tr>
      </thead>
      <tbody>
        {tableProps.map((prop) => (
          <tr key={prop.prop}>
            <td className="py-2 px-4 border-b">{prop.prop}</td>
            <td className="py-2 px-4 border-b">{prop.type}</td>
            <td className="py-2 px-4 border-b">{prop.description}</td>
            <td className="py-2 px-4 border-b">{prop.required ? "Yes" : "No"}</td>
            <td className="py-2 px-4 border-b">{prop.defaultValue || "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PropsTable;
