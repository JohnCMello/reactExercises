import { useState } from 'react'

const INITIAL_VALUES = {
  firstName: ``,
  lastName: ``
}

export const useForm = () => {
  const [userData, setUserData] = useState(INITIAL_VALUES)

  const handleSubmit = () => {
    const { firstName, lastName } = userData

    if (!firstName || !lastName) return

    setUserData(prevState => {
      return {
        ...prevState,
        ...INITIAL_VALUES
      }
    })

    alert(`Hello ${firstName} ${lastName}`)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    })
  };

  return {
    userData,
    handleSubmit,
    handleChange
  }
};