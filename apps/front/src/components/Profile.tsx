"use client"

import {usePathname} from "next/navigation";
import {User} from 'lucide-react';
import {SessionUser} from "@/lib/session";
import {Popover} from "@radix-ui/react-popover";
import {Avatar} from "@radix-ui/react-avatar";
import {ArrowRightStartOnRectangleIcon} from "@heroicons/react/20/solid";
import {cn} from "@/lib/utils";
import {useScroll} from "@/lib/hooks/useScroll";
import {AvatarFallback, AvatarImage} from "./ui/avatar";
import {PopoverContent, PopoverTrigger} from "./ui/popover";

type Props = {
    user: SessionUser;
};
const Profile = ({user}: Props) => {
    const pathname = usePathname();
    const {isScrollDown} = useScroll();
    const isHome = pathname === "/";

    return (
        <Popover>
            <PopoverTrigger className="cursor-pointer">
                <Avatar className="flex items-center md:block">
                    <AvatarImage
                        className="rounded-full w-10 mx-3 border-2 border-white md:w-12 md:mx-0"
                        src={user.avatar}
                    />
                    <p className="block md:hidden">User</p>
                    <AvatarFallback
                        className="bg-transparent p-2 transition duration-300 transform hover:-translate-y-1 hover:shadow-md hover:bg-emerald-500">
                        <User className={cn("text-white w-8 h-8 transition duration-600 ease-in-out",
                            {
                                "text-black w-8 h-8": isScrollDown || !isHome,
                            })}/>
                    </AvatarFallback>
                </Avatar>
            </PopoverTrigger>
            <PopoverContent>
                <div className="flex justify-center items-center gap-3">
                    <User className="w-8 h-8"/>
                    <p>{`${user.firstName} ${user.lastName}`}</p>
                </div>
                <div
                    className="*:grid *:grid-cols-5 *:gap-3 *:items-center *:my-2 *:py-2 [&>*>span]:col-span-4 [&>*:hover]:bg-emerald-500 [&>*:hover]:text-white *:transition *:rounded-md [&>*>*:nth-child(1)]:justify-self-end ">
                    <a href="/api/auth/signout">
                        <ArrowRightStartOnRectangleIcon className="w-4"/>
                        <span>Sign Out</span>
                    </a>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default Profile;
