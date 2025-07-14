export const metadata = {
 title: "Register Now | Future PropTech Summit Dubai",
  description: "Secure your spot at Future PropTech Summit 2025 in Dubai. Register now to join global PropTech leaders, startups, and investors shaping real estate innovation.",
}

// 'use client'

import { Suspense } from 'react'
import RegisterPage from '../components/register/registerPage'

export default function Register() {
  return (
    <div>
      <div className="pt-10">
        <Suspense fallback={<div>Loading...</div>}>
          <RegisterPage />
        </Suspense>
      </div>
    </div>
  )
}
