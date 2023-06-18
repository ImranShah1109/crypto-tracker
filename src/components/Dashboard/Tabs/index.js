import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ThemeProvider, createTheme } from '@mui/material';
import Grid from '../Grid';
import './styles.css'
import List from '../List';

export default function TabsComponent({coins}) {
  const [value, setValue] = useState('grid');

  const style = {
    color : 'var(--white)',
    width : '50vw',
    fontSize : '1.2rem',
    fontWeight : 600,
    fontFamily : 'Inter',
    textTransform : 'capitalize',
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette : {
        primary : {
            main : '#3a80e9'
        }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
          <TabList onChange={handleChange} variant='fullWidth'>
            <Tab label="Grid" value="grid" sx={style}/>
            <Tab label="List" value="list" sx={style}/>
          </TabList>
        <TabPanel value="grid">
            <div className='grid-flex'>
                {coins.map((coin,i)=>{
                    return (
                        <Grid 
                          coin={coin} 
                          key={i}
                          delay={((i + 5) % 5) * 0.1}
                        />
                    )
                })}
            </div>
        </TabPanel>
        <TabPanel value="list">
          <table className='list-table'>
                {coins.map((coin,i)=>{
                    return (
                      <List 
                        coin={coin} 
                        key={i}
                        delay={(i % 10) * 0.1}
                      />
                    )
                })}
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}