import Input from '../';

import style from '../index.module.css';

export default function TextInput({ label, type, children, ...props }) {
    const handlers = props.handlers;

    const inputType = type === "password" ? type : "text";

    return (
        <Input label={label} {...props}>
            <input className={style.field} {...handlers} placeholder={children}
                type={inputType}
                value={props.state.value} />
        </Input>
    )
}