import React from "react";
import styled from '@emotion/styled';
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import Typography from "@mui/material/Typography";

const StyledWorkingHours = styled.ul`
  list-style-type: "none";
`;

const StyledListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
  align-items: flex-start;
  margin: 5px;
  gap: 5px;
`

const DateOfWeek = styled.span`
  flex-grow: 0;
  font-size: 0.9em;
`

const DailyHours = styled.span`
  flex-grow: 0;
  font-size: 0.9em;
`

const IconWrapper = styled.span`
  flex-grow: 0;
  font-size: 0.5em;
`

const data = [
  {dateOfWeek: 'Monday', icon:  <QueryBuilderIcon/> , hours: '24 hours'},
  {dateOfWeek: 'Tuesday', icon:  <QueryBuilderIcon/>, hours: '24 hours'},
  {dateOfWeek: 'Wednesday', icon:  <QueryBuilderIcon/>, hours: '24 hours'},
  {dateOfWeek: 'Thursday', icon:  <QueryBuilderIcon/>, hours: '24 hours'},
  {dateOfWeek: 'Friday', icon:  <QueryBuilderIcon/>, hours: '9am-5pm'},
  {dateOfWeek: 'Saturday', icon:  <QueryBuilderIcon/>, hours: 'Off'},
  {dateOfWeek: 'Sunday', icon:  <QueryBuilderIcon/>, hours: '24 hours'},
]

export const WorkingHours = ({ naming }) => {
  return (
    <>
      <Typography variant="h6" component="h6">
        {naming}
      </Typography>
      <br/>
      <StyledWorkingHours>
        {data.map(item => (
          <StyledListItem>
          <DateOfWeek>{item.dateOfWeek}</DateOfWeek>  
          <IconWrapper>{item.icon}</IconWrapper>
          <DailyHours>{item.hours}</DailyHours>
        </StyledListItem>
        ))}
      </StyledWorkingHours>
    </>
  );
}
