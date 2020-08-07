import React, { useContext } from 'react';

import DummyContext from '../contexts/context';
import styled from 'styled-components';

const NavBarItem = styled.div`
    color: ${props => props.activeid ? "black": "red"};
    padding: 5px;
`;

const NavListItem = ({label, id}) => {

    const { activeList, setActiveList } = useContext(DummyContext);

    return <NavBarItem onClick={() => {
        setActiveList(id);
    }} activeid={activeList === id}>
        {label}
    </NavBarItem>;
};

export default NavListItem;