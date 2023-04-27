import List from '../components/list/list'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useForm, Controller } from "react-hook-form";


export default function Home() {

    const { handleSubmit, reset, control, formState: { errors }} = useForm();
    const onSubmit = (data: object) => console.log(data);
    console.log("errors", errors)
    // @ts-ignore
    return (

            <form className='main'>
                <div>
                    <List/>
                    <Controller
                        name={"textValue"}
                        control={control}
                        rules={{ required: "pusto" }}
                        render={({ field: { onChange, value } } ) => (
                            <TextField  required onChange={onChange} label={"Text"} id="value"  error={!!errors.textValue?.message}   helperText={errors.textInput && `${errors.textInput.message}`}  />

                        )}
                    />
                    <Button onClick={handleSubmit(onSubmit)} variant="contained">Submit</Button>
                    <Button onClick={() => reset()} variant={"outlined"}>Reset</Button>

                </div>
            </form>
    )
}
