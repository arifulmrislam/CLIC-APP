"use client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { loginAdmin, isAuthenticated } from "../context/auth";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "../assets/CLIC__1_-removebg-preview.png";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); 

    useEffect(() => {
        if (isAuthenticated()) {
            navigate("/admin-dashboard"); 
        }
    }, [navigate]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await loginAdmin(email, password);
        if (response.success) {
            setError("");
            navigate("/admin-dashboard");
        } else {
            setError(response.error);
        }
    };

    return (
        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-1">
            <div className="flex items-center justify-center bg-gray-100 p-6 dark:bg-gray-800 lg:p-12">
                <div className="w-full max-w-md space-y-6">
                    <img src={logo} alt="Logo" height="25" className="logo logo-dark ml-40" />
                    <h1 className="text-3xl font-bold text-center mb-18">Admin Login</h1>
                    <Tabs defaultValue="login" className="w-full">
                        <TabsContent value="login">
                            <form className="space-y-4" onSubmit={handleLogin}>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="admin@example.com"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                {error && <p className="text-red-500 text-sm">{error}</p>}
                                <Button type="submit" className="w-full">
                                    Login
                                </Button>
                            </form>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
