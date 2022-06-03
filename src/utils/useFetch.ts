import {useState} from "react";

export default function useFetching(callback:any) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async () => {
        try {
            setIsLoading(true);
            await callback();
        } catch (e) {
            setError((e as Error).message);
        } finally {
            setIsLoading(false);
        }
    }
    return [fetching, isLoading, error] as const;
}