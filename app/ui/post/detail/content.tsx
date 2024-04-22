import { PostType } from "@/helpers/definitions";
import moment from "moment";
import {PostRelated} from "@/app/ui/post/detail/posts";
import { fetchNewPostRelated } from "@/lib/data-post";

const ContentMainDetailPost = async ({
    category,
    post
} : {
    category: string|undefined,
    post: PostType
}) => {
    const relatedPosts = await fetchNewPostRelated(post.post_type_id);
    return (
        <div className="col-start-1 col-end-3">
            <div className="flex justify-between">
                <h4 className="text-orange-400 uppercase">{category}</h4>
                <h5 className="text-orange-400">{moment().format('llll')}</h5>
            </div>
            <h1 
                className="text-gray-700 dark:text-gray-400 font-medium text-3xl mt-6"
            >
                {post.title}
            </h1>
            <div className="mb-3 text-gray-700 dark:text-gray-400 mt-5 pr-12" dangerouslySetInnerHTML = {{ __html: post?.content || ''}}/>
            {/* Auth */}
            {/* <div> */}
                {/* <p>{post?.author_name}</p> */}
            {/* </div> */}
            <PostRelated posts={relatedPosts}/>
        </div>
    );
}
 
export default ContentMainDetailPost;