import EditorBox from "@/app/ui/post/create-editor-box";
import { auth } from "@/auth";
import { PostCategoriesType, User } from "@/helpers/definitions";
import { getUserByEmail } from "@/lib/actions-user";
import { fetchAllPostCategories } from "@/lib/data-post";

const Page = async () => {
    const postCategories:PostCategoriesType[] = await fetchAllPostCategories();
    const session = await auth();
    if(!session) return
    if(!session.user) return
    const email = session.user.email;
    const user = await getUserByEmail(email!) as User;
    return (
        <div className="min-h-screen p-24 w-full">
            <EditorBox categories={postCategories} userId={user.id}/>
        </div>
    )
}

export default Page;