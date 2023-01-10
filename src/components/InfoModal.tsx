import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Button,
  Typography,
  Stack,
} from '@mui/material';

type Props = {
  open: boolean;
  onClose: Function;
  data: any;
};

const InfoModal = (props: Props) => {
  return (
    <Dialog open={props.open}>
      <DialogTitle>Complete info</DialogTitle>
      <DialogContent>
        <Stack>
          <Typography variant="body1">Id: {props.data.id}</Typography>
          <Typography variant="body1">Name: {props.data.name}</Typography>
          <Typography variant="body1">Year: {props.data.year}</Typography>
          <Typography variant="body1">Color: {props.data.color}</Typography>
          <Typography variant="body1">
            Pantone value: {props.data.pantone_value}
          </Typography>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Box width="100%" sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="text" onClick={() => props.onClose()}>
            Close
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default InfoModal;
