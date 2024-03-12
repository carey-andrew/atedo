import Link from "next/link";
import Links from "./links/Links";

const Navbar = async () => {
  return (
    <div className="flex justify-end absolute h-[30px] w-full pt-4 pr-4">
      <div className="">
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
