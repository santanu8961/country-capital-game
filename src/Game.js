import React from 'react';
import { shuffler } from './util';
export const Game = ({ data }) => {
  const [list, setList] = React.useState([]);
  const [selectedData, setSelectedData] = React.useState([]);

  React.useEffect(() => {
    setList(shuffler(data));
  }, []);

  React.useEffect(() => {
    if (selectedData.length === 2) {
      if (
        data[selectedData[0]] === selectedData[1] ||
        data[selectedData[1]] === selectedData[0]
      ) {
        console.log('we have a match');
        setTimeout(() => {
          let x = list.filter((a) => !selectedData.includes(a));
          setList([...x]);
          setSelectedData([]);
        }, 2000);
      } else {
        setTimeout(() => {
          setSelectedData([]);
        }, 1000);
      }
    }
  }, [selectedData, list]);

  const handleClick = (e) => {
    const { target } = e;
    if (selectedData.length < 2) {
      setSelectedData([...selectedData, target.value]);
    }
  };
  console.log(list);
  return (
    <div
      style={{
        display: 'flex',
        margin: '10vh 10vw',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {list.map((a) => (
        <div key={a}>
          <button
            onClick={handleClick}
            value={a}
            style={{
              margin: '10px',
              padding: '15px',
              borderRadius: '10px',
              border: selectedData.includes(a) && '2px solid blue',
            }}
          >
            {a}
          </button>
        </div>
      ))}
    </div>
  );
};
