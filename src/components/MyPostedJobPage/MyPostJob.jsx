
import UseJobPost from "../Hooks/UseJobPost";
import MyJobDetails from "./MyJobDetails";

const MyPostJob = () => {
    // const job = useLoaderData();

    // !!--TenStackQuary diye data load -- and hooks page thake Ascha!!
    const { data,  isFetching, refetch, isLoading,  } = UseJobPost();
    console.log(data, isLoading, isFetching);
  
    if (isLoading === true) {
        return isLoading
    }


    return (
        <div>
          

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5 mt-20" >
                {
                    data.map(singleJob => <MyJobDetails key={singleJob._id} singleJob={singleJob} refetch={refetch} ></MyJobDetails>)
                }
            </div>
        </div>
    );
};

export default MyPostJob;