import { useQuery } from "@tanstack/react-query";

const BidEmail = () => {
    
    const {data,isLoading,isFetching,refetch} = useQuery({
        queryKey: ["bids"],
        queryFn: async () => {
            const jobDataFetch = await fetch('http://localhost:5000/singleData');
            const addJob= await jobDataFetch.json();
            return addJob;
        }
    });
    return (data,isLoading,isFetching,refetch);
};

export default BidEmail;