import { useQuery } from "@tanstack/react-query";

const BidEmail = () => {
    
    const {data,isLoading,isFetching,refetch} = useQuery({
        queryKey: ["bids"],
        queryFn: async () => {
            const jobDataFetch = await fetch('https://server-site-project.vercel.app/singleData');
            const addJob= await jobDataFetch.json();
            return addJob;
        }
    });
    return (data,isLoading,isFetching,refetch);
};

export default BidEmail;