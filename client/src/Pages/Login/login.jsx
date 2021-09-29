import React, { useState, useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  withStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';

import { loginUser } from '../../Actions/authActions';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withRouter } from 'react-router-dom';

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

const LoginValidationSchema = Yup.object({
  email: Yup.string().email().required('INVALID DETAILS ❌❌'),

  password: Yup.string()
    .min(4, 'minimun of 4 character is needed')
    .max(12, 'too long')
    .required('INVALID DETAILS ❌❌'),
});

function Login(props) {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setshowPassword] = useState(false);
  const [err, setErr] = useState(null);

  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const dispatch = useDispatch();
  const logUser = bindActionCreators(loginUser, dispatch);
  const state = useSelector((state) => state.auth);

  // const submitForm = (data) => {};

  // React.useEffect(() => {
  //   if (props.auth.isAuthenticated) {
  //     props.history.push('/posts');
  //   }
  // });

  // React.useEffect((nextProps)=> {
  //   if (nextProps.auth.isAuthenticated) {
  //     props.history.push("/dashboard");
  //   }
  //   if (nextProps.errors) {
  //     setValues({ errors: nextProps.errors });
  //   }
  // })
  // const submitForm = (data) => {};
  return (
    <Formik
      initialValues={{ email, password }}
      validationSchema={LoginValidationSchema}
      onSubmit={(values) => {
        logUser(values);
        if (state.user?.status) {
          return props.history.push('/learn');
        }
      }}
      // onSubmit={(e)=>{
      //   e.preventDefault()
      // }}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <form
          // onSubmit={handleSubmit}

          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(values);
            // {
            //   handleSubmit(values);
            // }
            // props.loginUser(values);
          }}
        >
          <div>
            {/* {(errors.email && touched.email) || props.auth.user === null ? (
              <span style={{ color: 'red', textAlign: 'center' }}>
                Invalid Details ❌❌
              </span>
            ) : null} */}
            {/* {!props.auth.isAuthenticated ? (
            <span style={{ color: 'red' }}>{props.errors.response.data.messasge}</span>
          ) : null} */}
            {/* <span style={{ color: 'red', textAlign: 'center' }}>
              {props.errors.response?.data.message}
            </span> */}
          </div>
          {/* <p>{errors.password?.message}</p> */}
          <ThemeProvider theme={theme}>
            <CssTextField
              className={classes.margin}
              id="email"
              label="Email"
              name="email"
              variant="filled"
              onChange={handleChange}
              value={values.email}
              style={{ width: '47%' }}
            />

            <div></div>
            {/* <p>{errors.email?.message}</p> */}
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
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                // ref={register}
                // style={{ marginTop: '20px' }}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <div style={{ display: 'block', width: '100%' }}>
              <button
                type="submit"
                className="btnSubmit"
                style={{ width: '100%' }}
              >
                Sign In
              </button>
            </div>
            <div className="row text-center">
              <div className="loginAccount">
                <Link
                  to="/register"
                  style={{ color: '#218C74' }}
                  className="loginAccountbottom"
                >
                  Create a New Account
                </Link>
              </div>
              <div className="loginAccount">
                <Link
                  to="#"
                  style={{ color: '#218C74' }}
                  className="loginAccountbottom"
                >
                  Forgotten Password?
                </Link>
              </div>
            </div>
          </ThemeProvider>
        </form>
      )}
    </Formik>
  );
}

// Login.propTypes = {
//   loginUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired,
// };
// const mapStateToProps = (state) => ({
//   auth: state.auth,
//   errors: state.errors,
// });

let RouterLogin = withRouter(Login);

export default RouterLogin;
