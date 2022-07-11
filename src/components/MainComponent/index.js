import React from 'react';
import { MainContainer, NoticeTitle, NoticeList, NoticePageNumber, WriteBtn } from './styles';

const MainComponent = () => {
  return (
    <MainContainer>
      <NoticeTitle>
        게시판
        <WriteBtn onClick={() => window.open('/write', '_blank')}>
          <p>글쓰기</p>
        </WriteBtn>
      </NoticeTitle>
      <NoticeList>게시글 목록</NoticeList>
      <NoticePageNumber>페이지 넘버</NoticePageNumber>
    </MainContainer>
  );
};

export default MainComponent;
