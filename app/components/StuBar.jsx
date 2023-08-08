"use client";
import { Button, Link } from "@nextui-org/react";
export default function StuBar() {
  return (
    <>
      <div className="flex flex-col sticky">
        <nav
          className="flex z-40 w-full h-auto items-center justify-center data-[menu-open=true]:border-none sticky top-0 inset-x-0 backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 bg-background/70"
        >
          <header className="navbar bg-sky-500 z-40 flex px-10 gap-4 w-full flex-row relative flex-nowrap items-center justify-between h-[var(--navbar-height)] max-w-1024px">
            <ul
              className="flex gap-4 h-full flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0"
              data-justify="start"
            >
              <button
                className="group flex items-center justify-center w-6 h-full rounded-small tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 sm:hidden"
                type="button"
                aria-label="Open menu"
                aria-pressed="false"
              >
                <span className="sr-only">open navigation menu</span>
                <span className="w-full h-full pointer-events-none flex flex-col items-center justify-center text-inherit group-data-[pressed=true]:opacity-70 transition-opacity before:content-[''] before:block before:h-px before:w-6 before:bg-current before:transition-transform before:duration-150 before:-translate-y-1 before:rotate-0 group-data-[open=true]:before:translate-y-px group-data-[open=true]:before:rotate-45 after:content-[''] after:block after:h-px after:w-6 after:bg-current after:transition-transform after:duration-150 after:translate-y-1 after:rotate-0 group-data-[open=true]:after:translate-y-0 group-data-[open=true]:after:-rotate-45"></span>
              </button>
              <div className="flex basis-0 flex-row flex-grow flex-nowrap justify-start bg-transparent items-center no-underline text-medium whitespace-nowrap box-border">
              
              
              <a href="../student/leaderboard">
              <img src="../../logo.png" className="w-50 h-20 " ></img>
              </a>
              <span className="ml-0 text-white font-semibold text-lg sm:text-xl ">A T T E N D O</span>
              </div>
            </ul>
            <ul
              className="h-full flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0 hidden sm:flex gap-4"
              data-justify="center"
            >
              <li className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold">
                <a
                  className=" text-slate-50 relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-foreground no-underline hover:opacity-80 active:opacity-disabled transition-opacity"
                  tabIndex="0"
                  role="link"
                  href="../student/event-display"
                >
                  Events
                </a>
              </li>
              <li className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold">
                <a
                  className=" text-slate-50 relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-foreground no-underline hover:opacity-80 active:opacity-disabled transition-opacity"
                  tabIndex="0"
                  role="link"
                  href="../student/leaderboard"
                >
                  Leaderboard
                </a>
              </li>
            </ul>
            <ul
              className="flex gap-4 h-full flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0"
              data-justify="end" >
              <li className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold hidden lg:flex">
              <Button auto flat as={Link} href="../../login" >
                
              Not a student?
            </Button>
              </li>
              <li className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold">
              </li>
            </ul>
          </header>
        </nav>
      </div>
    </>
  );
}
