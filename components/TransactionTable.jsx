import { useStore } from "../store/useStore";

export default function TransactionTable() {
  const { transactions, filter, setFilter, role, addTransaction } = useStore();

  const filtered = transactions.filter((t) =>
    t.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Search category..."
        onChange={(e) => setFilter(e.target.value)}
        className="border p-2 mb-2"
      />

      <table className="w-full border">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((t) => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>{t.amount}</td>
              <td>{t.category}</td>
              <td>{t.type}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {role === "admin" && (
        <button
          onClick={() =>
            addTransaction({
              id: Date.now(),
              date: "2026-04-05",
              amount: 1000,
              category: "Test",
              type: "expense",
            })
          }
          className="mt-2 bg-blue-500 text-white p-2"
        >
          Add Transaction
        </button>
      )}
    </div>
  );
}
