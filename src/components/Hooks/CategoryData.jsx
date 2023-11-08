import { useQuery } from "@tanstack/react-query";

const CategoryData = () => {
    const {data,isLoading,isFetching,refetch} = useQuery({
        queryKey: ['categoryes'],
        queryFn: async () => {
            const jobDataFetch = await fetch('http://localhost:5000/addjobs');
            const addJob= await jobDataFetch.json();
            return addJob;
        }
    });
    return { data,isLoading,isFetching,refetch};
};

export default CategoryData;