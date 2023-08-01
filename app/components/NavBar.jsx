"use client";
export default function NavBar() {
  return (
    <>
      <div className="flex flex-col">
        <nav
          className="flex z-40 w-full h-auto items-center justify-center data-[menu-open=true]:border-none sticky top-0 inset-x-0 backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 bg-background/70"
        >
          <header className="z-40 flex px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between h-[var(--navbar-height)] max-w-[1024px]">
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
                <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
                  <path
                    clip-rule="evenodd"
                    d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                <p className="font-bold text-inherit">Attendo</p>
              </div>
            </ul>
            <ul
              className="h-full flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0 hidden sm:flex gap-4"
              data-justify="center"
            >
              <li className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold">
                <a
                  className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-foreground no-underline hover:opacity-80 active:opacity-disabled transition-opacity"
                  tabindex="0"
                  role="link"
                  href="#"
                >
                  Features
                </a>
              </li>
              <li
                className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold"
                data-active="true"
              >
                <a
                  className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity"
                  tabindex="0"
                  role="link"
                  aria-current="page"
                  href="#"
                >
                  Customers
                </a>
              </li>
              <li className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold">
                <a
                  className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-foreground no-underline hover:opacity-80 active:opacity-disabled transition-opacity"
                  tabindex="0"
                  role="link"
                  href="#"
                >
                  Integrations
                </a>
              </li>
            </ul>
            <ul
              className="flex gap-4 h-full flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0"
              data-justify="end"
            >
              <li className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold hidden lg:flex">
                <a
                  className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity"
                  tabindex="0"
                  role="link"
                  href="#"
                >
                  Login
                </a>
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
