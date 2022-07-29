import AbcIcon from "@mui/icons-material/Abc";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExplicitIcon from "@mui/icons-material/Explicit";
import ExtensionIcon from "@mui/icons-material/Extension";
import FeedIcon from "@mui/icons-material/Feed";
import InboxIcon from "@mui/icons-material/Inbox";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

export const navMenuItems = [
  {
    name: "Dashboard",
    link: "/",
    icon: <DashboardIcon />,
  },
  {
    name: "Examples",
    icon: <ExplicitIcon />,
    items: [
      {
        name: "Components",
        icon: <ExtensionIcon />,
        items: [
          {
            name: "Form",
            link: "/examples/form",
            icon: <FeedIcon />,
          },
          {
            name: "Button",
            link: "/examples/button",
            icon: <InboxIcon />,
          },
          {
            name: "Heading",
            link: "/examples/heading",
            icon: <AbcIcon />,
          },
        ],
      },
      {
        name: "Palette",
        link: "/examples/palette",
        icon: <ColorLensIcon />,
      },
      {
        name: "Redux",
        link: "/examples/state",
        icon: <OtherHousesIcon />,
      },
      {
        name: "Query",
        link: "/examples/query",
        icon: <QueryStatsIcon />,
      },
    ],
  },
  // {
  //   name: "Logout",
  //   link: "/auth/login",
  //   icon: <ExitToAppIcon />,
  // },
];
