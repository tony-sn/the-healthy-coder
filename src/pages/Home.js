import React from "react"

function ProgrammerQuote() {
  return (
    <>
      <h3 className="ui header">Bill Sempf</h3>
      <p>
        "QA Engineer walks into a bar. Orders a beer. Orders 0 beers. Orders
        999999999 beers. Orders a lizard. Orders -1 beers. Orders a
        sfdeljknesv."
      </p>
    </>
  )
}

function Home() {
  return (
    <div className="home container">
      {" "}
      <h1 className="title homeTitle">The Healthy Coder</h1>
      <div className="ui vertical stripe segment">
        <div className="ui middle aligned stackable grid container">
          <div className="row">
            <div className="eight wide column">
              <ProgrammerQuote />
              <h3 className="ui header">We Help Coders and Programmers</h3>
              <p>
                We can give you superpowers to believe in things that you never
                thought possible. Let us monitor your health and empower your
                needs...through pure data analytics.
              </p>
              <h3 className="ui header">We Make Bananas That Can Dance</h3>
              <p>
                Yes that's right, you thought it was the stuff of dreams, but
                even bananas can be bioengineered.
              </p>
            </div>
            <div className="six wide right floated column">
              <img
                src="https://www.mybakingaddiction.com/wp-content/uploads/2015/12/slice-of-sugar-cookie-cheesecake-735x1103.jpg.webp"
                className="ui large bordered rounded image"
              />
            </div>
          </div>
          <div className="row">
            <div className="center aligned column">
              <a className="ui primary button">Check Them Out</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
