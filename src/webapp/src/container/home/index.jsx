import { useEffect, useState } from "react";
import { getAllEmployees, createNewEmployee } from "../../services/api";
import {
    Grid, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, TextField, Button, Typography,Card
} from "@mui/material";

function Home() {
    const [employees, setEmployees] = useState([]);
    const [newEmployee, setNewEmployee] = useState({
        employeeId: "",
        name: "",
        address: "",
        city: "",
        department: "",
        phoneNumber: "",
        email: "",
    });

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await getAllEmployees();
            setEmployees(response);
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (e) => {
        setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createNewEmployee(newEmployee);
            fetchEmployees();
            setNewEmployee({employeeId:"", name: "", address: "", city: "", department: "", phoneNumber: "", email: "" });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Grid container spacing={1.5} sx={{ height: "100vh", overflow: "hidden" }}>
        <Grid item xs={12} md={4} sx={{ height: "100%", overflowY: "auto" }}>
        <Typography variant="h5" gutterBottom>
            Employee Management System
        </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} sx={{ padding: "15px" }}>
                    {["name", "address", "city", "department", "phoneNumber", "email"].map((field) => (
                        <Grid item xs={12} key={field}>
                            <TextField
                                fullWidth label={field.charAt(0).toUpperCase() + field.slice(1)}
                                name={field} value={newEmployee[field]} onChange={handleChange} required
                                InputLabelProps={{ style: { color: "white" } }}
                                sx={{ input: { color: "white", borderBottom: "1px solid white" } }}
                            />
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Add Employee
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    
        <Grid item xs={12} md={8} sx={{ height: "100%" }}>

            <TableContainer sx={{ maxHeight: "calc(100vh - 100px)", overflowY: "auto", width: "100%" }}>
                <Table stickyHeader sx={{ tableLayout: "fixed", width: "100%" }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ color: "white", backgroundColor: "#333" }}><b>Name</b></TableCell>
                            <TableCell sx={{ color: "white", backgroundColor: "#333" }}><b>City</b></TableCell>
                            <TableCell sx={{ color: "white", backgroundColor: "#333" }}><b>Department</b></TableCell>
                            <TableCell sx={{ color: "white", backgroundColor: "#333" }}><b>Phone</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employees.map((emp) => (
                            <TableRow key={emp.id} sx={{
                                '&:hover': {
                                    backgroundColor: '#C0C5CE',
                                }
                            }}>
                                <TableCell sx={{ color: "white" }}>{emp.name}</TableCell>
                                <TableCell sx={{ color: "white" }}>{emp.city}</TableCell>
                                <TableCell sx={{ color: "white" }}>{emp.department}</TableCell>
                                <TableCell sx={{ color: "white" }}>{emp.phoneNumber}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    </Grid>    
    );
}

export default Home;
