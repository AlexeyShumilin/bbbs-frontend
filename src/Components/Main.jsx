import React from 'react';
import Article from './Article';
import Place from './Place';
import First from './First';
import Video from './Video';
import VideoHeader from './Video_Header';

function Main() {
  return (
    <>
      <main className="content page__content">
        <First />
        <Place />
        <Article />
        <Video />
        <VideoHeader />
      </main>
    </>
  )
}

export default Main;
