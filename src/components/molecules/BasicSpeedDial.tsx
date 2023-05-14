import React, {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SpeedDial, { SpeedDialProps } from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction, { SpeedDialActionProps } from '@mui/material/SpeedDialAction';
import Email from '@mui/icons-material/Email';
import PhoneCallback from '@mui/icons-material/PhoneCallback';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ShareIcon from '@mui/icons-material/Share';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'fixed',
  // display: 'none',
  padding:' 6px 12px 9px 12px',
  right: '5px',
  bottom:'5px',
}));

const WrappedSpeedDial = (props: JSX.IntrinsicAttributes & SpeedDialActionProps & {href: string| undefined}) => <SpeedDialAction {...props} />;





export default function BasicSpeedDial() {

  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  const actions = [
    { icon: <Email />, name: 'Email', href:'mailto: abc@example.com' },
    { icon: <ShareIcon />, name: 'Share' },
    { icon: <PhoneCallback />, name: 'Call us', href:'tel:123-456-7890'},
    showButton?{ icon: <ArrowUpwardIcon />, name: 'Scroll up', href:'', onclick: scrollToTop}:null,
  ];

    const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 0) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };



  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', scrollToTop);
    };
  }, []);

  return (
    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
      <Box sx={{ position: 'absolute', right: 1, bottom: 2 }}>
        <StyledSpeedDial
          ariaLabel="speedial"
          icon={<SpeedDialIcon />}
          direction={"up"}
        >
          {actions.map((action) => (
            action&&<WrappedSpeedDial
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.onclick}
			        href={action.href}
            />
          ))}
        </StyledSpeedDial>
      </Box>
    </Box>
  );
}