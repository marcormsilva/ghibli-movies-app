import { useContext } from "react";
import { useParams } from "react-router-dom";
import { FilmsContext } from "../../contexts/FilmsContext";

export const FilmDetails = () => {
    const { id } = useParams();

    const context = useContext(FilmsContext);
    if (!context) {
        throw new Error("useContext(FilmsContext) deve ser usado dentro de um FilmsProvider");
    }

    const { films } = context;

    const film = films.find((f) => f.id === id);

    if (!film) {
        return <p>Filme não encontrado</p>
    }

    const scoreColor = Number(film.rt_score) >= 70
        ? "bg-green-500"
        : Number(film.rt_score) >= 50
            ? "bg-yellow-500"
            : "bg-red-500"

    return (

        <div className="min-h-screen bg-black text-white flex justify-center p-6">
            <div className="max-w-3xl w-full">
                <img src={film.movie_banner} alt={film.title} className="w-full  h-80 object-cover rounded-lg" />

                <div className="mt-6 space-y-4 bg-zinc-900 rounded ">
                    <h1 className="text-3x1 font-bold">{film.title}</h1>
                    <p className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-300 pt-2 border-gray-800 leading-relaxed">{film.description}</p>

                    <div>
                        <p>
                            <span className="text-zinc-500">Diretor:</span>
                            <span className="text-zinc-200"> {film.director}</span>

                        </p>

                        <p>
                            <span className="text-zinc-500">Produtor:</span>
                            <span className="text-zinc-200"> {film.producer}</span>

                        </p>

                        <p>
                            <span className="text-zinc-500">Data de Lançamento:</span>
                            <span className="text-zinc-200"> {film.release_date}</span>

                        </p>
                    </div>

                    <span className={`${scoreColor} text-white text-sm font-bold px-3 py-1 rounded-full`}>Rotten Tomatoes: 🍅{film.rt_score}%</span>
                </div>

            </div>
        </div>

    )
}


