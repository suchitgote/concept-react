import React, { useState, Profiler } from 'react';

// const ListItem = React.memo(({ item }) => {
//   console.log(`Rendering: ${item}`);
//   return <li>{item}</li>;
// });

const ListItem =({ item }) => {
  console.log(`Rendering: ${item}`);
  return <li>{item}</li>;
};

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  );
};

const onRenderCallback = (
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) => {
  console.log('onRenderCallback =',{
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions,
  });
};

const App = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  return (
    <div>
      <Profiler id="ListProfiler" onRender={onRenderCallback}>
        <List items={items} />
      </Profiler>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default App;
