import styled from "styled-components"
import HomePage from "./Pages/HomePage/HomePage.js"
import SignupPage from "./Pages/SignupPage/SignupPage.js"
import SigninPage from "./Pages/SigninPage/SigninPage.js"
import HashtagPage from "./Pages/HashtagPage/HashtagPage.js"
import UserPage from "./Pages/UserPage/UserPage.js"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import React from "react"

export default function App() {
    return (
        <BrowserRouter>
            <NavContainer></NavContainer>
            <Routes>
                <Route path="/" element={<SigninPage />} />
                <Route path="/signup" element={< SignupPage />} />
                <Route path="/timeline" element={<HomePage />} />
                <Route path="/hashtag/:hashtag" element={<HashtagPage />} />
                <Route path="/user/:id" element={<UserPage />} />
            </Routes>
        </BrowserRouter>
    )
}

const NavContainer = styled.div`

`
