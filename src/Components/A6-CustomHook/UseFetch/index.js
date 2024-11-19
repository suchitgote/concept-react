
import useFetch from "../CustomHook/UseFetch/useFetch"

const App = ()=>{
    const getapi =  "https://jsonplaceholder.typicode.com/todos/1"
    const postapi = "https://jsonplaceholder.typicode.com/posts"
    const body = {
        title: 'foo',
        body: 'bar',
        userId: 1,
      }
    const {  data , loading , error } = useFetch(getapi )

    if(loading ){
        return <h1>loading...</h1>
    }
    if(error ){
        return <h1>error...</h1>   
    }

    return(
        <div>
            App
            {data && <div>
                {JSON.stringify(data)}
            </div>}
        </div>
    )
}

export default App