const Chalange = ({ color, setColor }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            {color ? (
                    <section 
                        className="square"
                        style={{ backgroundColor: color }}
                    >
                        <h2>{color ? color : "Empty Value"}</h2>
                    </section>
                ) : (
                    <label style= {{ backgroundColor: 'black' }}>
                        black
                    </label>
                )
            }
            <p></p>
            <input
                onChange={(e) => setColor(e.target.value)}
            />
        </form>
        
    )
}

Chalange.defaultProps = {
    color: "black"
}

export default Chalange