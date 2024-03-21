import React, {useState} from 'react';
import Board from "./Board";
import './App.css';
import tile from "./Tile";
import {useGameStore} from "./useGameStore";


const App: React.FC = () => {
    const {tiles, shuffleTiles, handleClick} = useGameStore();
    // const initialTiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
    // const [tiles, setTiles] = useState(initialTiles)
    // mix tiles
    // const shuffleTiles = () => {
    //     const shuffledTiles = [...initialTiles]
    //     for (let i = shuffledTiles.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [shuffledTiles[i], shuffledTiles[j]] = [shuffledTiles[j], shuffledTiles[i]];
    //     }
    //     setTiles(shuffledTiles)
    // }
    // move tiles when click
    // const canMoveTile = (index: number) => {
    //     const emptyIndex = tiles.indexOf(0);
    //     const row = Math.floor(emptyIndex / 4);
    //     return (
    //         (index === emptyIndex - 4 && row > 0) || // check  can go up
    //         (index === emptyIndex + 4 && row < 3) || // check  can go down
    //         (index === emptyIndex - 1 && index % 4 !== 3) || // check  can go left
    //         (index === emptyIndex + 1 && index % 4 !== 0) // check  can go right
    //     )
    // }
    // check if/where can move func
    // const handleClick = (index: number) => {
    //     if (canMoveTile(index)) {
    //         const newTiles = [...tiles];
    //         const emptyIndex = newTiles.indexOf(0);
    //         [newTiles[index], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[index]];
    //         setTiles(newTiles);
    //         if(isGameComplete(newTiles)) {
    //             alert('You win!')
    //         }
    //     }
    // }
    // check if game is over
    // const isGameComplete = (currentTiles: number[]) => {
    //     for (let i = 0; i < currentTiles.length -1; i++) {
    //         if (currentTiles[i] !== i + 1) {
    //             return false
    //         }
    //     }
    //     return true;
    // }

    return (
        <div className="App">
            <div className='tile-text'>
                <h1 >15 pazzle game</h1>
                <button onClick={shuffleTiles}>Shuffle</button>
            </div>

            <Board
                tiles={tiles}
                handleClick={handleClick}
            />
        </div>
    );
}

export default App;
