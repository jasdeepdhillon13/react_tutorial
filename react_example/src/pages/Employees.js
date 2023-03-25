import '../index.css';
import Employee from '../components/Employee';
import {useState} from 'react'; 
import {v4 as uuidv4} from 'uuid'; 
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';
import Header from '../components/Headers';

function Employees() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState (
    [
    {  
      id: 1, 
      name: 'ike',  
      role: 'intern', 
      img: "https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg",
    }, 
    { 
      id: 2, 
      name: 'Simon',  
      role:'Senior Developer', 
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    }, 
    { 
      id: 3, 
      name: 'Street',  
      role:'Manager', 
      img: "https://images.pexels.com/photos/2663803/pexels-photo-2663803.jpeg",
    }, 
    { 
      id: 4, 
      name: 'Nitkin',  
      role:'Lead', 
      img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
    }, 
    { 
      id: 5, 
      name: 'Daniel',  
      role:'Developer', 
      img: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg",
    }, 
    { 
      id: 6, 
      name: 'Ariel',  
      role:'Developer', 
      img: "https://images.pexels.com/photos/3252762/pexels-photo-3252762.jpeg",
    }, 
    { 
      id: 7, 
      name: 'Red',  
      role:'Lead 2', 
      img: "https://images.pexels.com/photos/2982149/pexels-photo-2982149.jpeg",
    },      
    ]); 

    function updateEmployee(id, newName, newRole){
      const updatedEmployees = employees.map((employee) => {
        if(id == employee.id){
          return { ...employee, name: newName, role:newRole}
        }
        return employee; 
      }); 
      setEmployees(updatedEmployees); 
    }

    function newEmployee(name, role, img){
      const newEmployee = {
        id: uuidv4(), 
        name: name, 
        role: role, 
        img: img, 
      }; 
      setEmployees([...employees, newEmployee]); 
    }

  return (
    <div className="App bg-gray-300 min-h-screen">
      <header className="App-header">
       <div className='flex flex-wrap justify-center'>
            {employees.map((employee) => {
              const editEmployee =  <EditEmployee
              id={employee.id} 
              name={employee.name}
              role={employee.role}
              updateEmployee={updateEmployee}
            />
              return (
              <Employee 
                key = {employee.id} 
                id = {employee.id}
                name={employee.name} 
                role={employee.role} 
                img={employee.img}
                editEmployee={editEmployee}
                />
              )
            })}
        </div>
        <AddEmployee newEmployee={newEmployee}/>
       </header>
    </div>
  );
}

export default Employees;
