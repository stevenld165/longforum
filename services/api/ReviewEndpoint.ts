import {apiUrl} from "~/constants/api";

class ReviewEndpoint {
    getReviewsByUsername = async (username: string) : Promise<Review[]> => {
        return await $fetch(`${apiUrl}/Review/User/${username}`)
    }
}

export default new ReviewEndpoint()