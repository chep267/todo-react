import * as React from 'react';

// component re-render khi props hoac state thay doi!
export default function Test(props = {}) {
    /**
     * useState
     */
    const [count, setCount] = React.useState(1);

    /**
     * useRef
     */
    // => luon khai bao lai sau khi render hoac re-render!
    const arr = [1, 2, 3, 4, 5];
    // => khai bao 1 lan duy nhat
    const elem = React.useRef<HTMLDivElement | null>(null);
    const arr = React.useRef([1, 2, 3, 4, 5]);

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
        console.log('useEffect 3: ', elem.current);
    });

    /**
     * useCallback
     */
    // => luon khai bao lai sau khi render hoac re-render!
    const say = () => {
        console.log('say: hello');
    };
    // => khai bao ham 1 lan duy nhat
    const say1 = React.useCallback(() => {
        console.log('say: hello');
    }, []);
    // => khai bao lai ham moi khi state count thay doi
    const say2 = React.useCallback(() => {
        console.log('say: hello');
    }, [count]);

    /**
     * useCallback
     */
    // => moi lan goi ham nay mat 1 phut tinh toan
    const getSum = () => {
        // vi du tinh toan nay mat 1 phut
        const sum = 1 + 2;
        return sum;
    };
    // => goi ham nay lan dau mat 1 phut tinh toan
    // => goi ham nay lan thu 2 tro di co ket qua luon, khong can tinh toan lai
    const getSum2 = React.useMemo(() => {
        // vi du tinh toan nay mat 1 phut
        const sum = 1 + 2;
        return sum;
    }, []);
    // => goi ham nay lan dau mat 1 phut tinh toan
    // => neu bien count thay doi, ham phai chay lai tu dau
    const getSum2 = React.useMemo(() => {
        // vi du tinh toan nay mat 1 phut
        const sum = 1 + 2 + count;
        return sum;
    }, [count]);

    console.log('return: chay');

    return <div ref={elem}>Count: {count}</div>;
}
