"use client";

import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import DialogComp from "./DialogCompoent";

const AppBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter();

  // Mock navigation function since we don't have next/navigation
  const handleNavigation = (page: string) => {
    console.log(`Navigating to: ${page}`);
    router.push(`${page}`);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg">
        {/* Logo Section */}
        <div
          className="text-2xl font-bold cursor-pointer group flex"
          onClick={() => handleNavigation("/")}
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            LOGO
          </span>
          <div className=" flex px-2 mx-4 hover:bg-red-800">
            <DialogComp />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Search Bar */}
          <div className="relative w-96">
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Players, Matches, Events..."
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
              <Search className="absolute right-3 h-5 w-5 text-gray-400" />
            </div>
            {searchValue && (
              <div className="absolute w-full mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-100">
                <div className="p-2">
                  <div className="text-sm text-gray-400">Suggestions</div>
                  {["Popular Matches", "Upcoming Events", "Top Rankings"].map(
                    (suggestion) => (
                      <div
                        key={suggestion}
                        className="px-3 py-2 hover:bg-gray-700 rounded-md cursor-pointer text-gray-200 z-10"
                        onClick={() => {
                          setSearchValue(suggestion);
                          // handleNavigation(`/search?q=${suggestion}`);
                        }}
                      >
                        {suggestion}
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Navigation Items */}
          {["Matches", "Events", "Ranking"].map((item) => (
            <div
              key={item}
              className="relative group cursor-pointer"
              onClick={() => handleNavigation(`/${item.toLowerCase()}`)}
            >
              <span className="text-gray-300 hover:text-white transition-colors duration-300">
                {item}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors ease-in-out duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 ease-in-out duration-300" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-gray-900 border-t border-gray-800 ease-in-out duration-300 z-10">
          <div className="p-4 space-y-4">
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {["Matches", "Events", "Ranking"].map((item) => (
              <div
                key={item}
                className="px-4 py-2 hover:bg-gray-800 rounded-lg transition-colors duration-300 text-gray-300"
                onClick={() => {
                  handleNavigation(`/${item.toLowerCase()}`);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AppBar;
