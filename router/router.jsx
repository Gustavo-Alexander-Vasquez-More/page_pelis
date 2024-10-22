import { createBrowserRouter } from "react-router-dom";
import Index from "../src/pages";
import Peli_especifica from "../src/pages/peli_especifica";
const router = createBrowserRouter([
{ path: "/", index: true, element:<Index/>},
{ path: "/movies", index: true, element:<Peli_especifica/>}
])
export default router