import { useEffect, useState } from "react";
import type { Film } from "../types/films";
import {FilmsContext} from "./FilmsContext";
import type {ReactNode} from "react";

interface FilmsProviderProps {
    children: ReactNode;
}

export const FilmsProvider = ({ children }: FilmsProviderProps) => {
    const [films, setFilms] = useState<Film[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchFilms() {
            try {
                const response = await fetch('https://ghibliapi.vercel.app/films');

                if (!response.ok) {
                    throw new Error('Erro ao buscar filmes')
                }

                const result: Film[] = await response.json();

                setFilms(
                    result
                        .sort((a, b) => (a.title > b.title ? 1 : -1))
                        .slice(0, 10)
                );

            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message)
                } else {
                    setError('Erro desconhecido')
                }

            } finally {
                setLoading(false);
            }

        }

        fetchFilms();
    }, []);


    return (
        <>
            <FilmsContext.Provider value={{ films, loading, error }}>{children}</FilmsContext.Provider>
        </>
    )

}





