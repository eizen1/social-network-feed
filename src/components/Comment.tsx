import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps){
const[likeCount, SetLikeCount] = useState(0);

function handleDeleteComment(){
    onDeleteComment(content);
}

function handleLikeComment(){
    SetLikeCount((state) => {
       return state + 1
    });
}
    return(
<div className={styles.comment}>
    <Avatar src="https://avatars.githubusercontent.com/u/94468102?v=4"  />

    <div className={styles.commentBox}>
        <div className={styles.commentContent}>
                 <header>
                   <div className={styles.authorAndTime}>
                    <strong>Igor Sousa</strong>
                    <time title='11 de abril' dateTime='2022-08-03 08:33:00'>Cerca de 1h atras</time>
                    </div>
                     <button onClick={handleDeleteComment} title='Deletar comentario '>
                         <Trash size={24}/>
                    </button>
                 </header>
        
        <p>{content}</p>
        </div>

        <footer>
            <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
            </button>
        </footer>
      </div>
      </div>
      
    )
}