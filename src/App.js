import styled from "styled-components"
import HomePage from "./Pages/HomePage/HomePage.js"
import SignupPage from "./Pages/SignupPage/SignupPage.js"
import SigninPage from "./Pages/SigninPage/SigninPage.js"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import React from "react"

export default function App() {
    return (
        <BrowserRouter>
           <NavContainer></NavContainer>
           <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={< SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
           </Routes>
           <FooterContainer></FooterContainer>
        </BrowserRouter>
    )
}

const NavContainer = styled.div`

`

const FooterContainer = styled.div`

`