import React from "react";
import InputField from "../../components/InputField/InputField";
import { useForm } from "react-hook-form";
import ButtonLoader from "../../components/ButtonLoader/ButtonLoader";
import { Box } from "@material-ui/core";
import useStyles from "./style";

function NewBook() {
  const classes = useStyles();

  const { register, handleSubmit, control, errors, watch } = useForm({
    mode: "onChange",
    // resolver: yupResolver(schema),
  });

  const onSubmit = (formData) => {
      console.log(formData, 'form data')
    // submitForm(form).then((res) => {
    //     if (res && res.success) {
    //         setMode('success')
    //     }
    // });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.formWrapper} >
      <h2>Add new book</h2>

      <InputField
        label="Title"
        fieldName="title"
        fullWidth
        name="title"
        errorMessage={errors}
        error={!!errors.title}
        inputRef={register({
          required: true,
        })}
      />
      <InputField
        label="Author name"
        fullWidth
        fieldName="author"
        name="author"
        errorMessage={errors}
        error={!!errors.author}
        inputRef={register({
          required: true,
        })}
      />
      <InputField
        label="Language"
        fullWidth
        fieldName="language"
        name="language"
        errorMessage={errors}
        error={!!errors.language}
        inputRef={register({
          required: true,
        })}
      />
      <InputField
        label="Description"
        fullWidth
        fieldName="description"
        name="description"
        errorMessage={errors}
        error={!!errors.description}
        inputRef={register({
          required: true,
        })}
      />
      <InputField
        label="Total pages"
        fullWidth
        name="pages"
        fieldName="pages"
        errorMessage={errors}
        error={!!errors.pages}
        inputRef={register({
          required: true,
        })}
      />
      <Box mt={2}>
        <ButtonLoader>Add book</ButtonLoader>
      </Box>
    </form>
  );
}

export default NewBook;
