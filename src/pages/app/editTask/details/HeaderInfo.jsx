import PropTypes from "prop-types";

HeaderInfo.propTypes = {
  IconComp: PropTypes.element,
  children: PropTypes.string,
};

function HeaderInfo({ IconComp, children }) {
  return (
    <div className="mb-2 flex w-full items-center">
      {IconComp}
      <h2 className="ml-1">{children}</h2>
    </div>
  );
}

export default HeaderInfo;
