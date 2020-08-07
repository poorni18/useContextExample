import React from 'react';
import DummyContext from '../contexts/context'; 
import styled from 'styled-components';

import NavListItem from './NavListItem';
import { CONSTANTS } from '../config/constants';

const GrandChildComp = styled.div`
    div {
        float: left;
        cursor: pointer;
        width: 100px;
    }
`;

const ChildComp = () => {

    const [ activeList, setActiveList ] = React.useState("key1");

    return <DummyContext.Provider value={{ activeList, setActiveList }}>
    <GrandChildComp>
    	{CONSTANTS.LIST.map(item => <NavListItem key={item.id} {...item} />)}
    </GrandChildComp>;
    </DummyContext.Provider>
};

export default ChildComp;