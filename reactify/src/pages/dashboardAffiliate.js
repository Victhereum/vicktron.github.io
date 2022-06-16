<!DOCTYPE html>
<html lang="en-US">
  <head>
    <!-- required meta -->
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- #favicon -->
    <link
      rel="shortcut icon"
      href="assets/images/favicon.png"
      type="image/x-icon"
    />
    <!-- #title -->
    <title>StakerCity &dash; Coin</title>
    <!-- #keywords -->
    <meta
      name="keywords"
      content="cryptocurrency, financial, financial company, stakecity, STAKER, crypto, coin, token, staking, "
    />
    <!-- #description -->
    <meta name="description" content="Crypto Investment With StakerCity" />
    <!-- #author -->
    <meta name="Victhereum" content="StakerCity Token and Ecosystem" />

    <!-- ==== css dependencies start ==== -->

    <!-- bootstrap five css -->
    <link
      rel="stylesheet"
      href="assets/vendors/bootstrap/css/bootstrap.min.css"
    />
    <!-- font awesome five css -->
    <!-- <link rel="stylesheet" href="assets/vendors/font-awesome/css/all.min.css" /> -->
    <script
      src="https://kit.fontawesome.com/6b08b0754c.js"
      crossorigin="anonymous"
    ></script>
    <!-- nice select css -->
    <link
      rel="stylesheet"
      href="assets/vendors/nice-select/css/nice-select.css"
    />
    <!-- magnific popup css -->
    <link
      rel="stylesheet"
      href="assets/vendors/magnific-popup/css/magnific-popup.css"
    />
    <!-- slick css -->
    <link rel="stylesheet" href="assets/vendors/slick/css/slick.css" />

    <!-- ==== css dependencies end ==== -->

    <!-- main css -->
    <link rel="stylesheet" href="assets/css/style.css" />
  </head>

  <body>
    <!-- ==== topbar start ==== -->
    <div class="topbar topbar__dashboard d-none d-lg-block">
      <div class="container">
        <div class="topbar__area">
          <div class="row">
            <div class="col-lg-8">
              <div class="topbar__left__content">
                <p class="tertiary">
                  <a href="mailto:hello@stakecity.finance">
                    <img src="assets/images/icons/mail.png" alt="Email Us" />
                  </a>
                  hello@stakecity.finance
                </p>
                <p class="tertiary">
                  <a href="tel:+17087362094">
                    <i class="fas fa-phone-alt"></i> </a
                  >+123456789009
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="topbar__right__content">
                <div class="social text-start text-lg-end">
                  <a href="javascript:void(0)">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ==== topbar end ==== -->

    <!-- ==== header start ==== -->
    <header class="header__dashboard header__alt">
      <nav class="navbar navbar-expand-xl">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            <img src="assets/images/logo.png" alt="Logo" class="logo" />
          </a>
          <div class="navbar__out order-2 order-xl-3">
            <div class="dashboard__nav">
              <div class="notifications">
                <a href="javascript:void(0)" class="icon__wrapper">
                  <i class="fas fa-bell"></i>
                  <span>03</span>
                </a>
                <div class="notification__wrapper">
                  <div class="notification__head">
                    <p class="text-center">3 New</p>
                    <p class="tertiary text-center">Notification</p>
                  </div>
                  <div class="notification__single">
                    <a href="dashboard.html#">
                      <h6>Welcome to StakerCity</h6>
                      <p class="tertiary">Succesfully Staked</p>
                    </a>
                    <p class="tertiary time">2 hours ago</p>
                  </div>
                </div>
              </div>
              <!-- <select class="language-select"> Multi Language Support
                            <option value="english">En</option>
                            <option value="australia">Aus</option>
                            <option value="brazil">Bra</option>
                            <option value="argentina">Arg</option>
                        </select> -->
              <div class="profile__meta">
                <a
                  href="javascript:void(0)"
                  class="profile__small"
                  id="identicon"
                >
                  <img src="assets/images/avatar.png" alt="Profile Image" />
                </a>
                <div class="profile__info">
                  <div class="profile__info__head">
                    <div id="identicon">
                      <!-- <img src="assets/images/avatar.png" alt="User" /> -->
                    </div>
                    <div class="profile__head__content">
                      <a href="settings.html">0x745b...678n</a>
                    </div>
                  </div>
                  <a href="dashboard.html#">Disconnect</a>
                </div>
              </div>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#primaryNav"
              aria-controls="primaryNav"
              aria-expanded="false"
              aria-label="Toggle Primary Nav"
            >
              <span class="icon-bar top-bar"></span>
              <span class="icon-bar middle-bar"></span>
              <span class="icon-bar bottom-bar"></span>
            </button>
          </div>
          <div
            class="collapse navbar-collapse justify-content-end order-3 order-xl-2"
            id="primaryNav"
          >
          </div>
        </div>
      </nav>
    </header>
    <!-- ==== #header end ==== -->

    <!-- ==== dashboard section start ==== -->
    <div class="dashboard section__space__bottom">
      <div class="container">
        <div class="dashboard__area">
          <div class="row">
            <div class="col-xxl-3">
              <div class="sidebar">
                <a href="javascript:void(0)" class="close__sidebar">
                  <i class="fas fa-times"></i>
                </a>
                <div class="sidenav__wrapper">
                  <ul>
                    <li>
                      <a href="dashboard.html">
                        <img
                          src="assets/images/icons/dashboard.png"
                          alt="dashboard"
                        />
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="deposit.html">
                        <img
                          src="assets/images/icons/deposit.png"
                          alt="Deposit"
                        />
                        Stake
                      </a>
                    </li>
                    <li>
                      <a href="withdrawal.html" class="sidenav__active">
                        <img
                          src="assets/images/icons/withdraw.png"
                          alt="Withdrawal"
                        />
                        Withdrawal
                      </a>
                    </li>
                    <li>
                      <a href="#" class="sidenav__active">
                        <img
                          src="assets/images/icons/nft.png"
                          alt="Withdrawal"
                        />
                        NFT(Coming Soon)
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assets/images/icons/lottery.png"
                          alt="Lottery"
                        />
                        Lottery<br />(Coming Soon)
                      </a>
                    </li>
                    <li>
                      <a href="dashboard-affiliate.html">
                        <img
                          src="assets/images/icons/affiliate.png"
                          alt="Affiliate Program"
                        />
                        Affiliate Program
                      </a>
                    </li>
                  </ul>
                  <hr />
                  <ul class="logout">
                    <li>
                      <a href="index.html">
                        <img
                          src="assets/images/icons/logout.png"
                          alt="Logout"
                        />
                        Disconnect
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xxl-9">
              <div class="main__content">
                <div class="collapse__sidebar">
                  <h4>Dashboard</h4>
                  <a href="javascript:void(0)" class="collapse__sidebar__btn">
                    <i class="fas fa-bars"></i>
                  </a>
                </div>
                <div class="dashboard__head">
                  <h5>Affiliate Program</h5>
                </div>
                <div class="affiliate__links">
                  <div class="row">
                    <div class="col-lg-8">
                      <div class="affiliate__link column__space">
                        <h5>Your Affiliate Link</h5>
                        <div class="copy">
                          <p id="copy-el">
                            https://stakecity.finance/?ref=0x6752hnfgftr345345345345345dfbmfg
                          </p>
                          <button id="el-copied" onclick="copyEl()" class="button"
                            >C<em class="fas fa-copy"></em></button
                          >
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="rank">
                        <h6>Total</h6>
                        <h5>150</h5>
                        <img
                          src="assets/images/dashboard/hands.png"
                          alt="Total_Referrals"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="level">
                  <div class="row">
                    <div class="col-md-6 col-lg-4">
                      <div class="level__single column__space">
                        <p>100</p>
                        <p class="tertiary">Accounts</p>
                        <hr />
                        <h5>$TAKER 5000</h5>
                        <p class="tertiary">Earned</p>
                        <a href="dashboard-affiliate.html#" class="button"
                          >Withdraw</a
                        >
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                      <div class="level__single column__space">
                        <p>150</p>
                        <p class="tertiary">Accounts</p>
                        <hr />
                        <h5>$TAKER</h5>
                        <p class="tertiary">Earned</p>
                        <a href="dashboard-affiliate.html#" class="button"
                          >Withdraw</a
                        >
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                      <div class="level__single">
                        <p>150</p>
                        <p class="tertiary">Accounts</p>
                        <hr />
                        <h5>$TAKER</h5>
                        <p class="tertiary">Earned</p>
                        <a href="dashboard-affiliate.html#" class="button"
                          >Withdraw</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="overlay"></div>
    <!-- ==== #dashboard section end ==== -->

    <!-- ==== footer section start ==== -->
    <footer class="footer">
      <div class="container">
        <div class="footer__nav">
          <a href="index.html" class="logo">
            <img src="assets/images/logo.png" alt="Logo" />
          </a>
          <ul>
            <li>
              <a href="about-us.html">About</a>
            </li>
            <li>
              <a href="investment-plan.html">Investment</a>
            </li>
            <li>
              <a href="contact-us.html">Contact Us</a>
            </li>
            <li>
              <a href="privacy-policy.html">Privacy Policy</a>
            </li>
            <li>
              <a href="terms-of-use.html">Terms of Use</a>
            </li>
          </ul>
        </div>
        <div class="footer__credit">
          <div class="row d-flex align-items-center">
            <div class="col-lg-8">
              <div class="footer__credit__left">
                <p class="text-center text-lg-start">
                  Copyright ©
                  <a href="dashboard-affiliate.html#0">StakerCity</a> | Designed
                  by
                  <a href="https://themeforest.net/user/uiaxis">Victhereum</a>
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="footer__credit__right">
                <div class="social text-center text-lg-end">
                  <a href="javascript:void(0)">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__animation">
        <img
          src="assets/images/footer/footer-left-illustration.png"
          alt="Footer Illustration"
          class="left__illustration"
        />
        <img
          src="assets/images/footer/footer-right-illustration.png"
          alt="Footer Illustration"
          class="right__illustration"
        />
      </div>
    </footer>
    <!-- ==== #footer section end ==== -->

    <!-- Scroll To Top -->
    <a href="javascript:void(0)" class="scrollToTop">
      <i class="fas fa-angle-double-up"></i>
    </a>

    <!-- ==== js dependencies start ==== -->

    <!-- jquery -->
    <script
      data-cfasync="false"
      src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
    ></script>
    <script src="assets/vendors/jquery/jquery.min.js"></script>
    <!-- bootstrap five js -->
    <script src="assets/vendors/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- nice select js -->
    <script src="assets/vendors/nice-select/js/jquery.nice-select.min.js"></script>
    <!-- magnific popup js -->
    <script src="assets/vendors/magnific-popup/js/jquery.magnific-popup.min.js"></script>
    <!-- slick js -->
    <script src="assets/vendors/slick/js/slick.js"></script>
    <!-- shuffle js -->
    <script src="assets/vendors/shuffle/shuffle.min.js"></script>

    <!-- ==== js dependencies end ==== -->

    <!-- plugin js -->
    <script src="assets/js/plugin.js"></script>
    <!-- main js -->
    <script src="assets/js/main.js"></script>
  </body>
</html>