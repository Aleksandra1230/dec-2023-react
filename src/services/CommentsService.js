import {axiosService} from "./AxiosService/AxiosService";
import {urls} from "../constants/urls";

class CommentsService{
    getAll(){
        return axiosService.get(urls.comments)
    }
}

export const commentsService = new CommentsService()