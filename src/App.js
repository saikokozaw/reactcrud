import './index.css';
import Employees from './components/Employees'
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployees';

function App() {
  const [role, setRole] = useState('dev')
  const [employees, setEmployees] =useState(
    [
      {
        id : 1,
        name : "Celab",
        role : "Developer",
        img  : "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
      },
      {
        id : 2,
        name : "John",
        role : "Engineer",
        img  : "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg"
      },
      {
        id : 3,
        name : "Mexa",
        role : "HR",
        img  : "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
      },
      {
        id : 4,
        name : "Blade",
        role : "Admin",
        img  : "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg"
      },
      {
        id : 5,
        name : "Erke",
        role : "Designer",
        img  : "https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg"
      },
      {
        id : 6,
        name : "Collie",
        role : "Intern",
        img  : "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg"
      }
    ]
  )
  function updateEmployee(id, newName, newRole) { 
    const updatedEmployees = employees.map((employee) => {
      if ( id == employee.id) {
        return {...employee, name : newName, role : newRole}
      }
      return employee;
    });
    setEmployees(updatedEmployees)
   }

   function newEmployee(name, role, img){
    const newEmployee = {
      id : uuidv4(),
      name: name,
      role: role,
      img: img
    }
    setEmployees([...employees, newEmployee])
   }

  const showEmployees = true;
  
  return (
    <div className="App">
      {showEmployees ? 
      <>
      <div className="flex flex-wrap justify-center">
      {employees.map((employee) => {        const editEmployee = (
          <EditEmployee 
                id = {employee.id}
                name={employee.name} 
                role={employee.role} 
                updateEmployee ={updateEmployee}
                 />
        )
         return ( 
          <Employees 
                key={employee.id}
                id ={employee.id}
                name={employee.name}
                role={employee.role}
                img={employee.img} 
                editEmployee = {editEmployee}
            />
          );
        })}
       
      </div>
      <AddEmployee newEmployee = {newEmployee}/>
      
      </>
      : 
      <p> You cannot see the employees</p>
    }
      
    </div>
  );
}

export default App;
