import React, {useState} from 'react';
import forceNumber from 'force-number';

type Props = {
  editable: boolean
  value: number,
  validator: (value: number) => boolean,
  onChange: (value: number) => void
}

export default function EditableCell(
  {
    editable,
    value,
    validator,
    onChange,
  }: Props
) {
  const [editing, setEditing] = useState(false);
  const [hasError, setHasError] = useState(false);

  function onValueChange(text: string) {
    const number = forceNumber(text)
    if (validator(number)) {
      setHasError(false)
      onChange(number);
    } else {
      setHasError(true)
    }
  }

  return <div tabIndex={1} onClick={() => setEditing(x => !x)} onFocus={() => setEditing(true)}
              onBlur={() => setEditing(false)}>
    {
      editing
        ? <input defaultValue={value.toString()} onChange={event => onValueChange(event.target.value)}
                 className={hasError ? 'has-error' : ''}/>
        : value
    }
  </div>
};
