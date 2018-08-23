import React from 'react';
import PropTypes from 'prop-types';
import makeNavBarLink from './makeNavBarLink';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default class NavBar extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { tabIndex: null };
  }

  handleTabClick = (event, tabIndex) => {
    this.setState({ tabIndex });
  };

  handleTitleClick = () => {
    this.setState({})
  }

  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              aria-label="Menu"
              color="inherit"
              style={{ marginLeft: -12, marginRight: 20 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color="inherit"
              component={makeNavBarLink('/')}
              style={{ flex: '1' }}
              variant="title"
            >
              {this.props.title}
            </Typography>
            <Tabs
              centered
              onChange={this.handleTabClick}
              style={{ borderRight: 'solid 2px #ffffff', paddingRight: '4px' }}
              value={this.state.tabIndex}
            >
              <Tab component={makeNavBarLink('/blog')} label="Blog" />
              <Tab component={makeNavBarLink('/charts')} label="Charts" />
              <Tab component={makeNavBarLink('/contact')} label="Contact" />
            </Tabs>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
