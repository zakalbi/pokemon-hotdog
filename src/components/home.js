import {useEffect, useState} from 'react';

import Card from './card'

const Home = () => {
    const [data, setData] = useState();
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");

    const initData = async() => {
        const response = await fetch(url);
        const pokemon = await response.json();

        setData(pokemon);
    };

    useEffect(() => {
        initData();
    }, [url]);
    console.log(data)

    return (
        <div>
            {data?.previous && (
            <button onClick={() => setUrl(data.previous)}>Previous</button>)}
            {data?.next && (
            <button onClick={() => setUrl(data.next)}>Next</button>)}
            
            {data?.results.map((pokemon, index) => (
                <Card name={pokemon.name} key={index} />
            ))}
        </div>
    );
};

export default Home; 