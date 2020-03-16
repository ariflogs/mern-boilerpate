import { useSnackbar } from 'notistack';

const { enqueueSnackbar } = useSnackbar();

const successAlert = () => enqueueSnackbar('Added new event!', {
  variant: 'success',
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'center',
  },
  autoHideDuration: 3000,
});


const alertModel = {
  success: successAlert,
};

export default alertModel;
