import { MyContext, MyContext2 } from "../MyContext";
import { useContext } from "react";

const Child = () => {
  const data = useContext(MyContext);
  const data2 = useContext(MyContext2);
  return (
    <div style={{ backgroundColor: "blue", padding: 10 }}>
      <p>Child name : {data.name}</p>
      <p>Child age : {data2.age}</p>
    </div>
  );
};

export default Child;
