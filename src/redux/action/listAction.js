import Api from "../../utis/api";
import ActionTypes from "../action/actionTypes";

const account_id="21742117";

export const getWatchList =()=>async(dispatch)=>  {

dispatch({ type: ActionTypes.LIST_LOADING });

 Api.get(`/account/${account_id}/watchlist/movies`)
 .then((res)=> dispatch({type:ActionTypes.LIST_SUCCESS,payload:res.data.results})
).catch((err)=> dispatch({type:ActionTypes.LIST_ERROR, payload:err.message}))

  
    
};

export const toggleMovieList = (movie, isAdd) => async (dispatch) => {
    // body içeriğini hazırla
    const body = {
      media_type: "movie",
      media_id: movie.id,
      watchlist: isAdd,
    };
  
    // api isteği at
    Api
      .post(`/account/${account_id}/watchlist`, body)
      .then(() => {
        // ekleme/çıkarma durumuna göre reducer'a haber ver
        isAdd
          ? dispatch({ type: ActionTypes.ADD_TO_LIST, payload: movie })
          : dispatch({ type: ActionTypes.REMOVE_FROM_LIST, payload: movie });
      })
      .catch((err) => console.log(err));
  };