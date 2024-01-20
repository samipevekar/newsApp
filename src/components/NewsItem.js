import React from 'react'

export default function NewsItem(props) {
  
    let {title,description,imageUrl,newsUrl,author,date,source}=props
    return (
      <div className='my-3'>
        <div  className="card" >
                  <div style={{display:"flex",justifyContent:"flex-end",position:'absolute',right:"0"}}>
                  <span style={{zIndex:"1",left:"90%"}} className={` badge bg-danger`}>
    {source}
  </span>
  </div>
          <img src={imageUrl===null?imageUrl="https://www.hindustantimes.com/ht-img/img/2024/01/04/1600x900/s0nhgf_1704183588553_1704364571661.jpg":imageUrl}  className="card-img-top" alt="..."/>
            <div  className="card-body">
                  <h5  className="card-title">{title}{"\t"}<span className="badge bg-primary">New</span></h5>
                <p  className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">By {author===null?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  
}
