import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { getHeroById } from "../../selectors/getHeroById";
import { heroImages } from "../../helpers/heroImages";

export const HeroScreen = () => {
  
  const { heroeId } = useParams();
  const navigate = useNavigate();


  const heroe = useMemo( () => getHeroById(heroeId), [heroeId] );

  

  if (!heroe) {
    return <Navigate to="../" />;
  }
  const pathImg = heroImages(`./${heroe.id}.jpg`)
    

  const handleRegresar = () => {
    navigate( -1 ,{
      replace: true
    });
  }
  
  return (
    <div className="container-fluid animate__animated animate__jackInTheBox ">
        <h2 className="mt-3 text-center" >{ heroe.superhero }</h2>
        <hr />
        <div className="row justify-content-center ">
            <div className="col-12  col-md-6 col-lg-4 ">
                <img 
                  width='100%' 
                  src={ pathImg } alt={ heroe.superhero } 
                  className="img-thumbnail" />
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-3">
                <h3>Alter ego: </h3><h5> { heroe.alter_ego }</h5> <br /> 
                <h4>Publisher: </h4><h5> { heroe.publisher }</h5> <br /> 
                <h4>First appearance: </h4><h5> { heroe.first_appearance }</h5> <br /> 
                <h4>Characters: </h4><h5> { heroe.characters }</h5> <br /> 
                <button 
                  type="button"
                  onClick={handleRegresar}
                  className="btn btn-outline-danger" >
                      Regresar
                </button>
            </div>

        </div>
        
       
    </div>
  )
}
