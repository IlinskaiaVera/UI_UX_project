import React from 'react';
import * as Style from './index.styled';
import { FaTimes } from 'react-icons/fa';
import {useState, useEffect} from 'react';

//основные свойства объекта CommentItem
export type CommentProps = {
  id: number;
  userName: string;
  commentText: string;
};

//принимаем список комментов из index.styles для дальнейшего удаления
const CommentItem: React.FC<CommentProps & { comments: CommentProps[]; setComments: React.Dispatch<React.SetStateAction<CommentProps[]>> }> 
= ({ id, userName, commentText, comments, setComments }) => {
  //локальный список приравнивается к глобальному (что в index.styled)
  const [localComments, setLocalComments] = useState<CommentProps[]>(comments);

  //функция удаления коммента
  const handleDelete = () => {
    const updatedComments = localComments.filter(comment => comment.id !== id);
    setLocalComments(updatedComments);
    setComments(updatedComments);
    
  }

  //при инициализации указываем порядок свойств
  return (
    <Style.CommentItem>
      <Style.CommentContent>
        <Style.UserName> {userName} </Style.UserName>
      </Style.CommentContent>
      <Style.CommentContent>
        <Style.CommentText>{commentText}</Style.CommentText>
        <Style.deleteButton onClick = {handleDelete}>x</Style.deleteButton>
      </Style.CommentContent>
    </Style.CommentItem>
  );
};

export default CommentItem;