import { useState } from "react";

export const useForms = ({ initialFomr }) => {
  const [formState, setFormState] = useState(initialFomr);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialFomr);
  };

  return {
    ...formState,
    formState,
    setFormState,
    onInputChange,
    onResetForm,
  };
};
