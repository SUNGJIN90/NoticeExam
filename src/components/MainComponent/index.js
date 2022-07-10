import React from 'react';
import {MainContainer
    // ,NoticeTitle, NoticeList, NoticePageNumber
} from './styles';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {InfoData} from "../../utils/dummy";



const MainComponent = () => {
    return (
        <MainContainer>
            {InfoData.map((info) => (
            <TableRow key={info.id}>
                <TableCell>{info.name}</TableCell>
                <TableCell>{info.gender}</TableCell>
                <TableCell>{info.cell}</TableCell>
            </TableRow>
            ))}
        </MainContainer>
    );
};

export default MainComponent;
