import React, { useState } from 'react';
import { WriteContainer, WriteTitle, WriteContent, CompletionBtn, CancelBtn } from './styles';

const WriteComponent = () => {
  const [titleValue, setTitleValue] = useState('');
  const [contentValue, setContentValue] = useState('');

  const handleTitle = (event) => {
    setTitleValue(event.target.value);
  };
  console.log('title : ', titleValue);

  const handleContent = (event) => {
    setContentValue(event.target.value);
  };
  console.log('content : ', contentValue);

  return (
    <WriteContainer>
      <WriteTitle>
        <label>
          제목:
          <input type="text" name="title" value={titleValue} onChange={handleTitle} />
        </label>
      </WriteTitle>
      <WriteContent>
        내용:
        <textarea name="content" value={contentValue} onChange={handleContent} />
      </WriteContent>
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
