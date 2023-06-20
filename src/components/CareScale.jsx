function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? '☀️' : '💧'

    return (
        <div onClick={() => alert(`${scaleValue === 1 ? 'Peu' : scaleValue === 2 ? 'Modérément' : 'Beaucoup'} ${careType === 'light' ? 'de lumière' : `d'eau`}`)}>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

export default CareScale