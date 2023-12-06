import React from 'react';
import Card from './Card';
import Header from './Header';
import Nav from './Nav';
import { useState } from 'react';
import { useGlobalContext } from "./Context";

function Home() {
    const { data } = useGlobalContext();
  
    const [nxt, setnxt] = useState(12);
    const [prev, setprev] = useState(0)

    function next() {
        setnxt(nxt + 12)
        setprev(prev + 12)
    }

    function previous() {
        setprev(prev - 12)
        setnxt(nxt - 12)
    }

    return (
        <div>
            <Header />
            {
                data.slice(prev, nxt).map((e) => {       
                    return <>
                        <Card id={e.id} title={e.title} body={e.body} />
                    </>
                })
            }
            <Nav previousvalue={previous} nextvalue={next} />
        </div>
    )
}

export default Home