/* eslint-disable react/prop-types */
import * as Switch from "@radix-ui/react-switch";

const Toggle = ({ status, onChange }) => (
  <form>
    <div
      className="flex items-center"
      style={{ display: "flex", alignItems: "center" }}
    >
      <Switch.Root
        className=" relative h-[30px] w-[50px] cursor-default rounded-full border-2 bg-background outline-none active:ring-1  data-[state=checked]:bg-[#2ecc71]"
        id="switcher"
        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
        checked={status}
        onCheckedChange={onChange}
      >
        <Switch.Thumb className="block h-[28px] w-[28px] translate-y-[-1px] cursor-pointer rounded-full border-2 border-[#d3d3d3] bg-[#F5F5F5] transition-transform duration-200 will-change-transform data-[state=checked]:translate-x-[20px]" />
      </Switch.Root>
    </div>
  </form>
);

export default Toggle;
