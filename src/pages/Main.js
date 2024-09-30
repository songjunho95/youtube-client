import "../assets/style.css";
import { getVideos } from "../api/video";
import {useState, useEffect} from "react";


const Main = () => {
      const [videos, setVideos] = useState([]);
      const videoAPI = async () => {
        const result = await getVideos();
        setVideos(result.data);
      };
      useEffect(()=> {
        videoAPI();
      }, []);
    return(
        <section>
            {videos.map((video) => (
                <div className="", key={video,video.Code}
            ))}

        </section>

    );

};
export default Main;
