import { useQuery } from "@tanstack/react-query";

const UserEmail = () => {
    const {data,isLoading,isFetching,refetch} = useQuery({
        queryKey: ['UserEmails'],
        queryFn: async () => {
            const jobDataFetch = await fetch("https://server-site-project.vercel.app/bid-data");
            const addJob= await jobDataFetch.json();
            return addJob;
        },
      
    });
    return{data,isLoading,isFetching,refetch};
};


export default UserEmail;
