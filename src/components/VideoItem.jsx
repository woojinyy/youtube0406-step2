import React from 'react'
import styled from 'styled-components'

const VideoLi=styled.li`
    list-style:none;
    padding:0.2em;
`;
const VideoCard=styled.div`
    width:100%;
    height:100%;
    display:flex;/* 비디오가 한줄만 나오게 처리 display:flex */
    align-items:center;
    border:1px solid lightgray;
    box-shadow:3px 3px 5px 0px rgba(191,191,191,0.55);/* 그림자효과 */
    cursor:pointer;
    transition:transform 250ms easy-in;/* 애니매이션 효과 자연스럽게 */
    &:hover{
        transform:scale(1.04);
    }
`;
const VideoThumbnail=styled.img`
width:40%;
height:100;
`;
const VideoInfo=styled.div`
    margin-left:0.2em;
`;
//기본사이즈 16  0.8rem = 12.8
const Ptitle=styled.p`
    margin:10;
    font-size:20px;
`;
const Pchannel=styled.p`
    margin:10;
    font-size:15px;
`;

const VideoItem = (props) => {
    //{비디오 한건에 대한 정보, 선택된 비디오이벤트의 주소번지}
    //를 받아서 VideoLi가 클릭됐을 떄 파라미터로 video한건의 주소번지를 부모에 정의된 이벤트처리 함수 호출
    //Q.videoList에서 이벤트처리를 마무리 하지 않고 props로 넘기는 이유??
    //A. Videolist에서는 n건을 가지고 있고 이중 어떤 비디오 클립이 선택됐는지 알 수 없어
    //이벤트 소스 클립은 YoutubePage에 있지만 선택된 비디오 한건데 대한 정보는
    //VideoItem에서 결정
    //따라서 한건에 대한 정확한 정보를 알고있는 자손component인 ViedoItem에서 부모가 가진 함수의 주소번지를 props로 받고 이벤트 호출은 VideoItem에서 처리해야한다
    const {video,videoSelect}=props
  return (
    <VideoLi onClick={()=>videoSelect(video)}>
        <VideoCard>
            <VideoThumbnail src={props.video.snippet.thumbnails.medium.url}alt="video thumbnail"/>
            <VideoInfo>
                <Ptitle>{props.video.snippet.title}</Ptitle>
                <Pchannel>{props.video.snippet.channelTitle}</Pchannel>
            </VideoInfo>
        </VideoCard>
    </VideoLi>
  )
}

export default VideoItem
