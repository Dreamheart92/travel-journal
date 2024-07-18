import { normalizeName } from "../../../utility/utility.js";

import style from "./Input.module.css";
import ErrorMessage from "../../error/ErrorMessage/ErrorMessage.jsx";

export default function Input({ label, children, ...props }) {
  const displayError = props.state.error && (props.state.isDirty || props.formState.isSubmittedAndHasErrors);

  return (
    <>
      {label &&
        <label htmlFor={label}>{normalizeName(label)}</label>
      }

      <div className={style.wrapper}>
        {children}
        {displayError &&
          <ErrorMessage message={Object.entries(props.state.error)[0][1]} />
        }
      </div>
    </>
  )
}
