import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const fakeUsers = [
    {
        user_id: "1",
        username: "john_doe",
        email: "john.doe@example.com",
        gender: "M",
        first_name: "John",
        last_name: "Doe",
        profile_picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0YuTzeceS0GBSlQNED5Aj08mBKucsLWa18w&s",
        city: "New York",
        ques_ans: { "Hobby": "Reading", "Favorite Color": "Blue" },
        interest: ["Movies", "Coding"],
        status: false,
        createdAt: new Date().toLocaleDateString(),
    },
    {
        user_id: "2",
        username: "jane_smith",
        email: "jane.smith@example.com",
        gender: "F",
        first_name: "Jane",
        last_name: "Smith",
        profile_picture: "https://instaprofilebio.com/wp-content/uploads/2024/08/dp-for-girls-attitude-anime_128.webp",
        city: "Los Angeles",
        ques_ans: { "Hobby": "Cooking", "Favorite Color": "Red" },
        interest: ["Music", "Traveling"],
        status: false,
        createdAt: new Date().toLocaleDateString(),
    },
    {
        user_id: "3",
        username: "mike_jones",
        email: "mike.jones@example.com",
        gender: "M",
        first_name: "Mike",
        last_name: "Jones",
        profile_picture: "https://media.istockphoto.com/id/1265176370/photo/portrait-of-a-confident-young-businessman.jpg?s=612x612&w=0&k=20&c=Hr5Rn3WlBied-o4Qu2LiRc6wP_eHI8UMG9rl1v-_a9s=",
        city: "Chicago",
        ques_ans: { "Hobby": "Gaming", "Favorite Color": "Green" },
        interest: ["Sports", "Photography"],
        status: true,
        createdAt: new Date().toLocaleDateString(),
    },
    {
        user_id: "4",
        username: "emily_williams",
        email: "emily.williams@example.com",
        gender: "F",
        first_name: "Emily",
        last_name: "Williams",
        profile_picture: "https://img.freepik.com/free-photo/young-female-standing-near-window-home_1301-2230.jpg",
        city: "Houston",
        ques_ans: { "Hobby": "Painting", "Favorite Color": "Yellow" },
        interest: ["Art", "Fashion"],
        status: false,
        createdAt: new Date().toLocaleDateString(),
    },
    {
        user_id: "5",
        username: "david_brown",
        email: "david.brown@example.com",
        gender: "M",
        first_name: "David",
        last_name: "Brown",
        profile_picture: "https://media.istockphoto.com/id/1016761216/photo/portrait-concept.jpg?s=612x612&w=0&k=20&c=JsGhLiCeBZs7NeUY_3wjDlLfVkgDJcD9UCXeWobe7Ak=",
        city: "Phoenix",
        ques_ans: { "Hobby": "Cycling", "Favorite Color": "Black" },
        interest: ["Outdoor Activities", "Technology"],
        status: true,
        createdAt: new Date().toLocaleDateString(),
    },
    {
        user_id: "6",
        username: "olivia_garcia",
        email: "olivia.garcia@example.com",
        gender: "F",
        first_name: "Olivia",
        last_name: "Garcia",
        profile_picture: "https://t3.ftcdn.net/jpg/00/29/99/12/360_F_29991276_BKW0CTORRey0UN43U2NKXOAfB2bD3Ez4.jpg",
        city: "Philadelphia",
        ques_ans: { "Hobby": "Writing", "Favorite Color": "Purple" },
        interest: ["Literature", "Cooking"],
        status: false,
        createdAt: new Date().toLocaleDateString(),
    }
];

export default function UserApproval() {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setUsers(fakeUsers);
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="p-10">
                <Skeleton height={40} width={300} className="mb-4" />
                <Skeleton height={20} width={400} className="mb-6" />

                <div className="space-y-4">
                    {Array(10).fill(0).map((_, index) => (
                        <div key={index} className="flex items-center space-x-4">
                            <Skeleton circle width={50} height={50} />
                            <div className="flex-1">
                                <Skeleton height={20} width="60%" />
                                <Skeleton height={15} width="40%" />
                            </div>
                            <Skeleton height={35} width={100} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold">User Sign-Up Approval</h1>
            <p className="mt-2">Manage user sign-up requests here.</p>

            <div className="mt-6 border p-4 rounded-lg shadow-md">
                {users.length > 0 ? (
                    <ul className="space-y-4">
                        {users.map(user => (
                            <li key={user.user_id} className="flex items-center p-4 border-b">
                                <img
                                    src={user.profile_picture}
                                    alt={user.username}
                                    className="w-14 h-14 rounded-full"
                                />
                                <div className="ml-4 flex-1">
                                    <p className="font-semibold">{user.first_name} {user.last_name}</p>
                                    <p className="text-sm text-gray-500">{user.email} • {user.city}</p>
                                </div>
                                <button className="border border-green-500 text-green-500 px-4 py-2 rounded-lg mr-2 transition duration-200 hover:bg-green-100 cursor-pointer">
                                    Approve
                                </button>
                                <button className="border border-red-500 text-red-500 px-4 py-2 rounded-lg transition duration-200 hover:bg-red-100 cursor-pointer">
                                    Reject
                                </button>

                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No pending user approvals.</p>
                )}
            </div>
        </div>
    );
}
