import { Header } from "./components/Header";
import { Post } from "./components/Post";
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";
import './global.css'


// author : { avatar_url:'', name:'',  role:"" }
//publishedAt: date
//content: String

const posts=[
  {
    id: 1,
    author:{
      avatarUrl:'https://github.com/maykbrito.png',
      name:' Igor Sousa',
      role:' Web Developer'
    },
    content:[
    
   {type: 'paragraph', content:'Fala galeraa foda 👋'} ,
   {type: 'paragraph', content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat."},
   {type: 'link', content: "jane.design/doctorcare"}
    ],
    publishedAt: new Date('2022-08-07 19:40:10')
  },
  {
    id: 2,
    author:
    {
      avatarUrl:'https://avatars.githubusercontent.com/u/650752?v=4',
      name:' Carlos da silva',
      role:'Empresario'
    },
    content:
    [
    
   {type: 'paragraph', content:'Fala galeraa  pica👋'} ,
   {type: 'paragraph', content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat."},
   {type: 'link', content: "jane.design/doctorcare"}
    ],
    publishedAt: new Date('2022-08-01 19:00:10')
  }
]

export function App() {
 return (
  <div>

    <Header />
 <div className={styles.wrapper}>
  <Sidebar />
  <main>
  {posts.map(post =>{
   return( 
   <Post 
   key={post.id}
   author={post.author}
   content={post.content}
   publishedAt={post.publishedAt}
   
   />
   )
  }
    )}
 

 
  
  </main>
 </div>
   </div>
    )
}


