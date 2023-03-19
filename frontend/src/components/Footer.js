import { Box, Toolbar } from "@mui/material";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../pages-css/bar.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useTranslation } from 'react-i18next';


const theme = createTheme({
  palette: {
    neutral: {
      main: "#eeaa4c",
      contrastText: "#fff",
    },
  },
});

function Footer() {
  const { t, i18n } = useTranslation();


  return (
    <body>
    <div class="footer-clean">
        <footer>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-4 col-md-3 item">
                        <h3>{t('Shipping')}</h3>
                        <ul>
                            <li><a>{t('DHL')}</a></li>
                            <li><a>{t('Kerry Express')}</a></li>
                            <li><a>{t('J&T Express')}</a></li>
                            <li><a>{t('EMS')}</a></li>
                            <li><a>{t('Flash Express')}</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>{t('PAYMENT')}</h3>
                        <ul>
                            <li><a>{t('Banking Tranfer')}</a></li>
                            <li><a>{t('PromptPay')}</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>{t('Address')}</h3>
                        <ul>
                            <li><a>{t('Department of Computer Engineering, Faculty of Engineering, Prince of Songkla University')}</a></li>
                            <li><a>{t('15 Karnjanavanich Rd., HatYai, Songkhla')}</a></li>
                            <li><a>{t('Thailand 90110')}</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 item social">
                      <a href="https://www.facebook.com/ssrze.co.th"><i class="icon ion-social-facebook">
                      <Avatar src="facebook.png" />

                        </i></a><a href="https://www.instagram.com/pnt.ccx/"><i class="icon ion-social-twitter">
                        <Avatar src="instagram.png" />
                          
                          </i></a><a href="https://line.me/ti/p/WeEOd20UvC"><i class="icon ion-social-snapchat">
                          <Avatar src="line.png" />

                            </i></a><a href="https://discord.gg/5VCf9McJTZ"><i class="icon ion-social-instagram"></i>
                          <Avatar src="discord-logo-1-1.png" />
                            </a>
                            
                        <p class="copyright">{t('© 2023 D-WA ELECTRONICS.')}</p>
                        <p className="copyrighttwo">{t('All Rights Reserved.')}</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
</body>
  );
}

export default Footer;
