import {Toolbar} from '../../components/toolbar'
import style from '../../styles/Feed.module.css'
import {Router, useRouter} from 'next/router'



export const Feed = ({pageNumber, articles})=> {
    const router = useRouter()
    

    console.log(articles)
    
    return (   
              <div className='page-container'>
                      <Toolbar/>
                  <div className={style.main}>
                    {
                       articles.map((articles, index)=>(
                          <div key= {index} className={style.post}>
                               <h1 onClick={()=> (window.location.href = articles.url)}> {articles.title}  </h1>
                               <p>{articles.description}</p>
                               { !!articles.urlToImage && <img src={articles.urlToImage}/>}
                          </div>
                       ))
                       }
                  </div> 
            <div className={style.paginator}>
                <div 
                onClick ={()=> {
                         if(pageNumber > 1) {
                           router.push(`/feed/${pageNumber - 1}`).then(()=> window.scrollTo(0,0));
                         } 
                }} className={pageNumber === 1 ? style.disabled : style.active}>
                          Voltar
                </div>
                <div>#{pageNumber}</div> 
                <div
                      onClick ={ ()=> { if(pageNumber < 5){ router.push(`/feed/${pageNumber + 1}`).then(()=> window.scrollTo(0,0))} }}
                      className={pageNumber === 5 ? style.disabled : style.active}> Próximo</div>
            </div>   
          </div> ) }

                      


export const getServerSideProps = async pageContext => {
  const pageNumber = pageContext.query.slug;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    },
  ).then(res => res.json());

   
     
  const { articles } = apiResponse;

  return {
    props: {
      articles: articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};
export default Feed;




