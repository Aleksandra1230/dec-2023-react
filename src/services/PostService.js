import {axiosService} from "./AxiosService/AxiosService";
import {urls} from "../constants/urls";

class PostService{
    getAll(){
        return axiosService.get(urls.posts)
    }
}

export const postService = new PostService()