import Input from '../index';

export default function DateInput({ ...props }) {
  const handlers = props.handlers;

  const dateValue = props.state.value;
  const date = dateValue ? dateValue.slice(0, 10) : null;

  return (
    <Input {...props}>
      <input {...handlers} defaultValue={date} name="date" id="date" type="date" />
    </Input>
  );
}
