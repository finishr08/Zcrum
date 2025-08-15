import Link from "next/link";
import Image from "next/image";
import Projects from "./Projects";
import Navigation from "./Navigation";
import DottedSeperator from "./dotted-seperator";
import WorkspacesSwitcher from "./WorkspacesSwitcher";

const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href="/">
        <Image src={"/logo.png"} alt="logo" width={164} height={48} />
      </Link>
      <DottedSeperator className="my-4" />
      <WorkspacesSwitcher />
      <DottedSeperator className="my-4" />
      <Navigation />
      <DottedSeperator className="my-4" />
      <Projects />
    </aside>
  );
};

export default Sidebar;
