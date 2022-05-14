import Pagination from "Componentes/Pagination";
import MovieCard from "Componentes/MovierCard";
import axios from "axios";
import { textChangeRangeIsUnchanged } from "typescript";
import { BASE_URL } from "utils/requests";

function listing() {

    // FORMA ERRADA
    axios.get(`${BASE_URL}/movies?size=12&page=0`)
        .then(response => {
            console.log(response.data);
        })

    return (
        <>
            <Pagination />

            <div className="Container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
       


        </>
    );

}

export default listing;