import {create} from 'zustand'

interface GameStore {
    tiles: number[];
    shuffleTiles: () => void;
    handleClick: (index: number) => void;
}

export const useGameStore = create<GameStore>((set) => ({
    tiles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0],

    shuffleTiles: () => {
        set((state) => {

            const shuffledTiles = [...state.tiles]
            for (let i = shuffledTiles.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledTiles[i], shuffledTiles[j]] = [shuffledTiles[j], shuffledTiles[i]];
            }
            return {
                ...state, tiles: shuffledTiles
            }

        })
    },

    handleClick: (index: number) => {
        set((state) => {
            const {tiles} = state;
            const emptyIndex = tiles.indexOf(0);

            if (canMoveTile(index, emptyIndex)) {
                const newTiles = [...tiles];
                [newTiles[index], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[index]];
                if(isGameComplete(newTiles)) {
                    alert('You win!')
                }
                return {...state, tiles: newTiles}
            }
            return state;
        })

    }

}))


const canMoveTile = (index: number, emptyIndex: number) => {
    // const emptyIndex = tiles.indexOf(0);
    const row = Math.floor(emptyIndex / 4);
    return (
        (index === emptyIndex - 4 && row > 0) || // check  can go up
        (index === emptyIndex + 4 && row < 3) || // check  can go down
        (index === emptyIndex - 1 && index % 4 !== 3) || // check  can go left
        (index === emptyIndex + 1 && index % 4 !== 0) // check  can go right
    )
}

const isGameComplete = (currentTiles: number[]) => {
    for (let i = 0; i < currentTiles.length -1; i++) {
        if (currentTiles[i] !== i + 1) {
            return false
        }
    }
    return true;
}
