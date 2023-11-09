import { useLoaderData } from "react-router-dom";

const BidRequests = () => {
    const bidRequest= useLoaderData();
    console.log(bidRequest);
    const handleAccept = ({id}) =>{
        fetch(`https://server-site-project.vercel.app/updateStatus/${id}`,{
            method: "PATCH",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify({status:"accepted"})

        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    const handleReject = ({id}) =>{
        fetch(`https://server-site-project.vercel.app/updateStatus/${id}`,{
            method: "PATCH",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify({status:"rejected"})

        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div>
            <h2 className="text-center text-2xl font-bold">My Bids Jobs :{}</h2>
            {
              
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Job Title</th>
                                    <th>Email</th>
                                    <th>Deadline</th>
                                    <th>Status</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                            {
                            bidRequest.map((bidData, index) => 
                            <tr key={index}>
                                    <th >{index+1}</th>
                                    <td>{bidData?.title}</td>
                                    <td>{bidData?.userEmail}</td>
                                    <td>{bidData?.Deadline}</td>
                                    <td>{bidData?.status}</td>
                                    <th><button onClick={()=>handleAccept(bidData._id)}>Accept</button></th>
                                    <th><button onClick={()=>handleReject(bidData._id)}>Reject</button></th>
                                </tr>
                            )
                           }
                            </tbody>
                        </table>
                    </div>
                
            }
        </div>
    );
};

export default BidRequests;

