// import { MdRemove } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import PrtopTypes from "prop-types";

OptionItem.propTypes = {
  children: PrtopTypes.node,
  isRequied: PrtopTypes.bool,
  onRemoveOption: PrtopTypes.func,
  name: PrtopTypes.string,
};

function OptionItem({ children, isRequied = false, onRemoveOption, name }) {
  return (
    <>
      <section className="mb-5 flex justify-between border-b pb-5">
        <div className="flex w-full items-center">{children}</div>
        <div className={`flex items-center ${isRequied ? "hidden" : ""}`}>
          <AiOutlineClose
            size={"1.2rem"}
            className="cursor-pointer self-start hover:text-gray-500"
            onClick={() => onRemoveOption(name)}
          />
        </div>
      </section>
    </>
  );
}

export default OptionItem;
