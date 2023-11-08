import { useContext, } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import {  useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import swal from "sweetalert";
import PropTypes from 'prop-types';

const BidDetailsPage = () => {

    const data = useLoaderData();
    console.log(data);

    const { user, loading } = useContext(AuthContext)
    console.log(user?.email);

    const navigate = useNavigate()

    const navigation = useNavigation();
    // console.log(navigation);
    if (navigation.loading == 'loading')
        return loading;

    const handleBidProject = e => {
        e.preventDefault();
        const form = e.target;
        const userEmail = form.userEmail?.value || "not-User-email"
        const buyerEmail = form.buyerEmail?.value || "not-User-email"
        const Deadline = form.Deadline?.value || "not-Deadline"
        const miniprice = form.miniprice?.value || "not-miniprice"
        const addJob = {title:data?.title, status:"pending", userEmail, buyerEmail, Deadline, miniprice }
        console.log(addJob);

        const { BidEmail } = userEmail;
        console.log("gjfkgjkfjkgfjhkgfjkhjfgjhkgfj", BidEmail);

        //{??--DataBase Data Load--??}
        fetch("https://server-site-project.vercel.app/bid-data", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    swal("Thank You!", "Your Bid Success!", "success");
                }
                navigate('/online-marketing/mybids')
            })
    }

    return (
        <div>
            <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" >
            <div className=" mx-72 h-[350px] mt-10  border border-gray-200 rounded-lg shadow-2xl shadow-blue-500 dark:bg-gray-800 dark:border-gray-700 ">
                <h2 className="text-center font-bold mt-10">{data.title}</h2>
                <div className="px-5">

                    <p className=" tracking-tight mx-20 text-gray-900 dark:text-white mt-6">{data.description}</p>

                    <div className=" mt-5 mb-5 text-center">
                        <span className="text-center mx-20 text-xs font-semibold ">{data.Deadline}</span>
                    </div>
                    <div className="flex items-center justify-around pt-9">
                        <span className="font-medium text-gray-900 dark:text-white">Max:${data.maxprice}</span>
                        <span className=" font-medium text-gray-900 dark:text-white">Min:${data.miniprice}</span>
                    </div>
                </div>
            </div>


        </div>
            <div>
            <h2 className="text-3xl font-extrabold text-center my-5 mt-10 "> Bid Form Section </h2>
                <div className=" p-5  mb-5">
                    <form onSubmit={handleBidProject} className="rounded-lg bg-gradient-to-r from-red-500 to-blue-300 ...  shadow-red-500/50 shadow-2xl border-2 p-7">
                        {/* form name and quantity row  */}
                        <div className="md:flex gap-5 mb-5 ">
                            <div className="form-control md:w-1/2">
                                <label className="label ">
                                    <span className="label-text">userEmail</span>
                                </label>

                                <label className="input-group">

                                    <input readOnly className="input  input-bordered w-full" defaultValue={user?.email} type="email" name="userEmail" placeholder="Enter Your Email" />


                                </label>



                            </div>

                            <div className="form-control md:w-1/2">
                                <label className="label ">
                                    <span className="label-text">Buyer Email</span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="email"
                                        name="buyerEmail"
                                        value={data?.email}
                                        readOnly
                                        placeholder="Enter Your email"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                            </div>

                        </div>
                        {/* form supplier and Taste row  */}
                        <div className="md:flex gap-5 mb-5">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Deadline</span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="date"
                                        name="Deadline"
                                        placeholder="Deadline "
                                        className="input input-bordered w-full"
                                    />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Minimum price</span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="number"
                                        name="miniprice"
                                        placeholder="Minimum price"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                            </div>
                        </div>

                        {/* button hide  */}
                        <button type="submit" disabled={user?.email === data?.email} className='btn btn-block '> Bid on the project</button>



                    </form>
                </div>
            </div>
        </div>
    );
};

export default BidDetailsPage;
BidDetailsPage.propTypes = {
    single: PropTypes.node,

}