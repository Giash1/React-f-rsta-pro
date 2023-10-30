import React from 'react'
import {useState} from "react"
export function TextInput(props) {
    const [darkMode, setDarkMode] = useState(false)
    // const { placeholder, onInput, value, styling, childComponent } = props
    // add another props styling,childComponent then use it
    const {
        placeholder,
        onInput,
        value,
        styling,
        // onButtonClick,
        onButtonClickClear,
        // setLastName
    } = props
    //  example of destructuring/adding
    // const arr1 =['orange', 'banana']
    // const arr2 =['avaocado', 'paron']
    // const arr3 = [...arr1, ...arr2, 'apple']
    // console.log(arr3)
    return (
        //   can use fragement <> <> or div
        <div>
            <input
                //   use all these props in the parent component(createUser)
                // adding darkmode variable from the setdarkmode props to the styling using distructuring ...
                style={{
                    ...styling,
                    // if it darkmode color will be black otherwise white
                    backgroundColor: darkMode ? 'black' : 'white'
                    // go to the parentComponent and remove back
                }}
                type="text"
                placeholder={placeholder}
                value={value}
                onInput={onInput}
            />
            {/* {childComponent} */}
            {/* using onButtonClick props as a function */}
            {/* {onButtonClick && ( */}
                {/* // associate the onButtonClick function with the button's onClick event
                // if you click the button it will show in the console button is clicked
            //     <button onClick={onButtonClick}>Hi</button> */}
            {/* // )} */}
            {/* onButtonClickClear props use as a function and it will clear the firstname  */}
            {onButtonClickClear && (
                <button onClick={onButtonClickClear}>Clear</button>
            )}

            {/* to change the lastname using setLasName function */}
            {/* {setLastName && (
                <button onClick={()=>setLastName('Alim')}>Change lastname</button>
            )} */}
            {/* creating another button for setDarMode useState */}
            <button onClick={() => setDarkMode(!darkMode)}>Change theme</button>
        </div>
    )
}

// export default TextInput
