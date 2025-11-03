import { Alert, Snackbar } from '@mui/material';

function SnackBar({openSnackbar, setOpenSnackbar, message,severity}: 
    {openSnackbar: boolean, setOpenSnackbar: () =>  void, message: string , severity?: "success" | "info" | "warning" | "error"}) {
  return (
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar()}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setOpenSnackbar()}
          severity={severity || "success"}
          sx={{ width: '100%' }}
        >
            {message ?? "Message sent successfully! I'll get back to you soon."}
          
        </Alert>
      </Snackbar>
  )
}

export default SnackBar