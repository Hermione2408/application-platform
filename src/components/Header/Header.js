import React from "react";
import DropdownWithChips from "../DropdownWithChips/DropdownWithChips";
import Dropdown from "../Dropdown/Dropdown";
import "./Header.css";
import {
  setRole,
  setLocation,
  setNoOfEmployees,
  setTechStack,setMinExperience,setCompanyName,setMinBasePay

} from "../../utils/jobSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from '@mui/material/TextField';

const Header = () => {
  let roles = ["frontend", "ios", "android", "backend", "tech lead"]
  let location = ["delhi ncr", "mumbai", "remote", "chennai", "bangalore"]
  let noOfEmployee = ["1-10", "51-100", "101-200", "201-500", "500+"];
  let experience = ["3 - 6", "0 - Unlimited", "2 - 11", "5 - 6", "1 - 8", "8 - 9", "7 - 15", "3 - 12", "1 - 5", "6 - 11"]
  const minBasePay = [
    "0L",
    "10L",
    "20L",
    "30L",
    "40L",
    "50L",
    "60L",
    "70L"
];
const techStacks = ["Python", "Java", "GoLang", "Ruby/Rails", "C++", "Kotlin", "Django", "C#", "GraphQL"]

  const dispatch = useDispatch();
  const [rolesOptions, setRolesOptions] = useState(roles);
  const [locationsOptions, setLocationsOptions] = useState(location);
  const [noOfEmployeeOptions, setNoOfEmploeeOptions] = useState(noOfEmployee);
  const [techStackOptions, setTechStackOptions] = useState(techStacks);
  const [experienceOptions, setExperienceOptions] = useState(experience);
  // const [companyOptions, setCompanyOptions] = useState(noOfEmployee);
  const [minBasePayOptions, setMinBasePayOptions] = useState(minBasePay);

  const [company, setCompany] = useState("");

const handleChange = (event) => {
  setCompany(event.target.value);
  dispatch(setCompanyName(event.target.value));
};

  const handleChangeRoles = (values) => {
    dispatch(setRole(values));
  };
  const updateRoleOptions = (values) => {
    setRolesOptions(values);
  };
  const handleChangeLocations = (values) => {
    dispatch(setLocation(values));
  };
  const updateLocationOptions = (values) => {
    setLocationsOptions(values);
  };
  const handleChangeNoEmployee = (values) => {
    dispatch(setNoOfEmployees(values));
  };
  const updateNoEmployeeOptions = (values) => {
    setNoOfEmploeeOptions(values);
  };

  const handleChangeTechStack = (values) => {
    dispatch(setTechStack(values));
  };
  const updateTechStackOptions = (values) => {
    setTechStackOptions(values);
  };
  const handleChangeExperience = (values) => {
    dispatch(setMinExperience(values));
  };
  const updateExperienceOptions = (values) => {
    setExperienceOptions(values);
  };
  const handleChangeCompanyOptions = (values) => {
    dispatch(setCompanyName(values));
  };
  // const updateCompanyOptions = (values) => {
  //   setCompanyOptions(values);
  // };
  const handleChangeMinBasePay = (values) => {
    dispatch(setMinBasePay(values));
  };
  const updateMinBasePayOptions= (values) => {
    setMinBasePayOptions(values);
  };

  return (
    <div className="header">
      <DropdownWithChips
        allOptions={rolesOptions}
        onSelect={(values) => handleChangeRoles(values)}
        label={"Role"}
        updateOptions={(values) => updateRoleOptions(values)}
        originalOptions={roles}
      />
      <DropdownWithChips
        allOptions={locationsOptions}
        onSelect={(values) => handleChangeLocations(values)}
        label={"Location"}
        updateOptions={(values) => updateLocationOptions(values)}
        originalOptions={location}
      />
      <DropdownWithChips
        allOptions={noOfEmployeeOptions}
        onSelect={(values) => handleChangeNoEmployee(values)}
        label={"No of Employee"}
        updateOptions={(values) => updateNoEmployeeOptions(values)}
        originalOptions={noOfEmployee}
      />
      <DropdownWithChips
        allOptions={techStackOptions}
        onSelect={(values) => handleChangeTechStack(values)}
        label={"Tech Stack"}
        updateOptions={(values) => updateTechStackOptions(values)}
        originalOptions={techStacks}
      />
      <Dropdown allOptions={minBasePayOptions}
        onSelect={(values) => handleChangeMinBasePay(values)}
        label={"Min Base Pay"}
        updateOptions={(values) => updateMinBasePayOptions(values)}
        originalOptions={minBasePay}/>
              <Dropdown allOptions={experienceOptions}
        onSelect={(values) => handleChangeExperience(values)}
        label={"Experience"}
        updateOptions={(values) => updateMinBasePayOptions(values)}
        originalOptions={experience}/>
      <TextField
            label="Search Company Name"
            variant="outlined"
            className="dropdownForm"
            value={company}
            onChange={handleChange}
        />  {/* <Dropdown /> */}
    </div>
  );
};

export default Header;
