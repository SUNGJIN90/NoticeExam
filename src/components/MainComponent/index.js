import React from 'react';
import { MainContainer, NoticeTitle, NoticeList, NoticePageNumber, WriteBtn } from './styles';
import { useNavigate } from 'react-router-dom';
import BoardListComponent from '../BoardListComponent';

const MainComponent = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <NoticeTitle>
        게시판
        <WriteBtn onClick={() => navigate('/write')}>
          <p>글쓰기</p>
        </WriteBtn>
      </NoticeTitle>
      <NoticeList>
        <BoardListComponent />
      </NoticeList>
      <NoticePageNumber>페이지 넘버</NoticePageNumber>
    </MainContainer>
  );
};

export default MainComponent;
