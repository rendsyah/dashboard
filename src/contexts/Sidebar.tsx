import React from 'react';

type SidebarContextProps = {
  collapse: boolean;
  handleSidebar: () => void;
};

const SidebarContext = React.createContext({} as SidebarContextProps);

export const SidebarContextProvider = ({ children }: React.PropsWithChildren<unknown>) => {
  const [collapse, setCollapse] = React.useState(false);

  const handleSidebar = () => {
    setCollapse((prev) => !prev);
  };

  return <SidebarContext.Provider value={{ collapse, handleSidebar }}>{children}</SidebarContext.Provider>;
};

export const useSidebar = () => {
  return React.useContext(SidebarContext);
};
