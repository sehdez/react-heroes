import { useNavigate, useLocation } from 'react-router-dom'
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName'
import { HeroCard } from '../heros/HeroCard'
import { useMemo } from 'react'

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  
  const [ formValue, handleChange ] = useForm({searchText:q})
  const { searchText } = formValue;

  const heroesFilted = useMemo( () => getHeroesByName( q ), [q]);

  const handleSubmit = (e) => {
    e.preventDefault()
    if( searchText.trim().length === 0 ){
      return
    }

    navigate(`?q=${ searchText }`);
  }
  return (
    <div className='container-fluid' >
        <h2 className='text-center'> Buscar heroe </h2>
        <hr />
        <div className='row'>
          <form 
            className='col-12 col-md-4 ' 
            onSubmit={ handleSubmit }
            autoComplete='off'>
              <input
                  type="text"
                  name="searchText"
                  className="form-control mt-2 mb-2"
                  placeholder="Buscar un héroe"
                  onChange={ handleChange }
                  value={ searchText }
              />
              <button
                  type="submit"
                  className="btn btn-primary mb-4">
                  Buscar
              </button> 
          </form>
          <div className='col-12 col-md-8'>
            {/* Mostrar mensaje de error */}
          {
              (heroesFilted.length === 0 && q.length> 0 ) &&
                  <div className='alert alert-danger p-0 pl-2'>
                    <h3>No hay resultados</h3>
                  </div>
            }
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            {
              // Mostrar heroes filtrados
             (heroesFilted.length > 0 ) &&
                  heroesFilted.map(hero => (
                      <HeroCard key={hero.id} { ...hero } />
                  ))
            }
            </div>
          </div>
       </div>
    </div>
  )
}
