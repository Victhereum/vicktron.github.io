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
                <a href="javascript:void(0)" class="profile__small">
                  <img src="assets/images/avatar.png" alt="Profile Image" />
                </a>
                <div class="profile__info">
                  <div class="profile__info__head">
                    <div>
                      <img src="assets/images/avatar.png" alt="User" />
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
                      <a href="dashboard-lottery.html">
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
                <div class="open__deposit">
                  <h5>WITHDRAW REWARDS</h5>
                </div>
                <form
                  action="withdrawal.html#"
                  method="post"
                  id="withdrawalForm"
                  class="actionForm"
                >
                  <fieldset class="group">
                    <p class="legen legen__active">Earned</p>
                    <div
                      class="payment__system__checkbox__wrapper payment__system__method"
                    >
                      <div class="row">
                        <div class="col-md-6 col-lg-3">
                          <div
                            class="payment__system__checkbox__single earned-edi-card"
                          >
                            <label for="withEdwiin" class="check_wrap">
                              <input
                                type="checkbox"
                                required="required"
                                class="pay__system__check"
                                id="withStakerCity"
                              />
                              <span class="checkmark"></span>
                            </label>
                            <div class="pay__system">
                              <div class="payment__checkbox__inner">
                                <div class="payment__system__icon">
                                  <img
                                    src="assets/images/favicon.png"
                                    alt="Currency"
                                  />
                                </div>
                                <div class="payment__system__icon__info">
                                  <h6>EDI</h6>
                                  <p class="tertiary earned-edi">50000</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset class="group">
                    <p class="legen">Withdraw</p>
                    <div
                      class="payment__system__checkbox__wrapper payment__system__plan"
                    >
                      <div class="row d-flex align-items-end">
                        <div class="col-lg-8 column__space">
                          <label class="secondary content__space--extra--small"
                            >Amount</label
                          >
                          <input
                            type="number"
                            name="con__code"
                            id="conCode"
                            required="required"
                            placeholder="I want to withdraw"
                          />
                        </div>
                        <div class="col-lg-4">
                          <a class="button" id="max-edi">Max</a>
                        </div>
                      </div>
                      <p class="tertiary">
                        Rewards are paid every second and you can withdraw this
                        anytime 😜
                      </p>
                      <div class="plan__cta text-start">
                        <button
                          class="button primary withdraw-edi-btn"
                          type="submit"
                        >
                          Withdraw Funds
                        </button>
                      </div>
                    </div>
                  </fieldset>
                </form>
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
        <div class="newsletter__area section__space__bottom">
          <div
            class="newsletter bg__img"
            data-background="./assets/images/footer/cta-bg.png"
          >
            <div class="newsletter__header cta__space">
              <h3 class="text-center content__space">
                Don't Miss Out On Fantastic News
              </h3>
              <p class="text-center">
                Subscribe to our newsletter and be the first to receive news
              </p>
            </div>
            <form action="withdrawal.html#" method="post" class="subscribeForm">
              <input
                type="email"
                name="subscribe"
                id="subscribeField"
                required="required"
                placeholder="Enter your email"
              />
              <button type="submit">
                <img
                  src="assets/images/icons/right-arrow.png"
                  alt="Send Mail"
                />
              </button>
            </form>
          </div>
        </div>
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
                  Copyright © <a href="withdrawal.html#0">StakerCity</a> |
                  Designed by
                  <a href="">Victhereum</a>
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

    <!-- begin::Withdrawal JS -->
    <script src="assets/js/withdrawal.js"></script>
    <!-- end::Withdrawal JS -->
  </body>
</html>