import React, { useEffect, useState } from 'react';
import DataGridComponent from '../DataGridComponent/DataGridComponent';
import ToDoCreateForm from './ToDoCreateForm';

function ToDo() {
  let colData = [
    {
      field: 'id',
      headerName: 'Id',
      width: 100,
      editable: false,
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 500,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 140,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation();
          if (!params.row.status) {
            let temp = [...listOfItems];
            temp = temp.filter((item) => item.id !== params.id);
            setListOfItems(temp);
          }
        };

        return (
          <button className='btn' onClick={onClick}>
            Completed
          </button>
        );
      },
    },
  ];
  const [item, setItem] = useState('');

  //to fetch the items from localStorage if there are any
  const [listOfItems, setListOfItems] = useState(() => {
    const savedData = localStorage.getItem('toDoData');
    if (savedData) {
      const initialValue = JSON.parse(savedData);
      return initialValue || [];
    }
    return [];
  });

  //add new item to the list
  useEffect(() => {
    if (item) {
      let temp = [...listOfItems];
      temp.push({
        id: listOfItems.length + 1,
        title: item,
        status: false,
      });
      setListOfItems(temp);
      setItem('');
    }
  }, [item]);

  //to store the items to localStorage if there are any changes
  useEffect(() => {
    localStorage.setItem('toDoData', JSON.stringify(listOfItems));
  }, [listOfItems]);

  const handleToDoItemChange = (params, event) => {
    listOfItems[params.id - 1].title = event.target.value;
    setListOfItems([...listOfItems]);
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    setItem(event.target.elements['toDoItem'].value);
  };

  return (
    <>
      <div>
        <ToDoCreateForm handleInputChange={handleInputChange} />
      </div>
      <div>
        <DataGridComponent
          rowData={listOfItems}
          colData={colData}
          handleToDoItemChange={handleToDoItemChange}
        />
      </div>
    </>
  );
}

export default ToDo;
