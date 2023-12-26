import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { category } from "@/utils/category";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

type Anchor = "left";

export default function HamburgerMenu() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="bg-nav-secondary text-white pl-4 pr-6 pb-4">
        <div className="pt-4 flex justify-end">
          <button className="flex justify-center items-center gap-x-2">
            <span>Sign in</span> <IoPersonOutline className="h-5 w-5" />
          </button>
        </div>

        <button className="pt-8 text-left">
          <p className="font-bold text-lg">Browse</p>
          <p className="text-2xl">Wamazo</p>
        </button>
      </div>

      <List>
        <h1 className="ml-4 font-bold text-lg mt-7 mb-3">All Categories</h1>
        {category.map((text) => (
          <Link
            key={`categoryMenu-${text}`}
            to={`category/${text.split(" ").join("").toLowerCase()}`}
          >
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} className="p-0 gap-x-1">
            <GiHamburgerMenu className="text-white h-5 w-5 p-0" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
