import React from 'react'

const CheckBox = (
    label,
    defaultValue,
    onchange,
    classLabel="form-check-label",
    type="checkbox",
    field=null,
    classParent="form-check form-switch",
    className="form-check-input",
) => {
    const [value, setValue] = useState(defaultValue);
    const handelChange = (e) => {
      setValue((prev) => e.target.checked);
      onchange(field,e.target.checked);
    };
    useEffect(() => {
      setValue(defaultValue);
    }, [defaultValue]);
  
  return (
    <div className={classParent}>
  <input className={className} type={type} role="switch" id={field} value={defaultValue} onChange={handelChange}/>
{label &&  <label className={classLabel} for={field}>{label}</label>}
</div>
  )
}

export default CheckBox