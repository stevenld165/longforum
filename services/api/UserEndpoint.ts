import {apiUrl} from "~/constants/api";

class UserEndpoint {
    getUserByUsername = async (username: string) : Promise<User> => {
        return await $fetch(`${apiUrl}/User/${username}`)
    }

    getAllUsers = async () : Promise<User[]> => {
        return await $fetch(`${apiUrl}/User`)
    }

    // createUser
}

export default new UserEndpoint();