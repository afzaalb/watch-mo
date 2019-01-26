import React from "react";
import Link from "react-router-dom/Link";
import HeaderNavigation from "./HeaderNavigation";
import { Home } from 'react-bytesize-icons';

const Header = () => (
    <header className="w-100">
        <div className="container-fluid navbar p-0 justify-content-start align-items-center">
            <div className="logo gradient">
                <Link to="/" className="d-flex align-items-center text-lowercase bold py-3 pl-3" title="WatchMo.com">
                    <Home
                        className="align-middle"
                        width="28"
                        height="28"
                        strokeWidth="2"
                    />
                    <span className="px-3">WatchMo</span>
                </Link>
            </div>
            <HeaderNavigation />
        </div>
    </header>
);

export default Header;
