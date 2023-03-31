// Note: Uncomment import lines in your project.
import { Button } from '@mui/material';
import React from 'react';

// TODO: fix the vestigial row issue

// CELL -----------------------------------------

// const itemStyle = {
//     padding: '0px',
//   position: 'relative',
//   height: '26px',
//   display: 'flex',
//   alignItems: 'center'
// };

// const textStyle = {
//     ...itemStyle,
//     padding: '0px 4px',
//     height: '26px',
//     fontFamily: 'Arial',
//     fontSize: '13px'
// };

// const inputStyle = {
//     padding: '0',
//   position: 'absolute',
//   left: '2px',
//   top: '2px',
//   right: '45px',
//   bottom: '2px',
//     minWidth: '20px',
//     fontFamily: 'Arial',
//     fontSize: '13px'
// };

// const buttonStyle = {
//   position: 'absolute',
//   top: '2px',
//   right: '2px',
//   bottom: '2px',
//   width: '40px'
// };

const Cell = React.memo(({value, mode, onChange} : any) => {
    // const [localMode, setLocalMode] = React.useState(mode ?? 'read');
    const [localValue, setLocalValue] = React.useState(value ?? '');
    // React.useEffect(() => setLocalMode(mode ?? 'read'), [mode]);
    React.useEffect(() => setLocalValue(value ?? ''), [value]);
    // if (localMode === 'edit') {
        const handleInputChange = (e : any) => setLocalValue(e.target.value);
        // const handleSaveClick = () => {
        //     setLocalMode('read');
        //         onChange?.(localValue);
        // };
        return (
            <div>
                <input type="text"
                value={localValue}
                
                onChange={handleInputChange} />
                {/* <button onClick={handleSaveClick}>Ok</button> */}
            </div>
        );
    // }
    // if (localMode === 'read') {
    //     const handleEditClick = () => {
    //         setLocalMode('edit');
    //     };
    //     return (
    //         <div onClick={handleEditClick}>{localValue}</div>
    //     );
    // }
    return null;
});

// ROW ------------------------------------------

// const tdStyle = {
//     padding: '1px',
//     border: '1px solid black',
// };
const tdStyle = {
    
};

// const optionStyle = {
//     ...tdStyle,
//   padding: '2px 2px',
//     width: '30px'
// };

const optionStyle = {
    ...tdStyle
};

const Row = React.memo(({ idx, mode, columns, data, onChange, onDelete} : any) => {
  
    const handleDeleteClick = () => onDelete?.();
    return (
        <tr>
            <td key="set_index">
                {idx+1}
            </td>
            {columns.slice(1,columns.length).map(({path} : any, columnIndex : any) => {
                const handleChange = (value : any) => {
                    if (onChange) {
                        const changedData = { ...data, [path]: value };
                        onChange(columnIndex, changedData);
                    }
                };
                return (
                    <td key={path} style={tdStyle}>
                    <Cell 
                        mode={mode}
                        value={data[path]} 
                        onChange={handleChange} 
                    />
                    </td>
                );
            })}
            {/* <td style={optionStyle}>
                <Button onClick={() => deleteLogCell() }>Remove Exercise</Button>
            </td> */}

            <td style={optionStyle}>
            <button onClick={handleDeleteClick}>Delete</button>
            </td>
        </tr>
    );
});

// TABLE ----------------------------------------

// const tableStyle = {
//   border: '1px solid black',
//   borderCollapse: 'collapse',
//     width: '100%'
// }

const Table = React.memo(({id, columns, data, onAdd, onChange, onDelete} : any) => {
    // TODO: see if default index of -1 makes sense
    const [addedIndex, setAddedIndex] = React.useState<number>(0);
    const handleAddClick = () => {
      onAdd?.(data.length);
        setAddedIndex(data.length);
    };
  return (
      <div>
        <table>
          <tbody>
            <tr>
              {columns.map(({path, name} : any) => (
                <th key={path} style={tdStyle}>{name}</th>
              ))}
            </tr>
            {data.map((rowData : any, rowIndex : any) => {
                const handleChange = (columnIndex : any, changedData : any) => {
                    onChange?.(rowIndex, columnIndex, changedData);
                };
                const handleDelete = () => {
                    if (rowIndex !== addedIndex) {
                        setAddedIndex(addedIndex - 1);
                    }

                    // TODO: reindex all the set numbers
                    onDelete?.(rowIndex, rowData);
                };
                return (
                    <Row 
                      key={rowData[id]}
                      idx={rowIndex}
                    //   mode={addedIndex === rowIndex ? 'edit' : 'read'}
                      mode={'edit'}
                      columns={columns}
                      data={rowData}
                      onChange={handleChange}
                      onDelete={handleDelete}
                    />
                );
            })}
          </tbody>
        </table>
        <br />
        <div>
          <Button onClick={handleAddClick}>Add Set</Button>
        </div>
      </div>
  );
});

// UTILS ----------------------------------------

// https://dirask.com/snippets/React-append-prepend-remove-and-replace-items-in-array-with-utils-for-useState-D7XEop

const appendItem = (updater : any, item : any) => {
  updater((array: string | any[]) => array.concat(item));
};

const replaceItem = (updater: { (value: React.SetStateAction<{ id: number; name: string; reps: number; }[]>): void; (arg0: (array: any[]) => any[]): void; }, index: number, item: any) => {
  updater((array: any[]) => array.map((value, i) => i === index ? item : value));
};

const deleteItem = (updater: {
        (value: React.SetStateAction<{ id: number; name: string; reps: number; }[]>): void; (arg0: (array: any) => any // CELL -----------------------------------------
        ): void;
    }, index: any) => {
  updater(array => array.filter((value, i) => i !== index));
  counter--;
};


const columns = [
    { path: 'id',   name: 'SET'   },
    { path: 'name', name: 'LBS' },
    { path: 'reps',  name: 'REPS'  },
];

let counter = 1;

export const EditableTable = () => {
    


    // const baseTable = [
    //     { id: ++counter, name: 'Bob',  reps: 22 },
    //     { id: ++counter, name: 'Adam', reps: 43 },
    //     { id: ++counter, name: 'Mark', reps: 16 },
    //     { id: ++counter, name: 'John', reps: 29 }
    // ]
    const baseTable: any[] = [
        // { id: ++counter, name: 'Bob', reps: 22 },
    ]

    // STATE

    const [data, setData] = React.useState(() => (baseTable));

    const handleAdd = (rowIndex: any) => {
        counter++;
        const newRowData =  { id: counter };
        appendItem(setData, newRowData);
        //TODO: AJAX request to server
        console.log(`Added empty row!`);
    };
    
    const handleChange = (rowIndex: number, columnIndex: any, changedRowData: any) => {
      replaceItem(setData, rowIndex, changedRowData);
      const changedRowJson = JSON.stringify(changedRowData, null, 4);
        //TODO: AJAX request to server
        console.log(`Changed row:\n${changedRowJson}`);
  };
    const handleDelete = (rowIndex: any, deletedRowData: any) => {
      deleteItem(setData, rowIndex);
        //TODO: AJAX request to server
        console.log(`Deleted row: ${rowIndex}`);
  };
  return (
      <div>
        <Table
          id="id"
          columns={columns}
          data={data}
          onAdd={handleAdd}
          onChange={handleChange}
          onDelete={handleDelete}
        />
      </div >
  );
};

// function deleteLogCell(): void {
//     throw new Error('Function not implemented.');
// }

// const root = document.querySelector('#root');
// ReactDOM.render(<App/>, root );