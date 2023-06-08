import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { LoadingButton } from '@mui/lab';
import { Checkbox, IconButton, InputAdornment, Link, Stack, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { roleSet } from '../../../redux/slice';
import { loginApi } from '../../../services/auth/login';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const initialState = {
  email: '',
  password: '',
};

export default function LoginForm() {
  const dispatch = useDispatch();
  const [loginValues, setLoginValues] = useState(initialState);

  const Navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setLoginValues({ ...loginValues, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const returnValue = await loginApi(loginValues);
      if (returnValue.status === 200) {
        localStorage.setItem('accessToken', returnValue.data.token);
        dispatch(roleSet(returnValue?.data?.user?.roles));
        Navigate('/dashboard/app', { state: { replace: true, data: returnValue.data.user } });
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField name="email" label="Email address" required onChange={(e) => handleChange(e)} />

          <TextField
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => handleChange(e)}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <Checkbox name="remember" label="Remember me" />
          <Link variant="subtitle2" underline="hover">
            Forgot password?
          </Link>
        </Stack>

        <LoadingButton fullWidth size="large" type="submit" variant="contained">
          Login
        </LoadingButton>
      </form>
    </>
  );
}
