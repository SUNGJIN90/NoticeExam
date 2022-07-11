import React from 'react';
import { DetailContainer, DetailTitle, DetailContent, EditBtn, DeleteBtn } from './styles';

const DetailComponent = () => {
  return (
    <DetailContainer>
      <DetailTitle>제목: 타이틀</DetailTitle>
      <DetailContent>내용: 컨텐츠</DetailContent>
      <EditBtn>
        <p>수정</p>
      </EditBtn>
      <DeleteBtn>
        <p>삭제</p>
      </DeleteBtn>
    </DetailContainer>
  );
};

export default DetailComponent;
