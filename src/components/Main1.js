import { useEffect, useState } from 'react';
import Tour from './Tour';
import './main1.css';
const upl='https://course-api.com/react-tours-project';
export default function Main1() {
    const [tourlist, setTourlist]=useState([]);

  const tourdata = async () => {
      const res = await fetch(upl);
      const data = await res.json();
      setTourlist(data);
  }

  useEffect(()=>{
    tourdata();
  },[]);

  const deletelist = (id)=>{
    const remove = tourlist.filter((list)=>list.id!==id)
    setTourlist(remove);
    localStorage.setItem('dislike', JSON.stringify(tourlist.filter((list)=>list.id===id)));
  }
  

  return (
    <div className="main">
      <Tour tour={tourlist}  deletelist={deletelist} />
    </div>
  );
}
