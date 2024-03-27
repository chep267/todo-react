import * as React from 'react';

export default function MainContent(props) {
    // do something
    if (props.hidden) {
        return null;
    }
    return <div style={{width: 200, height: 200, border: '1px solid red', margin: 40}}>
        MainContent
        </div>
}