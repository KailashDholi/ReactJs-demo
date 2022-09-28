import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


export default function SideBar(props) {
  return (
    <div>
       {/* Main Sidebar Container */}
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <Link to="/" className="brand-link">
        <img src={props.logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
        <span className="brand-text font-weight-light">{props.title}</span>
    </Link>
    {/* Sidebar */}
    <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
            <img src={props.logo} className="img-circle elevation-2" alt="User " />
        </div>
        <div className="info">
            <Link to="/" className="d-block">Alexander Pierce</Link>
        </div>
        </div>
        {/* SidebarSearch Form */}
        <div className="form-inline">
        <div className="input-group" data-widget="sidebar-search">
            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
            <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
            </button>
            </div>
        </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {/* Add icons to the links using the .nav-icon class
            with font-awesome or any other icon font library */}
            <li className="nav-item menu-open">
            <Link to="/" className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                Dashboard
                <i className="right fas fa-angle-left" />
                </p>
            </Link>
            <ul className="nav nav-treeview">
                <li className="nav-item">
                <Link to="/MenuA" className="nav-link active">
                    <i className="far fa-circle nav-icon" />
                    <p>Menu A</p>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/MenuB" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Menu B</p>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/MenuC" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Menu C</p>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/MenuD" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Menu D</p>
                </Link>
                </li>
                
            </ul>

           
            </li>
            <li className="nav-header">Orders</li>
            <li className="nav-item">
            <Link to="/Sales-Order" className="nav-link">
                <i className="nav-icon far fa-circle text-danger" />
                <p className="text">Sales Order</p> 
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/Purchase-Order" className="nav-link">
                <i className="nav-icon far fa-circle text-warning" />
                <p>Purchase Order</p>
            </Link>
            </li>
          
        </ul>
        </nav>
        {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
    </aside>

    </div>
  )
}

SideBar.prototype = {
    title : PropTypes.string.isRequired,
    logo : PropTypes.isRequired
}