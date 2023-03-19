import React from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function BasicSelect() {
  const { t, i18n } = useTranslation();
  const [age, setAge] = React.useState('EN');

  const handleChange = (event) => {
    setAge(event.target.value);
    window.localStorage.setItem('lang', event.target.value);
  };
  useEffect(() => {
    let lang = window.localStorage.getItem('lang')
    if (lang) {
      i18n.changeLanguage(lang.toLowerCase())
      setAge(lang)
    }
  }, [])
  return (
    
      <Box sx={{ minWidth:20 }}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 20 }}>
            <Select
              //labelId="demo-simple-select-standard-label"
              //id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              //label="Age"
            >
              <MenuItem
                value='TH'
                onClick={() => i18n.changeLanguage('th')}>
                <Button variant="contained">TH</Button>
              </MenuItem>

              <MenuItem
                value='EN'
                onClick={() => i18n.changeLanguage('en')}>
                <Button variant="contained">EN</Button>
              </MenuItem>
            </Select>
      </FormControl>
    </Box>
  )
}