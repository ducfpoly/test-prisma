
import { TableUser } from '@/app/ui/admin/manage-user/table';
import { getAllUsers } from '@/lib/data-user';
import { User } from '@prisma/client';

const Page = async () => {
    const users: User[] = await getAllUsers();
    console.log(users);
    return (
        <div className="my-24 mx-24">
            <TableUser users={users}/>
        </div>
    );
}

export default Page;