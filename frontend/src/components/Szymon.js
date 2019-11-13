import React from 'react';

const Szymon = ({name, surname, iq}) => {
    return (
        <div>
            <p>Imie: {name}</p>
            <p>Nazwisko: {surname}</p>
            <p>IQ: {iq}</p>
        </div>

    )
}

export default Szymon;