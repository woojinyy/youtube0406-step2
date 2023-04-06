import React from 'react'
import VideoItem from './VideoItem'
import styled from 'styled-components'

const VideoListDiv =styled.div`
  display:grid;
  margin-top:10px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
`;
const VideoList = ({videos,videoSelect}) => {
  //넘어온 props확인
  console.log(videos)
  return (
    <>
    <VideoListDiv>
      {
        videos.map((video,index)=>(
          <VideoItem key = {index} video = {video} videoSelect={videoSelect} />
          ))  
        }
        </VideoListDiv>
      App에서 VideoList로 videos배열 props로 넘기기
    </>
  )
}

export default VideoList
