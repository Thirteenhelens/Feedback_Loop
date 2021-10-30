import './SuccessPage.css'
import Table from "@mui/material/Table";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";

function SuccessPage() {
  const feedback = useSelector((store) => store.feedback);
  return (
    <div>
      <div className='successTable'>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Feeling</TableCell>
                <TableCell align="right">Understanding</TableCell>
                <TableCell align="right">Support</TableCell>
                <TableCell align="right">Comments</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell align="right">{feedback[0]}</TableCell>
                <TableCell align="right">{feedback[1]}</TableCell>
                <TableCell align="right">{feedback[2]}</TableCell>
                <TableCell align="right">{feedback[3]}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className='restartFeedback'>
        <h3>Thanks For your feedback!</h3>
        <Button type="submit" variant="contained">
          Leave new Feedback
        </Button>
      </div>
    </div>
  );
}

export default SuccessPage;
