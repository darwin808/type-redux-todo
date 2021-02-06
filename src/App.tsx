import React, { useState } from "react";
import jsondata from './MOCK_DATA (1).json'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./Reducers/AllReducers";
import {
  decrement,
  increment,
  addpeople,
  deletepeople,
  updatepeople

} from "./Actions/Actions";

function App() {
  const counter = useSelector((e: RootState) => e.CounterReducer);
  const dispatch = useDispatch();
  const peoples: any = useSelector((e: RootState) => e.PeopleReducer);
  const [currentpage, setcurrentpage] = useState<number>(1)
  const [postperpage, setpostperpage] = useState<number>(5)

  const [name, setname] = useState<string>("");
  const [edit, setedit] = useState<string>("");
  const [modal, setmodal] = useState<boolean>(false);
  const [idholder, setidholder] = useState<number>(0);
  const [serch, setserch] = useState<string>('')

  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addpeople({ name, id: Math.random() }));
  };

  const openmodal = (id: number) => {
    setidholder(id)
    setmodal(true)
  }

  const handlEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updatepeople({ idholder, edit }));

  }

  const indexOfLast: number = currentpage * postperpage
  const indexOfFirst: number = indexOfLast - postperpage
  const posts: any = peoples.peoples.slice(indexOfFirst, indexOfLast)

  const pagenum = []
  for (let i = 1; i <= Math.ceil(peoples.peoples.length / postperpage); i++) {
    pagenum.push(i)
  }

  return (
    <div className="App">
      {counter}
      <button
        onClick={() => {
          dispatch(increment());
        }}>
        add
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}>
        minus
      </button>

      <form action="submit" onSubmit={handlesubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
      </form>
      {modal && (
        <form action="submit" onSubmit={handlEdit}>
          <input
            type="text"
            value={edit}
            onChange={(e) => {
              setedit(e.target.value);
            }}
          />
        </form>
      )}
      {posts.map((e: any) => (
        <div key={e.id}>
          {e.name}{" "}
          <button
            onClick={() => {
              dispatch(deletepeople(e.id));
            }}>
            delete
          </button>{" "}
          <button onClick={() => { openmodal(e.id) }}>edit</button>
        </div>
      ))}

      {pagenum.map((e: any) => <div onClick={() => { setcurrentpage(e) }} key={e}>{e}</div>)}

      <input type="text" placeholder='SEARCH...' value={serch} onChange={(e) => { setserch(e.target.value) }} />
      {jsondata.filter((e: any) => e.first_name.toLowerCase().includes(serch.toLowerCase())).map((e: any) => <div key={e.id}>{e.first_name}</div>)}
    </div>
  );
}

export default App;
