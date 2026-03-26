function Mode({ onMode, mode }) {

    const handleClick = () => {
        if (mode === 'set1') {
            onMode('set2')
        } else {
            onMode('set1')
        }
    }

    return ( <>
    <button onClick={handleClick}>Mode</button>
    </> );
}

export default Mode;