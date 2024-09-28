import React from 'react'
import { Link, useLocation } from 'react-router-dom'

interface CustomNavLinkProps {
  to: string
  end?: boolean
  children: React.ReactNode
  className?: string
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({ to, end = false, children, className = '', ...props }) => {
  const location = useLocation()

  const isActive = end ? location.pathname === to : location.pathname.startsWith(to)

  return (
    <Link
      to={to}
      className={`${isActive ? 'active' : ''} ${className}`}
      {...props} 
    >
      {children}
    </Link>
  );
};

export default CustomNavLink
