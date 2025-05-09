import {PropsWithChildren} from "react";
import MobileNavbar from "@/components/MobileNavbar";
import DesktopNavbar from "@/components/DesktopNavbar";

type Props = PropsWithChildren
const NavContainer = (props: Props) => {
    return (
        <div className="relative">
            <MobileNavbar>{props.children}</MobileNavbar>
            <DesktopNavbar>{props.children}</DesktopNavbar>
        </div>
    )
}

export default NavContainer
