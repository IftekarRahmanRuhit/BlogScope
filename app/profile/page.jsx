import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Profile = async() => {

    const {getUser} = getKindeServerSession()
    const user = await getUser()

    if(!user){
        redirect('https://blogscopeauth.kinde.com/auth/cx/_:nav&m:login&psid:0194949ac170ee6437d797afe880b7eb')
    }

    return (
        <div>
            <p className="text-2xl font-bold mt-10 text-center">Welcome to your profile {user?.given_name}</p>
        </div>
    );
};

export default Profile;