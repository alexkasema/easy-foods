
import { FormProvider, useForm } from "react-hook-form";

const ManageProductForm = ({onSave}) => {

    const formMethods = useForm();
    const { handleSubmit, reset} = formMethods;

    return (
        <FormProvider {...formMethods}>
            <form >
                
            </form>
        </FormProvider>
    )
}

export default ManageProductForm;