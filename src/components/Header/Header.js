import React from 'react'
import DropdownWithChips from '../DropdownWithChips/DropdownWithChips'
import Dropdown from '../Dropdown/Dropdown'
import "./Header.css"
import { setRole } from '../../utils/jobSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
const Header = () => {
  const dispatch = useDispatch()
  const [rolesOptions,setRolesOptions] = useState(["Backend","frontend","fullstack","datascience"])
  const handleChangeRoles =(values) =>{
    dispatch(setRole(values))
  }
  const updateOptions =(values) =>{
    setRolesOptions(values)
  }  
  return (
     
    <div className='header'><DropdownWithChips allOptions={rolesOptions} onSelect={(values)=>handleChangeRoles(values)} label={"Role"} updateOptions={(values)=>updateOptions(values)} />
    <DropdownWithChips allOptions={rolesOptions} onSelect={(values)=>handleChangeRoles(values)} label={"Role"} updateOptions={(values)=>updateOptions(values)} />
    <DropdownWithChips allOptions={rolesOptions} onSelect={(values)=>handleChangeRoles(values)} label={"Role"} updateOptions={(values)=>updateOptions(values)} />
    <DropdownWithChips allOptions={rolesOptions} onSelect={(values)=>handleChangeRoles(values)} label={"Role"} updateOptions={(values)=>updateOptions(values)} />
    < Dropdown/>
    < Dropdown/>

    </div>
  )
}

export default Header