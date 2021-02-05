import { useEffect, useState } from "react";

const Pokemon = ({ match }) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${match.params.name}`;
    const [data, setData] = useState();

    const initData = async () => {
        const response = await fetch(url);
        const pokemon = await response.json();

        console.log(pokemon);

        setData(pokemon);
    }

    useEffect(() => {
        initData();
    }, [])
    return (
        <div>
            <h1>POKEMON</h1>
        </div>
    );
};

export default Pokemon;