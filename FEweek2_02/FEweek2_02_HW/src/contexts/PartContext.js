import { createContext, useContext, useState } from "react";

const PartContext = createContext();

export const PartProvider = ({ children }) => {
  const [part, setPart] = useState("프론트엔드");

  const memberPart = (selectedPart) => {
    setPart(selectedPart);
    console.log("파트 선택: ", selectedPart);
  };

  return (
    <PartContext.Provider value={{ part, memberPart }}>
      {children}
    </PartContext.Provider>
  );
};

export default PartProvider;

export const useTheme = () => useContext(PartContext);
