import React from 'react';

import { 
    Nav,
    NavItem,
    NavLink,
    Badge
} from './../../../components';

const UsersLeftNav = () => (
    <React.Fragment>
        { /* START Left Nav  */}
        <div className="mb-4">
            <Nav pills vertical>
                <NavItem>
                    <NavLink href="#" active>
                        All Investors
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        Favorites
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        Latest Onboarding
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
        { /* END Left Nav  */}
        { /* START Left Nav  */}
        <div className="mb-4">
            <div className="small mb-3">
                Network
            </div>
            <Nav pills vertical>
                <NavItem>
                    <NavLink href="#" className="d-flex">
                        <i className="fa fa-fw fa-circle text-primary align-self-center mr-2"></i>
                        GLOBAL
                        <Badge color="secondary" pill className="ml-auto align-self-center">
                            1,032
                        </Badge>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="d-flex">
                        <i className="fa fa-fw fa-circle text-info align-self-center mr-2"></i>
                        EU Young
                        <Badge color="secondary" pill className="ml-auto align-self-center">
                            350
                        </Badge>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="d-flex">
                        <i className="fa fa-fw fa-circle text-success align-self-center mr-2"></i>
                        Large Accounts
                        <Badge color="secondary" pill className="ml-auto align-self-center">
                            204
                        </Badge>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="d-flex">
                        <i className="fa fa-fw fa-circle text-warning align-self-center mr-2"></i>
                        New Leads
                        <Badge color="secondary" pill className="ml-auto align-self-center">
                            450
                        </Badge>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        <i className="fa fa-fw fa-plus mr-2"></i>
                        Add New Network
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
        { /* END Left Nav  */}
    </React.Fragment>
)

export { UsersLeftNav };
