import {
    createBrowserRouter,
    Route,
    createRoutesFromElements
} from "react-router-dom";
import DashboardMainLayout from "./components/layouts/dashboard/DashboardMainLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardUiElements from "./pages/dashboard/DashboardUiElements";
import DashboardTables from "./pages/dashboard/DashboardTables";
import DashboardForms from "./pages/dashboard/DashboardForms";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<DashboardMainLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboard/ui-elements" element={<DashboardUiElements />} />
            <Route path="dashboard/tables" element={<DashboardTables />} />
            <Route path="dashboard/forms" element={<DashboardForms />} />
        </Route>
    )
)