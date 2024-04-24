import { PostType, User } from "@/helpers/definitions";
import {PostRelated} from "@/app/ui/post/detail/posts";
import { fetchNewPostRelated } from "@/lib/data-post";
import { formatDate } from "@/utils/functions";
import { getAuthorOfPost } from "@/lib/data-user";

const ContentMainDetailPost = async ({
    category,
    post
} : {
    category: string|undefined,
    post: PostType
}) => {
    const data = await Promise.all([
        await fetchNewPostRelated(post.post_type_id),
        await getAuthorOfPost(post.author_id) as User
    ])
    const relatedPosts = data[0];
    const author = data[1];
    return (
        <div className="col-start-1 col-end-3">
            <div className="flex justify-between">
                <h4 className="text-orange-400 uppercase">{category}</h4>
                <h5 className="text-orange-400">{formatDate(post.created_at)}</h5>
            </div>
            <h1 
                className="text-gray-700 dark:text-gray-400 font-medium text-3xl mt-6"
            >
                {post.title}
            </h1>
            <div className="mb-1 text-gray-700 dark:text-gray-400 mt-5 pr-12" dangerouslySetInnerHTML = {{ __html: post?.content || ''}}/>
            {/* Auth */}
            <div>
                <p className="text-end uppercase text-black font-bold -translate-x-[50px]">{author.username}</p>
            </div>
            <PostRelated posts={relatedPosts}/>
        </div>
    );
}

export default ContentMainDetailPost;