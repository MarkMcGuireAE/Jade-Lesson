import { useContext, createContext, useState } from "react"

// creating our context here
const FamilyContext = createContext()

// custom hook
export function useFamilyContext() {
  return useContext(FamilyContext)
}

// custom Provider component
export function FamilyProvider(props) {
 
    const [traits, setTraits] = useState({
        color: 'white',
        backgroundColor: 'blue'
      })
    
      function changeTraits() {
        let newTraits = {
          color: traits.color === 'white' ? 'black' : 'white',
          backgroundColor: traits.backgroundColor === 'blue' ? 'red' : 'blue'
        }
        setTraits(newTraits)
      }

      const sharedValue = {
        traits,
        changeTraits
      }

    return (
        <FamilyContext.Provider value={sharedValue}>
            {props.children}
        </FamilyContext.Provider>
    )
}