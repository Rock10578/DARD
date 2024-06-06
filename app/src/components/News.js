import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

function News(props) {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const updateNews = async() =>{
    setPage(page+1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&language=${props.language}&domains=wsj.com&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  }
  useEffect(() => {
    document.title = `Newsify: ${capitalizeFirstLetter(props.category)}`;
    updateNews();
    // eslint-disable-next-line
  },[]);


  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&language=${props.language}&domains=wsj.com&apiKey=1834ad42eb01433d83facfb182fd15c9&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

    return (
      <>
        <h2 style={{marginTop: '10px', padding: '50px  0px 20px 100px'}}>Top Headlines ({capitalizeFirstLetter(props.category)})</h2>
        {loading && <Spinner/>}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
          >
            <div className='container'>
              <div className='row'>
                {articles.map((e)=>{
                    return <div className='col-lg-4 col-md-6' key={e.url}>
                            <NewsItem title={e.title?e.title.slice(0, 45):""} description={e.description?e.description.slice(0, 78):""} imageUrl={e.urlToImage} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name}/>
                        </div>
                })}
              </div>
            </div>
          </InfiniteScroll>
      </>
    )
}

News.defaultProps = {
  country: 'in',
  pageSize: 12,
  category: 'technology',
  language: 'en'
}
News.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string,
  language: propTypes.string
}

export default News