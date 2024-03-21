import React from 'react';
import NavContent from "@/components/ui/NavContent";

const Sidbar = () =>  {

        return (
            <div className={"hidden md:flex md:flex-col md:items-center text-white md:fixed md:top-0 md:h-screen md:w-[250px] bg-secondaryColor  pt-5"}>

                <NavContent />
                {/*actu user name*/}
                <div className={"w-full h-auto  self-end mb-5"}>
                    user name
                </div>
            </div>
        );

}


export default Sidbar;