import React from 'react';
import { WriteContainer, WriteTitle, WriteContent, CompletionBtn, CancelBtn } from './styles';

const WriteComponent = () => {
  return (
    <WriteContainer>
      <WriteTitle>제목을 입력하세요</WriteTitle>
      <WriteContent>내용을 입력하세요</WriteContent>
      <CompletionBtn onClick={() => window.open('/', '_blank')}>
        <p>완료</p>
      </CompletionBtn>
      <CancelBtn onClick={() => window.open('/', '_blank')}>
        <p>취소</p>
      </CancelBtn>
    </WriteContainer>
  );
};

export default WriteComponent;
