import { useState } from "react";

const useHomeCards = () => {
  const [heroInputFields, setHeroInputFields] = useState([]);
  const [errorsHeroSlice, setErrorsHeroSlice] = useState([]);

  const [articleInputFields, setArticleInputFields] = useState([]);
  const [errorsArticleSlice, setErrorsArticleSlice] = useState([]);

  const [priceInputFields, setPriceInputFields] = useState([]);
  const [errorsPriceSlice, setErrorsPriceSlice] = useState([]);

  const addHeroFields = () => {
    const newField = {
      id: new Date().getTime(),
      value1: "",
      value2: "",
    };
    setHeroInputFields([...heroInputFields, newField]);
  };

  const addArticleFields = () => {
    const newField = {
      id: new Date().getTime(),
      value1: "",
      value2: "",
      value3:""
    };
    setArticleInputFields([...articleInputFields, newField]);
  };

  const addPriceFields = () => {
    const newField = {
      id: new Date().getTime(),
      value1: "",
      value2: "",
    };
    setPriceInputFields([...priceInputFields, newField]);
  };

  const removeField = (id) => {
    const updatedFields = heroInputFields.filter((field) => field.id !== id);
    setHeroInputFields(updatedFields);
  };

  const removeArticleField = (id) => {
    const updatedFields = articleInputFields.filter((field) => field.id !== id);
    setArticleInputFields(updatedFields);
  };

  const removePriceField = (id) => {
    const updatedFields = priceInputFields.filter((field) => field.id !== id);
    setPriceInputFields(updatedFields);
  };

  const handleInputChange = (id, fieldName, value) => {
    const updatedFields = heroInputFields.map((field) => {
      if (field.id === id) {
        return {
          ...field,
          [fieldName]: value,
        };
      }
      return field;
    });

    setHeroInputFields(updatedFields);
  };

  const handleArticleInputChange = (id, fieldName, value) => {
    const updatedFields = articleInputFields.map((field) => {
      if (field.id === id) {
        return {
          ...field,
          [fieldName]: value,
        };
      }
      return field;
    });

    setArticleInputFields(updatedFields);
  };

  const handlePriceInputChange = (id, fieldName, value) => {
    const updatedFields = priceInputFields.map((field) => {
      if (field.id === id) {
        return {
          ...field,
          [fieldName]: value,
        };
      }
      return field;
    });

    setPriceInputFields(updatedFields);
  };

  const handleSubmit = () => {
    const errorsHeroSlice = heroInputFields.map((field) => {
      const fieldErrors = {};

      if (field.value1.trim() === "") {
        fieldErrors.value1 = "Required.";
      }

      if (field.value2.trim() === "") {
        fieldErrors.value2 = "Required.";
      }

      return fieldErrors;
    });

    setErrorsHeroSlice(errorsHeroSlice);

    const errorsArticleSlice = articleInputFields.map((field) => {
      const fieldErrors = {};

      if (field.value1.trim() === "") {
        fieldErrors.value1 = "Required.";
      }

      if (field.value2.trim() === "") {
        fieldErrors.value2 = "Required.";
      }

      return fieldErrors;
    });

    setErrorsArticleSlice(errorsArticleSlice);

    const errorsPriceSlice = priceInputFields.map((field) => {
      const fieldErrors = {};

      if (field.value1.trim() === "") {
        fieldErrors.value1 = "Required.";
      }

      if (field.value2.trim() === "") {
        fieldErrors.value2 = "Required.";
      }

      return fieldErrors;
    });

    setErrorsPriceSlice(errorsPriceSlice);

    const data = {
      heroSlice: heroInputFields,
      articleSlice: articleInputFields,
      priceSlice: priceInputFields,
    };

    console.log("Form submitted:", data);
  };

  return {
    heroInputFields,
    articleInputFields,
    priceInputFields,
    addHeroFields,
    addArticleFields,
    addPriceFields,
    errorsHeroSlice,
    errorsArticleSlice,
    errorsPriceSlice,
    handleInputChange,
    handleArticleInputChange,
    handlePriceInputChange,
    removeField,
    removeArticleField,
    removePriceField,
    handleSubmit,
  };
};

export default useHomeCards;
