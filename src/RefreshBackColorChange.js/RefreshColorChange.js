import React, { useEffect } from 'react'

const RefreshColorChange = () => {
    
    const colors = ['#760CE8','#F9FF33 ','#33FFFF' , '#4782B1', '#E8890C','#9633FF ']
    
    useEffect(() => {
        const MakeBgColor = () => {
        document.body.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)]
        }
        MakeBgColor()
    },[colors])
    return (
        <div>
            <h1>Refresh the page to change the  color</h1>
        </div>
    )
}

export default RefreshColorChange
