import { SelectStyle } from "./style";

// eslint-disable-next-line react/prop-types
export const Select = ({
  ListOptions,
  placeHolder,
  register,
  name,
  conditionForState,
}) => {
  const forCondition = (e) => {
    const selectedValue = e.target.value;

    if (selectedValue == "false") {
      conditionForState(false);
    } else if (selectedValue == "true") {
      conditionForState(true);
    }
  };

  return (
    <SelectStyle>
      <label htmlFor="placeHolder">{placeHolder}</label>
      <select
        {...register(name)}
        onChange={(e) => forCondition(e)}
        id="placeHolder"
      >
        {ListOptions.map((value) => (
          // eslint-disable-next-line react/jsx-key

          <option key={value} value={value}>
            {value === false ? "Não" : value === true ? "Sim" : value}
          </option>
        ))}
      </select>
    </SelectStyle>
  );
};
