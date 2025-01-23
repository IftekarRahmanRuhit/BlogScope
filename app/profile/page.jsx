import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

const Profile = () => {

    const {getUser} = getKindeServerSession()
    const user = getUser()
    return (
        <div>
            <p>Welcome to your profile {user?.given_name}</p>
        </div>
    );
};

export default Profile;