import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
    return (
        <>
            <Link to='/active'>Active</Link>
            <Link to='/complete'>Complete</Link>
            <Link to='/delete'>Delete</Link>
        </>
    )
}