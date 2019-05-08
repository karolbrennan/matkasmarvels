import React, { Component } from 'react';
import './main.js';
class App extends Component {
  render() {
    return (
      <div className="App">

        <div id="index-banner" class="parallax-container">
            <div class="section no-pad-bot">
                <div class="container">
                    <h1 class="header center white-text text-lighten-2"><img src="images/shadowed-logo.svg" alt="Matka's Marvels" /></h1>
                    <div class="row center">
                        <a href="#shop" data-scroll="shop" id="download-button" class="btn-large waves-effect waves-light pink white-text lighten-2">Shop Now</a>
                    </div>
                </div>
            </div>
            <div class="parallax"><img src="images/top-background1.jpg" alt="Unsplashed background img 1" /></div>
        </div>

        <div className="section">
            <div className="row">
                <div className="col s12 m4">
                    <div className="icon-block">
                        <h2 className="center pink-text text-lighten-2"><i className="material-icons">store</i></h2>
                        <h5 className="center grey-text text-darken-3">Matka's Marvels</h5>
                        <p className="light center"><strong>Matka</strong>: <em>Polish, noun</em>; "Mother".
                          <strong>Marvels</strong>: <em>English, noun</em>; "one that causes wonder or astonishment"; "<em>her talent is a marvel to behold</em>"
                        </p>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="icon-block">
                        <h2 className="center pink-text text-lighten-2"><i className="material-icons">content_cut</i></h2>
                        <h5 className="center grey-text text-darken-3">Sewing &amp; Crafts</h5>
                        <p className="light center">From handmade quilts to doilies and various little crafts, I have a little bit of everything. If you don't see something you like, contact me to get a quote for a custom craft!</p>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="icon-block">
                        <h2 className="center pink-text text-lighten-2"><i className="material-icons">shopping_cart</i></h2>
                        <h5 className="center grey-text text-darken-3">Checkout with paypal</h5>
                        <p className="light center">Buying one of my items is easy with my buy now buttons! These will direct you to paypal where you can send payment and be covered under buyer protection.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="parallax-container valign-wrapper">
            <div className="section no-pad-bot">
                <div className="container">
                    <div className="row center">
                        <h5 className="header col s12 light white-text">Hand-crafted beautiful quilts.</h5>
                        <p className="center light h5-description">
                            These lap quilts are made with 100% cotton fabric and are machine washable and dryable (cold wash and low tumble dry recommended). These quilts are hand tied, and have polyester blanket material instead of batting in the center to prevent bunching.
                        </p>
                    </div>
                </div>
            </div>
            <div className="parallax"><img src="images/quilts.jpg" alt="Quilt Background" /></div>
        </div>

        <div className="container" data-anchor="shop">
            <div className="section">

                <div className="row">
                    <div className="col s12 center"><br />
                        <h5>Current Inventory</h5>
                        <p>During checkout, please identify the quilt you are purchasing in the note field before you submit your order. Thank you!</p>
                        <ul className="products">
                            <li>
                                <span className="placeholder"><img src="images/quilts/IMG_7423_thumb.jpg" alt="product" /></span>
                                <strong>Green 4'x4' Quilt</strong>
                                <p className="price">$80</p>
                                <a href="http://paypal.me/matkasmarvels/80" className="buynow btn-flat waves-pink waves-effect waves-light pink white-text darken-1">Buy Now</a>
                            </li>
                            <li>
                                <span className="placeholder"><img src="images/quilts/IMG_7428_thumb.jpg" alt="product" /></span>
                                <strong>Yellow 5'x5' Quilt</strong>
                                <p className="price">$100</p>
                                <a href="http://paypal.me/matkasmarvels/100" className="buynow btn-flat waves-pink waves-effect waves-light pink white-text darken-1">Buy Now</a>
                            </li>
                            <li>
                                <span className="placeholder"><img src="images/quilts/IMG_7429_thumb.jpg" alt="product" /></span>
                                <strong>Blue 5'x5' Quilt</strong>
                                <p className="price">$100</p>
                                <a href="http://paypal.me/matkasmarvels/100" className="buynow btn-flat waves-pink waves-effect waves-light pink white-text darken-1">Buy Now</a>
                            </li>
                            <li>
                                <span className="placeholder"><img src="images/quilts/IMG_7434_thumb.jpg" alt="product" /></span>
                                <strong>Purple 5'x5' Quilt</strong>
                                <p className="price">$100</p>
                                <a href="http://paypal.me/matkasmarvels/100" className="buynow btn-flat waves-pink waves-effect waves-light pink white-text darken-1">Buy Now</a>
                            </li>
                            <li>
                                <span className="placeholder"><img src="images/quilts/IMG_7435_thumb.jpg" alt="product" /></span>
                                <strong>Pink 5'x5' Quilt</strong>
                                <p className="price">$100</p>
                                <a href="http://paypal.me/matkasmarvels/100" className="buynow btn-flat waves-pink waves-effect waves-light pink white-text darken-1">Buy Now</a>
                            </li>
                            <li>
                                <span className="placeholder"><img src="images/quilts/IMG_7440_thumb.jpg" alt="product" /></span>
                                <strong>Black 5'x5' Musical Quilt</strong>
                                <p className="price">$100</p>
                                <a href="http://paypal.me/matkasmarvels/100" className="buynow btn-flat waves-pink waves-effect waves-light pink white-text darken-1">Buy Now</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

        <div className="parallax-container valign-wrapper">
            <div className="section no-pad-bot">
                <div className="container">
                    <div className="row center">
                        <h5 className="header col s12 light white-text">Don't see something you like?<br /> Contact me to get a quote on a custom product <strong><em>made just for you!</em></strong></h5>
                    </div>
                </div>
            </div>
            <div className="parallax"><img src="images/background6.jpg" alt="Unsplashed background img 3" /></div>
        </div>

        <footer class="page-footer grey darken-4">
            <div class="container">
                <div class="row">
                    <div class="col l6 s12">
                        <h5 class="white-text">About Matka's Marvels</h5>
                        <p class="grey-text text-lighten-4">Sewing and needlework is a love and talent that has been passed down from generation to generation in my family. It's my pleasure to share this passion with others through beautifully hand-made quilts, doilies and other crafts.</p>
                    </div>
                    <div class="col l3 s12">
                        <h5 class="white-text">&nbsp;</h5>
                    </div>
                    <div class="col l3 s12">
                        <h5 class="white-text">Connect</h5>
                        <ul>
                            <li><a class="white-text" href="https://www.facebook.com/Matkas-Marvels">Facebook</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright black">
                <div class="container">
                    <a href="/">&copy; 2019 Matka's Marvels</a>
                </div>
            </div>
        </footer>
      </div>
    );
  }
}

export default App;
