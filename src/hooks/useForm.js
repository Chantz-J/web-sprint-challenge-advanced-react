// write your custom hook here to control your checkout form
import { useState } from 'react'

export const useForm = intialValue => {
    const [value, setValue] = useState(intialValue)
    const handleChanges = updatedValue => {
        setValue(updatedValue)
    }
    return [value, setValue, handleChanges]
}
