import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "@/pages/Login";
import AdminDashboard from "@/pages/AdminDashboard";
import UserSignUpApproval from "@/pages/UserApproval";
import ApproveEventUsers from "@/pages/EventApproval";
import CreateEvent from "@/pages/CreateEvent";
import EditEvent from "@/pages/EditEvent";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />}>
                    <Route path="user-sign-up-approval" element={<UserSignUpApproval />} />
                    <Route path="approve-event-users" element={<ApproveEventUsers />} />
                    <Route path="create-event" element={<CreateEvent />} />
                    <Route path="edit-event" element={<EditEvent />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;