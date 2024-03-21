"use client"
import Image from "next/image";
import React from "react";
import {ContratItems, LocativItems, RHItem} from "@/components/NavigItems";
import {
    Clipboard,
    DoorClosed,
    DoorOpen,
    FileBarChart, FolderOpen,
    Hourglass,
    LayoutDashboard,
    MessageCircle, Settings2,
    Users
} from "lucide-react";
import Link from "next/link";

const items = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard />,
        link: "/dashboard"
    },
    {
        name: <RHItem/>,
        icon: <Users />,
        link: "/dashboard"
    },
    {
        name: "Bien",
        icon: <DoorOpen />,
        link: "/dashboard"
    },
    {
        name: <LocativItems/>,
        icon: <DoorClosed />,
        link: "/dashboard"
    },

    {
        name: <ContratItems/>,
        icon: <Clipboard />,
        link: "/dashboard"
    },

    {
        name: "Dépense",
        icon: <Hourglass />,
        link: "/dashboard"
    },

    {
        name: "Message",
        icon: <MessageCircle />,
        link: "/dashboard"
    },

    {
        name: "Rapport",
        icon: <FileBarChart />,
        link: "/dashboard"
    },

    {
        name: "Fichier",
        icon: <FolderOpen />,
        link: "/dashboard"
    },

    {
        name: "Parametre",
        icon: <Settings2 />,
        link: "/dashboard"
    },
]
const NavContent = () => {
    return(
        <div className={"flex flex-col items-center h-screen text-white    pt-5"}>
            {/*logo*/}
            <Image src={"/icons/iconlg.svg"}
                   alt={"logo"}
                   width={100}
                   height={100}
                   priority
                   className={""} />
            {/*items*/}
            <div className={"mt-4 flex flex-col space-y-3"}>
                {
                    items.map((item, index) => {
                        return <Link href={item.link}
                                     key={index}
                                     className={"self-start flex space-x-5 hover:bg-buttonColor rounded-[15px] h-auto p-2 w-full"}
                        >
                            {item.icon}
                            <div>{item.name}</div>

                        </Link>
                    })
                }
            </div>

        </div>
    );
}

export default NavContent;