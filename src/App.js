import { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';
import './App.css';


const initialState = {
  items: [
  ]
};

const listReducer = (state, action) => {
  //console.log(action);
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: state.items.concat([
          { id: uuid(), name: action.payload }
        ])
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (item) => item.id !== action.payload.id
        )
      }
    default:
      return state;
  }
};


function App() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const { items } = state;

  return (
    <div className='app'>
      <div className='app-header'>
        <div className='app-container'>
          <div className='input-container'>
            <AddItem dispatch={dispatch} />
          </div>
          <div className='list-container'>
            {items.map((item) => {
              return (
                <ListItem
                  key={item.id}
                  item={item}
                  dispatch={dispatch}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

//Original code by Chris Kubick with modifications by Li Mattson November 2023