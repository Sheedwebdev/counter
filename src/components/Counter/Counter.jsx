import React from 'react';
import styled from 'styled-components';

function Counter() {
    const [count, setCount] = React.useState(0);

    function handleClick() {
        return setCount(count + 3);
    };

    return (
        <>
            <Paragraph>The new count is {count}</Paragraph>
            <Button onClick={handleClick}>
                Click Me To Increment
            </Button>
        </>
        
    );
};

const Button = styled.button`
	background: hsl(45deg 100% 50%);
	color: hsl(0deg 0% 0%);
	padding: 20px 20px;
	border-radius: 8px;
	border: none;
	font-size: 1.5rem;
    font-weight: 900;
	cursor: pointer;

    &:hover {
        background: hsl(0deg 0% 0%);
        color: hsl(0deg 0% 100%);
    }
`;

const Paragraph = styled.p`
    font-size: 2rem;
`;

export default Counter;