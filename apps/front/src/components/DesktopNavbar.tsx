"use client"
import {PropsWithChildren} from "react";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import {useScroll} from "@/lib/hooks/useScroll";

type Props = PropsWithChildren
const DesktopNavbar = (props: Props) => {
    const pathname = usePathname();
    const {isScrollDown} = useScroll();
    const isHome = pathname === "/";

    return (
        <nav
            className={cn(
                "hidden fixed transition-colors w-full z-50 text-white top-0 md:block",
                {
                    "bg-neutral-200 text-gray-700 shadow-md": isScrollDown || !isHome,
                }
            )}
        >
            <div className="flex items-center px-4 py-4 container md:py-2">
                {props.children}
            </div>
            <hr className="border-b border-gray-100 opacity-25"/>
        </nav>
    )
}

export default DesktopNavbar
