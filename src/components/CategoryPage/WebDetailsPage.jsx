import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const WebDetailsPage = ({ singleData }) => {
    console.log("ghjghjhjjhh", singleData);
    const { _id, title, Deadline, description, miniprice, maxprice } = singleData
    return (
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" >

            <div className="w-92 h-[300px] bg-green-400 border border-gray-200 rounded-lg shadow-2xl shadow-blue-500 dark:bg-gray-800 dark:border-gray-700 ">
                <h2 className="text-center font-bold my-4">{title}</h2>
                <div className="px-5">

                    <p className=" tracking-tight  text-gray-900 dark:text-white mt-6">{description}</p>

                    <div className=" mt-5 mb-5">
                        <span className="text-center text-xs font-semibold ">{Deadline}</span>
                    </div>
                    <div className="flex items-center justify-between pt-9">
                        <span className="font-medium text-gray-900 dark:text-white">Max:${maxprice}</span>
                        <span className=" font-medium text-gray-900 dark:text-white">Min:${miniprice}</span>
                        <Link to={`/webdetails/${_id}`}>
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Bid Now</button>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default WebDetailsPage;
WebDetailsPage.propTypes = {
    singleData: PropTypes.node,

}

