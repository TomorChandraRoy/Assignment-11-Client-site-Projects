import { useLoaderData } from "react-router-dom";
import {  MdOutlineAssignmentInd} from 'react-icons/md';
import { BiTime } from 'react-icons/bi';
import { FiBook } from 'react-icons/fi';



const Upcoming = () => {
    const data = useLoaderData();
    console.log(data);
    return (
      <>
       <h2 className="text-center text-2xl font-extrabold my-5">Upcoming Coures </h2>
       <div className="bg-orange-300 my-5 rounded-lg">
            <div className=" grid lg:grid-cols-4 md:grid-cols-2 gap-5   mx-auto p-6">
                {
                    data.map(updata => <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" key={updata.id} className="card card-compact   bg-base-100 shadow-2xl shadow-lime-400">
                    <figure><img src={updata.image} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{updata.title}</h2>
                      <p>{updata.lecturer}</p>
                      <div className="flex gap-5">
                      <div className="flex justify-center items-center gap-2 ">
                            <MdOutlineAssignmentInd className="w-5 h-10"/>
                            <p>{updata.men}</p>
                        </div>
                      <div className="flex justify-center items-center gap-2 ">
                            <BiTime className="w-5 h-10"/>
                            <p>{updata.time}</p>
                        </div>
                      <div className="flex justify-center items-center gap-2 ">
                            <FiBook className="w-5 h-10"/>
                            <p>{updata.men}</p>
                        </div>
                      </div>
                      <div className="card-actions justify-center">
                      
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>

        </div>
      </>
      
    );
};

export default Upcoming;

