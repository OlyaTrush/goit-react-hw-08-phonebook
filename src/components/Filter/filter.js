
import { nanoid } from "nanoid";
import { Label, Input, Div } from "components/Filter/filter.styled";
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "redux/selectors";
import { filterContact } from "redux/filterSlice"

const filterInputId = nanoid();

export const Filter = () => {
    
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);
    const handleFilterChenge = (e) => {
       
        const { value } = e.target;
        dispatch(filterContact(value))
    }

    return (
        <Div>
            <Label htmlFor={filterInputId}>
                Find contacts by name
                <Input
                id = {filterInputId}
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={filter.value}
                onChange={handleFilterChenge}
                />
            </Label>
        </Div>
)
}
