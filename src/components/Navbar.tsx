import { Lamp } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import favicon from "@/app/photos/faviconDark.svg";

export default function Navbar() {
  return (
    <nav className={`flex flex-row-reverse justify-between items-center`}>
      <Link href={`/`} className={` flex gap-5 items-center justify-center`}>
        <p className={`font-semibold text-5xl`}>الخطوط</p>
        <Image src={favicon} alt="alten" className="w-14"/>
      </Link>
      <div className="flex gap-2">
        <ModeToggle />
        <Button
          variant={"secondary"}
          size={"icon"}
          className="rounded-full *:dark:fill-white"
        >
          <svg
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
          >
            <g transform="matrix(.47407 0 0 .47407 .383 .422)">
              <clipPath id="prefix__a">
                <path d="M0 0h1080v1080H0z" />
              </clipPath>
              <g clipPath="url(#prefix__a)">
                <path
                  d="M1033.05 324.45c-.19-137.9-107.59-250.92-233.6-291.7-156.48-50.64-362.86-43.3-512.28 27.2-181.1 85.46-237.99 272.66-240.11 459.36-1.74 153.5 13.58 557.79 241.62 560.67 169.44 2.15 194.67-216.18 273.07-321.33 55.78-74.81 127.6-95.94 216.01-117.82 151.95-37.61 255.51-157.53 255.29-316.38z"
                  fillRule="nonzero"
                />
              </g>
            </g>
          </svg>
        </Button>
        <Button
          variant={"secondary"}
          size={"icon"}
          className="rounded-full *:dark:fill-white"
        >
          <svg
            fill="#000000"
            height="200px"
            width="200px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 310 310"
            xmlSpace="preserve"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g id="XMLID_834_">
                <path
                  id="XMLID_835_"
                  d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064 c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996 V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545 C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703 c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
                ></path>
              </g>
            </g>
          </svg>
        </Button>
        <Button variant={"secondary"} size={"icon"} className="rounded-full ">
          <Lamp />
        </Button>
      </div>
    </nav>
  );
}
