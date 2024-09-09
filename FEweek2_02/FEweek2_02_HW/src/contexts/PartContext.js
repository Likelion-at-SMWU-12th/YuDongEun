import { createContext, useContext, useState } from "react";
import member from "../sookmut";

const PartContext = createContext();

export const PartProvider = ({ children }) => {
  const [part, setPart] = useState("프론트엔드");

  const memberPart = () => {
    setPart((part) =>
      part ? member.filter((member) => member.part === part) : member
    );
    console.log("파트 선택: ", part);
  };

  return (
    <PartContext.Provider value={{ part, memberPart }}>
      {children}
    </PartContext.Provider>
  );
};

export default PartProvider;

export const useTheme = () => useContext(PartContext);
