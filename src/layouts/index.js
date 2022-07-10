import React from 'react';
import {Container, ContainerContent} from "./styles";

const Layout = ({children}) => {
    return (
        <Container>
            <ContainerContent>{children}</ContainerContent>
        </Container>
    );
};

export default Layout;
