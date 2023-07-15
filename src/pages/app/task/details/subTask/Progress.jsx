import PropTypes from "prop-types";

Progress.propTypes = {
  completed: PropTypes.number,
  total: PropTypes.number,
};

function Progress({ completed, total }) {
  return (
    <>
      <p className="mb-2 text-base">
        Completed {completed} subtasks of {total}:
      </p>
    </>
  );
}

export default Progress;
