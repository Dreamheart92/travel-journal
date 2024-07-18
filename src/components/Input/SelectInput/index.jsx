import { normalizeName } from '../../../../utility/utility.js';

import Input from '../Input.jsx';

import style from '../index.module.css';

export default function SelectInput({ options, ...props }) {
    const handlers = props.handlers;

    return (
        <Input {...props}>
            <select className={style.field} value={props.state.value} {...handlers} name="destination">
                <option value="" disabled>Select a destination</option>
                {options.map(option => (
                    <option key={option._id} value={option._id}>{normalizeName(option.name)}</option>
                ))}
            </select>
        </Input>
    )
}