import axios from 'axios'
import React, { useEffect, useState } from 'react'
import VideoList from '../VideoList'
import { Button, Form, InputGroup } from 'react-bootstrap'
import VideoDetail from '../VideoDetail'

//기능추가 -사용자가 입력한 키워드에 따라 달라져야한다=stateHook으로 관리
//1.검색기 2.비디오 선택시 상세페이지
const YoutubePage = () => {
    //사용자가 입력한 키워드 관리를 위한 Hook선언
    const [keyword,setKeyword]=useState('')
    //상세화면 처리 위한 Hook
    const [selectedvideo,setSelectedVideo]=useState(null)
    const [videos,setVideos]=useState([])
    //비디오가 선택 됐을 때 상태값 관리
    const videoSelect = (video)=>{
        setSelectedVideo(video)
    }
  const[params,setParams]=useState({
    part:'snippet',
    chart:'mostPopular',
    maxResults:25,
    key:"AIzaSyBDEIy9NwR-tkmaC0REb_yWytU9IDrzP9E"
  })//첫번째 인자를 useEffect 의존성 배열에 넣을 수 있다
  useEffect(()=>{
    console.log('uesEffect')
    axios.get('https://youtube.googleapis.com/youtube/v3/videos?',{params})
    .then(result=>{
      console.log(result.data.items)
      //useState에 담기 
      setVideos(result.data.items)
    }).catch(error=>console.log(error))
  },[params])

  const[params2,setParams2]=useState({
    part:'snippet',
    type:'video',
    maxResults:25,
    key:"AIzaSyBDEIy9NwR-tkmaC0REb_yWytU9IDrzP9E",
    q:`${keyword}`
  })
  const youtubeSearch=()=>{//대문자로하면 컴포넌트 취급 =화면
    console.log('uesEffect')
    axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&type=video&key=AIzaSyBDEIy9NwR-tkmaC0REb_yWytU9IDrzP9E`,{params2})
    .then(result=>{
        console.log(result.data.items)
        setVideos(result.data.items)
        setSelectedVideo(null)
    }).catch(error=>console.log(error))
  }
  //버튼 이벤트 
  const changeKeyword=(event)=>{
    console.log(event.target.value)
    //버튼이 눌렸을 때담기
    setKeyword(event.target.value)
   
  }

 return (
     <>
     <div className='container'>
        <div>
            <h2>Youtube<small>유튜브</small></h2>
                <hr />
            </div>
            <InputGroup className="mb-3">
        <Form.Control
          placeholder="검색어"
          aria-label="검색어"
          aria-describedby="basic-addon2"
          onChange={changeKeyword}
          onKeyDown={youtubeSearch}
        />
        <Button className='btn btn-danger'onClick={youtubeSearch}>Search</Button>
      </InputGroup>
            {
                selectedvideo&&(
                    <div>
                        <VideoDetail video={selectedvideo}/>
                    </div>
                )
            }
            
            <VideoList videos={videos} videoSelect={videoSelect}/>{/* props넘기기 */}
     </div>
    </>
    )
}


export default YoutubePage
