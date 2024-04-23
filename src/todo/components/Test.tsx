import * as React from 'react';

// component re-render khi props hoac state thay doi!
export default function Test(props = {}) {
    const [count, setCount] = React.useState(1);

    // chay 1 lan duy nhat, sau khi component render lan dau tien!
    React.useEffect(() => {
        console.log('useEffect 1: Xin chao!');
        setCount(3);
    }, []);

    // chay 1 lan, sau khi component render lan dau tien!
    // chay them 1 lan, sau khi bien count thay doi gia tri!
    React.useEffect(() => {
        console.log('useEffect 2: ', count);
    }, [count]);

    // chay 1 lan, sau khi component render lan dau tien!
    // chay them 1 lan, sau khi component re-render!
    // => luon chay sau khi render hoac re-render!
    React.useEffect(() => {
        console.log('useEffect 3: ', count);
    });

    console.log('return: chay');

    return <div>Count: {count}</div>;
}
