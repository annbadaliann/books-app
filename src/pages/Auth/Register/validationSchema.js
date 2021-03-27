import * as yup from "yup";

export const schema = yup.object().shape({
    email: yup.string()
    .max(255)
    .required('Պարտադիր դաշտ')
    .test(
      'email',
      'Թույլատրվում է միայն լատինատառ, թիվ և սիմվոլ',
      function(value) {
        const regex = /^[A-Za-z0-9@.]*$/;
        return regex.test(value);
      }
    )
    .email('էլ. հասցեն անվավեր է'),
    password: yup.string()
      .required('Պարտադիր դաշտ')
    });