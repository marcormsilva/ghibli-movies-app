import { createContext } from "react";
import type { Film } from "../types/films";

export interface FilmContextType {
    films: Film[];
    loading: boolean;
    error: string | null;
}

export const FilmsContext = createContext<FilmContextType | undefined>(undefined);

