
// import { useLoaderData } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import WebDetailsPage from './WebDetailsPage';

const WebDetails = ({category}) => {

    const [item, setItem] = useState([]);
    useEffect(()=>{
        fetch(`https://server-site-project.vercel.app/getJobsbycategory/${category}`)
        .then(res => res.json())
        .then(data => setItem(data))
    },[category])

    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:gap-5 gap-10 mt-20  p-5 rounded'>
            {
                item?.map(singleData=><WebDetailsPage singleData={singleData}  key={singleData._id}></WebDetailsPage>)
            }
        </div>
    );
};

export default WebDetails;
WebDetails.propTypes = {
    category: PropTypes.node,
    
}
