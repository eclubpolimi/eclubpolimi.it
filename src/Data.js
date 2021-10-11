/**
 * @description This class holds global, static data, to avoid duplication between production code and tests
 * @note All members of this class must be declared static
 */
export default class SiteData {
  static NavbarItems = [
    {
      title: "About Us",
      target: "/About",
      type: "nav-link",
    },
    {
      title: "Events",
      target: "/Events",
      type: "nav-link",
    },
    {
      title: "Travel",
      target: "/Travel",
      type: "nav-link",
    },
    /*{
      title: "Guests",
      target: "/Guests",
      type: "nav-link",
    }*/
    {
      title: "Passion in action",
      target: "/PassionInAction",
      type: "nav-link",
    },
    {
      title: "Network",
      target: "/Network",
      type: "nav-link",
    },
    {
      title: "Join Us",
      target: "/Join",
      type: "button",
    },
  ];
}
