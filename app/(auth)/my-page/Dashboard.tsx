'use client';

import { Metadata } from "next";
import { useRouter } from "next/navigation";

export const metadata: Metadata = {
  title: "My Page Dashboard | Infinity Art Show",
  description: "Dashboard navigation for My Page",
};

export default function Dashboard() {
  const router = useRouter();

  const navItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "My Auction", href: "/my-auction" },
    { label: "Sold Items", href: "/sold-items" },
    { label: "Payment History", href: "/payment-history" },
    { label: "My Gallery", href: "/my-gallery" },
    { label: "Stories", href: "/stories" },
    { label: "Profile", href: "/profile" },
  ];

  return (
    <aside className="w-64 bg-gray-100 h-[calc(100vh-89px)] fixed top-[89px] left-0 shadow-md">
      <div className="p-6 border-gray-300 mt-3">
        <h2 className="text-4xl font-bold text-gray-800">Lovely Dog</h2>
      </div>
      <nav className="mt-3">
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => router.push(item.href)}
                className="flex items-center w-full text-left text-1xl font-bold px-4 py-2 text-gray-700 hover:bg-gray-200 transition duration-200"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
