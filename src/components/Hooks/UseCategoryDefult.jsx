import { useQuery } from "@tanstack/react-query";

//teenStack quary method
const UseCategoryDefult = () => {
    const {data,isLoading,isFetching,refetch} = useQuery({
        queryKey: ['categoryes'],
        queryFn: async () => {
            const jobDataFetch = await fetch("http://localhost:5000/catograyes");
            const addJob= await jobDataFetch.json();
            return addJob;
        }
    });
    return {data,isLoading,isFetching,refetch};
};

export default UseCategoryDefult;