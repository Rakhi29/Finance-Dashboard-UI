import { useStore } from "../store/useStore";

export default function Insights() {
  const { transactions } = useStore();

  const categoryMap = {};
  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const highest = Object.keys(categoryMap).reduce((a, b) =>
    categoryMap[a] > categoryMap[b] ? a : b
  );

  return (
    <div className="bg-gray-100 p-4 rounded">
      <h2 className="font-bold">Insights</h2>
      <p>Highest spending category: {highest}</p>
    </div>
  );
}
