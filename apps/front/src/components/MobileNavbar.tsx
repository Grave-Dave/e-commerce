import { PropsWithChildren } from "react";
import SideBar from "./ui/SideBar";
import { Bars3Icon } from "@heroicons/react/16/solid";

type Props = PropsWithChildren;
const MobileNavbar = (props: Props) => {
    return (
        <div className="md:hidden">
            <SideBar
                triggerIcon={<Bars3Icon className="w-8 cursor-pointer text-neutral-50" />}
                triggerClassName="fixed top-4 left-4"
            >
                {props.children}
            </SideBar>
        </div>
    );
};

export default MobileNavbar;