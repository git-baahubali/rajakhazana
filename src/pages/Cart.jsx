import React from 'react'
import { SignedOut, SignedIn,SignInButton } from "@clerk/clerk-react"

function Cart() {
  return (
    <div>
      <h1>Cart</h1>
      <SignedIn> zero items in your cart</SignedIn>
      <SignedOut> Please Sign in to show your Cart
      Here is the link to<SignInButton> Sign In</SignInButton>
      </SignedOut>
      
      </div>
  )
}

export default Cart