import { ReactComponent as Arrowleft} from 'assets/img/ArrowLeft.svg';
import './styles.css';

function Pagination(){

    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" disabled={true} >
                    <Arrowleft />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="dsmovie-pagination-button" disabled={false} >
                    <Arrowleft className="dsmovie-flip-horizontal" />
                </button>
         </div>
        </div>


    );
}
export default Pagination;