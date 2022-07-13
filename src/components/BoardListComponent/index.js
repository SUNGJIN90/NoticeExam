import React from 'react';
import { BoardListContainer, ListTable, TableRow, TableColum } from './styles';
import { tableData } from 'utils/dummy';

const BoardListComponent = () => {
  return (
    <BoardListContainer>
      {tableData.map((info) => (
        <ListTable key={info.id}>
          <TableRow>
            <TableColum>
              <span>{info.id}</span>
              <span>{info.title}</span>
              <span>{info.name}</span>
              <span>{info.date}</span>
            </TableColum>
          </TableRow>
        </ListTable>
      ))}
    </BoardListContainer>
  );
};

export default BoardListComponent;
