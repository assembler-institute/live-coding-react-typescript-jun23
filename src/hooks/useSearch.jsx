import { useEffect, useState, useCallback, useMemo } from 'react';

function useSearch(param) {
    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/sofas?q=${param}`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setProducts(data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });

    // }, [param]);

    const fetchData = useCallback(() => {
        fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/sofas?q=${param}`)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [param]);

    useMemo(() => fetchData(), [fetchData]);

    return [products];
}

export default useSearch;