import React from "react";
import InputField from "../../components/InputField/InputField";
import { useForm } from "react-hook-form";
import ButtonLoader from "../../components/ButtonLoader/ButtonLoader";
import { Box } from "@material-ui/core";
import useStyles from "./style";

function Contact() {
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
      <h2>Contact us</h2>

      <InputField
        label="Name"
        fieldName="name"
        fullWidth
        name="name"
        errorMessage={errors}
        error={!!errors.name}
        inputRef={register({
          required: true,
        })}
      />
      <InputField
        label="Email"
        fullWidth
        fieldName="email"
        name="email"
        errorMessage={errors}
        error={!!errors.email}
        inputRef={register({
          required: true,
        })}
      />
      <InputField
        label="Message"
        fullWidth
        fieldName="message"
        name="message"
        errorMessage={errors}
        error={!!errors.message}
        multiline={true}
        rows={4}
        inputRef={register({
          required: true,
        })}
      />
     
      <Box mt={2}>
        <ButtonLoader>Send</ButtonLoader>
      </Box>
    </form>
  );
}

export default Contact;
