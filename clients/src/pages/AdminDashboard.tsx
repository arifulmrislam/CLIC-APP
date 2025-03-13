'use client';
import { useEffect, useState } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { isAuthenticated, logoutAdmin } from '@/context/auth';
import { Button } from '@/components/ui/button';
import { FaBars, FaEdit } from 'react-icons/fa';
import { SiGnuprivacyguard } from 'react-icons/si';
import { FcApprove } from 'react-icons/fc';
import { MdEventNote } from 'react-icons/md';
import { TbLogout } from "react-icons/tb";

export default function AdminDashboard() {
    const navigate = useNavigate();
    const location = useLocation();
    const [sidebarCollapsed, setSidebarCollapsed] = useState(window.innerWidth < 768);
    const [showLogout, setShowLogout] = useState(false);

    useEffect(() => {
        if (!isAuthenticated()) {
            navigate('/login');
        }
    }, [navigate]);

    useEffect(() => {
        const handleResize = () => {
            setSidebarCollapsed(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLogout = () => {
        logoutAdmin();
        navigate('/login');
    };

    const isBaseRoute = location.pathname === '/admin-dashboard';

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full bg-[#3d1f98] text-white p-4 transition-all duration-300 ${sidebarCollapsed ? 'w-16' : 'w-64'
                    }`}
            >
                <button
                    onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                    className="mb-4 text-white text-xl flex justify-center mt-6 ml-2"
                >
                    <FaBars />
                </button>

                <ul className='space-y-4 mt-8'>
                    <li
                        onClick={() => navigate('/admin-dashboard/user-sign-up-approval')}
                        className='flex items-center p-2 cursor-pointer font-semibold transition-all duration-300'
                    >
                        <SiGnuprivacyguard className='w-6 h-6 min-w-[24px] min-h-[24px] flex-shrink-0' />
                        {!sidebarCollapsed && (
                            <span className='ml-4 whitespace-nowrap'>
                                User Sign-Up Approval
                            </span>
                        )}
                    </li>
                    <li
                        onClick={() => navigate('/admin-dashboard/approve-event-users')}
                        className='flex items-center p-2 cursor-pointer font-semibold transition-all duration-300'
                    >
                        <FcApprove className='w-6 h-6 min-w-[24px] min-h-[24px] flex-shrink-0' />
                        {!sidebarCollapsed && (
                            <span className='ml-4 whitespace-nowrap'>
                                Approve Event Users
                            </span>
                        )}
                    </li>
                    <li
                        onClick={() => navigate('/admin-dashboard/create-event')}
                        className='flex items-center p-2 cursor-pointer font-semibold transition-all duration-300'
                    >
                        <MdEventNote className='w-6 h-6 min-w-[24px] min-h-[24px] flex-shrink-0' />
                        {!sidebarCollapsed && (
                            <span className='ml-4 whitespace-nowrap'>Create Event</span>
                        )}
                    </li>
                    <li
                        onClick={() => navigate('/admin-dashboard/edit-event')}
                        className='flex items-center p-2 cursor-pointer font-semibold transition-all duration-300'
                    >
                        <FaEdit className='w-6 h-6 min-w-[24px] min-h-[24px] flex-shrink-0' />
                        {!sidebarCollapsed && (
                            <span className='ml-4 whitespace-nowrap'>Edit Event</span>
                        )}
                    </li>
                    <li
                        className="flex items-center p-2 cursor-pointer font-semibold transition-all duration-300 absolute bottom-10"
                        onClick={handleLogout}
                    >
                        <TbLogout className="w-6 h-6" />
                        {!sidebarCollapsed && <span className="ml-4">Logout</span>}
                    </li>
                </ul>

            </div>

            {/* Main Content */}
            <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
                {/* Top Bar */}
                <div className="bg-white text-gray-800 p-4 flex justify-between items-center shadow-lg">
                    <div></div>
                    <div className="relative ml-auto">
                        <button onClick={() => setShowLogout(!showLogout)} className="text-md font-semibold">
                            Admin
                        </button>
                        {showLogout && (
                            <div className="absolute right-0 mt-2 bg-white p-2 shadow-lg rounded-lg">
                                <Button onClick={handleLogout} className="text-black bg-white hover:bg-gray-100 cursor-pointer">
                                    Logout
                                </Button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Page Content */}
                <div className="flex-1 p-10 overflow-y-auto">
                    {isBaseRoute && (
                        <div className="p-10">
                            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                            <p>Welcome, Admin! Manage users and settings here.</p>
                        </div>
                    )}
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
