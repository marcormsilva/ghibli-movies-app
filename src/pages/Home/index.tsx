import { useContext } from "react";
import { Link } from "react-router-dom";
import { FilmsContext } from "../../contexts/FilmsContext";

export const Home = () => {
    const context = useContext(FilmsContext);
    if (!context) {
        throw new Error("useContext(FilmsContext) deve ser usado dentro de um FilmsProvider");
    }

    const { films, loading, error } = context;

    return (
        <>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 bg-black min-h-screen p-6">
                {loading ? (
                    <p>Carregando Página...</p>
                ) : error ? (
                    <p>Ocorreu um erro!</p>
                ) : (

                    films.map((film) => (
                        <Link to={`/film/${film.id}`} key={film.id} className="group relative overflow-hidden rounded-md">
                            <img src={film.movie_banner} alt="Banner do Filme" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 ">
                                <h2 className="text-white font-semibold text-sm">{film.title}</h2>
                            </div>
                        </Link>
                    ))

                )}

            </div>


        </>

    )
}

