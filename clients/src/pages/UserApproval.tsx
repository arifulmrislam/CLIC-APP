import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function UserApproval() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating an API call with a delay
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="p-10">
                <Skeleton height={40} width={300} className="mb-4" /> {/* Page title */}
                <Skeleton height={20} width={400} className="mb-6" /> {/* Page description */}

                {/* Table Skeleton */}
                <div className="space-y-4">
                    {Array(10).fill(0).map((_, index) => (
                        <div key={index} className="flex items-center space-x-4">
                            <Skeleton circle width={50} height={50} /> {/* Profile Image */}
                            <div className="flex-1">
                                <Skeleton height={20} width="60%" />
                                <Skeleton height={15} width="40%" />
                            </div>
                            <Skeleton height={35} width={100} /> {/* Action Button */}
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
                <p>No pending user approvals.</p>
            </div>
        </div>
    );
}
