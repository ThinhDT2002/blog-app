import { createContext, useState, useEffect } from "react";
import useWindowResize from "../hooks/useWindowResize";
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const { width } = useWindowResize();
  return (
    <DataContext.Provider
      value={{
        width,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
