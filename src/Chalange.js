import LineItem from "./LineItem"
const Chalange = ({ items }) => {
    return (
        <ul>
            {items && items.map((item) => (
                    < LineItem
                        key={item.id}
                        item={item}
                    />     
            ))}
        </ul>
    )
}

Chalange.defaultProps = {
    color: "black"
}

export default Chalange