import api from './client';

// Get All Employees
export const getAllEmployees = () => {
    return api
        .get(`EmployeeManagement`)
        .then(payload => {
            return payload;
        });
}

// Create new Employee
export const createNewEmployee = (payload) => {
    return api
        .post(`EmployeeManagement`, payload)
        .then(payload => {
            return payload;
        });
}