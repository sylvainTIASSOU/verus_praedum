"use client"
import {ChevronDown, LogOut, Menu, User, UserCheck} from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {Button} from "@/components/ui/button";
import React from "react";
import {DropdownMenuIcon} from "@radix-ui/react-icons";
import Link from "next/link";

 const RHItem = () =>{
    return (
        <Popover>
            <PopoverTrigger >
                <div className={"flex justify-between content-between"}>
                    <h1>RH</h1>
                    <ChevronDown />
                </div>

            </PopoverTrigger>
            <PopoverContent className={"w-[200px] text-white  bg-primaryColor flex flex-col space-y-3"}>
                <div>
                    <h1>Employer</h1>
                    <ul className={"ml-5"}>
                        <li><Link href={"/"} className={"hover:text-buttonColor"}>Liste</Link></li>
                    </ul>
                </div>

                <div>
                    <h1>Propiétaire</h1>
                    <ul className={"ml-5"}>
                        <li><Link href={"/"} className={"hover:text-buttonColor"}>Liste</Link></li>
                    </ul>
                </div>

                <div>
                    <h1>Locataire</h1>
                    <ul className={"ml-5"}>
                        <li><Link href={"/"} className={"hover:text-buttonColor"}>Liste</Link></li>
                    </ul>
                </div>
            </PopoverContent>
        </Popover>

    )
 }

const LocativItems = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <div className={"flex justify-between content-between"}>
                    <h1>Locative</h1>
                    <ChevronDown />
                </div>

            </PopoverTrigger>
            <PopoverContent className={" w-[200px] text-white  bg-primaryColor flex flex-col space-y-3"}>
                <Link href={"/"} className={"hover:text-buttonColor"}>Liste</Link>
                <Link href={"/"} className={"hover:text-buttonColor"}>Libre</Link>
                <Link href={"/"} className={"hover:text-buttonColor"}>Reservé</Link>
                <Link href={"/"} className={"hover:text-buttonColor"}>Occupé</Link>
            </PopoverContent>
        </Popover>

    )
}

const ContratItems = () =>{
    return (
        <Popover>
            <PopoverTrigger >
                <div className={"flex justify-between content-between"}>
                    <h1>Contrat</h1>
                    <ChevronDown />
                </div>

            </PopoverTrigger>
            <PopoverContent className={"w-[200px] text-white  bg-primaryColor flex flex-col space-y-3"}>
                <div>
                    <h1>Vente</h1>
                    <ul className={"ml-5"}>
                        <li><Link href={"/"} className={"hover:text-buttonColor"}>En cours</Link></li>
                        <li><Link href={"/"} className={"hover:text-buttonColor"}>En attente</Link></li>
                    </ul>
                </div>

                <div>
                    <h1>Location</h1>
                    <ul className={"ml-5"}>
                        <li><Link href={"/"} className={"hover:text-buttonColor"}>En cours</Link></li>
                        <li><Link href={"/"} className={"hover:text-buttonColor"}>En attente</Link></li>
                    </ul>
                </div>

            </PopoverContent>
        </Popover>

    )
}

export {
    RHItem,
    LocativItems,
    ContratItems,
};