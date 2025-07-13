export {Video, Review}

declare global {
    interface Video {
        title: string,
        creator: string,
        duration: number,
        link: string,
        thumbnail: string
    }

    interface Review {
        video: Video,
        rating: number,
        isLiked: boolean,
        review: string,
        tags: string[]
    }
}