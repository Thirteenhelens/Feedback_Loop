import './SuccessPage.css'
import Table from "@mui/material/Table";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
// Importing everything needed.

// ADD AXIOS GET HERE FOR THE TABLE
const restartForm = () => {
    console.log('Restarting');
}

function SuccessPage() {
  const feedback = useSelector((store) => store.feedback);
  return (
    <div>
      <div className="successTable">
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Feeling</TableCell>
                <TableCell align="left">Understanding</TableCell>
                <TableCell align="left">Support</TableCell>
                <TableCell align="left">Comments</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{feedback[0]}</TableCell>
                <TableCell align="left">{feedback[1]}</TableCell>
                <TableCell align="left">{feedback[2]}</TableCell>
                <TableCell align="left">{feedback[3]}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="restartFeedback">
        <h3>Thanks for your feedback!</h3>
        <Button onClick={restartForm} variant="contained">
          Leave new Feedback
        </Button>
      </div>
    </div>
  );
}

export default SuccessPage;
