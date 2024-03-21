import {Separator} from "@/components/ui/separator";
import {LogOut, Menu, User, UserCheck} from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import NavContent from "@/components/ui/NavContent";
import React from "react";
import {Button} from "@/components/ui/button";

const Navbar = () => {
    return(
        <section className={"w-full h-[80px] flex flex-col  absolute top-0 text-white"}>
            <div
                className={"flex px-[4%] justify-between content-between"}>

                <div className={""}>
                    <Popover>
                        <PopoverTrigger><Menu /></PopoverTrigger>
                        <PopoverContent className={"w-[250px] bg-secondaryColor text-white border-none"}>
                            <NavContent />
                        </PopoverContent>
                    </Popover>

                </div>

                <div className={""}>
                    <Popover>
                        <PopoverTrigger >
                            <div className={"border-3 border border-white rounded-full"}>
                                <User />
                            </div>

                        </PopoverTrigger>
                        <PopoverContent className={"flex flex-col space-y-3"}>
                            <Button variant={"outline"}
                                    className={"flex"}
                            >
                                <UserCheck />
                                <h1>Profil</h1>
                            </Button>

                            <Button variant={"destructive"}
                                    className={"flex"}
                            >
                                <LogOut />
                                <h1>Se Déconnecter</h1>
                            </Button>
                        </PopoverContent>
                    </Popover>
                </div>

            </div>
            <Separator className={"w-full bg-buttonColor self-end "}/>
        </section>

    )
}

export default Navbar;