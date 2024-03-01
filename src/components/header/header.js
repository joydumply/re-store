import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const pages = [
	{
		link: '/',
		label: 'Home',
	},
	{
		link: '/cart',
		label: 'Cart',
	},
];
const Header = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<ThemeProvider theme={darkTheme}>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Stack></Stack>
						<Typography
							variant="h6"
							component="div"
							sx={{ marginRight: '20px' }}
						>
							Re-Store
						</Typography>
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							{pages.map((page, key) => (
								<Link
									key={key}
									to={page.link}
									className={styles.headerLink}
								>
									<Button
										sx={{
											my: 2,
											color: 'white',
											display: 'block',
										}}
									>
										{page.label}
									</Button>
								</Link>
							))}
						</Box>
					</Toolbar>
				</AppBar>
			</ThemeProvider>
		</Box>
	);
};
export default Header;
