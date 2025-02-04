import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./Header.css";

// Icons
import { FiMenu } from "react-icons/fi";
// import { Logo } from "../../assets/Icons";
import { IoMdClose } from "react-icons/io";

// Context
import AppContext from "../../Context/AppContext";

const links = [
	{
		id: 1,
		name: "الرئيسية",
		to: "/",
	},
	{
		id: 3,
		name: "من نحن",
		to: "/about-us",
	},
	{
		id: 2,
		name: "خدماتنا",
		to: "/services",
	},
	{
		id: 5,
		name: "المدونة",
		to: "/blog",
	},

	{
		id: 4,
		name: "تواصل معنا",
		to: "/contact-us",
	},
];

const Header = () => {
	const navigate = useNavigate();
	const postsContext = useContext(AppContext);
	const { setPostCategoryId } = postsContext;

	let location = useLocation();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isShownMenu, setIsShownMenu] = useState(false);

	if (location.pathname === "/packagePage") {
		document.querySelector("body").style.overflow = "hidden";
	} else {
		document.querySelector("body").style.overflow = "auto";
	}

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (
			document
				.querySelector(".header .navbar .navbar-collapse")
				.classList.contains("show")
		) {
			document.querySelector(".header .navbar .show").classList.remove("show");
			document
				.querySelector(".header .navbar button")
				.classList.add("collapsed");
		}
	}, [location.pathname]);

	useEffect(() => {
		if (isShownMenu) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isShownMenu]);

	// navigate to auth/login by default
	const navigateToMerchantRegister = () => {
		window.location.href = "https://store.atlbha.com/auth/login";
	};

	return (
		<>
			<header
				className={`header ${
					isScrolled || location.pathname !== "/" ? "scrolled" : ""
				}`}>
				<div className='container'>
					<Navbar expand='lg'>
						<Navbar.Brand>
							{/*<Logo
								onClick={() => navigate("/")}
								style={{ cursor: "pointer" }}
							/>*/}
							<p className='logo main-logo'> الشعار</p>
						</Navbar.Brand>

						<Navbar.Toggle
							aria-controls='navbarScroll'
							onClick={() => setIsShownMenu(true)}>
							<FiMenu />
						</Navbar.Toggle>
						<Navbar.Collapse id='navbarScroll' className=''>
							<Nav className='m-auto my-2 my-lg-0' navbarScroll>
								{links.map((link) => (
									<NavLink
										key={link.id}
										to={link.to}
										onClick={() => {
											setPostCategoryId(null);
										}}>
										{link.name}
									</NavLink>
								))}
							</Nav>

							<div
								className={`close-nav-bar ${isShownMenu ? "" : "show"}`}></div>
							<div className='d-flex justify-content-center align-items-center gap-2'>
								<button
									className='register-btn outline-btn'
									onClick={() => navigate("/packages")}>
									الباقات
								</button>
								<button
									onClick={() => {
										navigateToMerchantRegister();
									}}
									className='register-btn '>
									التسجيل
								</button>
							</div>
							<div className='close-nav-bar-icon'>
								<Navbar.Toggle
									aria-controls='navbarScroll'
									onClick={() => setIsShownMenu(false)}>
									<IoMdClose />
								</Navbar.Toggle>
							</div>
						</Navbar.Collapse>
					</Navbar>
				</div>
			</header>
		</>
	);
};

export default Header;
