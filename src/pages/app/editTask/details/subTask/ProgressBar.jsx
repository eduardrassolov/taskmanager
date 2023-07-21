import PropTypes from "prop-types";
import * as Progress from "@radix-ui/react-progress";

ProgressBar.propTypes = {
  completed: PropTypes.number,
  total: PropTypes.number,
};

function ProgressBar({ completed, total }) {
  const progress = Math.round((completed / total) * 100);
  let style =
    "ease-[cubic-bezier(0.65, 0, 0.35, 1)] h-full w-full transition-transform duration-[660ms] ";
  const final =
    style + (progress === 100 ? "bg-green-500" : "bg-blueribbon-600");

  return (
    <div className="mb-4 flex items-center">
      {/* <p className="mb-2 text-base">
        Completed {completed} subtasks of {total}:
      </p> */}
      <span>{progress}%: </span>
      <Progress.Root
        className="relative ml-1 h-[10px] w-full overflow-hidden rounded-full bg-gray-200"
        style={{
          transform: "translateZ(0)",
        }}
        value={progress}
      >
        <Progress.Indicator
          className={final}
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </Progress.Root>
    </div>
  );
}

export default ProgressBar;
