import FormCard from 'Componentes/FormCard';
import { Link, useParams } from 'react-router-dom';
import { Movie } from 'types/movie';

function Form() {
    
    const params = useParams();

    return (
        <FormCard movieId={`${params.movieId}`} />
       
    );
}

export default Form;