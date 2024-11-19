
import { Suspense,lazy } from "react";
// import Dashbord from "./Dashbord";

const Dashbord = lazy( ()=> {return import('./Dashbord')}  )
const Testing = () => {
  return (
    <div>
      <h1>Testing Component</h1>
      <Suspense fallback={<h1>loading...</h1>} >
        <Dashbord />
      </Suspense>
    </div>
  );
};

export default Testing;
