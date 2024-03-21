import Image from "next/image";
import {Label} from "@/components/ui/label";
import React from "react";
import {Input} from "@/components/ui/input";
import {B612} from "next/dist/compiled/@next/font/dist/google";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
      <main className={"flex items-center justify-center h-screen w-full"}>
        <div className={"rounded-[15px] border-2 border-buttonColor  mx-3 w-[600px] h-auto py-3 flex flex-col justify-center px-10"}>
            {/*Logo*/}
            {/*logo*/}
            <div className={"flex items-center justify-center"}>
                <Image src={"/icons/iconlg.svg"}
                       alt={"logo"}
                       width={150}
                       height={150}
                       priority
                       className={""} />
            </div>


            <h1 className={"text-center text-[40px] font-bold"}>Se connecter</h1>

            {/*error text*/}
            <h1 className={"text-center text-red-600 text-[18px] font-medium "}>error text</h1>

            {/*formulaire*/}
            <form className={"flex flex-col items-center justify-center space-y-5 mt-5"}>
                <div className={"w-full md:w-[350px] flex flex-col"}>
                    <Label className={"text-[18px] font-regular "}>Numéro de téléphone</Label>
                    <Input
                        type={"tel"}
                        name={"phone"}
                        className={""}
                    />
                </div>

                <div className={"w-full md:w-[350px] flex flex-col"}>
                    <Label className={"text-[18px] font-regular "}>Mot de passe</Label>
                    <Input
                        type={"password"}
                        name={"passwords"}
                        className={""}
                    />
                </div>

                <Button className={"w-auto self-center"}
                        type={"submit"}
                        variant={"default"}
                        size={"sm"}

                >
                    SE CONNECTER
                </Button>
            </form>
        </div>
      </main>
  );
}
