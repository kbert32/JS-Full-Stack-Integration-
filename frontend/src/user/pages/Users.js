import UsersList from "../components/UsersList";

export default function Users() {

    const USERS = [
        {
            id: 'u1',
            name: 'Free Willy',
            image: 'https://i.pinimg.com/originals/af/96/85/af968510547b7a5aa6535a67cb8bf974.jpg',
            places: 3
        },
        {
            id: 'u2',
            name: 'Max Headroom',
            image: 'https://yt3.ggpht.com/-52c1nB8VU1Y/AAAAAAAAAAI/AAAAAAAAAAA/q9cYXYzfXH0/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
            places: 330000000
        }
];

    return <UsersList items={USERS} />;
};