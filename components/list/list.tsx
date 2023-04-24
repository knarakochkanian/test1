import React, {useState} from 'react';
import {useQuery, useMutation} from '@apollo/client';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {createFilterOptions} from "@mui/material";
import {ADD_LIST, GET_LIST} from "@/components/list/list.query";
import {variables} from "./list.types";

export default function List(): JSX.Element {

    const [addList, {data:myData}] = useMutation(ADD_LIST);

    const filter = createFilterOptions();

    const [value, setValue] = useState<OptionType | null>(null);

    const {loading, error, data} = useQuery(GET_LIST);
    console.log(data)

    if (loading) return <div> Loading... </div>;
    if (error) return <div>Error! {error.message}</div>;

    const  handleChange = async (event, newValue) => {
        if (typeof newValue === 'string') {
            setValue({
                name: newValue,
            });
        } else if (newValue && newValue.inputValue) {
            try {
                const addMyList = await  addList({ variables: {
                        first_name: `${newValue.inputValue}`,
                        last_name: "zascdasc",
                        email: `${newValue.inputValue}@mail.com`,
                        phone: '+81838272',
                        company_id: '44',
                    }})
                console.log(addMyList, "add My List")

            } catch (e) {
                console.error(e);
            }

        } else {
            setValue(newValue);
        }
    }
   const handleFilter = (items, params) => {
        const filtered = filter(items, params);
        const {inputValue} = params;
        // Suggest the creation of a new value
        const isExisting = items.some((items) => inputValue === items.name);
        if (inputValue !== '' && !isExisting) {
            filtered.push({
                inputValue,
                name: `Add "${inputValue}"`,
            });
        }
        return filtered;
    }
    // @ts-ignore
    const handlerGetLabel =  (items) => {
        // Value selected with enter, right from the input
        if (typeof items === 'string') {
            return items;
        }
        // Add "Add" option created dynamically
        if (items.inputValue) {
            return items.inputValue;
        }
        // Regular option
        return items.name;
    }

    return (
        <form  className='list'>
            <Autocomplete
                value={value}
                onChange={ handleChange}
                filterOptions={handleFilter}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                id="LIST"
                options={data.applicantIndividualCompanyPositions.data}
                getOptionLabel={handlerGetLabel}
                renderOption={(props, items) => <li {...props}>{items.name}</li>}
                sx={{width: 300}}
                freeSolo
                renderInput={(params) => (
                    <TextField {...params} label="Search and add list" />
                )}
            />
        </form>
    );
}
