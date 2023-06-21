import '../style/ColorThemeCard.css'

const ColorthemeCard = ({c1,c2,c3,Onclick}) => {

    return (
        <div onClick={Onclick} className="color-theme-card">
            <div style={{ backgroundColor:c1 }}></div>
            <div style={{ backgroundColor:c2 }}></div>
            <div style={{ backgroundColor:c3 }}></div>
        </div>
    )

}

export default ColorthemeCard