import swal from 'sweetalert';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const AddJob = () => {
    const { user } = useContext(AuthContext)
    console.log(user?.email);
    
    //CategoryData teenStackQuary thake
    // const {data:catograyes,} =UseCategoryDefult();
    
    const handleAddUpdate = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email?.value || "not-email"
        const title = form.title?.value || "not-title"
        const Deadline = form.Deadline?.value || "not-Deadline"
        const description = form.description?.value || "not-description"
        const category = form.category?.value || "not-catogray"
        const miniprice = parseInt(form.miniprice?.value) || 0
        const maxprice = parseInt(form.maxprice?.value )|| 0

        const addJob = { email, title, Deadline, description, category, miniprice, maxprice }
        console.log(addJob);

        //{??--DataBase Data Load--??}
        fetch("https://server-site-project.vercel.app/addjobs", {
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
                    swal("Thank You!", "You Job Added!", "success");
                }
            })

    }
    return (
        <div>
            <div className=" p-5 my-5 ">
                <h2 className="text-3xl font-extrabold text-center my-5">Add Jobs</h2>

                <form onSubmit={handleAddUpdate} className="rounded-lg bg-gradient-to-r from-green-400 to-blue-300 ...  shadow-cyan-500/50 shadow-2xl border-2 p-7">
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
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">
                                <textarea
                                    type="text"
                                    name="description"
                                    placeholder="Short description"
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
                            <select defaultValue={"Web Developent"} className="input input-bordered w-full" name="category" id="category">
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
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>
                    {/* form  photo url  row  */}
                    <div className="form-control  md:w-1/2 mb-5 ">
                        <label className="label">
                            <span className="label-text">Maximum price</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="number"
                                name="maxprice"
                                placeholder="Maximum price"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
         
                    <input type="submit" value="Add Jobs" className="btn btn-block" />
                </form>
            </div>
        </div>
    );
};

export default AddJob;