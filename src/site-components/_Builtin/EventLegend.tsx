/*Event Legend component for the colors of the events*/
/*List of events*/
const EventTypes = [
  { eventType: "Polimi Events", color: "#5957cbff" },
  { eventType: "External Events", color: "#FC3F1A" },
  { eventType: "Meetings", color: "#032c84ff" }
];
//"flex flex-wrap items-center gap-x-6 gap-y-2 mb-4"
export default function EventLegend() {
  return (
    <div className="flex items-center justify-center gap-x-6 border border-slate-300 rounded-md px-6 py-3 text-lg">
      {EventTypes.map((item) => (
        <div key={item.eventType} className="flex items-center gap-2">
          <span
            className="inline-block w-3.5 h-3.5 rounded-full"
            style={{ backgroundColor: item.color }}
            aria-hidden="true"
          />
          <span className="text-base font-medium text-slate-700">
            {item.eventType}
          </span>
        </div>
      ))}
    </div>
  );
}
