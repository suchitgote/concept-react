import React, { memo, useCallback, useState } from "react"



const Parent = ()=>{
    console.log('Parent render');

    const [list , setList] = useState ([
        {
            name : 'aaaaa',
            isLiked : false,
            id: 1
        },
        {
            name : 'bbbbb',
            isLiked : false,
            id: 2
        },
        {
            name : 'ccccc',
            isLiked : false,
            id: 3
        },
        {
            name : 'ddddd',
            isLiked : false,
            id: 4
        }
    ])
    const [selectedLisks ,setSelectedLisks ] = useState([])

    const handelLikes = useCallback((id)=>{
        setSelectedLisks((p)=>[...p,id])
        setList((p)=>p.map((item)=>item.id == id ?{...item, isLiked : true} : item ))
    },[])
    // const handelLikes = useCallback((id)=>{
    //     setSelectedLisks((p)=>[...p,id])
    //     setList(list.map((item)=>item.id == id ?{...item, isLiked : true} : item ))
    // },[])

    

    console.log('selectedLisks', selectedLisks);


    return (
        <div>
            <Child list={list} handelLikes={handelLikes}   />
        </div>
    )

}

const Child =React.memo( ({list , handelLikes})=>{
    console.log('child render');
    return (
        <div>
            {
                list.map((item)=>{
                    return (
                        <div key={item.id} >
                            {item.name} : like = {item.isLiked ? 'true' : 'false'}
                            <button onClick={()=>handelLikes(item.id)} >  like</button>
                        </div>
                    )
                })
            }
        </div>
    )
})




const App = ()=>{
    return (
        <div>
            <Parent/>
        </div>
    )
}

export default App