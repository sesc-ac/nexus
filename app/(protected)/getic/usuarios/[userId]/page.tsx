import { getUser } from "@/app/data-access/user";

export default async function Page({
    params
}: {
    params: Promise<{ userId: string }>
}){
    console.log('📄 PAGE - [USER ID]');

    const { userId } = await params;

    const user = await getUser(userId);

    return (
        <>
            <h2>{ user?.name }</h2>
        </>
    );
}