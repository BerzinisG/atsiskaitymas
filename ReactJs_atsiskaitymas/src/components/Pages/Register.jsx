import styled from "styled-components";
import {useFormik} from 'formik';
import * as Yup from 'yup';

const StyledMain = styled.main`
display:flex;
flex-direction:column;
align-items:center;
>form{
  text-align:center;
}
`

const Register = () => {
  const values = {
    email:'',
    password:'',
    passwordConfirm:'',
  }
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('this input must be valid email')
      .required('Input must be filled')
      .trim(),
    password: Yup.string()
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,20}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .trim()
    .required('Input must be filled'),
  passwordConfirm: Yup.mixed()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Input must be filled')
  })

  const formik = useFormik({
    initialValues: values,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  })

  return ( 
    <StyledMain>
      <h1>Register</h1>
      <form onSubmit ={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
          type="email"
          name="email" id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}           
          />
          {
              formik.touched.email && formik.errors.email &&
              <p
                style={{ color: 'red' }}
              >{formik.errors.email}</p>
            }
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input 
              type="password"
              name="password" id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {
              formik.touched.password && formik.errors.password &&
              <p
                style={{ color: 'red' }}
              >{formik.errors.password}</p>
            }
          </div>
          <div>
            <label htmlFor="passwordConfirm"> Password confirm:</label>
            <input 
              type="password"
              name="passwordConfirm" id="passwordConfirm"
              value={formik.values.passwordConfirm}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {
              formik.touched.passwordConfirm && formik.errors.passwordConfirm &&
              <p
                style={{ color: 'red' }}
              >{formik.errors.passwordConfirm}</p>
            }
          </div>
          <input type="submit" value="Register" />
      </form>
    
    </StyledMain>
   );
}
 
export default Register;