"use client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated, logoutAdmin } from "@/context/auth";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
    const navigate = useNavigate(); 
    useEffect(() => {
        if (!isAuthenticated()) {
            navigate("/login"); 
        }
    }, [navigate]);

    const handleLogout = () => {
        logoutAdmin();
        navigate("/login"); 
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p>Welcome, Admin! Manage users and settings here.</p>
            <Button onClick={handleLogout} className="mt-4">
                Logout
            </Button>
        </div>
    );
}
