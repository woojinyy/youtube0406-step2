import React from 'react'

const VideoDetail = ({video}) => {
    console.log(video)
    console.log(video.id)
    console.log(video.id.videoId)
  return (
    <>
     <section>
         <iframe 
         title='video play'
         type="text/html" 
         width="100%" height="500px"
        src={`http://www.youtube.com/embed/${video.id.videoId}`}
        frameborder="0" allowFullScreen></iframe>
    </section> 
    </>
  )
}

export default VideoDetail
