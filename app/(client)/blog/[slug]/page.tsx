import ContentMainDetailPost from "@/app/ui/post/detail/content";
import FormComment from "@/app/ui/post/detail/form-comment";
import ListComment from "@/app/ui/post/detail/list-comment";
import {TheBestViewPost, ManyViewsPosts} from "@/app/ui/post/detail/posts";
import { fetchPostBySlug, fetchPostCategoryById } from "@/lib/data-post";
import { Suspense } from "react";

export default async function Page({ params }: { params: { slug: string }}) {
    const slug = decodeURIComponent(params.slug);
    const post = await fetchPostBySlug(slug);
    
    if(!post) return;
    const category = await fetchPostCategoryById(post.post_type_id || 1);
    console.log(category);
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
            {/* Comment */}
            <div className="grid grid-cols-3 gap-3 mt-5 pt-6">
                <div className="col-start-1 col-end-3">
                    <h1 className="my-5 text-orange-600 text-2xl border-b-2 border-orange-200 inline-block p-1">Comments ({post.comment_count})</h1>
                    <Suspense>
                        <FormComment/>
                    </Suspense>
                    <Suspense>
                        <ListComment/>
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