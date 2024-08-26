import './index.css';
import Employees from './components/Employees'
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid'

function App() {
  const [role, setRole] = useState('dev')
  const [employees, setEmployees] =useState(
    [
      {
        name : "Celab",
        role : "Developer",
        img  : "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
      },
      {
        name : "John",
        role : "Engineer",
        img  : "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg"
      },
      {
        name : "Mexa",
        role : "HR",
        img  : "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
      },
      {
        name : "Blade",
        role : "Admin",
        img  : "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg"
      },
      {
        name : "Erke",
        role : "Designer",
        img  : "https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg"
      },
      {
        name : "Collie",
        role : "Intern",
        img  : "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg"
      }
    ]
  )
  const showEmployees = true;
  
  return (
    <div className="App">
      {showEmployees ? 
      <>
      <input type ="text" onChange={(e)=>{
        console.log(e.target.value)
        setRole(e.target.value)
      }

      } />
      <div className='flex flex-wrap justify-center'>
        {employees.map((employee) => {
          console.log(uuidv4())
         return ( <Employees 
          key={uuidv4()}
          name={employee.name}
          role={employee.role}
          img={employee.img} 
          />
        )
        })}
       
      </div>
      
      </>
      : 
      <p> You cannot see the employees</p>
    }
      
    </div>
  );
}

export default App;
