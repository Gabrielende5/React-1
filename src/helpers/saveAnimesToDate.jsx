import { animeActions } from "../Redux/Slice/AnimesSlice";
export const saveAnimesToDate = (animesFavoritList) =>{
    return async (dispatch) =>{
        localStorage.setItem("animesList", animesFavoritList);
        dispatch(animeActions.setAnimesList(animesFavoritList));
    }
}
