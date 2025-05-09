import { Route, Routes } from "react-router-dom";
import ControlForm from "./ControlForm";
import Local from "./Local";
import Groups from "./Groups";
import Promise from "./Promise";
import UserDetails from "./UserDetails";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<ControlForm />} />
      <Route path="/Local" element={<Local />} />
      <Route path="/Promise" element={<Promise />} />
      <Route path="/UserDetails/:id" element={<UserDetails />} />
    </Routes>
  );
}
export default Router;
