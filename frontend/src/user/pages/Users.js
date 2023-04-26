import { useEffect, useState } from "react";

import UsersList from "../components/UsersList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

export default function Users() {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [loadedUsers, setLoadedUsers] = useState();

    useEffect(() => {
        async function sendRequest() {
            setIsLoading(true);
            try {
                const response = await fetch('http://localhost:5000/api/users');
                const responseData = await response.json();

                if (!response.ok) {
                    throw new Error(responseData.message);
                }

                setLoadedUsers(responseData.users);
                
            } catch (err) {
                setError(err.message);
            }
            setIsLoading(false);
        };

        sendRequest();
    }, []);

    function errorHandler() {
        setError(null);
    };
    
    return (
        <>
            <ErrorModal error={error} onClear={errorHandler} />
            {isLoading && <div className='center'><LoadingSpinner asOverlay /></div>}
            {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
        </>
    );
};




//     const USERS = [
//         {
//             id: 'u1',
//             name: 'Free Willy',
//             image: 'https://i.pinimg.com/originals/af/96/85/af968510547b7a5aa6535a67cb8bf974.jpg',
//             places: 3
//         },
//         {
//             id: 'u2',
//             name: 'Max Headroom',
//             image: 'https://yt3.ggpht.com/-52c1nB8VU1Y/AAAAAAAAAAI/AAAAAAAAAAA/q9cYXYzfXH0/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
//             places: 330000000
//         }
// ];