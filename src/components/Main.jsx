import * as React from 'react';

/** components */
import MainContent from './MainContent.jsx';

/** styles */
import '../css/main.css';


// Mot react component co vong doi nhu sau:
// 1. Mounting: render lan dau

// 2. Updating: props hoac state thay doi => render lai

// 3. Unmouting: xoa kho cay DOM

// props: du lieu dc truyen tu component cha xuong (dao cu)
// state: du lieu dc khai bao trong chinh component (trang thai)

export default function Main(props) {
    // const arr = React.useState(0);
    // const count = arr[0];
    // const setCount = arr[1];
    const [count, setCount] = React.useState(0);

    
    console.log("Main state count: ", count);

    const add = () => {
        setCount(count + 1);
    }
    const sub = () => {
        setCount(count - 1);
    }

    return <main className='main'>
        <div>
            <p>Gia tri hien tai: {count}</p>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={add}>tang</button>
            <button onClick={sub}>giam</button>
        </div>
        <MainContent hidden={count % 2 === 0} />
    </main>;
}