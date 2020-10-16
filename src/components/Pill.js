import React from 'react';
import styled from 'styled-components';

const PillComp = styled.div`
    border-radius: 15px;
    background-color: lightgrey;
    height: 30px;
    width: 120px;
    text-align: center;
    align-items: center;
`;

// const Text = styled.p`
//     color: white;
//     font-family: arial, helvetica;
//     font-size: 15px;
//     padding: 5px;
//     text-align: center;
// `;

const Pill = (props) => {
    return (
        <PillComp>
            <div style={{ color: 'white', paddingTop: '5px' }}>{props.data}</div>
        </PillComp>
    )
}

export default Pill;