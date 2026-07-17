export default function ProductSpecification({ specifications }) {
    return (
      <table className="w-full border border-gray-200">
        <tbody>
          {Object.entries(specifications).map(([key, value]) => (
            <tr key={key} className="border-b">
              <td className="font-semibold p-3 bg-gray-50 w-1/3">{key}</td>
              <td className="p-3">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }