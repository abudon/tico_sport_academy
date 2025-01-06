import {useState} from "react";
import { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';
import SearchIcon from '../../assets/icons/lord-icons/wired-outline-19-magnifier-zoom-search-hover-spin.json'
import CancelIcon from '../../assets/icons/lord-icons/system-regular-29-cross-hover-cross-1.json'

export default function Searchbar({placeholder, data}) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");


    // Search function
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };
    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };
    // Lord icon
    const playerRef = useRef(null);

    useEffect(() => {
        playerRef.current?.playFromBeginning();
    }, []);


    return(
        <>
            <div className={'search'}>
                <div className="searchInputs">
                    <input
                        type="text"
                        placeholder={placeholder}
                        value={wordEntered}
                        onChange={handleFilter}
                    />
                    <div className="searchIcon">
                        {filteredData.length === 0 ? (
                            <Player
                                colorize={'deepskyblue'}
                                onComplete={()=>playerRef.current?.playFromBeginning()}
                                size={25}
                                icon={SearchIcon}
                                ref={playerRef}>

                            </Player>
                        ) : (
                            <Player

                                size={25}
                                icon={CancelIcon}
                                ref={playerRef}
                                onClick={clearInput}>

                            </Player>
                        )}
                    </div>
                </div>
                    {filteredData.length !== 0 && (
                        <div className="dataResult">
                            {filteredData.slice(0, 15).map((value, key) => {
                                return (
                                    <a className="dataItem" href={value.link} target="_blank">
                                        <p>{value.title} </p>
                                    </a>
                                );
                            })}
                        </div>
                    )}

            </div>

        </>
    )
}
