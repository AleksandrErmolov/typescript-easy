import React, { useState, FC, useRef } from 'react';

const EventsExample: FC = () => {

    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)


    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }


    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('drag')
    }


    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }


    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }


    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('drop')
    }


    return (<div>

        <input type="text" value={value} onChange={changeHandler} placeholder='Управляемый' />
        <input type="text" ref={inputRef} placeholder='Неуправляемый' />
        <button onClick={clickHandler}> dfsf </button>
        <div onDrag={dragHandler} draggable style={{ width: 200, height: 200, background: 'red' }}> </div>
        <div
            onDrop={dropHandler}
            onDragLeave={leaveHandler}
            onDragOver={dragWithPreventHandler}
            style={{
                width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: 15
            }}> </div>

    </div>)
}


export default EventsExample