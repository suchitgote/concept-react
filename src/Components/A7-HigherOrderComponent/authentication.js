
const Auth = (MyComponent)=>{

    return (props)=>{
      const isAuthorized = true
      if(isAuthorized){
        console.log('Authorized');
        return <MyComponent {...props} />
      }else{
        alert('user not Authorized')
      }
    }
  
  }
  
  const Valid = (MyComponent)=>{
    return (props)=>{
      const isValid = true
      if(isValid){
        console.log('Valid');
        return <MyComponent {...props} />
      }else{
        alert('user not Authorized')
      }
    }
  }
  
  const Dashbord = (props)=>{
    return(
      <div>
        <h3>Dashbord : name : {props.name}</h3> 
      </div>
    )
  }
  
  const DashbordWithAuth  = Auth(Dashbord)
  const ValidDashbordWithAuth  = Valid(DashbordWithAuth)
  
  export default function App(){
  
    return(
      <div>
        App
        {/* <DashbordWithAuth /> */}
        <ValidDashbordWithAuth name = 'suchit' />
      </div>
    )
  }
  