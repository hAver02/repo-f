'use client'
import ProfileInformation from "@/modules/profile/components/profile.information";
import {PhoneIcon, CalendarIcon, MapPinIcon, InboxIcon }  from '@heroicons/react/24/solid'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from "next/image";
export default function Aside(){
    return(
                    <aside className="flex flex-col w-1/4 px-10 py-6 bg-neutral-900 my-14 rounded-2xl border border-neutral-800 justify-between overflow-y-auto scrollbar-hide">
                        <div className="flex flex-col gap-2 items-center">
                            <div className="bg-gradient-to-br from-neutral-800 to-[#212121] p-4 rounded-[2rem]  ">
                                <Image src="/avatar.jpg" alt="Logo" width={500} height={500} className='rounded-full w-full max-h-[120px]'/>
                            </div>

                            <h1 className="text-white font-semibold text-2xl text-center">Luciano Paz</h1>
                            <span className="bg-neutral-700 p-2 text-white rounded-lg">
                                <h2 className="text-white text-sm">FullStack Web Developer</h2>
                            </span>
                        </div>
                        <div className='w-full border-t border-neutral-600'></div>

                        <div className="flex flex-cool items-center gap-5 h-1/2">
                            <div className="flex gap-1 lg:gap-2 w-full flex-col ">
                                <ProfileInformation image={<InboxIcon className="w-6 h-6 text-yellow-200" />} nombre="Correo" info="pazluciano.dev@ gmail.com" />
                                <ProfileInformation image={<PhoneIcon className="w-6 h-6 text-yellow-200" />} nombre="Número" info="+54 911 68160779" />
                                <ProfileInformation image={<CalendarIcon className="w-6 h-6 text-yellow-200" />} nombre="Birthday" info="March 27, 2002" />
                                <ProfileInformation image={<MapPinIcon className="w-6 h-6 text-yellow-200" />} nombre="Location" info="San Isidro, Buenos Aires, Arg." />
                            </div>
                        </div>
                        <div className='flex justify-center gap-5 mt-3'>
                            <GitHubIcon />
                            <LinkedInIcon  />
                            <XIcon />
                        </div>
                    </aside>
    )
}