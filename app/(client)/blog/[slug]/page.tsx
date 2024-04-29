import CommentList, {
    CommentMain
} from "@/app/ui/post/detail/comment";
import ContentMainDetailPost from "@/app/ui/post/detail/content";
import {
    TheBestViewPost,
    ManyViewsPosts
} from "@/app/ui/post/detail/posts";
import { auth } from "@/auth";
import { User } from "@/helpers/definitions";
import { getUserByEmail, getUserById } from "@/lib/actions-user";
import { 
    fetchPostBySlug, 
    fetchPostCategoryById 
} from "@/lib/data-post";
import { Suspense } from "react";

export default async function Page({ 
    params 
} : { 
    params: { slug: string }
}) {
    const slug = decodeURIComponent(params.slug);
    const post = await fetchPostBySlug(slug);
    
    if(!post) return;
    const category = await fetchPostCategoryById(post.post_type_id || 1);
    
    const session = await auth();
    const email = session?.user?.email;
    let user = {
        id: 0
    };
    
    if(email) {
        user = await getUserByEmail(email) as User;
    }

    return (
        <>
            {/* Main */}
            <div className="grid grid-cols-3 gap-3">
                <Suspense>
                    <ContentMainDetailPost category={category} post={post}/>
                </Suspense>
                <Suspense>
                    <ManyViewsPosts postTypeId={post.post_type_id}/>
                </Suspense>
            </div>
            <hr className="w-full h-1 mx-auto my-12 bg-gray-300 border-0 rounded md:my-8 dark:bg-gray-300"/>
            
            <div className="grid grid-cols-3 gap-3 mt-5 pt-6">
                {/* Comment */}
                <div className="col-start-1 col-end-3">
                    <h1 className="my-5 text-orange-600 text-2xl border-b-2 border-orange-200 inline-block p-1">Comments ({post.comment_count})</h1>
                    <Suspense>
                        {
                            user && <CommentMain 
                                postId={post.id}
                                userId={user.id || 0}
                                parentId={0}
                            />
                        }
                    </Suspense>
                    <Suspense>
                        <CommentList/>
                    </Suspense>
                </div>
                {/* Posts with other topics*/}
                <Suspense>
                    <TheBestViewPost/>
                </Suspense>
            </div>
        </>
    )
}