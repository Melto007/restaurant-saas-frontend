import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import DashBoardPage from "@/shared/pages/dashBoardPage";

export default async function Page() {
    const cookiesStore = await cookies()
    const token = cookiesStore.get('token')

    if(!token) {
        redirect('/')
    }

    return (
        <DashBoardPage />
    );
}
