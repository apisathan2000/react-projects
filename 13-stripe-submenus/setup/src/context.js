import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

const AppProvider = function ({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [isSubMenuOpen, setIsSubmenuOpen] = useState(false);

  const [page, setPage] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});
  const openSidebar = function () {
    setIsSidebarOpen(true);
  };

  const closeSidebar = function () {
    setIsSidebarOpen(false);
  };

  const openSubmenu = function (text, coordinates) {
    const page = sublinks.find((link) => link.page === text.toLowerCase()) || {
      page: "",
      links: [],
    };
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = function () {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSubMenuOpen,
        openSidebar,
        closeSidebar,
        isSidebarOpen,
        openSubmenu,
        closeSubmenu,
        page,
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
