import React from 'react';
import PropTypes from 'prop-types';
import '../css/Table.css';

function Table(props) {
  const { data } = props;

  const changeDate = (date) => {
    let dateComponents = date.split('T');
    let datePieces = dateComponents[0].split("-");
    let timePieces = dateComponents[1].split(":");
    let secondsPiece = timePieces[2].split(".");
    let newDate = `${datePieces[0]}/${datePieces[1]}/${datePieces[2]} - ${timePieces[0]}:${timePieces[1]}:${secondsPiece[0]}`
    return newDate;    
  }
  
  const getPlanetNumber = (url) => {
    const urlName = url;
    const numberFromUrl = urlName.match(/(\d+)/);
    const planetNumber = `Planet-${numberFromUrl[0]}`; 
    return planetNumber;
  }

  const getFilmNumber = (film) => {
    const filmUrl = film;
    const numberFromUrl = filmUrl.match(/(\d+)/);
    const filmNumber = `Film-${numberFromUrl[0]}`; 
    return filmNumber;
  }

  const header = ['name',
    'rotation period',
    'orbital period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface water',
    'population',
    'films',
    'created',
    'edited',
    'url',
  ];

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {header.map((key, index) => (
              <th key={ index }>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((planet, index) => {
            const { name,
              rotation_period: rotationPeriod,
              orbital_period: orbitalPeriod,
              diameter,
              climate,
              gravity,
              terrain,
              surface_water: surfaceWater,
              population,
              films,
              created,
              edited,
              url } = planet;
            
            return (
              <tr key={ index }>
                <td key={ planet[index] } data-testid="planet-name">{name}</td>
                <td key={ planet[index] }>{rotationPeriod}</td>
                <td key={ planet[index] }>{orbitalPeriod}</td>
                <td key={ planet[index] }>{diameter}</td>
                <td key={ planet[index] }>{climate}</td>
                <td key={ planet[index] }>{gravity}</td>
                <td key={ planet[index] }>{terrain}</td>
                <td key={ planet[index] }>{surfaceWater}</td>
                <td key={ planet[index] }>{population}</td>              
                <td key={ planet[index] } className='films'>                  
                  <li>{ films.map((movie) => {
                      return (<ul><a href={movie}>{getFilmNumber(movie)}</a></ul>)
                    })
                  }</li>
                </td>   
                <td key={ planet[index] }>{changeDate(created)}</td>
                <td key={ planet[index] }>{changeDate(edited)}</td>
                <td key={ planet[index] }><a href={url} className='url'>{getPlanetNumber(url)}</a></td>
              </tr>);
          })}

        </tbody>

      </table>

    </div>

  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Table;
