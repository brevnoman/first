import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import AddItem from './AddItem'
import SearchItem from './SearchItem'
import apiRequest from './apiRequest'
import Chalange from './Chalange'
import { useState, useEffect } from "react"
import Button from './Button'

function App() {
  const [ pageContent, setPageContent ] = useState('');
  const CHALANGE_API_URL = 'https://jsonplaceholder.typicode.com/';
  const API_URL = 'http://localhost:3500/items';
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ reqType, setReqType ] = useState('users');
  console.log(items)


  const handleContentChange = (newContent) => {
    setPageContent(newContent)
  }

  useEffect(() => {
    const fetchItems = async () => {
        try {
          const response = await fetch(`${CHALANGE_API_URL}${reqType}`)
          const listItems = await response.json()
          setItems(listItems)
        } catch (err) {
          setFetchError(err.message)
        } finally {
          setIsLoading(false)
        }
    };
    
    fetchItems();
  }, [reqType]);

  console.log(items)

  const addItem = async (item) => {
    const id = items.length ? Number(items[items.length -1].id) + Number(1) : Number(1);
    const myNewItem = { id, checked: false, item};
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URL, postOptions)
    if (result) setFetchError(result)
  };
  
  const handleCheck = async (id) => {
    const listItems = items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    setItems(listItems);

    const myItem = listItems.filter((item) => item.id === id)
    const updateOptions = {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({ checked: myItem[0].checked})
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions)
    if (result) setFetchError(result)
}

const handleDelete = async (id) => {
    const listItems = items.filter(
        (item) => item.id !== id
    );
    setItems(listItems);
    const myItem = listItems.filter((item) => item.id === id)
    const deleteOptions = {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
}

const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem)
    setNewItem('')
    // console.log(newItem)
    // setNewItem('')
}

  return (
    <div className="App">
      <Header title='Grocery List' />
      {/* <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      /> */}
      


      <Button
        buttonText='users'
        reqType={reqType}
        setReqType={setReqType}
      />
      <Button
        buttonText='posts'
        reqType={reqType}
        setReqType={setReqType}
      />
      <Button
        buttonText='comments'
        reqType={reqType}
        setReqType={setReqType}
      />
      <Chalange
        items={items}
      />
      
      {/* <main>
        {isLoading && <p>loading items...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && items &&<Content
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
      </main> */}
      <Footer
        length={items.leng}
      />
    </div>
  );
}

export default App;
