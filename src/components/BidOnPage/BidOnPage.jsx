
import { useLoaderData } from "react-router-dom";
import BidDetailsPage from "./BidDetailsPage";

const BidOnPage = () => {

    const bidData= useLoaderData();
  
    return (
        <div>
            {
            bidData?.map(single => <BidDetailsPage single={single} key={single._id} ></BidDetailsPage>)
            }
        </div>
            
        
    );
};

export default BidOnPage;

// bid jsx

