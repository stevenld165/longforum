export {Video, Review}

declare global {
    interface Video {
        id: number,
        title: string,
        creatorName: string,
        duration: number,
        link: string,
        thumbnail: string
    }

    interface Review {
        id: number,
        video: Video,
        burgers?: number,
        isLiked: boolean,
        reviewText: string,
        tags: string[],
        date: Date,
        createdBy: User
    }

    interface User {
        id: number,
        username: string,
        displayName: string,
        profilePic: string,
        bio: string,
        recentReviews?: Review[],
        favorites?: Review[],
    }
}