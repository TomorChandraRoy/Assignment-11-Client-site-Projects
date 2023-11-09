import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import {useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const UpdateData = () => {
    const updateData = useLoaderData();
    console.log(updateData);
    const { _id, title, Deadline, description, miniprice, maxprice } = updateData;
 
     const { user, loading } = useContext(AuthContext);
     console.log(user?.email);

     const navigate = useNavigate()

     const navigation = useNavigation();
     // console.log(navigation);
     if (navigation.loading == 'loading')
         return loading;

     // !!--TenStackQuary diye data load -- and hooks page thake Ascha!!
  
 
    const handleUpdate = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email?.value || "not-email"
        const title = form.title?.value || "not-title"
        const Deadline = form.Deadline?.value || "not-Deadline"
        const description = form.description?.value || "not-description"
        const catogray = form.catogray?.value || "not-catogray"
        const miniprice = form.miniprice?.value || "not-miniprice"
        const maxprice = form.maxprice?.value || "not-maxprice"

        const updateJob = { email, title, Deadline, description, catogray, miniprice, maxprice }
        // console.log(updateJob);
        const response = await axios.patch(`https://server-site-project.vercel.app/updateJob/${_id}`, updateJob)
        const data = await response.data;
        console.log(data);
        if(data.modifiedCount>0){
            swal("Thank You!", "You Job Data Update!", "success"); 
        }
        navigate('/online-marketing/postjob')
    };
    return (
        <div>
            <div className=" p-5 my-5 ">
                <h2 className="text-3xl font-extrabold text-center my-5">Update Jobs</h2>

                <form onSubmit={handleUpdate} className="rounded-lg bg-gradient-to-r from-teal-400 to-red-300 ...  shadow-red-500/50 shadow-2xl border-2 p-7">
                    {/* form name and quantity row  */}
                    <div className="md:flex gap-5 mb-5 ">
                        <div className="form-control md:w-1/2">
                            <label className="label ">
                                <span className="label-text"> Email</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="email"
                                    name="email"
                                    defaultValue={user?.email}
                                    readOnly
                                    placeholder="Enter Your email"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Job title</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Job title"
                                    defaultValue={title}
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
                                    type="datetime-local"
                                    name="Deadline"
                                    placeholder="Deadline "
                                    defaultValue={Deadline}
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">
                                <textarea
                                    type="text"
                                    name="description"
                                    placeholder="Short description"
                                    defaultValue={description}
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>
                    {/* form catogray  and details row  */}
                    <div className="md:flex gap-5 mb-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                 <select className="input input-bordered w-full" name="catogray" id="">
                                 <option value="Web Developent">Web Developent</option>
                                   <option value="Graphics Design">Graphics Design</option>
                                   <option value="digital marketing">digital marketing</option>
                                 </select>
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
                                    defaultValue={miniprice}
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>
                    <div className="form-control  md:w-1/2 mb-5 ">
                        <label className="label">
                            <span className="label-text">Maximum price</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="number"
                                name="maxprice"
                                placeholder="Maximum price"
                                defaultValue={maxprice}
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    {/* <div className="mb-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text"> Photo url</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="url"
                                name="url"
                                placeholder="Enter photo url"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div> */}
                    <input type="submit" value="Update Jobs" className="btn btn-block" />
                </form>
            </div>
        </div>
    );
};

export default UpdateData;