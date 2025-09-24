import React from 'react';
import styled from 'styled-components';

function Counter() {
    const [count, setCount] = React.useState(0);

    function handleClick() {
        return setCount(count + 3);
    };

    return (
    	<>
				<Wrapper>
					<Card>
						<Message>The new count is {count}</Message>
						<Button onClick={handleClick}>
									Click Me 
						</Button>
					</Card>
					<Card>
						<Message>The new count is {count}</Message>
						<RedButton onClick={handleClick}>
									Click Me 
						</RedButton>
					</Card>
					<Card>
						<Message>The new count is {count}</Message>
						<BlueButton onClick={handleClick}>
									Click Me 
						</BlueButton>
					</Card>
				</Wrapper>
    	</>
        
    );
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 100vh;
	gap: 60px;
`;

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

const RedButton = styled(Button)`
	background: hsl(0deg 90% 50%);
`;

const BlueButton = styled(Button)`
	background: hsl(240deg 90% 50%);
`;

const Message = styled.p`
    font-size: 2rem;
`;

const Card = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: hsl(0deg 100% 100%);
	height: 450px;
	align-items: center;
	padding: 30px;
	border: 3px solid hsl(0deg 100% 100%);
	box-shadow: 5px 5px 15px 0px hsl(0deg 0% 83%), -5px -5px 15px 0px hsl(0deg 0% 83%);
`;


export default Counter;