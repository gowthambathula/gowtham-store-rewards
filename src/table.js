import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

// const rows = [
//   /*createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),*/
//   createData("Gingerbread", 356, 16.0, 49, 3.9)
// ];
var totalPoints = 0;
const getPoints = function(cost) {
  var rwPoints = 0;
  if (cost > 100) {
    rwPoints = 2 * (cost - 100) + 1 * (cost - 50);
    console.log(rwPoints);
  } else if (cost > 50) {
    rwPoints = 1 * (cost - 50);
  }
  totalPoints = totalPoints + rwPoints;
  return rwPoints;
};
function SimpleTable(props) {
  const { classes } = props;
  var rows = [];
  if (props.data.length > 0) {
    rows = props.data[0].perchases;
  } else {
    totalPoints = 0;
  }
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="left">Amount</TableCell>
            <TableCell align="left">Reward Point</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.cost}</TableCell>
              <TableCell align="left">{getPoints(row.cost)} </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow alight="right">
            total points:{"    "}
            {totalPoints}
          </TableRow>
        </TableFooter>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
