import {apiUrl} from "~/constants/api";

class ListEndpoint {
    getFavoriteListByUsername = async (username: string) : Promise<List> => {
        return await $fetch(`${apiUrl}/List/Favorites/${username}`)
    }
}

export default new ListEndpoint()