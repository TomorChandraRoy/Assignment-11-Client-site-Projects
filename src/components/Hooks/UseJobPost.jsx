import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

//teenStack quary method
const UseJobPost = () => {
    const{user}=useContext(AuthContext);
    const {data,isLoading,isFetching,refetch} = useQuery({
        queryKey: [user?.email],
        queryFn: async () => {
            const jobDataFetch = await fetch(`https://server-site-project.vercel.app/jonByEmail/?email=${user?.email}`);
            const addJob= await jobDataFetch.json();
            return addJob;
        }
    });
    return {data,isLoading,isFetching,refetch};
};

export default UseJobPost;