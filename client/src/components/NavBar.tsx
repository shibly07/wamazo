import { AutoCompleteInput, MobileMenu } from "@/components";

import { NavBarProps } from "@/types/Types";
import { Button } from "@mui/material";
import { BsCart3 } from "react-icons/bs";
import { IoSearch, IoPersonOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const NavBar = ({ products }: NavBarProps) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);
  const [searchedItems, setSearchedItems] = useState<string>("");

  const handleSearchItems = (items: string): void => {
    if (items.length) {
      navigate(`/search/${items}`);
    }
    setOpen(false);
  };
  return (
    <nav className="bg-[rgb(35,47,62)] pt-3 pb-4 md:flex md:items-center md:px-6">
      <div className="text-white flex justify-between pr-3">
        <div className="flex items-center">
          {/* Mobile hamburger menu */}
          <div className="md:hidden">
            <MobileMenu />
          </div>

          {/* Logo */}
          <Link to="/">
            <h1 className="font-bold text-3xl">Wamazo</h1>
          </Link>
        </div>

        {/* Mobile buttons */}
        <div className="flex justify-center items-center gap-x-3 md:hidden">
          <button>Sign In</button>
          <button>
            <IoPersonOutline className="h-6 w-6" />
          </button>
          <button>
            <BsCart3 className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Search bar */}
      <div className="mx-3 rounded-lg flex bg-white mt-2 md:flex-1">
        <AutoCompleteInput
          products={products?.length ? products : []}
          open={open}
          setOpen={setOpen}
          handleSearchItems={handleSearchItems}
          setSearchedItems={setSearchedItems}
        />
        <div className="bg-yellow-400 rounded-lg flex justify-center items-center">
          <Button onClick={() => handleSearchItems(searchedItems)}>
            <IoSearch className="h-7 w-7" />
          </Button>
        </div>
      </div>

      {/* Desktop buttons */}
      <div className="md:flex justify-center items-center gap-x-3 hidden text-white">
        <button>Sign In</button>
        <button>
          <IoPersonOutline className="h-6 w-6" />
        </button>
        <button>
          <BsCart3 className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
