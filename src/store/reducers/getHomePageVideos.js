import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import parseData from "../../utils/parseData";

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API;

export const getHomePageVideos = createAsyncThunk(
    'youtube/App/homePageVideos',
    async(isNext,{getState})=>{
        const {
            youtubeApp : {nextPageToken : nextPageTokenFromState,videos}
        } = getState();
        
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="Droid Bytes"&key=${API_KEY}&part=snippet&type=video`);
        const items = response.data.items;
        console.log(items);

        const parsedData = await parseData(items);
        
    }
)