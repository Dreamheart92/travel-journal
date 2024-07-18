import Input from "../Input.jsx";

import style from "../index.module.css";

export default function TextAreaInput({ label, children, ...props }) {
    const handlers = props.handlers;

    return (
        <Input label={label} {...props}>
            <textarea className={style.field} {...handlers}
                value={props.state.value} placeholder={children} rows="10"
                cols="50"></textarea>
        </Input>
    )
}