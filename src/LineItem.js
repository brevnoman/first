import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({ item }) => {
    return (
        <li className="item">
            {JSON.stringify(item)}
        </li>
    )
}


export default LineItem