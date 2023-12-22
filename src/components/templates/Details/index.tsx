import Loader from "@/components/common/Loader";
import * as Style from "@/components/templates/Details/index.styled";
import { useFilmRetrieve } from "@/lib/hooks/useFilmRetrieve";
import { useRouter } from "next/router";
import { VscDesktopDownload, VscStarFull } from "react-icons/vsc";
import GenreItem from "./GenreItem/GenreItem";
import StatisticItem from "./StatisticItem/StatisticItem";
import Torrent from "./TorrentItem";
import CommentItem from "./CommentItem/CommentItem";
import {CommentProps} from "./CommentItem/CommentItem";
import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';

import { AiTwotoneLike } from "react-icons/ai";

import Link from "next/link";
import { BiTimeFive } from "react-icons/bi";

import styled from 'styled-components';

//задаём стиль для формы создания комментария
export const StyledForm = styled.form`
      background-color:  ${props => props.theme.iconColor};
      font-family: Monotype Corsiva;
      width: 348px;
      height: 28px;
      margin-bottom: 1.2em;

      input[type="text"] {
        background-color: ${(props) => props.theme.backgroundColor};
        font-family: Monotype Corsiva;
        font-size: 16px;
        width: 80px;
        height: 20px;
        color: ${(props) => props.theme.textColor};
      }

      input[type="text"]::placeholder {
        color: ${(props) => props.theme.textColor};
      }

      button[type="submit"] {
        background-color: ${props => props.theme.iconColor};
        font-family: Monotype Corsiva;
        font-size: 16px;
        width: 100px;
        height: 25px;
        color: ${(props) => props.theme.textColor};
        text-shadow: ${props => props.theme.textShadow};
        
      }
    `;

const Details = () => {
  
  var pageKey = "";

  if (typeof window !== 'undefined' && window.localStorage) {
    pageKey = window.location.href;
  }

  const[comments, setComments] = useState<CommentProps[]> (() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const localData = localStorage.getItem(pageKey);
      return localData ? JSON.parse(localData) : [];
    }
  });

  const [userName, setUserName] = useState('');
  const [commentText, setCommentText] = useState('');

  useEffect (() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(pageKey, JSON.stringify(comments));
    }
  }, [comments, pageKey]);

  const router = useRouter();
  const { filmRetrieve, isLoading } = useFilmRetrieve(
    (router.query.id as string) || ""
  );

  if (isLoading) {
    return <Loader />;
  }

  const genresList = filmRetrieve?.data.movie.genres.map((value) => {
    return <GenreItem key={value} text={value} />;
  });
  const torrentsList = filmRetrieve?.data.movie.torrents.map((item, index) => {
    return (
      <Torrent
        key={index}
        href={item.url}
        quality={item.quality}
        type={item.type}
        size={item.size}
      />
    );
  });

  //инициализация коммент листа
  function commentsList(){
    //функция для добавления нового комментария
    function addComment(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const newComment: CommentProps = {
        id: comments.length + 1,
        userName: "User " + userName,
        commentText: "Wrote: " + commentText
      };
      setComments([...comments, newComment]);
      setUserName('');
      setCommentText('');

      
    }

    //обработчик изменения поля ввода имени юзера
    function handleUserNameChange(event: React.ChangeEvent<HTMLInputElement>) {
      setUserName(event.target.value);
    }

    //обработчик изменения поля ввода текста коммента
    function handleCommentTextChange(event: React.ChangeEvent<HTMLInputElement>) {
      setCommentText(event.target.value);
    }

    //создание массива элементов react
    const commentItems = comments.map((comment) => (
      <CommentItem
        key = {comment.id}
        id = {comment.id}
        userName = {comment.userName}
        commentText = {comment.commentText}
        comments = {comments}
        setComments = {setComments}
      />
    ));

    return (
      <div>
        {/*инициализация формы для добавления нового комментария*/}
        <StyledForm onSubmit={addComment}>
          <input type="text" value={userName} onChange={handleUserNameChange} placeholder="Name" />
          <input type="text" value={commentText} onChange={handleCommentTextChange} placeholder="Comment" style = {{width: '250px'}}/>
          <button type="submit">Add comment</button>
        </StyledForm>

        {/*вывод списка комментариев*/}
        {commentItems}
      </div>
    );
  }

  return (
    <Style.Details>
      <Style.BackgroundImage
        src={filmRetrieve?.data.movie.background_image_original}
      ></Style.BackgroundImage>
      <Style.Content>
        <Style.ContentTitle>
          <Link href={"/"}>Films / {filmRetrieve?.data.movie.title}</Link>
        </Style.ContentTitle>

        <Style.Data>
          
          <Style.Image>
              <Style.Img
                src={filmRetrieve?.data.movie.large_cover_image}
              ></Style.Img>
              <Style.Buttons>
                <Style.DownloadButton href={filmRetrieve?.data.movie.url}>
                  Download
                </Style.DownloadButton>
                <Style.WatchButton href={filmRetrieve?.data.movie.url}>
                  Watch Now
                </Style.WatchButton>
              </Style.Buttons>
          </Style.Image>

          <Style.Description>
            <Style.Title>{filmRetrieve?.data.movie.title}</Style.Title>

            <Style.Year>
              {filmRetrieve?.data.movie.year +
                " " +
                filmRetrieve?.data.movie.language}
            </Style.Year>

            <Style.Statistic>
              <StatisticItem
                icon={<VscStarFull />}
                text={filmRetrieve?.data.movie.rating}
              ></StatisticItem>
              <StatisticItem
                icon={<AiTwotoneLike />}
                text={filmRetrieve?.data.movie.like_count}
              ></StatisticItem>
              <StatisticItem
                icon={<BiTimeFive />}
                text={filmRetrieve?.data.movie.runtime}
              ></StatisticItem>
              <StatisticItem
                icon={<VscDesktopDownload />}
                text={filmRetrieve?.data.movie.download_count}
              ></StatisticItem>
            </Style.Statistic>
            
            <Style.Genres>{genresList}</Style.Genres>

            <Style.DescriptionFull>
              {filmRetrieve?.data.movie.description_full}
            </Style.DescriptionFull>
            
            {/*добавление в структуру страницы фильма заголовка комментов и списка комментов*/}
            <Style.CommentsTitle>Comments:</Style.CommentsTitle>

            <Style.CommentItem>{commentsList()}</Style.CommentItem>

            <Style.TorrentsTitle>Downloads:</Style.TorrentsTitle>

            <Style.Torrents>{torrentsList}</Style.Torrents>
            
            
          </Style.Description>
        </Style.Data>
      </Style.Content>
    </Style.Details>
  );
};

export default Details;
