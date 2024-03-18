import Link from "next/link";
import Links from "./links/Links";

const Navbar = async () => {
  return (
    // <div className="flex justify-end absolute h-[30px] w-full pt-4 pr-4">
    <div className="flex h-[50px] align-center bg-secondary-dark dark:bg-secondary-light text-primary-dark dark:text-primary-light p-3">
      <Links />
    </div>
  );
};

export default Navbar;
