import HistoryMap from "./HistoryMap";

const History = () => {
  return (
    <section
      className="flex flex-col gap-3 items-center pt-20 h-screen"
      id="history"
    >
      <h2 className="text-2xl font-bold">My History</h2>
      <HistoryMap />
    </section>
  );
};

export default History;
