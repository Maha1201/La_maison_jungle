import React from "react"

export const AffichePlant = (props) => {

    return < div >
        {props.data.name}
        {props.data.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
        {props.data.light}
        {props.data.water}
    </div >
}