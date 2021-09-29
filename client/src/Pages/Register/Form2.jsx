import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { green } from '@material-ui/core/colors';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  withStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import * as Yup from 'yup';
import axios from 'axios';
import { registerUser } from '../../Actions/authActions';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Form, Formik, Field } from 'formik';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
        marginLeft: '20px',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },

  margin: {
    margin: theme.spacing(1),
    // width: '70%'
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow:
      'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

//regular expression
const phoneRegExp = /^[0]\d{10}$/;
// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = Yup.object().shape({
  firstname: Yup.string().required('First name is required'),
  lastname: Yup.string().required('Last name is required'),
  username: Yup.string()
    .required('Please provide a username')
    .min(4, 'Too short')
    .max(12, 'Maximum of 12digits is required'),
  email: Yup.string().email().required('Email is required'),
  phonenumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  // phonenumber: Yup.number()
  //   .min(9, 'Invalid phone number')
  //   .max(16, 'invalid phone number')
  //   .required('Provide a valid number'),
  password: Yup.string()
    .min(4, 'Too short')
    .max(12)
    .required('Password is required'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Password does not match'
  ),
  nationality: Yup.string().required('Select a nationality'),
  gender: Yup.string().required('Select a gender'),
  term: Yup.string().required('Required'),
});
function Form2(props) {
  function StyledRadio(props) {
    const classes = useStyles();

    return (
      <Radio
        className={classes.root}
        disableRipple
        color="secondary"
        checkedIcon={
          <span className={clsx(classes.icon, classes.checkedIcon)} />
        }
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
  }
  const classes = useStyles();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setemail] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nationality, setNationality] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState(null);
  const [term, setTerm] = useState(true);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // React.useEffect(() => {
  //   if (props.auth.isAuthenticated) {
  //     props.history.push('/learn');
  //   }
  // });

  //  componentWillReceiveProps(nextProps) {
  //     if (nextProps.errors) {
  //       setValues({ ...values, errors: nextProps.errors });
  //     }
  //   }

  const submitForm = (data) => {};
  let values = {
    firstname,
    lastname,
    password,
    username,
    confirmPassword,
    password,
  };
  return (
    <Formik
      initialValues={values}
      validationSchema={schema}
      onSubmit={(values) => {
        // values.preventDefault();
        axios
          .post('http://localhost:4000/api/user/register', values)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err.response));
        console.log(values);
      }}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <form
          className={classes.root}
          // noValidate
          onSubmit={(e) => {
            e.preventDefault();
            axios
              .post('http://localhost:4000/api/user/register', values)
              .then((res) => {
                console.log(res);
              })
              .catch((err) => console.log(err.response));
          }}
          
        >
          {/* {console.log(props)} */}
          {/* {errors.message ? (
            <span style={{ color: 'red' }}>{errors.message}</span>
          ) : null} */}
          {/* {props.errors.message} */}
          <ThemeProvider theme={theme}>
            {/* <div className="row"> */}
            {/* <div className="col-md-6"> */}
            <CssTextField
              // style={{ width: '0%' }}
              className={classes.margin}
              id="inputFirstName"
              label="First Name"
              name="firstname"
              // ref={register}
              variant="filled"
              onChange={handleChange('firstname')}
              value={values.firstname}
            />
            <br />
            {errors.firstname && touched.firstname ? (
              <span style={{ color: 'red' }}>{errors.firstname}</span>
            ) : null}{' '}
            {/* <p>{errors.firstname?.message}</p> */}
            {/* </div> */}
            {/* <div className="col-md-6"> */}
            <CssTextField
              className={classes.margin}
              id="inputLastName"
              label="Last Name"
              name="lastname"
              // ref={register}
              variant="filled"
              onChange={handleChange('lastname')}
              value={values.lastname}
              // style={{ width: '50%' }}
            />
            <br />
            {errors.lastname && touched.lastname ? (
              <span style={{ color: 'red' }}>{errors.lastname}</span>
            ) : null}
            {/* </div> */}
            {/* </div> */}
            {/* <div className="row"> */}
            {/* <div className="col-md-6"> */}
            <CssTextField
              className={classes.margin}
              autoComplete="username"
              id="inputUsername"
              label="Username"
              name="username"
              // ref={register}
              variant="filled"
              // style={{ width: '47%' }}
              onChange={handleChange('username')}
              value={values.username}
            />
            <br />
            {errors.username && touched.username ? (
              <span style={{ color: 'red' }}>{errors.username}</span>
            ) : null}
            {/* </div> */}
            {/* <div className="col-md-6"> */}
            <CssTextField
              className={classes.margin}
              id="inputEmail"
              label="Email"
              name="email"
              // ref={register}
              variant="filled"
              type="email"
              // style={{ width: '47%' }}
              onChange={handleChange('email')}
              value={values.email}
            />
            <br />
            {errors.email && touched.email ? (
              <span style={{ color: 'red' }}>{errors.email}</span>
            ) : null}
            {/* </div> */}
            {/* </div> */}
            {/* <div className="row w-70"> */}
            {/* <div className="col-md-6"> */}
            <CssTextField
              className={classes.margin}
              id="inputPhoneNumber"
              label="Phone Number"
              variant="filled"
              name="number"
              // ref={register}
              type="tel"
              style={{ width: '47%' }}
              onChange={handleChange('phonenumber')}
              value={values.phonenumber}
            />
            <br />
            {errors.phonenumber && touched.phonenumber ? (
              <span style={{ color: 'red' }}>{errors.phonenumber}</span>
            ) : null}
            {/* </div> */}
            {/* <div className="col-md-6"> */}
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.10)',
                width: '47%',
                padding: '5px 0px 0px 15px',
                borderRadius: '5px 5px 0px 0px',
              }}
              id="inputPassword"
              label="filled"
              variant="filled"
            >
              <InputLabel
                htmlFor="password"
                style={{ margin: '-3px 0px 40px 0px' }}
              >
                Password
              </InputLabel>
              <Input
                autoComplete="new-password"
                id="password"
                type={showPassword ? 'word' : 'password'}
                value={values.password}
                name="password"
                // ref={register}
                // style={{ }}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <br />
            {errors.password && touched.phonenumber ? (
              <span style={{ color: 'red' }}>{errors.password}</span>
            ) : null}
            {/* </div> */}
            {/* </div> */}
            {/* <div className="row"> */}
            {/* <div className="col-md-6"> */}
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.10)',
                width: '47%',
                padding: '5px 0px 0px 15px',
                borderRadius: '5px 5px 0px 0px',
              }}
              id="inputConfirmPassword"
              label="filled"
              variant="filled"
            >
              <InputLabel
                htmlFor="confirmPassword"
                style={{ margin: '-3px 0px 40px 0px' }}
              >
                Confirm Password
              </InputLabel>
              <Input
                id="confirmPassword"
                autoComplete="password"
                type={showConfirmPassword ? 'word' : 'password'}
                value={values.confirmPassword}
                name="confirmPassword"
                // ref={register}
                // style={{  }}
                onChange={handleChange('confirmPassword')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <br />
            {errors.confirmPassword && touched.confirmPassword ? (
              <span style={{ color: 'red' }}>{errors.confirmPassword}</span>
            ) : null}
            {/* </div> */}
            {/* <div className="col-md-6"> */}
            <FormControl
              variant="filled"
              className={classes.formControl}
              style={{ width: '47%', marginLeft: '9px', marginTop: '8px' }}
            >
              <InputLabel htmlFor="filled-age-native-simple">
                Nationality
              </InputLabel>
              <Select
                native
                value={values.nationality}
                name="nationality"
                // ref={register}
                onChange={handleChange('nationality')}
                inputProps={{
                  name: 'nationality',
                  id: 'filled-age-native-simple',
                }}
              >
                <option aria-label="None" value="" />
                <option value={'african'}>African</option>
                <option value={'asian'}>Asian</option>
                <option value={'ameriacan'}>American</option>
              </Select>
            </FormControl>
            <br />
            {errors.nationality && touched.phonenumber ? (
              <span style={{ color: 'red' }}>{errors.nationality}</span>
            ) : null}
            {/* </div> */}
            {/* </div> */}
            <FormControl
              component="fieldset"
              style={{ margin: '20px 0px 0px 15px' }}
            >
              <FormLabel component="legend" style={{ color: 'green' }}>
                Gender
              </FormLabel>
              <RadioGroup
                defaultValue="female"
                aria-label="gender"
                // name="customized-radios"
                style={{ display: 'inline-block' }}
                onChange={handleChange('gender')}
                value={values.gender}
                name="gender"
                // ref={register}
              >
                <FormControlLabel
                  value="female"
                  control={<StyledRadio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<StyledRadio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<StyledRadio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
            {/* <br /> */}
            {errors.nationality && errors.touched ? (
              <span style={{ color: 'red' }}>{errors.gender}</span>
            ) : null}
            {/* <br /> */}
            <div style={{ width: '100%' }}>
              <Checkbox
                style={{ color: 'green' }}
                value={values.term}
                name="term"
                // ref={register}
                onChange={handleChange('term')}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />{' '}
              <span style={{ color: 'green' }}>
                I agree with the terms and conditions
              </span>
            </div>
            <div style={{ display: 'block', width: '100%' }}>
              <button
                type="submit"
                className="btnSubmit"
                style={{ width: '100%' }}
              >
                JOIN
              </button>
            </div>
          </ThemeProvider>
        </form>
      )}
    </Formik>
  );
}

Form2.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Form2));
