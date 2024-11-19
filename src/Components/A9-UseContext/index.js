import Child from "./Child";
import { MyContext, MyContext2 } from "./MyContext";
const data = {
  name: "suchit",
};
const data2 = {
  age: 23,
};
const UseContext = () => {
  return (
    <div style={{ backgroundColor: "skyblue", padding: 10 }}>
      UseContext
      <MyContext.Provider value={data}>
        <MyContext2.Provider value={data2}>
          <Child />
        </MyContext2.Provider>
      </MyContext.Provider>
    </div>
  );
};

export default UseContext;
