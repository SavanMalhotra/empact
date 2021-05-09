import './App.css';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';

import React, { useState } from 'react';
import SubmitButton from './SubmitButton';
import { CSSTransition } from 'react-transition-group';

function App() {
  return (
    <div>
      <Navbar>
        <NavItem icon={<PlusIcon />}/>
        <NavItem icon={<CaretIcon />}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>
      <Introduction/>
      <SubmitButton />
      </div>
  );
} 

function Introduction() {
  return (
    <div className="HomePage">
      <h1>Empact</h1>
      <h2>A modern way to keep up with education and the daily tasks of being a university student. Enter some notes and click one of the buttons below to autogenerate summarizes study notes!</h2>
    </div>
  );
}

function HeaderText(props) {
  return (
    <div>
      <h1 className="header_text">{props.text}</h1>
    </div>
  );
}

function MainArea(props) {
  return (
    <textarea id="w3review" name="w3review" rows="4" cols="50" readOnly={props.readonly} value={props.value} placeholder={props.placeholder}></textarea>
  );
}

function DropdownMenu() {

  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}

        <span className="icon-right">{props.rightIcon}</span>
      </a>
    )
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition 
      in={activeMenu === 'main'} 
      unmountOnExit 
      timeout={500}
      classNames="menu-primary"
      onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>My Courses</DropdownItem>
          <DropdownItem
            leftIcon={<PlusIcon />}
            rightIcon={<PlusIcon />}
            goToMenu="settings"
            >
              Calculus
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition 
      in={activeMenu === 'settings'} 
      unmountOnExit 
      timeout={500}
      classNames="menu-secondary"
      >
        <div className="menu">
          <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main" />
          <DropdownItem>Integrals</DropdownItem>
          <DropdownItem>Vectors</DropdownItem>
          <DropdownItem>Taylor Polynomials</DropdownItem>
          <DropdownItem>Sequences</DropdownItem>
          <DropdownItem>Differential Equations</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> { props.children }</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

export default App;