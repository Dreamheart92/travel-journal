import { useEffect, useRef, useState } from 'react';

const options = {
  fields: ['geometry', 'name', 'formatted_address'],
};

export default function LocationAutocompleteInput({ fieldProps }) {
  const {
    name,
    onChange,
    onBlur,
    inputClassName,
    placeholder,
    value,
  } = fieldProps;

  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState(value?.formatted_address || '');

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, options);

    autocomplete.addListener('place_changed', () => {
      setInputValue(autocomplete.getPlace().formatted_address);
      const place = autocomplete.getPlace();

      const locationValue = {
        formatted_address: place.formatted_address,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };

      onChange({ target: { name: 'location', value: locationValue } });
    });
  }, [inputRef]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    if (event.target.value === '') {
      onChange(event);
    }
  };

  return (
    <input
      className={inputClassName}
      name={name}
      type="text"
      onBlur={onBlur}
      ref={inputRef}
      value={inputValue}
      onInput={handleChange}
      placeholder={placeholder}
    />
  );
}
