import { useLoaderData } from "react-router-dom";


const MyBids = () => {
    const myBidData = useLoaderData();
    console.log(myBidData);
   
    fetch('https://server-site-project.vercel.app',{
        method: 'POST',
        headers:{
            "content-type": "appliction/json"
        },
        body: JSON.stringify()
    })

    return (
        <div className="mt-10">
            <h2 className="text-center text-2xl font-bold">My Bids Jobs :{}</h2>
            {
              
                    <div className="overflow-x-auto mt-2">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Job Title</th>
                                    <th>Email</th>
                                    <th>Deadline</th>
                                    <th>Status</th>
                                    <th><button>Complete</button></th>
                                </tr>
                            </thead>
                            <tbody>
                           {
                            myBidData?.map((bidData, index) => 
                            <tr key={index}>
                                    <th >{index+1}</th>
                                    <td>{bidData?.title}</td>
                                    <td>{bidData?.userEmail}</td>
                                    <td>{bidData?.Deadline}</td>
                                    <td>{bidData?.status}</td>
                                    <th><button>Complete</button></th>
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

export default MyBids;