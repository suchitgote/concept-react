import React, { useState , useCallback, useEffect } from 'react';



const ItemList = ({items}) => {
  const [Items , setItems] = useState([])
  useEffect(()=>{
    setItems(items)
  },[])
  const [likeItem , setLikeItem] = useState([])
  console.log('likeItem = ',likeItem);

  const handleLikeItem = useCallback((id)=>{
    console.log('handleLikeItem call');
    setLikeItem((p)=>[...p,id])
    setItems((p)=>[...p,{name : new Date().getTime(),id : new Date().getTime()}])
  },[])


  return (
  <div>
    {
      Items.map((item)=>{
        return(
          <Item item={item} key={item.id} onLike={handleLikeItem} />
        )
      })
    }
  </div>
  )
};


const Item = React.memo(({item , onLike}) => {
  console.log('item =',item.name);

  return (
  <div  >
    <div>
      Item : {item.name}
    </div>
    <button onClick={()=>{onLike(item.id)}}  >add</button>
  </div>);
});



const App = () => {
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  return <ItemList items={items} />;
};

export default App;
