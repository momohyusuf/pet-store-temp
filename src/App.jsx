import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AccountSettings from "./pages/AccountSettings.jsx";
import PetDetails from "./pages/PetDatails.jsx";
import Store from "./pages/Store.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<h1>Welcome</h1>} />
          <Route path="about" element={<About />} />
          <Route path="contact-us" element={<Contact />} />

          <Route path="store">
            <Route index element={<Store />} />

            {/* example of a dynamic route */}
            <Route path=":petId" element={<PetDetails />} />
          </Route>

          {/* example of nested route */}
          <Route path="dashboard">
            <Route index element={<Dashboard />} />
            {/* account settings is sub route of the dashboard */}
            <Route path="account-settings" element={<AccountSettings />} />
          </Route>
          {/* **** */}

          {/* handle all pages that do not exist */}
          <Route path="*" element={<div>Page does not exist</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
