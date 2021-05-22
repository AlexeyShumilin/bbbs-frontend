import React from 'react';

function Video() {
  return (
    <section className="four-columns">
      <article className="block-video">
        {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
        <iframe className="block-video__iframe"/>
        <h2 className="block-video__title">Жутко громко и запредельно близко</h2>
        <p className="block-video__caption">Василий Сигарев, Борисов-Мусотов (Россия), 2009 год</p>
        <a href="/#" className="block-video__category">смотреть трейлер</a>
        <div className="block-video__caption block-video__caption_type_overflow">
          <a href="/#"
             className="block-video__category block-video__category_type_overflow-video">рубрика</a>
          <a href="/#"
             className="block-video__category block-video__category_type_overflow-video">рубрика</a>
        </div>
      </article>
      <article className="block-video">
        {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
        <iframe className="block-video__iframe"/>
        <h2 className="block-video__title">Жизнь Кабачка</h2>
        <p className="block-video__caption">Клод Баррас, мультфильм, Швейцария, Франция, 2016</p>
        <a href="/#" className="block-video__category">смотреть трейлер</a>
        <div className="block-video__caption block-video__caption_type_overflow">
          <a href="/#"
             className="block-video__category block-video__category_type_overflow-video">рубрика</a>
          <a href="/#"
             className="block-video__category block-video__category_type_overflow-video">рубрика</a>
        </div>
      </article>
      <article className="block-video">
        {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
        <iframe className="block-video__iframe"/>
        <h2 className="block-video__title">Волчок</h2>
        <p className="block-video__caption">Василий Сигарев, Россия, 2009 год</p>
        <a href="/#" className="block-video__category">смотреть трейлер</a>
        <div className="block-video__caption block-video__caption_type_overflow">
          <a href="/#"
             className="block-video__category block-video__category_type_overflow-video">рубрика</a>
          <a href="/#"
             className="block-video__category block-video__category_type_overflow-video">рубрика</a>
        </div>
      </article>
      <article className="block-video">
        {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
        <iframe className="block-video__iframe"/>
        <h2 className="block-video__title">Жутко громко и запредельно близко</h2>
        <p className="block-video__caption">Василий Сигарев, Борисов-Мусотов (Россия), 2009 год</p>
        <a href="/#" className="block-video__category">смотреть трейлер</a>
        <div className="block-video__caption block-video__caption_type_overflow">
          <a href="/#"
             className="block-video__category block-video__category_type_overflow-video">рубрика</a>
          <a href="/#"
             className="block-video__category block-video__category_type_overflow-video">рубрика</a>
        </div>
      </article>
    </section>
  );
}

export default Video;
