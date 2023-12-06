import React, { useState } from 'react';
import './Nav.css'

function Nav(prop) {

    const [count, setcount] = useState(0)

    function countmin() {

        if (count > 0) {
            prop.previousvalue()
            setcount(count - 1)
        }

    }
    function countmax() {

        if (count<8) {
            prop.nextvalue()
            setcount(count + 1)
        }
    }

    return (
        <div className='nav'>
            <button onClick={countmin}>Previous</button>
            <span>{count}</span>
            <button onClick={countmax}>Next</button>
        </div>
    )
}

export default Nav