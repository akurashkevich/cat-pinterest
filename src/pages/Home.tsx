import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from "react-intersection-observer";
import {fetchCats} from "../api/catsApi.ts";
import CatCard from "../components/CatCard.tsx";
import {Cat} from "../types/Cat.ts";
import {useEffect} from "react";

export default function Home() {

    const { data, error, status, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['cats'],
        queryFn: fetchCats,
        initialPageParam: 0,
        getNextPageParam: lastPage => lastPage,
    })

    const { ref, inView } = useInView({
        threshold: 0.5,
    })

    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [inView, fetchNextPage])

    return status === "pending" ? ( <div>Загружаем еще котиков...</div> ) :
            status === "error" ? ( <div>{error.message}</div> ) :
        ( <div className="card-container">
            {
                data?.pages.map((cats: Cat[]) => cats.map((cat, index) => {
                     return ( <CatCard ref={index === cats.length - 1 ? ref : null} id={cat.id} url={cat.url} /> )
                }))
            }
            {isFetchingNextPage && <div>Загружаем еще котиков...</div>}
        </div> )
    };