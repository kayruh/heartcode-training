"use client"
import { NavigationMenu } from "../ui/navigation-menu";
import { NavigationItem, NavItem } from "@/components/nav-bar/navigation-item";
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs';

const navItems: NavItem[] = [
	{ navigationLink: "/", navigationDescription: "Project Heartcode" },
	{ navigationLink: "/quiz", navigationDescription: "Quiz" },
	{ navigationLink: "/about-me", navigationDescription: "About Me" },
]

export default function NavigationBar() {
	return (
    	<NavigationMenu className="sticky top-0 list-none flex justify-between min-w-full h-[60px] bg-muted px-5">
        	<div className="flex flex-row justify-start gap-4">
            	{navItems.map((navItem, index) => <NavigationItem key={index} navigationLink={navItem.navigationLink} navigationDescription={navItem.navigationDescription} />)}
        	</div>
        	<div className="flex flex-row justify-end">
                <div className="flex gap-4">
            	<ModeToggle/>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton/>
                </SignedIn>
            </div>
        	</div>
    	</NavigationMenu>
        
	)
}


import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


// day 2 
// import Link from "next/link";
// import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "../ui/navigation-menu";

// export function NavigationBar() {
//     return (
//         <NavigationMenu className="flex flex-row justify-between list-none min-w-full h-16 sticky top-0 p-5">
//             <div className="flex flex-row">
//             <NavigationMenuItem>
//                 <Link href="/" legacyBehavior passHref> 
//                 <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                         Home
//                     </NavigationMenuLink>
//                 </Link>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//                 <Link href="/quiz" legacyBehavior passHref>
//                     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                         Quiz
//                     </NavigationMenuLink>
//                 </Link>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//                 <Link href="/about-me" legacyBehavior passHref>
//                     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                         About me
//                     </NavigationMenuLink>
//                 </Link>
//             </NavigationMenuItem>
//             </div>
//         </NavigationMenu>
//     )
// }