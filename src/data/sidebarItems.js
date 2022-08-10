import IconWraper from "../components/Icon";

const sidebarItems = [
  {
    key: "1",
    icon: <IconWraper name='home' />,
    path: "/",
    label: "Home",
  },
  {
    key: "2",
    icon: <IconWraper name='search' />,
    children: [
      {
        key: "option1",
        label: "Option1",
      },
      {
        key: "option2",
        label: "Option2",
      },
    ],
    path: "/",
    label: "Off Market Leads",
  },
  {
    key: "3",
    icon: <IconWraper name='setting' />,
    path: "/",
    label: "Support",
  },
  {
    key: "4",
    icon: <IconWraper name='send' />,
    path: "/",
    label: "Contact Us",
  },
  {
    key: "5",
    icon: <IconWraper name='boxes' />,
    path: "/",
    label: "Plans & Pricing",
  },
  {
    key: "6",
    icon: <IconWraper name='question' />,
    path: "/",
    label: "FAQ",
  },
];

export default sidebarItems;
