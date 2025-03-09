import Cookies from "js-cookie";

//need to replace with actual API call
export const loginAdmin = async (email: string, password: string) => {
    const ADMIN_EMAIL = "admin@gmail.com";
    const ADMIN_PASSWORD = "admin";


    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        Cookies.set('admin_token', 'secureRandomToken1234');
        return { success: true };
    } else {
        return { success: false, error: "Invalid email or password" }
    }
};

export const logoutAdmin = () => {
    Cookies.remove("admin_token");
};


export const isAuthenticated = () => {
    return !!Cookies.get("admin_token")
}