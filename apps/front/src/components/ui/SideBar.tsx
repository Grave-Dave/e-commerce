"use client";

import {cn} from "@/lib/utils";
import {PropsWithChildren, ReactNode, Ref, RefObject, useRef, useState} from "react";
import {useOnClickOutside} from "usehooks-ts";

type Props = PropsWithChildren<{
    triggerIcon: ReactNode;
    triggerClassName?: string;
}>;
const SideBar = (props: Props) => {
    const [show, setShow] = useState(false);
    const ref: RefObject<HTMLElement | null> = useRef(null);
    useOnClickOutside(ref as RefObject<HTMLElement>, () => setShow(false));

    return (
        <>
            <button
                className={props.triggerClassName}
                onClick={() => setShow((prev) => !prev)}
            >
                {props.triggerIcon}
            </button>
            <div className={cn("fixed inset-0 bg-black/40 z-40",
                {
                    "hidden": !show,
                }
            )}/>
            <div
                ref={ref as Ref<HTMLDivElement>}
                className={cn(
                    "w-60 fixed top-0 z-50 duration-300 shadow-2xl transition-all bg-neutral-200 rounded-r-md min-h-screen",
                    {
                        "-left-full": !show,
                        "left-0": show,
                    }
                )}
            >
                {props.children}
            </div>
        </>
    );
};

export default SideBar;