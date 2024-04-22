import { EditModalUser } from "@/app/ui/admin/manage-user/edit-user";
import { User } from "@/helpers/definitions";
import { getUserById } from "@/lib/actions-user";

export default async function Page({
    params: { id }
} : {
    params: { id: number }
}) {
    const user = await getUserById(id) as User;
    // return <EditModalUser user={user}/>
    return <EditModalUser user={user}/>
}