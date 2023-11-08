import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Error from "../components/ErrorPage/Error";
import LoginPage from "../components/LoginPage/LoginPage";
import SignUpPage from "../components/SignUpPage/SignUpPage";
import AddJob from "../components/AddJob/AddJob";
import MyPostJob from "../components/MyPostedJobPage/MyPostJob";
import PrivecteRoute from './PrivateRoute/PrivateRoute';
import UpdateData from "../components/MyPostedJobPage/UpdatePage/UpdateData";
import MainLayout from "../LayOut/MainLayout";
import BidOnPage from "../components/BidOnPage/BidOnPage";
import MyBids from "../components/MyBidsPage/MyBids";
import BidRequests from "../components/BidRequestsPage/BidRequests";
import BidDetailsPage from "../components/BidOnPage/BidDetailsPage";


const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/cours.json'),
            },
            {
                path: "/online-marketing/login",
                element: <LoginPage></LoginPage>,
            },
            {
                path: "/online-marketing/signup",
                element: <SignUpPage></SignUpPage>,
            },
            {
                path: "/online-marketing/addjob",
                element: <PrivecteRoute><AddJob></AddJob></PrivecteRoute>,
            },
            {
                path: "/online-marketing/postjob",
                element: <PrivecteRoute><MyPostJob></MyPostJob></PrivecteRoute>,
                       
            },
            {
                path:"/update/:id",
                element:<UpdateData></UpdateData>,
                loader:({params})=>fetch(`http://localhost:5000/singleData/${params.id}`)
            },

            {
                path:'/webdetails/:id',
                element: <BidDetailsPage></BidDetailsPage>,
                loader: ({params})=>fetch(`http://localhost:5000/singleData/${params.id}`)
            },

            {
                path:"/online-marketing/bidonpage",
                element:<BidOnPage></BidOnPage>,
                loader: ()=> fetch('http://localhost:5000/singleData')
            },
            {
                path:"/online-marketing/mybids",
                element:<PrivecteRoute> <MyBids></MyBids>,</PrivecteRoute>,
                loader: ()=>fetch('http://localhost:5000/bid-data')
            },
            {
                path:"/online-marketing/bid-requests/:email",
                element:<PrivecteRoute><BidRequests></BidRequests></PrivecteRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/bidrequest/${params.email}`)
            }
        ]
    },
]);
export default myRouter;