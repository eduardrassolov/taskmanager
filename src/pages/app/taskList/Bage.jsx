/* eslint-disable react/prop-types */
function Bage({ children, color }) {
  return (
    <div className="mr-1">
      <span
        className={`inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-${color}-800`}
      >
        {children}
      </span>
    </div>
  );
}

export default Bage;
