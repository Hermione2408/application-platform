import React from 'react'
import DropdownWithChips from '../DropdownWithChips/DropdownWithChips'
import Dropdown from '../Dropdown/Dropdown'
import "./Header.css"
import { setRole,setLocation,setNoOfEmployees,setTechStack } from '../../utils/jobSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
const Header = () => {
  let roles = ["Backend","Frontend","Fullstack","Data Science"]
  let location = []
  let noOfEmployee = []
  let techStacks=[]
  const dispatch = useDispatch()
  const [rolesOptions,setRolesOptions] = useState(roles)
  const [locationsOptions,setLocationsOptions] = useState(roles)
  const [noOfEmployeeOptions,setNoOfEmploeeOptions] = useState(roles)
  const [techStackOptions,setTechStackOptions] = useState(roles)

  const handleChangeRoles =(values) =>{
    dispatch(setRole(values))
  }
  const updateRoleOptions =(values) =>{
    setRolesOptions(values)
  }  
  const handleChangeLocations =(values) =>{
    dispatch(setLocation(values))
  }
  const updateLocationOptions =(values) =>{
    setLocationsOptions(values)
  }  
  const handleChangeNoEmployee=(values) =>{
    dispatch(setNoOfEmployees(values))
  }
  const updateNoEmployeeOptions =(values) =>{
    setNoOfEmploeeOptions(values)
  } 

  const handleChangeTechStack=(values) =>{
    dispatch(setTechStack(values))
  }
  const updateTechStackOptions =(values) =>{
    setTechStackOptions(values)
  } 
  
  return (
     
    <div className='header'><DropdownWithChips allOptions={rolesOptions} onSelect={(values)=>handleChangeRoles(values)} label={"Role"} updateOptions={(values)=>updateRoleOptions(values)} originalOptions={roles}  />
    <DropdownWithChips allOptions={locationsOptions} onSelect={(values)=>handleChangeLocations(values)} label={"Location"} updateOptions={(values)=>updateLocationOptions(values)} originalOptions={location} />
    <DropdownWithChips allOptions={noOfEmployeeOptions} onSelect={(values)=>handleChangeNoEmployee(values)} label={"No of Employee"} updateOptions={(values)=>updateNoEmployeeOptions(values)} originalOptions={noOfEmployee} />
    <DropdownWithChips allOptions={techStackOptions} onSelect={(values)=>handleChangeTechStack(values)} label={"Tech Stack"} updateOptions={(values)=>updateTechStackOptions(values)} originalOptions={techStacks} />
    < Dropdown/>
    < Dropdown/>

    </div>
  )
}

export default Header