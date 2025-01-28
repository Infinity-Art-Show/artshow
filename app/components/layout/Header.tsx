import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const navItems = [
    { label: "AUCTIONS", href: "/auctions" },
    { label: "GALLERIES", href: "/galleries" },
    { label: "ARTISTS", href: "/artists" },
    { label: "STORIES", href: "/stories" },
    { label: "MY PAGE", href: "/my-page" },
    { label: "LOGIN", href: "/login" },
  ];

  return (
    <header className="w-full bg-primary backdrop-blur-sm border-b border-gray-200 py-3 fixed">
      <div className="mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center w-1/3 md:w-[12.5%] lg:w-1/5">
            <a href="https://advancedharmony.org/" rel="noopener noreferrer">
              <Image
                src="/aha-logo.png"
                alt="Infinity Art Show"
                width={62}
                height={62}
              />
            </a>
            <Link href="/" className="flex items-center">
              <Image
                src="/infinity-logo.png"
                alt="Infinity Art Show"
                width={150}
                height={150}
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-3 items-center">
            <a
              href="https://advancedharmony.org/donate.html"
              className="nav-button active"
            >
              DONATE
            </a>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-button">
                {item.label}
              </Link>
            ))}
          </nav>
          {/* Search area */}
          <div className="flex-grow flex justify-end relative">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="w-[130px] p-2 pl-10 rounded-full border  border-gray-300 
                transition-[width] duration-300 ease-in-out
                focus:w-[300px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-gray-900">
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
