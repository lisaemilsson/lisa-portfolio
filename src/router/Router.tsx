import React from 'react'
import { HomePage, ProjectPage, AboutPage, ContactPage, ProjectsPage } from '../pages'
import { Route, Routes } from 'react-router-dom'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/projects/:slug" element={<ProjectPage />}></Route>
      <Route path="/About" element={<AboutPage />}></Route>
      <Route path="/Contact" element={<ContactPage />}></Route>
      <Route path="/Projects" element={<ProjectsPage />}></Route>
    </Routes>
  )
}

export default Router