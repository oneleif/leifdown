import React, { useState, useEffect } from 'react';

const useParser = (text) => {
    const [body, setBody] = useState('');

    useEffect(() => {
        let temp = text;
        let bodArray = [];
        while (temp !== '') {
            const { parsed, remaining } = parse(temp);
            temp = remaining;
            bodArray[bodArray.length] = parsed;
        }
        setBody(bodArray);
    }, [text])

    return (
      <>
        {text ? body : <p>Nothing to Display.</p>}
      </>
    )
};

function parse(substring) {
    const parsed = (<h1>{substring}</h1>);
    const remaining = '';
    return { parsed, remaining }
}

export { useParser };