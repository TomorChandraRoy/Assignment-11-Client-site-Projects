import { useQuery } from "@tanstack/react-query";

const CategoryData = () => {
    const {data,isLoading,isFetching,refetch} = useQuery({
        queryKey: ['categoryes'],
        queryFn: async () => {
            const jobDataFetch = await fetch('https://server-site-project.vercel.app/addjobs');
            const addJob= await jobDataFetch.json();
            return addJob;
        }
    });
    return { data,isLoading,isFetching,refetch};
};

export default CategoryData;