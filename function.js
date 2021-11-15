const request =require('postman-request')

const search_movie=(movie_name,callback)=>{
  const url=`https://imdb-api.com/API/Search/${process.env.IMDB_Key}/${movie_name}`
  const headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}

  request.get({url,json:true,headers}, (error,{body}={},)=>{
    if(error)
    {
      callback('cannot connect to IMDB',undefined)
    }else if(!body){
      callback('error',undefined)
    }else{
      var results=body.results;
      callback(undefined,results)
    }
  } )
}

const search_movie_by_id=(movie_id,callback)=>{



  const url=`https://imdb-api.com/en/API/Title/${process.env.IMDB_Key}/${movie_id}/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia`
  const headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}

  request.get({url,json:true,headers}, (error,{body}={},)=>{
    if(error)
    {
      callback('cannot connect to IMDB',undefined)
    }else if(!body){
      callback('error',undefined)
    }else{
      var results=body
      callback(undefined,results)
    }
  } )
}


module.exports={search_movie,search_movie_by_id}
