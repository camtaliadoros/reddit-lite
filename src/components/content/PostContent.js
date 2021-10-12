import { ReactVideo } from 'reactjs-media';
export default function PostContent({ post }) {

    const data = post.data;
    const mediaType = data.post_hint;


    const loadMedia = () => {
        // if (mediaType === "text") {
        //     const body = isText;
        //     return <p className="post-text">{body}</p>;

        // } else 
        if (mediaType === "hosted:video") {
            const videoSource = data.media.reddit_video.fallback_url;
            const posterSource = data.thumbnail;
            return <ReactVideo 
                        src={videoSource}
                        poster={posterSource} />;

        }else if (mediaType === "image") {
            const imageSource = data.url_overridden_by_dest
            return <img src={imageSource} />
        } else if (mediaType === "link") {
            const url = data.url;
            const thumbnail = data.thumbnail;
            return (
                <div>
                    <img src={thumbnail}/>
                    <a href={url} target="_blank">{url}</a>
                </div>
                );
        } else {
            if (data.is_self) {
                const body = data.selftext;
                return <p className="post-text">{body}</p>
                // return <Spoiler />
            }
            return;
        }

    }

    return (
        <div>
            {loadMedia()}
        </div>
    )

}