import React from 'react';
import styled from 'styled-components';

function Counter() {
    const [count, setCount] = React.useState(0);

    function handleClick() {
        return setCount(count + 3);
    };

    return (
        <Button onClick={handleClick}>
            Count: {count}
        </Button>
    );
};

const Button = styled.button`
	background: hsl(0deg 0% 0%);
	color: hsl(0deg 0% 100%);
	padding: 10px 5px;
	border-radius: 4px;
	border: none;
	font-size: 1rem;
	cursor: pointer;
`;

export default Counter;